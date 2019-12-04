var helper = (function() {
  // Holds public methods
  var methods = {};

  /**
   * Convert a NodeList to an array.
   * @param {NodeList} node_list Nodelist to convert
   * @return {Array}
   */
  methods.nodesToArray = function(node_list) {
    return Array.from(node_list);
  };

  /**
   * Get the first matching element in the DOM.
   * @param {String} selector Class, Id, or Data-attribute
   * @return {Node}           Target element
   */
  methods.getFirstElem = function(selector) {
    return document.querySelector(selector);
  };

  /**
   * Get all matching elements in the DOM as an array.
   * @param {String} selector Class, Id, or Data-attribute
   * @return {Array}          Array of matching elements
   */
  methods.getAllElems = function(selector) {
    return Array.from(document.querySelectorAll(selector));
  };

  /**
   * Add a class to all elements in an array.
   * @param {String} some_class Class name you want to add to elems
   * @param {Array} array       Array of elems/nodes
   */
  methods.addClass = function(some_class, array) {
    array.forEach(function(item) {
      item.classList.add(some_class);
    });
  };

  /**
   * Remove a class from all elements in an array.
   * @param {String} some_class Class name you want to add to elems
   * @param {Array} array       Array of elems/nodes
   */
  methods.removeClass = function(some_class, array) {
    array.forEach(function(item) {
      item.classList.remove(some_class);
    });
  };

  // Return public methods
  return methods;
})();
