var express = require('express');
var router = express.Router();
var fs = require('fs');

// generate filename from id
router.param('id', function(req, res, next, id) {
    req.fileName = 'weather' + (id || 0) + '.json';
    next();
});

/* GET api/weather page. */
router.get('/weather/:id', function(req, res, next) {
    
    res.sendFile(req.fileName, { root: __dirname + '/../api/' }, function(err) {
        if (err) {
            next(err);
        }
        else {
            console.log('Sent:', req.fileName);
        }
    });

});

module.exports = router;
