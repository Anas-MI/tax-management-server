const Billing = require('../../../models/bills')
const SaveBill = require('../../../models/savedBills')



// Create New Bill
exports.create = (req, res) => {

    let billing = new Billing(req.body)

        billing.save().then(data => {
            res.status(200).json({status: true, message:"Billing Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a bill
exports.delete = (req, res) => {
// console.log(req.params.id)
Billing.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Bill Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all bills
exports.showAll = (req, res) => {

    Billing.find({}).
        then(data => {
            res.status(200).json({status: true, message:"bills fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit bills
exports.editBills = (req, res) => {

    Billing.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Bill updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewBills = (req, res) => {

    Billing.findById(req.params.id).populate("client destination").
        then(data => {
            res.status(200).json({status: true, message:"bills fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewSpecific = (req, res) => {

    Billing.find({userId:req.params.id}).populate("client destination").
        then(data => {
            res.status(200).json({status: true, message:"matters fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//Save a bill
exports.saveBill = (req, res) => {

    let saveBill = new SaveBill(req.body)

    saveBill.save().then(data => {
        res.status(200).json({status: true, message:"Bill Saved", data})

    }).catch(error => {
    res.status(200).json({status: false, message:error})

    })
}


//Delete a bill
exports.deleteSaveBill = (req, res) => {
    // console.log(req.params.id)
    SaveBill.findByIdAndRemove(req.params.id).
            then(data => {
                res.status(200).json({status: true, message:"Bills Removed", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }
    
    //Show all bills
    exports.showAllSaveBill = (req, res) => {
    
        SaveBill.find({}).populate("matter").
            then(data => {
                res.status(200).json({status: true, message:"bills fetched", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }
    
    //Edit bills
    exports.editBillsSaveBill = (req, res) => {
    
        SaveBill.findByIdAndUpdate(req.params.id, req.body, {new: true}).
            then(data => {
                res.status(200).json({status: true, message:"Bill updated", data})
    
            }).catch(error => {
            res.status(400).json({status: false, message:error})
    
            })
    }
    
    exports.viewBillsSaveBill = (req, res) => {
    
        SaveBill.findById(req.params.id).
            then(data => {
                res.status(200).json({status: true, message:"bills fetched", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }
    
    
    //fetch for one user
    exports.viewSpecificSaveBill = (req, res) => {
    
        SaveBill.find({userId:req.params.id}).populate("matter client").
            then(data => {
                res.status(200).json({status: true, message:"bill fetched", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }
    
    exports.viewSpecificSaveBillForMatter = (req, res) => {
    
        SaveBill.find({userId:req.params.id, matter:req.params.matter}).populate("matter client").
            then(data => {
                res.status(200).json({status: true, message:"bill fetched", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }
    
        
        
    //fetch for one user and client
    exports.viewSpecificSaveBillClient = (req, res) => {
    
        SaveBill.find({userId:req.params.id, client:req.params.contact}).
            then(data => {
                res.status(200).json({status: true, message:"bill fetched", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }