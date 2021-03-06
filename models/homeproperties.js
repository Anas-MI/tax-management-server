const mongoose = require("mongoose")
const Schema = mongoose.Schema

const HomeProperty = new Schema({
    property: String,
    status: String,
    clientReferenceNumber: String,
    openDate: Date,
    closeDate: Date,
    pendingDate: Date,
    propertyAddress:Object,
    currentStatus:String,
    documents:Array,
    propertyValueAmount:String,
    newProposedValueAmount:String,
    targetValueAmount:String,
    finalSavings:String,
    assignedTo:{ type: Schema.Types.ObjectId, ref: "User" },
    deleted:{type:Boolean, default: false},
    description:String,
    tasks:[{ type: Schema.Types.ObjectId, ref: "Tasks" }],
    meta:Object
    
  })

module.exports = mongoose.model("HomeProperties", HomeProperty)