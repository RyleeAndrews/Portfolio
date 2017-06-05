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
$('#about').hide();

$('#burger').on('click', function () {
  $('ul').show();
})

$('.fa-address-book').on('click', function(){
  $('#about').show()
})

$('.fa-home').on('click', function(){
  $('#about').hide();
})

$('i').on('click', function () {
  $('i').fadeOut('slow');
})

Article.prototype.toHtml = function (){
  var $newArticle = $('new-article').clone();
};
