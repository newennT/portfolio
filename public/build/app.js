(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_anim01__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/anim01 */ "./assets/js/anim01.js");
/* harmony import */ var _js_anim01__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_anim01__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_anim02__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/anim02 */ "./assets/js/anim02.js");
/* harmony import */ var _js_anim02__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_anim02__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/body */ "./assets/js/body.js");
/* harmony import */ var _js_body__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_body__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_boutons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/boutons */ "./assets/js/boutons.js");
/* harmony import */ var _js_boutons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_boutons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/header */ "./assets/js/header.js");
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_header__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/services */ "./assets/js/services.js");
/* harmony import */ var _js_services__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_services__WEBPACK_IMPORTED_MODULE_6__);
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

gsap.registerPlugin();
gsap.registerPlugin(ScrollTrigger);
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
    end: "bottom bottom",
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
gsap.to("#anim02", {
  scrollTrigger: {
    trigger: ".section03",
    start: "bottom top",
    end: "bottom top",
    scrub: 0.1
  },
  opacity: 0
});

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-b188a0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ047QUFDQTtBQUNGO0FBQ0c7QUFDRDtBQUNFO0FBRXZCQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQzs7Ozs7Ozs7OztBQ2Q3RUMsSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQztBQUNyQkQsSUFBSSxDQUFDQyxjQUFjLENBQUNDLGFBQWEsQ0FBQztBQUVsQyxJQUFNQyxZQUFZLEdBQUdILElBQUksQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRTtFQUNsQ0MsUUFBUSxFQUFFLEdBQUc7RUFDYkMsZUFBZSxFQUFFLFFBQVE7RUFDekJDLFFBQVEsRUFBRSxHQUFHO0VBQ2JDLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVkMsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUFDO0FBRUYsSUFBTUMsWUFBWSxHQUFHVixJQUFJLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7RUFDcENDLFFBQVEsRUFBRSxDQUFDLEdBQUc7RUFDZEMsZUFBZSxFQUFFLFFBQVE7RUFDekJDLFFBQVEsRUFBRSxHQUFHO0VBQ2JDLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVkMsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUFDO0FBRUYsSUFBTUUsWUFBWSxHQUFHWCxJQUFJLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7RUFDcENDLFFBQVEsRUFBRSxDQUFDLEdBQUc7RUFDZEMsZUFBZSxFQUFFLFFBQVE7RUFDekJDLFFBQVEsRUFBRSxHQUFHO0VBQ2JDLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVkMsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBTUcsRUFBRSxHQUFHWixJQUFJLENBQUNhLFFBQVEsQ0FBQztFQUN2QkMsYUFBYSxFQUFFO0lBQ2JDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxLQUFLLEVBQUUsWUFBWTtJQUNuQkMsR0FBRyxFQUFFLFNBQVM7SUFDZEMsS0FBSyxFQUFFLEdBQUc7SUFDVkMsYUFBYSxFQUFFO0VBQ2pCO0FBQ0YsQ0FBQyxDQUFDO0FBRUZQLEVBQUUsQ0FBQ1IsRUFBRSxDQUFDLFNBQVMsRUFBRTtFQUNmQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO0VBQ2JlLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLENBQUMsRUFBRSxHQUFHO0VBQ05kLFFBQVEsRUFBRSxDQUFDO0VBQ1hFLElBQUksRUFBRTtBQUNSLENBQUMsQ0FBQzs7QUFFRjtBQUNBUCxhQUFhLENBQUNvQixNQUFNLENBQUM7RUFDbkJQLE9BQU8sRUFBRSxZQUFZO0VBQ3JCQyxLQUFLLEVBQUUsWUFBWTtFQUNuQkMsR0FBRyxFQUFFLFNBQVM7RUFDZEMsS0FBSyxFQUFFLENBQUM7RUFDUkssT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUEsRUFBUTtJQUNicEIsWUFBWSxDQUFDcUIsS0FBSyxDQUFDLENBQUM7SUFDcEJkLFlBQVksQ0FBQ2MsS0FBSyxDQUFDLENBQUM7SUFDcEJiLFlBQVksQ0FBQ2EsS0FBSyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUNEQyxXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBQSxFQUFRO0lBQ2pCdEIsWUFBWSxDQUFDdUIsSUFBSSxDQUFDLENBQUM7SUFDbkJoQixZQUFZLENBQUNnQixJQUFJLENBQUMsQ0FBQztJQUNuQmYsWUFBWSxDQUFDZSxJQUFJLENBQUMsQ0FBQztFQUNyQjtBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBMUIsSUFBSSxDQUFDSSxFQUFFLENBQUMsU0FBUyxFQUFFO0VBQ2pCVSxhQUFhLEVBQUU7SUFDYkMsT0FBTyxFQUFFLFlBQVk7SUFDckJDLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxHQUFHLEVBQUUsZUFBZTtJQUNwQkMsS0FBSyxFQUFFO0VBQ1QsQ0FBQztFQUNEUyxPQUFPLEVBQUU7QUFDWCxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDekVKLElBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0FBRXBELElBQUlDLFdBQVcsR0FBRyxJQUFJO0FBQ3RCLElBQUlDLE9BQU8sR0FBRyxLQUFLO0FBQ25CLElBQUlDLFFBQVE7O0FBRVo7QUFDQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0VBQ3pCLElBQUksQ0FBQ0YsT0FBTyxFQUFFO0lBQ1pBLE9BQU8sR0FBRyxJQUFJO0lBQ2RDLFFBQVEsR0FBR0UsV0FBVyxDQUFDLFlBQU07TUFDM0JKLFdBQVcsSUFBSSxLQUFLLENBQUMsQ0FBQztNQUN0Qi9CLElBQUksQ0FBQ0ksRUFBRSxDQUFDd0IsVUFBVSxFQUFFO1FBQ2xCUixLQUFLLEVBQUVXLFdBQVc7UUFDbEJ4QixRQUFRLEVBQUUsR0FBRztRQUNiRSxJQUFJLEVBQUU7TUFDUixDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNWO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBLElBQU0yQixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQ3RCSixPQUFPLEdBQUcsS0FBSztFQUNmSyxhQUFhLENBQUNKLFFBQVEsQ0FBQyxDQUFDLENBQUM7RUFDekJGLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNqQi9CLElBQUksQ0FBQ0ksRUFBRSxDQUFDd0IsVUFBVSxFQUFFO0lBQ2xCUixLQUFLLEVBQUUsQ0FBQztJQUFFO0lBQ1ZiLFFBQVEsRUFBRSxHQUFHO0lBQ2JFLElBQUksRUFBRTtFQUNSLENBQUMsQ0FBQztBQUNKLENBQUM7QUFHRG1CLFVBQVUsQ0FBQ1UsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQU07RUFDOUNKLFlBQVksQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGTixVQUFVLENBQUNVLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO0VBQzlDRixTQUFTLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQzs7QUFJRjtBQUNBLElBQU1HLEdBQUcsR0FBR3ZDLElBQUksQ0FBQ2EsUUFBUSxDQUFDO0VBQ3hCQyxhQUFhLEVBQUU7SUFDYkMsT0FBTyxFQUFFLE1BQU07SUFDZkMsS0FBSyxFQUFFLFVBQVU7SUFDakJDLEdBQUcsRUFBRSxlQUFlO0lBQ3BCQyxLQUFLLEVBQUUsQ0FBQztJQUNSQyxhQUFhLEVBQUU7RUFDakI7QUFDRixDQUFDLENBQUM7QUFFRm9CLEdBQUcsQ0FBQ25DLEVBQUUsQ0FBQyxTQUFTLEVBQUU7RUFDaEJnQixLQUFLLEVBQUUsQ0FBQztFQUNSQyxDQUFDLEVBQUUsR0FBRztFQUNObUIsQ0FBQyxFQUFFLEVBQUU7RUFDTGpDLFFBQVEsRUFBRSxDQUFDO0VBQ1hFLElBQUksRUFBRTtBQUNSLENBQUMsQ0FBQztBQUVGOEIsR0FBRyxDQUFDbkMsRUFBRSxDQUFDLFNBQVMsRUFBRTtFQUNoQmdCLEtBQUssRUFBRSxDQUFDO0VBQ1JDLENBQUMsRUFBRSxDQUFDLEdBQUc7RUFDUG1CLENBQUMsRUFBRSxHQUFHO0VBQ05qQyxRQUFRLEVBQUUsQ0FBQztFQUNYRSxJQUFJLEVBQUU7QUFDUixDQUFDLEVBQUUsR0FBRyxDQUFDO0FBRVBULElBQUksQ0FBQ0ksRUFBRSxDQUFDLFNBQVMsRUFBRTtFQUNqQlUsYUFBYSxFQUFFO0lBQ2JDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxLQUFLLEVBQUUsWUFBWTtJQUNuQkMsR0FBRyxFQUFFLFlBQVk7SUFDakJDLEtBQUssRUFBRTtFQUNULENBQUM7RUFDRFMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDL0VGLElBQUljLEtBQUssR0FBR1osUUFBUSxDQUFDYSxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQ3pDRCxLQUFLLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUM1QmYsUUFBUSxDQUFDZ0IsSUFBSSxDQUFDQyxPQUFPLENBQUNMLEtBQUssQ0FBQztBQUU1QlosUUFBUSxDQUFDUyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQ1MsQ0FBQyxFQUFLO0VBQzVDL0MsSUFBSSxDQUFDSSxFQUFFLENBQUNxQyxLQUFLLEVBQUU7SUFDYnBCLENBQUMsRUFBRTBCLENBQUMsQ0FBQ0MsT0FBTyxHQUFHUCxLQUFLLENBQUNRLFdBQVcsR0FBRyxDQUFDO0lBQ3BDVCxDQUFDLEVBQUVPLENBQUMsQ0FBQ0csT0FBTyxHQUFHVCxLQUFLLENBQUNVLFlBQVksR0FBRyxDQUFDO0lBQ3JDNUMsUUFBUSxFQUFFLEdBQUc7SUFDYkUsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEYsSUFBTTJDLFlBQVksR0FBR3ZCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzdELElBQU11QixPQUFPLEdBQUd4QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDbkQsSUFBTXdCLFVBQVUsR0FBR3pCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUN6RCxJQUFJRSxPQUFPLEdBQUcsS0FBSztBQUNuQixJQUFJRCxXQUFXLEdBQUcsSUFBSTs7QUFFdEI7QUFDQSxJQUFNd0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxPQUFPLEVBQUs7RUFDakMsSUFBSSxDQUFDeEIsT0FBTyxFQUFFO0lBQ1pBLE9BQU8sR0FBRyxJQUFJO0lBQ2RDLFFBQVEsR0FBR0UsV0FBVyxDQUFDLFlBQU07TUFDM0JKLFdBQVcsSUFBSSxJQUFJO01BQ25CL0IsSUFBSSxDQUFDSSxFQUFFLENBQUNvRCxPQUFPLEVBQUU7UUFDZnBDLEtBQUssRUFBRVcsV0FBVztRQUNsQnhCLFFBQVEsRUFBRSxHQUFHO1FBQ2JFLElBQUksRUFBRTtNQUNSLENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ1Y7QUFDRixDQUFDOztBQUVEO0FBQ0EsSUFBTWdELFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJRCxPQUFPLEVBQUs7RUFDOUJ4QixPQUFPLEdBQUcsS0FBSztFQUNmSyxhQUFhLENBQUNKLFFBQVEsQ0FBQztFQUN2QkYsV0FBVyxHQUFHLENBQUM7RUFDZi9CLElBQUksQ0FBQ0ksRUFBRSxDQUFDb0QsT0FBTyxFQUFFO0lBQ2ZwQyxLQUFLLEVBQUUsQ0FBQztJQUNSYixRQUFRLEVBQUUsQ0FBQztJQUNYRSxJQUFJLEVBQUU7RUFDUixDQUFDLENBQUM7QUFDSixDQUFDO0FBR0QsQ0FBQzJDLFlBQVksRUFBRUMsT0FBTyxFQUFFQyxVQUFVLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLFVBQUNDLEdBQUcsRUFBSztFQUNuREEsR0FBRyxDQUFDckIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO0lBQUEsT0FBTWlCLGFBQWEsQ0FBQ0ksR0FBRyxDQUFDO0VBQUEsRUFBQztFQUM1REEsR0FBRyxDQUFDckIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO0lBQUEsT0FBTW1CLFVBQVUsQ0FBQ0UsR0FBRyxDQUFDO0VBQUEsRUFBQztBQUMzRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNyQ0YsSUFBTUMsR0FBRyxHQUFHNUQsSUFBSSxDQUFDYSxRQUFRLENBQUM7RUFDdEJDLGFBQWEsRUFBRTtJQUNiQyxPQUFPLEVBQUUsWUFBWTtJQUNyQkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEdBQUcsRUFBRSxTQUFTO0lBQ2RDLEtBQUssRUFBRSxDQUFDO0lBQ1JDLGFBQWEsRUFBRTtFQUNqQjtBQUNGLENBQUMsQ0FBQztBQUVGeUMsR0FBRyxDQUFDeEQsRUFBRSxDQUFDLFFBQVEsRUFBRTtFQUNmdUIsT0FBTyxFQUFFLENBQUM7RUFDVnBCLFFBQVEsRUFBRSxDQUFDO0VBQ1hFLElBQUksRUFBRTtBQUNSLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZEosSUFBTW9ELGFBQWEsR0FBR2hDLFFBQVEsQ0FBQ2lDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0FBRWxFRCxhQUFhLENBQUNILE9BQU8sQ0FBQyxVQUFDSyxPQUFPLEVBQUs7RUFDakMsSUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUNqQyxhQUFhLENBQUMsVUFBVSxDQUFDO0VBQ2pELElBQU1tQyxLQUFLLEdBQUdELE9BQU8sQ0FBQ0YsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0VBR2pELElBQUlJLFNBQVMsR0FBRyxJQUFJO0VBRWxCLElBQUlILE9BQU8sQ0FBQ3BCLFNBQVMsQ0FBQ3dCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDO0lBQ2pERCxTQUFTLEdBQUcsVUFBVTtFQUN4QixDQUFDLE1BQU0sSUFBSUgsT0FBTyxDQUFDcEIsU0FBUyxDQUFDd0IsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEVBQUM7SUFDMURELFNBQVMsR0FBRyxZQUFZO0VBQzFCO0VBRUFFLFVBQVUsQ0FBQ0wsT0FBTyxFQUFFRSxLQUFLLEVBQUVDLFNBQVMsQ0FBQztBQUV2QyxDQUFDLENBQUM7QUFFRixTQUFTRSxVQUFVQSxDQUFDTCxPQUFPLEVBQUVFLEtBQUssRUFBRUMsU0FBUyxFQUFFO0VBQzdDRCxLQUFLLENBQUNQLE9BQU8sQ0FBQyxVQUFDVyxJQUFJLEVBQUVDLEtBQUssRUFBSztJQUM3QixJQUFJQSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ2ZKLFNBQVMsSUFBSSxZQUFZLEdBQ3ZCbEUsSUFBSSxDQUFDdUUsR0FBRyxDQUFDRixJQUFJLEVBQUU7UUFBRUcsUUFBUSxFQUFFO01BQUksQ0FBQyxDQUFDLEdBQ2pDeEUsSUFBSSxDQUFDdUUsR0FBRyxDQUFDRixJQUFJLEVBQUU7UUFBRUksUUFBUSxFQUFFO01BQUcsQ0FBQyxDQUFDO0lBQ3BDO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBTTdELEVBQUUsR0FBR1osSUFBSSxDQUFDYSxRQUFRLENBQUM7SUFDdkJDLGFBQWEsRUFBRTtNQUNiQyxPQUFPLEVBQUVnRCxPQUFPO01BQ2hCVyxHQUFHLEVBQUUsSUFBSTtNQUNUMUQsS0FBSyxFQUFFLFNBQVM7TUFDaEJDLEdBQUcsRUFBRSxTQUFMQSxHQUFHQSxDQUFBO1FBQUEsWUFBQTBELE1BQUEsQ0FBYVYsS0FBSyxDQUFDVyxNQUFNLEdBQUcsR0FBRztNQUFBLENBQUc7TUFDckMxRCxLQUFLLEVBQUUsQ0FBQztNQUNSMkQsbUJBQW1CLEVBQUU7SUFDdkIsQ0FBQztJQUNEQyxRQUFRLEVBQUU7TUFBRXJFLElBQUksRUFBRTtJQUFNO0VBQzFCLENBQUMsQ0FBQztFQUNGd0QsS0FBSyxDQUFDUCxPQUFPLENBQUMsVUFBQ1csSUFBSSxFQUFFQyxLQUFLLEVBQUs7SUFDN0IxRCxFQUFFLENBQUNSLEVBQUUsQ0FBQ2lFLElBQUksRUFBRTtNQUNWakQsS0FBSyxFQUFFLElBQUk7TUFDWDJELFlBQVksRUFBRTtJQUNoQixDQUFDLENBQUM7SUFFRmIsU0FBUyxLQUFLLFlBQVksR0FDdEJ0RCxFQUFFLENBQUNSLEVBQUUsQ0FDTDZELEtBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUNoQjtNQUNFRSxRQUFRLEVBQUU7SUFDWixDQUFDLEVBQ0QsR0FDRixDQUFDLEdBQ0M1RCxFQUFFLENBQUNSLEVBQUUsQ0FDTDZELEtBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUNoQjtNQUNFRyxRQUFRLEVBQUU7SUFDWixDQUFDLEVBQ0QsR0FDRixDQUFDO0VBQ0wsQ0FBQyxDQUFDO0FBQ0o7Ozs7Ozs7Ozs7OztBQzdEQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FuaW0wMS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbTAyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib2R5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib3V0b25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vanMvYW5pbTAxJztcbmltcG9ydCAnLi9qcy9hbmltMDInO1xuaW1wb3J0ICcuL2pzL2JvZHknO1xuaW1wb3J0ICcuL2pzL2JvdXRvbnMnO1xuaW1wb3J0ICcuL2pzL2hlYWRlcic7XG5pbXBvcnQgJy4vanMvc2VydmljZXMnO1xuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuIiwiZ3NhcC5yZWdpc3RlclBsdWdpbigpO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuY29uc3Qgcm90YXRpb25BcmMxID0gZ3NhcC50byhcIiNhcmMxXCIsIHtcbiAgICByb3RhdGlvbjogMzYwLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogXCJjZW50ZXJcIixcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIHJlcGVhdDogLTEsXG4gICAgZWFzZTogXCJsaW5lYXJcIlxuICB9KTtcbiAgXG4gIGNvbnN0IHJvdGF0aW9uQXJjMiA9IGdzYXAudG8oXCIjYXJjMlwiLCB7XG4gICAgcm90YXRpb246IC0zNjAsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlclwiLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgcmVwZWF0OiAtMSxcbiAgICBlYXNlOiBcImxpbmVhclwiXG4gIH0pO1xuICBcbiAgY29uc3Qgcm90YXRpb25BcmMzID0gZ3NhcC50byhcIiNhcmMzXCIsIHtcbiAgICByb3RhdGlvbjogLTM2MCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFwiY2VudGVyXCIsXG4gICAgZHVyYXRpb246IDI1MCxcbiAgICByZXBlYXQ6IC0xLFxuICAgIGVhc2U6IFwibGluZWFyXCJcbiAgfSk7XG4gIFxuICAvLyBBbmltYXRpb24gYXUgc2Nyb2xsXG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuc2VjdGlvbjAyXCIsXG4gICAgICBzdGFydDogXCJ0b3AgYm90dG9tXCIsXG4gICAgICBlbmQ6IFwidG9wIDIwJVwiLCAgICAgICBcbiAgICAgIHNjcnViOiAxLjUsXG4gICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICAgIH1cbiAgfSk7XG4gIFxuICB0bC50byhcIiNhbmltMDFcIiwge1xuICAgIHJvdGF0aW9uOiAtMjUsXG4gICAgc2NhbGU6IDAuNixcbiAgICB4OiAxMDAsXG4gICAgZHVyYXRpb246IDIsXG4gICAgZWFzZTogXCJwb3dlcjEuaW5PdXRcIlxuICB9KTtcbiAgXG4gIC8vIFBhdXNlL3JlcHJpc2UgZGVzIHJvdGF0aW9uc1xuICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgdHJpZ2dlcjogXCIuc2VjdGlvbjAyXCIsXG4gICAgc3RhcnQ6IFwidG9wIGNlbnRlclwiLFxuICAgIGVuZDogXCJ0b3AgMTAlXCIsXG4gICAgc2NydWI6IDIsXG4gICAgb25FbnRlcjogKCkgPT4ge1xuICAgICAgcm90YXRpb25BcmMxLnBhdXNlKCk7XG4gICAgICByb3RhdGlvbkFyYzIucGF1c2UoKTtcbiAgICAgIHJvdGF0aW9uQXJjMy5wYXVzZSgpO1xuICAgIH0sXG4gICAgb25MZWF2ZUJhY2s6ICgpID0+IHtcbiAgICAgIHJvdGF0aW9uQXJjMS5wbGF5KCk7XG4gICAgICByb3RhdGlvbkFyYzIucGxheSgpO1xuICAgICAgcm90YXRpb25BcmMzLnBsYXkoKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgLy8gTGUgZmFpcmUgZGlzcGFyYcOudHJlIHBlbmRhbnQgc2VjdGlvbjAyXG4gIGdzYXAudG8oXCIjYW5pbTAxXCIsIHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uMDJcIixcbiAgICAgIHN0YXJ0OiBcInRvcCAyMCVcIiwgICBcbiAgICAgIGVuZDogXCJib3R0b20gYm90dG9tXCIsIFxuICAgICAgc2NydWI6IDAuMSwgXG4gICAgfSxcbiAgICBvcGFjaXR5OiAwLFxuICB9KTsiLCJjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbmltMDJcIik7XG5cbmxldCBzY2FsZUZhY3RvciA9IDEuMDM7XG5sZXQgZ3Jvd2luZyA9IGZhbHNlO1xubGV0IGludGVydmFsO1xuXG4vLyBGb25jdGlvbiBwb3VyIGF1Z21lbnRlciBsYSB0YWlsbGUgcHJvZ3Jlc3NpdmVtZW50XG5jb25zdCBzdGFydEdyb3dpbmcgPSAoKSA9PiB7XG4gIGlmICghZ3Jvd2luZykge1xuICAgIGdyb3dpbmcgPSB0cnVlO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2NhbGVGYWN0b3IgKz0gMC4wMDU7IC8vIEF1Z21lbnRlIGxhIHRhaWxsZSBwcm9ncmVzc2l2ZW1lbnRcbiAgICAgIGdzYXAudG8oc3ZnRWxlbWVudCwge1xuICAgICAgICBzY2FsZTogc2NhbGVGYWN0b3IsXG4gICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgIGVhc2U6IFwibGluZWFyXCJcbiAgICAgIH0pO1xuICAgIH0sIDIwKTsgLy8gQXVnbWVudGUgdG91dGVzIGxlcyAyMG1zXG4gIH1cbn07XG5cbi8vIEZvbmN0aW9uIHBvdXIgcsOpaW5pdGlhbGlzZXIgbGEgdGFpbGxlXG5jb25zdCByZXNldFNpemUgPSAoKSA9PiB7XG4gIGdyb3dpbmcgPSBmYWxzZTtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7IC8vIFN0b3BwZSBsJ2F1Z21lbnRhdGlvblxuICBzY2FsZUZhY3RvciA9IDE7IC8vIFLDqWluaXRpYWxpc2VyIGxhIHRhaWxsZSBkZSBkw6lwYXJ0IGR1IGdyb3dpbmdcbiAgZ3NhcC50byhzdmdFbGVtZW50LCB7XG4gICAgc2NhbGU6IDEsIC8vIFJldG91ciDDoCBsYSB0YWlsbGUgbm9ybWFsZVxuICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgZWFzZTogXCJwb3dlcjEub3V0XCJcbiAgfSk7XG59O1xuXG5cbnN2Z0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICBzdGFydEdyb3dpbmcoKTtcbn0pO1xuXG5zdmdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgcmVzZXRTaXplKCk7XG59KTtcblxuXG5cbi8vIEFuaW1hdGlvbiBhdSBzY3JvbGxcbmNvbnN0IHRsMiA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCJib2R5XCIsXG4gICAgc3RhcnQ6IFwidG9wIC0yMCVcIixcbiAgICBlbmQ6IFwiYm90dG9tIGJvdHRvbVwiLCAgICAgICBcbiAgICBzY3J1YjogMixcbiAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICB9XG59KTtcblxudGwyLnRvKFwiI2FuaW0wMlwiLCB7XG4gIHNjYWxlOiA0LFxuICB4OiAzMDAsXG4gIHk6IDUwLFxuICBkdXJhdGlvbjogMixcbiAgZWFzZTogXCJwb3dlcjEuaW5PdXRcIlxufSk7XG5cbnRsMi50byhcIiNhbmltMDJcIiwge1xuICBzY2FsZTogMSwgXG4gIHg6IC0yMDAsICBcbiAgeTogMTAwLFxuICBkdXJhdGlvbjogMyxcbiAgZWFzZTogXCJwb3dlcjEuaW5PdXRcIlxufSwgXCI+XCIpO1xuXG5nc2FwLnRvKFwiI2FuaW0wMlwiLCB7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uMDNcIixcbiAgICBzdGFydDogXCJib3R0b20gdG9wXCIsICAgXG4gICAgZW5kOiBcImJvdHRvbSB0b3BcIiwgXG4gICAgc2NydWI6IDAuMSwgXG4gIH0sXG4gIG9wYWNpdHk6IDAsXG59KTtcblxuIiwibGV0IGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxpZ2h0LmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKTtcbmRvY3VtZW50LmJvZHkucHJlcGVuZChsaWdodCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgZ3NhcC50byhsaWdodCwge1xuICAgIHg6IGUuY2xpZW50WCAtIGxpZ2h0Lm9mZnNldFdpZHRoIC8gMixcbiAgICB5OiBlLmNsaWVudFkgLSBsaWdodC5vZmZzZXRIZWlnaHQgLyAyLFxuICAgIGR1cmF0aW9uOiAwLjEsXG4gICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgfSk7XG59KTsiLCJjb25zdCBidG5Qb3J0Zm9saW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1wb3J0Zm9saW9cIik7XG5jb25zdCBidG5FdHN5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tZXRzeVwiKTtcbmNvbnN0IGJ0bkNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jb250YWN0XCIpXG5sZXQgZ3Jvd2luZyA9IGZhbHNlO1xubGV0IHNjYWxlRmFjdG9yID0gMS4wMztcblxuLy8gQXVnbWVudGVyIGxhIHRhaWxsZSBwcm9ncmVzc2l2ZW1lbnRcbmNvbnN0IHN0YXJ0R3Jvd2luZzIgPSAoZWxlbWVudCkgPT4ge1xuICBpZiAoIWdyb3dpbmcpIHtcbiAgICBncm93aW5nID0gdHJ1ZTtcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNjYWxlRmFjdG9yICs9IDAuMDE7XG4gICAgICBnc2FwLnRvKGVsZW1lbnQsIHtcbiAgICAgICAgc2NhbGU6IHNjYWxlRmFjdG9yLFxuICAgICAgICBkdXJhdGlvbjogMC4xLFxuICAgICAgICBlYXNlOiBcImxpbmVhclwiXG4gICAgICB9KTtcbiAgICB9LCAyMCk7IC8vIEF1Z21lbnRlIHRvdXRlcyBsZXMgMjBtc1xuICB9XG59O1xuXG4vLyBSw6lpbml0aWFsaXNlciBsYSB0YWlsbGVcbmNvbnN0IHJlc2V0U2l6ZTIgPSAoZWxlbWVudCkgPT4ge1xuICBncm93aW5nID0gZmFsc2U7XG4gIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICBzY2FsZUZhY3RvciA9IDE7XG4gIGdzYXAudG8oZWxlbWVudCwge1xuICAgIHNjYWxlOiAxLFxuICAgIGR1cmF0aW9uOiAxLFxuICAgIGVhc2U6IFwicG93ZXIzLm91dFwiXG4gIH0pO1xufTtcblxuXG5bYnRuUG9ydGZvbGlvLCBidG5FdHN5LCBidG5Db250YWN0XS5mb3JFYWNoKChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHN0YXJ0R3Jvd2luZzIoYnRuKSk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiByZXNldFNpemUyKGJ0bikpO1xufSk7IiwiY29uc3QgdGwzID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuc2VjdGlvbjAyXCIsXG4gICAgICBzdGFydDogXCJ0b3AgMTAlXCIsXG4gICAgICBlbmQ6IFwidG9wIDMwJVwiLCAgICAgICBcbiAgICAgIHNjcnViOiAyLFxuICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IG5vbmUgbm9uZSByZXZlcnNlXCJcbiAgICB9XG4gIH0pO1xuICBcbiAgdGwzLnRvKFwiaGVhZGVyXCIsIHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIGR1cmF0aW9uOiAyLFxuICAgIGVhc2U6IFwicG93ZXIxLm91dFwiXG4gIH0pOyIsImNvbnN0IHNjcm9sbFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNjcm9sbC1zZWN0aW9uXCIpO1xuXG5zY3JvbGxTZWN0aW9uLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgY29uc3Qgd3JhcHBlciA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuICBjb25zdCBpdGVtcyA9IHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpXG5cblxubGV0IGRpcmVjdGlvbiA9IG51bGw7XG5cbiAgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWwtc2VjdGlvblwiKSl7XG4gICAgZGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICB9IGVsc2UgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaG9yaXpvbnRhbC1zZWN0aW9uXCIpKXtcbiAgICBkaXJlY3Rpb24gPSBcImhvcml6b250YWxcIjtcbiAgfVxuXG4gIGluaXRTY3JvbGwoc2VjdGlvbiwgaXRlbXMsIGRpcmVjdGlvbik7XG5cbn0pO1xuXG5mdW5jdGlvbiBpbml0U2Nyb2xsKHNlY3Rpb24sIGl0ZW1zLCBkaXJlY3Rpb24pIHtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgIGRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIlxuICAgICAgPyBnc2FwLnNldChpdGVtLCB7IHhQZXJjZW50OiAxMDAgfSlcbiAgICAgIDogZ3NhcC5zZXQoaXRlbSwgeyB5UGVyY2VudDogMTAwfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IHNlY3Rpb24sXG4gICAgICBwaW46IHRydWUsXG4gICAgICBzdGFydDogXCJ0b3AgdG9wXCIsXG4gICAgICBlbmQ6ICgpID0+IGArPSR7aXRlbXMubGVuZ3RoICogMTAwfSVgLFxuICAgICAgc2NydWI6IDEsXG4gICAgICBpbnZhbGlkYXRlT25SZWZyZXNoOiB0cnVlLFxuICAgIH0sXG4gICAgZGVmYXVsdHM6IHsgZWFzZTogXCJub25lXCJ9LFxuICB9KTtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICB0bC50byhpdGVtLCB7XG4gICAgICBzY2FsZTogMC45NSxcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgfSk7XG5cbiAgICBkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICA/IHRsLnRvKFxuICAgICAgICBpdGVtc1tpbmRleCArIDFdLFxuICAgICAgICB7XG4gICAgICAgICAgeFBlcmNlbnQ6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIFwiPFwiXG4gICAgICApXG4gICAgICA6IHRsLnRvKFxuICAgICAgICBpdGVtc1tpbmRleCArIDFdLFxuICAgICAgICB7XG4gICAgICAgICAgeVBlcmNlbnQ6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIFwiPFwiXG4gICAgICApO1xuICB9KTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJyb3RhdGlvbkFyYzEiLCJ0byIsInJvdGF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwiZHVyYXRpb24iLCJyZXBlYXQiLCJlYXNlIiwicm90YXRpb25BcmMyIiwicm90YXRpb25BcmMzIiwidGwiLCJ0aW1lbGluZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsInRvZ2dsZUFjdGlvbnMiLCJzY2FsZSIsIngiLCJjcmVhdGUiLCJvbkVudGVyIiwicGF1c2UiLCJvbkxlYXZlQmFjayIsInBsYXkiLCJvcGFjaXR5Iiwic3ZnRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjYWxlRmFjdG9yIiwiZ3Jvd2luZyIsImludGVydmFsIiwic3RhcnRHcm93aW5nIiwic2V0SW50ZXJ2YWwiLCJyZXNldFNpemUiLCJjbGVhckludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRsMiIsInkiLCJsaWdodCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwicHJlcGVuZCIsImUiLCJjbGllbnRYIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRZIiwib2Zmc2V0SGVpZ2h0IiwiYnRuUG9ydGZvbGlvIiwiYnRuRXRzeSIsImJ0bkNvbnRhY3QiLCJzdGFydEdyb3dpbmcyIiwiZWxlbWVudCIsInJlc2V0U2l6ZTIiLCJmb3JFYWNoIiwiYnRuIiwidGwzIiwic2Nyb2xsU2VjdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWN0aW9uIiwid3JhcHBlciIsIml0ZW1zIiwiZGlyZWN0aW9uIiwiY29udGFpbnMiLCJpbml0U2Nyb2xsIiwiaXRlbSIsImluZGV4Iiwic2V0IiwieFBlcmNlbnQiLCJ5UGVyY2VudCIsInBpbiIsImNvbmNhdCIsImxlbmd0aCIsImludmFsaWRhdGVPblJlZnJlc2giLCJkZWZhdWx0cyIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=