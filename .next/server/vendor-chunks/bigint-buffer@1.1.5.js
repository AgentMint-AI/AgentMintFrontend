"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bigint-buffer@1.1.5";
exports.ids = ["vendor-chunks/bigint-buffer@1.1.5"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/bigint-buffer@1.1.5/node_modules/bigint-buffer/dist/node.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/bigint-buffer@1.1.5/node_modules/bigint-buffer/dist/node.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nlet converter;\n{\n    try {\n        converter = __webpack_require__(/*! bindings */ \"(ssr)/./node_modules/.pnpm/bindings@1.5.0/node_modules/bindings/bindings.js\")('bigint_buffer');\n    }\n    catch (e) {\n        console.warn('bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)');\n    }\n}\n/**\n * Convert a little-endian buffer into a BigInt.\n * @param buf The little-endian buffer to convert\n * @returns A BigInt with the little-endian representation of buf.\n */\nfunction toBigIntLE(buf) {\n    if (converter === undefined) {\n        const reversed = Buffer.from(buf);\n        reversed.reverse();\n        const hex = reversed.toString('hex');\n        if (hex.length === 0) {\n            return BigInt(0);\n        }\n        return BigInt(`0x${hex}`);\n    }\n    return converter.toBigInt(buf, false);\n}\nexports.toBigIntLE = toBigIntLE;\n/**\n * Convert a big-endian buffer into a BigInt\n * @param buf The big-endian buffer to convert.\n * @returns A BigInt with the big-endian representation of buf.\n */\nfunction toBigIntBE(buf) {\n    if (converter === undefined) {\n        const hex = buf.toString('hex');\n        if (hex.length === 0) {\n            return BigInt(0);\n        }\n        return BigInt(`0x${hex}`);\n    }\n    return converter.toBigInt(buf, true);\n}\nexports.toBigIntBE = toBigIntBE;\n/**\n * Convert a BigInt to a little-endian buffer.\n * @param num   The BigInt to convert.\n * @param width The number of bytes that the resulting buffer should be.\n * @returns A little-endian buffer representation of num.\n */\nfunction toBufferLE(num, width) {\n    if (converter === undefined) {\n        const hex = num.toString(16);\n        const buffer = Buffer.from(hex.padStart(width * 2, '0').slice(0, width * 2), 'hex');\n        buffer.reverse();\n        return buffer;\n    }\n    // Allocation is done here, since it is slower using napi in C\n    return converter.fromBigInt(num, Buffer.allocUnsafe(width), false);\n}\nexports.toBufferLE = toBufferLE;\n/**\n * Convert a BigInt to a big-endian buffer.\n * @param num   The BigInt to convert.\n * @param width The number of bytes that the resulting buffer should be.\n * @returns A big-endian buffer representation of num.\n */\nfunction toBufferBE(num, width) {\n    if (converter === undefined) {\n        const hex = num.toString(16);\n        return Buffer.from(hex.padStart(width * 2, '0').slice(0, width * 2), 'hex');\n    }\n    return converter.fromBigInt(num, Buffer.allocUnsafe(width), true);\n}\nexports.toBufferBE = toBufferBE;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vYmlnaW50LWJ1ZmZlckAxLjEuNS9ub2RlX21vZHVsZXMvYmlnaW50LWJ1ZmZlci9kaXN0L25vZGUuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZGQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLElBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCIiwic291cmNlcyI6WyIvaG9tZS9hYnViYWtyamltb2gvRGVza3RvcC9Db2RpbmcgU3R1ZmZzL2hhY2thdGhvbi9zZWNyZXQtbmV0d29yay9tZW1lQWlfY29pbl9jcmVhdG9yL2FpLW1lbWUtY29pbi1jcmVhdG9yL25vZGVfbW9kdWxlcy8ucG5wbS9iaWdpbnQtYnVmZmVyQDEuMS41L25vZGVfbW9kdWxlcy9iaWdpbnQtYnVmZmVyL2Rpc3Qvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmxldCBjb252ZXJ0ZXI7XG57XG4gICAgdHJ5IHtcbiAgICAgICAgY29udmVydGVyID0gcmVxdWlyZSgnYmluZGluZ3MnKSgnYmlnaW50X2J1ZmZlcicpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2JpZ2ludDogRmFpbGVkIHRvIGxvYWQgYmluZGluZ3MsIHB1cmUgSlMgd2lsbCBiZSB1c2VkICh0cnkgbnBtIHJ1biByZWJ1aWxkPyknKTtcbiAgICB9XG59XG4vKipcbiAqIENvbnZlcnQgYSBsaXR0bGUtZW5kaWFuIGJ1ZmZlciBpbnRvIGEgQmlnSW50LlxuICogQHBhcmFtIGJ1ZiBUaGUgbGl0dGxlLWVuZGlhbiBidWZmZXIgdG8gY29udmVydFxuICogQHJldHVybnMgQSBCaWdJbnQgd2l0aCB0aGUgbGl0dGxlLWVuZGlhbiByZXByZXNlbnRhdGlvbiBvZiBidWYuXG4gKi9cbmZ1bmN0aW9uIHRvQmlnSW50TEUoYnVmKSB7XG4gICAgaWYgKGNvbnZlcnRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHJldmVyc2VkID0gQnVmZmVyLmZyb20oYnVmKTtcbiAgICAgICAgcmV2ZXJzZWQucmV2ZXJzZSgpO1xuICAgICAgICBjb25zdCBoZXggPSByZXZlcnNlZC50b1N0cmluZygnaGV4Jyk7XG4gICAgICAgIGlmIChoZXgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gQmlnSW50KDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCaWdJbnQoYDB4JHtoZXh9YCk7XG4gICAgfVxuICAgIHJldHVybiBjb252ZXJ0ZXIudG9CaWdJbnQoYnVmLCBmYWxzZSk7XG59XG5leHBvcnRzLnRvQmlnSW50TEUgPSB0b0JpZ0ludExFO1xuLyoqXG4gKiBDb252ZXJ0IGEgYmlnLWVuZGlhbiBidWZmZXIgaW50byBhIEJpZ0ludFxuICogQHBhcmFtIGJ1ZiBUaGUgYmlnLWVuZGlhbiBidWZmZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIEEgQmlnSW50IHdpdGggdGhlIGJpZy1lbmRpYW4gcmVwcmVzZW50YXRpb24gb2YgYnVmLlxuICovXG5mdW5jdGlvbiB0b0JpZ0ludEJFKGJ1Zikge1xuICAgIGlmIChjb252ZXJ0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBoZXggPSBidWYudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIEJpZ0ludCgwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQmlnSW50KGAweCR7aGV4fWApO1xuICAgIH1cbiAgICByZXR1cm4gY29udmVydGVyLnRvQmlnSW50KGJ1ZiwgdHJ1ZSk7XG59XG5leHBvcnRzLnRvQmlnSW50QkUgPSB0b0JpZ0ludEJFO1xuLyoqXG4gKiBDb252ZXJ0IGEgQmlnSW50IHRvIGEgbGl0dGxlLWVuZGlhbiBidWZmZXIuXG4gKiBAcGFyYW0gbnVtICAgVGhlIEJpZ0ludCB0byBjb252ZXJ0LlxuICogQHBhcmFtIHdpZHRoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCB0aGUgcmVzdWx0aW5nIGJ1ZmZlciBzaG91bGQgYmUuXG4gKiBAcmV0dXJucyBBIGxpdHRsZS1lbmRpYW4gYnVmZmVyIHJlcHJlc2VudGF0aW9uIG9mIG51bS5cbiAqL1xuZnVuY3Rpb24gdG9CdWZmZXJMRShudW0sIHdpZHRoKSB7XG4gICAgaWYgKGNvbnZlcnRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGhleCA9IG51bS50b1N0cmluZygxNik7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGhleC5wYWRTdGFydCh3aWR0aCAqIDIsICcwJykuc2xpY2UoMCwgd2lkdGggKiAyKSwgJ2hleCcpO1xuICAgICAgICBidWZmZXIucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cbiAgICAvLyBBbGxvY2F0aW9uIGlzIGRvbmUgaGVyZSwgc2luY2UgaXQgaXMgc2xvd2VyIHVzaW5nIG5hcGkgaW4gQ1xuICAgIHJldHVybiBjb252ZXJ0ZXIuZnJvbUJpZ0ludChudW0sIEJ1ZmZlci5hbGxvY1Vuc2FmZSh3aWR0aCksIGZhbHNlKTtcbn1cbmV4cG9ydHMudG9CdWZmZXJMRSA9IHRvQnVmZmVyTEU7XG4vKipcbiAqIENvbnZlcnQgYSBCaWdJbnQgdG8gYSBiaWctZW5kaWFuIGJ1ZmZlci5cbiAqIEBwYXJhbSBudW0gICBUaGUgQmlnSW50IHRvIGNvbnZlcnQuXG4gKiBAcGFyYW0gd2lkdGggVGhlIG51bWJlciBvZiBieXRlcyB0aGF0IHRoZSByZXN1bHRpbmcgYnVmZmVyIHNob3VsZCBiZS5cbiAqIEByZXR1cm5zIEEgYmlnLWVuZGlhbiBidWZmZXIgcmVwcmVzZW50YXRpb24gb2YgbnVtLlxuICovXG5mdW5jdGlvbiB0b0J1ZmZlckJFKG51bSwgd2lkdGgpIHtcbiAgICBpZiAoY29udmVydGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgaGV4ID0gbnVtLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGhleC5wYWRTdGFydCh3aWR0aCAqIDIsICcwJykuc2xpY2UoMCwgd2lkdGggKiAyKSwgJ2hleCcpO1xuICAgIH1cbiAgICByZXR1cm4gY29udmVydGVyLmZyb21CaWdJbnQobnVtLCBCdWZmZXIuYWxsb2NVbnNhZmUod2lkdGgpLCB0cnVlKTtcbn1cbmV4cG9ydHMudG9CdWZmZXJCRSA9IHRvQnVmZmVyQkU7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/bigint-buffer@1.1.5/node_modules/bigint-buffer/dist/node.js\n");

/***/ })

};
;