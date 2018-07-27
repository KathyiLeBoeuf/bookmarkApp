/* global $ */
'use strict';
const store = (function() {
  const list = [
    { id,
      title,
      url,
      description,
      rating: num,
      adding: false,
      delete: false,
      detail: false,
    },
    { title: 'This is my first',
      url,
      description: 'string of many, many words',
      rating: 5,
      adding: false,
      delete: false,
      detail: false,
    },
    {
      'id': '8sdfbvbs65sd',
      'title': 'Google',
      'url': 'http://google.com',
      'desc': 'An indie search engine startup',
      'rating': 4
    },
    {
      'id': '87fn36vd9djd',
      'title': 'Fluffiest Cats in the World',
      'url': 'http://medium.com/bloggerx/fluffiest-cats-334',
      'desc': 'The only list of fluffy cats online',
      'rating': 5
    }

  ];
  return {
    list: [],
  };


  function createBookmark(title, url, rating) {
    return `<div class="js-book" >
		<ul class="js-book--ul">
			<li class="js-book--li" data-item-id="${item.id}>${title}
			span class="js-book--li">&#9747</span>
			</li>
			<li class="js-book--li">${rating}</li>
			<li></li>
		</ul>c
		</div >` ;
  }
  function addNewBookmark(title, url, rating) {
		let add =  createBookmark();
		return `
		<form class="form__add col-6">

		<div class="row">
			<label for="title" class="col-1">Title</label>
			<input type="text" name="title" required class="form__bookmark--title col-2" placeholder="TITLE" data-item-id="`${item.title}``">
		</div>
		<div class="row">
			<label for="url" class="col-1">url</label>
			<input type="url" name="url" required pattern="https?://.+" class="form__bookmark--url col-2" placeholder="URL" data-item-id="${item.url}">
		</div>
		<div class="row">
			<label for="description" class="col-1">Description</label>
			<textarea name="description" class="form__bookmark--desc col-2" rows="10" cols="33">`${item.desc}`</textarea>
		</div>
		<div class="row__form--bottom">
			<label for="stars" class="star__label col-1">Add a rating</label>
			<div value= name="stars" class="form__stars col-3">
				<input required type="number"  name="rating">
					<span>☆</span>
					<span>☆</span>
					<span>☆</span>
					<span>☆</span>
					<span>☆</span>

				</div>
				<div>
			<button class="form__submit col-3">submit</button>
		</div>
	</form>`;
  }
  function expandBookmark(id) {
    return `
		<div class="js-book__details">
		<ul class="js-book__details--ul">
				<li class="js-book__details--li" data-item-id="${item.id}>`${item.title}`<span class="js-book__details--li">&#9747</span></li>
			<li class="js-book__details--li">description</li>
			<li class="js-book__details--li">
				<a href="#">
					<span>link</span>
				</a>
			</li>
			<li name="stars" class="form__stars js-book__details--li">
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
				<span>☆</span>
			</li>
			<li name="stars" class="form__stars js-book__details--li">
				<span>&#9733</span>
				<span>&#9733</span>
				<span>&#9733</span>
				<span>&#9734</span>
				<span>&#9734</span>
				<span>&#9734</span>

			</li>
			<li></li>
		</ul>
	</div>`;
  }

  function deleteBookmark() {

  }



  return {
    createBookmark,
    addNewBookmark,
    expandBookmark,
    deleteBookmark
  };

})();




