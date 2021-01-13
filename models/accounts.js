const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Account = new Schema({
    type:String,
    accountName:String,
    accountHolder:String,
    institution:String,
    domicileBranch:String,
    accountNumber:String,
    transitNumber:String,
    swiftCode:String,
    currency:String,
    openingBalance:String,
    balance:String,
    defaultAccount:{type:Boolean, default: false},
  userId:{type:Schema.Types.ObjectId, ref:"User"},
contactId:{type:Schema.Types.ObjectId, ref:"Contacts"}

},schemaOptions)

module.exports = mongoose.model('Account', Account)