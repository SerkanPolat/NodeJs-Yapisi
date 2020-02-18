var express = require('express');
var router = express.Router();

var HomeController = require('../Controller/HomeController');
router.get('/',HomeController.index);

module.exports = router;