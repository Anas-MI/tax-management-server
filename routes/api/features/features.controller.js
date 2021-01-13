const Features = require('../../../models/features')


// Create New List
exports.createList = (req, res) => {

    let feature = new Features()
    feature.title = req.body.title
    feature.description = req.body.description
    feature.logo = req.body.logo

  

        feature.save().then(data => {
            res.status(200).json({status: true, message:"Features list Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteList = (req, res) => {
// console.log(req.params.id)
    Features.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Feature list Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Features.find({}).
        then(data => {
            res.status(200).json({status: true, message:"Features list fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit features
exports.editFeatures = (req, res) => {

    Features.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Feature list updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}