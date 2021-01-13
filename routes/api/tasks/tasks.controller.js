const tasks = require('../../../models/tasks')
const List = require('../../../models/lists')

// Create New task
exports.createTask = (req, res) => {

    let Tasks = new tasks(req.body)

        Tasks.save().then(data => {
            res.status(200).json({status: true, message:"Tasks Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a task
exports.deleteTask = (req, res) => {
// console.log(req.params.id)
    tasks.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"task Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all tasks
exports.showAllTasks = (req, res) => {

    tasks.find({}).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"tasks fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit tasks
exports.editTasks = (req, res) => {

    tasks.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"tasks updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewTasks = (req, res) => {

    tasks.findById(req.params.id).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"tasks fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//fetch for one user
exports.viewSpecific = (req, res) => {

    tasks.find({userId:req.params.id}).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"tasks fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

exports.fetchForMatter = (req, res) => {
    tasks.find({matter: req.params.id})
      .then((data) => {
        res.status(200).json({ status: true, message: "tasks fetched for matter", data });
      })
      .catch((error) => {
        res.status(400).json({ status: false, message: error });
      });
  };

  exports.setTrue = (req, res) => {
    tasks.findByIdAndUpdate(req.params.id, {$set:{status: true}}, {new: true} )
      .then((data) => {
        res.status(200).json({ status: true, message: "tasks updated", data });
      })
      .catch((error) => {
        res.status(400).json({ status: false, message: error });
      });
  };

  exports.setFalse = (req, res) => {
    tasks.findByIdAndUpdate(req.params.id, {$set:{status: false}}, {new: true} )
      .then((data) => {
        res.status(200).json({ status: true, message: "tasks updated", data });
      })
      .catch((error) => {
        res.status(400).json({ status: false, message: error });
      });
  };

  //List controller

  // Create New list
exports.createList = (req, res) => {

    let list = new List(req.body)

        list.save().then(data => {
            res.status(200).json({status: true, message:"list Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteList = (req, res) => {
// console.log(req.params.id)
    List.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"list Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all tasks
exports.showAllLists = (req, res) => {

    List.find({}).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"List fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit tasks
exports.editLists = (req, res) => {

    List.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"List updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewList = (req, res) => {

    List.findById(req.params.id).populate("tasks userId").populate([{
        path: 'tasks',
        // model: 'Matters',
        populate: {
          path: 'matter',
          model: 'Matters'
        }}]).
        then(data => {
            res.status(200).json({status: true, message:"Lists fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//fetch for one user
exports.viewSpecificUserList = (req, res) => {

    List.find({userId:req.params.id}).
        then(data => {
            res.status(200).json({status: true, message:"Lists fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

