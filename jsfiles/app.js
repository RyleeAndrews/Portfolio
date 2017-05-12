'use strict';
var articles = [];
var articleView = {};
function Article (rawDataObj){
  this.title = rawDataObj.title;
  this.author = rawDataObj.author;
  this.githubUrl = rawDataObj.githubUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

$(document).ready(function () {
  $('.icons').hide();
})
$('#ham-icon').on('click', function () {
  $('.icons').show();
})
$(document).ready(function() {
  $('body').css('background-color', 'beige');
})
