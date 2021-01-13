const Account = require('../../../models/accounts')


// Create New Account
exports.createAccount = (req, res) => {

    let account = new Account(req.body)


 
        account.save().then(data => {
            res.status(200).json({status: true, message:"account Saved", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Delete an account
exports.deleteAccount = (req, res) => {
// console.log(req.params.id)
    Account.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Account Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Account.find({}).
        then(data => {
            res.status(200).json({status: true, message:"Accounts Fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//View One
exports.view = (req, res) => {

    Account.findById(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Contact fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewSpecific = (req, res) => {

    Account.find({userId:req.params.id}).populate("contactId").
        then(data => {
            res.status(200).json({status: true, message:"Account fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}



//Edit contact
exports.editAccount = (req, res) => {

    Account.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Account updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}