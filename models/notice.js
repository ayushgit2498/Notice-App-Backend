const mongoose = require('mongoose');
const date1 = require('date-and-time');

var noticeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    nbody:{
        type:String,
        required:true,
    },
    timestamp:{
        type:String,
    },
    date1:{
        type:Date
    },
    filelink:{
        type:String
    },
    tid:{
        type:String,
        required:true
    },
    tname:{
        type:String
    },
    validity:{
        type:String,
        required:true
    },
    batches:[String],
    scope:{
        type:String,
        required:true
    },
    category:{
        type:String
    }


});




var Notice = new mongoose.model('Notice',noticeSchema);

module.exports = { Notice };