"use strict";

var version = "1.0";
var foo = {
  version: version,
};

var bar = function bar() {
  console.log("123");
};

var index$1 = 42;

console.log(bar, foo.version, index$1);

var index = function index() {
  console.log("this is index");
};

module.exports = index;
