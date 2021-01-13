const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Blogs = new Schema({
    title:String,
    description:String,
    shortDescription:String,
    author:String,
    image:String


},schemaOptions)

module.exports = mongoose.model('Blogs', Blogs)