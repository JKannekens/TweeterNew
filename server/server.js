const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

  router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
  });

  router.get('/register',function(req,res){
    res.sendFile(path.join(__dirname+'/register.html'));
  });

app.use('/', router);
app.listen(port, function() {console.log(`Server listening on port ${port}`)})

