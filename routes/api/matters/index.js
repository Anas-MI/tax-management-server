const router = require('express').Router()
const controller = require('./matters.controller')


router.post("/create", controller.createMatter)
router.get("/delete/:id", controller.deleteMatter)
router.get("/showall", controller.showAllMatters)
router.post("/edit/:id", controller.editMatter)
router.get("/view/:id", controller.viewMatter)
router.get("/viewforuser/:id", controller.viewSpecific)


module.exports = router