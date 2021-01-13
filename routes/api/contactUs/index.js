const router = require('express').Router()
const controller = require('./contactus.controller')


router.post("/create", controller.createList)
router.get("/delete/:id", controller.deleteList)
router.get("/showall", controller.showAll)
module.exports = router