const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = require("../models/upload");


router.post("/",upload.single('image'), (req, res) => {
    try {
        const file = req.file;
        res.json({ message: "Upload Successful!" });
        console.log(file);
    } catch (err) {
        res.json({ message: err.toString() });
        console.log({ message: err });
    }
});

module.exports = router;