'use strict';
var articles = [];
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
    $('#burger').show();
  })
}
else {
  $(document).ready(function() {
    $('ul').show();
  })
}
$('#burger').on('click', function () {
  $('ul').show();
})
$('ul li:first').on('click', function() {
  $('ul li:first').hide();
})
$('ul li').eq(1).on('click', function() {
  $('ul li:first').show();
})
$('i').on('click', function () {
  $('i').fadeOut('slow');
})
Article.prototype.toHtml = function (){
  var template = $('#articles-template').html()
  var templateRender = Handlebars.compile(template);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  return templateRender(this);


};
rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  articles.push(new Article(articleObject));
});

articles.forEach(function(article){
  $('.article-body').append(article.toHtml());
});
