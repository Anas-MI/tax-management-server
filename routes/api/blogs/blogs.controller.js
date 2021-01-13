const Blogs = require('../../../models/blogs')


// Create New List
exports.createList = (req, res) => {

    let blogs = new Blogs()
    blogs.title = req.body.title
    blogs.description = req.body.description
    blogs.shortDescription = req.body.shortDescription
    blogs.author = req.body.author

  

        blogs.save().then(data => {
            res.status(200).json({status: true, message:"Blogs list Saved", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteList = (req, res) => {
// console.log(req.params.id)
    Blogs.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"blogs list Removed", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Blogs.find({}).
        then(data => {
            res.status(200).json({status: true, message:"Blogs list fetched", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//View one
exports.viewBlog = (req, res) => {

    Blogs.findById(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Blogs list fetched", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Edit blog
exports.editBlog = (req, res) => {

    Blogs.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Blog updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//upload
exports.upload= (req, res) => {
console.log(req.file)
    Blogs.findByIdAndUpdate(req.params.id, {$set:{image:req.file.path}} ).
        then(data => {
            res.status(200).json({status: true, message:"image uploaded", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}