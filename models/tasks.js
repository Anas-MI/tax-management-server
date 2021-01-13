const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Tasks = new Schema({
    taskName: String,
    dueDate:Date,
    description:String,
    priority:String,
   matter:{type: Schema.Types.ObjectId, ref:"Matters"},
userId:{type:Schema.Types.ObjectId, ref:"User"},
status:{type:Boolean, default: false},
assignee:{type:Schema.Types.ObjectId, ref:"Contacts"},
reminder:Object
},schemaOptions)

module.exports = mongoose.model('Tasks', Tasks)



