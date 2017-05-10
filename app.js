'use strict';

function Portfolio(rawObjectData){
  this.name = rawObjectData.name;
  this.email = rawObjectData.email;
  this.phoneNumber = rawObjectData.phoneNumber;
  this.job = rawObjectData.job;
  this.githubUrl = rawObjectData.githubUrl;
}

$(document).ready(function() {
  $('body').css('background-color', 'beige');
})
