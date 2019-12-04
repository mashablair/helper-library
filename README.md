# A Little JS Helper Library

## What

Vanilla JS scripts that help users to accomplish simple day-to-day operations, such as:

* Convert a NodeList to an array.
* Get the first matching element in the DOM.
* Get all matching elements in the DOM as an array.
* Add a class to all elements in an array.
* Remove a class from all elements in an array.

## Example of Use
You can use the library like this (try it in the console of the demo page)
:
```
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
```

## Why

Practicing Revealing Module Pattern.  

## Some Links

Project 9 of [Vanilla JS Academy](https://vanillajsacademy.com/)

[View Demo](https://mashablair.github.io/helper-library/)
