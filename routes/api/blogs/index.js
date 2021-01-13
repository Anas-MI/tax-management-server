const router = require('express').Router()
const controller = require('./blogs.controller')
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

router.post("/create", controller.createList)
router.get("/delete/:id", controller.deleteList)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.viewBlog)
router.post("/edit/:id", controller.editBlog)
router.post("/upload/:id",parser.single('image'), controller.upload)


module.exports = router