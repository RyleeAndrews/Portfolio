'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};



  aboutController.initAboutPage = function() {
    $('.main-nav').hide();
    $('.fa-address-book').show();
  }


  module.aboutController = aboutController;
})(app);
