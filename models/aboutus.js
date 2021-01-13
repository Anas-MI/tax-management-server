const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const AboutUs = new Schema({
    title: String,
    image: String,
    description: String
},schemaOptions)

module.exports = mongoose.model('AboutUs', AboutUs)



