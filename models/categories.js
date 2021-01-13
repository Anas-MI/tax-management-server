const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Categories = new Schema({
    name:String,
    documents:[{type:Schema.Types.ObjectId, ref:"Documents"}],
    userId:{type:Schema.Types.ObjectId, ref:"User"},

},schemaOptions)

module.exports = mongoose.model('Categories', Categories)



