const router = require('express').Router()
const controller = require('./tasks.controller')


router.post("/create", controller.createTask)
router.get("/delete/:id", controller.deleteTask)
router.get("/showall", controller.showAllTasks)
router.post("/edit/:id", controller.editTasks)
router.get("/view/:id", controller.viewTasks)
router.get("/viewforuser/:id", controller.viewSpecific)
router.get("/fetchformatter/:id", controller.fetchForMatter)
router.get("/updatetask/:id", controller.setTrue)
router.get("/setfalse/:id", controller.setFalse)

//lists
router.post("/list/create", controller.createList)
router.get("/list/delete/:id", controller.deleteList)
router.get("/list/showall", controller.showAllLists)
router.post("/list/edit/:id", controller.editLists)
router.get("/list/view/:id", controller.viewList)
router.get("/list/viewforuser/:id", controller.viewSpecificUserList)


module.exports = router