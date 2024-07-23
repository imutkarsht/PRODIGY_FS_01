const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String,
        unique: true
    },
    content:{
        required: true,
        type: String,
    }

}, { timestamps: true } )

const note = mongoose.model('note', noteSchema)
module.exports = note