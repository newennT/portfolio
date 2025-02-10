(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_anim01_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/anim01.js */ "./assets/js/anim01.js");
/* harmony import */ var _js_anim01_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_anim01_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_anim02_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/anim02.js */ "./assets/js/anim02.js");
/* harmony import */ var _js_anim02_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_anim02_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_body_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/body.js */ "./assets/js/body.js");
/* harmony import */ var _js_body_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_body_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_boutons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/boutons.js */ "./assets/js/boutons.js");
/* harmony import */ var _js_boutons_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_boutons_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/header.js */ "./assets/js/header.js");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_header_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_services_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/services.js */ "./assets/js/services.js");
/* harmony import */ var _js_services_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_services_js__WEBPACK_IMPORTED_MODULE_6__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */







console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/js/anim01.js":
/*!*****************************!*\
  !*** ./assets/js/anim01.js ***!
  \*****************************/
/***/ (() => {

gsap.registerPlugin(ScrollTrigger);
console.log(document.querySelector("#arc1"));
console.log(document.querySelector("#arc2"));
console.log(document.querySelector("#arc3"));
var rotationArc1 = gsap.to("#arc1", {
  rotation: 360,
  transformOrigin: "center",
  duration: 300,
  repeat: -1,
  ease: "linear"
});
var rotationArc2 = gsap.to("#arc2", {
  rotation: -360,
  transformOrigin: "center",
  duration: 500,
  repeat: -1,
  ease: "linear"
});
var rotationArc3 = gsap.to("#arc3", {
  rotation: -360,
  transformOrigin: "center",
  duration: 250,
  repeat: -1,
  ease: "linear"
});

// Animation au scroll
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section02",
    start: "top bottom",
    end: "top 20%",
    scrub: 1.5,
    toggleActions: "play none none reverse"
  }
});
tl.to("#anim01", {
  rotation: -25,
  scale: 0.6,
  x: 100,
  duration: 2,
  ease: "power1.inOut"
});

// Pause/reprise des rotations
ScrollTrigger.create({
  trigger: ".section02",
  start: "top center",
  end: "top 10%",
  scrub: 2,
  onEnter: function onEnter() {
    rotationArc1.pause();
    rotationArc2.pause();
    rotationArc3.pause();
  },
  onLeaveBack: function onLeaveBack() {
    rotationArc1.play();
    rotationArc2.play();
    rotationArc3.play();
  }
});

// Le faire disparaître pendant section02
gsap.to("#anim01", {
  scrollTrigger: {
    trigger: ".section02",
    start: "top 20%",
    end: "bottom bottom",
    scrub: 0.1
  },
  opacity: 0
});

/***/ }),

/***/ "./assets/js/anim02.js":
/*!*****************************!*\
  !*** ./assets/js/anim02.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);
  var svgElement = document.querySelector("#anim02");
  var scaleFactor = 1.03;
  var growing = false;
  var interval;

  // Fonction pour augmenter la taille progressivement
  var startGrowing = function startGrowing() {
    if (!growing) {
      growing = true;
      interval = setInterval(function () {
        scaleFactor += 0.005; // Augmente la taille progressivement
        gsap.to(svgElement, {
          scale: scaleFactor,
          duration: 0.3,
          ease: "linear"
        });
      }, 20); // Augmente toutes les 20ms
    }
  };

  // Fonction pour réinitialiser la taille
  var resetSize = function resetSize() {
    growing = false;
    clearInterval(interval); // Stoppe l'augmentation
    scaleFactor = 1; // Réinitialiser la taille de départ du growing
    gsap.to(svgElement, {
      scale: 1,
      // Retour à la taille normale
      duration: 1.5,
      ease: "power1.out"
    });
  };
  svgElement.addEventListener("mouseenter", function () {
    startGrowing();
  });
  svgElement.addEventListener("mouseleave", function () {
    resetSize();
  });

  // Animation au scroll
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top -20%",
      end: "bottom 50%",
      scrub: 2,
      toggleActions: "play none none reverse"
    }
  });
  tl2.to("#anim02", {
    scale: 4,
    x: 300,
    y: 50,
    duration: 2,
    ease: "power1.inOut"
  });
  tl2.to("#anim02", {
    scale: 1,
    x: -200,
    y: 100,
    duration: 3,
    ease: "power1.inOut"
  }, ">");
  tl2.to("#anim02", {
    scale: 0,
    x: -500,
    y: 1000,
    duration: 3,
    ease: "power1.inOut"
  }, ">");

  // gsap.to("#anim02", {
  //   scrollTrigger: {
  //     trigger: ".section03",
  //     start: "bottom top",   
  //     end: "bottom top", 
  //     scrub: 0.1, 
  //   },
  //   opacity: 0,
  // });
};

/***/ }),

/***/ "./assets/js/body.js":
/*!***************************!*\
  !*** ./assets/js/body.js ***!
  \***************************/
/***/ (() => {

var light = document.createElement("div");
light.classList.add("light");
document.body.prepend(light);
document.addEventListener("mousemove", function (e) {
  gsap.to(light, {
    x: e.clientX - light.offsetWidth / 2,
    y: e.clientY - light.offsetHeight / 2,
    duration: 0.1,
    ease: "power2.out"
  });
});

/***/ }),

/***/ "./assets/js/boutons.js":
/*!******************************!*\
  !*** ./assets/js/boutons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
var btnPortfolio = document.querySelector("#btn-portfolio");
var btnEtsy = document.querySelector("#btn-etsy");
var btnContact = document.querySelector("#btn-contact");
var growing = false;
var scaleFactor = 1.03;

// Augmenter la taille progressivement
var startGrowing2 = function startGrowing2(element) {
  if (!growing) {
    growing = true;
    interval = setInterval(function () {
      scaleFactor += 0.01;
      gsap.to(element, {
        scale: scaleFactor,
        duration: 0.1,
        ease: "linear"
      });
    }, 20); // Augmente toutes les 20ms
  }
};

// Réinitialiser la taille
var resetSize2 = function resetSize2(element) {
  growing = false;
  clearInterval(interval);
  scaleFactor = 1;
  gsap.to(element, {
    scale: 1,
    duration: 1,
    ease: "power3.out"
  });
};
[btnPortfolio, btnEtsy, btnContact].forEach(function (btn) {
  btn.addEventListener("mouseenter", function () {
    return startGrowing2(btn);
  });
  btn.addEventListener("mouseleave", function () {
    return resetSize2(btn);
  });
});

/***/ }),

/***/ "./assets/js/header.js":
/*!*****************************!*\
  !*** ./assets/js/header.js ***!
  \*****************************/
/***/ (() => {

gsap.registerPlugin();
gsap.registerPlugin(ScrollTrigger);
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section02",
    start: "top 10%",
    end: "top 30%",
    scrub: 2,
    toggleActions: "play none none reverse"
  }
});
tl3.to("header", {
  opacity: 1,
  duration: 2,
  ease: "power1.out"
});

/***/ }),

/***/ "./assets/js/services.js":
/*!*******************************!*\
  !*** ./assets/js/services.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
gsap.registerPlugin();
gsap.registerPlugin(ScrollTrigger);
var scrollSection = document.querySelectorAll(".scroll-section");
scrollSection.forEach(function (section) {
  var wrapper = section.querySelector(".wrapper");
  var items = wrapper.querySelectorAll(".item");
  var direction = null;
  if (section.classList.contains("vertical-section")) {
    direction = "vertical";
  } else if (section.classList.contains("horizontal-section")) {
    direction = "horizontal";
  }
  initScroll(section, items, direction);
});
function initScroll(section, items, direction) {
  items.forEach(function (item, index) {
    if (index !== 0) {
      direction == "horizontal" ? gsap.set(item, {
        xPercent: 100
      }) : gsap.set(item, {
        yPercent: 100
      });
    }
  });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      pin: true,
      start: "top top",
      end: function end() {
        return "+=".concat(items.length * 100, "%");
      },
      scrub: 1,
      invalidateOnRefresh: true
    },
    defaults: {
      ease: "none"
    }
  });
  items.forEach(function (item, index) {
    tl.to(item, {
      scale: 0.95,
      borderRadius: "10px"
    });
    direction === "horizontal" ? tl.to(items[index + 1], {
      xPercent: 0
    }, "<") : tl.to(items[index + 1], {
      yPercent: 0
    }, "<");
  });
}

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Cannot find module '../sass/img/motifs-fond.svg'\n    at tryRunOrWebpackError (/home/newenn/projets/portfolio/node_modules/webpack/lib/HookWebpackError.js:86:9)\n    at __webpack_require_module__ (/home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5299:12)\n    at __webpack_require__ (/home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5256:18)\n    at /home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5328:20\n    at symbolIterator (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3463:5)\n    at /home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5196:16\n    at symbolIterator (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3463:5)\n    at /home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5164:15\n    at symbolIterator (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3463:5)\n    at /home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5128:14\n    at processQueue (/home/newenn/projets/portfolio/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Cannot find module '../sass/img/motifs-fond.svg'\n    at webpackMissingModule (/home/newenn/projets/portfolio/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!/home/newenn/projets/portfolio/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[4].oneOf[1].use[2]!/home/newenn/projets/portfolio/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!/home/newenn/projets/portfolio/assets/styles/app.scss:15:113)\n    at Module.<anonymous> (/home/newenn/projets/portfolio/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!/home/newenn/projets/portfolio/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[4].oneOf[1].use[2]!/home/newenn/projets/portfolio/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!/home/newenn/projets/portfolio/assets/styles/app.scss:15:215)\n    at /home/newenn/projets/portfolio/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:494:10\n    at Hook.eval [as call] (eval at create (/home/newenn/projets/portfolio/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at /home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5301:39\n    at tryRunOrWebpackError (/home/newenn/projets/portfolio/node_modules/webpack/lib/HookWebpackError.js:81:7)\n    at __webpack_require_module__ (/home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5299:12)\n    at __webpack_require__ (/home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5256:18)\n    at /home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5328:20\n    at symbolIterator (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3463:5)\n    at /home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5196:16\n    at symbolIterator (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3463:5)\n    at /home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5164:15\n    at symbolIterator (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/newenn/projets/portfolio/node_modules/neo-async/async.js:3463:5)\n    at /home/newenn/projets/portfolio/node_modules/webpack/lib/Compilation.js:5128:14\n    at processQueue (/home/newenn/projets/portfolio/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for /home/newenn/projets/portfolio/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!/home/newenn/projets/portfolio/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[4].oneOf[1].use[2]!/home/newenn/projets/portfolio/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!/home/newenn/projets/portfolio/assets/styles/app.scss\n  1 | __webpack_require__.r(__webpack_exports__);\n  2 | /* harmony export */ __webpack_require__.d(__webpack_exports__, {\n  3 | /* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n  4 | /* harmony export */ });\n  5 | /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"/home/newenn/projets/portfolio/node_modules/css-loader/dist/runtime/sourceMaps.js\");\n  6 | /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n  7 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"/home/newenn/projets/portfolio/node_modules/css-loader/dist/runtime/api.js\");\n  8 | /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n  9 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"/home/newenn/projets/portfolio/node_modules/css-loader/dist/runtime/getUrl.js\");\n 10 | /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n 11 | // Imports\n 12 | \n 13 | \n 14 | \n 15 | var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../sass/img/motifs-fond.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\n 16 | var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Bion-Book.woff2 */ \"asset/resource|/home/newenn/projets/portfolio/assets/fonts/Bion-Book.woff2\"), __webpack_require__.b);\n 17 | var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Bion-Bold.woff2 */ \"asset/resource|/home/newenn/projets/portfolio/assets/fonts/Bion-Bold.woff2\"), __webpack_require__.b);\n 18 | var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n 19 | var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n 20 | var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n 21 | var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n 22 | // Module\n 23 | ___CSS_LOADER_EXPORT___.push([module.id, `h1 {\n 24 |   font-family: \"Bion-bold\", sans-serif;\n 25 | }\n 26 | \n 27 | body {\n 28 |   margin: 0;\n 29 |   background-color: #090020;\n 30 |   color: #ffffff;\n 31 |   font-family: \"Bion\", sans-serif;\n 32 | }\n 33 | \n 34 | .container {\n 35 |   margin: auto;\n 36 | }\n 37 | \n 38 | @media screen and (max-width: 576px) {\n 39 |   .container {\n 40 |     width: 95%;\n 41 |   }\n 42 | }\n 43 | @media screen and (min-width: 576px) {\n 44 |   .container {\n 45 |     width: 540px;\n 46 |   }\n 47 | }\n 48 | @media screen and (min-width: 768px) {\n 49 |   .container {\n 50 |     width: 720px;\n 51 |   }\n 52 | }\n 53 | @media screen and (min-width: 992px) {\n 54 |   .container {\n 55 |     width: 960px;\n 56 |   }\n 57 | }\n 58 | @media screen and (min-width: 1200px) {\n 59 |   .container {\n 60 |     width: 1140px;\n 61 |   }\n 62 | }\n 63 | @media screen and (min-width: 1400px) {\n 64 |   .container {\n 65 |     width: 1320px;\n 66 |   }\n 67 | }\n 68 | .light {\n 69 |   position: fixed;\n 70 |   width: 500px;\n 71 |   height: 500px;\n 72 |   background: radial-gradient(circle, #0b0025 20%, rgba(11, 0, 37, 0) 90%);\n 73 |   border-radius: 50%;\n 74 |   pointer-events: none;\n 75 |   filter: blur(100px);\n 76 |   transition: transform 0.1s ease-out;\n 77 |   mix-blend-mode: screen;\n 78 |   z-index: 0;\n 79 | }\n 80 | \n 81 | .motifs-fond {\n 82 |   position: fixed;\n 83 |   top: 0;\n 84 |   left: 0;\n 85 |   z-index: 2;\n 86 |   width: 100vw;\n 87 |   height: 100vh;\n 88 |   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n 89 | }\n 90 | \n 91 | .bouton {\n 92 |   border-radius: 50%;\n 93 |   text-align: center;\n 94 |   display: flex;\n 95 |   align-items: center;\n 96 |   justify-content: center;\n 97 |   padding: 30px;\n 98 |   font-family: \"Bion-Bold\", sans-serif;\n 99 | }\n100 | \n101 | .bouton1 {\n102 |   margin-top: 150px;\n103 |   width: 130px;\n104 |   height: 130px;\n105 |   background-color: #ffffff;\n106 |   color: #090020;\n107 |   border: #ffffff 2px solid;\n108 | }\n109 | .bouton1:hover {\n110 |   background-color: #090020;\n111 |   color: #ffffff;\n112 | }\n113 | \n114 | .bouton2 {\n115 |   margin-left: 130px;\n116 |   margin-top: 50px;\n117 |   width: 75px;\n118 |   height: 75px;\n119 |   background-color: #41338a;\n120 |   color: #ffffff;\n121 |   border: #41338a solid 2px;\n122 | }\n123 | .bouton2:hover {\n124 |   background-color: #090020;\n125 |   border: #ffffff solid 2px;\n126 | }\n127 | \n128 | a {\n129 |   text-decoration: none;\n130 | }\n131 | \n132 | .service .bouton {\n133 |   display: inline-flex;\n134 |   background-color: #41338a;\n135 |   width: 80px;\n136 |   height: 80px;\n137 |   border: #41338a solid 2px;\n138 |   color: #ffffff;\n139 | }\n140 | \n141 | @keyframes float1 {\n142 |   0% {\n143 |     transform: translateX(-15px) translateY(-30px);\n144 |   }\n145 |   25% {\n146 |     transform: translateX(30px) translateY(20px);\n147 |   }\n148 |   50% {\n149 |     transform: translateX(-20px) translateY(40px);\n150 |   }\n151 |   75% {\n152 |     transform: translateX(40px) translateY(-10px);\n153 |   }\n154 |   100% {\n155 |     transform: translateX(-50px) translateY(-30px);\n156 |   }\n157 | }\n158 | .service .bouton:hover {\n159 |   background-color: rgba(65, 51, 138, 0);\n160 |   border: #ffffff solid 2px;\n161 |   animation-play-state: paused;\n162 | }\n163 | \n164 | .service1 .bouton {\n165 |   margin-left: 50px;\n166 |   margin-top: 10px;\n167 |   animation: float1 10s ease-in-out infinite alternate;\n168 | }\n169 | \n170 | .service2 .bouton {\n171 |   margin-left: 200px;\n172 |   margin-top: 100px;\n173 |   animation: float2 10s ease-in-out infinite alternate;\n174 | }\n175 | \n176 | .service3 .bouton {\n177 |   margin-left: 300px;\n178 |   margin-top: 0px;\n179 |   animation: float3 10s ease-in-out infinite alternate;\n180 | }\n181 | \n182 | .service4 .bouton {\n183 |   margin-left: 350px;\n184 |   margin-top: 30px;\n185 |   animation: float4 10s ease-in-out infinite alternate;\n186 | }\n187 | \n188 | @keyframes float2 {\n189 |   0% {\n190 |     transform: translateX(70px) translateY(-30px);\n191 |   }\n192 |   35% {\n193 |     transform: translateX(-30px) translateY(-20px);\n194 |   }\n195 |   60% {\n196 |     transform: translateX(50px) translateY(40px);\n197 |   }\n198 |   85% {\n199 |     transform: translateX(40px) translateY(-10px);\n200 |   }\n201 |   100% {\n202 |     transform: translateX(-50px) translateY(30px);\n203 |   }\n204 | }\n205 | @keyframes float3 {\n206 |   0% {\n207 |     transform: translateX(30px) translateY(-50px);\n208 |   }\n209 |   25% {\n210 |     transform: translateX(-30px) translateY(-20px);\n211 |   }\n212 |   50% {\n213 |     transform: translateX(60px) translateY(40px);\n214 |   }\n215 |   70% {\n216 |     transform: translateX(60px) translateY(-50px);\n217 |   }\n218 |   100% {\n219 |     transform: translateX(-20px) translateY(15px);\n220 |   }\n221 | }\n222 | @keyframes float4 {\n223 |   0% {\n224 |     transform: translateX(-75px) translateY(-50px);\n225 |   }\n226 |   25% {\n227 |     transform: translateX(50px) translateY(-10px);\n228 |   }\n229 |   40% {\n230 |     transform: translateX(-30px) translateY(40px);\n231 |   }\n232 |   65% {\n233 |     transform: translateX(-40px) translateY(-20px);\n234 |   }\n235 |   100% {\n236 |     transform: translateX(-100px) translateY(-30px);\n237 |   }\n238 | }\n239 | .bouton {\n240 |   display: inline-flex;\n241 |   width: 50px;\n242 |   height: 50px;\n243 |   background-color: #ffffff;\n244 |   color: #41338a;\n245 |   border: #41338a solid 2px;\n246 |   margin-left: 100px;\n247 |   margin-top: 50px;\n248 | }\n249 | .bouton:hover {\n250 |   background-color: rgba(255, 255, 255, 0);\n251 |   color: #ffffff;\n252 |   border: #ffffff solid 2px;\n253 | }\n254 | \n255 | #anim01 {\n256 |   width: 50vw;\n257 |   position: fixed;\n258 |   left: -10%;\n259 |   top: 15%;\n260 |   transform: rotate(-90deg);\n261 |   z-index: 10;\n262 | }\n263 | \n264 | #anim02 {\n265 |   width: 12vw;\n266 |   position: fixed;\n267 |   top: 10%;\n268 |   right: 20%;\n269 |   z-index: 10;\n270 | }\n271 | \n272 | header {\n273 |   position: fixed;\n274 |   z-index: 20000;\n275 |   top: 2%;\n276 |   left: 5%;\n277 |   width: 40%;\n278 |   opacity: 0;\n279 |   font-size: 15px;\n280 | }\n281 | header nav {\n282 |   display: flex;\n283 |   justify-content: space-between;\n284 | }\n285 | header ul {\n286 |   list-style-type: none;\n287 |   padding: 0;\n288 |   display: flex;\n289 |   justify-content: space-around;\n290 | }\n291 | header ul li {\n292 |   margin-left: 40px;\n293 | }\n294 | header ul a {\n295 |   color: #ffffff;\n296 | }\n297 | header ul a:hover {\n298 |   color: #424afa;\n299 | }\n300 | \n301 | footer {\n302 |   position: relative;\n303 |   z-index: 200000;\n304 |   margin-top: 100px;\n305 |   padding: 50px 0;\n306 | }\n307 | footer .container {\n308 |   display: flex;\n309 |   justify-content: space-between;\n310 | }\n311 | footer ul {\n312 |   list-style-type: none;\n313 |   padding: 0;\n314 | }\n315 | footer ul li {\n316 |   font-size: 15px;\n317 | }\n318 | \n319 | .section01 {\n320 |   padding-left: 45%;\n321 |   padding-top: 37vh;\n322 |   padding-bottom: 25vh;\n323 | }\n324 | .section01 h1 {\n325 |   font-size: 100px;\n326 |   margin-bottom: 0;\n327 |   position: relative;\n328 |   z-index: 10000;\n329 | }\n330 | .section01 h2 {\n331 |   font-size: 3vw;\n332 |   margin-top: 0;\n333 |   z-index: 10001;\n334 | }\n335 | \n336 | .line {\n337 |   display: inline-block;\n338 |   padding: 0px 50px 0px 0px;\n339 |   position: relative;\n340 |   margin-top: 5px;\n341 |   z-index: 10002;\n342 | }\n343 | \n344 | .section01 .line::after {\n345 |   content: \"\";\n346 |   position: absolute;\n347 |   left: 0;\n348 |   bottom: 0;\n349 |   width: 100%;\n350 |   height: 67%;\n351 |   background: #424afa;\n352 |   border-radius: 5px;\n353 |   z-index: -1;\n354 |   transform: scaleX(0);\n355 |   transform-origin: left;\n356 |   transition: transform 0.3s ease-in-out;\n357 | }\n358 | \n359 | .section01 .line:hover::after {\n360 |   transform: scaleX(1);\n361 | }\n362 | \n363 | .section02 {\n364 |   position: relative;\n365 |   z-index: 10004;\n366 |   padding-top: 25vh;\n367 |   /* background-color: aqua; */\n368 | }\n369 | .section02 .texte {\n370 |   width: 52%;\n371 |   background: linear-gradient(180deg, #090020 60%, rgba(9, 0, 32, 0) 80%);\n372 |   padding-top: 50px;\n373 |   padding-left: 5%;\n374 |   border-radius: 0 200px 0 0;\n375 |   padding-bottom: 40vh;\n376 |   border-top: 15px solid transparent;\n377 |   border-right: 15px solid transparent;\n378 |   border-image: linear-gradient(180deg, #090020 60%, rgba(9, 0, 32, 0) 80%);\n379 | }\n380 | .section02 .texte p {\n381 |   width: 78%;\n382 | }\n383 | .section02 .boutons-grp {\n384 |   display: flex;\n385 |   margin-left: 10%;\n386 | }\n387 | .section02 p {\n388 |   position: relative;\n389 |   z-index: 10000;\n390 |   font-size: 22px;\n391 | }\n392 | \n393 | .section03 {\n394 |   position: relative;\n395 |   z-index: 10003;\n396 |   margin-top: -100px;\n397 |   /* background-color: #ffffff; */\n398 | }\n399 | .section03 h2 {\n400 |   text-align: center;\n401 |   font-size: 80px;\n402 |   font-family: \"Bion-bold\", sans-serif;\n403 |   margin-top: 20px;\n404 |   margin-bottom: 80px;\n405 | }\n406 | .section03 h3 {\n407 |   font-size: 50px;\n408 |   font-family: \"Bion-bold\", sans-serif;\n409 | }\n410 | .section03 p {\n411 |   font-size: 18px;\n412 | }\n413 | \n414 | .service {\n415 |   display: flex;\n416 |   justify-content: space-between;\n417 |   min-height: 500px;\n418 |   height: 85vh;\n419 |   background-color: #090020;\n420 | }\n421 | .service .texte {\n422 |   width: 40%;\n423 |   padding-left: 100px;\n424 |   padding-top: 75px;\n425 | }\n426 | .service .image {\n427 |   width: 50%;\n428 |   object-fit: cover;\n429 |   overflow: hidden;\n430 |   padding-bottom: 0;\n431 | }\n432 | .service .image img {\n433 |   height: 100%;\n434 | }\n435 | \n436 | .wrapper {\n437 |   height: 100vh;\n438 | }\n439 | \n440 | .list {\n441 |   position: relative;\n442 | }\n443 | \n444 | .item {\n445 |   position: absolute;\n446 |   inset: 0%;\n447 | }\n448 | \n449 | .section04 {\n450 |   position: relative;\n451 |   z-index: 10004;\n452 | }\n453 | .section04 h2 {\n454 |   font-size: 80px;\n455 |   text-align: center;\n456 |   font-family: \"Bion-bold\", sans-serif;\n457 | }\n458 | \n459 | .section05 {\n460 |   position: relative;\n461 |   z-index: 10005;\n462 |   display: flex;\n463 |   justify-content: space-between;\n464 |   align-items: center;\n465 | }\n466 | .section05 .image {\n467 |   width: 50%;\n468 |   border-radius: 50%;\n469 |   object-fit: cover;\n470 |   overflow: hidden;\n471 | }\n472 | .section05 .texte {\n473 |   width: 40%;\n474 | }\n475 | .section05 h2 {\n476 |   font-size: 80px;\n477 |   font-family: \"Bion-bold\", sans-serif;\n478 |   margin-bottom: 20px;\n479 |   margin-top: 0;\n480 | }\n481 | .section05 p {\n482 |   font-size: 18px;\n483 | }\n484 | \n485 | @font-face {\n486 |   font-family: \"Bion\";\n487 |   src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff2\");\n488 |   font-weight: normal;\n489 |   font-style: normal;\n490 | }\n491 | @font-face {\n492 |   font-family: \"Bion-bold\";\n493 |   src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(\"woff2\");\n494 |   font-weight: bold;\n495 |   font-style: normal;\n496 | }`, \"\",{\"version\":3,\"sources\":[\"webpack://./assets/sass/base/_typography.scss\",\"webpack://./assets/styles/app.scss\",\"webpack://./assets/sass/base/_base.scss\",\"webpack://./assets/sass/base/_variables.scss\",\"webpack://./assets/sass/components/_buttons.scss\",\"webpack://./assets/sass/components/_anim01.scss\",\"webpack://./assets/sass/components/_anim02.scss\",\"webpack://./assets/sass/layouts/_header.scss\",\"webpack://./assets/sass/layouts/_footer.scss\",\"webpack://./assets/sass/pages/_home.scss\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"h1{\\n    font-family: 'Bion-bold', sans-serif;\\n}\",\"\\n\\n@use '../sass/base/variables' as *;\\n@use '../sass/base/typography';\\n@use '../sass/base/base';\\n\\n@use '../sass/components/_buttons.scss';\\n@use '../sass/components/anim01';\\n@use '../sass/components/anim02';\\n\\n@use '../sass/layouts/_header.scss';\\n@use '../sass/layouts/_footer.scss';\\n\\n@use '../sass/pages/_home.scss';\\n\\n@font-face {\\n    font-family: \\\"Bion\\\";\\n    src: url(\\\"../fonts/Bion-Book.woff2\\\") format(\\\"woff2\\\");\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: \\\"Bion-bold\\\";\\n    src: url(\\\"../fonts/Bion-Bold.woff2\\\") format(\\\"woff2\\\");\\n    font-weight: bold;\\n    font-style: normal;\\n}\",\"@use \\\"variables\\\" as *;\\n\\nbody{\\n    margin: 0;\\n    background-color: $fond;\\n    color: $texte;\\n    font-family: 'Bion', sans-serif;\\n}\\n\\n.container{\\n    margin: auto;\\n}\\n\\n\\n\\n\\n\\n@media screen and (max-width: 576px){\\n    .container{\\n        width: 95%;\\n    }\\n}\\n\\n@media screen and (min-width: 576px){\\n    .container{\\n        width: 540px;\\n    }\\n}\\n\\n@media screen and (min-width: 768px){\\n    .container{\\n        width: 720px;\\n    }\\n}\\n\\n@media screen and (min-width: 992px){\\n    .container{\\n        width: 960px;\\n    }\\n}\\n\\n@media screen and (min-width: 1200px){\\n    .container{\\n        width: 1140px;\\n    }\\n}\\n\\n@media screen and (min-width: 1400px){\\n    .container{\\n        width: 1320px;\\n    }\\n}\\n\\n\\n.light {\\n    position: fixed;\\n    width: 500px; \\n    height: 500px;\\n    background: radial-gradient(circle, #0b0025 20%, #0b002500 90%);\\n    border-radius: 50%;\\n    pointer-events: none; \\n    filter: blur(100px); \\n    transition: transform 0.1s ease-out; \\n    mix-blend-mode: screen;\\n    z-index: 0;\\n}\\n\\n\\n.motifs-fond{\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    z-index: 2;\\n    width: 100vw;\\n    height: 100vh;\\n    background-image: url('../img/motifs-fond.svg');\\n  }\",\"$bleu: #424afa !default;\\n$violet: #41338a !default;\\n$fond: #090020 !default;\\n$texte: #ffffff !default;\\n\\n\",\".bouton{\\n    border-radius: 50%;\\n    text-align: center;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    padding: 30px;\\n    font-family: 'Bion-Bold', sans-serif;\\n}\\n\\n.bouton1{\\n    margin-top: 150px;\\n    width: 130px;\\n    height: 130px;\\n    background-color: #ffffff;\\n    color: #090020;\\n    border: #ffffff 2px solid;\\n    &:hover{\\n        background-color: #090020;\\n        color: #ffffff;\\n    }\\n}\\n.bouton2{\\n    margin-left: 130px;\\n    margin-top: 50px;\\n    width: 75px;\\n    height: 75px;\\n    background-color: #41338a;\\n    color: #ffffff;\\n    border: #41338a solid 2px;\\n    &:hover{\\n        background-color: #090020;\\n        border: #ffffff solid 2px;\\n    }\\n}\\n\\na{\\n    text-decoration: none;\\n}\\n\\n\\n.service .bouton{\\n    display: inline-flex;\\n    background-color: #41338a;\\n    width: 80px;\\n    height: 80px;\\n    border: #41338a solid 2px;\\n    color: #ffffff;\\n  \\n}\\n\\n\\n@keyframes float1 {\\n    0% {\\n        transform: translateX(-15px) translateY(-30px);\\n    }\\n    25% {\\n        transform: translateX(30px) translateY(20px);\\n    }\\n    50% {\\n        transform: translateX(-20px) translateY(40px);\\n    }\\n    75% {\\n        transform: translateX(40px) translateY(-10px);\\n    }\\n    100% {\\n        transform: translateX(-50px) translateY(-30px);\\n    }\\n  }\\n  \\n  .service .bouton:hover{\\n    background-color: #41338a00;\\n    border: #ffffff solid 2px;\\n    animation-play-state: paused;\\n  }\\n  \\n  .service1 .bouton{\\n    margin-left: 50px;\\n    margin-top: 10px;\\n    animation: float1 10s ease-in-out infinite alternate;\\n  }\\n  \\n  .service2 .bouton{\\n    margin-left: 200px;\\n    margin-top: 100px;\\n    animation: float2 10s ease-in-out infinite alternate;\\n  }\\n  \\n  .service3 .bouton{\\n    margin-left: 300px;\\n    margin-top: 0px;\\n    animation: float3 10s ease-in-out infinite alternate;\\n  }\\n  \\n  .service4 .bouton{\\n    margin-left: 350px;\\n    margin-top: 30px;\\n    animation: float4 10s ease-in-out infinite alternate;\\n  }\\n  \\n  @keyframes float2 {\\n    0% {\\n        transform: translateX(70px) translateY(-30px);\\n    }\\n    35% {\\n        transform: translateX(-30px) translateY(-20px);\\n    }\\n    60% {\\n        transform: translateX(50px) translateY(40px);\\n    }\\n    85% {\\n        transform: translateX(40px) translateY(-10px);\\n    }\\n    100% {\\n        transform: translateX(-50px) translateY(30px);\\n    }\\n  }\\n  \\n  @keyframes float3 {\\n    0% {\\n        transform: translateX(30px) translateY(-50px);\\n    }\\n    25% {\\n        transform: translateX(-30px) translateY(-20px);\\n    }\\n    50% {\\n        transform: translateX(60px) translateY(40px);\\n    }\\n    70% {\\n        transform: translateX(60px) translateY(-50px);\\n    }\\n    100% {\\n        transform: translateX(-20px) translateY(15px);\\n    }\\n  }\\n  \\n  \\n  @keyframes float4 {\\n    0% {\\n        transform: translateX(-75px) translateY(-50px);\\n    }\\n    25% {\\n        transform: translateX(50px) translateY(-10px);\\n    }\\n    40% {\\n        transform: translateX(-30px) translateY(40px);\\n    }\\n    65% {\\n        transform: translateX(-40px) translateY(-20px);\\n    }\\n    100% {\\n        transform: translateX(-100px) translateY(-30px);\\n    }\\n  }\\n\\n\\n\\n.bouton{\\n    display: inline-flex;\\n    width: 50px;\\n    height: 50px;\\n    background-color: #ffffff;\\n    color: #41338a;\\n    border: #41338a solid 2px;\\n    margin-left: 100px;\\n    margin-top: 50px;\\n    &:hover{\\n        background-color: #ffffff00;\\n        color: #ffffff;\\n        border: #ffffff solid 2px;\\n    }\\n}\",\"\\n#anim01{\\n    width: 50vw;\\n    position: fixed;\\n    left: -10%;\\n    top: 15%;\\n    transform: rotate(-90deg);\\n    z-index: 10;\\n  }\",\"#anim02{\\n    width: 12vw;\\n    position: fixed;\\n    top: 10%;\\n    right: 20%;\\n    z-index: 10;\\n  }\",\"@use \\\"../base/variables\\\" as *;\\n\\nheader{\\n    position: fixed;\\n    z-index: 20000;\\n    top: 2%;\\n    left: 5%;\\n    width: 40%;\\n    opacity: 0;\\n    font-size: 15px;\\n    nav{\\n        display: flex;\\n        justify-content: space-between;\\n    }\\n    ul{\\n        list-style-type: none;\\n        padding: 0;\\n        display: flex;\\n        justify-content: space-around;\\n        li{\\n            margin-left: 40px;\\n        }\\n        a{\\n            color: #ffffff;\\n            &:hover{\\n                color: $bleu;\\n            }\\n        }\\n    }\\n  }\",\"@use \\\"../base/variables\\\" as *;\\n\\nfooter{\\n    position: relative;\\n    z-index: 200000;\\n    margin-top: 100px;\\n    padding: 50px 0;\\n    .container{\\n        display: flex;\\n        justify-content: space-between;\\n    }\\n    ul{\\n        list-style-type: none;\\n        padding: 0;\\n        li{\\n            font-size: 15px;\\n        }\\n    }\\n}\\n  \",\".section01{\\n    padding-left: 45%;\\n    padding-top: 37vh;\\n    padding-bottom: 25vh;\\n    h1{\\n        font-size: 100px;\\n        margin-bottom: 0;\\n        position: relative;\\n        z-index: 10000;\\n    }\\n    h2{\\n    font-size: 3vw;\\n    margin-top: 0;\\n    z-index: 10001;\\n    }\\n}\\n\\n.line{\\ndisplay: inline-block;\\npadding: 0px 50px 0px 0px;\\nposition: relative;\\nmargin-top: 5px;\\nz-index: 10002;\\n}\\n\\n.section01 .line::after {\\ncontent: \\\"\\\";\\nposition: absolute;\\nleft: 0;\\nbottom: 0;\\nwidth: 100%;\\nheight: 67%;\\nbackground: #424afa; \\nborder-radius: 5px;\\nz-index: -1;\\ntransform: scaleX(0); \\ntransform-origin: left;\\ntransition: transform 0.3s ease-in-out;\\n}\\n\\n.section01 .line:hover::after {\\ntransform: scaleX(1);\\n}\\n\\n\\n// Section02\\n\\n.section02{\\n    position: relative;\\n    z-index: 10004;\\n    padding-top: 25vh;\\n    /* background-color: aqua; */\\n    .texte{\\n        width: 52%;\\n        background: linear-gradient(180deg, #090020 60%, #09002000 80%);\\n        padding-top: 50px;\\n        padding-left: 5%;\\n        border-radius: 0 200px 0 0;\\n        padding-bottom: 40vh;\\n        border-top: 15px solid transparent;\\n        border-right: 15px solid transparent;\\n        border-image: linear-gradient(180deg, #090020 60%, #09002000 80%);\\n        p{\\n            width: 78%;\\n        }\\n    }\\n    .boutons-grp{\\n        display: flex;\\n        margin-left: 10%;\\n    }\\n    p{\\n        position: relative;\\n        z-index: 10000;\\n        font-size: 22px;\\n    }\\n}\\n\\n\\n// Section03\\n.section03{\\n    position: relative;\\n    z-index: 10003;\\n    margin-top: -100px;\\n    /* background-color: #ffffff; */\\n    h2{\\n        text-align: center;\\n        font-size: 80px;\\n        font-family: 'Bion-bold', sans-serif;\\n        margin-top: 20px;\\n        margin-bottom: 80px;\\n    }\\n    h3{\\n        font-size: 50px;\\n        font-family: 'Bion-bold', sans-serif;\\n    }\\n    p{\\n        font-size: 18px;\\n    }\\n}\\n\\n.service{\\n    display: flex;\\n    justify-content: space-between;\\n    min-height: 500px;\\n    height: 85vh;\\n    background-color: #090020;\\n    .texte{\\n        width: 40%;\\n        padding-left: 100px;\\n        padding-top: 75px;\\n    }\\n    .image{\\n        width: 50%;\\n        object-fit: cover;\\n        overflow: hidden;\\n        padding-bottom: 0;\\n        img{\\n            height: 100%;\\n        }\\n    }\\n}\\n\\n.wrapper{\\n    height: 100vh;\\n  }\\n  \\n  .list{\\n    position: relative;\\n  }\\n  \\n  .item{\\n    position: absolute;\\n    inset: 0%;\\n  }\\n\\n\\n// Section04\\n.section04{\\n    position: relative;\\n    z-index: 10004;\\n    h2{\\n        font-size: 80px;\\n        text-align: center;\\n        font-family: 'Bion-bold', sans-serif;\\n    }\\n}\\n\\n\\n// Section05\\n.section05{\\n    position: relative;\\n    z-index: 10005;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    .image{\\n        width: 50%;\\n        border-radius: 50%;\\n        object-fit: cover;\\n        overflow: hidden;\\n      }\\n      .texte{\\n        width: 40%;\\n      }\\n      h2{\\n        font-size: 80px;\\n        font-family: 'Bion-bold', sans-serif;\\n        margin-bottom: 20px;\\n        margin-top: 0;\\n      }\\n      p{\\n        font-size: 18px;\\n      }\\n  }\"],\"sourceRoot\":\"\"}]);\n497 | // Exports\n498 | /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n499 | ");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-b188a0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbTAxLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hbmltMDIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2JvdXRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VydmljZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICcuL2pzL2FuaW0wMS5qcyc7XG5pbXBvcnQgJy4vanMvYW5pbTAyLmpzJztcbmltcG9ydCAnLi9qcy9ib2R5LmpzJztcbmltcG9ydCAnLi9qcy9ib3V0b25zLmpzJztcbmltcG9ydCAnLi9qcy9oZWFkZXIuanMnO1xuaW1wb3J0ICcuL2pzL3NlcnZpY2VzLmpzJztcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcbiIsImdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJjMVwiKSk7XG5jb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FyYzJcIikpO1xuY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcmMzXCIpKTtcblxuY29uc3Qgcm90YXRpb25BcmMxID0gZ3NhcC50byhcIiNhcmMxXCIsIHtcbiAgICByb3RhdGlvbjogMzYwLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogXCJjZW50ZXJcIixcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIHJlcGVhdDogLTEsXG4gICAgZWFzZTogXCJsaW5lYXJcIlxuICB9KTtcbiAgXG4gIGNvbnN0IHJvdGF0aW9uQXJjMiA9IGdzYXAudG8oXCIjYXJjMlwiLCB7XG4gICAgcm90YXRpb246IC0zNjAsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlclwiLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgcmVwZWF0OiAtMSxcbiAgICBlYXNlOiBcImxpbmVhclwiXG4gIH0pO1xuICBcbiAgY29uc3Qgcm90YXRpb25BcmMzID0gZ3NhcC50byhcIiNhcmMzXCIsIHtcbiAgICByb3RhdGlvbjogLTM2MCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFwiY2VudGVyXCIsXG4gICAgZHVyYXRpb246IDI1MCxcbiAgICByZXBlYXQ6IC0xLFxuICAgIGVhc2U6IFwibGluZWFyXCJcbiAgfSk7XG4gIFxuICAvLyBBbmltYXRpb24gYXUgc2Nyb2xsXG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuc2VjdGlvbjAyXCIsXG4gICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXG4gICAgICBlbmQ6IFwidG9wIDIwJVwiLCAgICAgICBcbiAgICAgIHNjcnViOiAxLjUsXG4gICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICAgIH1cbiAgfSk7XG4gIFxuICB0bC50byhcIiNhbmltMDFcIiwge1xuICAgIHJvdGF0aW9uOiAtMjUsXG4gICAgc2NhbGU6IDAuNixcbiAgICB4OiAxMDAsXG4gICAgZHVyYXRpb246IDIsXG4gICAgZWFzZTogXCJwb3dlcjEuaW5PdXRcIlxuICB9KTtcbiAgXG4gIC8vIFBhdXNlL3JlcHJpc2UgZGVzIHJvdGF0aW9uc1xuICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgdHJpZ2dlcjogXCIuc2VjdGlvbjAyXCIsXG4gICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgIGVuZDogXCJ0b3AgMTAlXCIsXG4gICAgc2NydWI6IDIsXG4gICAgb25FbnRlcjogKCkgPT4ge1xuICAgICAgcm90YXRpb25BcmMxLnBhdXNlKCk7XG4gICAgICByb3RhdGlvbkFyYzIucGF1c2UoKTtcbiAgICAgIHJvdGF0aW9uQXJjMy5wYXVzZSgpO1xuICAgIH0sXG4gICAgb25MZWF2ZUJhY2s6ICgpID0+IHtcbiAgICAgIHJvdGF0aW9uQXJjMS5wbGF5KCk7XG4gICAgICByb3RhdGlvbkFyYzIucGxheSgpO1xuICAgICAgcm90YXRpb25BcmMzLnBsYXkoKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgLy8gTGUgZmFpcmUgZGlzcGFyYcOudHJlIHBlbmRhbnQgc2VjdGlvbjAyXG4gIGdzYXAudG8oXCIjYW5pbTAxXCIsIHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uMDJcIixcbiAgICAgIHN0YXJ0OiBcInRvcCAyMCVcIiwgICBcbiAgICAgIGVuZDogXCJib3R0b20gYm90dG9tXCIsIFxuICAgICAgc2NydWI6IDAuMSwgXG4gICAgfSxcbiAgICBvcGFjaXR5OiAwLFxuICB9KTsiLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYW5pbTAyXCIpO1xuXG5sZXQgc2NhbGVGYWN0b3IgPSAxLjAzO1xubGV0IGdyb3dpbmcgPSBmYWxzZTtcbmxldCBpbnRlcnZhbDtcblxuLy8gRm9uY3Rpb24gcG91ciBhdWdtZW50ZXIgbGEgdGFpbGxlIHByb2dyZXNzaXZlbWVudFxuY29uc3Qgc3RhcnRHcm93aW5nID0gKCkgPT4ge1xuICBpZiAoIWdyb3dpbmcpIHtcbiAgICBncm93aW5nID0gdHJ1ZTtcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNjYWxlRmFjdG9yICs9IDAuMDA1OyAvLyBBdWdtZW50ZSBsYSB0YWlsbGUgcHJvZ3Jlc3NpdmVtZW50XG4gICAgICBnc2FwLnRvKHN2Z0VsZW1lbnQsIHtcbiAgICAgICAgc2NhbGU6IHNjYWxlRmFjdG9yLFxuICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICBlYXNlOiBcImxpbmVhclwiXG4gICAgICB9KTtcbiAgICB9LCAyMCk7IC8vIEF1Z21lbnRlIHRvdXRlcyBsZXMgMjBtc1xuICB9XG59O1xuXG4vLyBGb25jdGlvbiBwb3VyIHLDqWluaXRpYWxpc2VyIGxhIHRhaWxsZVxuY29uc3QgcmVzZXRTaXplID0gKCkgPT4ge1xuICBncm93aW5nID0gZmFsc2U7XG4gIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLyBTdG9wcGUgbCdhdWdtZW50YXRpb25cbiAgc2NhbGVGYWN0b3IgPSAxOyAvLyBSw6lpbml0aWFsaXNlciBsYSB0YWlsbGUgZGUgZMOpcGFydCBkdSBncm93aW5nXG4gIGdzYXAudG8oc3ZnRWxlbWVudCwge1xuICAgIHNjYWxlOiAxLCAvLyBSZXRvdXIgw6AgbGEgdGFpbGxlIG5vcm1hbGVcbiAgICBkdXJhdGlvbjogMS41LFxuICAgIGVhc2U6IFwicG93ZXIxLm91dFwiXG4gIH0pO1xufTtcblxuXG5zdmdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgc3RhcnRHcm93aW5nKCk7XG59KTtcblxuc3ZnRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gIHJlc2V0U2l6ZSgpO1xufSk7XG5cblxuXG4vLyBBbmltYXRpb24gYXUgc2Nyb2xsXG5jb25zdCB0bDIgPSBnc2FwLnRpbWVsaW5lKHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiYm9keVwiLFxuICAgIHN0YXJ0OiBcInRvcCAtMjAlXCIsXG4gICAgZW5kOiBcImJvdHRvbSA1MCVcIiwgICAgICAgXG4gICAgc2NydWI6IDIsXG4gICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IG5vbmUgbm9uZSByZXZlcnNlXCJcbiAgfVxufSk7XG5cbnRsMi50byhcIiNhbmltMDJcIiwge1xuICBzY2FsZTogNCxcbiAgeDogMzAwLFxuICB5OiA1MCxcbiAgZHVyYXRpb246IDIsXG4gIGVhc2U6IFwicG93ZXIxLmluT3V0XCJcbn0pO1xuXG50bDIudG8oXCIjYW5pbTAyXCIsIHtcbiAgc2NhbGU6IDEsIFxuICB4OiAtMjAwLCAgXG4gIHk6IDEwMCxcbiAgZHVyYXRpb246IDMsXG4gIGVhc2U6IFwicG93ZXIxLmluT3V0XCJcbn0sIFwiPlwiKTtcblxudGwyLnRvKFwiI2FuaW0wMlwiLCB7XG4gIHNjYWxlOiAwLFxuICB4OiAtNTAwLFxuICB5OiAxMDAwLFxuICBkdXJhdGlvbjogMyxcbiAgZWFzZTogXCJwb3dlcjEuaW5PdXRcIlxufSwgXCI+XCIpO1xuXG4vLyBnc2FwLnRvKFwiI2FuaW0wMlwiLCB7XG4vLyAgIHNjcm9sbFRyaWdnZXI6IHtcbi8vICAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uMDNcIixcbi8vICAgICBzdGFydDogXCJib3R0b20gdG9wXCIsICAgXG4vLyAgICAgZW5kOiBcImJvdHRvbSB0b3BcIiwgXG4vLyAgICAgc2NydWI6IDAuMSwgXG4vLyAgIH0sXG4vLyAgIG9wYWNpdHk6IDAsXG4vLyB9KTtcblxufTsiLCJsZXQgbGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGlnaHQuY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO1xuZG9jdW1lbnQuYm9keS5wcmVwZW5kKGxpZ2h0KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICBnc2FwLnRvKGxpZ2h0LCB7XG4gICAgeDogZS5jbGllbnRYIC0gbGlnaHQub2Zmc2V0V2lkdGggLyAyLFxuICAgIHk6IGUuY2xpZW50WSAtIGxpZ2h0Lm9mZnNldEhlaWdodCAvIDIsXG4gICAgZHVyYXRpb246IDAuMSxcbiAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICB9KTtcbn0pOyIsImNvbnN0IGJ0blBvcnRmb2xpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXBvcnRmb2xpb1wiKTtcbmNvbnN0IGJ0bkV0c3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1ldHN5XCIpO1xuY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbnRhY3RcIilcbmxldCBncm93aW5nID0gZmFsc2U7XG5sZXQgc2NhbGVGYWN0b3IgPSAxLjAzO1xuXG4vLyBBdWdtZW50ZXIgbGEgdGFpbGxlIHByb2dyZXNzaXZlbWVudFxuY29uc3Qgc3RhcnRHcm93aW5nMiA9IChlbGVtZW50KSA9PiB7XG4gIGlmICghZ3Jvd2luZykge1xuICAgIGdyb3dpbmcgPSB0cnVlO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2NhbGVGYWN0b3IgKz0gMC4wMTtcbiAgICAgIGdzYXAudG8oZWxlbWVudCwge1xuICAgICAgICBzY2FsZTogc2NhbGVGYWN0b3IsXG4gICAgICAgIGR1cmF0aW9uOiAwLjEsXG4gICAgICAgIGVhc2U6IFwibGluZWFyXCJcbiAgICAgIH0pO1xuICAgIH0sIDIwKTsgLy8gQXVnbWVudGUgdG91dGVzIGxlcyAyMG1zXG4gIH1cbn07XG5cbi8vIFLDqWluaXRpYWxpc2VyIGxhIHRhaWxsZVxuY29uc3QgcmVzZXRTaXplMiA9IChlbGVtZW50KSA9PiB7XG4gIGdyb3dpbmcgPSBmYWxzZTtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIHNjYWxlRmFjdG9yID0gMTtcbiAgZ3NhcC50byhlbGVtZW50LCB7XG4gICAgc2NhbGU6IDEsXG4gICAgZHVyYXRpb246IDEsXG4gICAgZWFzZTogXCJwb3dlcjMub3V0XCJcbiAgfSk7XG59O1xuXG5cbltidG5Qb3J0Zm9saW8sIGJ0bkV0c3ksIGJ0bkNvbnRhY3RdLmZvckVhY2goKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gc3RhcnRHcm93aW5nMihidG4pKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHJlc2V0U2l6ZTIoYnRuKSk7XG59KTsiLCJnc2FwLnJlZ2lzdGVyUGx1Z2luKCk7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5jb25zdCB0bDMgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uMDJcIixcbiAgICAgIHN0YXJ0OiBcInRvcCAxMCVcIixcbiAgICAgIGVuZDogXCJ0b3AgMzAlXCIsICAgICAgIFxuICAgICAgc2NydWI6IDIsXG4gICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICAgIH1cbiAgfSk7XG4gIFxuICB0bDMudG8oXCJoZWFkZXJcIiwge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgZHVyYXRpb246IDIsXG4gICAgZWFzZTogXCJwb3dlcjEub3V0XCJcbiAgfSk7IiwiZ3NhcC5yZWdpc3RlclBsdWdpbigpO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuY29uc3Qgc2Nyb2xsU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2Nyb2xsLXNlY3Rpb25cIik7XG5cbnNjcm9sbFNlY3Rpb24uZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gIGNvbnN0IGl0ZW1zID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIilcblxuXG5sZXQgZGlyZWN0aW9uID0gbnVsbDtcblxuICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1zZWN0aW9uXCIpKXtcbiAgICBkaXJlY3Rpb24gPSBcInZlcnRpY2FsXCI7XG4gIH0gZWxzZSBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJob3Jpem9udGFsLXNlY3Rpb25cIikpe1xuICAgIGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICB9XG5cbiAgaW5pdFNjcm9sbChzZWN0aW9uLCBpdGVtcywgZGlyZWN0aW9uKTtcblxufSk7XG5cbmZ1bmN0aW9uIGluaXRTY3JvbGwoc2VjdGlvbiwgaXRlbXMsIGRpcmVjdGlvbikge1xuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiXG4gICAgICA/IGdzYXAuc2V0KGl0ZW0sIHsgeFBlcmNlbnQ6IDEwMCB9KVxuICAgICAgOiBnc2FwLnNldChpdGVtLCB7IHlQZXJjZW50OiAxMDB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogc2VjdGlvbixcbiAgICAgIHBpbjogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBcInRvcCB0b3BcIixcbiAgICAgIGVuZDogKCkgPT4gYCs9JHtpdGVtcy5sZW5ndGggKiAxMDB9JWAsXG4gICAgICBzY3J1YjogMSxcbiAgICAgIGludmFsaWRhdGVPblJlZnJlc2g6IHRydWUsXG4gICAgfSxcbiAgICBkZWZhdWx0czogeyBlYXNlOiBcIm5vbmVcIn0sXG4gIH0pO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIHRsLnRvKGl0ZW0sIHtcbiAgICAgIHNjYWxlOiAwLjk1LFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICB9KTtcblxuICAgIGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgID8gdGwudG8oXG4gICAgICAgIGl0ZW1zW2luZGV4ICsgMV0sXG4gICAgICAgIHtcbiAgICAgICAgICB4UGVyY2VudDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgXCI8XCJcbiAgICAgIClcbiAgICAgIDogdGwudG8oXG4gICAgICAgIGl0ZW1zW2luZGV4ICsgMV0sXG4gICAgICAgIHtcbiAgICAgICAgICB5UGVyY2VudDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgXCI8XCJcbiAgICAgICk7XG4gIH0pO1xufSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJvdGF0aW9uQXJjMSIsInRvIiwicm90YXRpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkdXJhdGlvbiIsInJlcGVhdCIsImVhc2UiLCJyb3RhdGlvbkFyYzIiLCJyb3RhdGlvbkFyYzMiLCJ0bCIsInRpbWVsaW5lIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsImVuZCIsInNjcnViIiwidG9nZ2xlQWN0aW9ucyIsInNjYWxlIiwieCIsImNyZWF0ZSIsIm9uRW50ZXIiLCJwYXVzZSIsIm9uTGVhdmVCYWNrIiwicGxheSIsIm9wYWNpdHkiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzdmdFbGVtZW50Iiwic2NhbGVGYWN0b3IiLCJncm93aW5nIiwiaW50ZXJ2YWwiLCJzdGFydEdyb3dpbmciLCJzZXRJbnRlcnZhbCIsInJlc2V0U2l6ZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwidGwyIiwieSIsImxpZ2h0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJwcmVwZW5kIiwiZSIsImNsaWVudFgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFkiLCJvZmZzZXRIZWlnaHQiLCJidG5Qb3J0Zm9saW8iLCJidG5FdHN5IiwiYnRuQ29udGFjdCIsInN0YXJ0R3Jvd2luZzIiLCJlbGVtZW50IiwicmVzZXRTaXplMiIsImZvckVhY2giLCJidG4iLCJ0bDMiLCJzY3JvbGxTZWN0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsInNlY3Rpb24iLCJ3cmFwcGVyIiwiaXRlbXMiLCJkaXJlY3Rpb24iLCJjb250YWlucyIsImluaXRTY3JvbGwiLCJpdGVtIiwiaW5kZXgiLCJzZXQiLCJ4UGVyY2VudCIsInlQZXJjZW50IiwicGluIiwiY29uY2F0IiwibGVuZ3RoIiwiaW52YWxpZGF0ZU9uUmVmcmVzaCIsImRlZmF1bHRzIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==