var express = require("express");
var app = express();

app.get('/test/', function (req, res, next) {
    res.send("Hello from A.");
    next();
},
    (req, res, next) => {
    console.log("Hello from C.");
});
app.listen(8080)


