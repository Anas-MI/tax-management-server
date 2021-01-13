const Notes = require('../../../models/notes')


// Create New List
exports.createNotes = (req, res) => {

    let notes = new Notes(req.body)


 
        notes.save().then(data => {
            res.status(200).json({status: true, message:"notes Saved", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteNotes = (req, res) => {
// console.log(req.params.id)
    Notes.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Note Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Notes.find({}).
        then(data => {
            res.status(200).json({status: true, message:"notes fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//View One
exports.view = (req, res) => {

    Notes.findById(req.params.id)
        then(data => {
            res.status(200).json({status: true, message:"Notes fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewSpecific = (req, res) => {

    Notes.find({userId:req.params.id}).
        then(data => {
            res.status(200).json({status: true, message:"notes fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

exports.viewForContact = (req, res) => {

    Notes.find({userId:req.params.id, contact:req.params.contact}).
        then(data => {
            res.status(200).json({status: true, message:"note fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

exports.viewForMatter = (req, res) => {

    Notes.find({userId:req.params.id, matter:req.params.matter}).
        then(data => {
            res.status(200).json({status: true, message:"notes fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//upload


//Edit contact
exports.editNotes = (req, res) => {

    Notes.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Notes updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}