/* global $ */
'use strict';
const store = (function () {

  const addBookmark = function (bookmark) {
    console.log("I'm in the store - addBookmark")
    // Object.assign(bookmark, { expanded: false });
    this.bookmarks.push(bookmark);
  };
  const setError = function (error) {
    this.error = error;
  };
  const toggleFormVisible = function () {
    this.addFormVisible = !this.addFormVisible;
    if (this.addFormVisible === true) {
      this.addFormVisible = false;
    }
  };
  const findById = function (id) {
    return this.bookmarks.find(bookmark => bookmark.id === id);
  };
  const update = function (id, newData) {
    const bookmarkIndex = this.bookmark.findById(bookmark => bookmark.id === id);
    Object.assign(this.bookmark[bookmarkIndex], newData);
  };
  const expandBookmark = function () {
    this.expandForm = !this.expandForm;
  };
  const deleteBookmark = function (id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
    this.bookmarks.slice([id], 1);
  };
  const filterByRatings = function (rating) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.rating !== rating);
  };

  return {
    bookmarks: [],
    addFormVisible: false,
    error: null,
    expandForm: false,
    setError,
    toggleFormVisible,
    addBookmark,
    findById,
    update,
    expandBookmark,
    deleteBookmark,
    filterByRatings
  };
}());