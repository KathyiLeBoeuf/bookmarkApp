/* global $ */
'use strict';

const Item = (function(){


  const validateTitle = function(title) {
    if (!title) throw new TypeError('Please type in a title');
  };
  const validateUrl = function(url) {
    if (!url) throw new TypeError('Insert url address here');
	};
	const validateDesc = function(url) {
    if (!desc) throw new TypeError('Add a description here');
	};
	const validateRating = function(url) {
		const rating =
    if (!rating) throw new TypeError('Give your bookmark a rating');
  };

  const createList = function(title, url, desc, rating) {
    return {
			id,
      title,
      url,
      desc,
      rating,
      adding: false,
      delete: false,
			detail: false,
			edit: false,
    };
  };


  return {
    validateTitle,
		validateUrl,
		validateDesc,
		validateRating,
    createList,
  };

}());
