const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Email = new Schema({
    email:String,
},schemaOptions)

module.exports = mongoose.model('Email', Email)



