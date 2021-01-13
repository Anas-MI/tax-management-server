const router = require('express').Router()
const controller = require('./calendar.controller')


router.post("/create", controller.createCalendar)
router.get("/delete/:id", controller.deleteEvent)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.view)
router.get("/viewforuser/:id", controller.viewSpecific)
router.post("/update/:id", controller.updateEvent)
router.get("/fetchformatter/:id", controller.fetchForMatter)
router.get("/sendMail", controller.sendMails)

module.exports = router