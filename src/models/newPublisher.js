const mongoose = require('mongoose');
//const publisherId = mongoose.Schema.Types.publisherId

const publisherSchema = new mongoose.Schema( {
    name: String,
    
   
    headQuater:String
    
    


}, { timestamps: true });


module.exports = mongoose.model('Librarypublisher', publisherSchema)
