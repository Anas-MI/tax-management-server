const router = require('express').Router()
const controller = require('./billing.controller')


router.post("/create", controller.create)
router.get("/delete/:id", controller.delete)
router.get("/showall", controller.showAll)
router.post("/edit/:id", controller.editBills)
router.get("/view/:id", controller.viewBills)
router.get("/viewforuser/:id", controller.viewSpecific)

//Saved bills
router.post("/bill/create", controller.saveBill)
router.get("/bill/delete/:id", controller.deleteSaveBill)
router.get("/bill/showall", controller.showAllSaveBill)
router.post("/bill/edit/:id", controller.editBillsSaveBill)
router.get("/bill/view/:id", controller.viewBillsSaveBill)
router.get("/bill/viewforuser/:id", controller.viewSpecificSaveBill)
router.get("/bill/viewforuser/:id/:matter", controller.viewSpecificSaveBillForMatter)


router.get("/bill/viewforcontact/:id/:contact", controller.viewSpecificSaveBillClient)


module.exports = router