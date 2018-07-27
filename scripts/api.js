/* global $ */
'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kathy/items';

  const getItems = function (callback) {
    //$.getJSON(`${BASE_URL}/items`, callback);
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'GET',
      dataType: 'json',
      data: {part: 'snippet'},
      success: function(data) {
        console.log(data);
      }
    });
  };
  const createItems = function(items, callback) {
    const newItems = JSON.stringify({
      items,
    });
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/JSON',
      data: newItems,
      success: callback,
    });

  };
  return {
    getItems,
    createItems,
  };
})();




