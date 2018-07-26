/* global $ */
'use strict';






$.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
  console.log('api response:', response);
});