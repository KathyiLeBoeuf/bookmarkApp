/* global $  */
'use strict';

$(document).ready(function () {
  bookmarks.bindEventListeners();

  //gets bookmarks info from the server,
  api.getItems((bookmarks) => {
    bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
    // bookmarks.render();
  });
});

/* works!! */
/*
$.getJSON('https://thinkful-list-api.herokuapp.com/kathy/bookmarks', (response) => {
  console.log('api response:', response);
});

api.createItems({'title': 'Dakota', 'url': 'https://www.thecutestGrandson.edu'}, callback => {
  console.log('api response in POST:', callback);
});


api.updateItems({'id': 'cjk7346vh000b0kzf6g2rm059'} ,  {rating: 2},  callback => {
  console.log('api update PATCH is working', callback);
});


api.deleteItems({'id': 'cjk7346vh000b0kzf6g2rm059'}, response => {
  console.log('api response in DELETE:', response);
});
*/
