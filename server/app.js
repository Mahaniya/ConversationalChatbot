
const dataobj = require('./data')
var bodyParser = require('body-parser')
 const express = require('express');
 const app = express();
 var cors = require('cors');
const dataobject = require('./data');
//  app.use(bodyParser.urlencoded())
//  app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
 
 app.use(cors())

 app.get('/getinitialinput',function(req,res){
    //res.send([{id:1,name:'admision'},{id:2,name:'Acadamics'}]);
    res.send(dataobj.mainbuttons);
});
app.post('/postintialinput',function(req,res){
    console.log(req.body);
    console.log(req.body.id);
    if(req.body.id == 1)
    {
        res.send(dataobj.admission);
    }
    if(req.body.id == 2)
    {
        res.send(dataobj.acadamics);
    }
    if(req.body.id == 3){
        res.send(dataobj.rulesandregulations)
    }
    if(req.body.id == 4){
        res.send(dataobj.contactdetails)
    }
     });
function normalizePort(val)
{
    var port = parseInt(val,10);
    if(isNaN(port))
    {
        return val
    }
    if(port >= 0)
    {
return port
    }
    return false
}

 var port = normalizePort(process.env.PORT || '1000')
app.listen(port,function(){
     console.log('server started on port 1000')
 });