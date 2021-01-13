const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Contact = new Schema({
   image:String,
   prefix: String,
   firstName:String,
   middleName:String,
   lastName:String,
   company:[{type:Schema.Types.ObjectId, ref: "Company"}],
    title:String,
    emailAddress:Array,
    phone:[],
    website:[],
    address:Array,
    customFields:Array,
    billingPaymentProfile:String,
    billingCustomRate:String,
    billingClientId:String,
    userId:{type:Schema.Types.ObjectId, ref:"User"},
    trustAmount:String
  


},schemaOptions)

module.exports = mongoose.model('Contacts', Contact)



