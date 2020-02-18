var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/yenidb', {useUnifiedTopology: true ,useNewUrlParser: true},function(err,err){  
  
if(err){

        console.log("Deneme  "+err);
    }
    else{
        console.log('Baglanti Basarili YeniDb ye Baglandi');
    }
});

const connection = mongoose.connection;