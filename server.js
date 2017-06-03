var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");

var app = express();

var Comments = require("./models/Comments.js");
var Articles = require("./models/Articles.js");

app.use(express.static('public'));

//routes
app.use('/', routes);

// Launch App on port 3000
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Running on port: ' + port);
});