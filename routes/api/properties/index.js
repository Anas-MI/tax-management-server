const router = require('express').Router()
const controller = require('./properties.controller')


router.post("/create", controller.createTask)
router.get("/delete/:id", controller.deleteTask)
router.get("/showall", controller.showAllTasks)
router.post("/edit/:id", controller.editTasks)
router.get("/view/:id", controller.viewTasks)
router.get("/viewforuser/:id", controller.viewSpecific)


module.exports = router