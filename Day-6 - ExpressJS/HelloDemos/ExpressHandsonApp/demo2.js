var express = require("express");
var app = express();

var f1 = (req, res, next) => {
    console.log("Hello from A.");
    next();
}

var f2 = (req, res, next) => {
    console.log("Hello from B.");
    next();
}

var f3 = (req, res, next) => {
    console.log("Hello from C.");
    next();
}

var f4 = (req, res) => {
    console.log("Hello from D.");
    
}
app.get('/demoarr/', [f1, f2, f3, f4]);
app.listen(8080)


