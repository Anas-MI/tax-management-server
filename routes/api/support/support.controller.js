const Ticket = require('../../../models/tickets')

// create a new document
exports.create= (req, res) => {
    // console.log(req.params.id)
    console.log(req.body)
    console.log(req.file)

let ticket = new Ticket({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    issue:req.body.issue,
    url:req.body.url,
    document: req.file.path,
    userId:req.body.userId
})

       ticket.save().
            then(data => {
                res.status(200).json({status: true, message:"ticket saved", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }





//Delete a ticket
exports.deleteTicket = (req, res) => {
// console.log(req.params.id)
    Ticket.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"ticket Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all Tickets
exports.showAll= (req, res) => {

    Ticket.find({}).
        then(data => {
            res.status(200).json({status: true, message:"tickets fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit ticket
exports.editTicket = (req, res) => {
console.log(req.body, req.params.id)
    Ticket.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"ticket updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewTicket = (req, res) => {

    Ticket.findById(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"ticket fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


exports.deleteTicket = (req, res) => {

    Ticket.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"ticket deleted", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}
//fetch for one user
exports.viewSpecific = (req, res) => {

    Ticket.find({userId:req.params.id}).
        then(data => {
            res.status(200).json({status: true, message:"ticket fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

