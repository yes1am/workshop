/******/ (() => {
  // webpackBootstrap
  /******/ "use strict"; // The require scope
  /******/ /******/ var __webpack_require__ = {}; /* webpack/runtime/define property getters */
  /******/
  /************************************************************************/
  /******/ /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })(); /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })(); /* webpack/runtime/make namespace object */
  /******/
  /******/ /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // ESM COMPAT FLAG
  __webpack_require__.r(__webpack_exports__);

  // EXPORTS
  __webpack_require__.d(__webpack_exports__, {
    default: () => /* binding */ src,
  }); // CONCATENATED MODULE: ./src/bar.js

  function hello() {
    console.log("bar");
  }

  /* harmony default export */ const bar = hello; // CONCATENATED MODULE: ./node_modules/the-answer/dist/the-answer.es.js

  var index = 42;

  /* harmony default export */ const the_answer_es = index; // CONCATENATED MODULE: ./src/index.js

  console.log("the answer:", the_answer_es);

  function src_index() {
    bar();
    console.log("index");
  }

  /* harmony default export */ const src = src_index;

  module.exports.MyLib = __webpack_exports__;
  /******/
})();
