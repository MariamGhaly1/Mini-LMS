const Joi = require('joi');
const express = require('express');    //express is a function
const app = express();     //returns an object
//it has the (get, post, put, delete) methods

const courses = [
    {id: 1, name: 'c1'},
    {id: 2, name: 'c2'},
    {id: 3, name: 'c3'},

];



app.use(express.json());    // adding a piece of middleware

//a callback function get called when have our function 
//(here get) called
app.get('/', (req, res)=>{
    res.send('<h1>Hello World<h1>');
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.post('/api/courses', (req, res)=> {
    const schema = { // a schema defines the shape of our object
        name: Joi.string().min(3).required()
    };

    const result = validateCourse(req.body);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }


    // if (!req.body.name || req.body.name.length < 3){
    //     //400 Bad Request
    //     res.status(400).send('Name is required and should be minimum 3 characters.');
    //     return;  
    // }


    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res)=>{
    //look up the course
    //if not exsiting, return 404
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course)  //404
        return res.status(404).send('The course with the given ID was not found');

    //validate
    //if invalid, return 400 - Bad Request
    const result = validateCourse(req.body);


    /**** object destructure syntax
     * const {error} = validateCourse(req.body);
     *  then use error instead of result.error  *****/


    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update 
    //return the updated course
    course.name = req.body.name;
    res.send(course);

});

app.get('/api/courses/:id', (req, res)=>{
    //res.send(req.params.id);
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    //const then let(can be set later) then var

    if(!course)  //404
        return res.status(404).send('The course with the given ID was not found');
    res.send(course);

});

app.get('/api/posts/:year/:month', (req, res)=>{
    res.send(req.params);
    /* and try to "query string parameters" ((they are optional))
    ?sortBy=name    (this will be stored)
    res.send(req.query);*/
});

app.delete('/api/courses/:id', (req, res)=>{
    //lookup the course
    //not existing, return 404
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course)  //404
       return  res.status(404).send('The course with the given ID was not found');

    //delete
    const index = course.indexOf(course);
    courses.splice(index,1);

    //return the course
    res.send(course);

});

//port (environment var) its value is set from outside this app
const port = process.env.PORT || 3000 ; 
app.listen(3000, ()=> console.log(`Listening on port ${port}...`));
// we can (export)/or(set) PORT= ....  on terminal to try it

function validateCourse(course){
    const schema = { // a schema defines the shape of our object
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);

}