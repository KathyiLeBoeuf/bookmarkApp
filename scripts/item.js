/* global $ */
'use strict';

//const Item = (function(){

const generateAddBookmarkForm = function() {
  return `<form id="addForm">
<label for="title">Title</label>
<input type="text" name="title" required class="form__bookmark--title" placeholder="TITLE" data-item-id="${bookmark.title}"></input>
<label for="url">Url</label>
<input type="url" name="url" required pattern="https?://.+" class="form__bookmark--url" placeholder="URL" data-item-id="${item.url}"></input>
<label for="description" >Description</label>
<textarea name="description" class="form__bookmark--desc" rows="10" cols="33"data-item-id="${bookmark.desc}"></textarea>
<label for="rating">Add a Rating</label>
<select class="nav__select js-nav__select">
	<option>5</option>
	<option>4</option>
	<option>3</option>
	<option>2</option>
	<option>1</option>
</select>
<button class="form__submit ">submit</button>
</form>`;
};
const generateBookmark = function() {
  return `
	<ul class="js-book--ul">
	<li class="js-book--li" data-item-id="${bookmark.id}">
		<span>${title}</span>
	</li>
	<li class="js-book--li" data-item-id="${rating}"></li>
	<li><button class="btn__delete">Delete</button></li>
</ul>`;
};
const generateExpandedBookmark = function() {
  return `<ul class="js-book__details--ul">
	<li class="js-book__details--li"><button class="btn">Delete</button></li>
	<li class="js-book__details--li" data-item-id="${bookmark.id}"><span>${title}</span></li>
	<li class="js-book__details--li" data-item-id="${desc}"></li>
	<li class="js-book__details--li" data-item-id="${rating}"></li>
	<li class="js-book__details--li"><button class="btn" data-item-id="${url}"><a href="#">link</a></button></li>
</ul>`;
};
function  render() {
  if(store.addFormVisible === false) {
    $('.js-nav__btn').html(generateAddBookmarkForm());
  }
  if(button.form__submit)
    addBookmark();
}

function handleCreateAddBookmark(event) {
  $('.js-nav__btn').on('click', '#addForm',  event => {
    store.toggleFormVisible();
    render();
  });
}
function handleSubmitAddFormButtonClick() {
  $('.form__submit').click(generateAddBookmarkForm, event => {
    store.toggleFormVisible();
    render();
  });
}

function handleAddFormButtonClick() {
  $('.js-nav__btn').click(generateAddBookmarkForm, event => {
    store.toggleFormVisible();
    render();
  });
}

function handleDeleteBookmark () {
  $('#bookmarks').click(deleteBookmark());

}
function getIdFromBookmark(bookmark) {
  return $(bookmark)
    .closest('.js-bool--ul')
    .data('bookmark-id');
}
function getRatingFromBookmark(rating) {
	let rating = bookmarks.rating;
	rating.filter();

	return $(bookmark)
    .closest('.js-bool--ul')
    .data('bookmark-id');
}
function handleGetRatingFromBookmark(rating) {
	bookmarks.forEach(rating);
}

//})();



/*
// if the server is down, send the error message from the server, else send one from UI
  function generateError(err) {
    let message = '';
    if(err.responseJSON && err.responseJSON.message) {
      message = err.responseJSON.message;
    } else {
      message = `${err.code} Server Error`;
    }
    return 'html message code';
	}

	render drawing the page brand new

(store = addForm toggle)
function createBookmark() {
$('.js-nav__btn').submit(function(event){
event.preventDefault();
const newBookmark = $('.js-form__add').html(bookmarkForm);
change store to make form visible
api.createItems;
merge data with my object

*/











/*

  const validateTitle = function(title) {
    if (!title) throw new TypeError('Please type in a title');
  };
  const validateUrl = function(url) {
    if (!url) throw new TypeError('Insert url address here');
  };
  const validateDesc = function(desc) {
    if (!desc) throw new TypeError('Add a description here');
  };
  const validateRating = function(rating) {
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
*/