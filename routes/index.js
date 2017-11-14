var express = require('express');
var router = express.Router();
var fs=require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/simple',function (req,res,next) {
  res.render('simple');

});


router.get('/list',function (req,res,next) {
   var directory="data";
   var files= fs.readdirSync(directory);
   //console.log(files);
    //res.send(JSON.stringify(files));
    res.render('list')
});



router.post('/save',function (req,res,next) {
    
})




module.exports = router;
