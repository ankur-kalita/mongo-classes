const express = require('express');
const app = express();

app.use(express.json());

let courses = [ 
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

// GET endpoint to retrieve all courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

// POST endpoint to add a new course
app.post('/courses', (req, res) => {
    //const newCourse = req.body;
    
    // if (!newCourse.id || !newCourse.name) {
    //     return res.status(400).send('Course must have an id and a name');
    // }

    // courses.push(newCourse);
    // res.status(201).json(newCourse);
    console.log(req.body);
    let singleCourse = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(singleCourse);
    res.send(courses);
});

// PUT endpoint to update an existing course by id
app.put('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const updatedCourse = req.body;

    const courseIndex = courses.findIndex(course => course.id === courseId);

    if (courseIndex === -1) {
        return res.status(404).send('Course not found');
    }

    if (!updatedCourse.name) {
        return res.status(400).send('Course name is required');
    }

    courses[courseIndex].name = updatedCourse.name;
    res.send(courses);
});

// DELETE endpoint to delete an existing course by id
app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);

    const courseIndex = courses.findIndex(course => course.id === courseId);

    if (courseIndex === -1) {
        return res.status(404).send('Course not found');
    }

    const deletedCourse = courses.splice(courseIndex, 1);
    res.send(courses);
});

// Start the server
app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
