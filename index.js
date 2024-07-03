const express = require('express');
const app = express();

app.use(express.json());

let courses = [ 
    {
    id: 1,
    name: 'course1'
    } , {
        id: 2,
        name: 'course2'
    } , {
        id: 3,
        name: 'course3'
    } , ];

    app.get('/courses',(req,res) => {
        res.json(courses)
    });

    app.post('/courses', (req, res) => {
        const newCourse = req.body;
    
        if (!newCourse.id || !newCourse.name) {
            res.status(400).send('Course must have an id and a name');
        }
    
        courses.push(newCourse);
        res.status(201).json(newCourse);
    });


    app.listen(3000,() => {
        console.log('Listening on port 3000...')
    })