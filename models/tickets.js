const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const ticket = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    issue:String,
    document:String,
    attachment:String,
    url:String,
userId:{type:Schema.Types.ObjectId, ref:"User"}

},schemaOptions)

module.exports = mongoose.model('Ticket', ticket)



