const mongoose = require('mongoose');
// const newAuthor = require('./newAuthor');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    
    authorname: String,
    author:{type:ObjectId,ref:"NewAuthor"},
   price:Number,
   ratings:Number,
   publisher:{type:ObjectId,ref:"NewPublisher"}


}, { timestamps: true });

module.exports = mongoose.model('newbook', bookSchema)
