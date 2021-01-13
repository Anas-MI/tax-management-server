const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Logs = new Schema({
    before:String,
    after:String,
  userId:{type:Schema.Types.ObjectId, ref:"User"},
matterId:{type:Schema.Types.ObjectId, ref:"Matters"},
accountId:{type:Schema.Types.ObjectId, ref:"Account"}
},schemaOptions)

module.exports = mongoose.model('Logs', Logs)