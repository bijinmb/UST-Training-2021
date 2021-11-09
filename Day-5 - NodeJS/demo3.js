
var http = require("http");
var calc = require('./mod-sum');

const arr1 = ["FIAT", "Porche", "Ford", "Volkswagen"];
const arr2 = ["Linea", "Boxter", "Mustang", "Polo"];

http.createServer(function(req,res){

  res.writeHead(200, {"content-type": "text/html"});
  res.write("<br> Sum of two numbers: " + calc.dosum(10, 20));
  res.write("<br> Sum of two Arrays: " + calc.doAarrSum(arr1, arr2));
  res.end();

}).listen(8080);