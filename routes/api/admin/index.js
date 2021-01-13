const router = require('express').Router()
const controller = require('./admin.controller')


router.get("/showall", controller.showAll)
router.get("/block/:id", controller.blockuser)
router.get("/unblock/:id", controller.unblockuser)
module.exports = router