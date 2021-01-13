const User = require('../../../models/user')


// Create New List
exports.createList = (req, res) => {

    let User = new User()
    User.title = req.body.title
    User.description = req.body.description
    User.shortDescription = req.body.shortDescription
    User.author = req.body.author

  

        User.save().then(data => {
            res.status(200).json({status: true, message:"User list Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteList = (req, res) => {
// console.log(req.params.id)
    User.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"User list Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    User.find({}).
        then(data => {
            res.status(200).json({status: true, message:"User list fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Block user
exports.blockuser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, {$set:{blocked: true}} ).
        then(data => {
            res.status(200).json({status: true, message:"Blocked user", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//unBlock user
exports.unblockuser = (req, res) => {

    User.findByIdAndUpdate(req.params.id, {$set:{blocked: false}} ).
        then(data => {
            res.status(200).json({status: true, message:"Blocked user", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}