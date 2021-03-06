const router = require('express').Router()
const authMiddleware = require('../../middlewares/auth')
const auth = require('./auth')
const user = require('./user')
const admin = require('./admin')
const plans = require("./plans")
const features = require("./features")
const blogs = require("./blogs")
const contactus = require("./contactUs")
const company  = require("./company")
const contact = require("./contacts")
const matter = require("./matters")
const tasks = require("./tasks")
const calendar = require("./calendar")
const activity = require("./activities")
const document = require("./documents")
const billing = require("./billing")
const email=require('./email')
const account = require("./accounts")
const support = require("./support")
const Communication = require("./communication")
const Notes = require("./notes")
const Subscription = require("./subscription")
const Footer = require("./footer")
const logs = require("./logs")
const aboutus = require('./aboutUs')
const properties = require('./properties')
const homeproperties = require('./homeproperties')

router.use('/contactus', contactus)
router.use('/logs', logs)
router.use('/blogs', blogs)
router.use('/features', features)
router.use('/plans', plans)
router.use('/auth', auth)
router.use('/matter', matter)
router.use('/company', company)
router.use('/contact', contact)
router.use('/billing', billing)
// router.use('/user', authMiddleware)
router.use('/user', user)
router.use('/tasks', tasks)
router.use("/calendar", calendar)
router.use("/activity", activity)
router.use("/email",email)
router.use('/admin', admin)
router.use('/document', document)
router.use('/account', account)
router.use('/ticket', support)
router.use('/communication', Communication)
router.use('/notes', Notes)
router.use('/subscription', Subscription)
router.use("/footer", Footer)
router.use('/aboutus/', aboutus)

//New Routes for tax management
router.use('/properties', properties )
router.use('/homeproperties',homeproperties)

module.exports = router