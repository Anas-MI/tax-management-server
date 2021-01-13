const logs = require('../../../models/logs')


// Create New Matter
exports.createLogs = (req, res) => {

    let Logs = new logs(req.body)

    Logs.save().then(data => {
            res.status(200).json({status: true, message:"logs Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a matter
exports.deleteLogs = (req, res) => {
// console.log(req.params.id)
logs.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"log Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all Matters
exports.showAllLogs = (req, res) => {

    logs.find({}).
        then(data => {
            res.status(200).json({status: true, message:"logs fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit features
exports.editlogs = (req, res) => {

    logs.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"logs updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewlogs = (req, res) => {

    logs.findById(req.params.id).populate("matterId").
        then(data => {
            res.status(200).json({status: true, message:"logs fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewSpecific = (req, res) => {

    logs.find({userId:req.params.id}).populate("matterId").
        then(data => {
            res.status(200).json({status: true, message:"logs fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

exports.viewSpecificForAccount = (req, res) => {

    logs.find({userId:req.params.id, accountId:req.params.account}).populate("matterId").
        then(data => {
            res.status(200).json({status: true, message:"logs fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}