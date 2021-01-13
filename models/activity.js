const mongoose = require("mongoose")
const Schema = mongoose.Schema
const SchemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
}

const Activity = new Schema({
    type:String,
    qty:String,
    description:String,
    rate:String,
    date:{type:Date, default:Date.now},
    user:{type:Schema.Types.ObjectId, ref: "User"},
    matter:{type:Schema.Types.ObjectId, ref: "Matters"},
    contact:[{contact:{type:Schema.Types.ObjectId, ref:"Contacts"}}],
    invoiceStatus:String,
    time:String,
    billable:{type:Boolean, default: false},
    amount:String,
    userId:{type:Schema.Types.ObjectId, ref:"User"},
    billed:{type:Boolean, default: false}

}, SchemaOptions)


module.exports = mongoose.model("Activity", Activity)