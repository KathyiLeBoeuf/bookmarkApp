/* global $ */
'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kathy';

  const getItems = function (callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
    console.log(`I'm the GET request ${callback}`);
  };

  const createItems = function (item, callback) {
    console.log(item);
    const newItems = JSON.stringify(item);
    console.log(newItems);
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: newItems,
      success: callback,
    });
  };
  const updateItems = function (id, updateData, callback) {
    console.log(updateData);

    $.ajax({
      url: `${BASE_URL}/bookmarks/${id.id}`,
      method: 'PATCH',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(updateData),
      success: callback
    });
  };
  const deleteItems = function (id,  callback) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id.id}`,
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
}) ();




