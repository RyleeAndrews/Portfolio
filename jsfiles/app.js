'use strict';
var articles = [];
function Article (rawDataObj){
  this.title = rawDataObj.title;
  this.githubUrl = rawDataObj.githubUrl;
  this.author = rawDataObj.author;
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
  var $newArticle = $('new-article').clone();
};
