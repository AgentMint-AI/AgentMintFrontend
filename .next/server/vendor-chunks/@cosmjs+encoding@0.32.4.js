"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@cosmjs+encoding@0.32.4";
exports.ids = ["vendor-chunks/@cosmjs+encoding@0.32.4"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/ascii.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/ascii.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fromAscii = exports.toAscii = void 0;\nfunction toAscii(input) {\n    const toNums = (str) => str.split(\"\").map((x) => {\n        const charCode = x.charCodeAt(0);\n        // 0x00–0x1F control characters\n        // 0x20–0x7E printable characters\n        // 0x7F delete character\n        // 0x80–0xFF out of 7 bit ascii range\n        if (charCode < 0x20 || charCode > 0x7e) {\n            throw new Error(\"Cannot encode character that is out of printable ASCII range: \" + charCode);\n        }\n        return charCode;\n    });\n    return Uint8Array.from(toNums(input));\n}\nexports.toAscii = toAscii;\nfunction fromAscii(data) {\n    const fromNums = (listOfNumbers) => listOfNumbers.map((x) => {\n        // 0x00–0x1F control characters\n        // 0x20–0x7E printable characters\n        // 0x7F delete character\n        // 0x80–0xFF out of 7 bit ascii range\n        if (x < 0x20 || x > 0x7e) {\n            throw new Error(\"Cannot decode character that is out of printable ASCII range: \" + x);\n        }\n        return String.fromCharCode(x);\n    });\n    return fromNums(Array.from(data)).join(\"\");\n}\nexports.fromAscii = fromAscii;\n//# sourceMappingURL=ascii.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvYXNjaWkuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLEdBQUcsZUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiIsInNvdXJjZXMiOlsiL2hvbWUvYWJ1YmFrcmppbW9oL0Rlc2t0b3AvQ29kaW5nIFN0dWZmcy9oYWNrYXRob24vc2VjcmV0LW5ldHdvcmsvbWVtZUFpX2NvaW5fY3JlYXRvci9haS1tZW1lLWNvaW4tY3JlYXRvci9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvYXNjaWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZyb21Bc2NpaSA9IGV4cG9ydHMudG9Bc2NpaSA9IHZvaWQgMDtcbmZ1bmN0aW9uIHRvQXNjaWkoaW5wdXQpIHtcbiAgICBjb25zdCB0b051bXMgPSAoc3RyKSA9PiBzdHIuc3BsaXQoXCJcIikubWFwKCh4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0geC5jaGFyQ29kZUF0KDApO1xuICAgICAgICAvLyAweDAw4oCTMHgxRiBjb250cm9sIGNoYXJhY3RlcnNcbiAgICAgICAgLy8gMHgyMOKAkzB4N0UgcHJpbnRhYmxlIGNoYXJhY3RlcnNcbiAgICAgICAgLy8gMHg3RiBkZWxldGUgY2hhcmFjdGVyXG4gICAgICAgIC8vIDB4ODDigJMweEZGIG91dCBvZiA3IGJpdCBhc2NpaSByYW5nZVxuICAgICAgICBpZiAoY2hhckNvZGUgPCAweDIwIHx8IGNoYXJDb2RlID4gMHg3ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGVuY29kZSBjaGFyYWN0ZXIgdGhhdCBpcyBvdXQgb2YgcHJpbnRhYmxlIEFTQ0lJIHJhbmdlOiBcIiArIGNoYXJDb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhckNvZGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbSh0b051bXMoaW5wdXQpKTtcbn1cbmV4cG9ydHMudG9Bc2NpaSA9IHRvQXNjaWk7XG5mdW5jdGlvbiBmcm9tQXNjaWkoZGF0YSkge1xuICAgIGNvbnN0IGZyb21OdW1zID0gKGxpc3RPZk51bWJlcnMpID0+IGxpc3RPZk51bWJlcnMubWFwKCh4KSA9PiB7XG4gICAgICAgIC8vIDB4MDDigJMweDFGIGNvbnRyb2wgY2hhcmFjdGVyc1xuICAgICAgICAvLyAweDIw4oCTMHg3RSBwcmludGFibGUgY2hhcmFjdGVyc1xuICAgICAgICAvLyAweDdGIGRlbGV0ZSBjaGFyYWN0ZXJcbiAgICAgICAgLy8gMHg4MOKAkzB4RkYgb3V0IG9mIDcgYml0IGFzY2lpIHJhbmdlXG4gICAgICAgIGlmICh4IDwgMHgyMCB8fCB4ID4gMHg3ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGRlY29kZSBjaGFyYWN0ZXIgdGhhdCBpcyBvdXQgb2YgcHJpbnRhYmxlIEFTQ0lJIHJhbmdlOiBcIiArIHgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHgpO1xuICAgIH0pO1xuICAgIHJldHVybiBmcm9tTnVtcyhBcnJheS5mcm9tKGRhdGEpKS5qb2luKFwiXCIpO1xufVxuZXhwb3J0cy5mcm9tQXNjaWkgPSBmcm9tQXNjaWk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc2NpaS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/ascii.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/base64.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/base64.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fromBase64 = exports.toBase64 = void 0;\nconst base64js = __importStar(__webpack_require__(/*! base64-js */ \"(ssr)/./node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js\"));\nfunction toBase64(data) {\n    return base64js.fromByteArray(data);\n}\nexports.toBase64 = toBase64;\nfunction fromBase64(base64String) {\n    if (!base64String.match(/^[a-zA-Z0-9+/]*={0,2}$/)) {\n        throw new Error(\"Invalid base64 string format\");\n    }\n    return base64js.toByteArray(base64String);\n}\nexports.fromBase64 = fromBase64;\n//# sourceMappingURL=base64.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvYmFzZTY0LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsR0FBRyxnQkFBZ0I7QUFDckMsOEJBQThCLG1CQUFPLENBQUMsNkZBQVc7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsOENBQThDLElBQUk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIiLCJzb3VyY2VzIjpbIi9ob21lL2FidWJha3JqaW1vaC9EZXNrdG9wL0NvZGluZyBTdHVmZnMvaGFja2F0aG9uL3NlY3JldC1uZXR3b3JrL21lbWVBaV9jb2luX2NyZWF0b3IvYWktbWVtZS1jb2luLWNyZWF0b3Ivbm9kZV9tb2R1bGVzLy5wbnBtL0Bjb3NtanMrZW5jb2RpbmdAMC4zMi40L25vZGVfbW9kdWxlcy9AY29zbWpzL2VuY29kaW5nL2J1aWxkL2Jhc2U2NC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcm9tQmFzZTY0ID0gZXhwb3J0cy50b0Jhc2U2NCA9IHZvaWQgMDtcbmNvbnN0IGJhc2U2NGpzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJiYXNlNjQtanNcIikpO1xuZnVuY3Rpb24gdG9CYXNlNjQoZGF0YSkge1xuICAgIHJldHVybiBiYXNlNjRqcy5mcm9tQnl0ZUFycmF5KGRhdGEpO1xufVxuZXhwb3J0cy50b0Jhc2U2NCA9IHRvQmFzZTY0O1xuZnVuY3Rpb24gZnJvbUJhc2U2NChiYXNlNjRTdHJpbmcpIHtcbiAgICBpZiAoIWJhc2U2NFN0cmluZy5tYXRjaCgvXlthLXpBLVowLTkrL10qPXswLDJ9JC8pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IHN0cmluZyBmb3JtYXRcIik7XG4gICAgfVxuICAgIHJldHVybiBiYXNlNjRqcy50b0J5dGVBcnJheShiYXNlNjRTdHJpbmcpO1xufVxuZXhwb3J0cy5mcm9tQmFzZTY0ID0gZnJvbUJhc2U2NDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2U2NC5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/base64.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/bech32.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/bech32.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.normalizeBech32 = exports.fromBech32 = exports.toBech32 = void 0;\nconst bech32 = __importStar(__webpack_require__(/*! bech32 */ \"(ssr)/./node_modules/.pnpm/bech32@1.1.4/node_modules/bech32/index.js\"));\nfunction toBech32(prefix, data, limit) {\n    const address = bech32.encode(prefix, bech32.toWords(data), limit);\n    return address;\n}\nexports.toBech32 = toBech32;\nfunction fromBech32(address, limit = Infinity) {\n    const decodedAddress = bech32.decode(address, limit);\n    return {\n        prefix: decodedAddress.prefix,\n        data: new Uint8Array(bech32.fromWords(decodedAddress.words)),\n    };\n}\nexports.fromBech32 = fromBech32;\n/**\n * Takes a bech32 address and returns a normalized (i.e. lower case) representation of it.\n *\n * The input is validated along the way, which makes this significantly safer than\n * using `address.toLowerCase()`.\n */\nfunction normalizeBech32(address) {\n    const { prefix, data } = fromBech32(address);\n    return toBech32(prefix, data);\n}\nexports.normalizeBech32 = normalizeBech32;\n//# sourceMappingURL=bech32.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvYmVjaDMyLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUIsR0FBRyxrQkFBa0IsR0FBRyxnQkFBZ0I7QUFDL0QsNEJBQTRCLG1CQUFPLENBQUMsb0ZBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QiIsInNvdXJjZXMiOlsiL2hvbWUvYWJ1YmFrcmppbW9oL0Rlc2t0b3AvQ29kaW5nIFN0dWZmcy9oYWNrYXRob24vc2VjcmV0LW5ldHdvcmsvbWVtZUFpX2NvaW5fY3JlYXRvci9haS1tZW1lLWNvaW4tY3JlYXRvci9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvYmVjaDMyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm5vcm1hbGl6ZUJlY2gzMiA9IGV4cG9ydHMuZnJvbUJlY2gzMiA9IGV4cG9ydHMudG9CZWNoMzIgPSB2b2lkIDA7XG5jb25zdCBiZWNoMzIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImJlY2gzMlwiKSk7XG5mdW5jdGlvbiB0b0JlY2gzMihwcmVmaXgsIGRhdGEsIGxpbWl0KSB7XG4gICAgY29uc3QgYWRkcmVzcyA9IGJlY2gzMi5lbmNvZGUocHJlZml4LCBiZWNoMzIudG9Xb3JkcyhkYXRhKSwgbGltaXQpO1xuICAgIHJldHVybiBhZGRyZXNzO1xufVxuZXhwb3J0cy50b0JlY2gzMiA9IHRvQmVjaDMyO1xuZnVuY3Rpb24gZnJvbUJlY2gzMihhZGRyZXNzLCBsaW1pdCA9IEluZmluaXR5KSB7XG4gICAgY29uc3QgZGVjb2RlZEFkZHJlc3MgPSBiZWNoMzIuZGVjb2RlKGFkZHJlc3MsIGxpbWl0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcmVmaXg6IGRlY29kZWRBZGRyZXNzLnByZWZpeCxcbiAgICAgICAgZGF0YTogbmV3IFVpbnQ4QXJyYXkoYmVjaDMyLmZyb21Xb3JkcyhkZWNvZGVkQWRkcmVzcy53b3JkcykpLFxuICAgIH07XG59XG5leHBvcnRzLmZyb21CZWNoMzIgPSBmcm9tQmVjaDMyO1xuLyoqXG4gKiBUYWtlcyBhIGJlY2gzMiBhZGRyZXNzIGFuZCByZXR1cm5zIGEgbm9ybWFsaXplZCAoaS5lLiBsb3dlciBjYXNlKSByZXByZXNlbnRhdGlvbiBvZiBpdC5cbiAqXG4gKiBUaGUgaW5wdXQgaXMgdmFsaWRhdGVkIGFsb25nIHRoZSB3YXksIHdoaWNoIG1ha2VzIHRoaXMgc2lnbmlmaWNhbnRseSBzYWZlciB0aGFuXG4gKiB1c2luZyBgYWRkcmVzcy50b0xvd2VyQ2FzZSgpYC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplQmVjaDMyKGFkZHJlc3MpIHtcbiAgICBjb25zdCB7IHByZWZpeCwgZGF0YSB9ID0gZnJvbUJlY2gzMihhZGRyZXNzKTtcbiAgICByZXR1cm4gdG9CZWNoMzIocHJlZml4LCBkYXRhKTtcbn1cbmV4cG9ydHMubm9ybWFsaXplQmVjaDMyID0gbm9ybWFsaXplQmVjaDMyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmVjaDMyLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/bech32.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/hex.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/hex.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fromHex = exports.toHex = void 0;\nfunction toHex(data) {\n    let out = \"\";\n    for (const byte of data) {\n        out += (\"0\" + byte.toString(16)).slice(-2);\n    }\n    return out;\n}\nexports.toHex = toHex;\nfunction fromHex(hexstring) {\n    if (hexstring.length % 2 !== 0) {\n        throw new Error(\"hex string length must be a multiple of 2\");\n    }\n    const out = new Uint8Array(hexstring.length / 2);\n    for (let i = 0; i < out.length; i++) {\n        const j = 2 * i;\n        const hexByteAsString = hexstring.slice(j, j + 2);\n        if (!hexByteAsString.match(/[0-9a-f]{2}/i)) {\n            throw new Error(\"hex string contains invalid characters\");\n        }\n        out[i] = parseInt(hexByteAsString, 16);\n    }\n    return out;\n}\nexports.fromHex = fromHex;\n//# sourceMappingURL=hex.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvaGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWUsR0FBRyxhQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YiLCJzb3VyY2VzIjpbIi9ob21lL2FidWJha3JqaW1vaC9EZXNrdG9wL0NvZGluZyBTdHVmZnMvaGFja2F0aG9uL3NlY3JldC1uZXR3b3JrL21lbWVBaV9jb2luX2NyZWF0b3IvYWktbWVtZS1jb2luLWNyZWF0b3Ivbm9kZV9tb2R1bGVzLy5wbnBtL0Bjb3NtanMrZW5jb2RpbmdAMC4zMi40L25vZGVfbW9kdWxlcy9AY29zbWpzL2VuY29kaW5nL2J1aWxkL2hleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbUhleCA9IGV4cG9ydHMudG9IZXggPSB2b2lkIDA7XG5mdW5jdGlvbiB0b0hleChkYXRhKSB7XG4gICAgbGV0IG91dCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBieXRlIG9mIGRhdGEpIHtcbiAgICAgICAgb3V0ICs9IChcIjBcIiArIGJ5dGUudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnRzLnRvSGV4ID0gdG9IZXg7XG5mdW5jdGlvbiBmcm9tSGV4KGhleHN0cmluZykge1xuICAgIGlmIChoZXhzdHJpbmcubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJoZXggc3RyaW5nIGxlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMlwiKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoaGV4c3RyaW5nLmxlbmd0aCAvIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGogPSAyICogaTtcbiAgICAgICAgY29uc3QgaGV4Qnl0ZUFzU3RyaW5nID0gaGV4c3RyaW5nLnNsaWNlKGosIGogKyAyKTtcbiAgICAgICAgaWYgKCFoZXhCeXRlQXNTdHJpbmcubWF0Y2goL1swLTlhLWZdezJ9L2kpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJoZXggc3RyaW5nIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRbaV0gPSBwYXJzZUludChoZXhCeXRlQXNTdHJpbmcsIDE2KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuZnJvbUhleCA9IGZyb21IZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZXguanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/hex.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.toUtf8 = exports.fromUtf8 = exports.toRfc3339 = exports.fromRfc3339 = exports.toHex = exports.fromHex = exports.toBech32 = exports.normalizeBech32 = exports.fromBech32 = exports.toBase64 = exports.fromBase64 = exports.toAscii = exports.fromAscii = void 0;\nvar ascii_1 = __webpack_require__(/*! ./ascii */ \"(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/ascii.js\");\nObject.defineProperty(exports, \"fromAscii\", ({ enumerable: true, get: function () { return ascii_1.fromAscii; } }));\nObject.defineProperty(exports, \"toAscii\", ({ enumerable: true, get: function () { return ascii_1.toAscii; } }));\nvar base64_1 = __webpack_require__(/*! ./base64 */ \"(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/base64.js\");\nObject.defineProperty(exports, \"fromBase64\", ({ enumerable: true, get: function () { return base64_1.fromBase64; } }));\nObject.defineProperty(exports, \"toBase64\", ({ enumerable: true, get: function () { return base64_1.toBase64; } }));\nvar bech32_1 = __webpack_require__(/*! ./bech32 */ \"(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/bech32.js\");\nObject.defineProperty(exports, \"fromBech32\", ({ enumerable: true, get: function () { return bech32_1.fromBech32; } }));\nObject.defineProperty(exports, \"normalizeBech32\", ({ enumerable: true, get: function () { return bech32_1.normalizeBech32; } }));\nObject.defineProperty(exports, \"toBech32\", ({ enumerable: true, get: function () { return bech32_1.toBech32; } }));\nvar hex_1 = __webpack_require__(/*! ./hex */ \"(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/hex.js\");\nObject.defineProperty(exports, \"fromHex\", ({ enumerable: true, get: function () { return hex_1.fromHex; } }));\nObject.defineProperty(exports, \"toHex\", ({ enumerable: true, get: function () { return hex_1.toHex; } }));\nvar rfc3339_1 = __webpack_require__(/*! ./rfc3339 */ \"(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/rfc3339.js\");\nObject.defineProperty(exports, \"fromRfc3339\", ({ enumerable: true, get: function () { return rfc3339_1.fromRfc3339; } }));\nObject.defineProperty(exports, \"toRfc3339\", ({ enumerable: true, get: function () { return rfc3339_1.toRfc3339; } }));\nvar utf8_1 = __webpack_require__(/*! ./utf8 */ \"(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/utf8.js\");\nObject.defineProperty(exports, \"fromUtf8\", ({ enumerable: true, get: function () { return utf8_1.fromUtf8; } }));\nObject.defineProperty(exports, \"toUtf8\", ({ enumerable: true, get: function () { return utf8_1.toUtf8; } }));\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYyxHQUFHLGdCQUFnQixHQUFHLGlCQUFpQixHQUFHLG1CQUFtQixHQUFHLGFBQWEsR0FBRyxlQUFlLEdBQUcsZ0JBQWdCLEdBQUcsdUJBQXVCLEdBQUcsa0JBQWtCLEdBQUcsZ0JBQWdCLEdBQUcsa0JBQWtCLEdBQUcsZUFBZSxHQUFHLGlCQUFpQjtBQUM3UCxjQUFjLG1CQUFPLENBQUMsZ0hBQVM7QUFDL0IsNkNBQTRDLEVBQUUscUNBQXFDLDZCQUE2QixFQUFDO0FBQ2pILDJDQUEwQyxFQUFFLHFDQUFxQywyQkFBMkIsRUFBQztBQUM3RyxlQUFlLG1CQUFPLENBQUMsa0hBQVU7QUFDakMsOENBQTZDLEVBQUUscUNBQXFDLCtCQUErQixFQUFDO0FBQ3BILDRDQUEyQyxFQUFFLHFDQUFxQyw2QkFBNkIsRUFBQztBQUNoSCxlQUFlLG1CQUFPLENBQUMsa0hBQVU7QUFDakMsOENBQTZDLEVBQUUscUNBQXFDLCtCQUErQixFQUFDO0FBQ3BILG1EQUFrRCxFQUFFLHFDQUFxQyxvQ0FBb0MsRUFBQztBQUM5SCw0Q0FBMkMsRUFBRSxxQ0FBcUMsNkJBQTZCLEVBQUM7QUFDaEgsWUFBWSxtQkFBTyxDQUFDLDRHQUFPO0FBQzNCLDJDQUEwQyxFQUFFLHFDQUFxQyx5QkFBeUIsRUFBQztBQUMzRyx5Q0FBd0MsRUFBRSxxQ0FBcUMsdUJBQXVCLEVBQUM7QUFDdkcsZ0JBQWdCLG1CQUFPLENBQUMsb0hBQVc7QUFDbkMsK0NBQThDLEVBQUUscUNBQXFDLGlDQUFpQyxFQUFDO0FBQ3ZILDZDQUE0QyxFQUFFLHFDQUFxQywrQkFBK0IsRUFBQztBQUNuSCxhQUFhLG1CQUFPLENBQUMsOEdBQVE7QUFDN0IsNENBQTJDLEVBQUUscUNBQXFDLDJCQUEyQixFQUFDO0FBQzlHLDBDQUF5QyxFQUFFLHFDQUFxQyx5QkFBeUIsRUFBQztBQUMxRyIsInNvdXJjZXMiOlsiL2hvbWUvYWJ1YmFrcmppbW9oL0Rlc2t0b3AvQ29kaW5nIFN0dWZmcy9oYWNrYXRob24vc2VjcmV0LW5ldHdvcmsvbWVtZUFpX2NvaW5fY3JlYXRvci9haS1tZW1lLWNvaW4tY3JlYXRvci9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvVXRmOCA9IGV4cG9ydHMuZnJvbVV0ZjggPSBleHBvcnRzLnRvUmZjMzMzOSA9IGV4cG9ydHMuZnJvbVJmYzMzMzkgPSBleHBvcnRzLnRvSGV4ID0gZXhwb3J0cy5mcm9tSGV4ID0gZXhwb3J0cy50b0JlY2gzMiA9IGV4cG9ydHMubm9ybWFsaXplQmVjaDMyID0gZXhwb3J0cy5mcm9tQmVjaDMyID0gZXhwb3J0cy50b0Jhc2U2NCA9IGV4cG9ydHMuZnJvbUJhc2U2NCA9IGV4cG9ydHMudG9Bc2NpaSA9IGV4cG9ydHMuZnJvbUFzY2lpID0gdm9pZCAwO1xudmFyIGFzY2lpXzEgPSByZXF1aXJlKFwiLi9hc2NpaVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZyb21Bc2NpaVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYXNjaWlfMS5mcm9tQXNjaWk7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ0b0FzY2lpXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhc2NpaV8xLnRvQXNjaWk7IH0gfSk7XG52YXIgYmFzZTY0XzEgPSByZXF1aXJlKFwiLi9iYXNlNjRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmcm9tQmFzZTY0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBiYXNlNjRfMS5mcm9tQmFzZTY0OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidG9CYXNlNjRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJhc2U2NF8xLnRvQmFzZTY0OyB9IH0pO1xudmFyIGJlY2gzMl8xID0gcmVxdWlyZShcIi4vYmVjaDMyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZnJvbUJlY2gzMlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYmVjaDMyXzEuZnJvbUJlY2gzMjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm5vcm1hbGl6ZUJlY2gzMlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYmVjaDMyXzEubm9ybWFsaXplQmVjaDMyOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidG9CZWNoMzJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJlY2gzMl8xLnRvQmVjaDMyOyB9IH0pO1xudmFyIGhleF8xID0gcmVxdWlyZShcIi4vaGV4XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZnJvbUhleFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGV4XzEuZnJvbUhleDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInRvSGV4XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBoZXhfMS50b0hleDsgfSB9KTtcbnZhciByZmMzMzM5XzEgPSByZXF1aXJlKFwiLi9yZmMzMzM5XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZnJvbVJmYzMzMzlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJmYzMzMzlfMS5mcm9tUmZjMzMzOTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInRvUmZjMzMzOVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmZjMzMzOV8xLnRvUmZjMzMzOTsgfSB9KTtcbnZhciB1dGY4XzEgPSByZXF1aXJlKFwiLi91dGY4XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZnJvbVV0ZjhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0ZjhfMS5mcm9tVXRmODsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInRvVXRmOFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRmOF8xLnRvVXRmODsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/rfc3339.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/rfc3339.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.toRfc3339 = exports.fromRfc3339 = void 0;\nconst rfc3339Matcher = /^(\\d{4})-(\\d{2})-(\\d{2})[T ](\\d{2}):(\\d{2}):(\\d{2})(\\.\\d{1,9})?((?:[+-]\\d{2}:\\d{2})|Z)$/;\nfunction padded(integer, length = 2) {\n    return integer.toString().padStart(length, \"0\");\n}\nfunction fromRfc3339(str) {\n    const matches = rfc3339Matcher.exec(str);\n    if (!matches) {\n        throw new Error(\"Date string is not in RFC3339 format\");\n    }\n    const year = +matches[1];\n    const month = +matches[2];\n    const day = +matches[3];\n    const hour = +matches[4];\n    const minute = +matches[5];\n    const second = +matches[6];\n    // fractional seconds match either undefined or a string like \".1\", \".123456789\"\n    const milliSeconds = matches[7] ? Math.floor(+matches[7] * 1000) : 0;\n    let tzOffsetSign;\n    let tzOffsetHours;\n    let tzOffsetMinutes;\n    // if timezone is undefined, it must be Z or nothing (otherwise the group would have captured).\n    if (matches[8] === \"Z\") {\n        tzOffsetSign = 1;\n        tzOffsetHours = 0;\n        tzOffsetMinutes = 0;\n    }\n    else {\n        tzOffsetSign = matches[8].substring(0, 1) === \"-\" ? -1 : 1;\n        tzOffsetHours = +matches[8].substring(1, 3);\n        tzOffsetMinutes = +matches[8].substring(4, 6);\n    }\n    const tzOffset = tzOffsetSign * (tzOffsetHours * 60 + tzOffsetMinutes) * 60; // seconds\n    const date = new Date();\n    date.setUTCFullYear(year, month - 1, day);\n    date.setUTCHours(hour, minute, second, milliSeconds);\n    return new Date(date.getTime() - tzOffset * 1000);\n}\nexports.fromRfc3339 = fromRfc3339;\nfunction toRfc3339(date) {\n    const year = date.getUTCFullYear();\n    const month = padded(date.getUTCMonth() + 1);\n    const day = padded(date.getUTCDate());\n    const hour = padded(date.getUTCHours());\n    const minute = padded(date.getUTCMinutes());\n    const second = padded(date.getUTCSeconds());\n    const ms = padded(date.getUTCMilliseconds(), 3);\n    return `${year}-${month}-${day}T${hour}:${minute}:${second}.${ms}Z`;\n}\nexports.toRfc3339 = toRfc3339;\n//# sourceMappingURL=rfc3339.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvcmZjMzMzOS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUIsR0FBRyxtQkFBbUI7QUFDdkMsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLElBQUksYUFBYSxFQUFFLElBQUksRUFBRTtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHO0FBQ3JFO0FBQ0EsaUJBQWlCO0FBQ2pCIiwic291cmNlcyI6WyIvaG9tZS9hYnViYWtyamltb2gvRGVza3RvcC9Db2RpbmcgU3R1ZmZzL2hhY2thdGhvbi9zZWNyZXQtbmV0d29yay9tZW1lQWlfY29pbl9jcmVhdG9yL2FpLW1lbWUtY29pbi1jcmVhdG9yL25vZGVfbW9kdWxlcy8ucG5wbS9AY29zbWpzK2VuY29kaW5nQDAuMzIuNC9ub2RlX21vZHVsZXMvQGNvc21qcy9lbmNvZGluZy9idWlsZC9yZmMzMzM5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50b1JmYzMzMzkgPSBleHBvcnRzLmZyb21SZmMzMzM5ID0gdm9pZCAwO1xuY29uc3QgcmZjMzMzOU1hdGNoZXIgPSAvXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pW1QgXShcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0pKFxcLlxcZHsxLDl9KT8oKD86WystXVxcZHsyfTpcXGR7Mn0pfFopJC87XG5mdW5jdGlvbiBwYWRkZWQoaW50ZWdlciwgbGVuZ3RoID0gMikge1xuICAgIHJldHVybiBpbnRlZ2VyLnRvU3RyaW5nKCkucGFkU3RhcnQobGVuZ3RoLCBcIjBcIik7XG59XG5mdW5jdGlvbiBmcm9tUmZjMzMzOShzdHIpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gcmZjMzMzOU1hdGNoZXIuZXhlYyhzdHIpO1xuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEYXRlIHN0cmluZyBpcyBub3QgaW4gUkZDMzMzOSBmb3JtYXRcIik7XG4gICAgfVxuICAgIGNvbnN0IHllYXIgPSArbWF0Y2hlc1sxXTtcbiAgICBjb25zdCBtb250aCA9ICttYXRjaGVzWzJdO1xuICAgIGNvbnN0IGRheSA9ICttYXRjaGVzWzNdO1xuICAgIGNvbnN0IGhvdXIgPSArbWF0Y2hlc1s0XTtcbiAgICBjb25zdCBtaW51dGUgPSArbWF0Y2hlc1s1XTtcbiAgICBjb25zdCBzZWNvbmQgPSArbWF0Y2hlc1s2XTtcbiAgICAvLyBmcmFjdGlvbmFsIHNlY29uZHMgbWF0Y2ggZWl0aGVyIHVuZGVmaW5lZCBvciBhIHN0cmluZyBsaWtlIFwiLjFcIiwgXCIuMTIzNDU2Nzg5XCJcbiAgICBjb25zdCBtaWxsaVNlY29uZHMgPSBtYXRjaGVzWzddID8gTWF0aC5mbG9vcigrbWF0Y2hlc1s3XSAqIDEwMDApIDogMDtcbiAgICBsZXQgdHpPZmZzZXRTaWduO1xuICAgIGxldCB0ek9mZnNldEhvdXJzO1xuICAgIGxldCB0ek9mZnNldE1pbnV0ZXM7XG4gICAgLy8gaWYgdGltZXpvbmUgaXMgdW5kZWZpbmVkLCBpdCBtdXN0IGJlIFogb3Igbm90aGluZyAob3RoZXJ3aXNlIHRoZSBncm91cCB3b3VsZCBoYXZlIGNhcHR1cmVkKS5cbiAgICBpZiAobWF0Y2hlc1s4XSA9PT0gXCJaXCIpIHtcbiAgICAgICAgdHpPZmZzZXRTaWduID0gMTtcbiAgICAgICAgdHpPZmZzZXRIb3VycyA9IDA7XG4gICAgICAgIHR6T2Zmc2V0TWludXRlcyA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0ek9mZnNldFNpZ24gPSBtYXRjaGVzWzhdLnN1YnN0cmluZygwLCAxKSA9PT0gXCItXCIgPyAtMSA6IDE7XG4gICAgICAgIHR6T2Zmc2V0SG91cnMgPSArbWF0Y2hlc1s4XS5zdWJzdHJpbmcoMSwgMyk7XG4gICAgICAgIHR6T2Zmc2V0TWludXRlcyA9ICttYXRjaGVzWzhdLnN1YnN0cmluZyg0LCA2KTtcbiAgICB9XG4gICAgY29uc3QgdHpPZmZzZXQgPSB0ek9mZnNldFNpZ24gKiAodHpPZmZzZXRIb3VycyAqIDYwICsgdHpPZmZzZXRNaW51dGVzKSAqIDYwOyAvLyBzZWNvbmRzXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgZGF0ZS5zZXRVVENIb3Vycyhob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlTZWNvbmRzKTtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSB0ek9mZnNldCAqIDEwMDApO1xufVxuZXhwb3J0cy5mcm9tUmZjMzMzOSA9IGZyb21SZmMzMzM5O1xuZnVuY3Rpb24gdG9SZmMzMzM5KGRhdGUpIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gcGFkZGVkKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpO1xuICAgIGNvbnN0IGRheSA9IHBhZGRlZChkYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgY29uc3QgaG91ciA9IHBhZGRlZChkYXRlLmdldFVUQ0hvdXJzKCkpO1xuICAgIGNvbnN0IG1pbnV0ZSA9IHBhZGRlZChkYXRlLmdldFVUQ01pbnV0ZXMoKSk7XG4gICAgY29uc3Qgc2Vjb25kID0gcGFkZGVkKGRhdGUuZ2V0VVRDU2Vjb25kcygpKTtcbiAgICBjb25zdCBtcyA9IHBhZGRlZChkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpLCAzKTtcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9VCR7aG91cn06JHttaW51dGV9OiR7c2Vjb25kfS4ke21zfVpgO1xufVxuZXhwb3J0cy50b1JmYzMzMzkgPSB0b1JmYzMzMzk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZmMzMzM5LmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/rfc3339.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/utf8.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/utf8.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fromUtf8 = exports.toUtf8 = void 0;\nfunction toUtf8(str) {\n    return new TextEncoder().encode(str);\n}\nexports.toUtf8 = toUtf8;\n/**\n * Takes UTF-8 data and decodes it to a string.\n *\n * In lossy mode, the [REPLACEMENT CHARACTER](https://en.wikipedia.org/wiki/Specials_(Unicode_block))\n * is used to substitude invalid encodings.\n * By default lossy mode is off and invalid data will lead to exceptions.\n */\nfunction fromUtf8(data, lossy = false) {\n    const fatal = !lossy;\n    return new TextDecoder(\"utf-8\", { fatal }).decode(data);\n}\nexports.fromUtf8 = fromUtf8;\n//# sourceMappingURL=utf8.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvdXRmOC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0IsR0FBRyxjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBLGdCQUFnQjtBQUNoQiIsInNvdXJjZXMiOlsiL2hvbWUvYWJ1YmFrcmppbW9oL0Rlc2t0b3AvQ29kaW5nIFN0dWZmcy9oYWNrYXRob24vc2VjcmV0LW5ldHdvcmsvbWVtZUFpX2NvaW5fY3JlYXRvci9haS1tZW1lLWNvaW4tY3JlYXRvci9ub2RlX21vZHVsZXMvLnBucG0vQGNvc21qcytlbmNvZGluZ0AwLjMyLjQvbm9kZV9tb2R1bGVzL0Bjb3NtanMvZW5jb2RpbmcvYnVpbGQvdXRmOC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbVV0ZjggPSBleHBvcnRzLnRvVXRmOCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHRvVXRmOChzdHIpIHtcbiAgICByZXR1cm4gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHN0cik7XG59XG5leHBvcnRzLnRvVXRmOCA9IHRvVXRmODtcbi8qKlxuICogVGFrZXMgVVRGLTggZGF0YSBhbmQgZGVjb2RlcyBpdCB0byBhIHN0cmluZy5cbiAqXG4gKiBJbiBsb3NzeSBtb2RlLCB0aGUgW1JFUExBQ0VNRU5UIENIQVJBQ1RFUl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbHNfKFVuaWNvZGVfYmxvY2spKVxuICogaXMgdXNlZCB0byBzdWJzdGl0dWRlIGludmFsaWQgZW5jb2RpbmdzLlxuICogQnkgZGVmYXVsdCBsb3NzeSBtb2RlIGlzIG9mZiBhbmQgaW52YWxpZCBkYXRhIHdpbGwgbGVhZCB0byBleGNlcHRpb25zLlxuICovXG5mdW5jdGlvbiBmcm9tVXRmOChkYXRhLCBsb3NzeSA9IGZhbHNlKSB7XG4gICAgY29uc3QgZmF0YWwgPSAhbG9zc3k7XG4gICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIsIHsgZmF0YWwgfSkuZGVjb2RlKGRhdGEpO1xufVxuZXhwb3J0cy5mcm9tVXRmOCA9IGZyb21VdGY4O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRmOC5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@cosmjs+encoding@0.32.4/node_modules/@cosmjs/encoding/build/utf8.js\n");

/***/ })

};
;