/* global $ */
'use strict';  // (function(){     })();
const store =  {

  bookmarks:  [],
  addFormVisible: false,

  toggleFormVisible:  function() {
    this.addFormVisible = !this.addFormVisible;
  },
  const addBookmark = function(bookmark) {
		Object.assign(bookmark, {expanded: false});
		this.bookmarks.push(bookmark)
	},
	const deleteBookmark = function(id) {
		this.bookmarks = this.bookmarks.filter(item => item.id !== id);
		this.bookmarks.slice([id], 1);
	},
const filterRatings = function(rating) {

}
	}




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


