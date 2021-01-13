const ContactUs = require('../../../models/contactUs')


// Create New List
exports.createList = (req, res) => {

    let contactUs = new ContactUs()
    contactUs.name = req.body.name
    contactUs.number = req.body.number
    contactUs.email = req.body.email
    contactUs.description = req.body.description

  

        contactUs.save().then(data => {
            res.status(200).json({status: true, message:"ContactUs list Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteList = (req, res) => {
// console.log(req.params.id)
    ContactUs.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"contactUs list Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    ContactUs.find({}).
        then(data => {
            res.status(200).json({status: true, message:"ContactUs list fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}