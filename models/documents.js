

const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'receivedDate', updatedAt: 'lastEdit' },
  };
const Documents = new Schema({
    name:String,
    matter:{type:Schema.Types.ObjectId, ref:"Matters"},
    category:String,
    document:String,
    userId:{type:Schema.Types.ObjectId, ref:"User"},
    contact:{type:Schema.Types.ObjectId, ref:"Contacts"},
    type:String
},schemaOptions)

module.exports = mongoose.model('Documents', Documents)