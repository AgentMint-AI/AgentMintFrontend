module.exports = {

"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderURLSearchParams = exports.fetchStreamingRequest = exports.fetchReq = exports.replacer = exports.b64Decode = exports.b64Encode = void 0;
/**
 * base64 encoder and decoder
 * Copied and adapted from https://github.com/protobufjs/protobuf.js/blob/master/lib/base64/index.js
 */ // Base64 encoding table
const b64 = new Array(64);
// Base64 decoding table
const s64 = new Array(123);
// 65..90, 97..122, 48..57, 43, 47
for(let i = 0; i < 64;)s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
function b64Encode(buffer, start, end) {
    let parts = null;
    const chunk = [];
    let i = 0, j = 0, t; // temporary
    while(start < end){
        const b = buffer[start++];
        switch(j){
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1) chunk[i++] = 61;
    }
    if (parts) {
        if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
}
exports.b64Encode = b64Encode;
const invalidEncoding = "invalid encoding";
function b64Decode(s) {
    const buffer = [];
    let offset = 0;
    let j = 0, t; // temporary
    for(let i = 0; i < s.length;){
        let c = s.charCodeAt(i++);
        if (c === 61 && j > 1) break;
        if ((c = s64[c]) === undefined) throw Error(invalidEncoding);
        switch(j){
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1) throw Error(invalidEncoding);
    return new Uint8Array(buffer);
}
exports.b64Decode = b64Decode;
function b64Test(s) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(s);
}
function replacer(key, value) {
    if (value && value.constructor === Uint8Array) {
        return b64Encode(value, 0, value.length);
    }
    return value;
}
exports.replacer = replacer;
function fetchReq(path, init) {
    const _a = init || {}, { pathPrefix } = _a, req = __rest(_a, [
        "pathPrefix"
    ]);
    const url = pathPrefix ? `${pathPrefix}${path}` : path;
    return fetch(url, req).then((r)=>r.json().then((body)=>{
            if (!r.ok) {
                throw body;
            }
            return body;
        }));
}
exports.fetchReq = fetchReq;
/**
 * fetchStreamingRequest is able to handle grpc-gateway server side streaming call
 * it takes NotifyStreamEntityArrival that lets users respond to entity arrival during the call
 * all entities will be returned as an array after the call finishes.
 **/ function fetchStreamingRequest(path, callback, init) {
    return __awaiter(this, void 0, void 0, function*() {
        const _a = init || {}, { pathPrefix } = _a, req = __rest(_a, [
            "pathPrefix"
        ]);
        const url = pathPrefix ? `${pathPrefix}${path}` : path;
        const result = yield fetch(url, req);
        // needs to use the .ok to check the status of HTTP status code
        // http other than 200 will not throw an error, instead the .ok will become false.
        // see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#
        if (!result.ok) {
            const resp = yield result.json();
            const errMsg = resp.error && resp.error.message ? resp.error.message : "";
            throw new Error(errMsg);
        }
        if (!result.body) {
            throw new Error("response doesnt have a body");
        }
        yield result.body.pipeThrough(new TextDecoderStream()).pipeThrough(getNewLineDelimitedJSONDecodingStream()).pipeTo(getNotifyEntityArrivalSink((e)=>{
            if (callback) {
                callback(e);
            }
        }));
        // wait for the streaming to finish and return the success respond
        return;
    });
}
exports.fetchStreamingRequest = fetchStreamingRequest;
/**
 * getNewLineDelimitedJSONDecodingStream returns a TransformStream that's able to handle new line delimited json stream content into parsed entities
 */ function getNewLineDelimitedJSONDecodingStream() {
    return new TransformStream({
        start (controller) {
            controller.buf = '';
            controller.pos = 0;
        },
        transform (chunk, controller) {
            if (controller.buf === undefined) {
                controller.buf = '';
            }
            if (controller.pos === undefined) {
                controller.pos = 0;
            }
            controller.buf += chunk;
            while(controller.pos < controller.buf.length){
                if (controller.buf[controller.pos] === '\n') {
                    const line = controller.buf.substring(0, controller.pos);
                    const response = JSON.parse(line);
                    controller.enqueue(response.result);
                    controller.buf = controller.buf.substring(controller.pos + 1);
                    controller.pos = 0;
                } else {
                    ++controller.pos;
                }
            }
        }
    });
}
/**
 * getNotifyEntityArrivalSink takes the NotifyStreamEntityArrival callback and return
 * a sink that will call the callback on entity arrival
 * @param notifyCallback
 */ function getNotifyEntityArrivalSink(notifyCallback) {
    return new WritableStream({
        write (entity) {
            notifyCallback(entity);
        }
    });
}
/**
 * Checks if given value is a plain object
 * Logic copied and adapted from below source:
 * https://github.com/char0n/ramda-adjunct/blob/master/src/isPlainObj.js
 * @param  {unknown} value
 * @return {boolean}
 */ function isPlainObject(value) {
    const isObject = Object.prototype.toString.call(value).slice(8, -1) === "Object";
    const isObjLike = value !== null && isObject;
    if (!isObjLike || !isObject) {
        return false;
    }
    const proto = Object.getPrototypeOf(value);
    const hasObjectConstructor = typeof proto === "object" && proto.constructor === Object.prototype.constructor;
    return hasObjectConstructor;
}
/**
 * Checks if given value is of a primitive type
 * @param  {unknown} value
 * @return {boolean}
 */ function isPrimitive(value) {
    return [
        "string",
        "number",
        "boolean"
    ].some((t)=>typeof value === t);
}
/**
 * Checks if given primitive is zero-value
 * @param  {Primitive} value
 * @return {boolean}
 */ function isZeroValuePrimitive(value) {
    return value === false || value === 0 || value === "";
}
/**
 * Flattens a deeply nested request payload and returns an object
 * with only primitive values and non-empty array of primitive values
 * as per https://github.com/googleapis/googleapis/blob/master/google/api/http.proto
 * @param  {RequestPayload} requestPayload
 * @param  {String} path
 * @return {FlattenedRequestPayload>}
 */ function flattenRequestPayload(requestPayload, path = "") {
    return Object.keys(requestPayload).reduce((acc, key)=>{
        const value = requestPayload[key];
        const newPath = path ? [
            path,
            key
        ].join(".") : key;
        const isNonEmptyPrimitiveArray = Array.isArray(value) && value.every((v)=>isPrimitive(v)) && value.length > 0;
        const isNonZeroValuePrimitive = isPrimitive(value) && !isZeroValuePrimitive(value);
        let objectToMerge = {};
        if (isPlainObject(value)) {
            objectToMerge = flattenRequestPayload(value, newPath);
        } else if (value && value.constructor === Uint8Array) {
            objectToMerge = {
                [newPath]: b64Encode(value, 0, value.length)
            };
        } else if (isNonZeroValuePrimitive || isNonEmptyPrimitiveArray) {
            objectToMerge = {
                [newPath]: value
            };
        }
        return Object.assign(Object.assign({}, acc), objectToMerge);
    }, {});
}
/**
 * Renders a deeply nested request payload into a string of URL search
 * parameters by first flattening the request payload and then removing keys
 * which are already present in the URL path.
 * @param  {RequestPayload} requestPayload
 * @param  {string[]} urlPathParams
 * @return {string}
 */ function renderURLSearchParams(requestPayload, urlPathParams = []) {
    const flattenedRequestPayload = flattenRequestPayload(requestPayload);
    const urlSearchParams = Object.keys(flattenedRequestPayload).reduce((acc, key)=>{
        // key should not be present in the url path as a parameter
        const value = flattenedRequestPayload[key];
        if (urlPathParams.find((f)=>f === key)) {
            return acc;
        }
        return Array.isArray(value) ? [
            ...acc,
            ...value.map((m)=>[
                    key,
                    m.toString()
                ])
        ] : acc = [
            ...acc,
            [
                key,
                value.toString()
            ]
        ];
    }, []);
    // react-native's URLSearchParams doesn't like working with array of arrays
    return urlSearchParams.map((x)=>new URLSearchParams({
            [x[0]]: x[1]
        }).toString()).join("&");
}
exports.renderURLSearchParams = renderURLSearchParams; //# sourceMappingURL=fetch.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/secret/registration/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static TxKey(req, initReq) {
        return fm.fetchReq(`/registration/v1beta1/tx-key?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static RegistrationKey(req, initReq) {
        return fm.fetchReq(`/registration/v1beta1/registration-key?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static EncryptedSeed(req, initReq) {
        return fm.fetchReq(`/registration/v1beta1/encrypted-seed/${req["pub_key"]}?${fm.renderURLSearchParams(req, [
            "pub_key"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/app/v1alpha1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Config(req, initReq) {
        return fm.fetchReq(`/cosmos.app.v1alpha1.Query/Config`, Object.assign(Object.assign({}, initReq), {
            method: "POST",
            body: JSON.stringify(req, fm.replacer)
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/auth/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Accounts(req, initReq) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/accounts?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Account(req, initReq) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/accounts/${req["address"]}?${fm.renderURLSearchParams(req, [
            "address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static AccountAddressByID(req, initReq) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/address_by_id/${req["id"]}?${fm.renderURLSearchParams(req, [
            "id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ModuleAccounts(req, initReq) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/module_accounts?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ModuleAccountByName(req, initReq) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/module_accounts/${req["name"]}?${fm.renderURLSearchParams(req, [
            "name"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Bech32Prefix(req, initReq) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static AddressBytesToString(req, initReq) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${req["address_bytes"]}?${fm.renderURLSearchParams(req, [
            "address_bytes"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static AddressStringToBytes(req, initReq) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/bech32/${req["address_string"]}?${fm.renderURLSearchParams(req, [
            "address_string"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static AccountInfo(req, initReq) {
        return fm.fetchReq(`/cosmos/auth/v1beta1/account_info/${req["address"]}?${fm.renderURLSearchParams(req, [
            "address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/authz/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Grants(req, initReq) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static GranterGrants(req, initReq) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants/granter/${req["granter"]}?${fm.renderURLSearchParams(req, [
            "granter"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static GranteeGrants(req, initReq) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants/grantee/${req["grantee"]}?${fm.renderURLSearchParams(req, [
            "grantee"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/autocli/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static AppOptions(req, initReq) {
        return fm.fetchReq(`/cosmos.autocli.v1.Query/AppOptions`, Object.assign(Object.assign({}, initReq), {
            method: "POST",
            body: JSON.stringify(req, fm.replacer)
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/bank/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Balance(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${req["address"]}/by_denom?${fm.renderURLSearchParams(req, [
            "address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static AllBalances(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/balances/${req["address"]}?${fm.renderURLSearchParams(req, [
            "address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static SpendableBalances(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/spendable_balances/${req["address"]}?${fm.renderURLSearchParams(req, [
            "address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static SpendableBalanceByDenom(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/spendable_balances/${req["address"]}/by_denom?${fm.renderURLSearchParams(req, [
            "address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static TotalSupply(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/supply?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static SupplyOf(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/supply/by_denom?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DenomMetadata(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata/${req["denom"]}?${fm.renderURLSearchParams(req, [
            "denom"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DenomMetadataByQueryString(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata_by_query_string?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DenomsMetadata(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/denoms_metadata?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DenomOwners(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/denom_owners/${req["denom"]}?${fm.renderURLSearchParams(req, [
            "denom"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DenomOwnersByQuery(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/denom_owners_by_query?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static SendEnabled(req, initReq) {
        return fm.fetchReq(`/cosmos/bank/v1beta1/send_enabled?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/secret/compute/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static ContractInfo(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/info/${req["contract_address"]}?${fm.renderURLSearchParams(req, [
            "contract_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ContractsByCodeId(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/contracts/${req["code_id"]}?${fm.renderURLSearchParams(req, [
            "code_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static QuerySecretContract(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/query/${req["contract_address"]}?${fm.renderURLSearchParams(req, [
            "contract_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Code(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/code/${req["code_id"]}?${fm.renderURLSearchParams(req, [
            "code_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Codes(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/codes?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static CodeHashByContractAddress(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/code_hash/by_contract_address/${req["contract_address"]}?${fm.renderURLSearchParams(req, [
            "contract_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static CodeHashByCodeId(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/code_hash/by_code_id/${req["code_id"]}?${fm.renderURLSearchParams(req, [
            "code_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static LabelByAddress(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/label/${req["contract_address"]}?${fm.renderURLSearchParams(req, [
            "contract_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static AddressByLabel(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/contract_address/${req["label"]}?${fm.renderURLSearchParams(req, [
            "label"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ContractHistory(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/contract_history/${req["contract_address"]}?${fm.renderURLSearchParams(req, [
            "contract_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/consensus/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/consensus/v1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/distribution/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ValidatorDistributionInfo(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${req["validator_address"]}?${fm.renderURLSearchParams(req, [
            "validator_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ValidatorOutstandingRewards(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${req["validator_address"]}/outstanding_rewards?${fm.renderURLSearchParams(req, [
            "validator_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ValidatorCommission(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${req["validator_address"]}/commission?${fm.renderURLSearchParams(req, [
            "validator_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ValidatorSlashes(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${req["validator_address"]}/slashes?${fm.renderURLSearchParams(req, [
            "validator_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DelegationRewards(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/rewards/${req["validator_address"]}?${fm.renderURLSearchParams(req, [
            "delegator_address",
            "validator_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DelegationTotalRewards(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/rewards?${fm.renderURLSearchParams(req, [
            "delegator_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DelegatorValidators(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/validators?${fm.renderURLSearchParams(req, [
            "delegator_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DelegatorWithdrawAddress(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/withdraw_address?${fm.renderURLSearchParams(req, [
            "delegator_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static CommunityPool(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/community_pool?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static FoundationTax(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/foundation_tax?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static RestakeThreshold(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/restake_threshold?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static RestakingEntries(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/restake_entries?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/secret/emergencybutton/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Params(req, initReq) {
        return fm.fetchReq(`/emergencybutton/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/evidence/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Evidence(req, initReq) {
        return fm.fetchReq(`/cosmos/evidence/v1beta1/evidence/${req["hash"]}?${fm.renderURLSearchParams(req, [
            "hash"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static AllEvidence(req, initReq) {
        return fm.fetchReq(`/cosmos/evidence/v1beta1/evidence?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/feegrant/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Allowance(req, initReq) {
        return fm.fetchReq(`/cosmos/feegrant/v1beta1/allowance/${req["granter"]}/${req["grantee"]}?${fm.renderURLSearchParams(req, [
            "granter",
            "grantee"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Allowances(req, initReq) {
        return fm.fetchReq(`/cosmos/feegrant/v1beta1/allowances/${req["grantee"]}?${fm.renderURLSearchParams(req, [
            "grantee"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static AllowancesByGranter(req, initReq) {
        return fm.fetchReq(`/cosmos/feegrant/v1beta1/issued/${req["granter"]}?${fm.renderURLSearchParams(req, [
            "granter"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/gov/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Proposal(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}?${fm.renderURLSearchParams(req, [
            "proposal_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Proposals(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Vote(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/votes/${req["voter"]}?${fm.renderURLSearchParams(req, [
            "proposal_id",
            "voter"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Votes(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/votes?${fm.renderURLSearchParams(req, [
            "proposal_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/params/${req["params_type"]}?${fm.renderURLSearchParams(req, [
            "params_type"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Deposit(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/deposits/${req["depositor"]}?${fm.renderURLSearchParams(req, [
            "proposal_id",
            "depositor"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Deposits(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/deposits?${fm.renderURLSearchParams(req, [
            "proposal_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static TallyResult(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/tally?${fm.renderURLSearchParams(req, [
            "proposal_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/gov/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Constitution(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1/constitution?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Proposal(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1/proposals/${req["proposal_id"]}?${fm.renderURLSearchParams(req, [
            "proposal_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Proposals(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1/proposals?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Vote(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1/proposals/${req["proposal_id"]}/votes/${req["voter"]}?${fm.renderURLSearchParams(req, [
            "proposal_id",
            "voter"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Votes(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1/proposals/${req["proposal_id"]}/votes?${fm.renderURLSearchParams(req, [
            "proposal_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1/params/${req["params_type"]}?${fm.renderURLSearchParams(req, [
            "params_type"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Deposit(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1/proposals/${req["proposal_id"]}/deposits/${req["depositor"]}?${fm.renderURLSearchParams(req, [
            "proposal_id",
            "depositor"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Deposits(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1/proposals/${req["proposal_id"]}/deposits?${fm.renderURLSearchParams(req, [
            "proposal_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static TallyResult(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1/proposals/${req["proposal_id"]}/tally?${fm.renderURLSearchParams(req, [
            "proposal_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/core/channel/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Channel(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Channels(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ConnectionChannels(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/connections/${req["connection"]}/channels?${fm.renderURLSearchParams(req, [
            "connection"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ChannelClientState(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/client_state?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ChannelConsensusState(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/consensus_state/revision/${req["revision_number"]}/height/${req["revision_height"]}?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id",
            "revision_number",
            "revision_height"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static PacketCommitment(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_commitments/${req["sequence"]}?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id",
            "sequence"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static PacketCommitments(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_commitments?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static PacketReceipt(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_receipts/${req["sequence"]}?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id",
            "sequence"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static PacketAcknowledgement(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_acks/${req["sequence"]}?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id",
            "sequence"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static PacketAcknowledgements(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_acknowledgements?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static UnreceivedPackets(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_commitments/${req["packet_commitment_sequences"]}/unreceived_packets?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id",
            "packet_commitment_sequences"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static UnreceivedAcks(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_commitments/${req["packet_ack_sequences"]}/unreceived_acks?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id",
            "packet_ack_sequences"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static NextSequenceReceive(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/next_sequence?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static NextSequenceSend(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/next_sequence_send?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static UpgradeError(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/upgrade_error?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Upgrade(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/upgrade?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ChannelParams(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/core/client/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static ClientState(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/client_states/${req["client_id"]}?${fm.renderURLSearchParams(req, [
            "client_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ClientStates(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/client_states?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ConsensusState(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${req["client_id"]}/revision/${req["revision_number"]}/height/${req["revision_height"]}?${fm.renderURLSearchParams(req, [
            "client_id",
            "revision_number",
            "revision_height"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ConsensusStates(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${req["client_id"]}?${fm.renderURLSearchParams(req, [
            "client_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ConsensusStateHeights(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${req["client_id"]}/heights?${fm.renderURLSearchParams(req, [
            "client_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ClientStatus(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/client_status/${req["client_id"]}?${fm.renderURLSearchParams(req, [
            "client_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ClientParams(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static UpgradedClientState(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/upgraded_client_states?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static UpgradedConsensusState(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/upgraded_consensus_states?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/core/connection/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Connection(req, initReq) {
        return fm.fetchReq(`/ibc/core/connection/v1/connections/${req["connection_id"]}?${fm.renderURLSearchParams(req, [
            "connection_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Connections(req, initReq) {
        return fm.fetchReq(`/ibc/core/connection/v1/connections?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ClientConnections(req, initReq) {
        return fm.fetchReq(`/ibc/core/connection/v1/client_connections/${req["client_id"]}?${fm.renderURLSearchParams(req, [
            "client_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ConnectionClientState(req, initReq) {
        return fm.fetchReq(`/ibc/core/connection/v1/connections/${req["connection_id"]}/client_state?${fm.renderURLSearchParams(req, [
            "connection_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ConnectionConsensusState(req, initReq) {
        return fm.fetchReq(`/ibc/core/connection/v1/connections/${req["connection_id"]}/consensus_state/revision/${req["revision_number"]}/height/${req["revision_height"]}?${fm.renderURLSearchParams(req, [
            "connection_id",
            "revision_number",
            "revision_height"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ConnectionParams(req, initReq) {
        return fm.fetchReq(`/ibc/core/connection/v1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/applications/fee/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static IncentivizedPackets(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/incentivized_packets?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static IncentivizedPacket(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["packet_id.channel_id"]}/ports/${req["packet_id.port_id"]}/sequences/${req["packet_id.sequence"]}/incentivized_packet?${fm.renderURLSearchParams(req, [
            "packet_id.channel_id",
            "packet_id.port_id",
            "packet_id.sequence"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static IncentivizedPacketsForChannel(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/incentivized_packets?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static TotalRecvFees(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["packet_id.channel_id"]}/ports/${req["packet_id.port_id"]}/sequences/${req["packet_id.sequence"]}/total_recv_fees?${fm.renderURLSearchParams(req, [
            "packet_id.channel_id",
            "packet_id.port_id",
            "packet_id.sequence"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static TotalAckFees(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["packet_id.channel_id"]}/ports/${req["packet_id.port_id"]}/sequences/${req["packet_id.sequence"]}/total_ack_fees?${fm.renderURLSearchParams(req, [
            "packet_id.channel_id",
            "packet_id.port_id",
            "packet_id.sequence"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static TotalTimeoutFees(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["packet_id.channel_id"]}/ports/${req["packet_id.port_id"]}/sequences/${req["packet_id.sequence"]}/total_timeout_fees?${fm.renderURLSearchParams(req, [
            "packet_id.channel_id",
            "packet_id.port_id",
            "packet_id.sequence"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Payee(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["channel_id"]}/relayers/${req["relayer"]}/payee?${fm.renderURLSearchParams(req, [
            "channel_id",
            "relayer"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static CounterpartyPayee(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["channel_id"]}/relayers/${req["relayer"]}/counterparty_payee?${fm.renderURLSearchParams(req, [
            "channel_id",
            "relayer"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static FeeEnabledChannels(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/fee_enabled?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static FeeEnabledChannel(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/fee_enabled?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/applications/interchain_accounts/controller/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static InterchainAccount(req, initReq) {
        return fm.fetchReq(`/ibc/apps/interchain_accounts/controller/v1/owners/${req["owner"]}/connections/${req["connection_id"]}?${fm.renderURLSearchParams(req, [
            "owner",
            "connection_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Params(req, initReq) {
        return fm.fetchReq(`/ibc/apps/interchain_accounts/controller/v1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/applications/interchain_accounts/host/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Params(req, initReq) {
        return fm.fetchReq(`/ibc/apps/interchain_accounts/host/v1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc-apps/packetforward/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Params(req, initReq) {
        return fm.fetchReq(`/ibc/apps/packetforward/v1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/applications/transfer/v1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static DenomTraces(req, initReq) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/denom_traces?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DenomTrace(req, initReq) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/denom_traces/${req["hash=**"]}?${fm.renderURLSearchParams(req, [
            "hash=**"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Params(req, initReq) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DenomHash(req, initReq) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/denom_hashes/${req["trace=**"]}?${fm.renderURLSearchParams(req, [
            "trace=**"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static EscrowAddress(req, initReq) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/escrow_address?${fm.renderURLSearchParams(req, [
            "channel_id",
            "port_id"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static TotalEscrowForDenom(req, initReq) {
        return fm.fetchReq(`/ibc/apps/transfer/v1/denoms/${req["denom=**"]}/total_escrow?${fm.renderURLSearchParams(req, [
            "denom=**"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/mint/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/mint/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Inflation(req, initReq) {
        return fm.fetchReq(`/cosmos/mint/v1beta1/inflation?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static AnnualProvisions(req, initReq) {
        return fm.fetchReq(`/cosmos/mint/v1beta1/annual_provisions?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/base/node/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Service = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Service {
    static Config(req, initReq) {
        return fm.fetchReq(`/cosmos/base/node/v1beta1/config?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Status(req, initReq) {
        return fm.fetchReq(`/cosmos/base/node/v1beta1/status?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Service = Service; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/orm/query/v1alpha1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Get(req, initReq) {
        return fm.fetchReq(`/cosmos.orm.query.v1alpha1.Query/Get`, Object.assign(Object.assign({}, initReq), {
            method: "POST",
            body: JSON.stringify(req, fm.replacer)
        }));
    }
    static List(req, initReq) {
        return fm.fetchReq(`/cosmos.orm.query.v1alpha1.Query/List`, Object.assign(Object.assign({}, initReq), {
            method: "POST",
            body: JSON.stringify(req, fm.replacer)
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/params/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/params/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Subspaces(req, initReq) {
        return fm.fetchReq(`/cosmos/params/v1beta1/subspaces?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/slashing/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/slashing/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static SigningInfo(req, initReq) {
        return fm.fetchReq(`/cosmos/slashing/v1beta1/signing_infos/${req["cons_address"]}?${fm.renderURLSearchParams(req, [
            "cons_address"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static SigningInfos(req, initReq) {
        return fm.fetchReq(`/cosmos/slashing/v1beta1/signing_infos?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/staking/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static Validators(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Validator(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${req["validator_addr"]}?${fm.renderURLSearchParams(req, [
            "validator_addr"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ValidatorDelegations(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${req["validator_addr"]}/delegations?${fm.renderURLSearchParams(req, [
            "validator_addr"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ValidatorUnbondingDelegations(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${req["validator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams(req, [
            "validator_addr"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Delegation(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${req["validator_addr"]}/delegations/${req["delegator_addr"]}?${fm.renderURLSearchParams(req, [
            "validator_addr",
            "delegator_addr"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static UnbondingDelegation(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${req["validator_addr"]}/delegations/${req["delegator_addr"]}/unbonding_delegation?${fm.renderURLSearchParams(req, [
            "validator_addr",
            "delegator_addr"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DelegatorDelegations(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegations/${req["delegator_addr"]}?${fm.renderURLSearchParams(req, [
            "delegator_addr"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DelegatorUnbondingDelegations(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${req["delegator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams(req, [
            "delegator_addr"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Redelegations(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${req["delegator_addr"]}/redelegations?${fm.renderURLSearchParams(req, [
            "delegator_addr"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DelegatorValidators(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${req["delegator_addr"]}/validators?${fm.renderURLSearchParams(req, [
            "delegator_addr"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static DelegatorValidator(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${req["delegator_addr"]}/validators/${req["validator_addr"]}?${fm.renderURLSearchParams(req, [
            "delegator_addr",
            "validator_addr"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static HistoricalInfo(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/historical_info/${req["height"]}?${fm.renderURLSearchParams(req, [
            "height"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Pool(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/pool?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/base/tendermint/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Service = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Service {
    static GetNodeInfo(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/node_info?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static GetSyncing(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/syncing?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static GetLatestBlock(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/blocks/latest?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static GetBlockByHeight(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/blocks/${req["height"]}?${fm.renderURLSearchParams(req, [
            "height"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static GetLatestValidatorSet(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/validatorsets/latest?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static GetValidatorSetByHeight(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/validatorsets/${req["height"]}?${fm.renderURLSearchParams(req, [
            "height"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ABCIQuery(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/abci_query?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Service = Service; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/upgrade/v1beta1/query.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Query = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
class Query {
    static CurrentPlan(req, initReq) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/current_plan?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static AppliedPlan(req, initReq) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/applied_plan/${req["name"]}?${fm.renderURLSearchParams(req, [
            "name"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static UpgradedConsensusState(req, initReq) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/upgraded_consensus_state/${req["last_height"]}?${fm.renderURLSearchParams(req, [
            "last_height"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static ModuleVersions(req, initReq) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/module_versions?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static Authority(req, initReq) {
        return fm.fetchReq(`/cosmos/upgrade/v1beta1/authority?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
}
exports.Query = Query; //# sourceMappingURL=query.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/tx/v1beta1/service.pb.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
/* eslint-disable */ // @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/ var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Service = exports.BroadcastMode = exports.OrderBy = void 0;
const fm = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/fetch.pb.js [app-ssr] (ecmascript)"));
var OrderBy;
(function(OrderBy) {
    OrderBy["ORDER_BY_UNSPECIFIED"] = "ORDER_BY_UNSPECIFIED";
    OrderBy["ORDER_BY_ASC"] = "ORDER_BY_ASC";
    OrderBy["ORDER_BY_DESC"] = "ORDER_BY_DESC";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
var BroadcastMode;
(function(BroadcastMode) {
    BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = "BROADCAST_MODE_UNSPECIFIED";
    BroadcastMode["BROADCAST_MODE_BLOCK"] = "BROADCAST_MODE_BLOCK";
    BroadcastMode["BROADCAST_MODE_SYNC"] = "BROADCAST_MODE_SYNC";
    BroadcastMode["BROADCAST_MODE_ASYNC"] = "BROADCAST_MODE_ASYNC";
})(BroadcastMode = exports.BroadcastMode || (exports.BroadcastMode = {}));
class Service {
    static Simulate(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/simulate`, Object.assign(Object.assign({}, initReq), {
            method: "POST",
            body: JSON.stringify(req, fm.replacer)
        }));
    }
    static GetTx(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs/${req["hash"]}?${fm.renderURLSearchParams(req, [
            "hash"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static BroadcastTx(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs`, Object.assign(Object.assign({}, initReq), {
            method: "POST",
            body: JSON.stringify(req, fm.replacer)
        }));
    }
    static GetTxsEvent(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static GetBlockWithTxs(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs/block/${req["height"]}?${fm.renderURLSearchParams(req, [
            "height"
        ])}`, Object.assign(Object.assign({}, initReq), {
            method: "GET"
        }));
    }
    static TxDecode(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/decode`, Object.assign(Object.assign({}, initReq), {
            method: "POST",
            body: JSON.stringify(req, fm.replacer)
        }));
    }
    static TxEncode(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/encode`, Object.assign(Object.assign({}, initReq), {
            method: "POST",
            body: JSON.stringify(req, fm.replacer)
        }));
    }
    static TxEncodeAmino(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/encode/amino`, Object.assign(Object.assign({}, initReq), {
            method: "POST",
            body: JSON.stringify(req, fm.replacer)
        }));
    }
    static TxDecodeAmino(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/decode/amino`, Object.assign(Object.assign({}, initReq), {
            method: "POST",
            body: JSON.stringify(req, fm.replacer)
        }));
    }
}
exports.Service = Service; //# sourceMappingURL=service.pb.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/encryption.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EncryptionUtilsImpl = void 0;
const encoding_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)");
const hkdf_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.0.0/node_modules/@noble/hashes/hkdf.js [app-ssr] (ecmascript)");
const sha256_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.0.0/node_modules/@noble/hashes/sha256.js [app-ssr] (ecmascript)");
const curve25519_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/curve25519-js@0.0.4/node_modules/curve25519-js/lib/index.js [app-ssr] (ecmascript)");
const miscreant = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/miscreant@0.3.2/node_modules/miscreant/release/index.js [app-ssr] (ecmascript)"));
const secure_random_1 = __importDefault(__turbopack_require__("[project]/node_modules/.pnpm/secure-random@1.1.2/node_modules/secure-random/lib/secure-random.js [app-ssr] (ecmascript)"));
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/secret/registration/v1beta1/query.pb.js [app-ssr] (ecmascript)");
const cryptoProvider = new miscreant.PolyfillCryptoProvider();
const hkdfSalt = (0, encoding_1.fromHex)("000000000000000000024bead8df69990852c202db0e0097c1a12ea637d7e96d");
const mainnetConsensusIoPubKey = (0, encoding_1.fromBase64)("79++5YOHfm0SwhlpUDClv7cuCjq9xBZlWqSjDJWkRG8=");
const mainnetChainIds = new Set([
    "secret-2",
    "secret-3",
    "secret-4"
]);
class EncryptionUtilsImpl {
    constructor(url, seed, chainId){
        this.url = url;
        this.consensusIoPubKey = new Uint8Array(); // cache
        if (!seed) {
            this.seed = EncryptionUtilsImpl.GenerateNewSeed();
        } else {
            if (seed.length !== 32) {
                throw new Error("encryptionSeed must be a Uint8Array of length 32");
            }
            this.seed = seed;
        }
        const { privkey, pubkey } = EncryptionUtilsImpl.GenerateNewKeyPairFromSeed(this.seed);
        this.privkey = privkey;
        this.pubkey = pubkey;
        // todo: add this again post upgrade
        if (chainId && mainnetChainIds.has(chainId)) {
            // Major speedup
            // TODO: not sure if this is the best approach for detecting mainnet
            this.consensusIoPubKey = mainnetConsensusIoPubKey;
        }
    }
    static GenerateNewKeyPair() {
        return EncryptionUtilsImpl.GenerateNewKeyPairFromSeed(EncryptionUtilsImpl.GenerateNewSeed());
    }
    static GenerateNewSeed() {
        return (0, secure_random_1.default)(32, {
            type: "Uint8Array"
        });
    }
    static GenerateNewKeyPairFromSeed(seed) {
        const { private: privkey, public: pubkey } = (0, curve25519_js_1.generateKeyPair)(seed);
        return {
            privkey,
            pubkey
        };
    }
    getConsensusIoPubKey() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.consensusIoPubKey.length === 32) {
                return this.consensusIoPubKey;
            }
            const { key } = yield query_pb_1.Query.TxKey({}, {
                pathPrefix: this.url
            });
            this.consensusIoPubKey = (0, encoding_1.fromBase64)(key);
            return this.consensusIoPubKey;
        });
    }
    getTxEncryptionKey(nonce) {
        return __awaiter(this, void 0, void 0, function*() {
            const consensusIoPubKey = yield this.getConsensusIoPubKey();
            const txEncryptionIkm = (0, curve25519_js_1.sharedKey)(this.privkey, consensusIoPubKey);
            const txEncryptionKey = (0, hkdf_1.hkdf)(sha256_1.sha256, Uint8Array.from([
                ...txEncryptionIkm,
                ...nonce
            ]), hkdfSalt, "", 32);
            return txEncryptionKey;
        });
    }
    encrypt(contractCodeHash, msg) {
        return __awaiter(this, void 0, void 0, function*() {
            const nonce = (0, secure_random_1.default)(32, {
                type: "Uint8Array"
            });
            const txEncryptionKey = yield this.getTxEncryptionKey(nonce);
            const siv = yield miscreant.SIV.importKey(txEncryptionKey, "AES-SIV", cryptoProvider);
            const plaintext = (0, encoding_1.toUtf8)(contractCodeHash + JSON.stringify(msg));
            const ciphertext = yield siv.seal(plaintext, [
                new Uint8Array()
            ]);
            // ciphertext = nonce(32) || wallet_pubkey(32) || ciphertext
            return Uint8Array.from([
                ...nonce,
                ...this.pubkey,
                ...ciphertext
            ]);
        });
    }
    decrypt(ciphertext, nonce) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(ciphertext === null || ciphertext === void 0 ? void 0 : ciphertext.length)) {
                return new Uint8Array();
            }
            const txEncryptionKey = yield this.getTxEncryptionKey(nonce);
            const siv = yield miscreant.SIV.importKey(txEncryptionKey, "AES-SIV", cryptoProvider);
            const plaintext = yield siv.open(ciphertext, [
                new Uint8Array()
            ]);
            return plaintext;
        });
    }
    getPubkey() {
        return Promise.resolve(this.pubkey);
    }
}
exports.EncryptionUtilsImpl = EncryptionUtilsImpl; //# sourceMappingURL=encryption.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/app.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/app/v1alpha1/query.pb.js [app-ssr] (ecmascript)");
class AppQuerier {
    constructor(url){
        this.url = url;
    }
    config(req, headers) {
        return query_pb_1.Query.Config(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.AppQuerier = AppQuerier; //# sourceMappingURL=app.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/auth.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
// For future wanderers:
// This file is written manually with a few goals in mind:
// 1. Proxy the auto-generated QueryClientImpl from "src/protobuf/cosmos/auth/v1beta1/query.tx" (See the "scripts/generate_protobuf.sh" script)
// 2. Convert the "account: Any" in the underlying types to the acctual account type
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/auth/v1beta1/query.pb.js [app-ssr] (ecmascript)");
/** AuthQuerier is the query interface for the x/auth module */ class AuthQuerier {
    constructor(url){
        this.url = url;
    }
    accounts(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            //@ts-ignore
            return query_pb_1.Query.Accounts(req, {
                headers,
                pathPrefix: this.url
            });
        });
    }
    account(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            //@ts-ignore
            return query_pb_1.Query.Account(req, {
                headers,
                pathPrefix: this.url
            });
        });
    }
    params(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return query_pb_1.Query.Params(req, {
                headers,
                pathPrefix: this.url
            });
        });
    }
    moduleAccounts(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            //@ts-ignore
            return query_pb_1.Query.ModuleAccounts(req, {
                headers,
                pathPrefix: this.url
            });
        });
    }
    moduleAccountByName(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            //@ts-ignore
            return query_pb_1.Query.ModuleAccountByName(req, {
                headers,
                pathPrefix: this.url
            });
        });
    }
    bech32Prefix(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            //@ts-ignore
            return query_pb_1.Query.Bech32Prefix(req, {
                headers,
                pathPrefix: this.url
            });
        });
    }
    addressBytesToString(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            //@ts-ignore
            return query_pb_1.Query.AddressBytesToString(req, {
                headers,
                pathPrefix: this.url
            });
        });
    }
    addressStringToBytes(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            //@ts-ignore
            return query_pb_1.Query.AddressStringToBytes(req, {
                headers,
                pathPrefix: this.url
            });
        });
    }
    accountAddressByID(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            //@ts-ignore
            return query_pb_1.Query.AccountAddressByID(req, {
                headers,
                pathPrefix: this.url
            });
        });
    }
    accountInfo(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            //@ts-ignore
            return query_pb_1.Query.AccountInfo(req, {
                headers,
                pathPrefix: this.url
            });
        });
    }
}
exports.AuthQuerier = AuthQuerier; //# sourceMappingURL=auth.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/authz.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthzQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/authz/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class AuthzQuerier {
    constructor(url){
        this.url = url;
    }
    grants(req, headers) {
        return query_pb_1.Query.Grants(req, {
            headers,
            pathPrefix: this.url
        });
    }
    granterGrants(req, headers) {
        return query_pb_1.Query.GranterGrants(req, {
            headers,
            pathPrefix: this.url
        });
    }
    granteeGrants(req, headers) {
        return query_pb_1.Query.GranteeGrants(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.AuthzQuerier = AuthzQuerier; //# sourceMappingURL=authz.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/autocli.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AutoCliQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/autocli/v1/query.pb.js [app-ssr] (ecmascript)");
class AutoCliQuerier {
    constructor(url){
        this.url = url;
    }
    appOptions(req, headers) {
        return query_pb_1.Query.AppOptions(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.AutoCliQuerier = AutoCliQuerier; //# sourceMappingURL=autocli.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/bank.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BankQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/bank/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class BankQuerier {
    constructor(url){
        this.url = url;
    }
    spendableBalanceByDenom(req, headers) {
        return query_pb_1.Query.SpendableBalanceByDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
    denomMetadataByQueryString(req, headers) {
        return query_pb_1.Query.DenomMetadataByQueryString(req, {
            headers,
            pathPrefix: this.url
        });
    }
    denomOwners(req, headers) {
        return query_pb_1.Query.DenomOwners(req, {
            headers,
            pathPrefix: this.url
        });
    }
    sendEnabled(req, headers) {
        return query_pb_1.Query.SendEnabled(req, {
            headers,
            pathPrefix: this.url
        });
    }
    denomOwnersByQuery(req, headers) {
        return query_pb_1.Query.DenomOwnersByQuery(req, {
            headers,
            pathPrefix: this.url
        });
    }
    balance(req, headers) {
        return query_pb_1.Query.Balance(req, {
            headers,
            pathPrefix: this.url
        });
    }
    allBalances(req, headers) {
        return query_pb_1.Query.AllBalances(req, {
            headers,
            pathPrefix: this.url
        });
    }
    spendableBalances(req, headers) {
        return query_pb_1.Query.SpendableBalances(req, {
            headers,
            pathPrefix: this.url
        });
    }
    totalSupply(req, headers) {
        return query_pb_1.Query.TotalSupply(req, {
            headers,
            pathPrefix: this.url
        });
    }
    supplyOf(req, headers) {
        return query_pb_1.Query.SupplyOf(req, {
            headers,
            pathPrefix: this.url
        });
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    denomMetadata(req, headers) {
        return query_pb_1.Query.DenomMetadata(req, {
            headers,
            pathPrefix: this.url
        });
    }
    denomsMetadata(req, headers) {
        return query_pb_1.Query.DenomsMetadata(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.BankQuerier = BankQuerier; //# sourceMappingURL=bank.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/compute.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
// For future wanderers:
// This file is written manually with a few goals in mind:
// 1. Proxy the auto-generated QueryClientImpl from "src/protobuf/secret/compute/v1beta1/query.tx" (See the "scripts/generate_protobuf.sh" script)
// 2. Abstract "address: Uint8Array" in the underlying types as "address: string".
// 3. Add Secret Network encryption
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComputeQuerier = void 0;
const encoding_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)");
const __1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/index.js [app-ssr] (ecmascript)");
const encryption_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/encryption.js [app-ssr] (ecmascript)");
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/secret/compute/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class ComputeQuerier {
    constructor(url, encryption){
        this.url = url;
        this.encryption = encryption;
        this.codeHashCache = new Map();
        if (!this.encryption) {
            this.encryption = new encryption_1.EncryptionUtilsImpl(url);
        }
    }
    contractInfo(req, headers) {
        return query_pb_1.Query.ContractInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    contractsByCodeId(req, headers) {
        return query_pb_1.Query.ContractsByCodeId(req, {
            headers,
            pathPrefix: this.url
        });
    }
    code(req, headers) {
        return query_pb_1.Query.Code(req, {
            headers,
            pathPrefix: this.url
        });
    }
    codes(req, headers) {
        return query_pb_1.Query.Codes(req, {
            headers,
            pathPrefix: this.url
        });
    }
    codeHashByContractAddress(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            let code_hash = this.codeHashCache.get(req.contract_address);
            if (!code_hash) {
                ({ code_hash } = yield query_pb_1.Query.CodeHashByContractAddress(req, {
                    headers,
                    pathPrefix: this.url
                }));
                this.codeHashCache.set(req.contract_address, code_hash);
            }
            return {
                code_hash
            };
        });
    }
    codeHashByCodeId(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            let code_hash = this.codeHashCache.get(req.code_id);
            if (!code_hash) {
                ({ code_hash } = yield query_pb_1.Query.CodeHashByCodeId({
                    code_id: req.code_id
                }, {
                    headers,
                    pathPrefix: this.url
                }));
                this.codeHashCache.set(req.code_id, code_hash);
            }
            return {
                code_hash
            };
        });
    }
    labelByAddress(req, headers) {
        return query_pb_1.Query.LabelByAddress(req, {
            headers,
            pathPrefix: this.url
        });
    }
    addressByLabel(req, headers) {
        return query_pb_1.Query.AddressByLabel(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Query a Secret Contract.
     * May return a string on error.
     */ queryContract({ contract_address: contractAddress, code_hash: codeHash, query }, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!codeHash) {
                console.warn((0, __1.getMissingCodeHashWarning)("queryContract()"));
                ({ code_hash: codeHash } = yield this.codeHashByContractAddress({
                    contract_address: contractAddress
                }));
            }
            codeHash = codeHash.replace("0x", "").toLowerCase();
            const encryptedQuery = yield this.encryption.encrypt(codeHash, query);
            const nonce = encryptedQuery.slice(0, 32);
            try {
                const { data: encryptedResult } = yield query_pb_1.Query.QuerySecretContract({
                    contract_address: contractAddress,
                    query: encryptedQuery
                }, {
                    headers,
                    pathPrefix: this.url
                });
                const decryptedBase64Result = yield this.encryption.decrypt((0, encoding_1.fromBase64)(encryptedResult), nonce);
                // Don't try to parse JSON in case the result is empty.
                // This seems kinda stupid but if the contract for some reason returns `Binary::default()`
                // the JSON parsing will fail (empty bytes)
                if (!(decryptedBase64Result === null || decryptedBase64Result === void 0 ? void 0 : decryptedBase64Result.length)) {
                    return {};
                }
                return JSON.parse((0, encoding_1.fromUtf8)((0, encoding_1.fromBase64)((0, encoding_1.fromUtf8)(decryptedBase64Result))));
            } catch (err) {
                try {
                    const errorMessageRgx1 = /encrypted: (.+?): (?:instantiate|execute|query|reply to|migrate) contract failed/g;
                    const errorMessageRgx2 = /(?:instantiate|execute|query|reply to|migrate) contract failed: encrypted: ([\w+\/=]+)/g;
                    let rgxMatches = errorMessageRgx1.exec(err.message);
                    if (rgxMatches == null || (rgxMatches === null || rgxMatches === void 0 ? void 0 : rgxMatches.length) != 2) {
                        rgxMatches = errorMessageRgx2.exec(err.message);
                        if (rgxMatches == null || (rgxMatches === null || rgxMatches === void 0 ? void 0 : rgxMatches.length) != 2) {
                            throw err;
                        }
                    }
                    const encryptedError = (0, encoding_1.fromBase64)(rgxMatches[1]);
                    const decryptedBase64Error = yield this.encryption.decrypt(encryptedError, nonce);
                    try {
                        //@ts-ignore
                        // return the error string
                        return (0, encoding_1.fromUtf8)((0, encoding_1.fromBase64)((0, encoding_1.fromUtf8)(decryptedBase64Error)));
                    } catch (parseError) {
                        if (parseError.message === "Invalid base64 string format") {
                            //@ts-ignore
                            // return the error string
                            return (0, encoding_1.fromUtf8)(decryptedBase64Error);
                        } else {
                            throw err;
                        }
                    }
                } catch (decryptionError) {
                    throw err;
                }
            }
        });
    }
    contractHistory(req, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            const { entries } = yield query_pb_1.Query.ContractHistory(req, {
                headers,
                pathPrefix: this.url
            });
            let decryptedEntries = [];
            for (const entry of entries !== null && entries !== void 0 ? entries : []){
                let msg = entry.msg;
                try {
                    const encryptedInput = (0, encoding_1.fromBase64)(msg);
                    const nonce = encryptedInput.slice(0, 32);
                    const encryptedInitMsg = encryptedInput.slice(64);
                    const plaintextInitMsg = yield this.encryption.decrypt(encryptedInitMsg, nonce);
                    msg = (0, encoding_1.fromUtf8)(plaintextInitMsg).slice(64);
                } catch (err) {}
                decryptedEntries.push({
                    operation: entry.operation,
                    code_id: entry.code_id,
                    updated: entry.updated,
                    msg
                });
            }
            return {
                entries: decryptedEntries
            };
        });
    }
}
exports.ComputeQuerier = ComputeQuerier; //# sourceMappingURL=compute.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/consensus.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConsensusQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/consensus/v1/query.pb.js [app-ssr] (ecmascript)");
class ConsensusQuerier {
    constructor(url){
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.ConsensusQuerier = ConsensusQuerier; //# sourceMappingURL=consensus.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/distribution.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DistributionQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/distribution/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class DistributionQuerier {
    constructor(url){
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    validatorOutstandingRewards(req, headers) {
        return query_pb_1.Query.ValidatorOutstandingRewards(req, {
            headers,
            pathPrefix: this.url
        });
    }
    validatorCommission(req, headers) {
        return query_pb_1.Query.ValidatorCommission(req, {
            headers,
            pathPrefix: this.url
        });
    }
    validatorSlashes(req, headers) {
        return query_pb_1.Query.ValidatorSlashes(req, {
            headers,
            pathPrefix: this.url
        });
    }
    delegationRewards(req, headers) {
        return query_pb_1.Query.DelegationRewards(req, {
            headers,
            pathPrefix: this.url
        });
    }
    delegationTotalRewards(req, headers) {
        return query_pb_1.Query.DelegationTotalRewards(req, {
            headers,
            pathPrefix: this.url
        });
    }
    delegatorValidators(req, headers) {
        return query_pb_1.Query.DelegatorValidators(req, {
            headers,
            pathPrefix: this.url
        });
    }
    delegatorWithdrawAddress(req, headers) {
        return query_pb_1.Query.DelegatorWithdrawAddress(req, {
            headers,
            pathPrefix: this.url
        });
    }
    communityPool(req, headers) {
        return query_pb_1.Query.CommunityPool(req, {
            headers,
            pathPrefix: this.url
        });
    }
    foundationTax(req, headers) {
        return query_pb_1.Query.FoundationTax(req, {
            headers,
            pathPrefix: this.url
        });
    }
    restakeThreshold(req, headers) {
        return query_pb_1.Query.RestakeThreshold(req, {
            headers,
            pathPrefix: this.url
        });
    }
    restakingEntries(req, headers) {
        return query_pb_1.Query.RestakingEntries(req, {
            headers,
            pathPrefix: this.url
        });
    }
    validatorDistributionInfo(req, headers) {
        return query_pb_1.Query.ValidatorDistributionInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.DistributionQuerier = DistributionQuerier; //# sourceMappingURL=distribution.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/emergency_button.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmergencyButtonQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/secret/emergencybutton/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class EmergencyButtonQuerier {
    constructor(url){
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.EmergencyButtonQuerier = EmergencyButtonQuerier; //# sourceMappingURL=emergency_button.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/evidence.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EvidenceQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/evidence/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class EvidenceQuerier {
    constructor(url){
        this.url = url;
    }
    evidence(req, headers) {
        return query_pb_1.Query.Evidence(req, {
            headers,
            pathPrefix: this.url
        });
    }
    allEvidence(req, headers) {
        return query_pb_1.Query.AllEvidence(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.EvidenceQuerier = EvidenceQuerier; //# sourceMappingURL=evidence.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/feegrant.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeegrantQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/feegrant/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class FeegrantQuerier {
    constructor(url){
        this.url = url;
    }
    allowance(req, headers) {
        return query_pb_1.Query.Allowance(req, {
            headers,
            pathPrefix: this.url
        });
    }
    allowances(req, headers) {
        return query_pb_1.Query.Allowances(req, {
            headers,
            pathPrefix: this.url
        });
    }
    allowancesByGranter(req, headers) {
        return query_pb_1.Query.AllowancesByGranter(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.FeegrantQuerier = FeegrantQuerier; //# sourceMappingURL=feegrant.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/gov_v1beta1.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GovV1Beta1Querier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/gov/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class GovV1Beta1Querier {
    constructor(url){
        this.url = url;
    }
    proposal(req, headers) {
        return query_pb_1.Query.Proposal(req, {
            headers,
            pathPrefix: this.url
        });
    }
    proposals(req, headers) {
        return query_pb_1.Query.Proposals(req, {
            headers,
            pathPrefix: this.url
        });
    }
    vote(req, headers) {
        return query_pb_1.Query.Vote(req, {
            headers,
            pathPrefix: this.url
        });
    }
    votes(req, headers) {
        return query_pb_1.Query.Votes(req, {
            headers,
            pathPrefix: this.url
        });
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    deposit(req, headers) {
        return query_pb_1.Query.Deposit(req, {
            headers,
            pathPrefix: this.url
        });
    }
    deposits(req, headers) {
        return query_pb_1.Query.Deposits(req, {
            headers,
            pathPrefix: this.url
        });
    }
    tallyResult(req, headers) {
        return query_pb_1.Query.TallyResult(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.GovV1Beta1Querier = GovV1Beta1Querier; //# sourceMappingURL=gov_v1beta1.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/gov_v1.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GovV1Querier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/gov/v1/query.pb.js [app-ssr] (ecmascript)");
class GovV1Querier {
    constructor(url){
        this.url = url;
    }
    constitution(req, headers) {
        return query_pb_1.Query.Constitution(req, {
            headers,
            pathPrefix: this.url
        });
    }
    proposal(req, headers) {
        return query_pb_1.Query.Proposal(req, {
            headers,
            pathPrefix: this.url
        });
    }
    proposals(req, headers) {
        return query_pb_1.Query.Proposals(req, {
            headers,
            pathPrefix: this.url
        });
    }
    vote(req, headers) {
        return query_pb_1.Query.Vote(req, {
            headers,
            pathPrefix: this.url
        });
    }
    votes(req, headers) {
        return query_pb_1.Query.Votes(req, {
            headers,
            pathPrefix: this.url
        });
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    deposit(req, headers) {
        return query_pb_1.Query.Deposit(req, {
            headers,
            pathPrefix: this.url
        });
    }
    deposits(req, headers) {
        return query_pb_1.Query.Deposits(req, {
            headers,
            pathPrefix: this.url
        });
    }
    tallyResult(req, headers) {
        return query_pb_1.Query.TallyResult(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.GovV1Querier = GovV1Querier; //# sourceMappingURL=gov_v1.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_channel.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IbcChannelQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/core/channel/v1/query.pb.js [app-ssr] (ecmascript)");
class IbcChannelQuerier {
    constructor(url){
        this.url = url;
    }
    channelParams(req, headers) {
        return query_pb_1.Query.ChannelParams(req, {
            headers,
            pathPrefix: this.url
        });
    }
    nextSequenceSend(req, headers) {
        return query_pb_1.Query.NextSequenceSend(req, {
            headers,
            pathPrefix: this.url
        });
    }
    upgradeError(req, headers) {
        return query_pb_1.Query.UpgradeError(req, {
            headers,
            pathPrefix: this.url
        });
    }
    upgrade(req, headers) {
        return query_pb_1.Query.Channel(req, {
            headers,
            pathPrefix: this.url
        });
    }
    channel(req, headers) {
        return query_pb_1.Query.Channel(req, {
            headers,
            pathPrefix: this.url
        });
    }
    channels(req, headers) {
        return query_pb_1.Query.Channels(req, {
            headers,
            pathPrefix: this.url
        });
    }
    connectionChannels(req, headers) {
        return query_pb_1.Query.ConnectionChannels(req, {
            headers,
            pathPrefix: this.url
        });
    }
    channelClientState(req, headers) {
        return query_pb_1.Query.ChannelClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    channelConsensusState(req, headers) {
        return query_pb_1.Query.ChannelConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    packetCommitment(req, headers) {
        return query_pb_1.Query.PacketCommitment(req, {
            headers,
            pathPrefix: this.url
        });
    }
    packetCommitments(req, headers) {
        return query_pb_1.Query.PacketCommitments(req, {
            headers,
            pathPrefix: this.url
        });
    }
    packetReceipt(req, headers) {
        return query_pb_1.Query.PacketReceipt(req, {
            headers,
            pathPrefix: this.url
        });
    }
    packetAcknowledgement(req, headers) {
        return query_pb_1.Query.PacketAcknowledgement(req, {
            headers,
            pathPrefix: this.url
        });
    }
    packetAcknowledgements(req, headers) {
        return query_pb_1.Query.PacketAcknowledgements(req, {
            headers,
            pathPrefix: this.url
        });
    }
    unreceivedPackets(req, headers) {
        return query_pb_1.Query.UnreceivedPackets(req, {
            headers,
            pathPrefix: this.url
        });
    }
    unreceivedAcks(req, headers) {
        return query_pb_1.Query.UnreceivedAcks(req, {
            headers,
            pathPrefix: this.url
        });
    }
    nextSequenceReceive(req, headers) {
        return query_pb_1.Query.NextSequenceReceive(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.IbcChannelQuerier = IbcChannelQuerier; //# sourceMappingURL=ibc_channel.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_client.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IbcClientQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/core/client/v1/query.pb.js [app-ssr] (ecmascript)");
class IbcClientQuerier {
    constructor(url){
        this.url = url;
    }
    clientState(req, headers) {
        return query_pb_1.Query.ClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    clientStates(req, headers) {
        return query_pb_1.Query.ClientStates(req, {
            headers,
            pathPrefix: this.url
        });
    }
    consensusState(req, headers) {
        return query_pb_1.Query.ConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    consensusStates(req, headers) {
        return query_pb_1.Query.ConsensusStates(req, {
            headers,
            pathPrefix: this.url
        });
    }
    clientStatus(req, headers) {
        return query_pb_1.Query.ClientStatus(req, {
            headers,
            pathPrefix: this.url
        });
    }
    clientParams(req, headers) {
        return query_pb_1.Query.ClientParams(req, {
            headers,
            pathPrefix: this.url
        });
    }
    upgradedClientState(req, headers) {
        return query_pb_1.Query.UpgradedClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    upgradedConsensusState(req, headers) {
        return query_pb_1.Query.UpgradedConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    consensusStateHeights(req, headers) {
        return query_pb_1.Query.ConsensusStateHeights(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.IbcClientQuerier = IbcClientQuerier; //# sourceMappingURL=ibc_client.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_connection.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IbcConnectionQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/core/connection/v1/query.pb.js [app-ssr] (ecmascript)");
class IbcConnectionQuerier {
    constructor(url){
        this.url = url;
    }
    connectionParams(req, headers) {
        return query_pb_1.Query.ConnectionParams(req, {
            headers,
            pathPrefix: this.url
        });
    }
    connection(req, headers) {
        return query_pb_1.Query.Connection(req, {
            headers,
            pathPrefix: this.url
        });
    }
    connections(req, headers) {
        return query_pb_1.Query.Connections(req, {
            headers,
            pathPrefix: this.url
        });
    }
    clientConnections(req, headers) {
        return query_pb_1.Query.ClientConnections(req, {
            headers,
            pathPrefix: this.url
        });
    }
    connectionClientState(req, headers) {
        return query_pb_1.Query.ConnectionClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    connectionConsensusState(req, headers) {
        return query_pb_1.Query.ConnectionConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.IbcConnectionQuerier = IbcConnectionQuerier; //# sourceMappingURL=ibc_connection.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_fee.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IbcFeeQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/applications/fee/v1/query.pb.js [app-ssr] (ecmascript)");
class IbcFeeQuerier {
    constructor(url){
        this.url = url;
    }
    incentivizedPackets(req, headers) {
        return query_pb_1.Query.IncentivizedPackets(req, {
            headers,
            pathPrefix: this.url
        });
    }
    incentivizedPacket(req, headers) {
        return query_pb_1.Query.IncentivizedPacket(req, {
            headers,
            pathPrefix: this.url
        });
    }
    incentivizedPacketsForChannel(req, headers) {
        return query_pb_1.Query.IncentivizedPacketsForChannel(req, {
            headers,
            pathPrefix: this.url
        });
    }
    totalRecvFees(req, headers) {
        return query_pb_1.Query.TotalRecvFees(req, {
            headers,
            pathPrefix: this.url
        });
    }
    totalAckFees(req, headers) {
        return query_pb_1.Query.TotalAckFees(req, {
            headers,
            pathPrefix: this.url
        });
    }
    totalTimeoutFees(req, headers) {
        return query_pb_1.Query.TotalTimeoutFees(req, {
            headers,
            pathPrefix: this.url
        });
    }
    payee(req, headers) {
        return query_pb_1.Query.Payee(req, {
            headers,
            pathPrefix: this.url
        });
    }
    counterpartyPayee(req, headers) {
        return query_pb_1.Query.CounterpartyPayee(req, {
            headers,
            pathPrefix: this.url
        });
    }
    feeEnabledChannels(req, headers) {
        return query_pb_1.Query.FeeEnabledChannels(req, {
            headers,
            pathPrefix: this.url
        });
    }
    feeEnabledChannel(req, headers) {
        return query_pb_1.Query.FeeEnabledChannel(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.IbcFeeQuerier = IbcFeeQuerier; //# sourceMappingURL=ibc_fee.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_interchain_accounts_controller.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IbcInterchainAccountsControllerQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/applications/interchain_accounts/controller/v1/query.pb.js [app-ssr] (ecmascript)");
class IbcInterchainAccountsControllerQuerier {
    constructor(url){
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    interchainAccount(req, headers) {
        return query_pb_1.Query.InterchainAccount(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.IbcInterchainAccountsControllerQuerier = IbcInterchainAccountsControllerQuerier; //# sourceMappingURL=ibc_interchain_accounts_controller.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_interchain_accounts_host.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IbcInterchainAccountsHostQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/applications/interchain_accounts/host/v1/query.pb.js [app-ssr] (ecmascript)");
class IbcInterchainAccountsHostQuerier {
    constructor(url){
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.IbcInterchainAccountsHostQuerier = IbcInterchainAccountsHostQuerier; //# sourceMappingURL=ibc_interchain_accounts_host.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_packet_forward.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IbcPacketForwardQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc-apps/packetforward/v1/query.pb.js [app-ssr] (ecmascript)");
class IbcPacketForwardQuerier {
    constructor(url){
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.IbcPacketForwardQuerier = IbcPacketForwardQuerier; //# sourceMappingURL=ibc_packet_forward.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_transfer.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IbcTransferQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/ibc/applications/transfer/v1/query.pb.js [app-ssr] (ecmascript)");
class IbcTransferQuerier {
    constructor(url){
        this.url = url;
    }
    denomTrace(req, headers) {
        return query_pb_1.Query.DenomTrace(req, {
            headers,
            pathPrefix: this.url
        });
    }
    denomTraces(req, headers) {
        return query_pb_1.Query.DenomTraces(req, {
            headers,
            pathPrefix: this.url
        });
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    denomHash(req, headers) {
        return query_pb_1.Query.DenomHash(req, {
            headers,
            pathPrefix: this.url
        });
    }
    escrowAddress(req, headers) {
        return query_pb_1.Query.EscrowAddress(req, {
            headers,
            pathPrefix: this.url
        });
    }
    totalEscrowForDenom(req, headers) {
        return query_pb_1.Query.TotalEscrowForDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.IbcTransferQuerier = IbcTransferQuerier; //# sourceMappingURL=ibc_transfer.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/mint.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MintQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/mint/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class MintQuerier {
    constructor(url){
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    inflation(req, headers) {
        return query_pb_1.Query.Inflation(req, {
            headers,
            pathPrefix: this.url
        });
    }
    annualProvisions(req, headers) {
        return query_pb_1.Query.AnnualProvisions(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.MintQuerier = MintQuerier; //# sourceMappingURL=mint.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/node.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/base/node/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class NodeQuerier {
    constructor(url){
        this.url = url;
    }
    config(req, headers) {
        return query_pb_1.Service.Config(req, {
            headers,
            pathPrefix: this.url
        });
    }
    status(req, headers) {
        return query_pb_1.Service.Status(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.NodeQuerier = NodeQuerier; //# sourceMappingURL=node.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/orm.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OrmQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/orm/query/v1alpha1/query.pb.js [app-ssr] (ecmascript)");
class OrmQuerier {
    constructor(url){
        this.url = url;
    }
    get(req, headers) {
        return query_pb_1.Query.Get(req, {
            headers,
            pathPrefix: this.url
        });
    }
    list(req, headers) {
        return query_pb_1.Query.List(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.OrmQuerier = OrmQuerier; //# sourceMappingURL=orm.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/params.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ParamsQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/params/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class ParamsQuerier {
    constructor(url){
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    subspaces(req, headers) {
        return query_pb_1.Query.Subspaces(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.ParamsQuerier = ParamsQuerier; //# sourceMappingURL=params.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/registration.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegistrationQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/secret/registration/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class RegistrationQuerier {
    constructor(url){
        this.url = url;
    }
    txKey(req, headers) {
        return query_pb_1.Query.TxKey(req, {
            headers,
            pathPrefix: this.url
        });
    }
    registrationKey(req, headers) {
        return query_pb_1.Query.RegistrationKey(req, {
            headers,
            pathPrefix: this.url
        });
    }
    encryptedSeed(req, headers) {
        return query_pb_1.Query.EncryptedSeed(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.RegistrationQuerier = RegistrationQuerier; //# sourceMappingURL=registration.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/slashing.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SlashingQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/slashing/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class SlashingQuerier {
    constructor(url){
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    signingInfo(req, headers) {
        return query_pb_1.Query.SigningInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    signingInfos(req, headers) {
        return query_pb_1.Query.SigningInfos(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.SlashingQuerier = SlashingQuerier; //# sourceMappingURL=slashing.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/staking.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StakingQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/staking/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class StakingQuerier {
    constructor(url){
        this.url = url;
    }
    validators(req, headers) {
        return query_pb_1.Query.Validators(req, {
            headers,
            pathPrefix: this.url
        });
    }
    validator(req, headers) {
        return query_pb_1.Query.Validator(req, {
            headers,
            pathPrefix: this.url
        });
    }
    validatorDelegations(req, headers) {
        return query_pb_1.Query.ValidatorDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    validatorUnbondingDelegations(req, headers) {
        return query_pb_1.Query.ValidatorUnbondingDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    delegation(req, headers) {
        return query_pb_1.Query.Delegation(req, {
            headers,
            pathPrefix: this.url
        });
    }
    unbondingDelegation(req, headers) {
        return query_pb_1.Query.UnbondingDelegation(req, {
            headers,
            pathPrefix: this.url
        });
    }
    delegatorDelegations(req, headers) {
        return query_pb_1.Query.DelegatorDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    delegatorUnbondingDelegations(req, headers) {
        return query_pb_1.Query.DelegatorUnbondingDelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    redelegations(req, headers) {
        return query_pb_1.Query.Redelegations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    delegatorValidators(req, headers) {
        return query_pb_1.Query.DelegatorValidators(req, {
            headers,
            pathPrefix: this.url
        });
    }
    delegatorValidator(req, headers) {
        return query_pb_1.Query.DelegatorValidator(req, {
            headers,
            pathPrefix: this.url
        });
    }
    historicalInfo(req, headers) {
        return query_pb_1.Query.HistoricalInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    pool(req, headers) {
        return query_pb_1.Query.Pool(req, {
            headers,
            pathPrefix: this.url
        });
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.StakingQuerier = StakingQuerier; //# sourceMappingURL=staking.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/tendermint.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TendermintQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/base/tendermint/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class TendermintQuerier {
    constructor(url){
        this.url = url;
    }
    aBCIQuery(req, headers) {
        return query_pb_1.Service.ABCIQuery(req, {
            headers,
            pathPrefix: this.url
        });
    }
    getNodeInfo(req, headers) {
        return query_pb_1.Service.GetNodeInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    getSyncing(req, headers) {
        return query_pb_1.Service.GetSyncing(req, {
            headers,
            pathPrefix: this.url
        });
    }
    getLatestBlock(req, headers) {
        return query_pb_1.Service.GetLatestBlock(req, {
            headers,
            pathPrefix: this.url
        });
    }
    getBlockByHeight(req, headers) {
        return query_pb_1.Service.GetBlockByHeight(req, {
            headers,
            pathPrefix: this.url
        });
    }
    getLatestValidatorSet(req, headers) {
        return query_pb_1.Service.GetLatestValidatorSet(req, {
            headers,
            pathPrefix: this.url
        });
    }
    getValidatorSetByHeight(req, headers) {
        return query_pb_1.Service.GetValidatorSetByHeight(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.TendermintQuerier = TendermintQuerier; //# sourceMappingURL=tendermint.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/upgrade.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UpgradeQuerier = void 0;
const query_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/upgrade/v1beta1/query.pb.js [app-ssr] (ecmascript)");
class UpgradeQuerier {
    constructor(url){
        this.url = url;
    }
    authority(req, headers) {
        return query_pb_1.Query.Authority(req, {
            headers,
            pathPrefix: this.url
        });
    }
    currentPlan(req, headers) {
        return query_pb_1.Query.CurrentPlan(req, {
            headers,
            pathPrefix: this.url
        });
    }
    appliedPlan(req, headers) {
        return query_pb_1.Query.AppliedPlan(req, {
            headers,
            pathPrefix: this.url
        });
    }
    upgradedConsensusState(req, headers) {
        return query_pb_1.Query.UpgradedConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    moduleVersions(req, headers) {
        return query_pb_1.Query.ModuleVersions(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
exports.UpgradeQuerier = UpgradeQuerier; //# sourceMappingURL=upgrade.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
// ls | sort | grep -v index | awk -F \. '{print "export * from \"./" $1 "\";"}' > index.ts
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/app.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/auth.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/authz.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/autocli.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/bank.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/compute.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/consensus.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/distribution.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/emergency_button.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/evidence.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/feegrant.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/gov_v1beta1.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/gov_v1.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_channel.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_client.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_connection.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_fee.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_interchain_accounts_controller.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_interchain_accounts_host.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_packet_forward.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_transfer.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/mint.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/node.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/orm.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/params.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/registration.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/slashing.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/staking.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/tendermint.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/upgrade.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/permit/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validatePermit = exports.newPermit = exports.newSignDoc = exports.PermissionNotInPermit = exports.SignerIsNotAddress = exports.SignatureInvalid = exports.ContractNotInPermit = exports.PermitError = void 0;
const encoding_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)");
const sha256_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.0.0/node_modules/@noble/hashes/sha256.js [app-ssr] (ecmascript)");
const secp256k1 = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/@noble+secp256k1@1.7.0/node_modules/@noble/secp256k1/lib/index.js [app-ssr] (ecmascript)"));
const index_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/index.js [app-ssr] (ecmascript)");
const amino_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+amino@0.32.4/node_modules/@cosmjs/amino/build/index.js [app-ssr] (ecmascript)");
class PermitError extends Error {
    constructor(message){
        super(message);
        this.type = "PermitError";
        this.name = "PermitError";
    }
}
exports.PermitError = PermitError;
class ContractNotInPermit extends PermitError {
    constructor(contract, allowed_contracts){
        super(`Contract ${contract} is not allowed for this permit`);
        this.name = "ContractNotInPermit";
        this.contract = contract;
        this.allowed_contracts = allowed_contracts;
    }
}
exports.ContractNotInPermit = ContractNotInPermit;
class SignatureInvalid extends PermitError {
    constructor(signature, key){
        super(`Signature invalid`);
        this.name = "SignatureInvalid";
        this.key = key;
        this.signature = signature;
    }
}
exports.SignatureInvalid = SignatureInvalid;
class SignerIsNotAddress extends PermitError {
    constructor(publicKey, address){
        super(`Address ${address} is not the permit signer`);
        this.name = "SignerIsNotAddress";
        this.address = address;
        this.publicKey = publicKey;
    }
}
exports.SignerIsNotAddress = SignerIsNotAddress;
class PermissionNotInPermit extends PermitError {
    constructor(permission, permissionsInContract){
        super("Permit does not contain required the permissions");
        this.name = "PermissionNotInPermit";
        this.permission = permission;
        this.permissionsInContract = permissionsInContract;
    }
}
exports.PermissionNotInPermit = PermissionNotInPermit;
const newSignDoc = (chainId, permit_name, allowed_tokens, permissions)=>{
    return {
        chain_id: chainId,
        account_number: "0",
        sequence: "0",
        fee: {
            amount: (0, index_1.stringToCoins)("0uscrt"),
            gas: "1"
        },
        msgs: [
            {
                type: "query_permit",
                value: {
                    permit_name,
                    allowed_tokens,
                    permissions
                }
            }
        ],
        memo: ""
    };
};
exports.newSignDoc = newSignDoc;
//
const newPermit = (signer, owner, chainId, permitName, allowedTokens, permissions, keplr)=>__awaiter(void 0, void 0, void 0, function*() {
        let signature;
        if (!keplr) {
            // Check if the signer has "signPermit" function and use it instead
            signature = typeof signer.signPermit === "function" ? (yield signer.signPermit(owner, (0, exports.newSignDoc)(chainId, permitName, allowedTokens, permissions))).signature : (yield signer.signAmino(owner, (0, exports.newSignDoc)(chainId, permitName, allowedTokens, permissions))).signature;
        } else if (!(window === null || window === void 0 ? void 0 : window.keplr)) {
            throw new Error("Cannot sign with Keplr - extension not enabled; enable Keplr or change signing mode");
        } else {
            //@ts-ignore
            ({ signature } = yield window.keplr.signAmino(chainId, owner, {
                chain_id: chainId,
                account_number: "0",
                sequence: "0",
                fee: {
                    amount: (0, index_1.stringToCoins)("0uscrt"),
                    gas: "1"
                },
                msgs: [
                    {
                        type: "query_permit",
                        value: {
                            permit_name: permitName,
                            allowed_tokens: allowedTokens,
                            permissions: permissions
                        }
                    }
                ],
                memo: ""
            }, {
                preferNoSetFee: true,
                preferNoSetMemo: true
            }));
        }
        return {
            params: {
                chain_id: chainId,
                permit_name: permitName,
                allowed_tokens: allowedTokens,
                permissions
            },
            signature: signature
        };
    });
exports.newPermit = newPermit;
const validatePermit = (permit, address, contract, permissions, exceptions = true)=>{
    // check if contract is valid
    let contractInPermit = permit.params.allowed_tokens.includes(contract);
    if (!contractInPermit) {
        if (!exceptions) {
            return false;
        }
        throw new ContractNotInPermit(contract, permit.params.allowed_tokens);
    }
    let permissionInPermit = permit.params.permissions.find((p)=>permissions.includes(p));
    if (!permissionInPermit) {
        if (!exceptions) {
            return false;
        }
        throw new PermissionNotInPermit(permissions, permit.params.permissions);
    }
    let hrp = "";
    try {
        hrp = (0, encoding_1.fromBech32)(address).prefix;
    } catch (_a) {
        throw new Error(`Address address=${address} must be a valid bech32 address`);
    }
    let permitAcc = "";
    try {
        permitAcc = (0, index_1.base64PubkeyToAddress)(permit.signature.pub_key.value, hrp);
    } catch (e) {
        throw new PermitError("Pubkey invalid");
    }
    if (permitAcc !== address) {
        if (!exceptions) {
            return false;
        }
        throw new SignerIsNotAddress(permit.signature.pub_key, address);
    }
    let sigIsValid = false;
    try {
        sigIsValid = _validate_sig(permit);
    } catch (e) {
        if (!exceptions) {
            return false;
        }
        // validation can fail if signature is malformed
        throw new SignatureInvalid(permit.signature.signature, permit.signature.pub_key.value);
    }
    if (!sigIsValid) {
        if (!exceptions) {
            return false;
        }
        throw new SignatureInvalid(permit.signature.signature, permit.signature.pub_key.value);
    }
    return true;
};
exports.validatePermit = validatePermit;
const _validate_sig = (permit)=>{
    let signDoc = (0, exports.newSignDoc)(permit.params.chain_id, permit.params.permit_name, permit.params.allowed_tokens, permit.params.permissions);
    const messageHash = (0, sha256_1.sha256)((0, amino_1.serializeSignDoc)(signDoc));
    let sig = secp256k1.Signature.fromCompact((0, encoding_1.fromBase64)(permit.signature.signature));
    return secp256k1.verify(sig, messageHash, (0, encoding_1.fromBase64)(permit.signature.pub_key.value));
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/permit/permit_signer.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PermitSigner = exports.DirectSignerUnsupported = void 0;
const index_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/permit/index.js [app-ssr] (ecmascript)");
class DirectSignerUnsupported extends index_1.PermitError {
    constructor(){
        super("Only amino signer is supported for permits");
    }
}
exports.DirectSignerUnsupported = DirectSignerUnsupported;
class PermitSigner {
    constructor(signer){
        this.isAminoSigner = (signer)=>{
            return "signAmino" in signer;
        };
        this.signer = signer;
    }
    _checkSigner() {
        if (!this.isAminoSigner(this.signer)) {
            throw new DirectSignerUnsupported();
        }
    }
    /**
     *
     * Signs a new permit based on the input parameters.
     *
     * @param owner
     * @param chainId
     * @param permitName
     * @param allowedContracts
     * @param permissions
     * @param keplr - are we signing with keplr or not?
     * @returns Permit
     */ sign(owner, chainId, permitName, allowedContracts, permissions, keplr = true) {
        this._checkSigner();
        return (0, index_1.newPermit)(//@ts-ignore
        this.signer, owner, chainId, permitName, allowedContracts, permissions, keplr);
    }
    /**
     *
     * This method will verify a permit according to a contract address and a submitting address (and a set of permissions)
     * On failure an appropriate error will be thrown according to the type of error.
     *
     * @throws PermitError on any error or verification failure
     *
     * @param permit
     * @param forAddress
     * @param forContract
     * @param permissions
     */ verify(permit, forAddress, forContract, permissions) {
        return (0, index_1.validatePermit)(permit, forAddress, forContract, permissions);
    }
    /**
     * Variant of the verify method that returns a boolean value instead of throwing exceptions
     *
     * @param permit
     * @param forAddress
     * @param forContract
     * @param permissions
     *
     * @returns boolean - true on success, false on verification failure
     */ verifyNoExcept(permit, forAddress, forContract, permissions) {
        return (0, index_1.validatePermit)(permit, forAddress, forContract, permissions, false);
    }
}
exports.PermitSigner = PermitSigner; //# sourceMappingURL=permit_signer.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/viewing_key/msgs.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MsgCreateViewingKey = exports.MsgSetViewingKey = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/index.js [app-ssr] (ecmascript)");
class MsgSetViewingKey extends tx_1.MsgExecuteContract {
}
exports.MsgSetViewingKey = MsgSetViewingKey;
class MsgCreateViewingKey extends tx_1.MsgExecuteContract {
}
exports.MsgCreateViewingKey = MsgCreateViewingKey; //# sourceMappingURL=msgs.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip1155/query.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Snip1155Querier = void 0;
const query_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/index.js [app-ssr] (ecmascript)");
class Snip1155Querier extends query_1.ComputeQuerier {
    constructor(){
        super(...arguments);
        this.getBalance = ({ contract, token_id, owner, auth })=>__awaiter(this, void 0, void 0, function*() {
                if (auth.viewer) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            balance: {
                                token_id,
                                owner,
                                viewer: auth.viewer.address,
                                key: auth.viewer.viewing_key
                            }
                        }
                    });
                } else if (auth.permit) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            with_permit: {
                                permit: auth.permit,
                                query: {
                                    balance: {
                                        token_id,
                                        owner
                                    }
                                }
                            }
                        }
                    });
                }
                throw new Error("Empty auth parameter for authenticated query: GetBalance");
            });
        this.getAllBalances = ({ contract, auth, owner, tx_history_page, tx_history_page_size })=>__awaiter(this, void 0, void 0, function*() {
                if (auth.viewer && owner) {
                    if (auth.viewer.address !== owner) {
                        throw new Error("only owner can query all balances");
                    }
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            all_balances: {
                                owner,
                                key: auth.viewer.viewing_key,
                                tx_history_page,
                                tx_history_page_size
                            }
                        }
                    });
                } else if (auth.permit) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            with_permit: {
                                permit: auth.permit,
                                query: {
                                    all_balances: {
                                        tx_history_page,
                                        tx_history_page_size
                                    }
                                }
                            }
                        }
                    });
                }
                throw new Error("Empty auth parameter for authenticated query: GetAllBalances");
            });
        this.getTransactionHistory = ({ contract, auth, page_size, page })=>__awaiter(this, void 0, void 0, function*() {
                if (auth.viewer) {
                    return this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            transaction_history: {
                                key: auth.viewer.viewing_key,
                                address: auth.viewer.address,
                                page_size,
                                page
                            }
                        }
                    });
                } else if (auth.permit) {
                    return this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            with_permit: {
                                permit: auth.permit,
                                query: {
                                    transaction_history: {
                                        page_size,
                                        page
                                    }
                                }
                            }
                        }
                    });
                }
                throw new Error("Empty auth parameter for authenticated query: getTransactionHistory");
            });
        this.getPublicTokenInfo = ({ contract, token_id })=>__awaiter(this, void 0, void 0, function*() {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        token_id_public_info: {
                            token_id
                        }
                    }
                });
            });
        this.getPrivateTokenInfo = ({ contract, token_id, auth })=>__awaiter(this, void 0, void 0, function*() {
                if (auth.viewer) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            token_id_private_info: {
                                token_id,
                                address: auth.viewer.address,
                                key: auth.viewer.viewing_key
                            }
                        }
                    });
                } else if (auth.permit) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            with_permit: {
                                permit: auth.permit,
                                query: {
                                    token_id_private_info: {
                                        token_id
                                    }
                                }
                            }
                        }
                    });
                }
                throw new Error("Empty auth parameter for authenticated query: getTransactionHistory");
            });
    }
}
exports.Snip1155Querier = Snip1155Querier; //# sourceMappingURL=query.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip1155/tx.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MsgSnip1155ChangeMetadata = exports.MsgSnip1155RemoveMinter = exports.MsgSnipAddMinter = exports.MsgSnip1155BatchTransfer = exports.MsgSnip1155Transfer = exports.MsgSnip1155Burn = exports.MsgSnip1155Mint = exports.MsgSnip1155BatchSend = exports.MsgSnip1155Send = exports.MsgSnip1155RemoveCurator = exports.MsgSnip1155AddCurator = exports.MsgSnip1155CurateTokens = exports.MsgSnip1155RemoveAdmin = exports.MsgSnip1155ChangeAdmin = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/index.js [app-ssr] (ecmascript)");
class MsgSnip1155ChangeAdmin extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155ChangeAdmin = MsgSnip1155ChangeAdmin;
class MsgSnip1155RemoveAdmin extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155RemoveAdmin = MsgSnip1155RemoveAdmin;
class MsgSnip1155CurateTokens extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155CurateTokens = MsgSnip1155CurateTokens;
class MsgSnip1155AddCurator extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155AddCurator = MsgSnip1155AddCurator;
class MsgSnip1155RemoveCurator extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155RemoveCurator = MsgSnip1155RemoveCurator;
class MsgSnip1155Send extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155Send = MsgSnip1155Send;
class MsgSnip1155BatchSend extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155BatchSend = MsgSnip1155BatchSend;
class MsgSnip1155Mint extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155Mint = MsgSnip1155Mint;
class MsgSnip1155Burn extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155Burn = MsgSnip1155Burn;
class MsgSnip1155Transfer extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155Transfer = MsgSnip1155Transfer;
class MsgSnip1155BatchTransfer extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155BatchTransfer = MsgSnip1155BatchTransfer;
class MsgSnipAddMinter extends tx_1.MsgExecuteContract {
}
exports.MsgSnipAddMinter = MsgSnipAddMinter;
class MsgSnip1155RemoveMinter extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155RemoveMinter = MsgSnip1155RemoveMinter;
class MsgSnip1155ChangeMetadata extends tx_1.MsgExecuteContract {
}
exports.MsgSnip1155ChangeMetadata = MsgSnip1155ChangeMetadata; //# sourceMappingURL=tx.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip20/query.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Snip20Querier = void 0;
const __1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/index.js [app-ssr] (ecmascript)");
class Snip20Querier extends __1.ComputeQuerier {
    constructor(){
        super(...arguments);
        this.getSnip20Params = ({ contract })=>__awaiter(this, void 0, void 0, function*() {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        token_info: {}
                    }
                });
            });
        this.getBalance = ({ contract, address, auth })=>__awaiter(this, void 0, void 0, function*() {
                if (auth.key) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            balance: {
                                address,
                                key: auth.key
                            }
                        }
                    });
                } else if (auth.permit) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            with_permit: {
                                permit: auth.permit,
                                query: {
                                    balance: {}
                                }
                            }
                        }
                    });
                }
                throw new Error("Empty auth parameter for authenticated query: GetBalance");
            });
        this.getTransferHistory = ({ contract, address, auth, page, page_size, should_filter_decoys })=>__awaiter(this, void 0, void 0, function*() {
                if (auth.key) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            transfer_history: {
                                address,
                                key: auth.key,
                                page,
                                page_size,
                                should_filter_decoys
                            }
                        }
                    });
                } else if (auth.permit) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            with_permit: {
                                permit: auth.permit,
                                query: {
                                    transfer_history: {
                                        page,
                                        page_size,
                                        should_filter_decoys
                                    }
                                }
                            }
                        }
                    });
                }
                throw new Error("Empty auth parameter for authenticated query: getTransferHistory");
            });
        this.getTransactionHistory = ({ contract, address, auth, page, page_size, should_filter_decoys })=>__awaiter(this, void 0, void 0, function*() {
                if (auth.key) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            transaction_history: {
                                address,
                                key: auth.key,
                                page,
                                page_size,
                                should_filter_decoys
                            }
                        }
                    });
                } else if (auth.permit) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            with_permit: {
                                permit: auth.permit,
                                query: {
                                    transaction_history: {
                                        page,
                                        page_size,
                                        should_filter_decoys
                                    }
                                }
                            }
                        }
                    });
                }
                throw new Error("Empty auth parameter for authenticated query: getTransactionHistory");
            });
        this.GetAllowance = ({ contract, owner, spender, auth })=>__awaiter(this, void 0, void 0, function*() {
                if (auth.key) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            allowance: {
                                owner,
                                spender,
                                key: auth.key
                            }
                        }
                    });
                } else if (auth.permit) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.code_hash,
                        query: {
                            with_permit: {
                                permit: auth.permit,
                                query: {
                                    allowance: {
                                        owner,
                                        spender
                                    }
                                }
                            }
                        }
                    });
                }
                throw new Error("Empty auth parameter for authenticated query: GetAllowance");
            });
    }
}
exports.Snip20Querier = Snip20Querier; //# sourceMappingURL=query.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip20/tx.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MsgSnip20SetViewingKey = exports.MsgSnip20DecreaseAllowance = exports.MsgSnip20IncreaseAllowance = exports.MsgSnip20Transfer = exports.MsgSnip20Send = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/index.js [app-ssr] (ecmascript)");
class MsgSnip20Send extends tx_1.MsgExecuteContract {
}
exports.MsgSnip20Send = MsgSnip20Send;
class MsgSnip20Transfer extends tx_1.MsgExecuteContract {
}
exports.MsgSnip20Transfer = MsgSnip20Transfer;
class MsgSnip20IncreaseAllowance extends tx_1.MsgExecuteContract {
}
exports.MsgSnip20IncreaseAllowance = MsgSnip20IncreaseAllowance;
class MsgSnip20DecreaseAllowance extends tx_1.MsgExecuteContract {
}
exports.MsgSnip20DecreaseAllowance = MsgSnip20DecreaseAllowance;
class MsgSnip20SetViewingKey extends tx_1.MsgExecuteContract {
}
exports.MsgSnip20SetViewingKey = MsgSnip20SetViewingKey; //# sourceMappingURL=tx.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip20/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip20/query.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip20/tx.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip721/query.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Snip721Querier = void 0;
const query_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/index.js [app-ssr] (ecmascript)");
class Snip721Querier extends query_1.ComputeQuerier {
    constructor(){
        super(...arguments);
        this.GetTokenInfo = ({ contract, auth, token_id })=>__awaiter(this, void 0, void 0, function*() {
                if (auth.viewer) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.codeHash,
                        query: {
                            all_nft_info: {
                                token_id,
                                viewer: auth.viewer
                            }
                        }
                    });
                } else if (auth.permit) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.codeHash,
                        query: {
                            with_permit: {
                                permit: auth.permit,
                                query: {
                                    all_nft_info: {
                                        token_id
                                    }
                                }
                            }
                        }
                    });
                }
                throw new Error("Empty auth parameter for authenticated query: GetTokenInfo");
            });
        this.GetOwnedTokens = ({ contract, auth, owner })=>__awaiter(this, void 0, void 0, function*() {
                if (auth.viewer) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.codeHash,
                        query: {
                            tokens: {
                                owner,
                                viewing_key: auth.viewer.viewing_key
                            }
                        }
                    });
                } else if (auth.permit) {
                    return yield this.queryContract({
                        contract_address: contract.address,
                        code_hash: contract.codeHash,
                        query: {
                            with_permit: {
                                permit: auth.permit,
                                query: {
                                    tokens: {
                                        owner
                                    }
                                }
                            }
                        }
                    });
                }
                throw new Error("Empty auth parameter for authenticated query: GetOwnedTokens");
            });
    }
}
exports.Snip721Querier = Snip721Querier; //# sourceMappingURL=query.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip721/tx.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MsgSnip721Mint = exports.MsgSnip721AddMinter = exports.MsgSnip721Send = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/index.js [app-ssr] (ecmascript)");
class MsgSnip721Send extends tx_1.MsgExecuteContract {
}
exports.MsgSnip721Send = MsgSnip721Send;
class MsgSnip721AddMinter extends tx_1.MsgExecuteContract {
}
exports.MsgSnip721AddMinter = MsgSnip721AddMinter;
class MsgSnip721Mint extends tx_1.MsgExecuteContract {
}
exports.MsgSnip721Mint = MsgSnip721Mint; //# sourceMappingURL=tx.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip721/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip721/query.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip721/tx.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/viewing_key/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/permit/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/viewing_key/index.js [app-ssr] (ecmascript)"), exports); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/utils.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bytesToAddress = exports.addressToBytes = exports.validateAddress = exports.coinsFromString = exports.stringToCoins = exports.coinFromString = exports.stringToCoin = exports.ibcDenom = exports.base64TendermintPubkeyToValconsAddress = exports.tendermintPubkeyToValconsAddress = exports.validatorAddressToSelfDelegatorAddress = exports.selfDelegatorAddressToValidatorAddress = exports.base64PubkeyToAddress = exports.pubkeyToAddress = exports.is_gzip = void 0;
const encoding_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)");
const ripemd160_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.0.0/node_modules/@noble/hashes/ripemd160.js [app-ssr] (ecmascript)");
const sha256_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.0.0/node_modules/@noble/hashes/sha256.js [app-ssr] (ecmascript)");
/**
 *
 * Copied here to avoid unnecessary deps
 *
 * MIT License
 *
 * Copyright (c) Kevin Mårtensson <kevinmartensson@gmail.com> (github.com/kevva)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @param buf
 */ const is_gzip = (buf)=>{
    if (!buf || buf.length < 3) {
        return false;
    }
    return buf[0] === 0x1f && buf[1] === 0x8b && buf[2] === 0x08;
};
exports.is_gzip = is_gzip;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="secret"] The address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */ function pubkeyToAddress(pubkey, prefix = "secret") {
    return (0, encoding_1.toBech32)(prefix, (0, ripemd160_1.ripemd160)((0, sha256_1.sha256)(pubkey)));
}
exports.pubkeyToAddress = pubkeyToAddress;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey as base64 string, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="secret"] The address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */ function base64PubkeyToAddress(pubkey, prefix = "secret") {
    return pubkeyToAddress((0, encoding_1.fromBase64)(pubkey), prefix);
}
exports.base64PubkeyToAddress = base64PubkeyToAddress;
/**
 * Convert self delegator address to validator address
 *
 * @param {String} selfDelegator The self delegator toBech32d address
 * @param {String} [prefix="secret"] The self delegator address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */ function selfDelegatorAddressToValidatorAddress(selfDelegator, prefix = "secret") {
    return (0, encoding_1.toBech32)(`${prefix}valoper`, (0, encoding_1.fromBech32)(selfDelegator).data);
}
exports.selfDelegatorAddressToValidatorAddress = selfDelegatorAddressToValidatorAddress;
/**
 * Convert self delegator address to validator address
 *
 * @param {String} validator The validator toBech32d address
 * @param {String} [prefix="secret"] The self delegator address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */ function validatorAddressToSelfDelegatorAddress(validator, prefix = "secret") {
    return (0, encoding_1.toBech32)(prefix, (0, encoding_1.fromBech32)(validator).data);
}
exports.validatorAddressToSelfDelegatorAddress = validatorAddressToSelfDelegatorAddress;
/**
 * Convert a Tendermint ed25519 public key to a consensus address
 *
 * @param {Uint8Array} pubkey The tendermint pubkey, should be 32 bytes (ed25519)
 * @param {String} [prefix="secret"] The valcons address' bech32 prefix. Defaults to `"secret"`.
 * @returns the valcons account's address
 */ function tendermintPubkeyToValconsAddress(pubkey, prefix = "secret") {
    return (0, encoding_1.toBech32)(`${prefix}valcons`, (0, sha256_1.sha256)(pubkey).slice(0, 20));
}
exports.tendermintPubkeyToValconsAddress = tendermintPubkeyToValconsAddress;
/**
 * Convert a secp256k1 compressed public key to an address
 *
 * @param {Uint8Array} pubkey The account's pubkey as base64 string, should be 33 bytes (compressed secp256k1)
 * @param {String} [prefix="secret"] The address' bech32 prefix. Defaults to `"secret"`.
 * @returns the account's address
 */ function base64TendermintPubkeyToValconsAddress(pubkey, prefix = "secret") {
    return tendermintPubkeyToValconsAddress((0, encoding_1.fromBase64)(pubkey), prefix);
}
exports.base64TendermintPubkeyToValconsAddress = base64TendermintPubkeyToValconsAddress;
/**
 * Compute the IBC denom of a token that was sent over IBC.
 *
 * For example, to get the IBC denom of SCRT on mainnet Osmosis:
 * ```
 * ibcDenom([{incomingPortId: "transfer", incomingChannelId: "channel-88"}], "uscrt")
 * ```
 */ const ibcDenom = (paths, coinMinimalDenom)=>{
    const prefixes = [];
    for (const path of paths){
        prefixes.push(`${path.incomingPortId}/${path.incomingChannelId}`);
    }
    const prefix = prefixes.join("/");
    const denom = `${prefix}/${coinMinimalDenom}`;
    return "ibc/" + (0, encoding_1.toHex)((0, sha256_1.sha256)((0, encoding_1.toUtf8)(denom))).toUpperCase();
};
exports.ibcDenom = ibcDenom;
/**
 * E.g. `"1uscrt"` => `{amount:"1",denom:"uscrt"}`
 */ const stringToCoin = (coinAsString)=>{
    const regexMatch = coinAsString.match(/^(\d+)([a-z]+)$/);
    if (regexMatch === null) {
        throw new Error(`cannot extract denom & amount from '${coinAsString}'`);
    }
    return {
        amount: regexMatch[1],
        denom: regexMatch[2]
    };
};
exports.stringToCoin = stringToCoin;
/**
 * E.g. `"1uscrt"` => `{amount:"1",denom:"uscrt"}`
 */ exports.coinFromString = exports.stringToCoin;
/**
 * E.g. `"1uscrt,1uatom,1uosmo"` =>
 * `[{amount:"1",denom:"uscrt"},{amount:"1",denom:"uatom"},{amount:"1",denom:"uosmo"}]`
 */ const stringToCoins = (coinsAsString)=>coinsAsString.split(",").map(exports.stringToCoin);
exports.stringToCoins = stringToCoins;
/**
 * E.g. `"1uscrt,1uatom,1uosmo"` =>
 * `[{amount:"1",denom:"uscrt"},{amount:"1",denom:"uatom"},{amount:"1",denom:"uosmo"}]`
 */ exports.coinsFromString = exports.stringToCoins;
/**
 * validateAddress checks if a given address is a valid address
 * @param {string} address the address to check
 * @param {string?} prefix the address prefix, defaults to `"secret"`
 * @returns `{ isValid: true }` if valid, `{ isValid: false, reason: "..." }` if not valid
 */ const validateAddress = (address, prefix = "secret")=>{
    let decoded;
    try {
        decoded = (0, encoding_1.fromBech32)(address);
    } catch (e) {
        let reason = "failed to decode address as a bech32";
        if (e instanceof Error) {
            reason += `: ${e.message}`;
        }
        return {
            isValid: false,
            reason
        };
    }
    if (decoded.prefix !== prefix) {
        return {
            isValid: false,
            reason: `wrong bech32 prefix, expected '${prefix}', got '${decoded.prefix}'`
        };
    }
    const canonicalAddress = decoded.data;
    if (canonicalAddress.length !== 20 && canonicalAddress.length !== 32) {
        return {
            isValid: false,
            reason: `wrong address length, expected 20 or 32 bytes, got ${canonicalAddress.length}`
        };
    }
    return {
        isValid: true
    };
};
exports.validateAddress = validateAddress;
/**
 * Converts an address from a bech32 string to the bytes representation.
 * @param {string} address - The address bech32 string to convert.
 * @returns {Uint8Array} - The resulting bytes address.
 */ function addressToBytes(address) {
    if (address === "") {
        return new Uint8Array(0);
    }
    return (0, encoding_1.fromBech32)(address).data;
}
exports.addressToBytes = addressToBytes;
/**
 * Converts an address from bytes to the strong representation.
 * @param {Uint8Array} bytes - The address bytes to convert.
 * @param {string} prefix - The bech32 prefix to use.
 * @returns {string} - The resulting bech32 string address.
 */ function bytesToAddress(bytes, prefix = "secret") {
    if (bytes.length === 0) {
        return "";
    }
    return (0, encoding_1.toBech32)(prefix, bytes);
}
exports.bytesToAddress = bytesToAddress; //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/secret_network_client.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TxResultCode = exports.gasToFee = exports.SecretNetworkClient = exports.ReadonlySigner = exports.BroadcastMode = void 0;
// conditinally load cross-fetch for nodejs and react-native
if (typeof window === "undefined" || typeof window.fetch === "undefined") {
    const fetch = __turbopack_require__("[project]/node_modules/.pnpm/cross-fetch@3.1.5_encoding@0.1.13/node_modules/cross-fetch/dist/node-ponyfill.js [app-ssr] (ecmascript)");
    global.fetch = fetch;
}
const encoding_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)");
const sha256_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.0.0/node_modules/@noble/hashes/sha256.js [app-ssr] (ecmascript)");
const _1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/index.js [app-ssr] (ecmascript)");
const encryption_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/encryption.js [app-ssr] (ecmascript)");
const permit_signer_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/permit/permit_signer.js [app-ssr] (ecmascript)");
const msgs_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/viewing_key/msgs.js [app-ssr] (ecmascript)");
const query_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip1155/query.js [app-ssr] (ecmascript)");
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip1155/tx.js [app-ssr] (ecmascript)");
const snip20_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip20/index.js [app-ssr] (ecmascript)");
const snip721_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip721/index.js [app-ssr] (ecmascript)");
const service_pb_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/tx/v1beta1/service.pb.js [app-ssr] (ecmascript)");
const abci_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/base/abci/v1beta1/abci.js [app-ssr] (ecmascript)");
const tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/tx/v1beta1/tx.js [app-ssr] (ecmascript)");
const any_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/google/protobuf/any.js [app-ssr] (ecmascript)");
const msg_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/secret/compute/v1beta1/msg.js [app-ssr] (ecmascript)");
const auth_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/auth.js [app-ssr] (ecmascript)");
const authz_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/authz.js [app-ssr] (ecmascript)");
const bank_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/bank.js [app-ssr] (ecmascript)");
const compute_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/compute.js [app-ssr] (ecmascript)");
const distribution_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/distribution.js [app-ssr] (ecmascript)");
const emergency_button_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/emergency_button.js [app-ssr] (ecmascript)");
const evidence_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/evidence.js [app-ssr] (ecmascript)");
const feegrant_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/feegrant.js [app-ssr] (ecmascript)");
const gov_v1beta1_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/gov_v1beta1.js [app-ssr] (ecmascript)");
const gov_v1_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/gov_v1.js [app-ssr] (ecmascript)");
const ibc_channel_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_channel.js [app-ssr] (ecmascript)");
const ibc_client_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_client.js [app-ssr] (ecmascript)");
const ibc_connection_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_connection.js [app-ssr] (ecmascript)");
const ibc_fee_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_fee.js [app-ssr] (ecmascript)");
const ibc_interchain_accounts_controller_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_interchain_accounts_controller.js [app-ssr] (ecmascript)");
const ibc_interchain_accounts_host_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_interchain_accounts_host.js [app-ssr] (ecmascript)");
const ibc_packet_forward_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_packet_forward.js [app-ssr] (ecmascript)");
const ibc_transfer_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/ibc_transfer.js [app-ssr] (ecmascript)");
const mint_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/mint.js [app-ssr] (ecmascript)");
const params_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/params.js [app-ssr] (ecmascript)");
const registration_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/registration.js [app-ssr] (ecmascript)");
const slashing_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/slashing.js [app-ssr] (ecmascript)");
const staking_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/staking.js [app-ssr] (ecmascript)");
const tendermint_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/tendermint.js [app-ssr] (ecmascript)");
const upgrade_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/upgrade.js [app-ssr] (ecmascript)");
const consensus_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/consensus.js [app-ssr] (ecmascript)");
const tx_3 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/index.js [app-ssr] (ecmascript)");
const emergency_button_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/emergency_button.js [app-ssr] (ecmascript)");
const registration_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/registration.js [app-ssr] (ecmascript)");
const vesting_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/vesting.js [app-ssr] (ecmascript)");
const amino_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+amino@0.32.4/node_modules/@cosmjs/amino/build/index.js [app-ssr] (ecmascript)");
const proto_signing_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+proto-signing@0.32.4/node_modules/@cosmjs/proto-signing/build/index.js [app-ssr] (ecmascript)");
const orm_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/orm.js [app-ssr] (ecmascript)");
const app_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/app.js [app-ssr] (ecmascript)");
const autocli_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/autocli.js [app-ssr] (ecmascript)");
var BroadcastMode;
(function(BroadcastMode) {
    /**
     * Broadcast transaction to mempool and wait for DeliverTx response.
     *
     * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_commit
     */ BroadcastMode["Block"] = "Block";
    /**
     * Broadcast transaction to mempool and wait for CheckTx response.
     *
     * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_sync
     */ BroadcastMode["Sync"] = "Sync";
    /**
     * Broadcast transaction to mempool and do not wait for CheckTx response.
     *
     * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_async
     */ BroadcastMode["Async"] = "Async";
})(BroadcastMode = exports.BroadcastMode || (exports.BroadcastMode = {}));
class ReadonlySigner {
    getAccounts() {
        throw new Error("getAccounts() is not supported in readonly mode.");
    }
    signAmino(_signerAddress, _signDoc) {
        throw new Error("signAmino() is not supported in readonly mode.");
    }
}
exports.ReadonlySigner = ReadonlySigner;
class SecretNetworkClient {
    /** Creates a new SecretNetworkClient client. For a readonly client pass just the `url` param. */ constructor(options){
        var _a, _b;
        this.url = options.url.replace(/\/*$/g, ""); // remove trailing slashes
        this.query = {
            auth: new auth_1.AuthQuerier(options.url),
            authz: new authz_1.AuthzQuerier(options.url),
            bank: new bank_1.BankQuerier(options.url),
            consensus: new consensus_1.ConsensusQuerier(options.url),
            compute: new compute_1.ComputeQuerier(options.url),
            snip20: new snip20_1.Snip20Querier(options.url),
            snip721: new snip721_1.Snip721Querier(options.url),
            snip1155: new query_1.Snip1155Querier(options.url),
            distribution: new distribution_1.DistributionQuerier(options.url),
            evidence: new evidence_1.EvidenceQuerier(options.url),
            feegrant: new feegrant_1.FeegrantQuerier(options.url),
            gov: new gov_v1_1.GovV1Querier(options.url),
            gov_v1beta1: new gov_v1beta1_1.GovV1Beta1Querier(options.url),
            ibc_channel: new ibc_channel_1.IbcChannelQuerier(options.url),
            ibc_client: new ibc_client_1.IbcClientQuerier(options.url),
            ibc_connection: new ibc_connection_1.IbcConnectionQuerier(options.url),
            ibc_transfer: new ibc_transfer_1.IbcTransferQuerier(options.url),
            ibc_iterchain_accounts_host: new ibc_interchain_accounts_host_1.IbcInterchainAccountsHostQuerier(options.url),
            ibc_iterchain_accounts_controller: new ibc_interchain_accounts_controller_1.IbcInterchainAccountsControllerQuerier(options.url),
            ibc_fee: new ibc_fee_1.IbcFeeQuerier(options.url),
            ibc_packet_forward: new ibc_packet_forward_1.IbcPacketForwardQuerier(options.url),
            emergency_button: new emergency_button_1.EmergencyButtonQuerier(options.url),
            mint: new mint_1.MintQuerier(options.url),
            node: new _1.NodeQuerier(options.url),
            params: new params_1.ParamsQuerier(options.url),
            registration: new registration_1.RegistrationQuerier(options.url),
            slashing: new slashing_1.SlashingQuerier(options.url),
            staking: new staking_1.StakingQuerier(options.url),
            tendermint: new tendermint_1.TendermintQuerier(options.url),
            upgrade: new upgrade_1.UpgradeQuerier(options.url),
            orm: new orm_1.OrmQuerier(options.url),
            app: new app_1.AppQuerier(options.url),
            autocli: new autocli_1.AutoCliQuerier(options.url),
            getTx: (hash, ibcTxOptions)=>this.getTx(hash, ibcTxOptions),
            txsQuery: (query, ibcTxOptions, pagination, order_by)=>this.txsQuery(query, ibcTxOptions, pagination, order_by)
        };
        if (options.wallet && options.walletAddress === undefined) {
            throw new Error("Must also pass 'walletAddress' when passing 'wallet'");
        }
        this.wallet = (_a = options.wallet) !== null && _a !== void 0 ? _a : new ReadonlySigner();
        this.address = (_b = options.walletAddress) !== null && _b !== void 0 ? _b : "";
        this.chainId = options.chainId;
        this.utils = {
            accessControl: {
                permit: new permit_signer_1.PermitSigner(this.wallet)
            }
        };
        // TODO fix this "any"
        const doMsg = (msgClass)=>{
            const func = (params, options)=>{
                return this.tx.broadcast([
                    new msgClass(params)
                ], options);
            };
            func.simulate = (params, options)=>{
                return this.tx.simulate([
                    new msgClass(params)
                ], options);
            };
            return func;
        };
        this.tx = {
            signTx: this.signTx.bind(this),
            broadcastSignedTx: this.broadcastSignedTx.bind(this),
            broadcast: this.signAndBroadcast.bind(this),
            simulate: this.simulate.bind(this),
            snip20: {
                send: doMsg(snip20_1.MsgSnip20Send),
                transfer: doMsg(snip20_1.MsgSnip20Transfer),
                increaseAllowance: doMsg(snip20_1.MsgSnip20IncreaseAllowance),
                decreaseAllowance: doMsg(snip20_1.MsgSnip20DecreaseAllowance),
                setViewingKey: doMsg(msgs_1.MsgSetViewingKey),
                createViewingKey: doMsg(msgs_1.MsgCreateViewingKey)
            },
            snip721: {
                send: doMsg(snip721_1.MsgSnip721Send),
                mint: doMsg(_1.MsgSnip721Mint),
                addMinter: doMsg(_1.MsgSnip721AddMinter),
                setViewingKey: doMsg(msgs_1.MsgSetViewingKey),
                createViewingKey: doMsg(msgs_1.MsgCreateViewingKey)
            },
            snip1155: {
                changeAdmin: doMsg(tx_1.MsgSnip1155ChangeAdmin),
                removeAdmin: doMsg(tx_1.MsgSnip1155RemoveAdmin),
                addCurator: doMsg(tx_1.MsgSnip1155AddCurator),
                removeCurator: doMsg(tx_1.MsgSnip1155RemoveCurator),
                addMinter: doMsg(tx_1.MsgSnipAddMinter),
                removeMinter: doMsg(tx_1.MsgSnip1155RemoveMinter),
                send: doMsg(tx_1.MsgSnip1155Send),
                batchSend: doMsg(tx_1.MsgSnip1155BatchSend),
                transfer: doMsg(tx_1.MsgSnip1155Transfer),
                batchTransfer: doMsg(tx_1.MsgSnip1155BatchTransfer),
                curate: doMsg(tx_1.MsgSnip1155CurateTokens),
                mint: doMsg(tx_1.MsgSnip1155Mint),
                burn: doMsg(tx_1.MsgSnip1155Burn),
                changeMetaData: doMsg(tx_1.MsgSnip1155ChangeMetadata),
                setViewingKey: doMsg(msgs_1.MsgSetViewingKey),
                createViewingKey: doMsg(msgs_1.MsgCreateViewingKey)
            },
            authz: {
                exec: doMsg(_1.MsgExec),
                grant: doMsg(_1.MsgGrant),
                revoke: doMsg(_1.MsgRevoke)
            },
            bank: {
                multiSend: doMsg(_1.MsgMultiSend),
                send: doMsg(_1.MsgSend),
                setSendEnabled: doMsg(_1.MsgSetSendEnabled)
            },
            compute: {
                storeCode: doMsg(_1.MsgStoreCode),
                instantiateContract: doMsg(_1.MsgInstantiateContract),
                executeContract: doMsg(_1.MsgExecuteContract),
                migrateContract: doMsg(tx_3.MsgMigrateContract),
                updateAdmin: doMsg(tx_3.MsgUpdateAdmin),
                clearAdmin: doMsg(tx_3.MsgClearAdmin)
            },
            emergency_button: {
                toggleIbcSwitch: doMsg(emergency_button_2.MsgToggleIbcSwitch)
            },
            crisis: {
                verifyInvariant: doMsg(_1.MsgVerifyInvariant)
            },
            distribution: {
                fundCommunityPool: doMsg(_1.MsgFundCommunityPool),
                setWithdrawAddress: doMsg(_1.MsgSetWithdrawAddress),
                withdrawDelegatorReward: doMsg(_1.MsgWithdrawDelegatorReward),
                withdrawValidatorCommission: doMsg(_1.MsgWithdrawValidatorCommission),
                setAutoRestake: doMsg(tx_3.MsgSetAutoRestake),
                communityPoolSpend: doMsg(_1.MsgCommunityPoolSpend),
                depositValidatorRewardsPool: doMsg(_1.MsgDepositValidatorRewardsPool)
            },
            evidence: {
                submitEvidence: doMsg(_1.MsgSubmitEvidence)
            },
            feegrant: {
                grantAllowance: doMsg(_1.MsgGrantAllowance),
                revokeAllowance: doMsg(_1.MsgRevokeAllowance),
                pruneAllowances: doMsg(_1.MsgPruneAllowances)
            },
            gov: {
                deposit: doMsg(_1.MsgDeposit),
                submitProposal: doMsg(_1.MsgSubmitProposal),
                vote: doMsg(_1.MsgVote),
                voteWeighted: doMsg(_1.MsgVoteWeighted),
                execLegacyContent: doMsg(_1.MsgExecLegacyContent),
                cancelProposal: doMsg(_1.MsgCancelProposal)
            },
            ibc: {
                transfer: doMsg(_1.MsgTransfer)
            },
            ibc_interchain_accounts: {
                sendTx: doMsg(_1.MsgSendTx),
                registerInterchainAccount: doMsg(_1.MsgRegisterInterchainAccount)
            },
            ibc_fee: {
                payPacketFee: doMsg(tx_3.MsgPayPacketFee),
                payPacketFeeAsync: doMsg(tx_3.MsgPayPacketFeeAsync),
                registerPayee: doMsg(tx_3.MsgRegisterPayee),
                registerCounterpartyPayee: doMsg(tx_3.MsgRegisterCounterpartyPayee)
            },
            registration: {
                register: doMsg(registration_2.RaAuthenticate)
            },
            slashing: {
                unjail: doMsg(_1.MsgUnjail)
            },
            staking: {
                beginRedelegate: doMsg(_1.MsgBeginRedelegate),
                createValidator: doMsg(_1.MsgCreateValidator),
                delegate: doMsg(_1.MsgDelegate),
                editValidator: doMsg(_1.MsgEditValidator),
                undelegate: doMsg(_1.MsgUndelegate),
                cancelUnbondingDelegation: doMsg(_1.MsgCancelUnbondingDelegation)
            },
            upgrade: {
                softwareUpgrade: doMsg(_1.MsgSoftwareUpgrade),
                cancelUpgrade: doMsg(_1.MsgCancelUpgrade)
            },
            vesting: {
                createVestingAccount: doMsg(vesting_1.MsgCreateVestingAccount),
                createPermanentLockedAccount: doMsg(_1.MsgCreatePermanentLockedAccount),
                createPeriodicVestingAccount: doMsg(_1.MsgCreatePeriodicVestingAccount)
            }
        };
        if (options.encryptionUtils) {
            this.encryptionUtils = options.encryptionUtils;
        } else {
            this.encryptionUtils = new encryption_1.EncryptionUtilsImpl(this.url, options.encryptionSeed, this.chainId);
        }
        // Reinitialize ComputeQuerier with a shared EncryptionUtils (better caching, same seed)
        this.query.compute = new compute_1.ComputeQuerier(this.url, this.encryptionUtils);
    }
    getTx(hash, ibcTxOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const { tx_response } = yield service_pb_1.Service.GetTx({
                    hash
                }, {
                    pathPrefix: this.url
                });
                return tx_response ? this.decodeTxResponse(tx_response, ibcTxOptions) : null;
            } catch (error) {
                const txNotFoundRegex = new RegExp(`tx not found: ${hash}|tx \\(${hash}\\) not found`, "i");
                if (typeof (error === null || error === void 0 ? void 0 : error.message) == "string" && ((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.match(txNotFoundRegex)) !== null) {
                    return null;
                } else {
                    throw error;
                }
            }
        });
    }
    txsQuery(query, ibcTxOptions = {
        resolveResponses: false
    }, pagination = {
        key: undefined,
        offset: undefined,
        limit: undefined,
        count_total: undefined,
        reverse: undefined
    }, order_by) {
        return __awaiter(this, void 0, void 0, function*() {
            const { tx_responses } = yield service_pb_1.Service.GetTxsEvent({
                events: query.split(" AND ").map((q)=>q.trim()),
                query,
                pagination,
                limit: pagination.limit,
                page: pagination.offset ? String(Number(pagination.offset) + 1) : "1",
                order_by
            }, {
                pathPrefix: this.url
            });
            return this.decodeTxResponses(tx_responses !== null && tx_responses !== void 0 ? tx_responses : [], ibcTxOptions);
        });
    }
    waitForIbcResponse(packetSequence, packetSrcChannel, type, ibcTxOptions, isDoneObject) {
        return __awaiter(this, void 0, void 0, function*() {
            return new Promise((resolve, reject)=>__awaiter(this, void 0, void 0, function*() {
                    let tries = ibcTxOptions.resolveResponsesTimeoutMs / ibcTxOptions.resolveResponsesCheckIntervalMs;
                    let txType = type;
                    if (type === "ack") {
                        txType = "acknowledge";
                    }
                    const query = [
                        `${txType}_packet.packet_src_channel='${packetSrcChannel}'`,
                        `${txType}_packet.packet_sequence='${packetSequence}'`
                    ].join(" AND ");
                    while(tries > 0 && !isDoneObject.isDone){
                        const txs = yield this.txsQuery(query);
                        const ibcRespTx = txs.find((tx)=>tx.code === 0);
                        if (ibcRespTx) {
                            isDoneObject.isDone = true;
                            resolve({
                                type,
                                tx: ibcRespTx
                            });
                        }
                        tries--;
                        yield sleep(ibcTxOptions.resolveResponsesCheckIntervalMs);
                    }
                    reject(`timed-out while trying to resolve IBC ${type} tx for packet_src_channel='${packetSrcChannel}' and packet_sequence='${packetSequence}'`);
                }));
        });
    }
    decodeTxResponses(txResponses, ibcTxOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield Promise.all(txResponses.map((x)=>this.decodeTxResponse(x, ibcTxOptions)));
        });
    }
    decodeTxResponse(txResp, ibcTxOptions) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function*() {
            let explicitIbcTxOptions;
            if (!ibcTxOptions) {
                explicitIbcTxOptions = {
                    resolveResponses: true,
                    resolveResponsesTimeoutMs: 120000,
                    resolveResponsesCheckIntervalMs: 15000
                };
            } else {
                explicitIbcTxOptions = {
                    resolveResponses: typeof ibcTxOptions.resolveResponses === "boolean" ? ibcTxOptions.resolveResponses : true,
                    resolveResponsesTimeoutMs: typeof ibcTxOptions.resolveResponsesTimeoutMs === "number" ? ibcTxOptions.resolveResponsesTimeoutMs : 120000,
                    resolveResponsesCheckIntervalMs: typeof ibcTxOptions.resolveResponsesCheckIntervalMs === "number" ? ibcTxOptions.resolveResponsesCheckIntervalMs : 15000
                };
            }
            const nonces = [];
            const tx = txResp.tx;
            // Decoded input tx messages
            for(let i = 0; !isNaN(Number((_b = (_a = tx === null || tx === void 0 ? void 0 : tx.body) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b.length)) && i < Number((_d = (_c = tx === null || tx === void 0 ? void 0 : tx.body) === null || _c === void 0 ? void 0 : _c.messages) === null || _d === void 0 ? void 0 : _d.length); i++){
                const msg = tx.body.messages[i];
                // Check if the message needs decryption
                let contractInputMsgFieldName = "";
                if (msg["@type"] === "/secret.compute.v1beta1.MsgInstantiateContract") {
                    contractInputMsgFieldName = "init_msg";
                } else if (msg["@type"] === "/secret.compute.v1beta1.MsgExecuteContract" || msg["@type"] === "/secret.compute.v1beta1.MsgMigrateContract") {
                    contractInputMsgFieldName = "msg";
                }
                if (contractInputMsgFieldName !== "") {
                    // Encrypted, try to decrypt
                    try {
                        const contractInputMsgBytes = (0, encoding_1.fromBase64)(msg[contractInputMsgFieldName]);
                        const nonce = contractInputMsgBytes.slice(0, 32);
                        const ciphertext = contractInputMsgBytes.slice(64);
                        const plaintext = yield this.encryptionUtils.decrypt(ciphertext, nonce);
                        msg[contractInputMsgFieldName] = JSON.parse((0, encoding_1.fromUtf8)(plaintext).slice(64));
                        nonces[i] = nonce; // Fill nonces array to later use it in output decryption
                    } catch (decryptionError) {
                    // Not encrypted or can't decrypt because not original sender
                    }
                }
                tx.body.messages[i] = msg;
            }
            let rawLog = txResp.raw_log;
            let jsonLog = [];
            let arrayLog = [];
            let ibcResponses = [];
            const events = (_e = txResp.events) !== null && _e !== void 0 ? _e : [];
            if (txResp.code === 0 && rawLog === "") {
                for (const event of events){
                    const eventAttributes = (_f = event.attributes) !== null && _f !== void 0 ? _f : [];
                    const msgIndexAttr = eventAttributes.find((attr)=>attr["key"] === "msg_index");
                    if (!msgIndexAttr) continue;
                    const msgIndex = Number(msgIndexAttr["value"]);
                    for (const attr of eventAttributes){
                        if (attr.key === "msg_index") continue;
                        // Try to decrypt
                        if (event.type === "wasm") {
                            const nonce = nonces[msgIndex];
                            if (nonce && nonce.length === 32) {
                                try {
                                    attr.key = (0, encoding_1.fromUtf8)((yield this.encryptionUtils.decrypt((0, encoding_1.fromBase64)(attr.key), nonce))).trim();
                                } catch (e) {}
                                try {
                                    attr.value = (0, encoding_1.fromUtf8)((yield this.encryptionUtils.decrypt((0, encoding_1.fromBase64)(attr.value), nonce))).trim();
                                } catch (e) {}
                            }
                        }
                        const entryToPush = {
                            msg: msgIndex,
                            type: event.type,
                            key: attr.key,
                            value: attr.value
                        };
                        if (!arrayLog.find((entry)=>JSON.stringify(entry) === JSON.stringify(entryToPush))) {
                            arrayLog.push(entryToPush);
                        }
                        const jsonLogMsgIndexEntry = jsonLog === null || jsonLog === void 0 ? void 0 : jsonLog.find((log)=>log.msg_index === msgIndex);
                        if (!jsonLogMsgIndexEntry) {
                            jsonLog.push({
                                msg_index: msgIndex,
                                events: [
                                    {
                                        type: event.type,
                                        attributes: [
                                            {
                                                key: attr.key,
                                                value: attr.value
                                            }
                                        ]
                                    }
                                ]
                            });
                        } else {
                            const jsonLogEventEntry = jsonLogMsgIndexEntry.events.find((log)=>log.type === event.type);
                            if (!jsonLogEventEntry) {
                                jsonLogMsgIndexEntry.events.push({
                                    type: event.type,
                                    attributes: [
                                        {
                                            key: attr.key,
                                            value: attr.value
                                        }
                                    ]
                                });
                            } else {
                                const attributeToPush = {
                                    key: attr.key,
                                    value: attr.value
                                };
                                if (!jsonLogEventEntry.attributes.find((entry)=>JSON.stringify(entry) === JSON.stringify(attributeToPush))) {
                                    jsonLogEventEntry.attributes.push(attributeToPush);
                                }
                            }
                        }
                    }
                }
            } else if (txResp.code !== 0 && rawLog !== "") {
                try {
                    const errorMessageRgx = /; message index: (\d+):(?: dispatch: submessages:)* encrypted: (.+?): (?:instantiate|execute|query|reply to|migrate) contract failed/g;
                    const rgxMatches = errorMessageRgx.exec(rawLog);
                    if ((rgxMatches === null || rgxMatches === void 0 ? void 0 : rgxMatches.length) === 3) {
                        const encryptedError = (0, encoding_1.fromBase64)(rgxMatches[2]);
                        const msgIndex = Number(rgxMatches[1]);
                        const decryptedBase64Error = yield this.encryptionUtils.decrypt(encryptedError, nonces[msgIndex]);
                        const decryptedError = (0, encoding_1.fromUtf8)(decryptedBase64Error);
                        rawLog = rawLog.replace(`encrypted: ${rgxMatches[2]}`, decryptedError);
                        try {
                            jsonLog = JSON.parse(decryptedError);
                        } catch (e) {}
                    }
                } catch (decryptionError) {
                // Not encrypted or can't decrypt because not original sender
                }
            }
            const txMsgData = abci_1.TxMsgData.decode((0, encoding_1.fromHex)(txResp.data));
            const data = new Array(txMsgData.msg_responses.length);
            for(let msgIndex = 0; msgIndex < txMsgData.msg_responses.length; msgIndex++){
                data[msgIndex] = txMsgData.msg_responses[msgIndex].value;
                const nonce = nonces[msgIndex];
                if (nonce && nonce.length === 32) {
                    // Check if the output data needs decryption
                    try {
                        const { "@type": type_url } = tx.body.messages[msgIndex];
                        if (type_url === "/secret.compute.v1beta1.MsgInstantiateContract") {
                            const decoded = msg_1.MsgInstantiateContractResponse.decode(txMsgData.msg_responses[msgIndex].value);
                            const decrypted = (0, encoding_1.fromBase64)((0, encoding_1.fromUtf8)((yield this.encryptionUtils.decrypt(decoded.data, nonce))));
                            data[msgIndex] = msg_1.MsgInstantiateContractResponse.encode({
                                address: decoded.address,
                                data: decrypted
                            }).finish();
                        } else if (type_url === "/secret.compute.v1beta1.MsgExecuteContract") {
                            const decoded = msg_1.MsgExecuteContractResponse.decode(txMsgData.msg_responses[msgIndex].value);
                            const decrypted = (0, encoding_1.fromBase64)((0, encoding_1.fromUtf8)((yield this.encryptionUtils.decrypt(decoded.data, nonce))));
                            data[msgIndex] = msg_1.MsgExecuteContractResponse.encode({
                                data: decrypted
                            }).finish();
                        } else if (type_url === "/secret.compute.v1beta1.MsgMigrateContract") {
                            const decoded = msg_1.MsgMigrateContractResponse.decode(txMsgData.msg_responses[msgIndex].value);
                            const decrypted = (0, encoding_1.fromBase64)((0, encoding_1.fromUtf8)((yield this.encryptionUtils.decrypt(decoded.data, nonce))));
                            data[msgIndex] = msg_1.MsgMigrateContractResponse.encode({
                                data: decrypted
                            }).finish();
                        }
                    } catch (decryptionError) {
                    // Not encrypted or can't decrypt because not original sender
                    }
                }
            }
            // IBC ACKs:
            if (txResp.code === TxResultCode.Success) {
                let packetSequences = (arrayLog === null || arrayLog === void 0 ? void 0 : arrayLog.filter((x)=>x.type === "send_packet" && x.key === "packet_sequence")) || [];
                let packetSrcChannels = (arrayLog === null || arrayLog === void 0 ? void 0 : arrayLog.filter((x)=>x.type === "send_packet" && x.key === "packet_src_channel")) || [];
                // if using secret.js we execute ibc request from another chain on cosmos-sdk < 0.50,
                // try to extract ibc packets info from rawLog
                if (packetSequences.length == 0 && packetSrcChannels.length == 0) {
                    try {
                        const jsonRawLog = JSON.parse(rawLog);
                        for (const l of jsonRawLog){
                            for (const e of l.events){
                                for (const a of e.attributes){
                                    if (`${e.type}.${a.key}` == "send_packet.packet_sequence") {
                                        packetSequences.push(a);
                                    }
                                    if (`${e.type}.${a.key}` == "send_packet.packet_src_channel") {
                                        packetSrcChannels.push(a);
                                    }
                                }
                            }
                        }
                    } catch (e) {}
                }
                if (explicitIbcTxOptions.resolveResponses) {
                    for(let msgIndex = 0; msgIndex < (packetSequences === null || packetSequences === void 0 ? void 0 : packetSequences.length); msgIndex++){
                        // isDoneObject is used to cancel the second promise if the first one is resolved
                        const isDoneObject = {
                            isDone: false
                        };
                        ibcResponses.push(Promise.race([
                            this.waitForIbcResponse(packetSequences[msgIndex].value, packetSrcChannels[msgIndex].value, "ack", explicitIbcTxOptions, isDoneObject),
                            this.waitForIbcResponse(packetSequences[msgIndex].value, packetSrcChannels[msgIndex].value, "timeout", explicitIbcTxOptions, isDoneObject)
                        ]));
                    }
                }
            }
            return {
                height: Number(txResp.height),
                timestamp: txResp.timestamp,
                transactionHash: txResp.txhash,
                code: txResp.code,
                codespace: txResp.codespace,
                info: txResp.info,
                tx,
                rawLog,
                jsonLog,
                arrayLog,
                events: txResp.events,
                data,
                gasUsed: Number(txResp.gas_used),
                gasWanted: Number(txResp.gas_wanted),
                ibcResponses
            };
        });
    }
    /**
     * Broadcasts a signed transaction to the network and monitors its inclusion in a block.
     *
     * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
     * an error is thrown.
     *
     * If the transaction is not included in a block before the provided timeout, this errors with a `TimeoutError`.
     *
     * If the transaction is included in a block, a {@link TxResponse} is returned. The caller then
     * usually needs to check for execution success or failure.
     */ broadcastTx(txBytes, timeoutMs, checkIntervalMs, mode, waitForCommit, ibcTxOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            const start = Date.now();
            const txhash = (0, encoding_1.toHex)((0, sha256_1.sha256)(txBytes)).toUpperCase();
            if (mode == BroadcastMode.Block) {
                mode = BroadcastMode.Sync;
            }
            let tx_response;
            if (mode === BroadcastMode.Sync) {
                const { BroadcastMode } = yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/tx/v1beta1/service.pb.js [app-ssr] (ecmascript)")));
                ({ tx_response } = yield service_pb_1.Service.BroadcastTx({
                    //@ts-ignore for some reason the type is tx_bytes but only works as txBytes
                    txBytes: (0, encoding_1.toBase64)(txBytes),
                    mode: BroadcastMode.BROADCAST_MODE_SYNC
                }, {
                    pathPrefix: this.url
                }));
                if ((tx_response === null || tx_response === void 0 ? void 0 : tx_response.code) !== 0) {
                    throw new Error(`Broadcasting transaction failed with code ${tx_response === null || tx_response === void 0 ? void 0 : tx_response.code} (codespace: ${tx_response === null || tx_response === void 0 ? void 0 : tx_response.codespace}). Log: ${tx_response === null || tx_response === void 0 ? void 0 : tx_response.raw_log}`);
                }
            } else if (mode === BroadcastMode.Async) {
                const { BroadcastMode } = yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/grpc_gateway/cosmos/tx/v1beta1/service.pb.js [app-ssr] (ecmascript)")));
                service_pb_1.Service.BroadcastTx({
                    //@ts-ignore for some reason the type is tx_bytes but only works as txBytes
                    txBytes: (0, encoding_1.toBase64)(txBytes),
                    mode: BroadcastMode.BROADCAST_MODE_ASYNC
                }, {
                    pathPrefix: this.url
                });
            } else {
                throw new Error(`Unknown broadcast mode "${String(mode)}", must be either "${String(BroadcastMode.Sync)}" or "${String(BroadcastMode.Async)}".`);
            }
            if (!waitForCommit) {
                //@ts-ignore
                return {
                    transactionHash: txhash
                };
            }
            // sleep first because there's no point in checking right after broadcasting
            yield sleep(checkIntervalMs / 2);
            while(true){
                const result = yield this.getTx(txhash, ibcTxOptions);
                if (result) {
                    return result;
                }
                if (start + timeoutMs < Date.now()) {
                    throw new Error(`Transaction ID ${txhash} was submitted but was not yet found on the chain. You might want to check later or increase broadcastTimeoutMs from '${timeoutMs}'.`);
                }
                yield sleep(checkIntervalMs);
            }
        });
    }
    /**
     * Prepare and sign an array of messages as a transaction
     * @async
     * @private
     * @param {Msg[]} messages - Array of messages to prepare and sign
     * @param {TxOptions} [txOptions] - An optional object of transaction options
     * @returns {Promise<Uint8Array>} Returns a Promise that resolves txBytes, which can be passed into broadcastSignedTx().
     */ signTx(messages, txOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.prepareAndSign(messages, txOptions);
        });
    }
    /**
     * Broadcast a signed transactions
     * @async
     * @private
     * @param {Uint8Array} txBytes - Signed transaction bytes, can be the output of signTx()
     * @param {TxOptions} [txOptions] - An optional object of transaction options
     * @returns {Promise<TxResponse>}
     */ broadcastSignedTx(txBytes, txOptions) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function*() {
            return this.broadcastTx(txBytes, (_a = txOptions === null || txOptions === void 0 ? void 0 : txOptions.broadcastTimeoutMs) !== null && _a !== void 0 ? _a : 60000, (_b = txOptions === null || txOptions === void 0 ? void 0 : txOptions.broadcastCheckIntervalMs) !== null && _b !== void 0 ? _b : 6000, (_c = txOptions === null || txOptions === void 0 ? void 0 : txOptions.broadcastMode) !== null && _c !== void 0 ? _c : BroadcastMode.Sync, (_d = txOptions === null || txOptions === void 0 ? void 0 : txOptions.waitForCommit) !== null && _d !== void 0 ? _d : true);
        });
    }
    prepareAndSign(messages, txOptions, simulate = false) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function*() {
            const gasLimit = (_a = txOptions === null || txOptions === void 0 ? void 0 : txOptions.gasLimit) !== null && _a !== void 0 ? _a : 25000;
            const gasPriceInFeeDenom = (_b = txOptions === null || txOptions === void 0 ? void 0 : txOptions.gasPriceInFeeDenom) !== null && _b !== void 0 ? _b : 0.1;
            const feeDenom = (_c = txOptions === null || txOptions === void 0 ? void 0 : txOptions.feeDenom) !== null && _c !== void 0 ? _c : "uscrt";
            const memo = (_d = txOptions === null || txOptions === void 0 ? void 0 : txOptions.memo) !== null && _d !== void 0 ? _d : "";
            const feeGranter = txOptions === null || txOptions === void 0 ? void 0 : txOptions.feeGranter;
            const explicitSignerData = txOptions === null || txOptions === void 0 ? void 0 : txOptions.explicitSignerData;
            const txRaw = yield this.sign(messages, {
                gas: String(gasLimit),
                amount: [
                    {
                        amount: String(gasToFee(gasLimit, gasPriceInFeeDenom)),
                        denom: feeDenom
                    }
                ],
                granter: feeGranter
            }, memo, explicitSignerData, simulate);
            return tx_2.TxRaw.encode(txRaw).finish();
        });
    }
    signAndBroadcast(messages, txOptions) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function*() {
            const txBytes = yield this.prepareAndSign(messages, txOptions);
            return this.broadcastTx(txBytes, (_a = txOptions === null || txOptions === void 0 ? void 0 : txOptions.broadcastTimeoutMs) !== null && _a !== void 0 ? _a : 60000, (_b = txOptions === null || txOptions === void 0 ? void 0 : txOptions.broadcastCheckIntervalMs) !== null && _b !== void 0 ? _b : 6000, (_c = txOptions === null || txOptions === void 0 ? void 0 : txOptions.broadcastMode) !== null && _c !== void 0 ? _c : BroadcastMode.Sync, (_d = txOptions === null || txOptions === void 0 ? void 0 : txOptions.waitForCommit) !== null && _d !== void 0 ? _d : true, txOptions === null || txOptions === void 0 ? void 0 : txOptions.ibcTxsOptions);
        });
    }
    simulate(messages, txOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            const txBytes = yield this.prepareAndSign(messages, txOptions, true);
            return service_pb_1.Service.Simulate(//@ts-ignore for some reason the type is tx_bytes but only works as txBytes
            {
                txBytes: (0, encoding_1.toBase64)(txBytes)
            }, {
                pathPrefix: this.url
            });
        });
    }
    /**
     * Gets account number and sequence from the API, creates a sign doc,
     * creates a single signature and assembles the signed transaction.
     *
     * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
     *
     * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
     * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
     * (See the SigningStargateClient.offline constructor).
     */ sign(messages, fee, memo, explicitSignerData, simulate = false) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            const accountFromSigner = (yield this.wallet.getAccounts()).find((account)=>account.address === this.address);
            if (!accountFromSigner) {
                throw new Error("Failed to retrieve account from signer");
            }
            let signerData;
            if (explicitSignerData) {
                signerData = explicitSignerData;
            } else {
                const { account } = yield this.query.auth.account({
                    address: this.address
                });
                if (!account) {
                    throw new Error(`Cannot find account "${this.address}", make sure it has a balance.`);
                }
                let baseAccount;
                if (account["@type"] === "/cosmos.auth.v1beta1.BaseAccount") {
                    baseAccount = account;
                } else if (account["@type"] === "/cosmos.vesting.v1beta1.ContinuousVestingAccount") {
                    baseAccount = (_a = account.base_vesting_account) === null || _a === void 0 ? void 0 : _a.base_account;
                } else if (account["@type"] === "/cosmos.vesting.v1beta1.DelayedVestingAccount") {
                    baseAccount = (_b = account.base_vesting_account) === null || _b === void 0 ? void 0 : _b.base_account;
                } else if (account["@type"] === "/cosmos.auth.v1beta1.ModuleAccount") {
                    // wat?
                    baseAccount = account.base_account;
                } else {
                    throw new Error(`Cannot sign with account of type "${account["@type"]}".`);
                }
                if (!baseAccount) {
                    throw new Error(`Cannot extract BaseAccount from "${JSON.stringify(account)}".`);
                }
                signerData = {
                    accountNumber: Number(baseAccount.account_number),
                    sequence: Number(baseAccount.sequence),
                    chainId: this.chainId
                };
            }
            if ((0, proto_signing_1.isOfflineDirectSigner)(this.wallet)) {
                return this.signDirect(accountFromSigner, messages, fee, memo, signerData, simulate);
            } else {
                return this.signAmino(accountFromSigner, messages, fee, memo, signerData, simulate);
            }
        });
    }
    signAmino(account, messages, fee, memo, { accountNumber, sequence, chainId }, simulate = false) {
        return __awaiter(this, void 0, void 0, function*() {
            if ((0, proto_signing_1.isOfflineDirectSigner)(this.wallet)) {
                throw new Error("Wrong signer type! Expected AminoSigner or AminoEip191Signer.");
            }
            let signMode = (yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/tx/signing/v1beta1/signing.js [app-ssr] (ecmascript)")))).SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
            if (typeof this.wallet.getSignMode === "function") {
                signMode = yield this.wallet.getSignMode();
            }
            const msgs = yield Promise.all(messages.map((msg)=>__awaiter(this, void 0, void 0, function*() {
                    yield this.populateCodeHash(msg);
                    return msg.toAmino(this.encryptionUtils);
                })));
            const signDoc = (0, amino_1.makeSignDoc)(msgs, fee, chainId, memo, accountNumber, sequence);
            let signed;
            let signature;
            if (!simulate) {
                ({ signature, signed } = yield this.wallet.signAmino(account.address, signDoc));
            } else {
                signed = signDoc;
                signature = getSimulateSignature();
            }
            const txBody = {
                type_url: "/cosmos.tx.v1beta1.TxBody",
                value: {
                    messages: yield Promise.all(messages.map((msg, index)=>__awaiter(this, void 0, void 0, function*() {
                            yield this.populateCodeHash(msg);
                            const asProto = yield msg.toProto(this.encryptionUtils);
                            return asProto;
                        }))),
                    memo: signed.memo
                }
            };
            const txBodyBytes = yield this.encodeTx(txBody);
            const signedGasLimit = Number(signed.fee.gas);
            const signedSequence = Number(signed.sequence);
            const pubkey = (0, proto_signing_1.encodePubkey)((0, amino_1.encodeSecp256k1Pubkey)(account.pubkey));
            const signedAuthInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([
                {
                    pubkey,
                    sequence: signedSequence
                }
            ], signed.fee.amount, signedGasLimit, signed.fee.granter, signed.fee.payer, signMode);
            return tx_2.TxRaw.fromPartial({
                body_bytes: txBodyBytes,
                auth_info_bytes: signedAuthInfoBytes,
                signatures: [
                    (0, encoding_1.fromBase64)(signature.signature)
                ]
            });
        });
    }
    populateCodeHash(msg) {
        return __awaiter(this, void 0, void 0, function*() {
            if (msg instanceof _1.MsgExecuteContract) {
                if (!msg.codeHash) {
                    msg.codeHash = (yield this.query.compute.codeHashByContractAddress({
                        contract_address: msg.contractAddress
                    })).code_hash;
                }
            } else if (msg instanceof _1.MsgInstantiateContract) {
                if (!msg.codeHash) {
                    msg.codeHash = (yield this.query.compute.codeHashByCodeId({
                        code_id: msg.codeId
                    })).code_hash;
                }
            } else if (msg instanceof tx_3.MsgMigrateContract) {
                if (!msg.codeHash) {
                    msg.codeHash = (yield this.query.compute.codeHashByCodeId({
                        code_id: msg.codeId
                    })).code_hash;
                }
            }
        });
    }
    encodeTx(txBody) {
        return __awaiter(this, void 0, void 0, function*() {
            const wrappedMessages = yield Promise.all(txBody.value.messages.map((message)=>__awaiter(this, void 0, void 0, function*() {
                    const binaryValue = yield message.encode();
                    return any_1.Any.fromPartial({
                        type_url: message.type_url,
                        value: binaryValue
                    });
                })));
            const txBodyEncoded = tx_2.TxBody.fromPartial(Object.assign(Object.assign({}, txBody.value), {
                messages: wrappedMessages
            }));
            return tx_2.TxBody.encode(txBodyEncoded).finish();
        });
    }
    signDirect(account, messages, fee, memo, { accountNumber, sequence, chainId }, simulate = false) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(0, proto_signing_1.isOfflineDirectSigner)(this.wallet)) {
                throw new Error("Wrong signer type! Expected DirectSigner.");
            }
            const txBody = {
                type_url: "/cosmos.tx.v1beta1.TxBody",
                value: {
                    messages: yield Promise.all(messages.map((msg, index)=>__awaiter(this, void 0, void 0, function*() {
                            yield this.populateCodeHash(msg);
                            const asProto = yield msg.toProto(this.encryptionUtils);
                            return asProto;
                        }))),
                    memo: memo
                }
            };
            const txBodyBytes = yield this.encodeTx(txBody);
            const pubkey = (0, proto_signing_1.encodePubkey)((0, amino_1.encodeSecp256k1Pubkey)(account.pubkey));
            const gasLimit = Number(fee.gas);
            const authInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([
                {
                    pubkey,
                    sequence
                }
            ], fee.amount, gasLimit, fee.granter, fee.payer);
            const signDoc = (0, proto_signing_1.makeSignDoc)(txBodyBytes, authInfoBytes, chainId, accountNumber);
            let signed;
            let signature;
            if (!simulate) {
                ({ signature, signed } = yield this.wallet.signDirect(account.address, signDoc));
            } else {
                signed = signDoc;
                signature = getSimulateSignature();
            }
            return tx_2.TxRaw.fromPartial({
                body_bytes: signed.bodyBytes,
                auth_info_bytes: signed.authInfoBytes,
                signatures: [
                    (0, encoding_1.fromBase64)(signature.signature)
                ]
            });
        });
    }
}
exports.SecretNetworkClient = SecretNetworkClient;
function sleep(ms) {
    return new Promise((accept)=>setTimeout(accept, ms));
}
function gasToFee(gasLimit, gasPrice) {
    return Math.ceil(gasLimit * gasPrice);
}
exports.gasToFee = gasToFee;
var TxResultCode;
(function(TxResultCode) {
    /** Success is returned if the transaction executed successfully */ TxResultCode[TxResultCode["Success"] = 0] = "Success";
    /** ErrInternal should never be exposed, but we reserve this code for non-specified errors */ TxResultCode[TxResultCode["ErrInternal"] = 1] = "ErrInternal";
    /** ErrTxDecode is returned if we cannot parse a transaction */ TxResultCode[TxResultCode["ErrTxDecode"] = 2] = "ErrTxDecode";
    /** ErrInvalidSequence is used the sequence number (nonce) is incorrect for the signature */ TxResultCode[TxResultCode["ErrInvalidSequence"] = 3] = "ErrInvalidSequence";
    /** ErrUnauthorized is used whenever a request without sufficient authorization is handled. */ TxResultCode[TxResultCode["ErrUnauthorized"] = 4] = "ErrUnauthorized";
    /** ErrInsufficientFunds is used when the account cannot pay requested amount. */ TxResultCode[TxResultCode["ErrInsufficientFunds"] = 5] = "ErrInsufficientFunds";
    /** ErrUnknownRequest to doc */ TxResultCode[TxResultCode["ErrUnknownRequest"] = 6] = "ErrUnknownRequest";
    /** ErrInvalidAddress to doc */ TxResultCode[TxResultCode["ErrInvalidAddress"] = 7] = "ErrInvalidAddress";
    /** ErrInvalidPubKey to doc */ TxResultCode[TxResultCode["ErrInvalidPubKey"] = 8] = "ErrInvalidPubKey";
    /** ErrUnknownAddress to doc */ TxResultCode[TxResultCode["ErrUnknownAddress"] = 9] = "ErrUnknownAddress";
    /** ErrInvalidCoins to doc */ TxResultCode[TxResultCode["ErrInvalidCoins"] = 10] = "ErrInvalidCoins";
    /** ErrOutOfGas to doc */ TxResultCode[TxResultCode["ErrOutOfGas"] = 11] = "ErrOutOfGas";
    /** ErrMemoTooLarge to doc */ TxResultCode[TxResultCode["ErrMemoTooLarge"] = 12] = "ErrMemoTooLarge";
    /** ErrInsufficientFee to doc */ TxResultCode[TxResultCode["ErrInsufficientFee"] = 13] = "ErrInsufficientFee";
    /** ErrTooManySignatures to doc */ TxResultCode[TxResultCode["ErrTooManySignatures"] = 14] = "ErrTooManySignatures";
    /** ErrNoSignatures to doc */ TxResultCode[TxResultCode["ErrNoSignatures"] = 15] = "ErrNoSignatures";
    /** ErrJSONMarshal defines an ABCI typed JSON marshalling error */ TxResultCode[TxResultCode["ErrJSONMarshal"] = 16] = "ErrJSONMarshal";
    /** ErrJSONUnmarshal defines an ABCI typed JSON unmarshalling error */ TxResultCode[TxResultCode["ErrJSONUnmarshal"] = 17] = "ErrJSONUnmarshal";
    /** ErrInvalidRequest defines an ABCI typed error where the request contains invalid data. */ TxResultCode[TxResultCode["ErrInvalidRequest"] = 18] = "ErrInvalidRequest";
    /** ErrTxInMempoolCache defines an ABCI typed error where a tx already exists in the mempool. */ TxResultCode[TxResultCode["ErrTxInMempoolCache"] = 19] = "ErrTxInMempoolCache";
    /** ErrMempoolIsFull defines an ABCI typed error where the mempool is full. */ TxResultCode[TxResultCode["ErrMempoolIsFull"] = 20] = "ErrMempoolIsFull";
    /** ErrTxTooLarge defines an ABCI typed error where tx is too large. */ TxResultCode[TxResultCode["ErrTxTooLarge"] = 21] = "ErrTxTooLarge";
    /** ErrKeyNotFound defines an error when the key doesn't exist */ TxResultCode[TxResultCode["ErrKeyNotFound"] = 22] = "ErrKeyNotFound";
    /** ErrWrongPassword defines an error when the key password is invalid. */ TxResultCode[TxResultCode["ErrWrongPassword"] = 23] = "ErrWrongPassword";
    /** ErrorInvalidSigner defines an error when the tx intended signer does not match the given signer. */ TxResultCode[TxResultCode["ErrorInvalidSigner"] = 24] = "ErrorInvalidSigner";
    /** ErrorInvalidGasAdjustment defines an error for an invalid gas adjustment */ TxResultCode[TxResultCode["ErrorInvalidGasAdjustment"] = 25] = "ErrorInvalidGasAdjustment";
    /** ErrInvalidHeight defines an error for an invalid height */ TxResultCode[TxResultCode["ErrInvalidHeight"] = 26] = "ErrInvalidHeight";
    /** ErrInvalidVersion defines a general error for an invalid version */ TxResultCode[TxResultCode["ErrInvalidVersion"] = 27] = "ErrInvalidVersion";
    /** ErrInvalidChainID defines an error when the chain-id is invalid. */ TxResultCode[TxResultCode["ErrInvalidChainID"] = 28] = "ErrInvalidChainID";
    /** ErrInvalidType defines an error an invalid type. */ TxResultCode[TxResultCode["ErrInvalidType"] = 29] = "ErrInvalidType";
    /** ErrTxTimeoutHeight defines an error for when a tx is rejected out due to an explicitly set timeout height. */ TxResultCode[TxResultCode["ErrTxTimeoutHeight"] = 30] = "ErrTxTimeoutHeight";
    /** ErrUnknownExtensionOptions defines an error for unknown extension options. */ TxResultCode[TxResultCode["ErrUnknownExtensionOptions"] = 31] = "ErrUnknownExtensionOptions";
    /** ErrWrongSequence defines an error where the account sequence defined in the signer info doesn't match the account's actual sequence number. */ TxResultCode[TxResultCode["ErrWrongSequence"] = 32] = "ErrWrongSequence";
    /** ErrPackAny defines an error when packing a protobuf message to Any fails. */ TxResultCode[TxResultCode["ErrPackAny"] = 33] = "ErrPackAny";
    /** ErrUnpackAny defines an error when unpacking a protobuf message from Any fails. */ TxResultCode[TxResultCode["ErrUnpackAny"] = 34] = "ErrUnpackAny";
    /** ErrLogic defines an internal logic error, e.g. an invariant or assertion that is violated. It is a programmer error, not a user-facing error. */ TxResultCode[TxResultCode["ErrLogic"] = 35] = "ErrLogic";
    /** ErrConflict defines a conflict error, e.g. when two goroutines try to access the same resource and one of them fails. */ TxResultCode[TxResultCode["ErrConflict"] = 36] = "ErrConflict";
    /** ErrNotSupported is returned when we call a branch of a code which is currently not supported. */ TxResultCode[TxResultCode["ErrNotSupported"] = 37] = "ErrNotSupported";
    /** ErrNotFound defines an error when requested entity doesn't exist in the state. */ TxResultCode[TxResultCode["ErrNotFound"] = 38] = "ErrNotFound";
    /** ErrIO should be used to wrap internal errors caused by external operation. Examples: not DB domain error, file writing etc... */ TxResultCode[TxResultCode["ErrIO"] = 39] = "ErrIO";
    /** ErrAppConfig defines an error occurred if min-gas-prices field in BaseConfig is empty. */ TxResultCode[TxResultCode["ErrAppConfig"] = 40] = "ErrAppConfig";
    /** ErrPanic is only set when we recover from a panic, so we know to redact potentially sensitive system info. */ TxResultCode[TxResultCode["ErrPanic"] = 111222] = "ErrPanic";
})(TxResultCode = exports.TxResultCode || (exports.TxResultCode = {}));
function getSimulateSignature() {
    return {
        pub_key: {
            type: "tendermint/PubKeySecp256k1",
            value: (0, encoding_1.toBase64)(new Uint8Array(33).fill(0))
        },
        signature: (0, encoding_1.toBase64)(new Uint8Array(64).fill(0))
    };
} //# sourceMappingURL=secret_network_client.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/wallet_amino.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AminoWallet = exports.SECRET_BECH32_PREFIX = exports.SECRET_COIN_TYPE = void 0;
const amino_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+amino@0.32.4/node_modules/@cosmjs/amino/build/index.js [app-ssr] (ecmascript)");
const sha256_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.0.0/node_modules/@noble/hashes/sha256.js [app-ssr] (ecmascript)");
const secp256k1 = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/@noble+secp256k1@1.7.0/node_modules/@noble/secp256k1/lib/index.js [app-ssr] (ecmascript)"));
const bip32 = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/bip32@2.0.6/node_modules/bip32/src/index.js [app-ssr] (ecmascript)"));
const bip39 = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js [app-ssr] (ecmascript)"));
const utils_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/utils.js [app-ssr] (ecmascript)");
exports.SECRET_COIN_TYPE = 529;
exports.SECRET_BECH32_PREFIX = "secret";
/**
 * AminoWallet is a wallet capable of signing on the legacy Amino encoding.
 * Amino encoding is still a must-use when signing with Ledger and thus still
 * supported in the chain, but is phased out slowly.
 *
 * In secret.js AminoWallet is mainly used for testing and should not be used
 * for anything else. The reason is that some Msg types don't support Amino
 * encoding anymore and thus won't work with this wallet (and Ledger).
 * Msgs that do support Amino encoding also must encode with Protobuf,
 * so if a Msg is working as intended with AminoWallet, it'll also work with {@link Wallet}.
 *
 * For reference, even txs that are signed using Amino, are sent to the chain
 * using Protobuf encoding, so inside the chain the tx is converted to Amino
 * in order to verify the signature.
 * */ class AminoWallet {
    /**
     * @param {String} mnemonic Import mnemonic or generate random if empty
     * @param {Number} [options.hdAccountIndex] The account index in the HD derivation path. Defaults to `0`.
     * @param {Number} [options.coinType] The coin type in the HD derivation path. Defaults to Secret's `529`.
     * @param {String} [options.bech32Prefix] The bech32 prefix for the account's address. Defaults tp `"secret"`
     */ constructor(mnemonic = "", options = {}){
        var _a, _b, _c;
        if (mnemonic === "") {
            mnemonic = bip39.generateMnemonic(256 /* 24 words */ );
        }
        this.mnemonic = mnemonic;
        this.hdAccountIndex = (_a = options.hdAccountIndex) !== null && _a !== void 0 ? _a : 0;
        this.coinType = (_b = options.coinType) !== null && _b !== void 0 ? _b : exports.SECRET_COIN_TYPE;
        this.bech32Prefix = (_c = options.bech32Prefix) !== null && _c !== void 0 ? _c : exports.SECRET_BECH32_PREFIX;
        const seed = bip39.mnemonicToSeedSync(this.mnemonic);
        const node = bip32.fromSeed(seed);
        const secretHD = node.derivePath(`m/44'/${this.coinType}'/0'/0/${this.hdAccountIndex}`);
        const privateKey = secretHD.privateKey;
        if (!privateKey) {
            throw new Error("Failed to derive key pair");
        }
        this.privateKey = new Uint8Array(privateKey);
        this.publicKey = secp256k1.getPublicKey(this.privateKey, true);
        this.address = (0, utils_1.pubkeyToAddress)(this.publicKey, this.bech32Prefix);
    }
    getAccounts() {
        return __awaiter(this, void 0, void 0, function*() {
            return [
                {
                    address: this.address,
                    algo: "secp256k1",
                    pubkey: this.publicKey
                }
            ];
        });
    }
    signAmino(signerAddress, signDoc) {
        return __awaiter(this, void 0, void 0, function*() {
            if (signerAddress !== this.address) {
                throw new Error(`Address ${signerAddress} not found in wallet`);
            }
            const messageHash = (0, sha256_1.sha256)((0, amino_1.serializeSignDoc)(signDoc));
            const signature = yield secp256k1.sign(messageHash, this.privateKey, {
                extraEntropy: true,
                der: false
            });
            return {
                signed: signDoc,
                signature: (0, amino_1.encodeSecp256k1Signature)(this.publicKey, signature)
            };
        });
    }
}
exports.AminoWallet = AminoWallet; //# sourceMappingURL=wallet_amino.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/wallet_proto.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Wallet = void 0;
const sha256_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.0.0/node_modules/@noble/hashes/sha256.js [app-ssr] (ecmascript)");
const secp256k1 = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/@noble+secp256k1@1.7.0/node_modules/@noble/secp256k1/lib/index.js [app-ssr] (ecmascript)"));
const amino_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+amino@0.32.4/node_modules/@cosmjs/amino/build/index.js [app-ssr] (ecmascript)");
const proto_signing_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+proto-signing@0.32.4/node_modules/@cosmjs/proto-signing/build/index.js [app-ssr] (ecmascript)");
const wallet_amino_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/wallet_amino.js [app-ssr] (ecmascript)");
/**
 * Wallet is a wallet capable of signing on transactions.
 *
 * `Wallet` can just extend `AminoWallet` and be a valid `DirectSigner` because
 * `SecretNetworkClient` checks first for the existence of `signDirect` function
 * before checking for `signAmino` function.
 */ class Wallet extends wallet_amino_1.AminoWallet {
    signDirect(address, signDoc) {
        return __awaiter(this, void 0, void 0, function*() {
            if (address !== this.address) {
                throw new Error(`Address ${address} not found in wallet`);
            }
            const messageHash = (0, sha256_1.sha256)((0, proto_signing_1.makeSignBytes)(signDoc));
            const signature = yield secp256k1.sign(messageHash, this.privateKey, {
                extraEntropy: true,
                der: false
            });
            return {
                signed: signDoc,
                signature: (0, amino_1.encodeSecp256k1Signature)(this.publicKey, signature)
            };
        });
    }
}
exports.Wallet = Wallet; //# sourceMappingURL=wallet_proto.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/wallet_metamask.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetaMaskWallet = void 0;
const sha3_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.0.0/node_modules/@noble/hashes/sha3.js [app-ssr] (ecmascript)");
const secp256k1 = __importStar(__turbopack_require__("[project]/node_modules/.pnpm/@noble+secp256k1@1.7.0/node_modules/@noble/secp256k1/lib/index.js [app-ssr] (ecmascript)"));
const sha256_1 = __turbopack_require__("[project]/node_modules/.pnpm/@noble+hashes@1.0.0/node_modules/@noble/hashes/sha256.js [app-ssr] (ecmascript)");
const encoding_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)");
const amino_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+amino@0.32.4/node_modules/@cosmjs/amino/build/index.js [app-ssr] (ecmascript)");
const utils_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/utils.js [app-ssr] (ecmascript)");
const wallet_amino_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/wallet_amino.js [app-ssr] (ecmascript)");
/**
 * MetaMaskWallet is a wallet capable of signing on transactions using MetaMask.
 */ class MetaMaskWallet {
    constructor(ethProvider, ethAddress, publicKey){
        this.ethProvider = ethProvider;
        this.ethAddress = ethAddress;
        this.publicKey = publicKey;
        this.address = (0, utils_1.pubkeyToAddress)(this.publicKey, wallet_amino_1.SECRET_BECH32_PREFIX);
    }
    static create(ethProvider, ethAddress) {
        return __awaiter(this, void 0, void 0, function*() {
            // use localStorage to cache the publicKey to prevent signing request on every MetaMaskWallet.create()
            // if MetaMask is used we assume that there's localStorage in the environment
            const localStorageKey = `secretjs_${ethAddress}_pubkey`;
            const publicKeyHex = localStorage.getItem(localStorageKey);
            if (publicKeyHex) {
                // verify that ethAddress can be derived from publicKeyHex
                // this prevents reading wrong/corrupted data from localStorage
                const ethAddressBytes = ethAddress.slice(2).toLocaleLowerCase();
                const derivedEthAddressBytes = (0, encoding_1.toHex)((0, sha3_1.keccak_256)(decompressSecp256k1PublicKey(publicKeyHex).slice(1)).slice(-20)).toLocaleLowerCase();
                if (derivedEthAddressBytes === ethAddressBytes) {
                    return new MetaMaskWallet(ethProvider, ethAddress, (0, encoding_1.fromHex)(publicKeyHex));
                }
                localStorage.removeItem(localStorageKey);
            }
            // On ETHland pubkeys are recovered from signatures, so we're going to:
            // 1. sign something
            // 2. recover the pubkey from the signature
            // 3. derive a secret address from the the pubkey
            const rawMsg = (0, encoding_1.toUtf8)("Get secret address");
            const msgToSign = `0x${(0, encoding_1.toHex)(rawMsg)}`;
            const sigResult = (yield ethProvider.request({
                method: "personal_sign",
                params: [
                    msgToSign,
                    ethAddress
                ]
            })).toString();
            // strip leading 0x and extract recovery id
            const sig = (0, encoding_1.fromHex)(sigResult.slice(2, -2));
            let recoveryId = parseInt(sigResult.slice(-2), 16) - 27;
            // When a Ledger is used, this value doesn't need to be adjusted
            if (recoveryId < 0) {
                recoveryId += 27;
            }
            const eip191MessagePrefix = (0, encoding_1.toUtf8)("\x19Ethereum Signed Message:\n");
            const rawMsgLength = (0, encoding_1.toUtf8)(String(rawMsg.length));
            const publicKey = secp256k1.recoverPublicKey((0, sha3_1.keccak_256)(new Uint8Array([
                ...eip191MessagePrefix,
                ...rawMsgLength,
                ...rawMsg
            ])), sig, recoveryId, true);
            localStorage.setItem(localStorageKey, (0, encoding_1.toHex)(publicKey));
            return new MetaMaskWallet(ethProvider, ethAddress, publicKey);
        });
    }
    getAccounts() {
        return __awaiter(this, void 0, void 0, function*() {
            return [
                {
                    address: this.address,
                    algo: "secp256k1",
                    pubkey: this.publicKey
                }
            ];
        });
    }
    getSignMode() {
        return __awaiter(this, void 0, void 0, function*() {
            return (yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/tx/signing/v1beta1/signing.js [app-ssr] (ecmascript)")))).SignMode.SIGN_MODE_EIP_191;
        });
    }
    signAmino(address, signDoc) {
        return __awaiter(this, void 0, void 0, function*() {
            if (address !== (0, utils_1.pubkeyToAddress)(this.publicKey, wallet_amino_1.SECRET_BECH32_PREFIX)) {
                throw new Error(`Address ${address} not found in wallet`);
            }
            const msgToSign = `0x${(0, encoding_1.toHex)(prettySerializeStdSignDoc(signDoc))}`;
            const sigResult = yield this.ethProvider.request({
                method: "personal_sign",
                params: [
                    msgToSign,
                    this.ethAddress
                ]
            });
            // strip leading 0x and trailing recovery id
            const sig = (0, encoding_1.fromHex)(sigResult.slice(2, -2));
            return {
                signed: signDoc,
                signature: (0, amino_1.encodeSecp256k1Signature)(this.publicKey, sig)
            };
        });
    }
    signPermit(address, signDoc) {
        return __awaiter(this, void 0, void 0, function*() {
            if (address !== (0, utils_1.pubkeyToAddress)(this.publicKey, wallet_amino_1.SECRET_BECH32_PREFIX)) {
                throw new Error(`Address ${address} not found in wallet`);
            }
            const messageHash = (0, sha256_1.sha256)((0, amino_1.serializeSignDoc)(signDoc));
            const sigResult = yield this.ethProvider.request({
                method: "eth_sign",
                params: [
                    this.ethAddress,
                    "0x" + (0, encoding_1.toHex)(messageHash)
                ]
            });
            // strip leading 0x and trailing recovery id
            const sig = (0, encoding_1.fromHex)(sigResult.slice(2, -2));
            return {
                signed: signDoc,
                signature: (0, amino_1.encodeSecp256k1Signature)(this.publicKey, sig)
            };
        });
    }
}
exports.MetaMaskWallet = MetaMaskWallet;
function decompressSecp256k1PublicKey(publicKeyHex) {
    const point = secp256k1.Point.fromHex(publicKeyHex);
    return point.toRawBytes(false);
}
function sortObject(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(sortObject);
    }
    const sortedKeys = Object.keys(obj).sort();
    const result = {};
    // NOTE: Use forEach instead of reduce for performance with large objects eg Wasm code
    sortedKeys.forEach((key)=>{
        result[key] = sortObject(obj[key]);
    });
    return result;
}
/** Returns a JSON string with objects sorted by key, used for pretty Amino EIP191 signing */ function prettyJsonSortedStringify(obj) {
    return JSON.stringify(sortObject(obj), null, 4);
}
function prettySerializeStdSignDoc(signDoc) {
    return (0, encoding_1.toUtf8)(prettyJsonSortedStringify(signDoc));
} //# sourceMappingURL=wallet_metamask.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MsgExecuteContractResponse = exports.MsgInstantiateContractResponse = exports.MsgStoreCodeResponse = exports.MetaMaskWallet = exports.Wallet = void 0;
if (typeof BigInt === "undefined") {
    global.BigInt = __turbopack_require__("[project]/node_modules/.pnpm/big-integer@1.6.51/node_modules/big-integer/BigInteger.js [app-ssr] (ecmascript)");
}
// Note: the order of exports is important here
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/encryption.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/query/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/secret_network_client.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/utils.js [app-ssr] (ecmascript)"), exports);
var wallet_proto_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/wallet_proto.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "Wallet", {
    enumerable: true,
    get: function() {
        return wallet_proto_1.Wallet;
    }
});
var wallet_metamask_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/wallet_metamask.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MetaMaskWallet", {
    enumerable: true,
    get: function() {
        return wallet_metamask_1.MetaMaskWallet;
    }
});
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip20/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/snip721/index.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/extensions/access_control/index.js [app-ssr] (ecmascript)"), exports);
var msg_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/secret/compute/v1beta1/msg.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgStoreCodeResponse", {
    enumerable: true,
    get: function() {
        return msg_1.MsgStoreCodeResponse;
    }
});
Object.defineProperty(exports, "MsgInstantiateContractResponse", {
    enumerable: true,
    get: function() {
        return msg_1.MsgInstantiateContractResponse;
    }
});
Object.defineProperty(exports, "MsgExecuteContractResponse", {
    enumerable: true,
    get: function() {
        return msg_1.MsgExecuteContractResponse;
    }
}); //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=5b0a5_secretjs_dist_1320cf._.js.map