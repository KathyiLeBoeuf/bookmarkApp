/* global $ */
'use strict';
const store = (function() {
  const list = [
    { title,
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
  ];
  return {
    list: [],
  };
  function generateBookmark(title, url, rating) {

  return `<div class="js-book" >
		<ul class="js-book--ul">
			<li class="js-book--li">${title}
			span class="js-book--li">&#9747</span>
			</li>
			<li class="js-book--li">${rating}</li>
			<li></li>
		</ul>c
		</div >` ;
	}
	return {
		generateBookmark,
	};

})();




