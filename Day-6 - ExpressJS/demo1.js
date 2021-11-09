var express = require("express");
var app = express();

app.get('/getdemo/', (req, res) => {
    res.send("This is GET method")
});


app.post('/postdemo/', function (req, res) {
    res.send("This is POST method")
})

app.use(function(err,req,res){

    console.error(err);
    res.status(500).send("something broke!");
})

app.use((req, res, next) =>{
    res.status(404).send("<P>Page not found on the server.");
})

var server = app.listen(8080, () => {

    var host = server.address().host;
    var port = server.address().port;
    console.log("Express JS app listening at http://%s:%s", host, port);

});