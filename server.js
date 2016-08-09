const express =require('express');
const bodyParser =require('body-parser');
const app = express();
var post = require('./public/css/PostTransformBarcode');
var barcode = require('./public/css/BarcodeTransformPost');
// var cors = require('cors');

app.use(bodyParser.urlencoded({extend:true}));
// app.use(cors());

app.use(express.static('public'));
app.post('/ZipcodeToBarcode',function (req,res) {
    res.send(new post().postTransformBarcode(req.body.code));
});
app.post('/BarcodeToZipcode',function (req,res) {
    res.send(new barcode().BarcodeTransformPost(req.body.code));
});
app.listen(3000,function () {
    console.log('Example app listening on port 3000!');
});


module.exports = app;