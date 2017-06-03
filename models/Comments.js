var mongoose = require("mongoose");
var db = require("../config/connection");
var Schema = mongoose.Schema;
// make a note!
var NoteSchema = new Schema({
    // in stringy form
    noteText: {
        type: String
    }
});
var Note = mongoose.model("Note", NoteSchema);
module.exports = Note;