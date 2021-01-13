const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const SaveBills = new Schema({
  
  userId:{type:Schema.Types.ObjectId, ref:"User"},
  lastSeen:{type:Date, default:Date.now},
  status:String,
  dueDate:{type:Date, default:Date.now},
  invoiceId:{type:String},
  client:{type:Schema.Types.ObjectId,ref:"Contacts"},
  matter:{type: Schema.Types.ObjectId, ref:"Matters"},
  issueDate:{type:Date, default:Date.now},
  balance:String,
  from:Object,
  to:Object

},schemaOptions)

module.exports = mongoose.model('SaveBills', SaveBills)