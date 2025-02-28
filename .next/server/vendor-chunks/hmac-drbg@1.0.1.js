"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hmac-drbg@1.0.1";
exports.ids = ["vendor-chunks/hmac-drbg@1.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/hmac-drbg@1.0.1/node_modules/hmac-drbg/lib/hmac-drbg.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/hmac-drbg@1.0.1/node_modules/hmac-drbg/lib/hmac-drbg.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar hash = __webpack_require__(/*! hash.js */ \"(ssr)/./node_modules/.pnpm/hash.js@1.1.7/node_modules/hash.js/lib/hash.js\");\nvar utils = __webpack_require__(/*! minimalistic-crypto-utils */ \"(ssr)/./node_modules/.pnpm/minimalistic-crypto-utils@1.0.1/node_modules/minimalistic-crypto-utils/lib/utils.js\");\nvar assert = __webpack_require__(/*! minimalistic-assert */ \"(ssr)/./node_modules/.pnpm/minimalistic-assert@1.0.1/node_modules/minimalistic-assert/index.js\");\n\nfunction HmacDRBG(options) {\n  if (!(this instanceof HmacDRBG))\n    return new HmacDRBG(options);\n  this.hash = options.hash;\n  this.predResist = !!options.predResist;\n\n  this.outLen = this.hash.outSize;\n  this.minEntropy = options.minEntropy || this.hash.hmacStrength;\n\n  this._reseed = null;\n  this.reseedInterval = null;\n  this.K = null;\n  this.V = null;\n\n  var entropy = utils.toArray(options.entropy, options.entropyEnc || 'hex');\n  var nonce = utils.toArray(options.nonce, options.nonceEnc || 'hex');\n  var pers = utils.toArray(options.pers, options.persEnc || 'hex');\n  assert(entropy.length >= (this.minEntropy / 8),\n         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');\n  this._init(entropy, nonce, pers);\n}\nmodule.exports = HmacDRBG;\n\nHmacDRBG.prototype._init = function init(entropy, nonce, pers) {\n  var seed = entropy.concat(nonce).concat(pers);\n\n  this.K = new Array(this.outLen / 8);\n  this.V = new Array(this.outLen / 8);\n  for (var i = 0; i < this.V.length; i++) {\n    this.K[i] = 0x00;\n    this.V[i] = 0x01;\n  }\n\n  this._update(seed);\n  this._reseed = 1;\n  this.reseedInterval = 0x1000000000000;  // 2^48\n};\n\nHmacDRBG.prototype._hmac = function hmac() {\n  return new hash.hmac(this.hash, this.K);\n};\n\nHmacDRBG.prototype._update = function update(seed) {\n  var kmac = this._hmac()\n                 .update(this.V)\n                 .update([ 0x00 ]);\n  if (seed)\n    kmac = kmac.update(seed);\n  this.K = kmac.digest();\n  this.V = this._hmac().update(this.V).digest();\n  if (!seed)\n    return;\n\n  this.K = this._hmac()\n               .update(this.V)\n               .update([ 0x01 ])\n               .update(seed)\n               .digest();\n  this.V = this._hmac().update(this.V).digest();\n};\n\nHmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {\n  // Optional entropy enc\n  if (typeof entropyEnc !== 'string') {\n    addEnc = add;\n    add = entropyEnc;\n    entropyEnc = null;\n  }\n\n  entropy = utils.toArray(entropy, entropyEnc);\n  add = utils.toArray(add, addEnc);\n\n  assert(entropy.length >= (this.minEntropy / 8),\n         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');\n\n  this._update(entropy.concat(add || []));\n  this._reseed = 1;\n};\n\nHmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {\n  if (this._reseed > this.reseedInterval)\n    throw new Error('Reseed is required');\n\n  // Optional encoding\n  if (typeof enc !== 'string') {\n    addEnc = add;\n    add = enc;\n    enc = null;\n  }\n\n  // Optional additional data\n  if (add) {\n    add = utils.toArray(add, addEnc || 'hex');\n    this._update(add);\n  }\n\n  var temp = [];\n  while (temp.length < len) {\n    this.V = this._hmac().update(this.V).digest();\n    temp = temp.concat(this.V);\n  }\n\n  var res = temp.slice(0, len);\n  this._update(add);\n  this._reseed++;\n  return utils.encode(res, enc);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vaG1hYy1kcmJnQDEuMC4xL25vZGVfbW9kdWxlcy9obWFjLWRyYmcvbGliL2htYWMtZHJiZy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixXQUFXLG1CQUFPLENBQUMsMEZBQVM7QUFDNUIsWUFBWSxtQkFBTyxDQUFDLGlKQUEyQjtBQUMvQyxhQUFhLG1CQUFPLENBQUMsMkhBQXFCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9ob21lL2FidWJha3JqaW1vaC9EZXNrdG9wL0NvZGluZyBTdHVmZnMvaGFja2F0aG9uL3NlY3JldC1uZXR3b3JrL21lbWVBaV9jb2luX2NyZWF0b3IvYWktbWVtZS1jb2luLWNyZWF0b3Ivbm9kZV9tb2R1bGVzLy5wbnBtL2htYWMtZHJiZ0AxLjAuMS9ub2RlX21vZHVsZXMvaG1hYy1kcmJnL2xpYi9obWFjLWRyYmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzaCA9IHJlcXVpcmUoJ2hhc2guanMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJ21pbmltYWxpc3RpYy1jcnlwdG8tdXRpbHMnKTtcbnZhciBhc3NlcnQgPSByZXF1aXJlKCdtaW5pbWFsaXN0aWMtYXNzZXJ0Jyk7XG5cbmZ1bmN0aW9uIEhtYWNEUkJHKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEhtYWNEUkJHKSlcbiAgICByZXR1cm4gbmV3IEhtYWNEUkJHKG9wdGlvbnMpO1xuICB0aGlzLmhhc2ggPSBvcHRpb25zLmhhc2g7XG4gIHRoaXMucHJlZFJlc2lzdCA9ICEhb3B0aW9ucy5wcmVkUmVzaXN0O1xuXG4gIHRoaXMub3V0TGVuID0gdGhpcy5oYXNoLm91dFNpemU7XG4gIHRoaXMubWluRW50cm9weSA9IG9wdGlvbnMubWluRW50cm9weSB8fCB0aGlzLmhhc2guaG1hY1N0cmVuZ3RoO1xuXG4gIHRoaXMuX3Jlc2VlZCA9IG51bGw7XG4gIHRoaXMucmVzZWVkSW50ZXJ2YWwgPSBudWxsO1xuICB0aGlzLksgPSBudWxsO1xuICB0aGlzLlYgPSBudWxsO1xuXG4gIHZhciBlbnRyb3B5ID0gdXRpbHMudG9BcnJheShvcHRpb25zLmVudHJvcHksIG9wdGlvbnMuZW50cm9weUVuYyB8fCAnaGV4Jyk7XG4gIHZhciBub25jZSA9IHV0aWxzLnRvQXJyYXkob3B0aW9ucy5ub25jZSwgb3B0aW9ucy5ub25jZUVuYyB8fCAnaGV4Jyk7XG4gIHZhciBwZXJzID0gdXRpbHMudG9BcnJheShvcHRpb25zLnBlcnMsIG9wdGlvbnMucGVyc0VuYyB8fCAnaGV4Jyk7XG4gIGFzc2VydChlbnRyb3B5Lmxlbmd0aCA+PSAodGhpcy5taW5FbnRyb3B5IC8gOCksXG4gICAgICAgICAnTm90IGVub3VnaCBlbnRyb3B5LiBNaW5pbXVtIGlzOiAnICsgdGhpcy5taW5FbnRyb3B5ICsgJyBiaXRzJyk7XG4gIHRoaXMuX2luaXQoZW50cm9weSwgbm9uY2UsIHBlcnMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBIbWFjRFJCRztcblxuSG1hY0RSQkcucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gaW5pdChlbnRyb3B5LCBub25jZSwgcGVycykge1xuICB2YXIgc2VlZCA9IGVudHJvcHkuY29uY2F0KG5vbmNlKS5jb25jYXQocGVycyk7XG5cbiAgdGhpcy5LID0gbmV3IEFycmF5KHRoaXMub3V0TGVuIC8gOCk7XG4gIHRoaXMuViA9IG5ldyBBcnJheSh0aGlzLm91dExlbiAvIDgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuVi5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuS1tpXSA9IDB4MDA7XG4gICAgdGhpcy5WW2ldID0gMHgwMTtcbiAgfVxuXG4gIHRoaXMuX3VwZGF0ZShzZWVkKTtcbiAgdGhpcy5fcmVzZWVkID0gMTtcbiAgdGhpcy5yZXNlZWRJbnRlcnZhbCA9IDB4MTAwMDAwMDAwMDAwMDsgIC8vIDJeNDhcbn07XG5cbkhtYWNEUkJHLnByb3RvdHlwZS5faG1hYyA9IGZ1bmN0aW9uIGhtYWMoKSB7XG4gIHJldHVybiBuZXcgaGFzaC5obWFjKHRoaXMuaGFzaCwgdGhpcy5LKTtcbn07XG5cbkhtYWNEUkJHLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHNlZWQpIHtcbiAgdmFyIGttYWMgPSB0aGlzLl9obWFjKClcbiAgICAgICAgICAgICAgICAgLnVwZGF0ZSh0aGlzLlYpXG4gICAgICAgICAgICAgICAgIC51cGRhdGUoWyAweDAwIF0pO1xuICBpZiAoc2VlZClcbiAgICBrbWFjID0ga21hYy51cGRhdGUoc2VlZCk7XG4gIHRoaXMuSyA9IGttYWMuZGlnZXN0KCk7XG4gIHRoaXMuViA9IHRoaXMuX2htYWMoKS51cGRhdGUodGhpcy5WKS5kaWdlc3QoKTtcbiAgaWYgKCFzZWVkKVxuICAgIHJldHVybjtcblxuICB0aGlzLksgPSB0aGlzLl9obWFjKClcbiAgICAgICAgICAgICAgIC51cGRhdGUodGhpcy5WKVxuICAgICAgICAgICAgICAgLnVwZGF0ZShbIDB4MDEgXSlcbiAgICAgICAgICAgICAgIC51cGRhdGUoc2VlZClcbiAgICAgICAgICAgICAgIC5kaWdlc3QoKTtcbiAgdGhpcy5WID0gdGhpcy5faG1hYygpLnVwZGF0ZSh0aGlzLlYpLmRpZ2VzdCgpO1xufTtcblxuSG1hY0RSQkcucHJvdG90eXBlLnJlc2VlZCA9IGZ1bmN0aW9uIHJlc2VlZChlbnRyb3B5LCBlbnRyb3B5RW5jLCBhZGQsIGFkZEVuYykge1xuICAvLyBPcHRpb25hbCBlbnRyb3B5IGVuY1xuICBpZiAodHlwZW9mIGVudHJvcHlFbmMgIT09ICdzdHJpbmcnKSB7XG4gICAgYWRkRW5jID0gYWRkO1xuICAgIGFkZCA9IGVudHJvcHlFbmM7XG4gICAgZW50cm9weUVuYyA9IG51bGw7XG4gIH1cblxuICBlbnRyb3B5ID0gdXRpbHMudG9BcnJheShlbnRyb3B5LCBlbnRyb3B5RW5jKTtcbiAgYWRkID0gdXRpbHMudG9BcnJheShhZGQsIGFkZEVuYyk7XG5cbiAgYXNzZXJ0KGVudHJvcHkubGVuZ3RoID49ICh0aGlzLm1pbkVudHJvcHkgLyA4KSxcbiAgICAgICAgICdOb3QgZW5vdWdoIGVudHJvcHkuIE1pbmltdW0gaXM6ICcgKyB0aGlzLm1pbkVudHJvcHkgKyAnIGJpdHMnKTtcblxuICB0aGlzLl91cGRhdGUoZW50cm9weS5jb25jYXQoYWRkIHx8IFtdKSk7XG4gIHRoaXMuX3Jlc2VlZCA9IDE7XG59O1xuXG5IbWFjRFJCRy5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbiBnZW5lcmF0ZShsZW4sIGVuYywgYWRkLCBhZGRFbmMpIHtcbiAgaWYgKHRoaXMuX3Jlc2VlZCA+IHRoaXMucmVzZWVkSW50ZXJ2YWwpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZXNlZWQgaXMgcmVxdWlyZWQnKTtcblxuICAvLyBPcHRpb25hbCBlbmNvZGluZ1xuICBpZiAodHlwZW9mIGVuYyAhPT0gJ3N0cmluZycpIHtcbiAgICBhZGRFbmMgPSBhZGQ7XG4gICAgYWRkID0gZW5jO1xuICAgIGVuYyA9IG51bGw7XG4gIH1cblxuICAvLyBPcHRpb25hbCBhZGRpdGlvbmFsIGRhdGFcbiAgaWYgKGFkZCkge1xuICAgIGFkZCA9IHV0aWxzLnRvQXJyYXkoYWRkLCBhZGRFbmMgfHwgJ2hleCcpO1xuICAgIHRoaXMuX3VwZGF0ZShhZGQpO1xuICB9XG5cbiAgdmFyIHRlbXAgPSBbXTtcbiAgd2hpbGUgKHRlbXAubGVuZ3RoIDwgbGVuKSB7XG4gICAgdGhpcy5WID0gdGhpcy5faG1hYygpLnVwZGF0ZSh0aGlzLlYpLmRpZ2VzdCgpO1xuICAgIHRlbXAgPSB0ZW1wLmNvbmNhdCh0aGlzLlYpO1xuICB9XG5cbiAgdmFyIHJlcyA9IHRlbXAuc2xpY2UoMCwgbGVuKTtcbiAgdGhpcy5fdXBkYXRlKGFkZCk7XG4gIHRoaXMuX3Jlc2VlZCsrO1xuICByZXR1cm4gdXRpbHMuZW5jb2RlKHJlcywgZW5jKTtcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/hmac-drbg@1.0.1/node_modules/hmac-drbg/lib/hmac-drbg.js\n");

/***/ })

};
;