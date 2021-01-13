const router = require('express').Router()
const controller = require('./notes.controller')
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

router.post("/create", controller.createNotes)
router.get("/delete/:id", controller.deleteNotes)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.view)
router.get("/viewforuser/:id", controller.viewSpecific)
router.get("/viewformatter/:id/:matter", controller.viewForMatter)
router.get("/viewforcontact/:id/:contact", controller.viewForContact)

router.post("/edit/:id", controller.editNotes)

module.exports = router