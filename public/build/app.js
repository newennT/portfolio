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
gsap.registerPlugin();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkMsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRWdELE9BQU87TUFDaEJXLEdBQUcsRUFBRSxJQUFJO01BQ1QxRCxLQUFLLEVBQUUsU0FBUztNQUNoQkMsR0FBRyxFQUFFLFNBQUxBLEdBQUdBLENBQUE7UUFBQSxZQUFBMEQsTUFBQSxDQUFhVixLQUFLLENBQUNXLE1BQU0sR0FBRyxHQUFHO01BQUEsQ0FBRztNQUNyQzFELEtBQUssRUFBRSxDQUFDO01BQ1IyRCxtQkFBbUIsRUFBRTtJQUN2QixDQUFDO0lBQ0RDLFFBQVEsRUFBRTtNQUFFckUsSUFBSSxFQUFFO0lBQU07RUFDMUIsQ0FBQyxDQUFDO0VBQ0Z3RCxLQUFLLENBQUNQLE9BQU8sQ0FBQyxVQUFDVyxJQUFJLEVBQUVDLEtBQUssRUFBSztJQUM3QjFELEVBQUUsQ0FBQ1IsRUFBRSxDQUFDaUUsSUFBSSxFQUFFO01BQ1ZqRCxLQUFLLEVBQUUsSUFBSTtNQUNYMkQsWUFBWSxFQUFFO0lBQ2hCLENBQUMsQ0FBQztJQUVGYixTQUFTLEtBQUssWUFBWSxHQUN0QnRELEVBQUUsQ0FBQ1IsRUFBRSxDQUNMNkQsS0FBSyxDQUFDSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQ2hCO01BQ0VFLFFBQVEsRUFBRTtJQUNaLENBQUMsRUFDRCxHQUNGLENBQUMsR0FDQzVELEVBQUUsQ0FBQ1IsRUFBRSxDQUNMNkQsS0FBSyxDQUFDSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQ2hCO01BQ0VHLFFBQVEsRUFBRTtJQUNaLENBQUMsRUFDRCxHQUNGLENBQUM7RUFDTCxDQUFDLENBQUM7QUFDSjs7Ozs7Ozs7Ozs7O0FDaEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbTAxLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hbmltMDIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2JvdXRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi9qcy9hbmltMDEnO1xuaW1wb3J0ICcuL2pzL2FuaW0wMic7XG5pbXBvcnQgJy4vanMvYm9keSc7XG5pbXBvcnQgJy4vanMvYm91dG9ucyc7XG5pbXBvcnQgJy4vanMvaGVhZGVyJztcbmltcG9ydCAnLi9qcy9zZXJ2aWNlcyc7XG5cbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XG4iLCJnc2FwLnJlZ2lzdGVyUGx1Z2luKCk7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5jb25zdCByb3RhdGlvbkFyYzEgPSBnc2FwLnRvKFwiI2FyYzFcIiwge1xuICAgIHJvdGF0aW9uOiAzNjAsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlclwiLFxuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgcmVwZWF0OiAtMSxcbiAgICBlYXNlOiBcImxpbmVhclwiXG4gIH0pO1xuICBcbiAgY29uc3Qgcm90YXRpb25BcmMyID0gZ3NhcC50byhcIiNhcmMyXCIsIHtcbiAgICByb3RhdGlvbjogLTM2MCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFwiY2VudGVyXCIsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICByZXBlYXQ6IC0xLFxuICAgIGVhc2U6IFwibGluZWFyXCJcbiAgfSk7XG4gIFxuICBjb25zdCByb3RhdGlvbkFyYzMgPSBnc2FwLnRvKFwiI2FyYzNcIiwge1xuICAgIHJvdGF0aW9uOiAtMzYwLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogXCJjZW50ZXJcIixcbiAgICBkdXJhdGlvbjogMjUwLFxuICAgIHJlcGVhdDogLTEsXG4gICAgZWFzZTogXCJsaW5lYXJcIlxuICB9KTtcbiAgXG4gIC8vIEFuaW1hdGlvbiBhdSBzY3JvbGxcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uMDJcIixcbiAgICAgIHN0YXJ0OiBcInRvcCBib3R0b21cIixcbiAgICAgIGVuZDogXCJ0b3AgMjAlXCIsICAgICAgIFxuICAgICAgc2NydWI6IDEuNSxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiXG4gICAgfVxuICB9KTtcbiAgXG4gIHRsLnRvKFwiI2FuaW0wMVwiLCB7XG4gICAgcm90YXRpb246IC0yNSxcbiAgICBzY2FsZTogMC42LFxuICAgIHg6IDEwMCxcbiAgICBkdXJhdGlvbjogMixcbiAgICBlYXNlOiBcInBvd2VyMS5pbk91dFwiXG4gIH0pO1xuICBcbiAgLy8gUGF1c2UvcmVwcmlzZSBkZXMgcm90YXRpb25zXG4gIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uMDJcIixcbiAgICBzdGFydDogXCJ0b3AgY2VudGVyXCIsXG4gICAgZW5kOiBcInRvcCAxMCVcIixcbiAgICBzY3J1YjogMixcbiAgICBvbkVudGVyOiAoKSA9PiB7XG4gICAgICByb3RhdGlvbkFyYzEucGF1c2UoKTtcbiAgICAgIHJvdGF0aW9uQXJjMi5wYXVzZSgpO1xuICAgICAgcm90YXRpb25BcmMzLnBhdXNlKCk7XG4gICAgfSxcbiAgICBvbkxlYXZlQmFjazogKCkgPT4ge1xuICAgICAgcm90YXRpb25BcmMxLnBsYXkoKTtcbiAgICAgIHJvdGF0aW9uQXJjMi5wbGF5KCk7XG4gICAgICByb3RhdGlvbkFyYzMucGxheSgpO1xuICAgIH1cbiAgfSk7XG4gIFxuICAvLyBMZSBmYWlyZSBkaXNwYXJhw650cmUgcGVuZGFudCBzZWN0aW9uMDJcbiAgZ3NhcC50byhcIiNhbmltMDFcIiwge1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLnNlY3Rpb24wMlwiLFxuICAgICAgc3RhcnQ6IFwidG9wIDIwJVwiLCAgIFxuICAgICAgZW5kOiBcImJvdHRvbSBib3R0b21cIiwgXG4gICAgICBzY3J1YjogMC4xLCBcbiAgICB9LFxuICAgIG9wYWNpdHk6IDAsXG4gIH0pOyIsImdzYXAucmVnaXN0ZXJQbHVnaW4oKTtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FuaW0wMlwiKTtcblxubGV0IHNjYWxlRmFjdG9yID0gMS4wMztcbmxldCBncm93aW5nID0gZmFsc2U7XG5sZXQgaW50ZXJ2YWw7XG5cbi8vIEZvbmN0aW9uIHBvdXIgYXVnbWVudGVyIGxhIHRhaWxsZSBwcm9ncmVzc2l2ZW1lbnRcbmNvbnN0IHN0YXJ0R3Jvd2luZyA9ICgpID0+IHtcbiAgaWYgKCFncm93aW5nKSB7XG4gICAgZ3Jvd2luZyA9IHRydWU7XG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzY2FsZUZhY3RvciArPSAwLjAwNTsgLy8gQXVnbWVudGUgbGEgdGFpbGxlIHByb2dyZXNzaXZlbWVudFxuICAgICAgZ3NhcC50byhzdmdFbGVtZW50LCB7XG4gICAgICAgIHNjYWxlOiBzY2FsZUZhY3RvcixcbiAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgZWFzZTogXCJsaW5lYXJcIlxuICAgICAgfSk7XG4gICAgfSwgMjApOyAvLyBBdWdtZW50ZSB0b3V0ZXMgbGVzIDIwbXNcbiAgfVxufTtcblxuLy8gRm9uY3Rpb24gcG91ciByw6lpbml0aWFsaXNlciBsYSB0YWlsbGVcbmNvbnN0IHJlc2V0U2l6ZSA9ICgpID0+IHtcbiAgZ3Jvd2luZyA9IGZhbHNlO1xuICBjbGVhckludGVydmFsKGludGVydmFsKTsgLy8gU3RvcHBlIGwnYXVnbWVudGF0aW9uXG4gIHNjYWxlRmFjdG9yID0gMTsgLy8gUsOpaW5pdGlhbGlzZXIgbGEgdGFpbGxlIGRlIGTDqXBhcnQgZHUgZ3Jvd2luZ1xuICBnc2FwLnRvKHN2Z0VsZW1lbnQsIHtcbiAgICBzY2FsZTogMSwgLy8gUmV0b3VyIMOgIGxhIHRhaWxsZSBub3JtYWxlXG4gICAgZHVyYXRpb246IDEuNSxcbiAgICBlYXNlOiBcInBvd2VyMS5vdXRcIlxuICB9KTtcbn07XG5cblxuc3ZnRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gIHN0YXJ0R3Jvd2luZygpO1xufSk7XG5cbnN2Z0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICByZXNldFNpemUoKTtcbn0pO1xuXG5cblxuLy8gQW5pbWF0aW9uIGF1IHNjcm9sbFxuY29uc3QgdGwyID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcImJvZHlcIixcbiAgICBzdGFydDogXCJ0b3AgLTIwJVwiLFxuICAgIGVuZDogXCJib3R0b20gYm90dG9tXCIsICAgICAgIFxuICAgIHNjcnViOiAyLFxuICAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiXG4gIH1cbn0pO1xuXG50bDIudG8oXCIjYW5pbTAyXCIsIHtcbiAgc2NhbGU6IDQsXG4gIHg6IDMwMCxcbiAgeTogNTAsXG4gIGR1cmF0aW9uOiAyLFxuICBlYXNlOiBcInBvd2VyMS5pbk91dFwiXG59KTtcblxudGwyLnRvKFwiI2FuaW0wMlwiLCB7XG4gIHNjYWxlOiAxLCBcbiAgeDogLTIwMCwgIFxuICB5OiAxMDAsXG4gIGR1cmF0aW9uOiAzLFxuICBlYXNlOiBcInBvd2VyMS5pbk91dFwiXG59LCBcIj5cIik7XG5cbmdzYXAudG8oXCIjYW5pbTAyXCIsIHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLnNlY3Rpb24wM1wiLFxuICAgIHN0YXJ0OiBcImJvdHRvbSB0b3BcIiwgICBcbiAgICBlbmQ6IFwiYm90dG9tIHRvcFwiLCBcbiAgICBzY3J1YjogMC4xLCBcbiAgfSxcbiAgb3BhY2l0eTogMCxcbn0pO1xuXG4iLCJsZXQgbGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGlnaHQuY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO1xuZG9jdW1lbnQuYm9keS5wcmVwZW5kKGxpZ2h0KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICBnc2FwLnRvKGxpZ2h0LCB7XG4gICAgeDogZS5jbGllbnRYIC0gbGlnaHQub2Zmc2V0V2lkdGggLyAyLFxuICAgIHk6IGUuY2xpZW50WSAtIGxpZ2h0Lm9mZnNldEhlaWdodCAvIDIsXG4gICAgZHVyYXRpb246IDAuMSxcbiAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICB9KTtcbn0pOyIsImNvbnN0IGJ0blBvcnRmb2xpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXBvcnRmb2xpb1wiKTtcbmNvbnN0IGJ0bkV0c3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1ldHN5XCIpO1xuY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbnRhY3RcIilcbmxldCBncm93aW5nID0gZmFsc2U7XG5sZXQgc2NhbGVGYWN0b3IgPSAxLjAzO1xuXG4vLyBBdWdtZW50ZXIgbGEgdGFpbGxlIHByb2dyZXNzaXZlbWVudFxuY29uc3Qgc3RhcnRHcm93aW5nMiA9IChlbGVtZW50KSA9PiB7XG4gIGlmICghZ3Jvd2luZykge1xuICAgIGdyb3dpbmcgPSB0cnVlO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2NhbGVGYWN0b3IgKz0gMC4wMTtcbiAgICAgIGdzYXAudG8oZWxlbWVudCwge1xuICAgICAgICBzY2FsZTogc2NhbGVGYWN0b3IsXG4gICAgICAgIGR1cmF0aW9uOiAwLjEsXG4gICAgICAgIGVhc2U6IFwibGluZWFyXCJcbiAgICAgIH0pO1xuICAgIH0sIDIwKTsgLy8gQXVnbWVudGUgdG91dGVzIGxlcyAyMG1zXG4gIH1cbn07XG5cbi8vIFLDqWluaXRpYWxpc2VyIGxhIHRhaWxsZVxuY29uc3QgcmVzZXRTaXplMiA9IChlbGVtZW50KSA9PiB7XG4gIGdyb3dpbmcgPSBmYWxzZTtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIHNjYWxlRmFjdG9yID0gMTtcbiAgZ3NhcC50byhlbGVtZW50LCB7XG4gICAgc2NhbGU6IDEsXG4gICAgZHVyYXRpb246IDEsXG4gICAgZWFzZTogXCJwb3dlcjMub3V0XCJcbiAgfSk7XG59O1xuXG5cbltidG5Qb3J0Zm9saW8sIGJ0bkV0c3ksIGJ0bkNvbnRhY3RdLmZvckVhY2goKGJ0bikgPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gc3RhcnRHcm93aW5nMihidG4pKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHJlc2V0U2l6ZTIoYnRuKSk7XG59KTsiLCJnc2FwLnJlZ2lzdGVyUGx1Z2luKCk7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5jb25zdCB0bDMgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5zZWN0aW9uMDJcIixcbiAgICAgIHN0YXJ0OiBcInRvcCAxMCVcIixcbiAgICAgIGVuZDogXCJ0b3AgMzAlXCIsICAgICAgIFxuICAgICAgc2NydWI6IDIsXG4gICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIlxuICAgIH1cbiAgfSk7XG4gIFxuICB0bDMudG8oXCJoZWFkZXJcIiwge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgZHVyYXRpb246IDIsXG4gICAgZWFzZTogXCJwb3dlcjEub3V0XCJcbiAgfSk7IiwiZ3NhcC5yZWdpc3RlclBsdWdpbigpO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuY29uc3Qgc2Nyb2xsU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2Nyb2xsLXNlY3Rpb25cIik7XG5cbnNjcm9sbFNlY3Rpb24uZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gIGNvbnN0IGl0ZW1zID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIilcblxuXG5sZXQgZGlyZWN0aW9uID0gbnVsbDtcblxuICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1zZWN0aW9uXCIpKXtcbiAgICBkaXJlY3Rpb24gPSBcInZlcnRpY2FsXCI7XG4gIH0gZWxzZSBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJob3Jpem9udGFsLXNlY3Rpb25cIikpe1xuICAgIGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICB9XG5cbiAgaW5pdFNjcm9sbChzZWN0aW9uLCBpdGVtcywgZGlyZWN0aW9uKTtcblxufSk7XG5cbmZ1bmN0aW9uIGluaXRTY3JvbGwoc2VjdGlvbiwgaXRlbXMsIGRpcmVjdGlvbikge1xuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiXG4gICAgICA/IGdzYXAuc2V0KGl0ZW0sIHsgeFBlcmNlbnQ6IDEwMCB9KVxuICAgICAgOiBnc2FwLnNldChpdGVtLCB7IHlQZXJjZW50OiAxMDB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogc2VjdGlvbixcbiAgICAgIHBpbjogdHJ1ZSxcbiAgICAgIHN0YXJ0OiBcInRvcCB0b3BcIixcbiAgICAgIGVuZDogKCkgPT4gYCs9JHtpdGVtcy5sZW5ndGggKiAxMDB9JWAsXG4gICAgICBzY3J1YjogMSxcbiAgICAgIGludmFsaWRhdGVPblJlZnJlc2g6IHRydWUsXG4gICAgfSxcbiAgICBkZWZhdWx0czogeyBlYXNlOiBcIm5vbmVcIn0sXG4gIH0pO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIHRsLnRvKGl0ZW0sIHtcbiAgICAgIHNjYWxlOiAwLjk1LFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICB9KTtcblxuICAgIGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgID8gdGwudG8oXG4gICAgICAgIGl0ZW1zW2luZGV4ICsgMV0sXG4gICAgICAgIHtcbiAgICAgICAgICB4UGVyY2VudDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgXCI8XCJcbiAgICAgIClcbiAgICAgIDogdGwudG8oXG4gICAgICAgIGl0ZW1zW2luZGV4ICsgMV0sXG4gICAgICAgIHtcbiAgICAgICAgICB5UGVyY2VudDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgXCI8XCJcbiAgICAgICk7XG4gIH0pO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsInJvdGF0aW9uQXJjMSIsInRvIiwicm90YXRpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkdXJhdGlvbiIsInJlcGVhdCIsImVhc2UiLCJyb3RhdGlvbkFyYzIiLCJyb3RhdGlvbkFyYzMiLCJ0bCIsInRpbWVsaW5lIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsImVuZCIsInNjcnViIiwidG9nZ2xlQWN0aW9ucyIsInNjYWxlIiwieCIsImNyZWF0ZSIsIm9uRW50ZXIiLCJwYXVzZSIsIm9uTGVhdmVCYWNrIiwicGxheSIsIm9wYWNpdHkiLCJzdmdFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2NhbGVGYWN0b3IiLCJncm93aW5nIiwiaW50ZXJ2YWwiLCJzdGFydEdyb3dpbmciLCJzZXRJbnRlcnZhbCIsInJlc2V0U2l6ZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwidGwyIiwieSIsImxpZ2h0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJwcmVwZW5kIiwiZSIsImNsaWVudFgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFkiLCJvZmZzZXRIZWlnaHQiLCJidG5Qb3J0Zm9saW8iLCJidG5FdHN5IiwiYnRuQ29udGFjdCIsInN0YXJ0R3Jvd2luZzIiLCJlbGVtZW50IiwicmVzZXRTaXplMiIsImZvckVhY2giLCJidG4iLCJ0bDMiLCJzY3JvbGxTZWN0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsInNlY3Rpb24iLCJ3cmFwcGVyIiwiaXRlbXMiLCJkaXJlY3Rpb24iLCJjb250YWlucyIsImluaXRTY3JvbGwiLCJpdGVtIiwiaW5kZXgiLCJzZXQiLCJ4UGVyY2VudCIsInlQZXJjZW50IiwicGluIiwiY29uY2F0IiwibGVuZ3RoIiwiaW52YWxpZGF0ZU9uUmVmcmVzaCIsImRlZmF1bHRzIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==