const matters = require('../../../models/matters')


// Create New Matter
exports.createMatter = (req, res) => {

    let Matters = new matters(req.body)

        Matters.save().then(data => {
            res.status(200).json({status: true, message:"Matters Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a matter
exports.deleteMatter = (req, res) => {
// console.log(req.params.id)
    matters.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"matters Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all Matters
exports.showAllMatters = (req, res) => {

    matters.find({}).
        then(data => {
            res.status(200).json({status: true, message:"Matters fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit features
exports.editMatter = (req, res) => {

    matters.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Matter updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewMatter = (req, res) => {

    matters.findById(req.params.id).populate("client").populate({ 
        path: 'relatedContacts',
        populate: {
          path: 'contact'
        } 
     }).
        then(data => {
            res.status(200).json({status: true, message:"Matter fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewSpecific = (req, res) => {

    matters.find({userId:req.params.id}).populate("client").
        then(data => {
            res.status(200).json({status: true, message:"matters fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}