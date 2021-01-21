const Property = require('../../../models/properties')


// Create a new Property
exports.createProperty = (req, res) => {

    let property = new Property(req.body)
         console.log("property list",property)
        property.save().then(data => {
            res.status(200).json({status: true, message:"Property saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a task
exports.deleteProperty = (req, res) => {
    Property.findByIdAndUpdate(req.params.id, {deleted: true}).
        then(data => {
            res.status(200).json({status: true, message:"Property Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all Properties
exports.showAllProperties = (req, res) => {

    Property.find({}).
        then(data => {
            res.status(200).json({status: true, message:"Properties fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit Property
exports.editProperty = (req, res) => {
    console.log("request aksjhat",req.body)
    Property.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Property updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewProperty = (req, res) => {

    Property.findById(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Property fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//fetch for one user
exports.viewSpecific = (req, res) => {

    Property.find({userId:req.params.id}).
        then(data => {
            res.status(200).json({status: true, message:"Property Fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}
