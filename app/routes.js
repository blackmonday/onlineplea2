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

    req.session.data['defendant-address-line-1'] = "line 1"
    req.session.data['defendant-address-line-2'] = "line 2"
    req.session.data['defendant-address-city'] = "city"
    req.session.data['defendant-address-postcode'] = "postcode"
    
    res.redirect('/map/find-your-case')
    
});

router.post('/map/find-your-case', function (req, res) {
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