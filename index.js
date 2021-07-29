var express = require("express");

var app = express();
app.listen(5011);

console.log("Something awesome to happen at http://localhost:5011");


app.get("/", function (request, response){
response.sendFile(__dirname+"/textbox.html");
});
app.get("/getsum", function (request, response){
var num1 = parseInt(request.query.Num1);
var num2 = parseInt(request.query.Num2);

var sum = num1 + num2;
response.send("sum:"+sum)

});

