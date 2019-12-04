var _ = (function() {
  // Holds public methods
  var methods = {};

  /**
   * Convert a NodeList to an array.
   * @param {NodeList} list Nodelist to convert
   * @return {Array}
   */
  methods.toArray = function(list) {
    return Array.from(list);
  };

  /**
   * Get the first matching element in the DOM.
   * @param {String} selector Class, Id, or Data-attribute
   * @return {Node}           Target element
   */
  methods.get = function(selector) {
    return document.querySelector(selector);
  };

  /**
   * Get all matching elements in the DOM as an array.
   * @param {String} selector Class, Id, or Data-attribute
   * @return {Array}          Array of matching elements
   */
  methods.getAll = function(selector) {
    return Array.from(document.querySelectorAll(selector));
  };

  /**
   * Add a class to all elements in an array.
   * @param {Array} array       Array of elems/nodes
   * @param {String} some_class Class name you want to add to elems
   */
  methods.addClass = function(array, some_class) {
    array.forEach(function(item) {
      item.classList.add(some_class);
    });
  };

  /**
   * Remove a class from all elements in an array.
   * @param {Array} array       Array of elems/nodes
   * @param {String} some_class Class name you want to remove
   */
  methods.removeClass = function(array, some_class) {
    array.forEach(function(item) {
      item.classList.remove(some_class);
    });
  };

  // Return public methods
  return methods;
})();

// You can use this helper library like this:
// _.toArray()
var arr = _.toArray(document.querySelectorAll("button"));
console.log("_.toArray()", arr);

// _.get()
var btn = _.get("#button-2");
console.log("_.get()", btn);

// _.get()
var btns = _.getAll("button");
console.log("_.getAll()", btns);

// _.addClass()
_.addClass(btns, "btn-purple");

// _.removeClass()
_.removeClass(btns, "btn-blue");
