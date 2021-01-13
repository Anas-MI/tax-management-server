const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Footer = new Schema({
    logo:String,
    description:String,
    list:Array,
    list2:Array,
    address:String,
    socialMedia:Array,
    banner:Array,
    header:Array,
    footer:String,
    headerLogo:String, 
    faq:Array,
    subscriptionTitle : String,
    featuresTitle : String,
    blogTitle : String,
},schemaOptions)

module.exports = mongoose.model('Footer', Footer)



