var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kullaniciSchema = new Schema({
    ad:String,
    soyad:String,
    kullaniciAdi : {type:String,required:true,unique:true},
    sifre:{type:String,required:true}
},{collection:'kullanicilar'});

var kullanici = mongoose.model('Kullanici',kullaniciSchema);
module.exports = kullanici;