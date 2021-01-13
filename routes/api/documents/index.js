const router = require('express').Router()
const controller = require('./document.controller')
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

// router.post("/create", controller.createContact)
router.get("/delete/:id", controller.deleteDocument)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.viewDocument)
router.get("/viewforuser/:id", controller.viewSpecific)
router.get("/viewformatter/:id/:matter", controller.viewSpecificForMatter)
router.get("/viewforcontact/:id/:contact", controller.viewSpecificForContact)
router.post("/upload/:id",parser.single('document'), controller.upload)
router.post("/uploadtemplate/:id", controller.uploadTemplate)

router.post("/edit/:id", controller.editDocument)

//Categories
router.get("/category/delete/:id", controller.deleteCategory)
router.get("/category/showall", controller.showAllCategory)
router.get("/category/view/:id", controller.viewCategory)
router.get("/category/viewforuser/:id", controller.viewSpecificCategory)
// router.get("/viewformatter/:id/:matter", controller.viewSpecificForMatter)
// router.get("/viewforcontact/:id/:contact", controller.viewSpecificForContact)
router.post("/category/create", controller.createCategory)
router.post("/category/edit/:id", controller.editCategory)


//folders
router.get("/folder/delete/:id", controller.deleteFolder)
router.get("/folder/showall", controller.showAllFolders)
router.get("/folder/view/:id", controller.viewFolder)
router.get("/folder/viewforuser/:id", controller.viewFolderSpecific)
// router.get("/viewformatter/:id/:matter", controller.viewSpecificForMatter)
// router.get("/viewforcontact/:id/:contact", controller.viewSpecificForContact)
router.post("/folder/create", controller.createFolder)
router.post("/folder/edit/:id", controller.editFolder)







module.exports = router