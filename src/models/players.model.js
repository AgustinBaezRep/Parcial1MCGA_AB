const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: String,
        required: true
    },
    quality:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('PM', playerSchema)