const router = require('express').Router()
const controller = require('./footer.controller')
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
  params:{
    resource_type: "auto"
  }
});
const parser = multer({ storage: storage });

router.post("/create", controller.create)
router.get("/delete/:id", controller.deleteFooter)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.viewFooter)
router.post("/edit/:id", controller.editFooter)
router.post("/upload",parser.single('image'), controller.upload)


module.exports = router