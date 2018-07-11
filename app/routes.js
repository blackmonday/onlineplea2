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
    req.session.data['welsh-case'] = "No"
    
    res.redirect('/map/start-page')
    
});

router.post('/map/start-page', function (req, res) {
    
    req.session.data['your-details-3-validation-contact-numbers'] = ""
    req.session.data['your-details-3-validation-email-address'] = ""
    req.session.data['your-details-3-validation-dob'] = ""
    req.session.data['declaration-validation'] = ""
    
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

    req.session.data['nin-label'] = "National Insurance number (optional)"
    req.session.data['nin'] = ""

    req.session.data['dob-day'] = "1"
    req.session.data['dob-month'] = "1"
    req.session.data['dob-year'] = "1981"

    res.redirect('/map/find-your-case')
    
});

router.post('/map/find-your-case', function (req, res) {
    
    var defendantAddressPostcode = req.session.data['defendant-address-postcode']
    req.session.data['new-defendant-address-postcode'] = req.session.data['defendant-address-postcode']
    
    if (defendantAddressPostcode == "LL48 6ER" || defendantAddressPostcode == "LL486ER") {
        req.session.data['welsh-case'] = "Yes"
        req.session.data['defendant-address-city'] = "Portmeirion"
        req.session.data['defendant-address-county'] = "Penrhyndeudraeth"

        req.session.data['new-defendant-address-city'] = req.session.data['defendant-address-city']
        req.session.data['new-defendant-address-county'] = req.session.data['defendant-address-county']
    }
    
    var URN = req.session.data['URN']
    
    /* Transport for London */
    if ((URN == "TFL") || (URN == "tfl") || (URN == "TfL") || (URN == "21NT5181416")) {
        req.session.data['prosecutor'] = "Transport for London"
        req.session.data['charge-title'] = "You have 1 charge"
        req.session.data['charge-details-1'] = "On 19/01/2016 At wandsworth bridge rd SW6 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares did use in relation to the journey you were taking a ticket which had been issued for use by another person on terms that it is not transferable."
        req.session.data['charge-detail-2'] = "Contrary to byelaw 18(1) and 24 of the Railway Byelaws made under Section 219 of the Transport Act 2000 by the Strategic Railway Authority and confirmed under schedule 20 of the Transport Act 2000."
        req.session.data['charge-details-2'] = ""
        req.session.data['charge-details-3'] = ""
        req.session.data['charge-details-4'] = ""
        
    /* TV Licensing */
    } else if ((URN == "TVL") || (URN == "tvl") || (URN == "506123456C")) {
        req.session.data['prosecutor'] = "TV Licensing"
        req.session.data['charge-title'] = "Unlicensed use of a TV Receiver"
        req.session.data['charge-details-1'] = "That on 30/05/2018 at the above address you were found to have been using colour TV receiving equipment to watch or record live TV programmes at that address for an unspecified period without an appropriate licence, last using it on 30/05/2018."
        req.session.data['charge-details-2'] = "A colour TV set was observed from the entrance door to the property to be in use at 20:25 on 30/05/2018, the programme being shown was an episode of EastEnders."
        req.session.data['charge-details-3'] = "TV subscription package: Not stated"
        req.session.data['charge-details-4'] = "Occupation:  Not stated"
        req.session.data['charge-details-5'] = "Contrary to the Communications Act 2003 and Communications (Television Licensing) Regulations 2004."
        
        req.session.data['nin-label'] = "National Insurance number"
        req.session.data['nin'] = "MH 54 55 04 B"

    /* DVLA */
    } else if ((URN == "DVLA") || (URN == "dvla") || (URN == "29KWN02ZRR")) {
        req.session.data['prosecutor'] = "Driver & Vehicle Licensing Agency"
        req.session.data['charge-title'] = "Unlicensed keeping of motor vehicle"
        req.session.data['charge-details-1'] = "At 12:00 on 21 April 2018, failed to comply with a declaration or statement made under the Road Vehicles (Statutory Off-Road Notification) Regulations, in that you kept a Green Ford Focus registration mark WN02 ZRR on George Street, Croydon. The previous licence expired on 01/01/2018. The annual rate of duty applicable is £250."
        req.session.data['charge-details-2'] = "Charge Authorised by: Rohan Gye"
        req.session.data['charge-details-3'] = "Contrary to section 29(1) and (3A) of the Vehicle Excise and Registration Act 1994."
        req.session.data['charge-details-4'] = ""
        req.session.data['charge-details-5'] = ""        

    } else {
        req.session.data['prosecutor'] = "prosecutor"
        req.session.data['charge-title'] = "Generic charge title"
        req.session.data['charge-details-1'] = "Generic charge details..."
        req.session.data['charge-details-2'] = ""
        req.session.data['charge-details-3'] = ""
        req.session.data['charge-details-4'] = ""
    }
    
    res.redirect('/map/your-details')
    
});

router.post('/map/your-details', function (req, res) {
    
    var areTheseDetailsCorrect = req.session.data['are-these-details-correct'];
    if (areTheseDetailsCorrect == "Yes") {
        res.redirect('/map/your-details-3')
    } else if (areTheseDetailsCorrect == "No") {
        res.redirect('/map/your-details-2')
    } else {
        res.redirect('/map/your-details')
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
    
    if (req.session.data['email'] == "") {
        req.session.data['your-details-3-validation-email-address'] = "error"

        if (req.session.data['home-telephone'] == "" && req.session.data['mobile'] == "") {
            req.session.data['your-details-3-validation-contact-numbers'] = "error"
            res.redirect('/map/your-details-3')
        } else {
            req.session.data['your-details-3-validation-contact-numbers'] = ""
        }    
        
        res.redirect('/map/your-details-3')
    }    
    
    
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
    } else {
        res.redirect('/map/your-plea')
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
        
    } else {
        res.redirect('/map/guilty-plea')
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
    
    if (req.session.data['welsh-case'] == "Yes") {
        res.redirect('/map/not-guilty-plea-4-welsh')
    } else {
        res.redirect('/map/not-guilty-plea-4')
    }
    
});

router.post('/map/not-guilty-plea-4-welsh', function (req, res) {
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
    } else if ((employmentStatus == "Unemployed") || (employmentStatus == "Other (for example, retired, student)") || (employmentStatus == "I have no income")) {
        res.redirect('/map/your-outgoings')
    } else {
        res.redirect('/map/your-income')
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
    } else {
        res.redirect('/map/deductions-from-earnings')
    }
    
});

router.post('/map/your-employment', function (req, res) {
    
    if (req.session.data['returnToCYA'] == "Yes") {
        res.redirect('check-your-answers')
    } else if (req.session.data['returnToCYA'] == "No") {
        res.redirect('/map/your-outgoings')
    } else {
        res.redirect('/map/your-employment')
    }
    
});

router.post('/map/your-outgoings', function (req, res) {
    
    req.session.data['returnToCYA'] = "Yes"
    
    var yourOutgoings = req.session.data['your-outgoings'];
    if (yourOutgoings == "Yes") {
        res.redirect('/map/your-monthly-outgoings')
    } else if (yourOutgoings == "No") {
        res.redirect('/map/check-your-answers')
    } else {
        res.redirect('/map/your-outgoings')
    }

});

router.post('/map/your-monthly-outgoings', function (req, res) {
    
    if (req.session.data['other-expenses'] == "No") {
        req.session.data['other-expenses-details'] = ""
        req.session.data['other-expenses-details-amount'] = ""
    }
    
    if (req.session.data['other-expenses-details'] != "") {
        req.session.data['other-expenses-details'] = '' + req.session.data['other-expenses-details']
    }
    
    var total = 
        Number(req.session.data['accommodation']) + 
        Number(req.session.data['council-tax']) + 
        Number(req.session.data['household-bills']) + 
        Number(req.session.data['travel-expenses']) + 
        Number(req.session.data['child-maintenance']) + 
        Number(req.session.data['other-expenses-details-amount'])

    req.session.data['outgoings-total'] = parseFloat(total).toFixed(2)
    
    if (req.session.data['outgoings-total'] < 0) {
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
    
    if (req.session.data['confirm'] == "I confirm") {
        res.redirect('/map/confirmation')
    } else {
        req.session.data['declaration-validation'] = "error"
        res.redirect('/map/declaration')
    }
    
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
      
