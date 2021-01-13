const router = require('express').Router()
const controller = require('./accounts.controller')


router.post("/create", controller.createAccount)
router.get("/delete/:id", controller.deleteAccount)
router.get("/showall", controller.showAll)
router.post("/edit/:id", controller.editAccount)
router.get("/view/:id", controller.view)
router.get("/viewforuser/:id", controller.viewSpecific)


module.exports = router