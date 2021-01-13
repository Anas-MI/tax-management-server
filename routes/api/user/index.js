const router = require('express').Router()
const controller = require('./user.controller')

router.get('/list', controller.list)
router.post('/assign-admin/:username', controller.assignAdmin)
router.post('/resetpassword', controller.resetpassword)
router.post('/setpassword', controller.setpassword)
router.post('/verify', controller.verify)
router.get('/delete/:id', controller.deleteUser)
router.get('/count', controller.count)
router.post('/update/:id', controller.updateUser)
router.get('/view/:id', controller.viewUser)





module.exports = router