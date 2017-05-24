'use strict';
var app = app || {};


page('/', app.articleController.initArticlePage);
page('/about', app.aboutController.initAboutPage);

page();
