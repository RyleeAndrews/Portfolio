'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};



  aboutController.initAboutPage = function() {
    $('.article-body').hide();
    $('#about').show();
  }


  module.aboutController = aboutController;
})(app);
