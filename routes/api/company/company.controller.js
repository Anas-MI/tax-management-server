const Company = require('../../../models/company')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'casemanagement',
    api_key: '322432466971755',
    api_secret: 'XQjm7FId8KxCq17tDJ25kX5ma0U'
  });

// uploading file to cloudinary 
const uploadLocalFile = async (path) => {
    const res = await cloudinary.uploader.upload(path);
    fs.unlinkSync(path);
    if (res && res.secure_url) {
      console.log('file uploaded to Cloudinary', res.secure_url);
    } else {
      return '';
    }
    return res.secure_url;
  }

  const multer = require("multer");
  const storage = multer.memoryStorage();
  const multerUploads = multer({ storage }).single("image");



// Create New List
exports.createCompany = (req, res) => {

    let company = new Company()

    company.name=req.body.name,
    company.emailAddress=req.body.emailAddress,
    company.phone=req.body.phone,
    company.website=req.body.website,
    company.address=req.body.address,
    company.customFields=req.body.customFields,
    company.billingPaymentProfile=req.body.billingPaymentProfile,
    company.billingCustomRate=req.body.billingCustomRate,
    company.billingClientId=req.body.billingClientId,
    company.employees=req.body.employees
    company.userId=req.body.userId


 
        company.save().then(data => {
            res.status(200).json({status: true, message:"Company  Saved", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteCompany = (req, res) => {
// console.log(req.params.id)
    Company.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Company Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Company.find({}).
        then(data => {
            res.status(200).json({status: true, message:"Contacts fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//View One
exports.view = (req, res) => {

    Company.findById(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"company fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}



//fetch for one user
exports.viewSpecific = (req, res) => {

    Company.find({userId:req.params.id}).populate("employees").
        then(data => {
            res.status(200).json({status: true, message:"company fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//upload
exports.upload= (req, res) => {

    Company.findOneAndUpdate(req.params.id, {$set:{image:req.file.path}} ).
        then(data => {
            res.status(200).json({status: true, message:"image uploaded", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit company 
exports.editCompany = (req, res) => {

    Company.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Company updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

