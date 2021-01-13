const router = require('express').Router()
const controller = require('./logs.controller')


router.post("/create", controller.createLogs)
router.get("/delete/:id", controller.deleteLogs)
router.get("/showall", controller.showAllLogs)
router.post("/edit/:id", controller.editlogs)
router.get("/view/:id", controller.viewlogs)
router.get("/viewforuser/:id", controller.viewSpecific)
router.get("/viewforaccount/:id/:account", controller.viewSpecificForAccount)


module.exports = router