const express = require("express");


const app = express();
app.use(express.json());

var studentsRouter = require('./routes/students');
var examsRouter = require('./routes/exams');
var coursesRouter = require('./routes/courses');

app.use('/students', studentsRouter);
app.use('/exams', examsRouter);
app.use('/courses', coursesRouter);

app.listen(3000); 