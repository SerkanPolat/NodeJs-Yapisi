var Kullanici = require('../modules/kullanici');
module.exports.index = function(req,res){
    res.render('login');
}

module.exports.indexPost = function(req,res){
//Body Parser request Objesini Alir ve Duzenler.

//req e Body Ekliyor body Form Elemanlarina Erisiliyor.
console.log(req.body);
}

module.exports.singupGet = function(req,res){
    res.render('singup');
}
module.exports.singupPost = function(req,res){
    console.log(req.body);

    var yeniKullanici = new Kullanici({
        ad:req.body.ad,
        soyad:req.body.soyad,
        kullaniciAdi:req.body.username,
        sifre:req.body.password
    });
    console.log("Kullanici +"+yeniKullanici);
    yeniKullanici.save(function(err){

        if(err){
            console.log("HATA VAR : "+err);
            
            res.render('singup');
        }else{
            //Kayittan Sonra Yonlendirme Yapiliyor.
            res.render('KullaniciListesi');
        }
    });


}

module.exports.KullaniciListesi = function(req,res){
    Kullanici.find(function(err,result){
        console.log(result);
        res.render('KullaniciListesi',{kullanicilar:result});
    });


}