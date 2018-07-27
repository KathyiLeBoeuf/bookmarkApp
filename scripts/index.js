/* global $ */
'use strict';

const index = (function () {



  return {

  };
})();





$.getJSON('https://thinkful-list-api.herokuapp.com/kathy/bookmarks', (response) => {
  console.log('api response:', response);
});
  api.createItems('pears', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});



$();