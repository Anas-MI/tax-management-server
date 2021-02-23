const Email = require('../../../models/email.js')


// Save Email
exports.saveEmail = (req, res) => {
    let email = new Email()
    email.email= req.body.email,
 
        email.save().then(data => {
            res.status(200).json({status: true, message:"Email Saved", data})
         }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

