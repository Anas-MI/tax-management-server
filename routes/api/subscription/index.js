const router = require('express').Router()
const controller = require('./subscription.controller')
// const cloudinary = require('cloudinary').v2;



router.get("/delete/:id", controller.deleteSubscription)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.viewSubscription)
router.get("/viewforuser/:id", controller.viewSpecific)
// router.get("/viewformatter/:id/:matter", controller.viewSpecificForMatter)
// router.post("/upload/:id",parser.single('document'), controller.upload)
router.post("/edit/:id", controller.editSubscription)
router.post("/create", controller.create)

module.exports = router