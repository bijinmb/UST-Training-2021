var e = require("express");
var app = e();



app.get('/getdemo', (req,res) => {

        res.send("Function callback via GET method demo.")
})

app.post("/postdemo", (req, res) => {

    res.send("Function callback via POST method demo.")
})

var server = app.listen(8080, () => {
    var host = server.address().host;
    var port = server.address().port;
    console.log("Express JS Application Running at http://%s:%s", host,port);
})