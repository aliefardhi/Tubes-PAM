const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
    title:String,
    content:String,
})
mongoose.model("tubes", NoteSchema)