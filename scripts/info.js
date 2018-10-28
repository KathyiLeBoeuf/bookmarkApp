
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
		<button class="btn btn__expand">Expand/Collapse</button>
    <ul class="js-book--ul">
      <li class="js-book--li" data-item-id="${bookmarks.id}">
        <span>${title}</span>
      </li>
      <li class="js-book--li">${rating}</li>
    </ul>
    </div>
  </div>`;
}
const generateExpandedBookmark = function () {
	return `
    <div class="section group">
		<div class="row2 col span_1_of_4">
		<button class="btn btn__expand">Expand/Collapse</button>
      <ul role="list" class="js-book__details--ul">
        <li role="listitem" class="js-book__details--li title" data-item-id="${bookmark.id}">${title}</li>
        <li class="js-book__details--li desc" data-item-id="${desc}">${desc}</li>
        <li class="js-book__details--li" data-item-id="${rating}">${rating}</li>
        <li class="js-book__details--li details__rating">
          <button class="btn btn__del">Delete</button>
          <button class="btn btn__link" data-item-id="${url}">
            <a href="#">Visit site</a>
          </button>
        </li>
      </ul>
    </div>`;
}