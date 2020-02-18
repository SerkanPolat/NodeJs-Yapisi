var express = require('express');
var router = express.Router();

var LoginController = require('../Controller/LoginController');
router.get('/',LoginController.index);
router.post('/',LoginController.indexPost);
router.get('/singup',LoginController.singupGet);
router.post('/singup',LoginController.singupPost);
router.get('/KullaniciListesi',LoginController.KullaniciListesi);
module.exports  = router;