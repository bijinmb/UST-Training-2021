const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

var customerRouter = require('./routes/customer');

app.use('/customers', customerRouter);

// parse application/json


mongoose.connect("mongodb://localhost:27017/inventory",() =>{ console.log("Connected to DB"); });

app.listen(3000); 