const mongoose = require("mongoose")
const Schema = mongoose.Schema
const SchemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
}

const Notes = new Schema({
   subject:String, 
   notes:String,
   date:{type:Date, default:Date.now},
    userId:{type:Schema.Types.ObjectId, ref:"User"},
    matter:{type:Schema.Types.ObjectId, ref: "Matters"},
    contact:{type:Schema.Types.ObjectId, ref:"Contacts"},
    hours:String
}, SchemaOptions)


module.exports = mongoose.model("Notes", Notes)