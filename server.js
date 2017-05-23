'use strict';
const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended:true});

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/index', function(request,response){
  console.log('Index html file being loaded');
  response.sendFile('public/index.html', {root: '.'});
})

app.post('/articles', bodyParser, function(request,response) {
  console.log(request.body);
  response.send('Posting to the server!');
})

app.listen(PORT, function(){
  console.log('Now on localhost' + PORT);
})
