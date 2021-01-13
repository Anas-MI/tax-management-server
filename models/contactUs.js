const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ContactUs = new Schema({
  name:String,
  number: String,
  email:String,
  description:String
})

module.exports = mongoose.model('ContactUs', ContactUs)