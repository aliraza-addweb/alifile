var fs = require('fs');
var express = require("express");

var app = express();
app.listen(5013);

console.log("Something awesome to happen at http://localhost:5013");


app.get("/", function (request, response){
    response.sendFile(__dirname+"/new.json");
});
app.get("/getsum", function (request, response){
fs.readFile("./new.json", "utf8", (err , jsonString)=>
{
    if (err) {
        console.log("File read failed:", err);
        return;
      }
      console.log("File data:", jsonString);
}
);
});
