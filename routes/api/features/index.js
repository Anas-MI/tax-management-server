const router = require('express').Router()
const controller = require('./features.controller')


router.post("/createlist", controller.createList)
router.get("/deletelist/:id", controller.deleteList)
router.get("/showall", controller.showAll)
router.post("/edit/:id", controller.editFeatures)

module.exports = router