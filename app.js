var express = require('express');
var app = express();
var path = require('path');
var ejsLayout = require('express-ejs-layouts');
var bodyparser = require('body-parser');
var db = require('./app_server/modules/db');

app.use('/public',express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/app_server/views'));
app.use(ejsLayout);
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
/*Tum Route Yonlendirme Islemlerini Tek Dosyada
Topladik Parametre Olarak Sadece app Gonderdik.
*/
require('./app_server/Routes/RouteManager')(app);
/*
var Kullanici = require('./app_server/modules/kullanici');
var yeniKullanici = new Kullanici({
    ad:'Serkan',
    soyad:'Polat',
    kullaniciAdi : 'serkanp',
    sifre:'123456'
});

yeniKullanici.save(function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Kullanici Kaydedildi');
    }
});
*/
app.listen(8000);