'use strict';
const pg = require('pg');
const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();
const conString = 'postgres://localhost:5432';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/index', function(request,response){
  console.log('Index html file being loaded');
  response.sendFile('public/index.html', {root: '.'});
})

app.post('/articles', bodyParser, function() {
  console.log(request.body);
  response.send('Posting to the server!');
})

app.listen(PORT, function(){
  console.log('Now on localhost' + PORT);
})

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}
app.get('/github/*', proxyGitHub);
