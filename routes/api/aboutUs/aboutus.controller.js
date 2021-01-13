const AboutUs = require('../../../models/aboutus')

// Create New List
exports.create = (req, res) => {

    let Aboutus = new AboutUs(req.body)
  

        Aboutus.save().then(data => {
            res.status(200).json({status: true, message:"AboutUs created", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    AboutUs.find({}).
        then(data => {
            res.status(200).json({status: true, message:"AboutUs fetched", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Edit blog
exports.editAboutUs = (req, res) => {
    AboutUs.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            
            res.status(200).json({status: true, message:"AboutUs updated", data})

        }).catch(error => {
            res.status(400).json({status: false, message:error})
        })
}

