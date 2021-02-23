const HomeProperty = require('../../../models/homeproperties')


// Create a new Property

exports.createHomeProperty = (req, res) => {
    
    let homeproperty = new HomeProperty(req.body)
        homeproperty.save().then(data => {
            res.status(200).json({status: true, message:"Home Property saved", data})
            }).catch(error => {
           res.status(200).json({status: false, message:error})
        })
}


//Show all Home Properties
exports.showAllHomeProperties = (req, res) => {

    HomeProperty.find({}).
        then(data => {
            res.status(200).json({status: true, message:"Home Properties fetched", data})
         }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


exports.viewProperty = (req, res) => {

    Property.findById(req.params.id).populate("tasks").
        then(data => {
            res.status(200).json({status: true, message:"Property fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}



