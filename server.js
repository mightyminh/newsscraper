var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var hbs = require('express-handlebars');
var routes = require('./routes/routes');
var app = express();

app.engine('hbs', hbs({ defaultLayout: 'main', extname: 'hbs', partialsDir: [__dirname + '/views/partials'] }));
app.set('view engine', 'hbs');

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));

//routes
app.use('/', routes);

// Launch App on port 3000
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Running on port: ' + port);
});