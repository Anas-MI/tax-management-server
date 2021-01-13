const Subscription = require('../../../models/subscription')

// create a new document
exports.create= (req, res) => {
    // console.log(req.params.id)
    console.log(req.body)
    console.log(req.file)

let subscription = new Subscription(req.body)

       subscription.save().
            then(data => {
                res.status(200).json({status: true, message:"Subscription saved", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }





//Delete a Subscription
exports.deleteSubscription = (req, res) => {
// console.log(req.params.id)
    Subscription.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Subscription Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all Tickets
exports.showAll= (req, res) => {

    Subscription.find({}).populate("userId").
        then(data => {
            res.status(200).json({status: true, message:"tickets fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit Subscription
exports.editSubscription = (req, res) => {
// console.log(req.body, req.params.id)
    Subscription.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Subscription updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewSubscription = (req, res) => {

    Subscription.findById(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Subscription fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


// exports.deleteTicket = (req, res) => {

//     Subscription.findByIdAndRemove(req.params.id).
//         then(data => {
//             res.status(200).json({status: true, message:"Subscription deleted", data})

//         }).catch(error => {
//         res.status(200).json({status: false, message:error})

//         })
// }
//fetch for one user
exports.viewSpecific = (req, res) => {

    Subscription.find({userId:req.params.id}).
        then(data => {
            res.status(200).json({status: true, message:"Subscription fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

