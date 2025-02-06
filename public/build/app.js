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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYW5pbTAxLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hbmltMDIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2JvdXRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi9qcy9hbmltMDEnO1xuaW1wb3J0ICcuL2pzL2FuaW0wMic7XG5pbXBvcnQgJy4vanMvYm9keSc7XG5pbXBvcnQgJy4vanMvYm91dG9ucyc7XG5pbXBvcnQgJy4vanMvaGVhZGVyJztcbmltcG9ydCAnLi9qcy9zZXJ2aWNlcyc7XG5cbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XG4iLCJnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FyYzFcIikpO1xuY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcmMyXCIpKTtcbmNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJjM1wiKSk7XG5cbmNvbnN0IHJvdGF0aW9uQXJjMSA9IGdzYXAudG8oXCIjYXJjMVwiLCB7XG4gICAgcm90YXRpb246IDM2MCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFwiY2VudGVyXCIsXG4gICAgZHVyYXRpb246IDMwMCxcbiAgICByZXBlYXQ6IC0xLFxuICAgIGVhc2U6IFwibGluZWFyXCJcbiAgfSk7XG4gIFxuICBjb25zdCByb3RhdGlvbkFyYzIgPSBnc2FwLnRvKFwiI2FyYzJcIiwge1xuICAgIHJvdGF0aW9uOiAtMzYwLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogXCJjZW50ZXJcIixcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIHJlcGVhdDogLTEsXG4gICAgZWFzZTogXCJsaW5lYXJcIlxuICB9KTtcbiAgXG4gIGNvbnN0IHJvdGF0aW9uQXJjMyA9IGdzYXAudG8oXCIjYXJjM1wiLCB7XG4gICAgcm90YXRpb246IC0zNjAsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlclwiLFxuICAgIGR1cmF0aW9uOiAyNTAsXG4gICAgcmVwZWF0OiAtMSxcbiAgICBlYXNlOiBcImxpbmVhclwiXG4gIH0pO1xuICBcbiAgLy8gQW5pbWF0aW9uIGF1IHNjcm9sbFxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLnNlY3Rpb24wMlwiLFxuICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxuICAgICAgZW5kOiBcInRvcCAyMCVcIiwgICAgICAgXG4gICAgICBzY3J1YjogMS41LFxuICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IG5vbmUgbm9uZSByZXZlcnNlXCJcbiAgICB9XG4gIH0pO1xuICBcbiAgdGwudG8oXCIjYW5pbTAxXCIsIHtcbiAgICByb3RhdGlvbjogLTI1LFxuICAgIHNjYWxlOiAwLjYsXG4gICAgeDogMTAwLFxuICAgIGR1cmF0aW9uOiAyLFxuICAgIGVhc2U6IFwicG93ZXIxLmluT3V0XCJcbiAgfSk7XG4gIFxuICAvLyBQYXVzZS9yZXByaXNlIGRlcyByb3RhdGlvbnNcbiAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgIHRyaWdnZXI6IFwiLnNlY3Rpb24wMlwiLFxuICAgIHN0YXJ0OiBcInRvcCBjZW50ZXJcIixcbiAgICBlbmQ6IFwidG9wIDEwJVwiLFxuICAgIHNjcnViOiAyLFxuICAgIG9uRW50ZXI6ICgpID0+IHtcbiAgICAgIHJvdGF0aW9uQXJjMS5wYXVzZSgpO1xuICAgICAgcm90YXRpb25BcmMyLnBhdXNlKCk7XG4gICAgICByb3RhdGlvbkFyYzMucGF1c2UoKTtcbiAgICB9LFxuICAgIG9uTGVhdmVCYWNrOiAoKSA9PiB7XG4gICAgICByb3RhdGlvbkFyYzEucGxheSgpO1xuICAgICAgcm90YXRpb25BcmMyLnBsYXkoKTtcbiAgICAgIHJvdGF0aW9uQXJjMy5wbGF5KCk7XG4gICAgfVxuICB9KTtcbiAgXG4gIC8vIExlIGZhaXJlIGRpc3BhcmHDrnRyZSBwZW5kYW50IHNlY3Rpb24wMlxuICBnc2FwLnRvKFwiI2FuaW0wMVwiLCB7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIuc2VjdGlvbjAyXCIsXG4gICAgICBzdGFydDogXCJ0b3AgMjAlXCIsICAgXG4gICAgICBlbmQ6IFwiYm90dG9tIGJvdHRvbVwiLCBcbiAgICAgIHNjcnViOiAwLjEsIFxuICAgIH0sXG4gICAgb3BhY2l0eTogMCxcbiAgfSk7Iiwid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FuaW0wMlwiKTtcblxubGV0IHNjYWxlRmFjdG9yID0gMS4wMztcbmxldCBncm93aW5nID0gZmFsc2U7XG5sZXQgaW50ZXJ2YWw7XG5cbi8vIEZvbmN0aW9uIHBvdXIgYXVnbWVudGVyIGxhIHRhaWxsZSBwcm9ncmVzc2l2ZW1lbnRcbmNvbnN0IHN0YXJ0R3Jvd2luZyA9ICgpID0+IHtcbiAgaWYgKCFncm93aW5nKSB7XG4gICAgZ3Jvd2luZyA9IHRydWU7XG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzY2FsZUZhY3RvciArPSAwLjAwNTsgLy8gQXVnbWVudGUgbGEgdGFpbGxlIHByb2dyZXNzaXZlbWVudFxuICAgICAgZ3NhcC50byhzdmdFbGVtZW50LCB7XG4gICAgICAgIHNjYWxlOiBzY2FsZUZhY3RvcixcbiAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgZWFzZTogXCJsaW5lYXJcIlxuICAgICAgfSk7XG4gICAgfSwgMjApOyAvLyBBdWdtZW50ZSB0b3V0ZXMgbGVzIDIwbXNcbiAgfVxufTtcblxuLy8gRm9uY3Rpb24gcG91ciByw6lpbml0aWFsaXNlciBsYSB0YWlsbGVcbmNvbnN0IHJlc2V0U2l6ZSA9ICgpID0+IHtcbiAgZ3Jvd2luZyA9IGZhbHNlO1xuICBjbGVhckludGVydmFsKGludGVydmFsKTsgLy8gU3RvcHBlIGwnYXVnbWVudGF0aW9uXG4gIHNjYWxlRmFjdG9yID0gMTsgLy8gUsOpaW5pdGlhbGlzZXIgbGEgdGFpbGxlIGRlIGTDqXBhcnQgZHUgZ3Jvd2luZ1xuICBnc2FwLnRvKHN2Z0VsZW1lbnQsIHtcbiAgICBzY2FsZTogMSwgLy8gUmV0b3VyIMOgIGxhIHRhaWxsZSBub3JtYWxlXG4gICAgZHVyYXRpb246IDEuNSxcbiAgICBlYXNlOiBcInBvd2VyMS5vdXRcIlxuICB9KTtcbn07XG5cblxuc3ZnRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gIHN0YXJ0R3Jvd2luZygpO1xufSk7XG5cbnN2Z0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICByZXNldFNpemUoKTtcbn0pO1xuXG5cblxuLy8gQW5pbWF0aW9uIGF1IHNjcm9sbFxuY29uc3QgdGwyID0gZ3NhcC50aW1lbGluZSh7XG4gIHNjcm9sbFRyaWdnZXI6IHtcbiAgICB0cmlnZ2VyOiBcImJvZHlcIixcbiAgICBzdGFydDogXCJ0b3AgLTIwJVwiLFxuICAgIGVuZDogXCJib3R0b20gYm90dG9tXCIsICAgICAgIFxuICAgIHNjcnViOiAyLFxuICAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiXG4gIH1cbn0pO1xuXG50bDIudG8oXCIjYW5pbTAyXCIsIHtcbiAgc2NhbGU6IDQsXG4gIHg6IDMwMCxcbiAgeTogNTAsXG4gIGR1cmF0aW9uOiAyLFxuICBlYXNlOiBcInBvd2VyMS5pbk91dFwiXG59KTtcblxudGwyLnRvKFwiI2FuaW0wMlwiLCB7XG4gIHNjYWxlOiAxLCBcbiAgeDogLTIwMCwgIFxuICB5OiAxMDAsXG4gIGR1cmF0aW9uOiAzLFxuICBlYXNlOiBcInBvd2VyMS5pbk91dFwiXG59LCBcIj5cIik7XG5cbmdzYXAudG8oXCIjYW5pbTAyXCIsIHtcbiAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIHRyaWdnZXI6IFwiLnNlY3Rpb24wM1wiLFxuICAgIHN0YXJ0OiBcImJvdHRvbSB0b3BcIiwgICBcbiAgICBlbmQ6IFwiYm90dG9tIHRvcFwiLCBcbiAgICBzY3J1YjogMC4xLCBcbiAgfSxcbiAgb3BhY2l0eTogMCxcbn0pO1xuXG59OyIsImxldCBsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5saWdodC5jbGFzc0xpc3QuYWRkKFwibGlnaHRcIik7XG5kb2N1bWVudC5ib2R5LnByZXBlbmQobGlnaHQpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gIGdzYXAudG8obGlnaHQsIHtcbiAgICB4OiBlLmNsaWVudFggLSBsaWdodC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgeTogZS5jbGllbnRZIC0gbGlnaHQub2Zmc2V0SGVpZ2h0IC8gMixcbiAgICBkdXJhdGlvbjogMC4xLFxuICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gIH0pO1xufSk7IiwiY29uc3QgYnRuUG9ydGZvbGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcG9ydGZvbGlvXCIpO1xuY29uc3QgYnRuRXRzeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWV0c3lcIik7XG5jb25zdCBidG5Db250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY29udGFjdFwiKVxubGV0IGdyb3dpbmcgPSBmYWxzZTtcbmxldCBzY2FsZUZhY3RvciA9IDEuMDM7XG5cbi8vIEF1Z21lbnRlciBsYSB0YWlsbGUgcHJvZ3Jlc3NpdmVtZW50XG5jb25zdCBzdGFydEdyb3dpbmcyID0gKGVsZW1lbnQpID0+IHtcbiAgaWYgKCFncm93aW5nKSB7XG4gICAgZ3Jvd2luZyA9IHRydWU7XG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzY2FsZUZhY3RvciArPSAwLjAxO1xuICAgICAgZ3NhcC50byhlbGVtZW50LCB7XG4gICAgICAgIHNjYWxlOiBzY2FsZUZhY3RvcixcbiAgICAgICAgZHVyYXRpb246IDAuMSxcbiAgICAgICAgZWFzZTogXCJsaW5lYXJcIlxuICAgICAgfSk7XG4gICAgfSwgMjApOyAvLyBBdWdtZW50ZSB0b3V0ZXMgbGVzIDIwbXNcbiAgfVxufTtcblxuLy8gUsOpaW5pdGlhbGlzZXIgbGEgdGFpbGxlXG5jb25zdCByZXNldFNpemUyID0gKGVsZW1lbnQpID0+IHtcbiAgZ3Jvd2luZyA9IGZhbHNlO1xuICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgc2NhbGVGYWN0b3IgPSAxO1xuICBnc2FwLnRvKGVsZW1lbnQsIHtcbiAgICBzY2FsZTogMSxcbiAgICBkdXJhdGlvbjogMSxcbiAgICBlYXNlOiBcInBvd2VyMy5vdXRcIlxuICB9KTtcbn07XG5cblxuW2J0blBvcnRmb2xpbywgYnRuRXRzeSwgYnRuQ29udGFjdF0uZm9yRWFjaCgoYnRuKSA9PiB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiBzdGFydEdyb3dpbmcyKGJ0bikpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gcmVzZXRTaXplMihidG4pKTtcbn0pOyIsImdzYXAucmVnaXN0ZXJQbHVnaW4oKTtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmNvbnN0IHRsMyA9IGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLnNlY3Rpb24wMlwiLFxuICAgICAgc3RhcnQ6IFwidG9wIDEwJVwiLFxuICAgICAgZW5kOiBcInRvcCAzMCVcIiwgICAgICAgXG4gICAgICBzY3J1YjogMixcbiAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiXG4gICAgfVxuICB9KTtcbiAgXG4gIHRsMy50byhcImhlYWRlclwiLCB7XG4gICAgb3BhY2l0eTogMSxcbiAgICBkdXJhdGlvbjogMixcbiAgICBlYXNlOiBcInBvd2VyMS5vdXRcIlxuICB9KTsiLCJnc2FwLnJlZ2lzdGVyUGx1Z2luKCk7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5jb25zdCBzY3JvbGxTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zY3JvbGwtc2VjdGlvblwiKTtcblxuc2Nyb2xsU2VjdGlvbi5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IHdyYXBwZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgY29uc3QgaXRlbXMgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKVxuXG5cbmxldCBkaXJlY3Rpb24gPSBudWxsO1xuXG4gIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsLXNlY3Rpb25cIikpe1xuICAgIGRpcmVjdGlvbiA9IFwidmVydGljYWxcIjtcbiAgfSBlbHNlIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcImhvcml6b250YWwtc2VjdGlvblwiKSl7XG4gICAgZGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gIH1cblxuICBpbml0U2Nyb2xsKHNlY3Rpb24sIGl0ZW1zLCBkaXJlY3Rpb24pO1xuXG59KTtcblxuZnVuY3Rpb24gaW5pdFNjcm9sbChzZWN0aW9uLCBpdGVtcywgZGlyZWN0aW9uKSB7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICBkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCJcbiAgICAgID8gZ3NhcC5zZXQoaXRlbSwgeyB4UGVyY2VudDogMTAwIH0pXG4gICAgICA6IGdzYXAuc2V0KGl0ZW0sIHsgeVBlcmNlbnQ6IDEwMH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBzZWN0aW9uLFxuICAgICAgcGluOiB0cnVlLFxuICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxuICAgICAgZW5kOiAoKSA9PiBgKz0ke2l0ZW1zLmxlbmd0aCAqIDEwMH0lYCxcbiAgICAgIHNjcnViOiAxLFxuICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaDogdHJ1ZSxcbiAgICB9LFxuICAgIGRlZmF1bHRzOiB7IGVhc2U6IFwibm9uZVwifSxcbiAgfSk7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgdGwudG8oaXRlbSwge1xuICAgICAgc2NhbGU6IDAuOTUsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgIH0pO1xuXG4gICAgZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIlxuICAgICAgPyB0bC50byhcbiAgICAgICAgaXRlbXNbaW5kZXggKyAxXSxcbiAgICAgICAge1xuICAgICAgICAgIHhQZXJjZW50OiAwLFxuICAgICAgICB9LFxuICAgICAgICBcIjxcIlxuICAgICAgKVxuICAgICAgOiB0bC50byhcbiAgICAgICAgaXRlbXNbaW5kZXggKyAxXSxcbiAgICAgICAge1xuICAgICAgICAgIHlQZXJjZW50OiAwLFxuICAgICAgICB9LFxuICAgICAgICBcIjxcIlxuICAgICAgKTtcbiAgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm90YXRpb25BcmMxIiwidG8iLCJyb3RhdGlvbiIsInRyYW5zZm9ybU9yaWdpbiIsImR1cmF0aW9uIiwicmVwZWF0IiwiZWFzZSIsInJvdGF0aW9uQXJjMiIsInJvdGF0aW9uQXJjMyIsInRsIiwidGltZWxpbmUiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJ0b2dnbGVBY3Rpb25zIiwic2NhbGUiLCJ4IiwiY3JlYXRlIiwib25FbnRlciIsInBhdXNlIiwib25MZWF2ZUJhY2siLCJwbGF5Iiwib3BhY2l0eSIsIndpbmRvdyIsIm9ubG9hZCIsInN2Z0VsZW1lbnQiLCJzY2FsZUZhY3RvciIsImdyb3dpbmciLCJpbnRlcnZhbCIsInN0YXJ0R3Jvd2luZyIsInNldEludGVydmFsIiwicmVzZXRTaXplIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0bDIiLCJ5IiwibGlnaHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsInByZXBlbmQiLCJlIiwiY2xpZW50WCIsIm9mZnNldFdpZHRoIiwiY2xpZW50WSIsIm9mZnNldEhlaWdodCIsImJ0blBvcnRmb2xpbyIsImJ0bkV0c3kiLCJidG5Db250YWN0Iiwic3RhcnRHcm93aW5nMiIsImVsZW1lbnQiLCJyZXNldFNpemUyIiwiZm9yRWFjaCIsImJ0biIsInRsMyIsInNjcm9sbFNlY3Rpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdGlvbiIsIndyYXBwZXIiLCJpdGVtcyIsImRpcmVjdGlvbiIsImNvbnRhaW5zIiwiaW5pdFNjcm9sbCIsIml0ZW0iLCJpbmRleCIsInNldCIsInhQZXJjZW50IiwieVBlcmNlbnQiLCJwaW4iLCJjb25jYXQiLCJsZW5ndGgiLCJpbnZhbGlkYXRlT25SZWZyZXNoIiwiZGVmYXVsdHMiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9