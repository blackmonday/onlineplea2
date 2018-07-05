const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

module.exports = router

router.post('/', function (req, res) {
    
    req.session.data['returnToCYA'] = "No"
    
    res.redirect('/map/start-page')
    
});

router.post('/map/start-page', function (req, res) {

    req.session.data['defendant-first-name'] = "Sam"
    req.session.data['defendant-last-name'] = "Smith"
    req.session.data['defendant-address-line-1'] = "38A Baker Street"
    req.session.data['defendant-address-line-2'] = ""
    req.session.data['defendant-address-city'] = "London"
    req.session.data['defendant-address-county'] = ""
    req.session.data['defendant-address-postcode'] = ""
    
    req.session.data['new-defendant-first-name'] = req.session.data['defendant-first-name']
    req.session.data['new-defendant-last-name'] = req.session.data['defendant-last-name']
    req.session.data['new-defendant-address-line-1'] = req.session.data['defendant-address-line-1']
    req.session.data['new-defendant-address-line-2'] = req.session.data['defendant-address-line-2']
    req.session.data['new-defendant-address-city'] = req.session.data['defendant-address-city']
    req.session.data['new-defendant-address-county'] = req.session.data['defendant-address-county']
    req.session.data['new-defendant-address-postcode'] = req.session.data['defendant-address-postcode']
    
    req.session.data['nin'] = ""
    
    req.session.data['dob-day'] = "1"
    req.session.data['dob-month'] = "1"
    req.session.data['dob-year'] = "1981"
    
    req.session.data['charge-title'] = "Passenger failing to produce a ticket"
    req.session.data['charge-details-1'] = "On 17 Feb 2017 At Mill Mead Road N17. Being a passenger on a Public service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares where the vehicle was being operated by a Driver without a Conductor did not as directed by the Driver an Inspector or a Notice displayed on the vehicle pay the fare for the journey in accordance with the direction. Contrary to byelaw 18(1) and 24 of the Railway Byelaws made under Section 219 of the Transport Act 2000 by the Strategic Railway Authority and confirmed under schedule 20 of the Transport Act 2000."
    req.session.data['charge-details-2'] = ""
    req.session.data['charge-details-3'] = ""
    req.session.data['charge-details-4'] = ""

    res.redirect('/map/find-your-case')
    
});

router.post('/map/find-your-case', function (req, res) {
    
    var defendantAddressPostcode = req.session.data['defendant-address-postcode']
    req.session.data['new-defendant-address-postcode'] = req.session.data['defendant-address-postcode']
    
    if (defendantAddressPostcode == "LL48 6ER" || defendantAddressPostcode == "LL486ER") {
        req.session.data['defendant-address-city'] = "Portmeirion"
        req.session.data['defendant-address-county'] = "Penrhyndeudraeth"

        req.session.data['new-defendant-address-city'] = req.session.data['defendant-address-city']
        req.session.data['new-defendant-address-county'] = req.session.data['defendant-address-county']
    }
    
    var URN = req.session.data['URN']
    
    if (URN == "xxx") {
        // different URN will have data for different prosecutors - DATA TO BE CONFIRMED
    }

    res.redirect('/map/your-details')
    
});

router.post('/map/your-details', function (req, res) {
    
    var areTheseDetailsCorrect = req.session.data['are-these-details-correct'];
    if (areTheseDetailsCorrect == "Yes") {
        res.redirect('/map/your-details-3')
    } else if (areTheseDetailsCorrect == "No") {
        res.redirect('/map/your-details-2')
    }

});

router.post('/map/your-details-2', function (req, res) {
    
    req.session.data['defendant-first-name'] = req.session.data['new-defendant-first-name']
    req.session.data['defendant-last-name'] = req.session.data['new-defendant-last-name']
    req.session.data['defendant-address-line-1'] = req.session.data['new-defendant-address-line-1']
    req.session.data['defendant-address-line-2'] = req.session.data['new-defendant-address-line-2']
    req.session.data['defendant-address-city'] = req.session.data['new-defendant-address-city']
    req.session.data['defendant-address-county'] = req.session.data['new-defendant-address-county']
    req.session.data['defendant-address-postcode'] = req.session.data['new-defendant-address-postcode']

    res.redirect('/map/your-details-3')
    
});

router.post('/map/your-details-3', function (req, res) {
    
    //res.redirect('/map/your-plea')
    
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-plea')
    }
    
});

router.post('/map/your-plea', function (req, res) {

    var howDoYouPlead = req.session.data['how-do-you-plead'];
    if (howDoYouPlead == "Guilty") {
        res.redirect('/map/guilty-plea')
    } else if (howDoYouPlead == "Not guilty") {
        res.redirect('/map/not-guilty-plea')
    }

});

router.post('/map/guilty-plea', function (req, res) {

    var guiltyPleaComeToCourt = req.session.data['guilty-plea-come-to-court'];
    if (guiltyPleaComeToCourt == "Yes, I want to come to court") {
        res.redirect('/map/your-court-hearing')
    } else if (guiltyPleaComeToCourt == "No, I do not want to come to court") {
        
        if (req.session.data['returnToCYA'] == "Yes") {
            res.redirect('check-your-answers')
        } else if (req.session.data['returnToCYA'] == "No") {
            res.redirect('/map/your-finances')
        }
        
    }

});

router.post('/map/your-court-hearing', function (req, res) {

    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-finances')
    }
    
});

router.post('/map/not-guilty-plea', function (req, res) {
    res.redirect('/map/not-guilty-plea-2')
});

router.post('/map/not-guilty-plea-2', function (req, res) {
    res.redirect('/map/not-guilty-plea-3')
});

router.post('/map/not-guilty-plea-3', function (req, res) {
    res.redirect('/map/not-guilty-plea-4')
});

router.post('/map/not-guilty-plea-4', function (req, res) {
    
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-finances')
    }
    
});

router.post('/map/your-finances', function (req, res) {
    res.redirect('/map/your-income')
});

router.post('/map/your-income', function (req, res) {
    
    var employmentStatus = req.session.data['employment-status'];
    var claimingBenefits = req.session.data['claiming-benefits'];
    
    if (claimingBenefits == "Yes") {
        res.redirect('/map/your-benefits')
    } else if ((employmentStatus == "Employed (full or part-time)") || (employmentStatus == "Self-employed")) {
        res.redirect('/map/deductions-from-earnings')
    } else if ((employmentStatus == "Unemployed") || (employmentStatus == "Other (for example, retired, student)")) {
        res.redirect('/map/your-outgoings')
    }
    
});

router.post('/map/your-benefits', function (req, res) {

    var employmentStatus = req.session.data['employment-status']
    
    if ((employmentStatus == "Employed (full or part-time)") || (employmentStatus == "Self-employed")) {
        res.redirect('/map/deductions-from-earnings')
    } else {
        res.redirect('/map/your-outgoings')
    }
    
});

router.post('/map/deductions-from-earnings', function (req, res) {
    
    var deductFromEarnings = req.session.data['deduct-from-earnings'];
    if (deductFromEarnings == "Yes") {
        res.redirect('/map/your-employment')
    } else if (deductFromEarnings == "No") {
        res.redirect('/map/your-outgoings')
    }
    
});

router.post('/map/your-employment', function (req, res) {
    
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-outgoings')
    }
    
});

router.post('/map/your-outgoings', function (req, res) {
    
    req.session.data['returnToCYA'] = "Yes"
    
    var yourOutgoings = req.session.data['your-outgoings'];
    if (yourOutgoings == "Yes") {
        res.redirect('/map/your-monthly-outgoings')
    } else if (yourOutgoings == "No") {
        res.redirect('/map/check-your-answers')
    }

});

router.post('/map/your-monthly-outgoings', function (req, res) {
    
    if (req.session.data['other-expenses'] == "No") {
        req.session.data['other-expenses-details'] = ""
        req.session.data['other-expenses-details-amount'] = ""
    }
    
    if (req.session.data['other-expenses-details'] != "") {
        req.session.data['other-expenses-details'] = 'including: ' + req.session.data['other-expenses-details']
    }
    
    var total = 
        Number(req.session.data['accommodation']) + 
        Number(req.session.data['council-tax']) + 
        Number(req.session.data['household-bills']) + 
        Number(req.session.data['travel-expenses']) + 
        Number(req.session.data['child-maintenance']) + 
        Number(req.session.data['other-expenses-details-amount'])

    req.session.data['outgoings-total'] = parseFloat(total).toFixed(2)
    
    if (req.session.data['outgoings-total'] <= 0) {
        req.session.data['outgoings-total'] = "No details given"
    } else {
        req.session.data['outgoings-total'] = "£" + parseFloat(total).toFixed(2)
    }
    
    res.redirect('/map/check-your-answers')
    
});

router.post('/map/check-your-answers', function (req, res) {    
    res.redirect('/map/declaration')
});

router.post('/map/declaration', function (req, res) {
    res.redirect('/map/confirmation')
});

router.post('/map/confirmation', function (req, res) {
    res.redirect('/map/give-feedback')
});

router.post('/map/give-feedback', function (req, res) {
    res.redirect('/map/feedback-submitted')
});

router.post('/map/feedback-submitted', function (req, res) {
    res.redirect('/map/start-page')
});

router.post('/prototype-admin/clear-data-timeout', function (req, res) {
    req.session.destroy();
    res.redirect('/map/start-page')
});
      
