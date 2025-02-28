"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10";
exports.ids = ["vendor-chunks/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/client/browser/index.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/client/browser/index.js ***!
  \********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst uuid = (__webpack_require__(/*! uuid */ \"(ssr)/./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js\").v4);\nconst generateRequest = __webpack_require__(/*! ../../generateRequest */ \"(ssr)/./node_modules/.pnpm/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/generateRequest.js\");\n\n/**\n * Constructor for a Jayson Browser Client that does not depend any node.js core libraries\n * @class ClientBrowser\n * @param {Function} callServer Method that calls the server, receives the stringified request and a regular node-style callback\n * @param {Object} [options]\n * @param {Function} [options.reviver] Reviver function for JSON\n * @param {Function} [options.replacer] Replacer function for JSON\n * @param {Number} [options.version=2] JSON-RPC version to use (1|2)\n * @param {Function} [options.generator] Function to use for generating request IDs\n *  @param {Boolean} [options.notificationIdNull=false] When true, version 2 requests will set id to null instead of omitting it\n * @return {ClientBrowser}\n */\nconst ClientBrowser = function(callServer, options) {\n  if(!(this instanceof ClientBrowser)) {\n    return new ClientBrowser(callServer, options);\n  }\n\n  if (!options) {\n    options = {};\n  }\n\n  this.options = {\n    reviver: typeof options.reviver !== 'undefined' ? options.reviver : null,\n    replacer: typeof options.replacer !== 'undefined' ? options.replacer : null,\n    generator: typeof options.generator !== 'undefined' ? options.generator : function() { return uuid(); },\n    version: typeof options.version !== 'undefined' ? options.version : 2,\n    notificationIdNull: typeof options.notificationIdNull === 'boolean' ? options.notificationIdNull : false,\n  };\n\n  this.callServer = callServer;\n};\n\nmodule.exports = ClientBrowser;\n\n/**\n *  Creates a request and dispatches it if given a callback.\n *  @param {String|Array} method A batch request if passed an Array, or a method name if passed a String\n *  @param {Array|Object} [params] Parameters for the method\n *  @param {String|Number} [id] Optional id. If undefined an id will be generated. If null it creates a notification request\n *  @param {Function} [callback] Request callback. If specified, executes the request rather than only returning it.\n *  @throws {TypeError} Invalid parameters\n *  @return {Object} JSON-RPC 1.0 or 2.0 compatible request\n */\nClientBrowser.prototype.request = function(method, params, id, callback) {\n  const self = this;\n  let request = null;\n\n  // is this a batch request?\n  const isBatch = Array.isArray(method) && typeof params === 'function';\n\n  if (this.options.version === 1 && isBatch) {\n    throw new TypeError('JSON-RPC 1.0 does not support batching');\n  }\n\n  // is this a raw request?\n  const isRaw = !isBatch && method && typeof method === 'object' && typeof params === 'function';\n\n  if(isBatch || isRaw) {\n    callback = params;\n    request = method;\n  } else {\n    if(typeof id === 'function') {\n      callback = id;\n      // specifically undefined because \"null\" is a notification request\n      id = undefined;\n    }\n\n    const hasCallback = typeof callback === 'function';\n\n    try {\n      request = generateRequest(method, params, id, {\n        generator: this.options.generator,\n        version: this.options.version,\n        notificationIdNull: this.options.notificationIdNull,\n      });\n    } catch(err) {\n      if(hasCallback) {\n        return callback(err);\n      }\n      throw err;\n    }\n\n    // no callback means we should just return a raw request\n    if(!hasCallback) {\n      return request;\n    }\n\n  }\n\n  let message;\n  try {\n    message = JSON.stringify(request, this.options.replacer);\n  } catch(err) {\n    return callback(err);\n  }\n\n  this.callServer(message, function(err, response) {\n    self._parseResponse(err, response, callback);\n  });\n\n  // always return the raw request\n  return request;\n};\n\n/**\n * Parses a response from a server\n * @param {Object} err Error to pass on that is unrelated to the actual response\n * @param {String} responseText JSON-RPC 1.0 or 2.0 response\n * @param {Function} callback Callback that will receive different arguments depending on the amount of parameters\n * @private\n */\nClientBrowser.prototype._parseResponse = function(err, responseText, callback) {\n  if(err) {\n    callback(err);\n    return;\n  }\n\n  if(!responseText) {\n    // empty response text, assume that is correct because it could be a\n    // notification which jayson does not give any body for\n    return callback();\n  }\n\n  let response;\n  try {\n    response = JSON.parse(responseText, this.options.reviver);\n  } catch(err) {\n    return callback(err);\n  }\n\n  if(callback.length === 3) {\n    // if callback length is 3, we split callback arguments on error and response\n\n    // is batch response?\n    if(Array.isArray(response)) {\n\n      // neccesary to split strictly on validity according to spec here\n      const isError = function(res) {\n        return typeof res.error !== 'undefined';\n      };\n\n      const isNotError = function (res) {\n        return !isError(res);\n      };\n\n      return callback(null, response.filter(isError), response.filter(isNotError));\n    \n    } else {\n\n      // split regardless of validity\n      return callback(null, response.error, response.result);\n    \n    }\n  \n  }\n\n  callback(null, response);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vamF5c29uQDQuMS4zX2J1ZmZlcnV0aWxANC4wLjlfdXRmLTgtdmFsaWRhdGVANS4wLjEwL25vZGVfbW9kdWxlcy9qYXlzb24vbGliL2NsaWVudC9icm93c2VyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGFBQWEsc0hBQWtCO0FBQy9CLHdCQUF3QixtQkFBTyxDQUFDLHdKQUF1Qjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFVBQVU7QUFDckIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFVBQVU7QUFDckIsWUFBWSxTQUFTO0FBQ3JCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsZ0JBQWdCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUIsWUFBWSxjQUFjO0FBQzFCLFlBQVksZUFBZTtBQUMzQixZQUFZLFVBQVU7QUFDdEIsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIi9ob21lL2FidWJha3JqaW1vaC9EZXNrdG9wL0NvZGluZyBTdHVmZnMvaGFja2F0aG9uL3NlY3JldC1uZXR3b3JrL21lbWVBaV9jb2luX2NyZWF0b3IvYWktbWVtZS1jb2luLWNyZWF0b3Ivbm9kZV9tb2R1bGVzLy5wbnBtL2pheXNvbkA0LjEuM19idWZmZXJ1dGlsQDQuMC45X3V0Zi04LXZhbGlkYXRlQDUuMC4xMC9ub2RlX21vZHVsZXMvamF5c29uL2xpYi9jbGllbnQvYnJvd3Nlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV1aWQgPSByZXF1aXJlKCd1dWlkJykudjQ7XG5jb25zdCBnZW5lcmF0ZVJlcXVlc3QgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmF0ZVJlcXVlc3QnKTtcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgYSBKYXlzb24gQnJvd3NlciBDbGllbnQgdGhhdCBkb2VzIG5vdCBkZXBlbmQgYW55IG5vZGUuanMgY29yZSBsaWJyYXJpZXNcbiAqIEBjbGFzcyBDbGllbnRCcm93c2VyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsU2VydmVyIE1ldGhvZCB0aGF0IGNhbGxzIHRoZSBzZXJ2ZXIsIHJlY2VpdmVzIHRoZSBzdHJpbmdpZmllZCByZXF1ZXN0IGFuZCBhIHJlZ3VsYXIgbm9kZS1zdHlsZSBjYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMucmV2aXZlcl0gUmV2aXZlciBmdW5jdGlvbiBmb3IgSlNPTlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMucmVwbGFjZXJdIFJlcGxhY2VyIGZ1bmN0aW9uIGZvciBKU09OXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudmVyc2lvbj0yXSBKU09OLVJQQyB2ZXJzaW9uIHRvIHVzZSAoMXwyKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdG9yXSBGdW5jdGlvbiB0byB1c2UgZm9yIGdlbmVyYXRpbmcgcmVxdWVzdCBJRHNcbiAqICBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm5vdGlmaWNhdGlvbklkTnVsbD1mYWxzZV0gV2hlbiB0cnVlLCB2ZXJzaW9uIDIgcmVxdWVzdHMgd2lsbCBzZXQgaWQgdG8gbnVsbCBpbnN0ZWFkIG9mIG9taXR0aW5nIGl0XG4gKiBAcmV0dXJuIHtDbGllbnRCcm93c2VyfVxuICovXG5jb25zdCBDbGllbnRCcm93c2VyID0gZnVuY3Rpb24oY2FsbFNlcnZlciwgb3B0aW9ucykge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBDbGllbnRCcm93c2VyKSkge1xuICAgIHJldHVybiBuZXcgQ2xpZW50QnJvd3NlcihjYWxsU2VydmVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICByZXZpdmVyOiB0eXBlb2Ygb3B0aW9ucy5yZXZpdmVyICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMucmV2aXZlciA6IG51bGwsXG4gICAgcmVwbGFjZXI6IHR5cGVvZiBvcHRpb25zLnJlcGxhY2VyICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMucmVwbGFjZXIgOiBudWxsLFxuICAgIGdlbmVyYXRvcjogdHlwZW9mIG9wdGlvbnMuZ2VuZXJhdG9yICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuZ2VuZXJhdG9yIDogZnVuY3Rpb24oKSB7IHJldHVybiB1dWlkKCk7IH0sXG4gICAgdmVyc2lvbjogdHlwZW9mIG9wdGlvbnMudmVyc2lvbiAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnZlcnNpb24gOiAyLFxuICAgIG5vdGlmaWNhdGlvbklkTnVsbDogdHlwZW9mIG9wdGlvbnMubm90aWZpY2F0aW9uSWROdWxsID09PSAnYm9vbGVhbicgPyBvcHRpb25zLm5vdGlmaWNhdGlvbklkTnVsbCA6IGZhbHNlLFxuICB9O1xuXG4gIHRoaXMuY2FsbFNlcnZlciA9IGNhbGxTZXJ2ZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENsaWVudEJyb3dzZXI7XG5cbi8qKlxuICogIENyZWF0ZXMgYSByZXF1ZXN0IGFuZCBkaXNwYXRjaGVzIGl0IGlmIGdpdmVuIGEgY2FsbGJhY2suXG4gKiAgQHBhcmFtIHtTdHJpbmd8QXJyYXl9IG1ldGhvZCBBIGJhdGNoIHJlcXVlc3QgaWYgcGFzc2VkIGFuIEFycmF5LCBvciBhIG1ldGhvZCBuYW1lIGlmIHBhc3NlZCBhIFN0cmluZ1xuICogIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBbcGFyYW1zXSBQYXJhbWV0ZXJzIGZvciB0aGUgbWV0aG9kXG4gKiAgQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBbaWRdIE9wdGlvbmFsIGlkLiBJZiB1bmRlZmluZWQgYW4gaWQgd2lsbCBiZSBnZW5lcmF0ZWQuIElmIG51bGwgaXQgY3JlYXRlcyBhIG5vdGlmaWNhdGlvbiByZXF1ZXN0XG4gKiAgQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSBSZXF1ZXN0IGNhbGxiYWNrLiBJZiBzcGVjaWZpZWQsIGV4ZWN1dGVzIHRoZSByZXF1ZXN0IHJhdGhlciB0aGFuIG9ubHkgcmV0dXJuaW5nIGl0LlxuICogIEB0aHJvd3Mge1R5cGVFcnJvcn0gSW52YWxpZCBwYXJhbWV0ZXJzXG4gKiAgQHJldHVybiB7T2JqZWN0fSBKU09OLVJQQyAxLjAgb3IgMi4wIGNvbXBhdGlibGUgcmVxdWVzdFxuICovXG5DbGllbnRCcm93c2VyLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24obWV0aG9kLCBwYXJhbXMsIGlkLCBjYWxsYmFjaykge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgbGV0IHJlcXVlc3QgPSBudWxsO1xuXG4gIC8vIGlzIHRoaXMgYSBiYXRjaCByZXF1ZXN0P1xuICBjb25zdCBpc0JhdGNoID0gQXJyYXkuaXNBcnJheShtZXRob2QpICYmIHR5cGVvZiBwYXJhbXMgPT09ICdmdW5jdGlvbic7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy52ZXJzaW9uID09PSAxICYmIGlzQmF0Y2gpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdKU09OLVJQQyAxLjAgZG9lcyBub3Qgc3VwcG9ydCBiYXRjaGluZycpO1xuICB9XG5cbiAgLy8gaXMgdGhpcyBhIHJhdyByZXF1ZXN0P1xuICBjb25zdCBpc1JhdyA9ICFpc0JhdGNoICYmIG1ldGhvZCAmJiB0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGFyYW1zID09PSAnZnVuY3Rpb24nO1xuXG4gIGlmKGlzQmF0Y2ggfHwgaXNSYXcpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtcztcbiAgICByZXF1ZXN0ID0gbWV0aG9kO1xuICB9IGVsc2Uge1xuICAgIGlmKHR5cGVvZiBpZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBpZDtcbiAgICAgIC8vIHNwZWNpZmljYWxseSB1bmRlZmluZWQgYmVjYXVzZSBcIm51bGxcIiBpcyBhIG5vdGlmaWNhdGlvbiByZXF1ZXN0XG4gICAgICBpZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJztcblxuICAgIHRyeSB7XG4gICAgICByZXF1ZXN0ID0gZ2VuZXJhdGVSZXF1ZXN0KG1ldGhvZCwgcGFyYW1zLCBpZCwge1xuICAgICAgICBnZW5lcmF0b3I6IHRoaXMub3B0aW9ucy5nZW5lcmF0b3IsXG4gICAgICAgIHZlcnNpb246IHRoaXMub3B0aW9ucy52ZXJzaW9uLFxuICAgICAgICBub3RpZmljYXRpb25JZE51bGw6IHRoaXMub3B0aW9ucy5ub3RpZmljYXRpb25JZE51bGwsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgaWYoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuXG4gICAgLy8gbm8gY2FsbGJhY2sgbWVhbnMgd2Ugc2hvdWxkIGp1c3QgcmV0dXJuIGEgcmF3IHJlcXVlc3RcbiAgICBpZighaGFzQ2FsbGJhY2spIHtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxuICB9XG5cbiAgbGV0IG1lc3NhZ2U7XG4gIHRyeSB7XG4gICAgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QsIHRoaXMub3B0aW9ucy5yZXBsYWNlcik7XG4gIH0gY2F0Y2goZXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gIH1cblxuICB0aGlzLmNhbGxTZXJ2ZXIobWVzc2FnZSwgZnVuY3Rpb24oZXJyLCByZXNwb25zZSkge1xuICAgIHNlbGYuX3BhcnNlUmVzcG9uc2UoZXJyLCByZXNwb25zZSwgY2FsbGJhY2spO1xuICB9KTtcblxuICAvLyBhbHdheXMgcmV0dXJuIHRoZSByYXcgcmVxdWVzdFxuICByZXR1cm4gcmVxdWVzdDtcbn07XG5cbi8qKlxuICogUGFyc2VzIGEgcmVzcG9uc2UgZnJvbSBhIHNlcnZlclxuICogQHBhcmFtIHtPYmplY3R9IGVyciBFcnJvciB0byBwYXNzIG9uIHRoYXQgaXMgdW5yZWxhdGVkIHRvIHRoZSBhY3R1YWwgcmVzcG9uc2VcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXNwb25zZVRleHQgSlNPTi1SUEMgMS4wIG9yIDIuMCByZXNwb25zZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdGhhdCB3aWxsIHJlY2VpdmUgZGlmZmVyZW50IGFyZ3VtZW50cyBkZXBlbmRpbmcgb24gdGhlIGFtb3VudCBvZiBwYXJhbWV0ZXJzXG4gKiBAcHJpdmF0ZVxuICovXG5DbGllbnRCcm93c2VyLnByb3RvdHlwZS5fcGFyc2VSZXNwb25zZSA9IGZ1bmN0aW9uKGVyciwgcmVzcG9uc2VUZXh0LCBjYWxsYmFjaykge1xuICBpZihlcnIpIHtcbiAgICBjYWxsYmFjayhlcnIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFyZXNwb25zZVRleHQpIHtcbiAgICAvLyBlbXB0eSByZXNwb25zZSB0ZXh0LCBhc3N1bWUgdGhhdCBpcyBjb3JyZWN0IGJlY2F1c2UgaXQgY291bGQgYmUgYVxuICAgIC8vIG5vdGlmaWNhdGlvbiB3aGljaCBqYXlzb24gZG9lcyBub3QgZ2l2ZSBhbnkgYm9keSBmb3JcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuXG4gIGxldCByZXNwb25zZTtcbiAgdHJ5IHtcbiAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0LCB0aGlzLm9wdGlvbnMucmV2aXZlcik7XG4gIH0gY2F0Y2goZXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gIH1cblxuICBpZihjYWxsYmFjay5sZW5ndGggPT09IDMpIHtcbiAgICAvLyBpZiBjYWxsYmFjayBsZW5ndGggaXMgMywgd2Ugc3BsaXQgY2FsbGJhY2sgYXJndW1lbnRzIG9uIGVycm9yIGFuZCByZXNwb25zZVxuXG4gICAgLy8gaXMgYmF0Y2ggcmVzcG9uc2U/XG4gICAgaWYoQXJyYXkuaXNBcnJheShyZXNwb25zZSkpIHtcblxuICAgICAgLy8gbmVjY2VzYXJ5IHRvIHNwbGl0IHN0cmljdGx5IG9uIHZhbGlkaXR5IGFjY29yZGluZyB0byBzcGVjIGhlcmVcbiAgICAgIGNvbnN0IGlzRXJyb3IgPSBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXMuZXJyb3IgIT09ICd1bmRlZmluZWQnO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaXNOb3RFcnJvciA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgcmV0dXJuICFpc0Vycm9yKHJlcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UuZmlsdGVyKGlzRXJyb3IpLCByZXNwb25zZS5maWx0ZXIoaXNOb3RFcnJvcikpO1xuICAgIFxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vIHNwbGl0IHJlZ2FyZGxlc3Mgb2YgdmFsaWRpdHlcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCByZXNwb25zZS5lcnJvciwgcmVzcG9uc2UucmVzdWx0KTtcbiAgICBcbiAgICB9XG4gIFxuICB9XG5cbiAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpO1xufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/client/browser/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/generateRequest.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/generateRequest.js ***!
  \***************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst uuid = (__webpack_require__(/*! uuid */ \"(ssr)/./node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js\").v4);\n\n/**\n *  Generates a JSON-RPC 1.0 or 2.0 request\n *  @param {String} method Name of method to call\n *  @param {Array|Object} params Array of parameters passed to the method as specified, or an object of parameter names and corresponding value\n *  @param {String|Number|null} [id] Request ID can be a string, number, null for explicit notification or left out for automatic generation\n *  @param {Object} [options]\n *  @param {Number} [options.version=2] JSON-RPC version to use (1 or 2)\n *  @param {Boolean} [options.notificationIdNull=false] When true, version 2 requests will set id to null instead of omitting it\n *  @param {Function} [options.generator] Passed the request, and the options object and is expected to return a request ID\n *  @throws {TypeError} If any of the parameters are invalid\n *  @return {Object} A JSON-RPC 1.0 or 2.0 request\n *  @memberOf Utils\n */\nconst generateRequest = function(method, params, id, options) {\n  if(typeof method !== 'string') {\n    throw new TypeError(method + ' must be a string');\n  }\n\n  options = options || {};\n\n  // check valid version provided\n  const version = typeof options.version === 'number' ? options.version : 2;\n  if (version !== 1 && version !== 2) {\n    throw new TypeError(version + ' must be 1 or 2');\n  }\n\n  const request = {\n    method: method\n  };\n\n  if(version === 2) {\n    request.jsonrpc = '2.0';\n  }\n\n  if(params) {\n    // params given, but invalid?\n    if(typeof params !== 'object' && !Array.isArray(params)) {\n      throw new TypeError(params + ' must be an object, array or omitted');\n    }\n    request.params = params;\n  }\n\n  // if id was left out, generate one (null means explicit notification)\n  if(typeof(id) === 'undefined') {\n    const generator = typeof options.generator === 'function' ? options.generator : function() { return uuid(); };\n    request.id = generator(request, options);\n  } else if (version === 2 && id === null) {\n    // we have a version 2 notification\n    if (options.notificationIdNull) {\n      request.id = null; // id will not be set at all unless option provided\n    }\n  } else {\n    request.id = id;\n  }\n\n  return request;\n};\n\nmodule.exports = generateRequest;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vamF5c29uQDQuMS4zX2J1ZmZlcnV0aWxANC4wLjlfdXRmLTgtdmFsaWRhdGVANS4wLjEwL25vZGVfbW9kdWxlcy9qYXlzb24vbGliL2dlbmVyYXRlUmVxdWVzdC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixhQUFhLHNIQUFrQjs7QUFFL0I7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLGNBQWM7QUFDMUIsWUFBWSxvQkFBb0I7QUFDaEMsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZLFNBQVM7QUFDckIsWUFBWSxVQUFVO0FBQ3RCLGFBQWEsV0FBVztBQUN4QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUdBQWlHO0FBQ2pHO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyIvaG9tZS9hYnViYWtyamltb2gvRGVza3RvcC9Db2RpbmcgU3R1ZmZzL2hhY2thdGhvbi9zZWNyZXQtbmV0d29yay9tZW1lQWlfY29pbl9jcmVhdG9yL2FpLW1lbWUtY29pbi1jcmVhdG9yL25vZGVfbW9kdWxlcy8ucG5wbS9qYXlzb25ANC4xLjNfYnVmZmVydXRpbEA0LjAuOV91dGYtOC12YWxpZGF0ZUA1LjAuMTAvbm9kZV9tb2R1bGVzL2pheXNvbi9saWIvZ2VuZXJhdGVSZXF1ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXVpZCA9IHJlcXVpcmUoJ3V1aWQnKS52NDtcblxuLyoqXG4gKiAgR2VuZXJhdGVzIGEgSlNPTi1SUEMgMS4wIG9yIDIuMCByZXF1ZXN0XG4gKiAgQHBhcmFtIHtTdHJpbmd9IG1ldGhvZCBOYW1lIG9mIG1ldGhvZCB0byBjYWxsXG4gKiAgQHBhcmFtIHtBcnJheXxPYmplY3R9IHBhcmFtcyBBcnJheSBvZiBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGUgbWV0aG9kIGFzIHNwZWNpZmllZCwgb3IgYW4gb2JqZWN0IG9mIHBhcmFtZXRlciBuYW1lcyBhbmQgY29ycmVzcG9uZGluZyB2YWx1ZVxuICogIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxudWxsfSBbaWRdIFJlcXVlc3QgSUQgY2FuIGJlIGEgc3RyaW5nLCBudW1iZXIsIG51bGwgZm9yIGV4cGxpY2l0IG5vdGlmaWNhdGlvbiBvciBsZWZ0IG91dCBmb3IgYXV0b21hdGljIGdlbmVyYXRpb25cbiAqICBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiAgQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZlcnNpb249Ml0gSlNPTi1SUEMgdmVyc2lvbiB0byB1c2UgKDEgb3IgMilcbiAqICBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm5vdGlmaWNhdGlvbklkTnVsbD1mYWxzZV0gV2hlbiB0cnVlLCB2ZXJzaW9uIDIgcmVxdWVzdHMgd2lsbCBzZXQgaWQgdG8gbnVsbCBpbnN0ZWFkIG9mIG9taXR0aW5nIGl0XG4gKiAgQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMuZ2VuZXJhdG9yXSBQYXNzZWQgdGhlIHJlcXVlc3QsIGFuZCB0aGUgb3B0aW9ucyBvYmplY3QgYW5kIGlzIGV4cGVjdGVkIHRvIHJldHVybiBhIHJlcXVlc3QgSURcbiAqICBAdGhyb3dzIHtUeXBlRXJyb3J9IElmIGFueSBvZiB0aGUgcGFyYW1ldGVycyBhcmUgaW52YWxpZFxuICogIEByZXR1cm4ge09iamVjdH0gQSBKU09OLVJQQyAxLjAgb3IgMi4wIHJlcXVlc3RcbiAqICBAbWVtYmVyT2YgVXRpbHNcbiAqL1xuY29uc3QgZ2VuZXJhdGVSZXF1ZXN0ID0gZnVuY3Rpb24obWV0aG9kLCBwYXJhbXMsIGlkLCBvcHRpb25zKSB7XG4gIGlmKHR5cGVvZiBtZXRob2QgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtZXRob2QgKyAnIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIGNoZWNrIHZhbGlkIHZlcnNpb24gcHJvdmlkZWRcbiAgY29uc3QgdmVyc2lvbiA9IHR5cGVvZiBvcHRpb25zLnZlcnNpb24gPT09ICdudW1iZXInID8gb3B0aW9ucy52ZXJzaW9uIDogMjtcbiAgaWYgKHZlcnNpb24gIT09IDEgJiYgdmVyc2lvbiAhPT0gMikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IodmVyc2lvbiArICcgbXVzdCBiZSAxIG9yIDInKTtcbiAgfVxuXG4gIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgbWV0aG9kOiBtZXRob2RcbiAgfTtcblxuICBpZih2ZXJzaW9uID09PSAyKSB7XG4gICAgcmVxdWVzdC5qc29ucnBjID0gJzIuMCc7XG4gIH1cblxuICBpZihwYXJhbXMpIHtcbiAgICAvLyBwYXJhbXMgZ2l2ZW4sIGJ1dCBpbnZhbGlkP1xuICAgIGlmKHR5cGVvZiBwYXJhbXMgIT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHBhcmFtcykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IocGFyYW1zICsgJyBtdXN0IGJlIGFuIG9iamVjdCwgYXJyYXkgb3Igb21pdHRlZCcpO1xuICAgIH1cbiAgICByZXF1ZXN0LnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIC8vIGlmIGlkIHdhcyBsZWZ0IG91dCwgZ2VuZXJhdGUgb25lIChudWxsIG1lYW5zIGV4cGxpY2l0IG5vdGlmaWNhdGlvbilcbiAgaWYodHlwZW9mKGlkKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBnZW5lcmF0b3IgPSB0eXBlb2Ygb3B0aW9ucy5nZW5lcmF0b3IgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmdlbmVyYXRvciA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdXVpZCgpOyB9O1xuICAgIHJlcXVlc3QuaWQgPSBnZW5lcmF0b3IocmVxdWVzdCwgb3B0aW9ucyk7XG4gIH0gZWxzZSBpZiAodmVyc2lvbiA9PT0gMiAmJiBpZCA9PT0gbnVsbCkge1xuICAgIC8vIHdlIGhhdmUgYSB2ZXJzaW9uIDIgbm90aWZpY2F0aW9uXG4gICAgaWYgKG9wdGlvbnMubm90aWZpY2F0aW9uSWROdWxsKSB7XG4gICAgICByZXF1ZXN0LmlkID0gbnVsbDsgLy8gaWQgd2lsbCBub3QgYmUgc2V0IGF0IGFsbCB1bmxlc3Mgb3B0aW9uIHByb3ZpZGVkXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcXVlc3QuaWQgPSBpZDtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZVJlcXVlc3Q7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/jayson@4.1.3_bufferutil@4.0.9_utf-8-validate@5.0.10/node_modules/jayson/lib/generateRequest.js\n");

/***/ })

};
;