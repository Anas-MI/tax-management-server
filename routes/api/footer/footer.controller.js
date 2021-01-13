const Footer = require('../../../models/footer')

// Create New List
exports.create = (req, res) => {

    let footer = new Footer(req.body)
        footer.save().then(data => {
            res.status(200).json({status: true, message:"footer created", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteFooter = (req, res) => {
// console.log(req.params.id)
    Footer.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"footer Removed", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Footer.find({}).
        then(data => {
            res.status(200).json({status: true, message:"footer fetched", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//View one
exports.viewFooter = (req, res) => {

    Footer.findById(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Footer fetched", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Edit blog
exports.editFooter = (req, res) => {
    Footer.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            
            res.status(200).json({status: true, message:"Footer updated", data})

        }).catch(error => {
            res.status(400).json({status: false, message:error})
        })
}

//upload
exports.upload= (req, res) => {
console.log(req.file)
    // Footer.findOneAndUpdate(req.params.id, {$set:{logo:req.file.path}} ).
        // then(data => {
            // res.status(200).json({status: true, message:"image uploaded", data})

        // }).catch(error => {
         let link = req.file.path;
         let link2 = link.replace(/pdf/g, "jpg");
         console.log({link})
        res.status(200).json({status: true, message:link2})

        // })
}