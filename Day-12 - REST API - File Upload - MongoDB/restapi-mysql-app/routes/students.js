const express = require("express");
const router = express.Router();
const alldetails = require("../models/models");



/* Router to LIST an student details to the students Table in the MySQL database. */
router.get('/listalldetails', async (req, res) => {

    const students = await alldetails.students.findAll({
        include: [alldetails.exams, alldetails.courses]
    })

    console.log("All Student(s):", JSON.stringify(students, null, 2));

    res.send({ "All Student(s)": students }); // true


});
/* Router to LIST an student along with their exam details */
router.get('/list', async (req, res) => {

    const students = await alldetails.students.findAll()

    console.log("All Student(s):", JSON.stringify(students, null, 2));

    res.send({ "All Student(s)": students }); // true


});

module.exports = router;


 




