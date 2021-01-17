const router = require('express').Router()
const controller = require('./properties.controller')


router.post("/create", controller.createProperty)
router.get("/delete/:id", controller.deleteProperty)
router.get("/showall", controller.showAllProperties)
router.post("/edit/:id", controller.editProperty)
router.get("/view/:id", controller.viewProperty)
router.get("/viewforuser/:id", controller.viewSpecific)


module.exports = router