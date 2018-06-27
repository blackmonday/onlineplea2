const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

module.exports = router

router.post('/', function (req, res) {
    res.redirect('/map/start-page')
});

router.post('/map/start-page', function (req, res) {

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

router.post('/map/your-details-3', function (req, res) {
    res.redirect('/map/your-plea')
});

