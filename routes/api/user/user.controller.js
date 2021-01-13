const User = require('../../../models/user')
const config = require("../../../config")
const nodemailer = require("nodemailer")
const crypto = require('crypto')

var request=require('request');

var sesTransport = require('nodemailer-ses-transport');

var SESCREDENTIALS = {
  accessKeyId : "accesskey" ,
  secretAccessKey : "secretkey"
};

var transporter = nodemailer.createTransport(sesTransport({

    
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,

 
}));


exports.count = (req, res) => {
  // refuse if not an admin
  // if(!req.decoded.admin) {
  //     return res.status(403).json({
  //         message: 'you are not an admin'
  //     })
  // }

  User.find({admin: false}).count({}).then(data=>
    res.status(200).json({status: true, data })
  ).catch(error => {
    res.status(400).json({status: false, message: error})
  })
}


/* 
    GET /api/user/list
*/

exports.list = (req, res) => {
    // refuse if not an admin
    // if(!req.decoded.admin) {
    //     return res.status(403).json({
    //         message: 'you are not an admin'
    //     })
    // }

    User.find({}, '-password').exec()
    .then(
        users=> {
            res.json({users})
        }
    )

}


/*
    POST /api/user/assign-admin/:username
*/
exports.assignAdmin = (req, res) => {
    // refuse if not an admin
    if(!req.decoded.admin) {
        return res.status(403).json({
            message: 'you are not an admin'
        })
    }

    User.findOneByUsername(req.params.username)
    .then(
        user => {
            if(!user) throw new Error('user not found')
            user.assignAdmin()
        }
    ).then(
        res.json({
            success: true
        })
    ).catch(
        (err) => { res.status(404).json({message: err.message})}
    )
}

exports.resetpassword = (req, res) => {
    
      
        User.findOne({emailAddress: req.body.emailAddress}, function(err, user){
          if(err) {
            res.json({ 'success': false, 'message': err });
          }
          if(!user){
            res.status(404).json({ status: false, message: 'No user found' });
          } else {


       
            
          

          
          
              var url = "https://precedentonline.com" +'/setpassword/?token='+user._id;
            
            var userEmail = user.emailAddress;
            // var emailText = 'please click on the below link for the forget password link';
            emailText += '<p><a href="'+url+'">click here</a>';
          var emailText = `<p>Hi ${user.firstName}</p><p>Please <a href="${url}">click here</a> to reset your password and continue using our portal</p><p>Regards</p>Precedent Team`

            var mailOptions = {
            from: 'Precedent Online <admin@precedentonline.com>',
              to: userEmail,
              subject: 'Forget Password Link',
              html: emailText
            };
            
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
                res.json({ 'success': false, 'message': error });
              } else {
                res.json({ 'success': true, 'message': 'email sent successfully' });
              }
            });
          }
        });
      
    } 


    exports.setpassword = (req, res) => {
      
        User.findById(req.body.userid, function(err, user){
          if(err) {
            res.json({ 'success': false, 'message': err });
          }
          if(!user){
            res.json({ 'success': false, 'message': 'No user found' });
          } else {
            // bcrypt.genSalt(10, function(err, salt){
            //   bcrypt.hash(req.body.newpassword, salt, function(err, hash){
            //     if(err){
            //       res.json({ 'success': false, 'message': err });
            //     }
            const encrypted = crypto.createHmac('sha1', config.secret)
            .update(req.body.newPassword)
            .digest('base64')

                let userobject = {};
                userobject.password = encrypted;
                let query = {_id: req.body.userid}
                User.update(query, userobject, function(err){
                  if(err){
                    res.json({ 'success': false, 'message': err });
                    return;
                  } else {
                    res.json({ 'success': true, 'message': 'Password Successfully Changed' });
                  }
                });
            //   });
            // });
          }
        });
      
      }
// };



exports.verify = (req, res) => {
    
    User.findByIdAndUpdate(req.body.userid, {$set:{verified: true}}).then(data =>
        
        {

            res.json({ 'success': true, 'message': 'Profile verified' });
        }).catch(err =>{


                res.json({ 'success': false, 'message': err });
             
            
        })
         
      }


      
      exports.deleteUser = (req, res) => {
    
        User.findByIdAndRemove(req.params.id).then(data =>
            
            {
    
                res.status(200).json({ 'success': true, 'message': 'user removed' });
            }).catch(err =>{
    
    
                    res.status(400).json({ 'success': false, 'message': err });
                 
                
            })
             
          }


          exports.updateUser = (req, res) => {
    
            User.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(data =>
                
                {
        
                    res.status(200).json({ 'success': true, 'message': 'user Updated', data });
                }).catch(err =>{
        
        
                        res.status(400).json({ 'success': false, 'message': err });
                     
                    
                })
                 
              }


          exports.viewUser = (req, res) => {
    
            User.findById(req.params.id).then(data =>
                
                {
        
                    res.status(200).json({ 'success': true, 'message': 'user fetched', data });
                }).catch(err =>{
        
        
                        res.status(400).json({ 'success': false, 'message': err });
                     
                    
                })
                 
              }