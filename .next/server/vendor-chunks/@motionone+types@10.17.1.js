"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@motionone+types@10.17.1";
exports.ids = ["vendor-chunks/@motionone+types@10.17.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@motionone+types@10.17.1/node_modules/@motionone/types/dist/MotionValue.es.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@motionone+types@10.17.1/node_modules/@motionone/types/dist/MotionValue.es.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MotionValue: () => (/* binding */ MotionValue)\n/* harmony export */ });\n/**\n * The MotionValue tracks the state of a single animatable\n * value. Currently, updatedAt and current are unused. The\n * long term idea is to use this to minimise the number\n * of DOM reads, and to abstract the DOM interactions here.\n */\nclass MotionValue {\n    setAnimation(animation) {\n        this.animation = animation;\n        animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => { });\n    }\n    clearAnimation() {\n        this.animation = this.generator = undefined;\n    }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZSt0eXBlc0AxMC4xNy4xL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL3R5cGVzL2Rpc3QvTW90aW9uVmFsdWUuZXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1QiIsInNvdXJjZXMiOlsiL2hvbWUvYWJ1YmFrcmppbW9oL0Rlc2t0b3AvQ29kaW5nIFN0dWZmcy9oYWNrYXRob24vc2VjcmV0LW5ldHdvcmsvbWVtZUFpX2NvaW5fY3JlYXRvci9haS1tZW1lLWNvaW4tY3JlYXRvci9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZSt0eXBlc0AxMC4xNy4xL25vZGVfbW9kdWxlcy9AbW90aW9ub25lL3R5cGVzL2Rpc3QvTW90aW9uVmFsdWUuZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgTW90aW9uVmFsdWUgdHJhY2tzIHRoZSBzdGF0ZSBvZiBhIHNpbmdsZSBhbmltYXRhYmxlXG4gKiB2YWx1ZS4gQ3VycmVudGx5LCB1cGRhdGVkQXQgYW5kIGN1cnJlbnQgYXJlIHVudXNlZC4gVGhlXG4gKiBsb25nIHRlcm0gaWRlYSBpcyB0byB1c2UgdGhpcyB0byBtaW5pbWlzZSB0aGUgbnVtYmVyXG4gKiBvZiBET00gcmVhZHMsIGFuZCB0byBhYnN0cmFjdCB0aGUgRE9NIGludGVyYWN0aW9ucyBoZXJlLlxuICovXG5jbGFzcyBNb3Rpb25WYWx1ZSB7XG4gICAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICAgICAgYW5pbWF0aW9uID09PSBudWxsIHx8IGFuaW1hdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYW5pbWF0aW9uLmZpbmlzaGVkLnRoZW4oKCkgPT4gdGhpcy5jbGVhckFuaW1hdGlvbigpKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH1cbiAgICBjbGVhckFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmdlbmVyYXRvciA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IE1vdGlvblZhbHVlIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@motionone+types@10.17.1/node_modules/@motionone/types/dist/MotionValue.es.js\n");

/***/ })

};
;