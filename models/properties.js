const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Property = new Schema({
    property: String,
    status: String,
    clientReferenceNumber: String,
    openDate: Date,
    closeDate: Date,
    pendingDate: Date,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    propertyAddress:Object,
    currentStatus:String,
    documents:Array,
    propertyValueAmount:String,
    newProposedValueAmount:String,
targetValueAmount:String,
finalSavings:String,
assignedTo:{ type: Schema.Types.ObjectId, ref: "User" },
deleted:{type:Boolean, default: false}

})

module.exports = mongoose.model("Properties", Property)