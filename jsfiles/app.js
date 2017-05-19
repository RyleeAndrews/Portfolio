'use strict';
var articles = [];
var articleView = {};
function Article (rawDataObj){
  this.title = rawDataObj.title;
  this.githubUrl = rawDataObj.githubUrl;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}


if ($(window).width() < 640) {
  $(document).ready(function() {
    $('ul').hide();
    $('#burgers').show();
  })
}
else {
  $(document).ready(function() {
    $('ul').show();
    $('#burgers').hide();
  })
}
$('#burgers').on('click', function () {
  $('ul').show();
})

$('i').on('click', function () {
  $('i').fadeOut('slow');
})
Article.all = [];
Article.prototype.toHtml = function (){
  let template = Handlebars.compile($('#articles-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  return template(this);
}
Article.fetchAll = function(){
  if (localStorage.rawData){
    Article.loadAll(JSON.parse(localStorage.rawData));
  }
}
