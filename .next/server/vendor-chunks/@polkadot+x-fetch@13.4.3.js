"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@polkadot+x-fetch@13.4.3";
exports.ids = ["vendor-chunks/@polkadot+x-fetch@13.4.3"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@polkadot+x-fetch@13.4.3/node_modules/@polkadot/x-fetch/node.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/@polkadot+x-fetch@13.4.3/node_modules/@polkadot/x-fetch/node.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetch: () => (/* binding */ fetch),\n/* harmony export */   packageInfo: () => (/* reexport safe */ _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__.packageInfo)\n/* harmony export */ });\n/* harmony import */ var _polkadot_x_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polkadot/x-global */ \"(rsc)/./node_modules/.pnpm/@polkadot+x-global@13.4.3/node_modules/@polkadot/x-global/index.js\");\n/* harmony import */ var _packageInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./packageInfo.js */ \"(rsc)/./node_modules/.pnpm/@polkadot+x-fetch@13.4.3/node_modules/@polkadot/x-fetch/packageInfo.js\");\n\n\nconst importFetch = Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/node-fetch@3.3.2\"), __webpack_require__.e(\"vendor-chunks/fetch-blob@3.2.0\"), __webpack_require__.e(\"vendor-chunks/formdata-polyfill@4.0.10\"), __webpack_require__.e(\"vendor-chunks/data-uri-to-buffer@4.0.1\"), __webpack_require__.e(\"vendor-chunks/web-streams-polyfill@3.3.3\"), __webpack_require__.e(\"vendor-chunks/node-domexception@1.0.0\")]).then(__webpack_require__.bind(__webpack_require__, /*! node-fetch */ \"(rsc)/./node_modules/.pnpm/node-fetch@3.3.2/node_modules/node-fetch/src/index.js\")).catch(() => null);\nlet modFn = null;\nasync function nodeFetch(...args) {\n    if (!modFn) {\n        const mod = await importFetch;\n        if (!mod?.default) {\n            throw new Error('Unable to import node-fetch in this environment');\n        }\n        modFn = mod.default;\n    }\n    return modFn(...args);\n}\nconst fetch = /*#__PURE__*/ (0,_polkadot_x_global__WEBPACK_IMPORTED_MODULE_1__.extractGlobal)('fetch', nodeFetch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHBvbGthZG90K3gtZmV0Y2hAMTMuNC4zL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QveC1mZXRjaC9ub2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDSjtBQUMvQyxvQkFBb0IsNmlCQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sNEJBQTRCLGlFQUFhIiwic291cmNlcyI6WyIvaG9tZS9hYnViYWtyamltb2gvRGVza3RvcC9Db2RpbmcgU3R1ZmZzL2hhY2thdGhvbi9zZWNyZXQtbmV0d29yay9tZW1lQWlfY29pbl9jcmVhdG9yL2FpLW1lbWUtY29pbi1jcmVhdG9yL25vZGVfbW9kdWxlcy8ucG5wbS9AcG9sa2Fkb3QreC1mZXRjaEAxMy40LjMvbm9kZV9tb2R1bGVzL0Bwb2xrYWRvdC94LWZldGNoL25vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0cmFjdEdsb2JhbCB9IGZyb20gJ0Bwb2xrYWRvdC94LWdsb2JhbCc7XG5leHBvcnQgeyBwYWNrYWdlSW5mbyB9IGZyb20gJy4vcGFja2FnZUluZm8uanMnO1xuY29uc3QgaW1wb3J0RmV0Y2ggPSBpbXBvcnQoJ25vZGUtZmV0Y2gnKS5jYXRjaCgoKSA9PiBudWxsKTtcbmxldCBtb2RGbiA9IG51bGw7XG5hc3luYyBmdW5jdGlvbiBub2RlRmV0Y2goLi4uYXJncykge1xuICAgIGlmICghbW9kRm4pIHtcbiAgICAgICAgY29uc3QgbW9kID0gYXdhaXQgaW1wb3J0RmV0Y2g7XG4gICAgICAgIGlmICghbW9kPy5kZWZhdWx0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBpbXBvcnQgbm9kZS1mZXRjaCBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kRm4gPSBtb2QuZGVmYXVsdDtcbiAgICB9XG4gICAgcmV0dXJuIG1vZEZuKC4uLmFyZ3MpO1xufVxuZXhwb3J0IGNvbnN0IGZldGNoID0gLyojX19QVVJFX18qLyBleHRyYWN0R2xvYmFsKCdmZXRjaCcsIG5vZGVGZXRjaCk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@polkadot+x-fetch@13.4.3/node_modules/@polkadot/x-fetch/node.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@polkadot+x-fetch@13.4.3/node_modules/@polkadot/x-fetch/packageInfo.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@polkadot+x-fetch@13.4.3/node_modules/@polkadot/x-fetch/packageInfo.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   packageInfo: () => (/* binding */ packageInfo)\n/* harmony export */ });\nconst packageInfo = { name: '@polkadot/x-fetch', path: ( true) ? new URL(\"file:///home/abubakrjimoh/Desktop/Coding%20Stuffs/hackathon/secret-network/memeAi_coin_creator/ai-meme-coin-creator/node_modules/.pnpm/@polkadot+x-fetch@13.4.3/node_modules/@polkadot/x-fetch/packageInfo.js\").pathname.substring(0, new URL(\"file:///home/abubakrjimoh/Desktop/Coding%20Stuffs/hackathon/secret-network/memeAi_coin_creator/ai-meme-coin-creator/node_modules/.pnpm/@polkadot+x-fetch@13.4.3/node_modules/@polkadot/x-fetch/packageInfo.js\").pathname.lastIndexOf('/') + 1) : 0, type: 'esm', version: '13.4.3' };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHBvbGthZG90K3gtZmV0Y2hAMTMuNC4zL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QveC1mZXRjaC9wYWNrYWdlSW5mby5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sc0JBQXNCLGtDQUFrQyxLQUE4QixZQUFZLCtNQUFlLGdDQUFnQywrTUFBZSxtQ0FBbUMsQ0FBTSIsInNvdXJjZXMiOlsiL2hvbWUvYWJ1YmFrcmppbW9oL0Rlc2t0b3AvQ29kaW5nIFN0dWZmcy9oYWNrYXRob24vc2VjcmV0LW5ldHdvcmsvbWVtZUFpX2NvaW5fY3JlYXRvci9haS1tZW1lLWNvaW4tY3JlYXRvci9ub2RlX21vZHVsZXMvLnBucG0vQHBvbGthZG90K3gtZmV0Y2hAMTMuNC4zL25vZGVfbW9kdWxlcy9AcG9sa2Fkb3QveC1mZXRjaC9wYWNrYWdlSW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGFja2FnZUluZm8gPSB7IG5hbWU6ICdAcG9sa2Fkb3QveC1mZXRjaCcsIHBhdGg6IChpbXBvcnQubWV0YSAmJiBpbXBvcnQubWV0YS51cmwpID8gbmV3IFVSTChpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLnN1YnN0cmluZygwLCBuZXcgVVJMKGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUubGFzdEluZGV4T2YoJy8nKSArIDEpIDogJ2F1dG8nLCB0eXBlOiAnZXNtJywgdmVyc2lvbjogJzEzLjQuMycgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@polkadot+x-fetch@13.4.3/node_modules/@polkadot/x-fetch/packageInfo.js\n");

/***/ })

};
;