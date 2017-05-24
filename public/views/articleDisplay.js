'use strict';
const articleDisplay = {};

articleDisplay.initIndexPage = function() {
  Article.all.forEach(function(article) {
    $('.article-body').append(article.toHtml())
  });

}
