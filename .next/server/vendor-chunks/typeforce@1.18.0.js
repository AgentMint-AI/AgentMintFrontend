/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/typeforce@1.18.0";
exports.ids = ["vendor-chunks/typeforce@1.18.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/errors.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/errors.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var native = __webpack_require__(/*! ./native */ \"(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/native.js\")\n\nfunction getTypeName (fn) {\n  return fn.name || fn.toString().match(/function (.*?)\\s*\\(/)[1]\n}\n\nfunction getValueTypeName (value) {\n  return native.Nil(value) ? '' : getTypeName(value.constructor)\n}\n\nfunction getValue (value) {\n  if (native.Function(value)) return ''\n  if (native.String(value)) return JSON.stringify(value)\n  if (value && native.Object(value)) return ''\n  return value\n}\n\nfunction captureStackTrace (e, t) {\n  if (Error.captureStackTrace) {\n    Error.captureStackTrace(e, t)\n  }\n}\n\nfunction tfJSON (type) {\n  if (native.Function(type)) return type.toJSON ? type.toJSON() : getTypeName(type)\n  if (native.Array(type)) return 'Array'\n  if (type && native.Object(type)) return 'Object'\n\n  return type !== undefined ? type : ''\n}\n\nfunction tfErrorString (type, value, valueTypeName) {\n  var valueJson = getValue(value)\n\n  return 'Expected ' + tfJSON(type) + ', got' +\n    (valueTypeName !== '' ? ' ' + valueTypeName : '') +\n    (valueJson !== '' ? ' ' + valueJson : '')\n}\n\nfunction TfTypeError (type, value, valueTypeName) {\n  valueTypeName = valueTypeName || getValueTypeName(value)\n  this.message = tfErrorString(type, value, valueTypeName)\n\n  captureStackTrace(this, TfTypeError)\n  this.__type = type\n  this.__value = value\n  this.__valueTypeName = valueTypeName\n}\n\nTfTypeError.prototype = Object.create(Error.prototype)\nTfTypeError.prototype.constructor = TfTypeError\n\nfunction tfPropertyErrorString (type, label, name, value, valueTypeName) {\n  var description = '\" of type '\n  if (label === 'key') description = '\" with key type '\n\n  return tfErrorString('property \"' + tfJSON(name) + description + tfJSON(type), value, valueTypeName)\n}\n\nfunction TfPropertyTypeError (type, property, label, value, valueTypeName) {\n  if (type) {\n    valueTypeName = valueTypeName || getValueTypeName(value)\n    this.message = tfPropertyErrorString(type, label, property, value, valueTypeName)\n  } else {\n    this.message = 'Unexpected property \"' + property + '\"'\n  }\n\n  captureStackTrace(this, TfTypeError)\n  this.__label = label\n  this.__property = property\n  this.__type = type\n  this.__value = value\n  this.__valueTypeName = valueTypeName\n}\n\nTfPropertyTypeError.prototype = Object.create(Error.prototype)\nTfPropertyTypeError.prototype.constructor = TfTypeError\n\nfunction tfCustomError (expected, actual) {\n  return new TfTypeError(expected, {}, actual)\n}\n\nfunction tfSubError (e, property, label) {\n  // sub child?\n  if (e instanceof TfPropertyTypeError) {\n    property = property + '.' + e.__property\n\n    e = new TfPropertyTypeError(\n      e.__type, property, e.__label, e.__value, e.__valueTypeName\n    )\n\n  // child?\n  } else if (e instanceof TfTypeError) {\n    e = new TfPropertyTypeError(\n      e.__type, property, label, e.__value, e.__valueTypeName\n    )\n  }\n\n  captureStackTrace(e)\n  return e\n}\n\nmodule.exports = {\n  TfTypeError: TfTypeError,\n  TfPropertyTypeError: TfPropertyTypeError,\n  tfCustomError: tfCustomError,\n  tfSubError: tfSubError,\n  tfJSON: tfJSON,\n  getValueTypeName: getValueTypeName\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdHlwZWZvcmNlQDEuMTguMC9ub2RlX21vZHVsZXMvdHlwZWZvcmNlL2Vycm9ycy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxhQUFhLG1CQUFPLENBQUMsOEZBQVU7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL2hvbWUvYWJ1YmFrcmppbW9oL0Rlc2t0b3AvQ29kaW5nIFN0dWZmcy9oYWNrYXRob24vc2VjcmV0LW5ldHdvcmsvbWVtZUFpX2NvaW5fY3JlYXRvci9haS1tZW1lLWNvaW4tY3JlYXRvci9ub2RlX21vZHVsZXMvLnBucG0vdHlwZWZvcmNlQDEuMTguMC9ub2RlX21vZHVsZXMvdHlwZWZvcmNlL2Vycm9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbmF0aXZlID0gcmVxdWlyZSgnLi9uYXRpdmUnKVxuXG5mdW5jdGlvbiBnZXRUeXBlTmFtZSAoZm4pIHtcbiAgcmV0dXJuIGZuLm5hbWUgfHwgZm4udG9TdHJpbmcoKS5tYXRjaCgvZnVuY3Rpb24gKC4qPylcXHMqXFwoLylbMV1cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVUeXBlTmFtZSAodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZS5OaWwodmFsdWUpID8gJycgOiBnZXRUeXBlTmFtZSh2YWx1ZS5jb25zdHJ1Y3Rvcilcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWUgKHZhbHVlKSB7XG4gIGlmIChuYXRpdmUuRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gJydcbiAgaWYgKG5hdGl2ZS5TdHJpbmcodmFsdWUpKSByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gIGlmICh2YWx1ZSAmJiBuYXRpdmUuT2JqZWN0KHZhbHVlKSkgcmV0dXJuICcnXG4gIHJldHVybiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBjYXB0dXJlU3RhY2tUcmFjZSAoZSwgdCkge1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlLCB0KVxuICB9XG59XG5cbmZ1bmN0aW9uIHRmSlNPTiAodHlwZSkge1xuICBpZiAobmF0aXZlLkZ1bmN0aW9uKHR5cGUpKSByZXR1cm4gdHlwZS50b0pTT04gPyB0eXBlLnRvSlNPTigpIDogZ2V0VHlwZU5hbWUodHlwZSlcbiAgaWYgKG5hdGl2ZS5BcnJheSh0eXBlKSkgcmV0dXJuICdBcnJheSdcbiAgaWYgKHR5cGUgJiYgbmF0aXZlLk9iamVjdCh0eXBlKSkgcmV0dXJuICdPYmplY3QnXG5cbiAgcmV0dXJuIHR5cGUgIT09IHVuZGVmaW5lZCA/IHR5cGUgOiAnJ1xufVxuXG5mdW5jdGlvbiB0ZkVycm9yU3RyaW5nICh0eXBlLCB2YWx1ZSwgdmFsdWVUeXBlTmFtZSkge1xuICB2YXIgdmFsdWVKc29uID0gZ2V0VmFsdWUodmFsdWUpXG5cbiAgcmV0dXJuICdFeHBlY3RlZCAnICsgdGZKU09OKHR5cGUpICsgJywgZ290JyArXG4gICAgKHZhbHVlVHlwZU5hbWUgIT09ICcnID8gJyAnICsgdmFsdWVUeXBlTmFtZSA6ICcnKSArXG4gICAgKHZhbHVlSnNvbiAhPT0gJycgPyAnICcgKyB2YWx1ZUpzb24gOiAnJylcbn1cblxuZnVuY3Rpb24gVGZUeXBlRXJyb3IgKHR5cGUsIHZhbHVlLCB2YWx1ZVR5cGVOYW1lKSB7XG4gIHZhbHVlVHlwZU5hbWUgPSB2YWx1ZVR5cGVOYW1lIHx8IGdldFZhbHVlVHlwZU5hbWUodmFsdWUpXG4gIHRoaXMubWVzc2FnZSA9IHRmRXJyb3JTdHJpbmcodHlwZSwgdmFsdWUsIHZhbHVlVHlwZU5hbWUpXG5cbiAgY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgVGZUeXBlRXJyb3IpXG4gIHRoaXMuX190eXBlID0gdHlwZVxuICB0aGlzLl9fdmFsdWUgPSB2YWx1ZVxuICB0aGlzLl9fdmFsdWVUeXBlTmFtZSA9IHZhbHVlVHlwZU5hbWVcbn1cblxuVGZUeXBlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpXG5UZlR5cGVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUZlR5cGVFcnJvclxuXG5mdW5jdGlvbiB0ZlByb3BlcnR5RXJyb3JTdHJpbmcgKHR5cGUsIGxhYmVsLCBuYW1lLCB2YWx1ZSwgdmFsdWVUeXBlTmFtZSkge1xuICB2YXIgZGVzY3JpcHRpb24gPSAnXCIgb2YgdHlwZSAnXG4gIGlmIChsYWJlbCA9PT0gJ2tleScpIGRlc2NyaXB0aW9uID0gJ1wiIHdpdGgga2V5IHR5cGUgJ1xuXG4gIHJldHVybiB0ZkVycm9yU3RyaW5nKCdwcm9wZXJ0eSBcIicgKyB0ZkpTT04obmFtZSkgKyBkZXNjcmlwdGlvbiArIHRmSlNPTih0eXBlKSwgdmFsdWUsIHZhbHVlVHlwZU5hbWUpXG59XG5cbmZ1bmN0aW9uIFRmUHJvcGVydHlUeXBlRXJyb3IgKHR5cGUsIHByb3BlcnR5LCBsYWJlbCwgdmFsdWUsIHZhbHVlVHlwZU5hbWUpIHtcbiAgaWYgKHR5cGUpIHtcbiAgICB2YWx1ZVR5cGVOYW1lID0gdmFsdWVUeXBlTmFtZSB8fCBnZXRWYWx1ZVR5cGVOYW1lKHZhbHVlKVxuICAgIHRoaXMubWVzc2FnZSA9IHRmUHJvcGVydHlFcnJvclN0cmluZyh0eXBlLCBsYWJlbCwgcHJvcGVydHksIHZhbHVlLCB2YWx1ZVR5cGVOYW1lKVxuICB9IGVsc2Uge1xuICAgIHRoaXMubWVzc2FnZSA9ICdVbmV4cGVjdGVkIHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiJ1xuICB9XG5cbiAgY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgVGZUeXBlRXJyb3IpXG4gIHRoaXMuX19sYWJlbCA9IGxhYmVsXG4gIHRoaXMuX19wcm9wZXJ0eSA9IHByb3BlcnR5XG4gIHRoaXMuX190eXBlID0gdHlwZVxuICB0aGlzLl9fdmFsdWUgPSB2YWx1ZVxuICB0aGlzLl9fdmFsdWVUeXBlTmFtZSA9IHZhbHVlVHlwZU5hbWVcbn1cblxuVGZQcm9wZXJ0eVR5cGVFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSlcblRmUHJvcGVydHlUeXBlRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGZUeXBlRXJyb3JcblxuZnVuY3Rpb24gdGZDdXN0b21FcnJvciAoZXhwZWN0ZWQsIGFjdHVhbCkge1xuICByZXR1cm4gbmV3IFRmVHlwZUVycm9yKGV4cGVjdGVkLCB7fSwgYWN0dWFsKVxufVxuXG5mdW5jdGlvbiB0ZlN1YkVycm9yIChlLCBwcm9wZXJ0eSwgbGFiZWwpIHtcbiAgLy8gc3ViIGNoaWxkP1xuICBpZiAoZSBpbnN0YW5jZW9mIFRmUHJvcGVydHlUeXBlRXJyb3IpIHtcbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5ICsgJy4nICsgZS5fX3Byb3BlcnR5XG5cbiAgICBlID0gbmV3IFRmUHJvcGVydHlUeXBlRXJyb3IoXG4gICAgICBlLl9fdHlwZSwgcHJvcGVydHksIGUuX19sYWJlbCwgZS5fX3ZhbHVlLCBlLl9fdmFsdWVUeXBlTmFtZVxuICAgIClcblxuICAvLyBjaGlsZD9cbiAgfSBlbHNlIGlmIChlIGluc3RhbmNlb2YgVGZUeXBlRXJyb3IpIHtcbiAgICBlID0gbmV3IFRmUHJvcGVydHlUeXBlRXJyb3IoXG4gICAgICBlLl9fdHlwZSwgcHJvcGVydHksIGxhYmVsLCBlLl9fdmFsdWUsIGUuX192YWx1ZVR5cGVOYW1lXG4gICAgKVxuICB9XG5cbiAgY2FwdHVyZVN0YWNrVHJhY2UoZSlcbiAgcmV0dXJuIGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRmVHlwZUVycm9yOiBUZlR5cGVFcnJvcixcbiAgVGZQcm9wZXJ0eVR5cGVFcnJvcjogVGZQcm9wZXJ0eVR5cGVFcnJvcixcbiAgdGZDdXN0b21FcnJvcjogdGZDdXN0b21FcnJvcixcbiAgdGZTdWJFcnJvcjogdGZTdWJFcnJvcixcbiAgdGZKU09OOiB0ZkpTT04sXG4gIGdldFZhbHVlVHlwZU5hbWU6IGdldFZhbHVlVHlwZU5hbWVcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/errors.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/extra.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/extra.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE = __webpack_require__(/*! ./native */ \"(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/native.js\")\nvar ERRORS = __webpack_require__(/*! ./errors */ \"(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/errors.js\")\n\nfunction _Buffer (value) {\n  return Buffer.isBuffer(value)\n}\n\nfunction Hex (value) {\n  return typeof value === 'string' && /^([0-9a-f]{2})+$/i.test(value)\n}\n\nfunction _LengthN (type, length) {\n  var name = type.toJSON()\n\n  function Length (value) {\n    if (!type(value)) return false\n    if (value.length === length) return true\n\n    throw ERRORS.tfCustomError(name + '(Length: ' + length + ')', name + '(Length: ' + value.length + ')')\n  }\n  Length.toJSON = function () { return name }\n\n  return Length\n}\n\nvar _ArrayN = _LengthN.bind(null, NATIVE.Array)\nvar _BufferN = _LengthN.bind(null, _Buffer)\nvar _HexN = _LengthN.bind(null, Hex)\nvar _StringN = _LengthN.bind(null, NATIVE.String)\n\nfunction Range (a, b, f) {\n  f = f || NATIVE.Number\n  function _range (value, strict) {\n    return f(value, strict) && (value > a) && (value < b)\n  }\n  _range.toJSON = function () {\n    return `${f.toJSON()} between [${a}, ${b}]`\n  }\n  return _range\n}\n\nvar INT53_MAX = Math.pow(2, 53) - 1\n\nfunction Finite (value) {\n  return typeof value === 'number' && isFinite(value)\n}\nfunction Int8 (value) { return ((value << 24) >> 24) === value }\nfunction Int16 (value) { return ((value << 16) >> 16) === value }\nfunction Int32 (value) { return (value | 0) === value }\nfunction Int53 (value) {\n  return typeof value === 'number' &&\n    value >= -INT53_MAX &&\n    value <= INT53_MAX &&\n    Math.floor(value) === value\n}\nfunction UInt8 (value) { return (value & 0xff) === value }\nfunction UInt16 (value) { return (value & 0xffff) === value }\nfunction UInt32 (value) { return (value >>> 0) === value }\nfunction UInt53 (value) {\n  return typeof value === 'number' &&\n    value >= 0 &&\n    value <= INT53_MAX &&\n    Math.floor(value) === value\n}\n\nvar types = {\n  ArrayN: _ArrayN,\n  Buffer: _Buffer,\n  BufferN: _BufferN,\n  Finite: Finite,\n  Hex: Hex,\n  HexN: _HexN,\n  Int8: Int8,\n  Int16: Int16,\n  Int32: Int32,\n  Int53: Int53,\n  Range: Range,\n  StringN: _StringN,\n  UInt8: UInt8,\n  UInt16: UInt16,\n  UInt32: UInt32,\n  UInt53: UInt53\n}\n\nfor (var typeName in types) {\n  types[typeName].toJSON = function (t) {\n    return t\n  }.bind(null, typeName)\n}\n\nmodule.exports = types\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdHlwZWZvcmNlQDEuMTguMC9ub2RlX21vZHVsZXMvdHlwZWZvcmNlL2V4dHJhLmpzIiwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyw4RkFBVTtBQUMvQixhQUFhLG1CQUFPLENBQUMsOEZBQVU7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxFQUFFO0FBQ3BEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxZQUFZLFdBQVcsRUFBRSxJQUFJLEVBQUU7QUFDN0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyIvaG9tZS9hYnViYWtyamltb2gvRGVza3RvcC9Db2RpbmcgU3R1ZmZzL2hhY2thdGhvbi9zZWNyZXQtbmV0d29yay9tZW1lQWlfY29pbl9jcmVhdG9yL2FpLW1lbWUtY29pbi1jcmVhdG9yL25vZGVfbW9kdWxlcy8ucG5wbS90eXBlZm9yY2VAMS4xOC4wL25vZGVfbW9kdWxlcy90eXBlZm9yY2UvZXh0cmEuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIE5BVElWRSA9IHJlcXVpcmUoJy4vbmF0aXZlJylcbnZhciBFUlJPUlMgPSByZXF1aXJlKCcuL2Vycm9ycycpXG5cbmZ1bmN0aW9uIF9CdWZmZXIgKHZhbHVlKSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIodmFsdWUpXG59XG5cbmZ1bmN0aW9uIEhleCAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgL14oWzAtOWEtZl17Mn0pKyQvaS50ZXN0KHZhbHVlKVxufVxuXG5mdW5jdGlvbiBfTGVuZ3RoTiAodHlwZSwgbGVuZ3RoKSB7XG4gIHZhciBuYW1lID0gdHlwZS50b0pTT04oKVxuXG4gIGZ1bmN0aW9uIExlbmd0aCAodmFsdWUpIHtcbiAgICBpZiAoIXR5cGUodmFsdWUpKSByZXR1cm4gZmFsc2VcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSBsZW5ndGgpIHJldHVybiB0cnVlXG5cbiAgICB0aHJvdyBFUlJPUlMudGZDdXN0b21FcnJvcihuYW1lICsgJyhMZW5ndGg6ICcgKyBsZW5ndGggKyAnKScsIG5hbWUgKyAnKExlbmd0aDogJyArIHZhbHVlLmxlbmd0aCArICcpJylcbiAgfVxuICBMZW5ndGgudG9KU09OID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmFtZSB9XG5cbiAgcmV0dXJuIExlbmd0aFxufVxuXG52YXIgX0FycmF5TiA9IF9MZW5ndGhOLmJpbmQobnVsbCwgTkFUSVZFLkFycmF5KVxudmFyIF9CdWZmZXJOID0gX0xlbmd0aE4uYmluZChudWxsLCBfQnVmZmVyKVxudmFyIF9IZXhOID0gX0xlbmd0aE4uYmluZChudWxsLCBIZXgpXG52YXIgX1N0cmluZ04gPSBfTGVuZ3RoTi5iaW5kKG51bGwsIE5BVElWRS5TdHJpbmcpXG5cbmZ1bmN0aW9uIFJhbmdlIChhLCBiLCBmKSB7XG4gIGYgPSBmIHx8IE5BVElWRS5OdW1iZXJcbiAgZnVuY3Rpb24gX3JhbmdlICh2YWx1ZSwgc3RyaWN0KSB7XG4gICAgcmV0dXJuIGYodmFsdWUsIHN0cmljdCkgJiYgKHZhbHVlID4gYSkgJiYgKHZhbHVlIDwgYilcbiAgfVxuICBfcmFuZ2UudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBgJHtmLnRvSlNPTigpfSBiZXR3ZWVuIFske2F9LCAke2J9XWBcbiAgfVxuICByZXR1cm4gX3JhbmdlXG59XG5cbnZhciBJTlQ1M19NQVggPSBNYXRoLnBvdygyLCA1MykgLSAxXG5cbmZ1bmN0aW9uIEZpbml0ZSAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpXG59XG5mdW5jdGlvbiBJbnQ4ICh2YWx1ZSkgeyByZXR1cm4gKCh2YWx1ZSA8PCAyNCkgPj4gMjQpID09PSB2YWx1ZSB9XG5mdW5jdGlvbiBJbnQxNiAodmFsdWUpIHsgcmV0dXJuICgodmFsdWUgPDwgMTYpID4+IDE2KSA9PT0gdmFsdWUgfVxuZnVuY3Rpb24gSW50MzIgKHZhbHVlKSB7IHJldHVybiAodmFsdWUgfCAwKSA9PT0gdmFsdWUgfVxuZnVuY3Rpb24gSW50NTMgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPj0gLUlOVDUzX01BWCAmJlxuICAgIHZhbHVlIDw9IElOVDUzX01BWCAmJlxuICAgIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZVxufVxuZnVuY3Rpb24gVUludDggKHZhbHVlKSB7IHJldHVybiAodmFsdWUgJiAweGZmKSA9PT0gdmFsdWUgfVxuZnVuY3Rpb24gVUludDE2ICh2YWx1ZSkgeyByZXR1cm4gKHZhbHVlICYgMHhmZmZmKSA9PT0gdmFsdWUgfVxuZnVuY3Rpb24gVUludDMyICh2YWx1ZSkgeyByZXR1cm4gKHZhbHVlID4+PiAwKSA9PT0gdmFsdWUgfVxuZnVuY3Rpb24gVUludDUzICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID49IDAgJiZcbiAgICB2YWx1ZSA8PSBJTlQ1M19NQVggJiZcbiAgICBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWVcbn1cblxudmFyIHR5cGVzID0ge1xuICBBcnJheU46IF9BcnJheU4sXG4gIEJ1ZmZlcjogX0J1ZmZlcixcbiAgQnVmZmVyTjogX0J1ZmZlck4sXG4gIEZpbml0ZTogRmluaXRlLFxuICBIZXg6IEhleCxcbiAgSGV4TjogX0hleE4sXG4gIEludDg6IEludDgsXG4gIEludDE2OiBJbnQxNixcbiAgSW50MzI6IEludDMyLFxuICBJbnQ1MzogSW50NTMsXG4gIFJhbmdlOiBSYW5nZSxcbiAgU3RyaW5nTjogX1N0cmluZ04sXG4gIFVJbnQ4OiBVSW50OCxcbiAgVUludDE2OiBVSW50MTYsXG4gIFVJbnQzMjogVUludDMyLFxuICBVSW50NTM6IFVJbnQ1M1xufVxuXG5mb3IgKHZhciB0eXBlTmFtZSBpbiB0eXBlcykge1xuICB0eXBlc1t0eXBlTmFtZV0udG9KU09OID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdFxuICB9LmJpbmQobnVsbCwgdHlwZU5hbWUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZXNcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/extra.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/index.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ERRORS = __webpack_require__(/*! ./errors */ \"(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/errors.js\")\nvar NATIVE = __webpack_require__(/*! ./native */ \"(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/native.js\")\n\n// short-hand\nvar tfJSON = ERRORS.tfJSON\nvar TfTypeError = ERRORS.TfTypeError\nvar TfPropertyTypeError = ERRORS.TfPropertyTypeError\nvar tfSubError = ERRORS.tfSubError\nvar getValueTypeName = ERRORS.getValueTypeName\n\nvar TYPES = {\n  arrayOf: function arrayOf (type, options) {\n    type = compile(type)\n    options = options || {}\n\n    function _arrayOf (array, strict) {\n      if (!NATIVE.Array(array)) return false\n      if (NATIVE.Nil(array)) return false\n      if (options.minLength !== undefined && array.length < options.minLength) return false\n      if (options.maxLength !== undefined && array.length > options.maxLength) return false\n      if (options.length !== undefined && array.length !== options.length) return false\n\n      return array.every(function (value, i) {\n        try {\n          return typeforce(type, value, strict)\n        } catch (e) {\n          throw tfSubError(e, i)\n        }\n      })\n    }\n    _arrayOf.toJSON = function () {\n      var str = '[' + tfJSON(type) + ']'\n      if (options.length !== undefined) {\n        str += '{' + options.length + '}'\n      } else if (options.minLength !== undefined || options.maxLength !== undefined) {\n        str += '{' +\n          (options.minLength === undefined ? 0 : options.minLength) + ',' +\n          (options.maxLength === undefined ? Infinity : options.maxLength) + '}'\n      }\n      return str\n    }\n\n    return _arrayOf\n  },\n\n  maybe: function maybe (type) {\n    type = compile(type)\n\n    function _maybe (value, strict) {\n      return NATIVE.Nil(value) || type(value, strict, maybe)\n    }\n    _maybe.toJSON = function () { return '?' + tfJSON(type) }\n\n    return _maybe\n  },\n\n  map: function map (propertyType, propertyKeyType) {\n    propertyType = compile(propertyType)\n    if (propertyKeyType) propertyKeyType = compile(propertyKeyType)\n\n    function _map (value, strict) {\n      if (!NATIVE.Object(value)) return false\n      if (NATIVE.Nil(value)) return false\n\n      for (var propertyName in value) {\n        try {\n          if (propertyKeyType) {\n            typeforce(propertyKeyType, propertyName, strict)\n          }\n        } catch (e) {\n          throw tfSubError(e, propertyName, 'key')\n        }\n\n        try {\n          var propertyValue = value[propertyName]\n          typeforce(propertyType, propertyValue, strict)\n        } catch (e) {\n          throw tfSubError(e, propertyName)\n        }\n      }\n\n      return true\n    }\n\n    if (propertyKeyType) {\n      _map.toJSON = function () {\n        return '{' + tfJSON(propertyKeyType) + ': ' + tfJSON(propertyType) + '}'\n      }\n    } else {\n      _map.toJSON = function () { return '{' + tfJSON(propertyType) + '}' }\n    }\n\n    return _map\n  },\n\n  object: function object (uncompiled) {\n    var type = {}\n\n    for (var typePropertyName in uncompiled) {\n      type[typePropertyName] = compile(uncompiled[typePropertyName])\n    }\n\n    function _object (value, strict) {\n      if (!NATIVE.Object(value)) return false\n      if (NATIVE.Nil(value)) return false\n\n      var propertyName\n\n      try {\n        for (propertyName in type) {\n          var propertyType = type[propertyName]\n          var propertyValue = value[propertyName]\n\n          typeforce(propertyType, propertyValue, strict)\n        }\n      } catch (e) {\n        throw tfSubError(e, propertyName)\n      }\n\n      if (strict) {\n        for (propertyName in value) {\n          if (type[propertyName]) continue\n\n          throw new TfPropertyTypeError(undefined, propertyName)\n        }\n      }\n\n      return true\n    }\n    _object.toJSON = function () { return tfJSON(type) }\n\n    return _object\n  },\n\n  anyOf: function anyOf () {\n    var types = [].slice.call(arguments).map(compile)\n\n    function _anyOf (value, strict) {\n      return types.some(function (type) {\n        try {\n          return typeforce(type, value, strict)\n        } catch (e) {\n          return false\n        }\n      })\n    }\n    _anyOf.toJSON = function () { return types.map(tfJSON).join('|') }\n\n    return _anyOf\n  },\n\n  allOf: function allOf () {\n    var types = [].slice.call(arguments).map(compile)\n\n    function _allOf (value, strict) {\n      return types.every(function (type) {\n        try {\n          return typeforce(type, value, strict)\n        } catch (e) {\n          return false\n        }\n      })\n    }\n    _allOf.toJSON = function () { return types.map(tfJSON).join(' & ') }\n\n    return _allOf\n  },\n\n  quacksLike: function quacksLike (type) {\n    function _quacksLike (value) {\n      return type === getValueTypeName(value)\n    }\n    _quacksLike.toJSON = function () { return type }\n\n    return _quacksLike\n  },\n\n  tuple: function tuple () {\n    var types = [].slice.call(arguments).map(compile)\n\n    function _tuple (values, strict) {\n      if (NATIVE.Nil(values)) return false\n      if (NATIVE.Nil(values.length)) return false\n      if (strict && (values.length !== types.length)) return false\n\n      return types.every(function (type, i) {\n        try {\n          return typeforce(type, values[i], strict)\n        } catch (e) {\n          throw tfSubError(e, i)\n        }\n      })\n    }\n    _tuple.toJSON = function () { return '(' + types.map(tfJSON).join(', ') + ')' }\n\n    return _tuple\n  },\n\n  value: function value (expected) {\n    function _value (actual) {\n      return actual === expected\n    }\n    _value.toJSON = function () { return expected }\n\n    return _value\n  }\n}\n\n// TODO: deprecate\nTYPES.oneOf = TYPES.anyOf\n\nfunction compile (type) {\n  if (NATIVE.String(type)) {\n    if (type[0] === '?') return TYPES.maybe(type.slice(1))\n\n    return NATIVE[type] || TYPES.quacksLike(type)\n  } else if (type && NATIVE.Object(type)) {\n    if (NATIVE.Array(type)) {\n      if (type.length !== 1) throw new TypeError('Expected compile() parameter of type Array of length 1')\n      return TYPES.arrayOf(type[0])\n    }\n\n    return TYPES.object(type)\n  } else if (NATIVE.Function(type)) {\n    return type\n  }\n\n  return TYPES.value(type)\n}\n\nfunction typeforce (type, value, strict, surrogate) {\n  if (NATIVE.Function(type)) {\n    if (type(value, strict)) return true\n\n    throw new TfTypeError(surrogate || type, value)\n  }\n\n  // JIT\n  return typeforce(compile(type), value, strict)\n}\n\n// assign types to typeforce function\nfor (var typeName in NATIVE) {\n  typeforce[typeName] = NATIVE[typeName]\n}\n\nfor (typeName in TYPES) {\n  typeforce[typeName] = TYPES[typeName]\n}\n\nvar EXTRA = __webpack_require__(/*! ./extra */ \"(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/extra.js\")\nfor (typeName in EXTRA) {\n  typeforce[typeName] = EXTRA[typeName]\n}\n\ntypeforce.compile = compile\ntypeforce.TfTypeError = TfTypeError\ntypeforce.TfPropertyTypeError = TfPropertyTypeError\n\nmodule.exports = typeforce\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdHlwZWZvcmNlQDEuMTguMC9ub2RlX21vZHVsZXMvdHlwZWZvcmNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGFBQWEsbUJBQU8sQ0FBQyw4RkFBVTtBQUMvQixhQUFhLG1CQUFPLENBQUMsOEZBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDLFFBQVE7QUFDUixpQkFBaUI7QUFDakI7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDhEQUE4RDtBQUMvRTtBQUNBLE1BQU07QUFDTixrQ0FBa0MsU0FBUyw2QkFBNkI7QUFDeEU7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsNEZBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsiL2hvbWUvYWJ1YmFrcmppbW9oL0Rlc2t0b3AvQ29kaW5nIFN0dWZmcy9oYWNrYXRob24vc2VjcmV0LW5ldHdvcmsvbWVtZUFpX2NvaW5fY3JlYXRvci9haS1tZW1lLWNvaW4tY3JlYXRvci9ub2RlX21vZHVsZXMvLnBucG0vdHlwZWZvcmNlQDEuMTguMC9ub2RlX21vZHVsZXMvdHlwZWZvcmNlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBFUlJPUlMgPSByZXF1aXJlKCcuL2Vycm9ycycpXG52YXIgTkFUSVZFID0gcmVxdWlyZSgnLi9uYXRpdmUnKVxuXG4vLyBzaG9ydC1oYW5kXG52YXIgdGZKU09OID0gRVJST1JTLnRmSlNPTlxudmFyIFRmVHlwZUVycm9yID0gRVJST1JTLlRmVHlwZUVycm9yXG52YXIgVGZQcm9wZXJ0eVR5cGVFcnJvciA9IEVSUk9SUy5UZlByb3BlcnR5VHlwZUVycm9yXG52YXIgdGZTdWJFcnJvciA9IEVSUk9SUy50ZlN1YkVycm9yXG52YXIgZ2V0VmFsdWVUeXBlTmFtZSA9IEVSUk9SUy5nZXRWYWx1ZVR5cGVOYW1lXG5cbnZhciBUWVBFUyA9IHtcbiAgYXJyYXlPZjogZnVuY3Rpb24gYXJyYXlPZiAodHlwZSwgb3B0aW9ucykge1xuICAgIHR5cGUgPSBjb21waWxlKHR5cGUpXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICAgIGZ1bmN0aW9uIF9hcnJheU9mIChhcnJheSwgc3RyaWN0KSB7XG4gICAgICBpZiAoIU5BVElWRS5BcnJheShhcnJheSkpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKE5BVElWRS5OaWwoYXJyYXkpKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChvcHRpb25zLm1pbkxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIGFycmF5Lmxlbmd0aCA8IG9wdGlvbnMubWluTGVuZ3RoKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChvcHRpb25zLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIGFycmF5Lmxlbmd0aCA+IG9wdGlvbnMubWF4TGVuZ3RoKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChvcHRpb25zLmxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIGFycmF5Lmxlbmd0aCAhPT0gb3B0aW9ucy5sZW5ndGgpIHJldHVybiBmYWxzZVxuXG4gICAgICByZXR1cm4gYXJyYXkuZXZlcnkoZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGVmb3JjZSh0eXBlLCB2YWx1ZSwgc3RyaWN0KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhyb3cgdGZTdWJFcnJvcihlLCBpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBfYXJyYXlPZi50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RyID0gJ1snICsgdGZKU09OKHR5cGUpICsgJ10nXG4gICAgICBpZiAob3B0aW9ucy5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdHIgKz0gJ3snICsgb3B0aW9ucy5sZW5ndGggKyAnfSdcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5taW5MZW5ndGggIT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0ciArPSAneycgK1xuICAgICAgICAgIChvcHRpb25zLm1pbkxlbmd0aCA9PT0gdW5kZWZpbmVkID8gMCA6IG9wdGlvbnMubWluTGVuZ3RoKSArICcsJyArXG4gICAgICAgICAgKG9wdGlvbnMubWF4TGVuZ3RoID09PSB1bmRlZmluZWQgPyBJbmZpbml0eSA6IG9wdGlvbnMubWF4TGVuZ3RoKSArICd9J1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0clxuICAgIH1cblxuICAgIHJldHVybiBfYXJyYXlPZlxuICB9LFxuXG4gIG1heWJlOiBmdW5jdGlvbiBtYXliZSAodHlwZSkge1xuICAgIHR5cGUgPSBjb21waWxlKHR5cGUpXG5cbiAgICBmdW5jdGlvbiBfbWF5YmUgKHZhbHVlLCBzdHJpY3QpIHtcbiAgICAgIHJldHVybiBOQVRJVkUuTmlsKHZhbHVlKSB8fCB0eXBlKHZhbHVlLCBzdHJpY3QsIG1heWJlKVxuICAgIH1cbiAgICBfbWF5YmUudG9KU09OID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJz8nICsgdGZKU09OKHR5cGUpIH1cblxuICAgIHJldHVybiBfbWF5YmVcbiAgfSxcblxuICBtYXA6IGZ1bmN0aW9uIG1hcCAocHJvcGVydHlUeXBlLCBwcm9wZXJ0eUtleVR5cGUpIHtcbiAgICBwcm9wZXJ0eVR5cGUgPSBjb21waWxlKHByb3BlcnR5VHlwZSlcbiAgICBpZiAocHJvcGVydHlLZXlUeXBlKSBwcm9wZXJ0eUtleVR5cGUgPSBjb21waWxlKHByb3BlcnR5S2V5VHlwZSlcblxuICAgIGZ1bmN0aW9uIF9tYXAgKHZhbHVlLCBzdHJpY3QpIHtcbiAgICAgIGlmICghTkFUSVZFLk9iamVjdCh2YWx1ZSkpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKE5BVElWRS5OaWwodmFsdWUpKSByZXR1cm4gZmFsc2VcblxuICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHByb3BlcnR5S2V5VHlwZSkge1xuICAgICAgICAgICAgdHlwZWZvcmNlKHByb3BlcnR5S2V5VHlwZSwgcHJvcGVydHlOYW1lLCBzdHJpY3QpXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhyb3cgdGZTdWJFcnJvcihlLCBwcm9wZXJ0eU5hbWUsICdrZXknKVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IHZhbHVlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICB0eXBlZm9yY2UocHJvcGVydHlUeXBlLCBwcm9wZXJ0eVZhbHVlLCBzdHJpY3QpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aHJvdyB0ZlN1YkVycm9yKGUsIHByb3BlcnR5TmFtZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eUtleVR5cGUpIHtcbiAgICAgIF9tYXAudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ3snICsgdGZKU09OKHByb3BlcnR5S2V5VHlwZSkgKyAnOiAnICsgdGZKU09OKHByb3BlcnR5VHlwZSkgKyAnfSdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgX21hcC50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAneycgKyB0ZkpTT04ocHJvcGVydHlUeXBlKSArICd9JyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9tYXBcbiAgfSxcblxuICBvYmplY3Q6IGZ1bmN0aW9uIG9iamVjdCAodW5jb21waWxlZCkge1xuICAgIHZhciB0eXBlID0ge31cblxuICAgIGZvciAodmFyIHR5cGVQcm9wZXJ0eU5hbWUgaW4gdW5jb21waWxlZCkge1xuICAgICAgdHlwZVt0eXBlUHJvcGVydHlOYW1lXSA9IGNvbXBpbGUodW5jb21waWxlZFt0eXBlUHJvcGVydHlOYW1lXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfb2JqZWN0ICh2YWx1ZSwgc3RyaWN0KSB7XG4gICAgICBpZiAoIU5BVElWRS5PYmplY3QodmFsdWUpKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChOQVRJVkUuTmlsKHZhbHVlKSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHZhciBwcm9wZXJ0eU5hbWVcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChwcm9wZXJ0eU5hbWUgaW4gdHlwZSkge1xuICAgICAgICAgIHZhciBwcm9wZXJ0eVR5cGUgPSB0eXBlW3Byb3BlcnR5TmFtZV1cbiAgICAgICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IHZhbHVlW3Byb3BlcnR5TmFtZV1cblxuICAgICAgICAgIHR5cGVmb3JjZShwcm9wZXJ0eVR5cGUsIHByb3BlcnR5VmFsdWUsIHN0cmljdClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyB0ZlN1YkVycm9yKGUsIHByb3BlcnR5TmFtZSlcbiAgICAgIH1cblxuICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICBmb3IgKHByb3BlcnR5TmFtZSBpbiB2YWx1ZSkge1xuICAgICAgICAgIGlmICh0eXBlW3Byb3BlcnR5TmFtZV0pIGNvbnRpbnVlXG5cbiAgICAgICAgICB0aHJvdyBuZXcgVGZQcm9wZXJ0eVR5cGVFcnJvcih1bmRlZmluZWQsIHByb3BlcnR5TmFtZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBfb2JqZWN0LnRvSlNPTiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRmSlNPTih0eXBlKSB9XG5cbiAgICByZXR1cm4gX29iamVjdFxuICB9LFxuXG4gIGFueU9mOiBmdW5jdGlvbiBhbnlPZiAoKSB7XG4gICAgdmFyIHR5cGVzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLm1hcChjb21waWxlKVxuXG4gICAgZnVuY3Rpb24gX2FueU9mICh2YWx1ZSwgc3RyaWN0KSB7XG4gICAgICByZXR1cm4gdHlwZXMuc29tZShmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0eXBlZm9yY2UodHlwZSwgdmFsdWUsIHN0cmljdClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBfYW55T2YudG9KU09OID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZXMubWFwKHRmSlNPTikuam9pbignfCcpIH1cblxuICAgIHJldHVybiBfYW55T2ZcbiAgfSxcblxuICBhbGxPZjogZnVuY3Rpb24gYWxsT2YgKCkge1xuICAgIHZhciB0eXBlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5tYXAoY29tcGlsZSlcblxuICAgIGZ1bmN0aW9uIF9hbGxPZiAodmFsdWUsIHN0cmljdCkge1xuICAgICAgcmV0dXJuIHR5cGVzLmV2ZXJ5KGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGVmb3JjZSh0eXBlLCB2YWx1ZSwgc3RyaWN0KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIF9hbGxPZi50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0eXBlcy5tYXAodGZKU09OKS5qb2luKCcgJiAnKSB9XG5cbiAgICByZXR1cm4gX2FsbE9mXG4gIH0sXG5cbiAgcXVhY2tzTGlrZTogZnVuY3Rpb24gcXVhY2tzTGlrZSAodHlwZSkge1xuICAgIGZ1bmN0aW9uIF9xdWFja3NMaWtlICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGUgPT09IGdldFZhbHVlVHlwZU5hbWUodmFsdWUpXG4gICAgfVxuICAgIF9xdWFja3NMaWtlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGUgfVxuXG4gICAgcmV0dXJuIF9xdWFja3NMaWtlXG4gIH0sXG5cbiAgdHVwbGU6IGZ1bmN0aW9uIHR1cGxlICgpIHtcbiAgICB2YXIgdHlwZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykubWFwKGNvbXBpbGUpXG5cbiAgICBmdW5jdGlvbiBfdHVwbGUgKHZhbHVlcywgc3RyaWN0KSB7XG4gICAgICBpZiAoTkFUSVZFLk5pbCh2YWx1ZXMpKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChOQVRJVkUuTmlsKHZhbHVlcy5sZW5ndGgpKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChzdHJpY3QgJiYgKHZhbHVlcy5sZW5ndGggIT09IHR5cGVzLmxlbmd0aCkpIHJldHVybiBmYWxzZVxuXG4gICAgICByZXR1cm4gdHlwZXMuZXZlcnkoZnVuY3Rpb24gKHR5cGUsIGkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gdHlwZWZvcmNlKHR5cGUsIHZhbHVlc1tpXSwgc3RyaWN0KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhyb3cgdGZTdWJFcnJvcihlLCBpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBfdHVwbGUudG9KU09OID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJygnICsgdHlwZXMubWFwKHRmSlNPTikuam9pbignLCAnKSArICcpJyB9XG5cbiAgICByZXR1cm4gX3R1cGxlXG4gIH0sXG5cbiAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlIChleHBlY3RlZCkge1xuICAgIGZ1bmN0aW9uIF92YWx1ZSAoYWN0dWFsKSB7XG4gICAgICByZXR1cm4gYWN0dWFsID09PSBleHBlY3RlZFxuICAgIH1cbiAgICBfdmFsdWUudG9KU09OID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZXhwZWN0ZWQgfVxuXG4gICAgcmV0dXJuIF92YWx1ZVxuICB9XG59XG5cbi8vIFRPRE86IGRlcHJlY2F0ZVxuVFlQRVMub25lT2YgPSBUWVBFUy5hbnlPZlxuXG5mdW5jdGlvbiBjb21waWxlICh0eXBlKSB7XG4gIGlmIChOQVRJVkUuU3RyaW5nKHR5cGUpKSB7XG4gICAgaWYgKHR5cGVbMF0gPT09ICc/JykgcmV0dXJuIFRZUEVTLm1heWJlKHR5cGUuc2xpY2UoMSkpXG5cbiAgICByZXR1cm4gTkFUSVZFW3R5cGVdIHx8IFRZUEVTLnF1YWNrc0xpa2UodHlwZSlcbiAgfSBlbHNlIGlmICh0eXBlICYmIE5BVElWRS5PYmplY3QodHlwZSkpIHtcbiAgICBpZiAoTkFUSVZFLkFycmF5KHR5cGUpKSB7XG4gICAgICBpZiAodHlwZS5sZW5ndGggIT09IDEpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGNvbXBpbGUoKSBwYXJhbWV0ZXIgb2YgdHlwZSBBcnJheSBvZiBsZW5ndGggMScpXG4gICAgICByZXR1cm4gVFlQRVMuYXJyYXlPZih0eXBlWzBdKVxuICAgIH1cblxuICAgIHJldHVybiBUWVBFUy5vYmplY3QodHlwZSlcbiAgfSBlbHNlIGlmIChOQVRJVkUuRnVuY3Rpb24odHlwZSkpIHtcbiAgICByZXR1cm4gdHlwZVxuICB9XG5cbiAgcmV0dXJuIFRZUEVTLnZhbHVlKHR5cGUpXG59XG5cbmZ1bmN0aW9uIHR5cGVmb3JjZSAodHlwZSwgdmFsdWUsIHN0cmljdCwgc3Vycm9nYXRlKSB7XG4gIGlmIChOQVRJVkUuRnVuY3Rpb24odHlwZSkpIHtcbiAgICBpZiAodHlwZSh2YWx1ZSwgc3RyaWN0KSkgcmV0dXJuIHRydWVcblxuICAgIHRocm93IG5ldyBUZlR5cGVFcnJvcihzdXJyb2dhdGUgfHwgdHlwZSwgdmFsdWUpXG4gIH1cblxuICAvLyBKSVRcbiAgcmV0dXJuIHR5cGVmb3JjZShjb21waWxlKHR5cGUpLCB2YWx1ZSwgc3RyaWN0KVxufVxuXG4vLyBhc3NpZ24gdHlwZXMgdG8gdHlwZWZvcmNlIGZ1bmN0aW9uXG5mb3IgKHZhciB0eXBlTmFtZSBpbiBOQVRJVkUpIHtcbiAgdHlwZWZvcmNlW3R5cGVOYW1lXSA9IE5BVElWRVt0eXBlTmFtZV1cbn1cblxuZm9yICh0eXBlTmFtZSBpbiBUWVBFUykge1xuICB0eXBlZm9yY2VbdHlwZU5hbWVdID0gVFlQRVNbdHlwZU5hbWVdXG59XG5cbnZhciBFWFRSQSA9IHJlcXVpcmUoJy4vZXh0cmEnKVxuZm9yICh0eXBlTmFtZSBpbiBFWFRSQSkge1xuICB0eXBlZm9yY2VbdHlwZU5hbWVdID0gRVhUUkFbdHlwZU5hbWVdXG59XG5cbnR5cGVmb3JjZS5jb21waWxlID0gY29tcGlsZVxudHlwZWZvcmNlLlRmVHlwZUVycm9yID0gVGZUeXBlRXJyb3JcbnR5cGVmb3JjZS5UZlByb3BlcnR5VHlwZUVycm9yID0gVGZQcm9wZXJ0eVR5cGVFcnJvclxuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVmb3JjZVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/native.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/native.js ***!
  \******************************************************************************/
/***/ ((module) => {

eval("var types = {\n  Array: function (value) { return value !== null && value !== undefined && value.constructor === Array },\n  Boolean: function (value) { return typeof value === 'boolean' },\n  Function: function (value) { return typeof value === 'function' },\n  Nil: function (value) { return value === undefined || value === null },\n  Number: function (value) { return typeof value === 'number' },\n  Object: function (value) { return typeof value === 'object' },\n  String: function (value) { return typeof value === 'string' },\n  '': function () { return true }\n}\n\n// TODO: deprecate\ntypes.Null = types.Nil\n\nfor (var typeName in types) {\n  types[typeName].toJSON = function (t) {\n    return t\n  }.bind(null, typeName)\n}\n\nmodule.exports = types\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdHlwZWZvcmNlQDEuMTguMC9ub2RlX21vZHVsZXMvdHlwZWZvcmNlL25hdGl2ZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDRCQUE0Qiw2RUFBNkU7QUFDekcsOEJBQThCLG1DQUFtQztBQUNqRSwrQkFBK0Isb0NBQW9DO0FBQ25FLDBCQUEwQiw4Q0FBOEM7QUFDeEUsNkJBQTZCLGtDQUFrQztBQUMvRCw2QkFBNkIsa0NBQWtDO0FBQy9ELDZCQUE2QixrQ0FBa0M7QUFDL0Qsb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyIvaG9tZS9hYnViYWtyamltb2gvRGVza3RvcC9Db2RpbmcgU3R1ZmZzL2hhY2thdGhvbi9zZWNyZXQtbmV0d29yay9tZW1lQWlfY29pbl9jcmVhdG9yL2FpLW1lbWUtY29pbi1jcmVhdG9yL25vZGVfbW9kdWxlcy8ucG5wbS90eXBlZm9yY2VAMS4xOC4wL25vZGVfbW9kdWxlcy90eXBlZm9yY2UvbmF0aXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB0eXBlcyA9IHtcbiAgQXJyYXk6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgfSxcbiAgQm9vbGVhbjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB9LFxuICBGdW5jdGlvbjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfSxcbiAgTmlsOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfSxcbiAgTnVtYmVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfSxcbiAgT2JqZWN0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfSxcbiAgU3RyaW5nOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfSxcbiAgJyc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfVxufVxuXG4vLyBUT0RPOiBkZXByZWNhdGVcbnR5cGVzLk51bGwgPSB0eXBlcy5OaWxcblxuZm9yICh2YXIgdHlwZU5hbWUgaW4gdHlwZXMpIHtcbiAgdHlwZXNbdHlwZU5hbWVdLnRvSlNPTiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHRcbiAgfS5iaW5kKG51bGwsIHR5cGVOYW1lKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVzXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/typeforce@1.18.0/node_modules/typeforce/native.js\n");

/***/ })

};
;