'use strict';
var app = app || {};
(function(){
function Article (rawDataObj) {
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
}

Article.all = [];
let index = (acc,cur);
Article.all.map(function(articles){
  return {
    body: this.body,
    title: this.title,
  }
})
Article.all.reduce(index);
Article.prototype.toHtml = function() {
  let template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

Article.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  })
  rawdata.forEach(function(article){
    $('.article-body').append(article.toHtml());
  });
}

Article.fetchAll = function() {
  if (localStorage.rawData) {

    Article.loadAll(JSON.parse(localStorage.rawData));
    articleDisplay.initIndexPage();
  } else {

    $.getJSON('jsfiles/blog.json')
    .then(function (rawData){
      localStorage.rawData = JSON.stringify(rawData);
      Article.loadAll(rawData);
      Article.all.forEach(function(article){
        $('.article-body').append(article.toHtml());
      });
    },
    function(err){
      console.log(err);
    }
  )
  }
}

if ($(window).width() < 640) {
  $(document).ready(function() {
    $('ul').hide();
    $('#burgers').show();
  })
}
else {
  $(document).ready(function() {
    $('ul').show();
    $('#burgers').hide();
  })
}
$('#burgers').on('click', function () {
  $('ul').show();
})

$('i').on('click', function () {
  $('i').fadeOut('slow');
})
})(app);
