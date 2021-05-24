const mongoose = require('mongoose')



const videoSchema = mongoose.Schema({
    title : {type :String},
    url : {type :String},
    description : {type :String},
    createdDate :{
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('video', videoSchema);