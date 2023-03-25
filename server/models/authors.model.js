const mongoose = require('mongoose')
const AuthoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        minlength:[3,'name must be 3 characters long']
    }
}, {timestamps: true})
module.exports = mongoose.model('author', AuthoSchema)