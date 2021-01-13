const Document = require('../../../models/documents')
const Category = require('../../../models/categories')
const Folder = require('../../../models/folders')

// upload a new document
exports.upload= (req, res) => {
    console.log(req.params.id)
    console.log(req.body.name)
    // console.log(req.file)

let document = new Document({
    name:req.body.name,
    matter:req.body.matter,
    contact:req.body.contact,
    category:req.body.category,
    document: req.file.path,
    userId:req.body.userId,
    type:req.body.type
})

       document.save().
            then(data => {
                res.status(200).json({status: true, message:"document saved", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }


// upload a new document
exports.uploadTemplate= (req, res) => {
    // console.log(req.params.id)
    // console.log(req.body.name)
    // console.log(req.file)

let document = new Document({
    name:req.body.name,
    matter:req.body.matter,
    category:req.body.category,
    document: req.body.document,
    userId:req.body.userId,
    type:req.body.type
})

       document.save().
            then(data => {
                res.status(200).json({status: true, message:"document saved", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }




//Delete a matter
exports.deleteMatter = (req, res) => {
// console.log(req.params.id)
    matters.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"matters Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all Matters
exports.showAll= (req, res) => {

    Document.find({}).
        then(data => {
            res.status(200).json({status: true, message:"documents fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit features
exports.editDocument = (req, res) => {
console.log(req.body, req.params.id)
    Document.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"document updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewDocument = (req, res) => {

    Document.findById(req.params.id).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"document fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


exports.deleteDocument = (req, res) => {

    Document.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"document deleted", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}
//fetch for one user
exports.viewSpecific = (req, res) => {

    Document.find({userId:req.params.id}).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"document fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

exports.viewSpecificForMatter = (req, res) => {

    Document.find({userId:req.params.id, matter:req.params.matter}).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"document fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

exports.viewSpecificForContact = (req, res) => {

    Document.find({userId:req.params.id, contact:req.params.contact}).populate("matter contact").
        then(data => {
            res.status(200).json({status: true, message:"document fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Categories
// upload a new Category
exports.createCategory= (req, res) => {
    // console.log(req.params.id)
    // console.log(req.body.name)
    // console.log(req.file)

let category = new Category(req.body)

       category.save().
            then(data => {
                res.status(200).json({status: true, message:"category saved", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }





//Delete a category
exports.deleteCategory = (req, res) => {
// console.log(req.params.id)
    Category.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"category Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all categories
exports.showAllCategory= (req, res) => {

    Category.find({}).
        then(data => {
            res.status(200).json({status: true, message:"categories fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit category
exports.editCategory = (req, res) => {
// console.log(req.body, req.params.id)
    Category.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"category updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewCategory = (req, res) => {

    Category.findById(req.params.id).populate("Documents").
        then(data => {
            res.status(200).json({status: true, message:"category fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewSpecificCategory = (req, res) => {

    Category.find({userId:req.params.id}).populate("documents").
        then(data => {
            res.status(200).json({status: true, message:"category fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//Folders

// create a new folder
exports.createFolder= (req, res) => {
    // console.log(req.params.id)
    // console.log(req.body.name)
    // console.log(req.file)

let folder = new Folder(req.body)

       folder.save().
            then(data => {
                res.status(200).json({status: true, message:"Folder created", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }





//Delete a folder
exports.deleteFolder = (req, res) => {
// console.log(req.params.id)
    Folder.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Folder Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all folders
exports.showAllFolders= (req, res) => {

    Folder.find({}).
        then(data => {
            res.status(200).json({status: true, message:"Folders fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit Folder
exports.editFolder = (req, res) => {
// console.log(req.body, req.params.id)
    Folder.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Folder updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewFolder = (req, res) => {

    Folder.findById(req.params.id).populate("documents folder").
        then(data => {
            res.status(200).json({status: true, message:"folder fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewFolderSpecific = (req, res) => {

    Folder.find({userId:req.params.id}).populate("documents").
        then(data => {
            res.status(200).json({status: true, message:"Folders fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}
