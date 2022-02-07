const dataobj = require('./data')
var bodyParser = require('body-parser')
 const express = require('express');
 const app = express();
 var cors = require('cors');
 app.use(bodyParser.urlencoded())
 app.use(bodyParser.json())
 
 
 app.use(cors())


 app.get('/',function(req,res){
     res.send(`<input type="button" value="admission" onclick="xhrreq()"\>`);
 });
 app.post('/postintialinput',function(req,res){
//    console.log(req.params)
//    console.log(req.body.data)
//    console.log(req)
  
//    var obj=req.body
//    console.log(obj)

  // console.loag(req);
     res.send(d);
 });
 app.get('/getadmissiondetails',function(req,res){
    res.send(dataobj);
});

 app.get('/getinitialinput',function(req,res){
    res.send([{id:1,name:'admision'},{id:2,name:'Acadamics'}]);
});



 app.listen(1000,function(){
     console.log('server started on port 1000')
 });