var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'archive-books'
});

con.connect(function (err) {
    if (err) throw err;
})
console.log("Connected!");

//const app = require('./routes');
var port = 6000;
var server = app.listen(port, function (req, res) {
    console.log("Listening at " + port);
});

