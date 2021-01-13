const router = require('express').Router()
const controller = require('./aboutus.controller')


router.post("/create", controller.create)
router.post("/edit", controller.editAboutUs)
router.get("/showall", controller.showAll)


module.exports = router