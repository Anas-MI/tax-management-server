const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Subscription = new Schema({
  
  userId:{type:Schema.Types.ObjectId, ref:"User"},
subscriptionRequested:String,
requestGranted:String


},schemaOptions)

module.exports = mongoose.model('Subscription', Subscription)