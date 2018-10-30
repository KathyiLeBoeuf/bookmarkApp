/* global $ */
'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kathy/bookmarks';

  const getItems = function (callback) {
    $.getJSON(`${BASE_URL}`, callback);
    console.log(`I'm the GET request ${callback}`);
  };

  const createItems = function (item, success, error) {
    console.log(item);
    const newItems = JSON.stringify(item);
    console.log(newItems);
    $.ajax({
      url: `${BASE_URL}`,
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: newItems,
      success: success,
      error: error
    });
  };
  const updateItems = function (id, updateData, success, error) {
    // console.log(updateData);
    $.ajax({
      url: `${BASE_URL}/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(updateData),
      success: success,
      error: error
    });
  };
  const deleteItems = function (id, callback) {
    $.ajax({
      url: `${BASE_URL}/${id}`,
      method: 'DELETE',
      success: callback
    });
  };
  return {
    getItems,
    createItems,
    updateItems,
    deleteItems
  };
})();




