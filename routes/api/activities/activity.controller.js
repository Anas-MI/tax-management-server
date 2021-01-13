const Activity = require('../../../models/activity.js')


// Create New Activity
exports.createActivity = (req, res) => {

    let activity = new Activity(req.body)
 
        activity.save().then(data => {
            res.status(200).json({status: true, message:"Activity Saved", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Delete an Activity
exports.deleteActivity = (req, res) => {
// console.log(req.params.id)
    Activity.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Activity Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {
    // .populate("user").populate([{
    //     path: 'matter',
    //     model: 'Matters',
    //     populate: {
    //       path: 'client',
    //       model: 'Contacts'
    //     }}]).

    Activity.find({})
        .then(data => {


            var b = data.map(key => key['matter'])
var c = {}
b.map(elt => c[elt] = data.filter(k => k.matter == elt))
// console.log(c)

            res.status(200).json({status: true, message:"Activity fetched", data})
            // let a = [{ message: 'This is a test', from_user_id: 123, to_user_id: 567 }, { message: 'Another test.', from_user_id: 123, to_user_id: 567 }, { message: 'A third test.', from_user_id: '456', to_user_id: 567 }]
        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//View One
exports.view = (req, res) => {

    Activity.findById(req.params.id).populate("user").
        then(data => {
            res.status(200).json({status: true, message:"Activity fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewSpecific = (req, res) => {

    Activity.find({userId:req.params.id}).populate("user").populate([{
        path: 'matter',
        model: 'Matters',
        populate: {
          path: 'client',
          model: 'Contacts'
        }}]).
        then(data => {
            res.status(200).json({status: true, message:"Activity fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//fetch activities for bill
exports.viewSpecificForBill = (req, res) => {

    Activity.find({userId:req.params.id}).populate("user").populate([{
        path: 'matter',
        model: 'Matters',
        populate: {
          path: 'client',
          model: 'Contacts'
        }}]).
        then(data => {

            var b = data.map(key => key['matter']['client']["_id"])
var c = {}
b.map(elt => c[elt] = data.filter(k => k.matter.client._id == elt))
            res.status(200).json({status: true, message:"Activity fetched", c})

        }).catch(error => {
        res.status(200).json({status: false, message:error, c:{}})

        })
}



//Edit contact
exports.editActivity = (req, res) => {

    Activity.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Activity updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}


//fetch for one user and one matter
exports.viewSpecificForMatter = (req, res) => {

    Activity.find({userId:req.params.id, matter:req.params.matter}).populate("user").populate("matter")
        .then(data => {
            res.status(200).json({status: true, message:"Activity fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}