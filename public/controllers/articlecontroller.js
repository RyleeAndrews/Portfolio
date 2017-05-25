'use strict';
(function(module) {
  const articleController = {};
  articleController.index = () => {
    app.Article.fetchAll(app.articleDisplay.initIndexPage);

    $('.article-body').hide();
    $('.article-body').show();
  };

  module.articleController = articleController;
})(app);
