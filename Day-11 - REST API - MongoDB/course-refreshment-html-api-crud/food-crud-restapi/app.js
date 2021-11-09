const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

var foodsRouter = require('./routes/foods');

app.use('/foods', foodsRouter);

// parse application/json


mongoose.connect("mongodb://localhost:27017/inventory",() =>{ console.log("Food Application - Connected to MongoDB"); });

app.listen(3000); 