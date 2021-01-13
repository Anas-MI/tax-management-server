const Event = require("../../../models/calendar");
const momentT = require("moment-timezone")
const moment = require("moment")
const nodemailer = require("nodemailer")
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
//Send emails
exports.sendMails = (req, res) => {
  var timeZones = momentT.tz.names();
  let date = moment(new Date()).format("MM/DD/YYYY")
  console.log(moment().tz("Europe/London").format("hh:mm A").toString())
  if("11:10 PM" === moment().tz("Europe/London").format("hh:mm A").toString()){
    console.log("true")
  }
  // console.log({date})
  // let finalDate = moment("9/11/2020 10:00:00").format("MM/DD/YYYY")
  // console.log({finalDate})
  var todaysEvent;
  Event.find({}).populate("userId")
.then((data) => {
  
  // data.map(event => {
    todaysEvent = data.filter(evnt => {
      // let evntDate = evnt.startTime;
      // console.log({evntDate})

     if(evnt.startTime){
      let evntDate = evnt.startTime.toString().replace(/,/g,"").slice(0, -1);

      // evntDate
      // evntDate
      console.log(evnt.startTime)
      console.log({evntDate})
      console.log({date})
      var fin = moment(evntDate).format("MM/DD/YYYY")
      console.log({fin})
      return  evnt.userId && fin === date && evnt.notification
     }
    }
    )
    
    todaysEvent.map(event => {
      console.log(moment("2:25:07 pm", "HH:mm:ss a").tz(event.location).format("hh:mm A"))
      console.log(moment().tz(event.location).format("hh:mm A"))
      if( moment().tz(event.location).format("hh:mm A").includes(event.timeForReminder) ){
      var emailText = 'Please click on the link below to verify your Account';
    //   emailText += '<p><a href="'+url+'">click here</a>';
      var mailOptions = {
        from: 'Precedent Online <admin@precedentonline.com>',
        to: event.userId.emailAddress,
        subject: "You have an upcoming event | Case Management",
        // var emailText = `<p>Hi</p><br><p>Please <a href="${url}">click here</a> to verify your account and start using our portal.</p><br><p>Regards</p><br><p>Precedent Team</p>`
        html: `You have an upcoming event - ${event.title} - ${event.description} - scheduled for -  ${event.startTime}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        //   res.json({ 'success': false, 'message': error });
        } 
          console.log("email sent");
          // res.json({ 'success': true, 'message': 'email sent ' })
        
      });
    }
    
  })
    res.status(200).json({ status: true, message: "Events fetched", todaysEvent, data });
  // })
  console.log({todaysEvent})

}
)
// })
// .catch((error) => {
//   res.status(200).json({ status: false, message: error });
// });

}



// Create New List
exports.createCalendar = (req, res) => {
  let event = new Event(req.body);

  event
    .save()
    .then((data) => {
      res.status(200).json({ status: true, message: "event  Saved", data });
    })
    .catch((error) => {
      res.status(400).json({ status: false, message: error });
    });
};

//Delete a list
exports.deleteEvent = (req, res) => {
  // console.log(req.params.id)
  Event.findByIdAndRemove(req.params.id)
    .then((data) => {
      res.status(200).json({ status: true, message: "Event Removed", data });
    })
    .catch((error) => {
      res.status(200).json({ status: false, message: error });
    });
};

//Show all
exports.showAll = (req, res) => {
  Event.find({})
    .then((data) => {
      res.status(200).json({ status: true, message: "Events fetched", data });
    })
    .catch((error) => {
      res.status(200).json({ status: false, message: error });
    });
};

//View One
exports.view = (req, res) => {
  Event.findById(req.params.id).populate("matter")
    .then((data) => {
      res.status(200).json({ status: true, message: "Event fetched", data });
    })
    .catch((error) => {
      res.status(200).json({ status: false, message: error });
    });
};

//fetch for one user
exports.viewSpecific = (req, res) => {
  Event.find({ userId: req.params.id }).populate("matter")
    .then((data) => {
      res.status(200).json({ status: true, message: "Event fetched", data });
    })
    .catch((error) => {
      res.status(200).json({ status: false, message: error });
    });
};

exports.updateEvent = (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      res.status(200).json({ status: true, message: "Event updated ", data });
    })
    .catch((error) => {
      res.status(400).json({ status: false, message: error });
    });
};

exports.fetchForMatter = (req, res) => {
    Event.find({matter: req.params.id}).populate("matter")
      .then((data) => {
        res.status(200).json({ status: true, message: "events fetched for matter", data });
      })
      .catch((error) => {
        res.status(400).json({ status: false, message: error });
      });
  };