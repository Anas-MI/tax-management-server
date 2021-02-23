const router = require('express').Router()
const controller = require('./homeproperties.controller')


router.post("/create", controller.createHomeProperty)
router.get("/showall", controller.showAllHomeProperties)


module.exports = router