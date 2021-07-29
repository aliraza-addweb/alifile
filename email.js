var express = require("express");
 
 var app = express();
 var nodemailer = require('nodemailer');
 

 app.get("/", function (request, response){
     response.sendFile(__dirname+"/email.html");
 });
 
 app.get("/getemail", function (request, response){
     var firstname = request.query.firstname;
 
     if (firstname != "") {
         response.send("Your email address is " + firstname + "@gmail.com");
     } else {
         response.send("Please provide us first name");
     }
 });
 let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alirazakhunt110@gmail.com',
        pass: 'khunt78692'
    }
});
  
let mailDetails = {
    from: 'alirazakhunt110@gmail.com',
    to: 'mumtazkhunt110@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});
 

 app.listen(8080);
 
 console.log("Something awesome to happen at http://localhost:8080");