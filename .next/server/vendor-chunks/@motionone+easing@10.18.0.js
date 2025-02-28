"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@motionone+easing@10.18.0";
exports.ids = ["vendor-chunks/@motionone+easing@10.18.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@motionone+easing@10.18.0/node_modules/@motionone/easing/dist/cubic-bezier.es.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@motionone+easing@10.18.0/node_modules/@motionone/easing/dist/cubic-bezier.es.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cubicBezier: () => (/* binding */ cubicBezier)\n/* harmony export */ });\n/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ \"(ssr)/./node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/noop.es.js\");\n\n\n/*\n  Bezier function generator\n\n  This has been modified from Gaëtan Renaudeau's BezierEasing\n  https://github.com/gre/bezier-easing/blob/master/src/index.js\n  https://github.com/gre/bezier-easing/blob/master/LICENSE\n  \n  I've removed the newtonRaphsonIterate algo because in benchmarking it\n  wasn't noticiably faster than binarySubdivision, indeed removing it\n  usually improved times, depending on the curve.\n\n  I also removed the lookup table, as for the added bundle size and loop we're\n  only cutting ~4 or so subdivision iterations. I bumped the max iterations up\n  to 12 to compensate and this still tended to be faster for no perceivable\n  loss in accuracy.\n\n  Usage\n    const easeOut = cubicBezier(.17,.67,.83,.67);\n    const x = easeOut(0.5); // returns 0.627...\n*/\n// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.\nconst calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;\nconst subdivisionPrecision = 0.0000001;\nconst subdivisionMaxIterations = 12;\nfunction binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {\n    let currentX;\n    let currentT;\n    let i = 0;\n    do {\n        currentT = lowerBound + (upperBound - lowerBound) / 2.0;\n        currentX = calcBezier(currentT, mX1, mX2) - x;\n        if (currentX > 0.0) {\n            upperBound = currentT;\n        }\n        else {\n            lowerBound = currentT;\n        }\n    } while (Math.abs(currentX) > subdivisionPrecision &&\n        ++i < subdivisionMaxIterations);\n    return currentT;\n}\nfunction cubicBezier(mX1, mY1, mX2, mY2) {\n    // If this is a linear gradient, return linear easing\n    if (mX1 === mY1 && mX2 === mY2)\n        return _motionone_utils__WEBPACK_IMPORTED_MODULE_0__.noopReturn;\n    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);\n    // If animation is at start/end, return t without easing\n    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZStlYXNpbmdAMTAuMTguMC9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9lYXNpbmcvZGlzdC9jdWJpYy1iZXppZXIuZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFdUIiLCJzb3VyY2VzIjpbIi9ob21lL2FidWJha3JqaW1vaC9EZXNrdG9wL0NvZGluZyBTdHVmZnMvaGFja2F0aG9uL3NlY3JldC1uZXR3b3JrL21lbWVBaV9jb2luX2NyZWF0b3IvYWktbWVtZS1jb2luLWNyZWF0b3Ivbm9kZV9tb2R1bGVzLy5wbnBtL0Btb3Rpb25vbmUrZWFzaW5nQDEwLjE4LjAvbm9kZV9tb2R1bGVzL0Btb3Rpb25vbmUvZWFzaW5nL2Rpc3QvY3ViaWMtYmV6aWVyLmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vb3BSZXR1cm4gfSBmcm9tICdAbW90aW9ub25lL3V0aWxzJztcblxuLypcbiAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuXG4gIFRoaXMgaGFzIGJlZW4gbW9kaWZpZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LmpzXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gIFxuICBJJ3ZlIHJlbW92ZWQgdGhlIG5ld3RvblJhcGhzb25JdGVyYXRlIGFsZ28gYmVjYXVzZSBpbiBiZW5jaG1hcmtpbmcgaXRcbiAgd2Fzbid0IG5vdGljaWFibHkgZmFzdGVyIHRoYW4gYmluYXJ5U3ViZGl2aXNpb24sIGluZGVlZCByZW1vdmluZyBpdFxuICB1c3VhbGx5IGltcHJvdmVkIHRpbWVzLCBkZXBlbmRpbmcgb24gdGhlIGN1cnZlLlxuXG4gIEkgYWxzbyByZW1vdmVkIHRoZSBsb29rdXAgdGFibGUsIGFzIGZvciB0aGUgYWRkZWQgYnVuZGxlIHNpemUgYW5kIGxvb3Agd2UncmVcbiAgb25seSBjdXR0aW5nIH40IG9yIHNvIHN1YmRpdmlzaW9uIGl0ZXJhdGlvbnMuIEkgYnVtcGVkIHRoZSBtYXggaXRlcmF0aW9ucyB1cFxuICB0byAxMiB0byBjb21wZW5zYXRlIGFuZCB0aGlzIHN0aWxsIHRlbmRlZCB0byBiZSBmYXN0ZXIgZm9yIG5vIHBlcmNlaXZhYmxlXG4gIGxvc3MgaW4gYWNjdXJhY3kuXG5cbiAgVXNhZ2VcbiAgICBjb25zdCBlYXNlT3V0ID0gY3ViaWNCZXppZXIoLjE3LC42NywuODMsLjY3KTtcbiAgICBjb25zdCB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuLy8gUmV0dXJucyB4KHQpIGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIHkodCkgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmNvbnN0IGNhbGNCZXppZXIgPSAodCwgYTEsIGEyKSA9PiAoKCgxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExKSAqIHQgKyAoMy4wICogYTIgLSA2LjAgKiBhMSkpICogdCArIDMuMCAqIGExKSAqIHQ7XG5jb25zdCBzdWJkaXZpc2lvblByZWNpc2lvbiA9IDAuMDAwMDAwMTtcbmNvbnN0IHN1YmRpdmlzaW9uTWF4SXRlcmF0aW9ucyA9IDEyO1xuZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlKHgsIGxvd2VyQm91bmQsIHVwcGVyQm91bmQsIG1YMSwgbVgyKSB7XG4gICAgbGV0IGN1cnJlbnRYO1xuICAgIGxldCBjdXJyZW50VDtcbiAgICBsZXQgaSA9IDA7XG4gICAgZG8ge1xuICAgICAgICBjdXJyZW50VCA9IGxvd2VyQm91bmQgKyAodXBwZXJCb3VuZCAtIGxvd2VyQm91bmQpIC8gMi4wO1xuICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIHg7XG4gICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgdXBwZXJCb3VuZCA9IGN1cnJlbnRUO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbG93ZXJCb3VuZCA9IGN1cnJlbnRUO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gc3ViZGl2aXNpb25QcmVjaXNpb24gJiZcbiAgICAgICAgKytpIDwgc3ViZGl2aXNpb25NYXhJdGVyYXRpb25zKTtcbiAgICByZXR1cm4gY3VycmVudFQ7XG59XG5mdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICAvLyBJZiB0aGlzIGlzIGEgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gbGluZWFyIGVhc2luZ1xuICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMilcbiAgICAgICAgcmV0dXJuIG5vb3BSZXR1cm47XG4gICAgY29uc3QgZ2V0VEZvclggPSAoYVgpID0+IGJpbmFyeVN1YmRpdmlkZShhWCwgMCwgMSwgbVgxLCBtWDIpO1xuICAgIC8vIElmIGFuaW1hdGlvbiBpcyBhdCBzdGFydC9lbmQsIHJldHVybiB0IHdpdGhvdXQgZWFzaW5nXG4gICAgcmV0dXJuICh0KSA9PiB0ID09PSAwIHx8IHQgPT09IDEgPyB0IDogY2FsY0JlemllcihnZXRURm9yWCh0KSwgbVkxLCBtWTIpO1xufVxuXG5leHBvcnQgeyBjdWJpY0JlemllciB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@motionone+easing@10.18.0/node_modules/@motionone/easing/dist/cubic-bezier.es.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@motionone+easing@10.18.0/node_modules/@motionone/easing/dist/steps.es.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@motionone+easing@10.18.0/node_modules/@motionone/easing/dist/steps.es.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   steps: () => (/* binding */ steps)\n/* harmony export */ });\n/* harmony import */ var _motionone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @motionone/utils */ \"(ssr)/./node_modules/.pnpm/@motionone+utils@10.18.0/node_modules/@motionone/utils/dist/clamp.es.js\");\n\n\nconst steps = (steps, direction = \"end\") => (progress) => {\n    progress =\n        direction === \"end\"\n            ? Math.min(progress, 0.999)\n            : Math.max(progress, 0.001);\n    const expanded = progress * steps;\n    const rounded = direction === \"end\" ? Math.floor(expanded) : Math.ceil(expanded);\n    return (0,_motionone_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, rounded / steps);\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZStlYXNpbmdAMTAuMTguMC9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9lYXNpbmcvZGlzdC9zdGVwcy5lcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVEQUFLO0FBQ2hCOztBQUVpQiIsInNvdXJjZXMiOlsiL2hvbWUvYWJ1YmFrcmppbW9oL0Rlc2t0b3AvQ29kaW5nIFN0dWZmcy9oYWNrYXRob24vc2VjcmV0LW5ldHdvcmsvbWVtZUFpX2NvaW5fY3JlYXRvci9haS1tZW1lLWNvaW4tY3JlYXRvci9ub2RlX21vZHVsZXMvLnBucG0vQG1vdGlvbm9uZStlYXNpbmdAMTAuMTguMC9ub2RlX21vZHVsZXMvQG1vdGlvbm9uZS9lYXNpbmcvZGlzdC9zdGVwcy5lcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGFtcCB9IGZyb20gJ0Btb3Rpb25vbmUvdXRpbHMnO1xuXG5jb25zdCBzdGVwcyA9IChzdGVwcywgZGlyZWN0aW9uID0gXCJlbmRcIikgPT4gKHByb2dyZXNzKSA9PiB7XG4gICAgcHJvZ3Jlc3MgPVxuICAgICAgICBkaXJlY3Rpb24gPT09IFwiZW5kXCJcbiAgICAgICAgICAgID8gTWF0aC5taW4ocHJvZ3Jlc3MsIDAuOTk5KVxuICAgICAgICAgICAgOiBNYXRoLm1heChwcm9ncmVzcywgMC4wMDEpO1xuICAgIGNvbnN0IGV4cGFuZGVkID0gcHJvZ3Jlc3MgKiBzdGVwcztcbiAgICBjb25zdCByb3VuZGVkID0gZGlyZWN0aW9uID09PSBcImVuZFwiID8gTWF0aC5mbG9vcihleHBhbmRlZCkgOiBNYXRoLmNlaWwoZXhwYW5kZWQpO1xuICAgIHJldHVybiBjbGFtcCgwLCAxLCByb3VuZGVkIC8gc3RlcHMpO1xufTtcblxuZXhwb3J0IHsgc3RlcHMgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@motionone+easing@10.18.0/node_modules/@motionone/easing/dist/steps.es.js\n");

/***/ })

};
;