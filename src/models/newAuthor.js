const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const authorSchema = new mongoose.Schema( {
    authorName: String,
    Age:Number,
    Adderess:String,


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', authorSchema)
