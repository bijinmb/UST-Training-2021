const express = require("express");
const router = express.Router();
const alldetails = require("../models/models");



/* Router to LIST an course details to the courses Table in the MySQL database. */
router.get('/list', async (req, res) => {

    const courses = await alldetails.courses.findAll()

    //console.log(emp.every(emp => emp instanceof Employee)); // true
    console.log("All Courses(s):", JSON.stringify(courses, null, 2));

    res.send({ "All Courses(s)": courses }); // true


});

module.exports = router;







