/* global $ */
'use strict';

const Item = (function(){

  const validateTitle = function(title) {
    if (!title) throw new TypeError('Please type in a title');
  };

  const validateUrl = function(url) {
    if (!url) throw new TypeError('Insert url address here');
  };

  const createList = function(title, url, description,rating) {
    return {
      title,
      url,
      description,
      rating,
      adding: false,
      delete: false,
      detail: false,
    };
  };


  return {
    validateTitle,
    validateUrl,
    createList,
  };

}());
