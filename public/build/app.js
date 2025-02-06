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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQ047QUFDQTtBQUNGO0FBQ0c7QUFDRDtBQUNFO0FBRXZCQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQzs7Ozs7Ozs7OztBQ2Q3RUMsSUFBSSxDQUFDQyxjQUFjLENBQUNDLGFBQWEsQ0FBQztBQUVsQ0osT0FBTyxDQUFDQyxHQUFHLENBQUNJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUNOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU1QyxJQUFNQyxZQUFZLEdBQUdMLElBQUksQ0FBQ00sRUFBRSxDQUFDLE9BQU8sRUFBRTtFQUNsQ0MsUUFBUSxFQUFFLEdBQUc7RUFDYkMsZUFBZSxFQUFFLFFBQVE7RUFDekJDLFFBQVEsRUFBRSxHQUFHO0VBQ2JDLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVkMsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUFDO0FBRUYsSUFBTUMsWUFBWSxHQUFHWixJQUFJLENBQUNNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7RUFDcENDLFFBQVEsRUFBRSxDQUFDLEdBQUc7RUFDZEMsZUFBZSxFQUFFLFFBQVE7RUFDekJDLFFBQVEsRUFBRSxHQUFHO0VBQ2JDLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVkMsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUFDO0FBRUYsSUFBTUUsWUFBWSxHQUFHYixJQUFJLENBQUNNLEVBQUUsQ0FBQyxPQUFPLEVBQUU7RUFDcENDLFFBQVEsRUFBRSxDQUFDLEdBQUc7RUFDZEMsZUFBZSxFQUFFLFFBQVE7RUFDekJDLFFBQVEsRUFBRSxHQUFHO0VBQ2JDLE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDVkMsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBTUcsRUFBRSxHQUFHZCxJQUFJLENBQUNlLFFBQVEsQ0FBQztFQUN2QkMsYUFBYSxFQUFFO0lBQ2JDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxLQUFLLEVBQUUsWUFBWTtJQUNuQkMsR0FBRyxFQUFFLFNBQVM7SUFDZEMsS0FBSyxFQUFFLEdBQUc7SUFDVkMsYUFBYSxFQUFFO0VBQ2pCO0FBQ0YsQ0FBQyxDQUFDO0FBRUZQLEVBQUUsQ0FBQ1IsRUFBRSxDQUFDLFNBQVMsRUFBRTtFQUNmQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO0VBQ2JlLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLENBQUMsRUFBRSxHQUFHO0VBQ05kLFFBQVEsRUFBRSxDQUFDO0VBQ1hFLElBQUksRUFBRTtBQUNSLENBQUMsQ0FBQzs7QUFFRjtBQUNBVCxhQUFhLENBQUNzQixNQUFNLENBQUM7RUFDbkJQLE9BQU8sRUFBRSxZQUFZO0VBQ3JCQyxLQUFLLEVBQUUsWUFBWTtFQUNuQkMsR0FBRyxFQUFFLFNBQVM7RUFDZEMsS0FBSyxFQUFFLENBQUM7RUFDUkssT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUEsRUFBUTtJQUNicEIsWUFBWSxDQUFDcUIsS0FBSyxDQUFDLENBQUM7SUFDcEJkLFlBQVksQ0FBQ2MsS0FBSyxDQUFDLENBQUM7SUFDcEJiLFlBQVksQ0FBQ2EsS0FBSyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUNEQyxXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBQSxFQUFRO0lBQ2pCdEIsWUFBWSxDQUFDdUIsSUFBSSxDQUFDLENBQUM7SUFDbkJoQixZQUFZLENBQUNnQixJQUFJLENBQUMsQ0FBQztJQUNuQmYsWUFBWSxDQUFDZSxJQUFJLENBQUMsQ0FBQztFQUNyQjtBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBNUIsSUFBSSxDQUFDTSxFQUFFLENBQUMsU0FBUyxFQUFFO0VBQ2pCVSxhQUFhLEVBQUU7SUFDYkMsT0FBTyxFQUFFLFlBQVk7SUFDckJDLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxHQUFHLEVBQUUsZUFBZTtJQUNwQkMsS0FBSyxFQUFFO0VBQ1QsQ0FBQztFQUNEUyxPQUFPLEVBQUU7QUFDWCxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDNUVKQyxNQUFNLENBQUNDLE1BQU0sR0FBRyxZQUFVO0VBRTFCL0IsSUFBSSxDQUFDQyxjQUFjLENBQUNDLGFBQWEsQ0FBQztFQUVsQyxJQUFNOEIsVUFBVSxHQUFHN0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBRXBELElBQUk2QixXQUFXLEdBQUcsSUFBSTtFQUN0QixJQUFJQyxPQUFPLEdBQUcsS0FBSztFQUNuQixJQUFJQyxRQUFROztFQUVaO0VBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QixJQUFJLENBQUNGLE9BQU8sRUFBRTtNQUNaQSxPQUFPLEdBQUcsSUFBSTtNQUNkQyxRQUFRLEdBQUdFLFdBQVcsQ0FBQyxZQUFNO1FBQzNCSixXQUFXLElBQUksS0FBSyxDQUFDLENBQUM7UUFDdEJqQyxJQUFJLENBQUNNLEVBQUUsQ0FBQzBCLFVBQVUsRUFBRTtVQUNsQlYsS0FBSyxFQUFFVyxXQUFXO1VBQ2xCeEIsUUFBUSxFQUFFLEdBQUc7VUFDYkUsSUFBSSxFQUFFO1FBQ1IsQ0FBQyxDQUFDO01BQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVjtFQUNGLENBQUM7O0VBRUQ7RUFDQSxJQUFNMkIsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztJQUN0QkosT0FBTyxHQUFHLEtBQUs7SUFDZkssYUFBYSxDQUFDSixRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pCRixXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakJqQyxJQUFJLENBQUNNLEVBQUUsQ0FBQzBCLFVBQVUsRUFBRTtNQUNsQlYsS0FBSyxFQUFFLENBQUM7TUFBRTtNQUNWYixRQUFRLEVBQUUsR0FBRztNQUNiRSxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSixDQUFDO0VBR0RxQixVQUFVLENBQUNRLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO0lBQzlDSixZQUFZLENBQUMsQ0FBQztFQUNoQixDQUFDLENBQUM7RUFFRkosVUFBVSxDQUFDUSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBTTtJQUM5Q0YsU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLENBQUM7O0VBSUY7RUFDQSxJQUFNRyxHQUFHLEdBQUd6QyxJQUFJLENBQUNlLFFBQVEsQ0FBQztJQUN4QkMsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRSxNQUFNO01BQ2ZDLEtBQUssRUFBRSxVQUFVO01BQ2pCQyxHQUFHLEVBQUUsWUFBWTtNQUNqQkMsS0FBSyxFQUFFLENBQUM7TUFDUkMsYUFBYSxFQUFFO0lBQ2pCO0VBQ0YsQ0FBQyxDQUFDO0VBRUZvQixHQUFHLENBQUNuQyxFQUFFLENBQUMsU0FBUyxFQUFFO0lBQ2hCZ0IsS0FBSyxFQUFFLENBQUM7SUFDUkMsQ0FBQyxFQUFFLEdBQUc7SUFDTm1CLENBQUMsRUFBRSxFQUFFO0lBQ0xqQyxRQUFRLEVBQUUsQ0FBQztJQUNYRSxJQUFJLEVBQUU7RUFDUixDQUFDLENBQUM7RUFFRjhCLEdBQUcsQ0FBQ25DLEVBQUUsQ0FBQyxTQUFTLEVBQUU7SUFDaEJnQixLQUFLLEVBQUUsQ0FBQztJQUNSQyxDQUFDLEVBQUUsQ0FBQyxHQUFHO0lBQ1BtQixDQUFDLEVBQUUsR0FBRztJQUNOakMsUUFBUSxFQUFFLENBQUM7SUFDWEUsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUVQOEIsR0FBRyxDQUFDbkMsRUFBRSxDQUFDLFNBQVMsRUFBRTtJQUNoQmdCLEtBQUssRUFBRSxDQUFDO0lBQ1JDLENBQUMsRUFBRSxDQUFDLEdBQUc7SUFDUG1CLENBQUMsRUFBRSxJQUFJO0lBQ1BqQyxRQUFRLEVBQUUsQ0FBQztJQUNYRSxJQUFJLEVBQUU7RUFDUixDQUFDLEVBQUUsR0FBRyxDQUFDOztFQUVQO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVBLENBQUM7Ozs7Ozs7Ozs7QUM3RkQsSUFBSWdDLEtBQUssR0FBR3hDLFFBQVEsQ0FBQ3lDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDekNELEtBQUssQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBQzVCM0MsUUFBUSxDQUFDNEMsSUFBSSxDQUFDQyxPQUFPLENBQUNMLEtBQUssQ0FBQztBQUU1QnhDLFFBQVEsQ0FBQ3FDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFDUyxDQUFDLEVBQUs7RUFDNUNqRCxJQUFJLENBQUNNLEVBQUUsQ0FBQ3FDLEtBQUssRUFBRTtJQUNicEIsQ0FBQyxFQUFFMEIsQ0FBQyxDQUFDQyxPQUFPLEdBQUdQLEtBQUssQ0FBQ1EsV0FBVyxHQUFHLENBQUM7SUFDcENULENBQUMsRUFBRU8sQ0FBQyxDQUFDRyxPQUFPLEdBQUdULEtBQUssQ0FBQ1UsWUFBWSxHQUFHLENBQUM7SUFDckM1QyxRQUFRLEVBQUUsR0FBRztJQUNiRSxJQUFJLEVBQUU7RUFDUixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRixJQUFNMkMsWUFBWSxHQUFHbkQsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDN0QsSUFBTW1ELE9BQU8sR0FBR3BELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNuRCxJQUFNb0QsVUFBVSxHQUFHckQsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQ3pELElBQUk4QixPQUFPLEdBQUcsS0FBSztBQUNuQixJQUFJRCxXQUFXLEdBQUcsSUFBSTs7QUFFdEI7QUFDQSxJQUFNd0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxPQUFPLEVBQUs7RUFDakMsSUFBSSxDQUFDeEIsT0FBTyxFQUFFO0lBQ1pBLE9BQU8sR0FBRyxJQUFJO0lBQ2RDLFFBQVEsR0FBR0UsV0FBVyxDQUFDLFlBQU07TUFDM0JKLFdBQVcsSUFBSSxJQUFJO01BQ25CakMsSUFBSSxDQUFDTSxFQUFFLENBQUNvRCxPQUFPLEVBQUU7UUFDZnBDLEtBQUssRUFBRVcsV0FBVztRQUNsQnhCLFFBQVEsRUFBRSxHQUFHO1FBQ2JFLElBQUksRUFBRTtNQUNSLENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ1Y7QUFDRixDQUFDOztBQUVEO0FBQ0EsSUFBTWdELFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJRCxPQUFPLEVBQUs7RUFDOUJ4QixPQUFPLEdBQUcsS0FBSztFQUNmSyxhQUFhLENBQUNKLFFBQVEsQ0FBQztFQUN2QkYsV0FBVyxHQUFHLENBQUM7RUFDZmpDLElBQUksQ0FBQ00sRUFBRSxDQUFDb0QsT0FBTyxFQUFFO0lBQ2ZwQyxLQUFLLEVBQUUsQ0FBQztJQUNSYixRQUFRLEVBQUUsQ0FBQztJQUNYRSxJQUFJLEVBQUU7RUFDUixDQUFDLENBQUM7QUFDSixDQUFDO0FBR0QsQ0FBQzJDLFlBQVksRUFBRUMsT0FBTyxFQUFFQyxVQUFVLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLFVBQUNDLEdBQUcsRUFBSztFQUNuREEsR0FBRyxDQUFDckIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO0lBQUEsT0FBTWlCLGFBQWEsQ0FBQ0ksR0FBRyxDQUFDO0VBQUEsRUFBQztFQUM1REEsR0FBRyxDQUFDckIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO0lBQUEsT0FBTW1CLFVBQVUsQ0FBQ0UsR0FBRyxDQUFDO0VBQUEsRUFBQztBQUMzRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNyQ0Y3RCxJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JCRCxJQUFJLENBQUNDLGNBQWMsQ0FBQ0MsYUFBYSxDQUFDO0FBRWxDLElBQU00RCxHQUFHLEdBQUc5RCxJQUFJLENBQUNlLFFBQVEsQ0FBQztFQUN0QkMsYUFBYSxFQUFFO0lBQ2JDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsR0FBRyxFQUFFLFNBQVM7SUFDZEMsS0FBSyxFQUFFLENBQUM7SUFDUkMsYUFBYSxFQUFFO0VBQ2pCO0FBQ0YsQ0FBQyxDQUFDO0FBRUZ5QyxHQUFHLENBQUN4RCxFQUFFLENBQUMsUUFBUSxFQUFFO0VBQ2Z1QixPQUFPLEVBQUUsQ0FBQztFQUNWcEIsUUFBUSxFQUFFLENBQUM7RUFDWEUsSUFBSSxFQUFFO0FBQ1IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkpYLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7QUFDckJELElBQUksQ0FBQ0MsY0FBYyxDQUFDQyxhQUFhLENBQUM7QUFFbEMsSUFBTTZELGFBQWEsR0FBRzVELFFBQVEsQ0FBQzZELGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0FBRWxFRCxhQUFhLENBQUNILE9BQU8sQ0FBQyxVQUFDSyxPQUFPLEVBQUs7RUFDakMsSUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUM3RCxhQUFhLENBQUMsVUFBVSxDQUFDO0VBQ2pELElBQU0rRCxLQUFLLEdBQUdELE9BQU8sQ0FBQ0YsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0VBR2pELElBQUlJLFNBQVMsR0FBRyxJQUFJO0VBRWxCLElBQUlILE9BQU8sQ0FBQ3BCLFNBQVMsQ0FBQ3dCLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDO0lBQ2pERCxTQUFTLEdBQUcsVUFBVTtFQUN4QixDQUFDLE1BQU0sSUFBSUgsT0FBTyxDQUFDcEIsU0FBUyxDQUFDd0IsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEVBQUM7SUFDMURELFNBQVMsR0FBRyxZQUFZO0VBQzFCO0VBRUFFLFVBQVUsQ0FBQ0wsT0FBTyxFQUFFRSxLQUFLLEVBQUVDLFNBQVMsQ0FBQztBQUV2QyxDQUFDLENBQUM7QUFFRixTQUFTRSxVQUFVQSxDQUFDTCxPQUFPLEVBQUVFLEtBQUssRUFBRUMsU0FBUyxFQUFFO0VBQzdDRCxLQUFLLENBQUNQLE9BQU8sQ0FBQyxVQUFDVyxJQUFJLEVBQUVDLEtBQUssRUFBSztJQUM3QixJQUFJQSxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ2ZKLFNBQVMsSUFBSSxZQUFZLEdBQ3ZCcEUsSUFBSSxDQUFDeUUsR0FBRyxDQUFDRixJQUFJLEVBQUU7UUFBRUcsUUFBUSxFQUFFO01BQUksQ0FBQyxDQUFDLEdBQ2pDMUUsSUFBSSxDQUFDeUUsR0FBRyxDQUFDRixJQUFJLEVBQUU7UUFBRUksUUFBUSxFQUFFO01BQUcsQ0FBQyxDQUFDO0lBQ3BDO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBTTdELEVBQUUsR0FBR2QsSUFBSSxDQUFDZSxRQUFRLENBQUM7SUFDdkJDLGFBQWEsRUFBRTtNQUNiQyxPQUFPLEVBQUVnRCxPQUFPO01BQ2hCVyxHQUFHLEVBQUUsSUFBSTtNQUNUMUQsS0FBSyxFQUFFLFNBQVM7TUFDaEJDLEdBQUcsRUFBRSxTQUFMQSxHQUFHQSxDQUFBO1FBQUEsWUFBQTBELE1BQUEsQ0FBYVYsS0FBSyxDQUFDVyxNQUFNLEdBQUcsR0FBRztNQUFBLENBQUc7TUFDckMxRCxLQUFLLEVBQUUsQ0FBQztNQUNSMkQsbUJBQW1CLEVBQUU7SUFDdkIsQ0FBQztJQUNEQyxRQUFRLEVBQUU7TUFBRXJFLElBQUksRUFBRTtJQUFNO0VBQzFCLENBQUMsQ0FBQztFQUNGd0QsS0FBSyxDQUFDUCxPQUFPLENBQUMsVUFBQ1csSUFBSSxFQUFFQyxLQUFLLEVBQUs7SUFDN0IxRCxFQUFFLENBQUNSLEVBQUUsQ0FBQ2lFLElBQUksRUFBRTtNQUNWakQsS0FBSyxFQUFFLElBQUk7TUFDWDJELFlBQVksRUFBRTtJQUNoQixDQUFDLENBQUM7SUFFRmIsU0FBUyxLQUFLLFlBQVksR0FDdEJ0RCxFQUFFLENBQUNSLEVBQUUsQ0FDTDZELEtBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUNoQjtNQUNFRSxRQUFRLEVBQUU7SUFDWixDQUFDLEVBQ0QsR0FDRixDQUFDLEdBQ0M1RCxFQUFFLENBQUNSLEVBQUUsQ0FDTDZELEtBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUNoQjtNQUNFRyxRQUFRLEVBQUU7SUFDWixDQUFDLEVBQ0QsR0FDRixDQUFDO0VBQ0wsQ0FBQyxDQUFDO0FBQ0o7Ozs7Ozs7Ozs7OztBQ2hFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FuaW0wMS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbTAyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib2R5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib3V0b25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJy4vanMvYW5pbTAxJztcbmltcG9ydCAnLi9qcy9hbmltMDInO1xuaW1wb3J0ICcuL2pzL2JvZHknO1xuaW1wb3J0ICcuL2pzL2JvdXRvbnMnO1xuaW1wb3J0ICcuL2pzL2hlYWRlcic7XG5pbXBvcnQgJy4vanMvc2VydmljZXMnO1xuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuIiwiZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcmMxXCIpKTtcbmNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJjMlwiKSk7XG5jb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FyYzNcIikpO1xuXG5jb25zdCByb3RhdGlvbkFyYzEgPSBnc2FwLnRvKFwiI2FyYzFcIiwge1xuICAgIHJvdGF0aW9uOiAzNjAsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlclwiLFxuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgcmVwZWF0OiAtMSxcbiAgICBlYXNlOiBcImxpbmVhclwiXG4gIH0pO1xuICBcbiAgY29uc3Qgcm90YXRpb25BcmMyID0gZ3NhcC50byhcIiNhcmMyXCIsIHtcbiAgICByb3RhdGlvbjogLTM2MCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFwiY2VudGVyXCIsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICByZXBlYXQ6IC0xLFxuICAgIGVhc2U6IFwibGluZWFyXCJcbiAgfSk7XG4gIFxuICBjb25zdCByb3RhdGlvbkFyYzMgPSBnc2FwLnRvKFwiI2FyYzNcIiwge1xuICAgIHJvdGF0aW9uOiAtMzYwLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogXCJjZW50ZXJcIixcbiAgICBkdXJhdGlvbjogMjUwLFxuICAgIHJlcGVhdDogLTEsXG4gICAgZWFzZTogXCJsaW5lYXJcIlxuICB9KTtcbiAgXG4gIC8vIEFuaW1hdGlvbiBhdSBzY3JvbGxcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uMDJcIixcbiAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcbiAgICAgIGVuZDogXCJ0b3AgMjAlXCIsICAgICAgIFxuICAgICAgc2NydWI6IDEuNSxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiXG4gICAgfVxuICB9KTtcbiAgXG4gIHRsLnRvKFwiI2FuaW0wMVwiLCB7XG4gICAgcm90YXRpb246IC0yNSxcbiAgICBzY2FsZTogMC42LFxuICAgIHg6IDEwMCxcbiAgICBkdXJhdGlvbjogMixcbiAgICBlYXNlOiBcInBvd2VyMS5pbk91dFwiXG4gIH0pO1xuICBcbiAgLy8gUGF1c2UvcmVwcmlzZSBkZXMgcm90YXRpb25zXG4gIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uMDJcIixcbiAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgZW5kOiBcInRvcCAxMCVcIixcbiAgICBzY3J1YjogMixcbiAgICBvbkVudGVyOiAoKSA9PiB7XG4gICAgICByb3RhdGlvbkFyYzEucGF1c2UoKTtcbiAgICAgIHJvdGF0aW9uQXJjMi5wYXVzZSgpO1xuICAgICAgcm90YXRpb25BcmMzLnBhdXNlKCk7XG4gICAgfSxcbiAgICBvbkxlYXZlQmFjazogKCkgPT4ge1xuICAgICAgcm90YXRpb25BcmMxLnBsYXkoKTtcbiAgICAgIHJvdGF0aW9uQXJjMi5wbGF5KCk7XG4gICAgICByb3RhdGlvbkFyYzMucGxheSgpO1xuICAgIH1cbiAgfSk7XG4gIFxuICAvLyBMZSBmYWlyZSBkaXNwYXJhw650cmUgcGVuZGFudCBzZWN0aW9uMDJcbiAgZ3NhcC50byhcIiNhbmltMDFcIiwge1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLnNlY3Rpb24wMlwiLFxuICAgICAgc3RhcnQ6IFwidG9wIDIwJVwiLCAgIFxuICAgICAgZW5kOiBcImJvdHRvbSBib3R0b21cIiwgXG4gICAgICBzY3J1YjogMC4xLCBcbiAgICB9LFxuICAgIG9wYWNpdHk6IDAsXG4gIH0pOyIsIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5jb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbmltMDJcIik7XG5cbmxldCBzY2FsZUZhY3RvciA9IDEuMDM7XG5sZXQgZ3Jvd2luZyA9IGZhbHNlO1xubGV0IGludGVydmFsO1xuXG4vLyBGb25jdGlvbiBwb3VyIGF1Z21lbnRlciBsYSB0YWlsbGUgcHJvZ3Jlc3NpdmVtZW50XG5jb25zdCBzdGFydEdyb3dpbmcgPSAoKSA9PiB7XG4gIGlmICghZ3Jvd2luZykge1xuICAgIGdyb3dpbmcgPSB0cnVlO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2NhbGVGYWN0b3IgKz0gMC4wMDU7IC8vIEF1Z21lbnRlIGxhIHRhaWxsZSBwcm9ncmVzc2l2ZW1lbnRcbiAgICAgIGdzYXAudG8oc3ZnRWxlbWVudCwge1xuICAgICAgICBzY2FsZTogc2NhbGVGYWN0b3IsXG4gICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgIGVhc2U6IFwibGluZWFyXCJcbiAgICAgIH0pO1xuICAgIH0sIDIwKTsgLy8gQXVnbWVudGUgdG91dGVzIGxlcyAyMG1zXG4gIH1cbn07XG5cbi8vIEZvbmN0aW9uIHBvdXIgcsOpaW5pdGlhbGlzZXIgbGEgdGFpbGxlXG5jb25zdCByZXNldFNpemUgPSAoKSA9PiB7XG4gIGdyb3dpbmcgPSBmYWxzZTtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7IC8vIFN0b3BwZSBsJ2F1Z21lbnRhdGlvblxuICBzY2FsZUZhY3RvciA9IDE7IC8vIFLDqWluaXRpYWxpc2VyIGxhIHRhaWxsZSBkZSBkw6lwYXJ0IGR1IGdyb3dpbmdcbiAgZ3NhcC50byhzdmdFbGVtZW50LCB7XG4gICAgc2NhbGU6IDEsIC8vIFJldG91ciDDoCBsYSB0YWlsbGUgbm9ybWFsZVxuICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgZWFzZTogXCJwb3dlcjEub3V0XCJcbiAgfSk7XG59O1xuXG5cbnN2Z0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICBzdGFydEdyb3dpbmcoKTtcbn0pO1xuXG5zdmdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgcmVzZXRTaXplKCk7XG59KTtcblxuXG5cbi8vIEFuaW1hdGlvbiBhdSBzY3JvbGxcbmNvbnN0IHRsMiA9IGdzYXAudGltZWxpbmUoe1xuICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgdHJpZ2dlcjogXCJib2R5XCIsXG4gICAgc3RhcnQ6IFwidG9wIC0yMCVcIixcbiAgICBlbmQ6IFwiYm90dG9tIDUwJVwiLCAgICAgICBcbiAgICBzY3J1YjogMixcbiAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICB9XG59KTtcblxudGwyLnRvKFwiI2FuaW0wMlwiLCB7XG4gIHNjYWxlOiA0LFxuICB4OiAzMDAsXG4gIHk6IDUwLFxuICBkdXJhdGlvbjogMixcbiAgZWFzZTogXCJwb3dlcjEuaW5PdXRcIlxufSk7XG5cbnRsMi50byhcIiNhbmltMDJcIiwge1xuICBzY2FsZTogMSwgXG4gIHg6IC0yMDAsICBcbiAgeTogMTAwLFxuICBkdXJhdGlvbjogMyxcbiAgZWFzZTogXCJwb3dlcjEuaW5PdXRcIlxufSwgXCI+XCIpO1xuXG50bDIudG8oXCIjYW5pbTAyXCIsIHtcbiAgc2NhbGU6IDAsXG4gIHg6IC01MDAsXG4gIHk6IDEwMDAsXG4gIGR1cmF0aW9uOiAzLFxuICBlYXNlOiBcInBvd2VyMS5pbk91dFwiXG59LCBcIj5cIik7XG5cbi8vIGdzYXAudG8oXCIjYW5pbTAyXCIsIHtcbi8vICAgc2Nyb2xsVHJpZ2dlcjoge1xuLy8gICAgIHRyaWdnZXI6IFwiLnNlY3Rpb24wM1wiLFxuLy8gICAgIHN0YXJ0OiBcImJvdHRvbSB0b3BcIiwgICBcbi8vICAgICBlbmQ6IFwiYm90dG9tIHRvcFwiLCBcbi8vICAgICBzY3J1YjogMC4xLCBcbi8vICAgfSxcbi8vICAgb3BhY2l0eTogMCxcbi8vIH0pO1xuXG59OyIsImxldCBsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5saWdodC5jbGFzc0xpc3QuYWRkKFwibGlnaHRcIik7XG5kb2N1bWVudC5ib2R5LnByZXBlbmQobGlnaHQpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gIGdzYXAudG8obGlnaHQsIHtcbiAgICB4OiBlLmNsaWVudFggLSBsaWdodC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgeTogZS5jbGllbnRZIC0gbGlnaHQub2Zmc2V0SGVpZ2h0IC8gMixcbiAgICBkdXJhdGlvbjogMC4xLFxuICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gIH0pO1xufSk7IiwiY29uc3QgYnRuUG9ydGZvbGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcG9ydGZvbGlvXCIpO1xuY29uc3QgYnRuRXRzeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWV0c3lcIik7XG5jb25zdCBidG5Db250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY29udGFjdFwiKVxubGV0IGdyb3dpbmcgPSBmYWxzZTtcbmxldCBzY2FsZUZhY3RvciA9IDEuMDM7XG5cbi8vIEF1Z21lbnRlciBsYSB0YWlsbGUgcHJvZ3Jlc3NpdmVtZW50XG5jb25zdCBzdGFydEdyb3dpbmcyID0gKGVsZW1lbnQpID0+IHtcbiAgaWYgKCFncm93aW5nKSB7XG4gICAgZ3Jvd2luZyA9IHRydWU7XG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzY2FsZUZhY3RvciArPSAwLjAxO1xuICAgICAgZ3NhcC50byhlbGVtZW50LCB7XG4gICAgICAgIHNjYWxlOiBzY2FsZUZhY3RvcixcbiAgICAgICAgZHVyYXRpb246IDAuMSxcbiAgICAgICAgZWFzZTogXCJsaW5lYXJcIlxuICAgICAgfSk7XG4gICAgfSwgMjApOyAvLyBBdWdtZW50ZSB0b3V0ZXMgbGVzIDIwbXNcbiAgfVxufTtcblxuLy8gUsOpaW5pdGlhbGlzZXIgbGEgdGFpbGxlXG5jb25zdCByZXNldFNpemUyID0gKGVsZW1lbnQpID0+IHtcbiAgZ3Jvd2luZyA9IGZhbHNlO1xuICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgc2NhbGVGYWN0b3IgPSAxO1xuICBnc2FwLnRvKGVsZW1lbnQsIHtcbiAgICBzY2FsZTogMSxcbiAgICBkdXJhdGlvbjogMSxcbiAgICBlYXNlOiBcInBvd2VyMy5vdXRcIlxuICB9KTtcbn07XG5cblxuW2J0blBvcnRmb2xpbywgYnRuRXRzeSwgYnRuQ29udGFjdF0uZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiBzdGFydEdyb3dpbmcyKGJ0bikpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gcmVzZXRTaXplMihidG4pKTtcbn0pOyIsImdzYXAucmVnaXN0ZXJQbHVnaW4oKTtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmNvbnN0IHRsMyA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLnNlY3Rpb24wMlwiLFxuICAgICAgc3RhcnQ6IFwidG9wIDEwJVwiLFxuICAgICAgZW5kOiBcInRvcCAzMCVcIiwgICAgICAgXG4gICAgICBzY3J1YjogMixcbiAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiXG4gICAgfVxuICB9KTtcbiAgXG4gIHRsMy50byhcImhlYWRlclwiLCB7XG4gICAgb3BhY2l0eTogMSxcbiAgICBkdXJhdGlvbjogMixcbiAgICBlYXNlOiBcInBvd2VyMS5vdXRcIlxuICB9KTsiLCJnc2FwLnJlZ2lzdGVyUGx1Z2luKCk7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5jb25zdCBzY3JvbGxTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zY3JvbGwtc2VjdGlvblwiKTtcblxuc2Nyb2xsU2VjdGlvbi5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IHdyYXBwZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgY29uc3QgaXRlbXMgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKVxuXG5cbmxldCBkaXJlY3Rpb24gPSBudWxsO1xuXG4gIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsLXNlY3Rpb25cIikpe1xuICAgIGRpcmVjdGlvbiA9IFwidmVydGljYWxcIjtcbiAgfSBlbHNlIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcImhvcml6b250YWwtc2VjdGlvblwiKSl7XG4gICAgZGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gIH1cblxuICBpbml0U2Nyb2xsKHNlY3Rpb24sIGl0ZW1zLCBkaXJlY3Rpb24pO1xuXG59KTtcblxuZnVuY3Rpb24gaW5pdFNjcm9sbChzZWN0aW9uLCBpdGVtcywgZGlyZWN0aW9uKSB7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICBkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCJcbiAgICAgID8gZ3NhcC5zZXQoaXRlbSwgeyB4UGVyY2VudDogMTAwIH0pXG4gICAgICA6IGdzYXAuc2V0KGl0ZW0sIHsgeVBlcmNlbnQ6IDEwMH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBzZWN0aW9uLFxuICAgICAgcGluOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxuICAgICAgZW5kOiAoKSA9PiBgKz0ke2l0ZW1zLmxlbmd0aCAqIDEwMH0lYCxcbiAgICAgIHNjcnViOiAxLFxuICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaDogdHJ1ZSxcbiAgICB9LFxuICAgIGRlZmF1bHRzOiB7IGVhc2U6IFwibm9uZVwifSxcbiAgfSk7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgdGwudG8oaXRlbSwge1xuICAgICAgc2NhbGU6IDAuOTUsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgIH0pO1xuXG4gICAgZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICAgPyB0bC50byhcbiAgICAgICAgaXRlbXNbaW5kZXggKyAxXSxcbiAgICAgICAge1xuICAgICAgICAgIHhQZXJjZW50OiAwLFxuICAgICAgICB9LFxuICAgICAgICBcIjxcIlxuICAgICAgKVxuICAgICAgOiB0bC50byhcbiAgICAgICAgaXRlbXNbaW5kZXggKyAxXSxcbiAgICAgICAge1xuICAgICAgICAgIHlQZXJjZW50OiAwLFxuICAgICAgICB9LFxuICAgICAgICBcIjxcIlxuICAgICAgKTtcbiAgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm90YXRpb25BcmMxIiwidG8iLCJyb3RhdGlvbiIsInRyYW5zZm9ybU9yaWdpbiIsImR1cmF0aW9uIiwicmVwZWF0IiwiZWFzZSIsInJvdGF0aW9uQXJjMiIsInJvdGF0aW9uQXJjMyIsInRsIiwidGltZWxpbmUiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJ0b2dnbGVBY3Rpb25zIiwic2NhbGUiLCJ4IiwiY3JlYXRlIiwib25FbnRlciIsInBhdXNlIiwib25MZWF2ZUJhY2siLCJwbGF5Iiwib3BhY2l0eSIsIndpbmRvdyIsIm9ubG9hZCIsInN2Z0VsZW1lbnQiLCJzY2FsZUZhY3RvciIsImdyb3dpbmciLCJpbnRlcnZhbCIsInN0YXJ0R3Jvd2luZyIsInNldEludGVydmFsIiwicmVzZXRTaXplIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0bDIiLCJ5IiwibGlnaHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsInByZXBlbmQiLCJlIiwiY2xpZW50WCIsIm9mZnNldFdpZHRoIiwiY2xpZW50WSIsIm9mZnNldEhlaWdodCIsImJ0blBvcnRmb2xpbyIsImJ0bkV0c3kiLCJidG5Db250YWN0Iiwic3RhcnRHcm93aW5nMiIsImVsZW1lbnQiLCJyZXNldFNpemUyIiwiZm9yRWFjaCIsImJ0biIsInRsMyIsInNjcm9sbFNlY3Rpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdGlvbiIsIndyYXBwZXIiLCJpdGVtcyIsImRpcmVjdGlvbiIsImNvbnRhaW5zIiwiaW5pdFNjcm9sbCIsIml0ZW0iLCJpbmRleCIsInNldCIsInhQZXJjZW50IiwieVBlcmNlbnQiLCJwaW4iLCJjb25jYXQiLCJsZW5ndGgiLCJpbnZhbGlkYXRlT25SZWZyZXNoIiwiZGVmYXVsdHMiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9