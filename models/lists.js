const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Lists = new Schema({
    name:String,
    decription:String,
    practiseArea:String,
    tasks:[{type:Schema.Types.ObjectId, ref:"Tasks"}],
    userId:{type:Schema.Types.ObjectId, ref:"User"}
},schemaOptions)

module.exports = mongoose.model('Lists', Lists)



