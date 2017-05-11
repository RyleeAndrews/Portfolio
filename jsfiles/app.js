'use strict';
var articles = [];
function Article (rawDataObj){
  this.title = rawDataObj.title;
  this.name = rawDataObj.name;
  this.githubUrl = rawDataObj.githubUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

$(document).ready(function () {
  $('ul li:first-child').remove()
})


$(document).ready(function() {
  $('body').css('background-color', 'beige');
})
