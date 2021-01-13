const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Matters = new Schema({
   client:{type: Schema.Types.ObjectId, ref:"Contacts"},
   matterDescription: String,
   practiseArea:String,
   status:String,
   clientReferenceNumber:String,
   openDate:String,
   closeDate:String, 
   pendingDate:String,
   relatedContacts:[{contact:{type:Schema.Types.ObjectId, ref:"Contacts"}, relationship:String, billThis: Boolean}],
   customFields:Object, 
   billingRate:String,
   billingType:String,
task:[{type:Schema.Types.ObjectId, ref:"Tasks"}],
userId:{type:Schema.Types.ObjectId, ref:"User"},
documents:[{type:Schema.Types.ObjectId, ref:"Documents"}]

},schemaOptions)

module.exports = mongoose.model('Matters', Matters)



