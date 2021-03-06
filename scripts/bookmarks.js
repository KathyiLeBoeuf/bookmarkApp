/* global $ */
'use strict';
const bookmarks = (function () {

  const generateAddBookmarkForm = function () {

    return `
    <div class="row3 col span_1_of_4">
    <form class="form1">
      <label aria-label="title" class="label1" name="title">Title</label>
      <input aria-label="title input" class="input1 form__bookmark--title" type="text" name="title" required placeholder="TITLE"
       data-item-id="${bookmarks.title}">
      <label aria-label="url" class="label1">Url</label>
      <input aria-label="url input" class="input1 form__bookmark--url" type="url" name="url" required pattern="https?://.+" placeholder="URL"
       data-item-id="${bookmarks.url}">
      <label aria-label="description" class="label1">Description</label>
      <textarea aria-label="description input" class="textarea1 form__bookmark--desc" name="description" rows="10" cols="33"></textarea>
      <label aria-label="rating" class="label1 label1__rating">Add a rating</label>
      <select aria-label="select rating" class="select1 select1__rating form__select">
        <option>5 stars</option>
        <option>4 stars</option>
        <option>3 stars</option>
        <option>2 stars</option>
        <option>1 stars</option>
      </select>
      <button class="button1 button1__select form__submit">Submit</button>
    </form>
  </div>`;
  }
  const generateBookmark = function () {
    return `
    <div class="section group">
    <div class="row0 col span_1_of_8">
    <ul class="js-book--ul">
      <li class="js-book--li" data-item-id="${bookmarks.id}">
        <span>${bookmarks.title}</span>
      </li>
      <li class="js-book--li">${bookmarks.rating}</li>
    </ul>
    </div>
  </div>`;
  }
  const generateExpandedBookmark = function () {
    return `
    <div class="section group">
    <div class="row2 col span_1_of_4">
      <ul role="list" class="js-book__details--ul">
        <li role="listitem" class="js-book__details--li title" data-item-id="${bookmarks.id}">${bookmarks.title}</li>
        <li class="js-book__details--li desc" data-item-id="${bookmarks.desc}">${bookmarks.desc}</li>
        <li class="js-book__details--li" data-item-id="${bookmarks.rating}">${bookmarks.rating}</li>
        <li class="js-book__details--li details__rating">
          <button class="btn btn__del">Delete</button>
          <button class="btn btn__link" data-item-id="${bookmarks.url}">
            <a href="#">Visit site</a>
          </button>
        </li>
      </ul>
    </div>`;
  }
  const generateAllBookmarks = function (bookmarks) {
    const bookmarks = bookmarks.map((bookmark) => generateBookmark(bookmark));
    return bookmarks.join('');
  }
  const generateError = function (error) {
    let message = '';
    if (err.responseJSON && err.responseJSON.message) {
      message = err.responseJSON.message;
    } else {
      message = `${err.code} Server Error`;
    }
    return `
      <section class="error-content">
        <button id="cancel-error">X</button>
        <p>${message}</p>
      </section>`;
    // return 'html message code';
  }
  //++++++++++++++++++++++++++++++
  const render = function () {
    if (store.addFormVisible === true) {
      console.log('this is inside render in bookmarks.js');
      $('#addForm').html(generateAddBookmarkForm());
    }
    else {
      $('#bookmarkList').html(generateAllBookmarks());
    }
    if (store.error) {
      const mistake = generateError(store.error);
      $('.error-container').html(mistake);
    } else {
      $('.error-container').empty();
    }
  }
  //++++++++++++++++++++++++++++++

  const handleCreateAddBookmark = function () {
    console.log("I'm in bookmarks.js handleCreateAddBookmark")
    $('.js-nav__btn').on('click', '#addForm', (e) => {
      if (store.bookmarks.addFormVisible === false) {
        store.bookmarks.addFormVisible = true;
        render();
      }
    })
  }
  const handleSubmitBookmark = function () {
    $('.form-submit').on('click', '#addForm', event => {
      e.preventDefalt();

      const title = $('.form__bookmark--title').val();
      const url = $('.form__bookmark--url').val();
      const desc = $('.form__bookmark--desc').val();
      const rating = $('.form__select').val();
      const newBookmark = bookmark.create(title, url, desc, rating);
      api.createItems(newAddBookmark, (response) => {
        store.bookmarks.toggleFormVisible = false;
        store.addBookmark(response);
        render();
      });
    });
  }
  const handleExpandButtonClick = function () {
    // console.log('handle expand');
    $('js-book--li').on('click', '.btn__expand', (e) => {
      const bookmarkId = $(e.currentTarget).closest('.bookmark').attr('id');
      const obj = store.findById(bookmarkId);
      obj.expanded = true;
      render();
    });
  }
  const handleDeleteBookmark = function () {
    $('js-book--li').on('click', '.btn__del', (e) => {
      const bookmarkId = $(e.currentTarget).closest('.bookmark').attr('id');
      api.deleteBookmark(bookmarkId, () => {
        store.deleteBookmark(bookmarkId);
        render();
      })
    });
  }
  // const getIdFromBookmark = function (bookmark) {
  //   return $(bookmark)
  //     .closest('.js-bool--ul')
  //     .data('bookmark-id');
  // }
  // const getRatingFromBookmark = function (rating) {
  //   rating = bookmarks.rating;
  //   rating.filter();

  //   return $(bookmark)
  //     .closest('.js-bool--ul')
  //     .data('bookmark-id');
  // }
  // const handleGetRatingFromBookmark = function (rating) {
  //   bookmarks.forEach(rating);
  // }
  //++++++++++++++++++++++++++++++

  const bindEventListeners = function () {
    handleCreateAddBookmark();
    handleSubmitBookmark();
    handleExpandButtonClick();
    handleDeleteBookmark();
    generateExpandedBookmark();
  }

  //++++++++++++++++++++++++++++++
  return {
    bindEventListeners: bindEventListeners,
    render: render,
  };
}());
//++++++++++++++++++++++++++++++


//})();

/*
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
GET from server
render the all bookmark

listen for the add button
generate the add form
place it on the DOM
listen for the submit
POST to the server
GET from the server
render the bookmark on the DOM

listen for delete
DELETE request

*/