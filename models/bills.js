const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Bills = new Schema({
  client:{type:Schema.Types.ObjectId, ref:"Contacts"},
  source:String,
  paymentDate:Date,
  destination:{type:Schema.Types.ObjectId, ref:"Account"},
  ReferenceId:String,
  billUrl:String,
  userId:{type:Schema.Types.ObjectId, ref:"User"},
  matter:{type:Schema.Types.ObjectId, ref:"Matters"},


},schemaOptions)

module.exports = mongoose.model('Bills', Bills)