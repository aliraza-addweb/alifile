var express = require('express');
var fs = require('fs');
const { check, validationResult } = require('express-validator');
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const path = require('path')
var app = express();
var port = 3010;

app.set("view engine", "ejs");
app.use(express.json());

app.use(fileUpload())

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());

app.use(express.static(__dirname + '/views'));

app.get('', (req, res) => {
    res.render('index')
});

app.get('/index', (req, res) => {
    res.render('index')
});

app.post('/index', urlencodedParser, [
    check('fname')
        .isAlpha('en-US', { ignore: '\s' }).withMessage('Name must be alphabetic.')
        .notEmpty()
        .exists()
        .isLength({ min: 3 }).withMessage('This username must me 3+ characters long'),

    check('mobile')
        .isNumeric()
        .isLength({ min: 10, max: 10 })
        .withMessage('Phone number is not valid'),

    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Email is not valid'),

], (req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        const alert = errors.array()
        res.render('index', {
            alert
        })
    }
    else {
        var data1 = req.body.fname;
        var data2 = req.body.mobile;
        var data3 = req.body.email;
        var obj = [];
        obj.push({ name: data1, email: data3, mobile: data2 });
        var json = JSON.stringify(obj);
        fs.appendFile('myjsonfile.json', json, function (err) {
            if (err) {
                throw err;
            } else {
                console.log('complete');
                fs.readFile('myjsonfile.json', function (err, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    return res.end();
                });
            }
        });
    }
});

app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`);
});