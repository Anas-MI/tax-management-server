const router = require('express').Router()
const controller = require('./company.controller')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'casemanagement',
    api_key: '322432466971755',
    api_secret: 'XQjm7FId8KxCq17tDJ25kX5ma0U'
  });

// // uploading file to cloudinary 
// const uploadLocalFile = async (path) => {
//     const res = await cloudinary.uploader.upload(path);
//     fs.unlinkSync(path);
//     if (res && res.secure_url) {
//       console.log('file uploaded to Cloudinary', res.secure_url);
//     } else {
//       return '';
//     }
//     return res.secure_url;
//   }

//   const multer = require("multer");
//   const storage = multer.memoryStorage();
//   const multerUploads = multer({ storage }).single("image");

  const { CloudinaryStorage } = require('multer-storage-cloudinary');

const multer = require('multer');
 

 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});
 
const parser = multer({ storage: storage });
router.post("/create", controller.createCompany)
router.get("/delete/:id", controller.deleteCompany)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.view)
router.get("/viewforuser/:id", controller.viewSpecific)
router.post("/upload/:id",parser.single('image'), controller.upload)
router.post("/edit/:id", controller.editCompany)


module.exports = router