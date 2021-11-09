var express = require("express");
var app = express();

app.route('/book').get((req, res) => {
    req.send("Hello from A.");
    
}).post(
    function(req, res){
        req.send("Hello from B.");
    }

)
app.listen(8080)


