/* global $ */
'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kathy/bookmarks';

  const getItems = function (callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
    console.log(`I'm the GET request ${callback}`);

    /*$.ajax({
      url: `${BASE_URL}/items`,
      method: 'GET',
      dataType: 'json',
      data: {part: 'snippet'},
      success: function(data) {
      console.log(data);
      } */
  };

  const createItems = function (items, callback) {
    const newItems = JSON.stringify({
      items,
    });
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      dataType: 'application/JSON',
      data: newItems,
      success: callback,
    });
  };
  const updateItems = function (id, callback) {
    $.ajax({
      url: `${BASE_URL}/items/:id`,
      method: 'PATCH',
      dataType: 'application/JSON',
      data: newItems,
      success: callback,
    });
  };
  const deleteItem = function (id,  callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      data: id,
      success: callback
    });
  };

  return {
    getItems,
    createItems,
    updateItems,
    deleteItem
  };
}) ();




