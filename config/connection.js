var mongoose = require('mongoose');
mongoose.connect('mongodb:///localhost:27017/servertest');
var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose success!");
});

module.exports = db;