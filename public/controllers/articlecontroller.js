'use strict';
var app = app || {};

(function(module) {
  const articleController = {};

  articleController.initArticlePage = function(){
    app.Article.fetchAll(app.articleView.initIndexPage);
    $('.main-nav').hide();
    $('.article-body').show();
  }
  module.articleController = articleController;
})(app);
