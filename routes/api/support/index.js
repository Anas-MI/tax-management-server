const router = require('express').Router()
const controller = require('./support.controller')
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: 'casemanagement',
    api_key: '322432466971755',
    api_secret: 'XQjm7FId8KxCq17tDJ25kX5ma0U'
  });
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const multer = require('multer');
 

 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});
const parser = multer({ storage: storage });

router.get("/delete/:id", controller.deleteTicket)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.viewTicket)
router.get("/viewforuser/:id", controller.viewSpecific)
// router.get("/viewformatter/:id/:matter", controller.viewSpecificForMatter)
// router.post("/upload/:id",parser.single('document'), controller.upload)
router.post("/edit/:id", controller.editTicket)
router.post("/create",parser.single('document'), controller.create)

module.exports = router