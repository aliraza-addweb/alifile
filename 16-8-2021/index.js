var express = require("express");
var app = express();
var path = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "Aliraza@123",
database: "mydb"
});
con.connect(function(err)
{
    if(err) throw err;
    console.log("connected");
});
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/submit', function (req, res) {

var name = req.body.name;
var email = req.body.email;
var description = req.body.description;
res.write('You sent the name "' + req.body.name + '".\n');
res.write('You sent the email "' + req.body.email + '".\n');
res.write('You sent the phone "' + req.body.description + '".\n');

con.connect(function (err) {
// if (err) throw err;
var sql = "INSERT INTO form (name, email,description) VALUES ('" + name + "', '" + email + "','" + description + "')";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("1 record inserted");
res.end();
});
});
})
app.listen(3000);
console.log("Running at Port 3000");