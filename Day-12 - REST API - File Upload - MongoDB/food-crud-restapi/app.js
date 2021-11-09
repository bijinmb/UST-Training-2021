const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

var snacksRouter = require('./routes/snacks');
var uploadRouter = require('./routes/upload');

app.use('/snacks', snacksRouter);
app.use('/upload', uploadRouter);

// parse application/json


mongoose.connect("mongodb://localhost:27017/inventory",() =>{ console.log("Snacks & Image Upload Application - Connected to MongoDB"); });

app.listen(3000); 