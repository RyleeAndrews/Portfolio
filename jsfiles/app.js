'use strict';
var articles = [];
function Article (rawDataObj){
  this.title = rawDataObj.title;
  this.githubUrl = rawDataObj.githubUrl;
  this.author = rawDataObj.author;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}


$(document).ready(function () {
  $('ul li').eq(1).remove();
})

$(document).ready(function() {
  $('body').css('background-color', 'beige');
})
$(document).ready(function () {
  $('#main-nav').hide();
})
$('#icon').on('click', function () {
  $('#main-nav').show();
})
Article.prototype.toHtml = function (){
  var $newArticle = $('new-article').clone();
};
