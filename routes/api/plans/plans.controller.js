const Plans = require('../../../models/plans')


// Create New List
exports.createList = (req, res) => {

    let feature = new Plans()
    feature.planName = req.body.planName
    feature.price = req.body.price
    feature.list = req.body.list

        feature.save().then(data => {
            res.status(200).json({status: true, message:"Plans list Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteList = (req, res) => {
// console.log(req.params.id)
    Plans.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Feature list Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Plans.find({}).
        then(data => {
            res.status(200).json({status: true, message:"Plans list fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit features
exports.editPlan = (req, res) => {

    Plans.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"plan updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}