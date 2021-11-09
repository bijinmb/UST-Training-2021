const express = require("express");
const router = express.Router();
const alldetails = require("../models/models");



/* Router to LIST an exam details to the exams Table in the MySQL database. */
router.get('/list', async (req, res) => {

    const exams = await alldetails.exams.findAll()

    
    console.log("All Exam(s):", JSON.stringify(exams, null, 2));

    res.send({ "All Exam(s)": exams }); // true


});

module.exports = router;







