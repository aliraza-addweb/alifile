const express = require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require('mysql');
//const port = 3002;

const db = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password: "Aliraza@123",
        database: "CRUDDataBase"
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}))

app.get('/api/get', (req, res) =>
{
    const sqlSelect = "SELECT * FROM movies_reviews ";
    db.query(sqlSelect, (err, result) =>
    {
        res.send(result);
    });
})

/*app.get('/api/get', (req, res) =>
{
    const sqlSelect = "SELECT * FROM contact_us ";
    db.query(sqlSelect, (err, result) =>
    {
        res.send(result);
    });
})*/


app.post("/api/insert", (req, res) =>
{
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    const moviewRating = req.body.moviewRating;
    //const today = req.body.today;
    //console.log(movieName);
    //console.log(movieReview);
    //console.log('moviewRating final', moviewRating);
    //console.log('Date', today);
    const sqlInsert = "INSERT INTO movies_reviews (movieName, movieReview, moviewRating, Date) VALUES (?,?,?,?)";
    db.query(sqlInsert, [movieName, movieReview, moviewRating, today], (err, result) =>
    {
        console.log(result);
    });
});

app.post("/api/insert1", (req, res) =>
{
    const contactname = req.body.contactname;
    const emailid = req.body.emailid;
    const reason = req.body.reason;
    const today = req.body.today;
    console.log(contactname);
    console.log(emailid);
    console.log('reason of contact', reason);
    console.log('Date', today);
    const sqlInsert = "INSERT INTO contact_us (contactname, emailid, reason, Date) VALUES (?,?,?,?)";
    db.query(sqlInsert, [contactname, emailid, reason, today], (err, result) =>
    {
        if(err){
            console.log("erroe here",err);
        }
        else{

            console.log(result);
        }
    });
});


app.post("/api/insert", (req, res) =>
{
    const offername = req.body.offername;
    const offercode = req.body.offercode;
    //const image = req.body.image;
    //const today = req.body.today;
    //console.log(offername);
    //console.log(offercode);
    //console.log('image', image);
    //console.log('Date', today);
    const sqlInsert = "INSERT INTO offer_details (offername, offercode, Date) VALUES (?,?,?)";
    db.query(sqlInsert, [offername, offercode], (err, result) =>
    {
        console.log(result);
    });
});


app.delete('/api/delete/:movieName', (req, res) =>
{
    const name = req.params.movieName;
    const sqlDelete = "DELETE FROM movies_reviews WHERE movieName = ?";
    db.query(sqlDelete, name,  (err, result) =>
    {
        if (err) console.log(err);
    });
});

app.put('/api/update', (req, res) =>
{
    const name = req.body.movieName;
    const review = req.body.movieReview;
    const sqlUpdate = "UPDATE movies_reviews SET movieReview = ? WHERE movieName = ?";
    db.query(sqlUpdate, [review, name],  (err, result) =>
    {
        if (err) console.log(err);
    });
});

app.get("/", (req, res) =>
{
    // const sqlInsert = "INSERT INTO movies_reviews (movieName, movieReview) VALUES ('inception', 'good movie');"
    // db.query(sqlInsert, (err, result) =>{
       
    // });
    res.send("hello world"); 
});
app.listen(3007, () =>{
    console.log("runnig on port 3001");
});