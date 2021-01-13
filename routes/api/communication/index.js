const router = require('express').Router()
const controller = require('./communication.controller')



router.post("/create", controller.create)
router.get("/delete/:id", controller.deleteCommunication)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.view)
router.get("/viewforuser/:id", controller.viewSpecific)
router.get("/viewformatter/:id/:matter", controller.viewForMatter)
router.post("/sendemail", controller.sendEmail)
router.post("/sendsms", controller.sendSms)
router.post("/edit/:id", controller.editCommunication)
router.get("/viewforcontact/:id/:contact", controller.viewSpecificCommunicationClient)

module.exports = router