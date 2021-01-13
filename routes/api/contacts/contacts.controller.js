const Contact = require('../../../models/contacts.js')


// Create New List
exports.createContact = (req, res) => {

    let contact = new Contact()

    contact.prefix= req.body.prefix,
    contact.firstName=req.body.firstName,
    contact.middleName=req.body.middleName,
    contact.lastName=req.body.lastName,
    contact.company=req.body.company,
    contact.title=req.body.title,
    contact.emailAddress=req.body.emailAddress,
    contact.phone=req.body.phone,
    contact.websiteType=req.body.website,
    contact.address=req.body.address,
    contact.customFields=req.body.customFields,
    contact.billingPaymentProfile=req.body.billingPaymentProfile,
    contact.billingCustomRate=req.body.billingCustomRate,
    contact.billingClientId=req.body.billingClientId,
    contact.userId=req.body.userId

 
        contact.save().then(data => {
            res.status(200).json({status: true, message:"Contact list Saved", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteContact = (req, res) => {
// console.log(req.params.id)
    Contact.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"contact Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Contact.find({}).populate("company").
        then(data => {
            res.status(200).json({status: true, message:"Contacts fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//View One
exports.view = (req, res) => {

    Contact.findById(req.params.id).populate("company").
        then(data => {
            res.status(200).json({status: true, message:"Contact fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewSpecific = (req, res) => {

    Contact.find({userId:req.params.id}).
        then(data => {
            res.status(200).json({status: true, message:"company fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//upload
exports.upload= (req, res) => {
console.log(req.params.id)
// console.log(req.body)
console.log(req.file)
    Contact.findByIdAndUpdate(req.params.id, {$set:{image:req.file.path}} ).
        then(data => {
            res.status(200).json({status: true, message:"image uploaded", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit contact
exports.editContact = (req, res) => {

    Contact.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Contact updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}