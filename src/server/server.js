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


app.post('/add', (req, res) => {
    let data = {tag: req.body.tag, BookId: req.body.BookId, title: req.body.title, author: req.body.author, price: req.body.price, picture: req.body.picture};
    let sql = "insert into books set ?";

    con.query(sql, data, function(err, result) {
        if (err)
        {
            return console.error(err.message);
        }
        else
        {
            console.log('inserted Row(s):', result.affectedRows);
        }
    });
});

app.post('/delete', (req, res) => {
    let data = req.body.BookId;
    let sql = "DELETE FROM books WHERE BookId = ?";

    con.query(sql, data, function(err, result) {
        if (err)
        {
            return console.error(err.message);
        }
        else
        {
            console.log('Deleted Row(s):', result.affectedRows);
        }
    });
});
