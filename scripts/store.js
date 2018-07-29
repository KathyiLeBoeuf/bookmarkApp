/* global $ */
'use strict';
const store = (function() {

  bookmarks: [],
  addFormVisible: false,

  const toggleFormVisible = function () {
    this.addFormVisible = !this.addFormVisible;
  };
  const addBookmark = function (bookmark) {
    Object.assign(bookmark, { expanded: false });
    this.bookmarks.push(bookmark);
  };
  const deleteBookmark = function (id) {
    this.bookmarks = this.bookmarks.filter(item => item.id !== id);
    this.bookmarks.slice([id], 1);
  };

  const filterByRatings = function (rating) {
    this.bookmarks = this.bookmarks.filter(item => item.rating !== rating);
	};

	return {
		bookmarks: [],
		addFormVisible: false,
		toggleFormVisible,
		addBookmark,
		deleteBookmark,
		filterByRatings
	};
}());




// return {
//   bookmark: [],
// };

// { id,
//   title,
//   url,
//   desc,
//   rating: num,
//   adding: false,
//   delete: false,
//   detail: false,
// },


