'use strict';
var articles = [];
function Article (rawDataObj){
  this.title = rawDataObj.title;
  this.githubUrl = rawDataObj.githubUrl;
  this.author = rawDataObj.author;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}


$(document).ready(function() {
  $('body').css('background-color', 'beige');
})

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
Article.prototype.toHtml = function (){
  var $newArticle = $('new-article').clone();
};
