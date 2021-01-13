const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')

const Features = new Schema({
    title:String,
    description:String,
    logo:String
})

module.exports = mongoose.model('Features', Features)