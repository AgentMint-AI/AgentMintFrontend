"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@stablelib+poly1305@1.0.1";
exports.ids = ["vendor-chunks/@stablelib+poly1305@1.0.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@stablelib+poly1305@1.0.1/node_modules/@stablelib/poly1305/lib/poly1305.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@stablelib+poly1305@1.0.1/node_modules/@stablelib/poly1305/lib/poly1305.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// Copyright (C) 2016 Dmitry Chestnykh\n// MIT License. See LICENSE file for details.\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/**\n * Package poly1305 implements Poly1305 one-time message authentication algorithm.\n */\nvar constant_time_1 = __webpack_require__(/*! @stablelib/constant-time */ \"(ssr)/./node_modules/.pnpm/@stablelib+constant-time@1.0.1/node_modules/@stablelib/constant-time/lib/constant-time.js\");\nvar wipe_1 = __webpack_require__(/*! @stablelib/wipe */ \"(ssr)/./node_modules/.pnpm/@stablelib+wipe@1.0.1/node_modules/@stablelib/wipe/lib/wipe.js\");\nexports.DIGEST_LENGTH = 16;\n// Port of Andrew Moon's Poly1305-donna-16. Public domain.\n// https://github.com/floodyberry/poly1305-donna\n/**\n * Poly1305 computes 16-byte authenticator of message using\n * a one-time 32-byte key.\n *\n * Important: key should be used for only one message,\n * it should never repeat.\n */\nvar Poly1305 = /** @class */ (function () {\n    function Poly1305(key) {\n        this.digestLength = exports.DIGEST_LENGTH;\n        this._buffer = new Uint8Array(16);\n        this._r = new Uint16Array(10);\n        this._h = new Uint16Array(10);\n        this._pad = new Uint16Array(8);\n        this._leftover = 0;\n        this._fin = 0;\n        this._finished = false;\n        var t0 = key[0] | key[1] << 8;\n        this._r[0] = (t0) & 0x1fff;\n        var t1 = key[2] | key[3] << 8;\n        this._r[1] = ((t0 >>> 13) | (t1 << 3)) & 0x1fff;\n        var t2 = key[4] | key[5] << 8;\n        this._r[2] = ((t1 >>> 10) | (t2 << 6)) & 0x1f03;\n        var t3 = key[6] | key[7] << 8;\n        this._r[3] = ((t2 >>> 7) | (t3 << 9)) & 0x1fff;\n        var t4 = key[8] | key[9] << 8;\n        this._r[4] = ((t3 >>> 4) | (t4 << 12)) & 0x00ff;\n        this._r[5] = ((t4 >>> 1)) & 0x1ffe;\n        var t5 = key[10] | key[11] << 8;\n        this._r[6] = ((t4 >>> 14) | (t5 << 2)) & 0x1fff;\n        var t6 = key[12] | key[13] << 8;\n        this._r[7] = ((t5 >>> 11) | (t6 << 5)) & 0x1f81;\n        var t7 = key[14] | key[15] << 8;\n        this._r[8] = ((t6 >>> 8) | (t7 << 8)) & 0x1fff;\n        this._r[9] = ((t7 >>> 5)) & 0x007f;\n        this._pad[0] = key[16] | key[17] << 8;\n        this._pad[1] = key[18] | key[19] << 8;\n        this._pad[2] = key[20] | key[21] << 8;\n        this._pad[3] = key[22] | key[23] << 8;\n        this._pad[4] = key[24] | key[25] << 8;\n        this._pad[5] = key[26] | key[27] << 8;\n        this._pad[6] = key[28] | key[29] << 8;\n        this._pad[7] = key[30] | key[31] << 8;\n    }\n    Poly1305.prototype._blocks = function (m, mpos, bytes) {\n        var hibit = this._fin ? 0 : 1 << 11;\n        var h0 = this._h[0], h1 = this._h[1], h2 = this._h[2], h3 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];\n        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];\n        while (bytes >= 16) {\n            var t0 = m[mpos + 0] | m[mpos + 1] << 8;\n            h0 += (t0) & 0x1fff;\n            var t1 = m[mpos + 2] | m[mpos + 3] << 8;\n            h1 += ((t0 >>> 13) | (t1 << 3)) & 0x1fff;\n            var t2 = m[mpos + 4] | m[mpos + 5] << 8;\n            h2 += ((t1 >>> 10) | (t2 << 6)) & 0x1fff;\n            var t3 = m[mpos + 6] | m[mpos + 7] << 8;\n            h3 += ((t2 >>> 7) | (t3 << 9)) & 0x1fff;\n            var t4 = m[mpos + 8] | m[mpos + 9] << 8;\n            h4 += ((t3 >>> 4) | (t4 << 12)) & 0x1fff;\n            h5 += ((t4 >>> 1)) & 0x1fff;\n            var t5 = m[mpos + 10] | m[mpos + 11] << 8;\n            h6 += ((t4 >>> 14) | (t5 << 2)) & 0x1fff;\n            var t6 = m[mpos + 12] | m[mpos + 13] << 8;\n            h7 += ((t5 >>> 11) | (t6 << 5)) & 0x1fff;\n            var t7 = m[mpos + 14] | m[mpos + 15] << 8;\n            h8 += ((t6 >>> 8) | (t7 << 8)) & 0x1fff;\n            h9 += ((t7 >>> 5)) | hibit;\n            var c = 0;\n            var d0 = c;\n            d0 += h0 * r0;\n            d0 += h1 * (5 * r9);\n            d0 += h2 * (5 * r8);\n            d0 += h3 * (5 * r7);\n            d0 += h4 * (5 * r6);\n            c = (d0 >>> 13);\n            d0 &= 0x1fff;\n            d0 += h5 * (5 * r5);\n            d0 += h6 * (5 * r4);\n            d0 += h7 * (5 * r3);\n            d0 += h8 * (5 * r2);\n            d0 += h9 * (5 * r1);\n            c += (d0 >>> 13);\n            d0 &= 0x1fff;\n            var d1 = c;\n            d1 += h0 * r1;\n            d1 += h1 * r0;\n            d1 += h2 * (5 * r9);\n            d1 += h3 * (5 * r8);\n            d1 += h4 * (5 * r7);\n            c = (d1 >>> 13);\n            d1 &= 0x1fff;\n            d1 += h5 * (5 * r6);\n            d1 += h6 * (5 * r5);\n            d1 += h7 * (5 * r4);\n            d1 += h8 * (5 * r3);\n            d1 += h9 * (5 * r2);\n            c += (d1 >>> 13);\n            d1 &= 0x1fff;\n            var d2 = c;\n            d2 += h0 * r2;\n            d2 += h1 * r1;\n            d2 += h2 * r0;\n            d2 += h3 * (5 * r9);\n            d2 += h4 * (5 * r8);\n            c = (d2 >>> 13);\n            d2 &= 0x1fff;\n            d2 += h5 * (5 * r7);\n            d2 += h6 * (5 * r6);\n            d2 += h7 * (5 * r5);\n            d2 += h8 * (5 * r4);\n            d2 += h9 * (5 * r3);\n            c += (d2 >>> 13);\n            d2 &= 0x1fff;\n            var d3 = c;\n            d3 += h0 * r3;\n            d3 += h1 * r2;\n            d3 += h2 * r1;\n            d3 += h3 * r0;\n            d3 += h4 * (5 * r9);\n            c = (d3 >>> 13);\n            d3 &= 0x1fff;\n            d3 += h5 * (5 * r8);\n            d3 += h6 * (5 * r7);\n            d3 += h7 * (5 * r6);\n            d3 += h8 * (5 * r5);\n            d3 += h9 * (5 * r4);\n            c += (d3 >>> 13);\n            d3 &= 0x1fff;\n            var d4 = c;\n            d4 += h0 * r4;\n            d4 += h1 * r3;\n            d4 += h2 * r2;\n            d4 += h3 * r1;\n            d4 += h4 * r0;\n            c = (d4 >>> 13);\n            d4 &= 0x1fff;\n            d4 += h5 * (5 * r9);\n            d4 += h6 * (5 * r8);\n            d4 += h7 * (5 * r7);\n            d4 += h8 * (5 * r6);\n            d4 += h9 * (5 * r5);\n            c += (d4 >>> 13);\n            d4 &= 0x1fff;\n            var d5 = c;\n            d5 += h0 * r5;\n            d5 += h1 * r4;\n            d5 += h2 * r3;\n            d5 += h3 * r2;\n            d5 += h4 * r1;\n            c = (d5 >>> 13);\n            d5 &= 0x1fff;\n            d5 += h5 * r0;\n            d5 += h6 * (5 * r9);\n            d5 += h7 * (5 * r8);\n            d5 += h8 * (5 * r7);\n            d5 += h9 * (5 * r6);\n            c += (d5 >>> 13);\n            d5 &= 0x1fff;\n            var d6 = c;\n            d6 += h0 * r6;\n            d6 += h1 * r5;\n            d6 += h2 * r4;\n            d6 += h3 * r3;\n            d6 += h4 * r2;\n            c = (d6 >>> 13);\n            d6 &= 0x1fff;\n            d6 += h5 * r1;\n            d6 += h6 * r0;\n            d6 += h7 * (5 * r9);\n            d6 += h8 * (5 * r8);\n            d6 += h9 * (5 * r7);\n            c += (d6 >>> 13);\n            d6 &= 0x1fff;\n            var d7 = c;\n            d7 += h0 * r7;\n            d7 += h1 * r6;\n            d7 += h2 * r5;\n            d7 += h3 * r4;\n            d7 += h4 * r3;\n            c = (d7 >>> 13);\n            d7 &= 0x1fff;\n            d7 += h5 * r2;\n            d7 += h6 * r1;\n            d7 += h7 * r0;\n            d7 += h8 * (5 * r9);\n            d7 += h9 * (5 * r8);\n            c += (d7 >>> 13);\n            d7 &= 0x1fff;\n            var d8 = c;\n            d8 += h0 * r8;\n            d8 += h1 * r7;\n            d8 += h2 * r6;\n            d8 += h3 * r5;\n            d8 += h4 * r4;\n            c = (d8 >>> 13);\n            d8 &= 0x1fff;\n            d8 += h5 * r3;\n            d8 += h6 * r2;\n            d8 += h7 * r1;\n            d8 += h8 * r0;\n            d8 += h9 * (5 * r9);\n            c += (d8 >>> 13);\n            d8 &= 0x1fff;\n            var d9 = c;\n            d9 += h0 * r9;\n            d9 += h1 * r8;\n            d9 += h2 * r7;\n            d9 += h3 * r6;\n            d9 += h4 * r5;\n            c = (d9 >>> 13);\n            d9 &= 0x1fff;\n            d9 += h5 * r4;\n            d9 += h6 * r3;\n            d9 += h7 * r2;\n            d9 += h8 * r1;\n            d9 += h9 * r0;\n            c += (d9 >>> 13);\n            d9 &= 0x1fff;\n            c = (((c << 2) + c)) | 0;\n            c = (c + d0) | 0;\n            d0 = c & 0x1fff;\n            c = (c >>> 13);\n            d1 += c;\n            h0 = d0;\n            h1 = d1;\n            h2 = d2;\n            h3 = d3;\n            h4 = d4;\n            h5 = d5;\n            h6 = d6;\n            h7 = d7;\n            h8 = d8;\n            h9 = d9;\n            mpos += 16;\n            bytes -= 16;\n        }\n        this._h[0] = h0;\n        this._h[1] = h1;\n        this._h[2] = h2;\n        this._h[3] = h3;\n        this._h[4] = h4;\n        this._h[5] = h5;\n        this._h[6] = h6;\n        this._h[7] = h7;\n        this._h[8] = h8;\n        this._h[9] = h9;\n    };\n    Poly1305.prototype.finish = function (mac, macpos) {\n        if (macpos === void 0) { macpos = 0; }\n        var g = new Uint16Array(10);\n        var c;\n        var mask;\n        var f;\n        var i;\n        if (this._leftover) {\n            i = this._leftover;\n            this._buffer[i++] = 1;\n            for (; i < 16; i++) {\n                this._buffer[i] = 0;\n            }\n            this._fin = 1;\n            this._blocks(this._buffer, 0, 16);\n        }\n        c = this._h[1] >>> 13;\n        this._h[1] &= 0x1fff;\n        for (i = 2; i < 10; i++) {\n            this._h[i] += c;\n            c = this._h[i] >>> 13;\n            this._h[i] &= 0x1fff;\n        }\n        this._h[0] += (c * 5);\n        c = this._h[0] >>> 13;\n        this._h[0] &= 0x1fff;\n        this._h[1] += c;\n        c = this._h[1] >>> 13;\n        this._h[1] &= 0x1fff;\n        this._h[2] += c;\n        g[0] = this._h[0] + 5;\n        c = g[0] >>> 13;\n        g[0] &= 0x1fff;\n        for (i = 1; i < 10; i++) {\n            g[i] = this._h[i] + c;\n            c = g[i] >>> 13;\n            g[i] &= 0x1fff;\n        }\n        g[9] -= (1 << 13);\n        mask = (c ^ 1) - 1;\n        for (i = 0; i < 10; i++) {\n            g[i] &= mask;\n        }\n        mask = ~mask;\n        for (i = 0; i < 10; i++) {\n            this._h[i] = (this._h[i] & mask) | g[i];\n        }\n        this._h[0] = ((this._h[0]) | (this._h[1] << 13)) & 0xffff;\n        this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 0xffff;\n        this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 0xffff;\n        this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 0xffff;\n        this._h[4] = ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) & 0xffff;\n        this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 0xffff;\n        this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 0xffff;\n        this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 0xffff;\n        f = this._h[0] + this._pad[0];\n        this._h[0] = f & 0xffff;\n        for (i = 1; i < 8; i++) {\n            f = (((this._h[i] + this._pad[i]) | 0) + (f >>> 16)) | 0;\n            this._h[i] = f & 0xffff;\n        }\n        mac[macpos + 0] = this._h[0] >>> 0;\n        mac[macpos + 1] = this._h[0] >>> 8;\n        mac[macpos + 2] = this._h[1] >>> 0;\n        mac[macpos + 3] = this._h[1] >>> 8;\n        mac[macpos + 4] = this._h[2] >>> 0;\n        mac[macpos + 5] = this._h[2] >>> 8;\n        mac[macpos + 6] = this._h[3] >>> 0;\n        mac[macpos + 7] = this._h[3] >>> 8;\n        mac[macpos + 8] = this._h[4] >>> 0;\n        mac[macpos + 9] = this._h[4] >>> 8;\n        mac[macpos + 10] = this._h[5] >>> 0;\n        mac[macpos + 11] = this._h[5] >>> 8;\n        mac[macpos + 12] = this._h[6] >>> 0;\n        mac[macpos + 13] = this._h[6] >>> 8;\n        mac[macpos + 14] = this._h[7] >>> 0;\n        mac[macpos + 15] = this._h[7] >>> 8;\n        this._finished = true;\n        return this;\n    };\n    Poly1305.prototype.update = function (m) {\n        var mpos = 0;\n        var bytes = m.length;\n        var want;\n        if (this._leftover) {\n            want = (16 - this._leftover);\n            if (want > bytes) {\n                want = bytes;\n            }\n            for (var i = 0; i < want; i++) {\n                this._buffer[this._leftover + i] = m[mpos + i];\n            }\n            bytes -= want;\n            mpos += want;\n            this._leftover += want;\n            if (this._leftover < 16) {\n                return this;\n            }\n            this._blocks(this._buffer, 0, 16);\n            this._leftover = 0;\n        }\n        if (bytes >= 16) {\n            want = bytes - (bytes % 16);\n            this._blocks(m, mpos, want);\n            mpos += want;\n            bytes -= want;\n        }\n        if (bytes) {\n            for (var i = 0; i < bytes; i++) {\n                this._buffer[this._leftover + i] = m[mpos + i];\n            }\n            this._leftover += bytes;\n        }\n        return this;\n    };\n    Poly1305.prototype.digest = function () {\n        // TODO(dchest): it behaves differently than other hashes/HMAC,\n        // because it throws when finished — others just return saved result.\n        if (this._finished) {\n            throw new Error(\"Poly1305 was finished\");\n        }\n        var mac = new Uint8Array(16);\n        this.finish(mac);\n        return mac;\n    };\n    Poly1305.prototype.clean = function () {\n        wipe_1.wipe(this._buffer);\n        wipe_1.wipe(this._r);\n        wipe_1.wipe(this._h);\n        wipe_1.wipe(this._pad);\n        this._leftover = 0;\n        this._fin = 0;\n        this._finished = true; // mark as finished even if not\n        return this;\n    };\n    return Poly1305;\n}());\nexports.Poly1305 = Poly1305;\n/**\n * Returns 16-byte authenticator of data using a one-time 32-byte key.\n *\n * Important: key should be used for only one message, it should never repeat.\n */\nfunction oneTimeAuth(key, data) {\n    var h = new Poly1305(key);\n    h.update(data);\n    var digest = h.digest();\n    h.clean();\n    return digest;\n}\nexports.oneTimeAuth = oneTimeAuth;\n/**\n * Returns true if two authenticators are 16-byte long and equal.\n * Uses contant-time comparison to avoid leaking timing information.\n */\nfunction equal(a, b) {\n    if (a.length !== exports.DIGEST_LENGTH || b.length !== exports.DIGEST_LENGTH) {\n        return false;\n    }\n    return constant_time_1.equal(a, b);\n}\nexports.equal = equal;\n//# sourceMappingURL=poly1305.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0YWJsZWxpYitwb2x5MTMwNUAxLjAuMS9ub2RlX21vZHVsZXMvQHN0YWJsZWxpYi9wb2x5MTMwNS9saWIvcG9seTEzMDUuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHNKQUEwQjtBQUN4RCxhQUFhLG1CQUFPLENBQUMsa0hBQWlCO0FBQ3RDLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiIiwic291cmNlcyI6WyIvaG9tZS9hYnViYWtyamltb2gvRGVza3RvcC9Db2RpbmcgU3R1ZmZzL2hhY2thdGhvbi9zZWNyZXQtbmV0d29yay9tZW1lQWlfY29pbl9jcmVhdG9yL2FpLW1lbWUtY29pbi1jcmVhdG9yL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RhYmxlbGliK3BvbHkxMzA1QDEuMC4xL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL3BvbHkxMzA1L2xpYi9wb2x5MTMwNS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCAoQykgMjAxNiBEbWl0cnkgQ2hlc3RueWtoXG4vLyBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogUGFja2FnZSBwb2x5MTMwNSBpbXBsZW1lbnRzIFBvbHkxMzA1IG9uZS10aW1lIG1lc3NhZ2UgYXV0aGVudGljYXRpb24gYWxnb3JpdGhtLlxuICovXG52YXIgY29uc3RhbnRfdGltZV8xID0gcmVxdWlyZShcIkBzdGFibGVsaWIvY29uc3RhbnQtdGltZVwiKTtcbnZhciB3aXBlXzEgPSByZXF1aXJlKFwiQHN0YWJsZWxpYi93aXBlXCIpO1xuZXhwb3J0cy5ESUdFU1RfTEVOR1RIID0gMTY7XG4vLyBQb3J0IG9mIEFuZHJldyBNb29uJ3MgUG9seTEzMDUtZG9ubmEtMTYuIFB1YmxpYyBkb21haW4uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmxvb2R5YmVycnkvcG9seTEzMDUtZG9ubmFcbi8qKlxuICogUG9seTEzMDUgY29tcHV0ZXMgMTYtYnl0ZSBhdXRoZW50aWNhdG9yIG9mIG1lc3NhZ2UgdXNpbmdcbiAqIGEgb25lLXRpbWUgMzItYnl0ZSBrZXkuXG4gKlxuICogSW1wb3J0YW50OiBrZXkgc2hvdWxkIGJlIHVzZWQgZm9yIG9ubHkgb25lIG1lc3NhZ2UsXG4gKiBpdCBzaG91bGQgbmV2ZXIgcmVwZWF0LlxuICovXG52YXIgUG9seTEzMDUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9seTEzMDUoa2V5KSB7XG4gICAgICAgIHRoaXMuZGlnZXN0TGVuZ3RoID0gZXhwb3J0cy5ESUdFU1RfTEVOR1RIO1xuICAgICAgICB0aGlzLl9idWZmZXIgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgIHRoaXMuX3IgPSBuZXcgVWludDE2QXJyYXkoMTApO1xuICAgICAgICB0aGlzLl9oID0gbmV3IFVpbnQxNkFycmF5KDEwKTtcbiAgICAgICAgdGhpcy5fcGFkID0gbmV3IFVpbnQxNkFycmF5KDgpO1xuICAgICAgICB0aGlzLl9sZWZ0b3ZlciA9IDA7XG4gICAgICAgIHRoaXMuX2ZpbiA9IDA7XG4gICAgICAgIHRoaXMuX2ZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIHZhciB0MCA9IGtleVswXSB8IGtleVsxXSA8PCA4O1xuICAgICAgICB0aGlzLl9yWzBdID0gKHQwKSAmIDB4MWZmZjtcbiAgICAgICAgdmFyIHQxID0ga2V5WzJdIHwga2V5WzNdIDw8IDg7XG4gICAgICAgIHRoaXMuX3JbMV0gPSAoKHQwID4+PiAxMykgfCAodDEgPDwgMykpICYgMHgxZmZmO1xuICAgICAgICB2YXIgdDIgPSBrZXlbNF0gfCBrZXlbNV0gPDwgODtcbiAgICAgICAgdGhpcy5fclsyXSA9ICgodDEgPj4+IDEwKSB8ICh0MiA8PCA2KSkgJiAweDFmMDM7XG4gICAgICAgIHZhciB0MyA9IGtleVs2XSB8IGtleVs3XSA8PCA4O1xuICAgICAgICB0aGlzLl9yWzNdID0gKCh0MiA+Pj4gNykgfCAodDMgPDwgOSkpICYgMHgxZmZmO1xuICAgICAgICB2YXIgdDQgPSBrZXlbOF0gfCBrZXlbOV0gPDwgODtcbiAgICAgICAgdGhpcy5fcls0XSA9ICgodDMgPj4+IDQpIHwgKHQ0IDw8IDEyKSkgJiAweDAwZmY7XG4gICAgICAgIHRoaXMuX3JbNV0gPSAoKHQ0ID4+PiAxKSkgJiAweDFmZmU7XG4gICAgICAgIHZhciB0NSA9IGtleVsxMF0gfCBrZXlbMTFdIDw8IDg7XG4gICAgICAgIHRoaXMuX3JbNl0gPSAoKHQ0ID4+PiAxNCkgfCAodDUgPDwgMikpICYgMHgxZmZmO1xuICAgICAgICB2YXIgdDYgPSBrZXlbMTJdIHwga2V5WzEzXSA8PCA4O1xuICAgICAgICB0aGlzLl9yWzddID0gKCh0NSA+Pj4gMTEpIHwgKHQ2IDw8IDUpKSAmIDB4MWY4MTtcbiAgICAgICAgdmFyIHQ3ID0ga2V5WzE0XSB8IGtleVsxNV0gPDwgODtcbiAgICAgICAgdGhpcy5fcls4XSA9ICgodDYgPj4+IDgpIHwgKHQ3IDw8IDgpKSAmIDB4MWZmZjtcbiAgICAgICAgdGhpcy5fcls5XSA9ICgodDcgPj4+IDUpKSAmIDB4MDA3ZjtcbiAgICAgICAgdGhpcy5fcGFkWzBdID0ga2V5WzE2XSB8IGtleVsxN10gPDwgODtcbiAgICAgICAgdGhpcy5fcGFkWzFdID0ga2V5WzE4XSB8IGtleVsxOV0gPDwgODtcbiAgICAgICAgdGhpcy5fcGFkWzJdID0ga2V5WzIwXSB8IGtleVsyMV0gPDwgODtcbiAgICAgICAgdGhpcy5fcGFkWzNdID0ga2V5WzIyXSB8IGtleVsyM10gPDwgODtcbiAgICAgICAgdGhpcy5fcGFkWzRdID0ga2V5WzI0XSB8IGtleVsyNV0gPDwgODtcbiAgICAgICAgdGhpcy5fcGFkWzVdID0ga2V5WzI2XSB8IGtleVsyN10gPDwgODtcbiAgICAgICAgdGhpcy5fcGFkWzZdID0ga2V5WzI4XSB8IGtleVsyOV0gPDwgODtcbiAgICAgICAgdGhpcy5fcGFkWzddID0ga2V5WzMwXSB8IGtleVszMV0gPDwgODtcbiAgICB9XG4gICAgUG9seTEzMDUucHJvdG90eXBlLl9ibG9ja3MgPSBmdW5jdGlvbiAobSwgbXBvcywgYnl0ZXMpIHtcbiAgICAgICAgdmFyIGhpYml0ID0gdGhpcy5fZmluID8gMCA6IDEgPDwgMTE7XG4gICAgICAgIHZhciBoMCA9IHRoaXMuX2hbMF0sIGgxID0gdGhpcy5faFsxXSwgaDIgPSB0aGlzLl9oWzJdLCBoMyA9IHRoaXMuX2hbM10sIGg0ID0gdGhpcy5faFs0XSwgaDUgPSB0aGlzLl9oWzVdLCBoNiA9IHRoaXMuX2hbNl0sIGg3ID0gdGhpcy5faFs3XSwgaDggPSB0aGlzLl9oWzhdLCBoOSA9IHRoaXMuX2hbOV07XG4gICAgICAgIHZhciByMCA9IHRoaXMuX3JbMF0sIHIxID0gdGhpcy5fclsxXSwgcjIgPSB0aGlzLl9yWzJdLCByMyA9IHRoaXMuX3JbM10sIHI0ID0gdGhpcy5fcls0XSwgcjUgPSB0aGlzLl9yWzVdLCByNiA9IHRoaXMuX3JbNl0sIHI3ID0gdGhpcy5fcls3XSwgcjggPSB0aGlzLl9yWzhdLCByOSA9IHRoaXMuX3JbOV07XG4gICAgICAgIHdoaWxlIChieXRlcyA+PSAxNikge1xuICAgICAgICAgICAgdmFyIHQwID0gbVttcG9zICsgMF0gfCBtW21wb3MgKyAxXSA8PCA4O1xuICAgICAgICAgICAgaDAgKz0gKHQwKSAmIDB4MWZmZjtcbiAgICAgICAgICAgIHZhciB0MSA9IG1bbXBvcyArIDJdIHwgbVttcG9zICsgM10gPDwgODtcbiAgICAgICAgICAgIGgxICs9ICgodDAgPj4+IDEzKSB8ICh0MSA8PCAzKSkgJiAweDFmZmY7XG4gICAgICAgICAgICB2YXIgdDIgPSBtW21wb3MgKyA0XSB8IG1bbXBvcyArIDVdIDw8IDg7XG4gICAgICAgICAgICBoMiArPSAoKHQxID4+PiAxMCkgfCAodDIgPDwgNikpICYgMHgxZmZmO1xuICAgICAgICAgICAgdmFyIHQzID0gbVttcG9zICsgNl0gfCBtW21wb3MgKyA3XSA8PCA4O1xuICAgICAgICAgICAgaDMgKz0gKCh0MiA+Pj4gNykgfCAodDMgPDwgOSkpICYgMHgxZmZmO1xuICAgICAgICAgICAgdmFyIHQ0ID0gbVttcG9zICsgOF0gfCBtW21wb3MgKyA5XSA8PCA4O1xuICAgICAgICAgICAgaDQgKz0gKCh0MyA+Pj4gNCkgfCAodDQgPDwgMTIpKSAmIDB4MWZmZjtcbiAgICAgICAgICAgIGg1ICs9ICgodDQgPj4+IDEpKSAmIDB4MWZmZjtcbiAgICAgICAgICAgIHZhciB0NSA9IG1bbXBvcyArIDEwXSB8IG1bbXBvcyArIDExXSA8PCA4O1xuICAgICAgICAgICAgaDYgKz0gKCh0NCA+Pj4gMTQpIHwgKHQ1IDw8IDIpKSAmIDB4MWZmZjtcbiAgICAgICAgICAgIHZhciB0NiA9IG1bbXBvcyArIDEyXSB8IG1bbXBvcyArIDEzXSA8PCA4O1xuICAgICAgICAgICAgaDcgKz0gKCh0NSA+Pj4gMTEpIHwgKHQ2IDw8IDUpKSAmIDB4MWZmZjtcbiAgICAgICAgICAgIHZhciB0NyA9IG1bbXBvcyArIDE0XSB8IG1bbXBvcyArIDE1XSA8PCA4O1xuICAgICAgICAgICAgaDggKz0gKCh0NiA+Pj4gOCkgfCAodDcgPDwgOCkpICYgMHgxZmZmO1xuICAgICAgICAgICAgaDkgKz0gKCh0NyA+Pj4gNSkpIHwgaGliaXQ7XG4gICAgICAgICAgICB2YXIgYyA9IDA7XG4gICAgICAgICAgICB2YXIgZDAgPSBjO1xuICAgICAgICAgICAgZDAgKz0gaDAgKiByMDtcbiAgICAgICAgICAgIGQwICs9IGgxICogKDUgKiByOSk7XG4gICAgICAgICAgICBkMCArPSBoMiAqICg1ICogcjgpO1xuICAgICAgICAgICAgZDAgKz0gaDMgKiAoNSAqIHI3KTtcbiAgICAgICAgICAgIGQwICs9IGg0ICogKDUgKiByNik7XG4gICAgICAgICAgICBjID0gKGQwID4+PiAxMyk7XG4gICAgICAgICAgICBkMCAmPSAweDFmZmY7XG4gICAgICAgICAgICBkMCArPSBoNSAqICg1ICogcjUpO1xuICAgICAgICAgICAgZDAgKz0gaDYgKiAoNSAqIHI0KTtcbiAgICAgICAgICAgIGQwICs9IGg3ICogKDUgKiByMyk7XG4gICAgICAgICAgICBkMCArPSBoOCAqICg1ICogcjIpO1xuICAgICAgICAgICAgZDAgKz0gaDkgKiAoNSAqIHIxKTtcbiAgICAgICAgICAgIGMgKz0gKGQwID4+PiAxMyk7XG4gICAgICAgICAgICBkMCAmPSAweDFmZmY7XG4gICAgICAgICAgICB2YXIgZDEgPSBjO1xuICAgICAgICAgICAgZDEgKz0gaDAgKiByMTtcbiAgICAgICAgICAgIGQxICs9IGgxICogcjA7XG4gICAgICAgICAgICBkMSArPSBoMiAqICg1ICogcjkpO1xuICAgICAgICAgICAgZDEgKz0gaDMgKiAoNSAqIHI4KTtcbiAgICAgICAgICAgIGQxICs9IGg0ICogKDUgKiByNyk7XG4gICAgICAgICAgICBjID0gKGQxID4+PiAxMyk7XG4gICAgICAgICAgICBkMSAmPSAweDFmZmY7XG4gICAgICAgICAgICBkMSArPSBoNSAqICg1ICogcjYpO1xuICAgICAgICAgICAgZDEgKz0gaDYgKiAoNSAqIHI1KTtcbiAgICAgICAgICAgIGQxICs9IGg3ICogKDUgKiByNCk7XG4gICAgICAgICAgICBkMSArPSBoOCAqICg1ICogcjMpO1xuICAgICAgICAgICAgZDEgKz0gaDkgKiAoNSAqIHIyKTtcbiAgICAgICAgICAgIGMgKz0gKGQxID4+PiAxMyk7XG4gICAgICAgICAgICBkMSAmPSAweDFmZmY7XG4gICAgICAgICAgICB2YXIgZDIgPSBjO1xuICAgICAgICAgICAgZDIgKz0gaDAgKiByMjtcbiAgICAgICAgICAgIGQyICs9IGgxICogcjE7XG4gICAgICAgICAgICBkMiArPSBoMiAqIHIwO1xuICAgICAgICAgICAgZDIgKz0gaDMgKiAoNSAqIHI5KTtcbiAgICAgICAgICAgIGQyICs9IGg0ICogKDUgKiByOCk7XG4gICAgICAgICAgICBjID0gKGQyID4+PiAxMyk7XG4gICAgICAgICAgICBkMiAmPSAweDFmZmY7XG4gICAgICAgICAgICBkMiArPSBoNSAqICg1ICogcjcpO1xuICAgICAgICAgICAgZDIgKz0gaDYgKiAoNSAqIHI2KTtcbiAgICAgICAgICAgIGQyICs9IGg3ICogKDUgKiByNSk7XG4gICAgICAgICAgICBkMiArPSBoOCAqICg1ICogcjQpO1xuICAgICAgICAgICAgZDIgKz0gaDkgKiAoNSAqIHIzKTtcbiAgICAgICAgICAgIGMgKz0gKGQyID4+PiAxMyk7XG4gICAgICAgICAgICBkMiAmPSAweDFmZmY7XG4gICAgICAgICAgICB2YXIgZDMgPSBjO1xuICAgICAgICAgICAgZDMgKz0gaDAgKiByMztcbiAgICAgICAgICAgIGQzICs9IGgxICogcjI7XG4gICAgICAgICAgICBkMyArPSBoMiAqIHIxO1xuICAgICAgICAgICAgZDMgKz0gaDMgKiByMDtcbiAgICAgICAgICAgIGQzICs9IGg0ICogKDUgKiByOSk7XG4gICAgICAgICAgICBjID0gKGQzID4+PiAxMyk7XG4gICAgICAgICAgICBkMyAmPSAweDFmZmY7XG4gICAgICAgICAgICBkMyArPSBoNSAqICg1ICogcjgpO1xuICAgICAgICAgICAgZDMgKz0gaDYgKiAoNSAqIHI3KTtcbiAgICAgICAgICAgIGQzICs9IGg3ICogKDUgKiByNik7XG4gICAgICAgICAgICBkMyArPSBoOCAqICg1ICogcjUpO1xuICAgICAgICAgICAgZDMgKz0gaDkgKiAoNSAqIHI0KTtcbiAgICAgICAgICAgIGMgKz0gKGQzID4+PiAxMyk7XG4gICAgICAgICAgICBkMyAmPSAweDFmZmY7XG4gICAgICAgICAgICB2YXIgZDQgPSBjO1xuICAgICAgICAgICAgZDQgKz0gaDAgKiByNDtcbiAgICAgICAgICAgIGQ0ICs9IGgxICogcjM7XG4gICAgICAgICAgICBkNCArPSBoMiAqIHIyO1xuICAgICAgICAgICAgZDQgKz0gaDMgKiByMTtcbiAgICAgICAgICAgIGQ0ICs9IGg0ICogcjA7XG4gICAgICAgICAgICBjID0gKGQ0ID4+PiAxMyk7XG4gICAgICAgICAgICBkNCAmPSAweDFmZmY7XG4gICAgICAgICAgICBkNCArPSBoNSAqICg1ICogcjkpO1xuICAgICAgICAgICAgZDQgKz0gaDYgKiAoNSAqIHI4KTtcbiAgICAgICAgICAgIGQ0ICs9IGg3ICogKDUgKiByNyk7XG4gICAgICAgICAgICBkNCArPSBoOCAqICg1ICogcjYpO1xuICAgICAgICAgICAgZDQgKz0gaDkgKiAoNSAqIHI1KTtcbiAgICAgICAgICAgIGMgKz0gKGQ0ID4+PiAxMyk7XG4gICAgICAgICAgICBkNCAmPSAweDFmZmY7XG4gICAgICAgICAgICB2YXIgZDUgPSBjO1xuICAgICAgICAgICAgZDUgKz0gaDAgKiByNTtcbiAgICAgICAgICAgIGQ1ICs9IGgxICogcjQ7XG4gICAgICAgICAgICBkNSArPSBoMiAqIHIzO1xuICAgICAgICAgICAgZDUgKz0gaDMgKiByMjtcbiAgICAgICAgICAgIGQ1ICs9IGg0ICogcjE7XG4gICAgICAgICAgICBjID0gKGQ1ID4+PiAxMyk7XG4gICAgICAgICAgICBkNSAmPSAweDFmZmY7XG4gICAgICAgICAgICBkNSArPSBoNSAqIHIwO1xuICAgICAgICAgICAgZDUgKz0gaDYgKiAoNSAqIHI5KTtcbiAgICAgICAgICAgIGQ1ICs9IGg3ICogKDUgKiByOCk7XG4gICAgICAgICAgICBkNSArPSBoOCAqICg1ICogcjcpO1xuICAgICAgICAgICAgZDUgKz0gaDkgKiAoNSAqIHI2KTtcbiAgICAgICAgICAgIGMgKz0gKGQ1ID4+PiAxMyk7XG4gICAgICAgICAgICBkNSAmPSAweDFmZmY7XG4gICAgICAgICAgICB2YXIgZDYgPSBjO1xuICAgICAgICAgICAgZDYgKz0gaDAgKiByNjtcbiAgICAgICAgICAgIGQ2ICs9IGgxICogcjU7XG4gICAgICAgICAgICBkNiArPSBoMiAqIHI0O1xuICAgICAgICAgICAgZDYgKz0gaDMgKiByMztcbiAgICAgICAgICAgIGQ2ICs9IGg0ICogcjI7XG4gICAgICAgICAgICBjID0gKGQ2ID4+PiAxMyk7XG4gICAgICAgICAgICBkNiAmPSAweDFmZmY7XG4gICAgICAgICAgICBkNiArPSBoNSAqIHIxO1xuICAgICAgICAgICAgZDYgKz0gaDYgKiByMDtcbiAgICAgICAgICAgIGQ2ICs9IGg3ICogKDUgKiByOSk7XG4gICAgICAgICAgICBkNiArPSBoOCAqICg1ICogcjgpO1xuICAgICAgICAgICAgZDYgKz0gaDkgKiAoNSAqIHI3KTtcbiAgICAgICAgICAgIGMgKz0gKGQ2ID4+PiAxMyk7XG4gICAgICAgICAgICBkNiAmPSAweDFmZmY7XG4gICAgICAgICAgICB2YXIgZDcgPSBjO1xuICAgICAgICAgICAgZDcgKz0gaDAgKiByNztcbiAgICAgICAgICAgIGQ3ICs9IGgxICogcjY7XG4gICAgICAgICAgICBkNyArPSBoMiAqIHI1O1xuICAgICAgICAgICAgZDcgKz0gaDMgKiByNDtcbiAgICAgICAgICAgIGQ3ICs9IGg0ICogcjM7XG4gICAgICAgICAgICBjID0gKGQ3ID4+PiAxMyk7XG4gICAgICAgICAgICBkNyAmPSAweDFmZmY7XG4gICAgICAgICAgICBkNyArPSBoNSAqIHIyO1xuICAgICAgICAgICAgZDcgKz0gaDYgKiByMTtcbiAgICAgICAgICAgIGQ3ICs9IGg3ICogcjA7XG4gICAgICAgICAgICBkNyArPSBoOCAqICg1ICogcjkpO1xuICAgICAgICAgICAgZDcgKz0gaDkgKiAoNSAqIHI4KTtcbiAgICAgICAgICAgIGMgKz0gKGQ3ID4+PiAxMyk7XG4gICAgICAgICAgICBkNyAmPSAweDFmZmY7XG4gICAgICAgICAgICB2YXIgZDggPSBjO1xuICAgICAgICAgICAgZDggKz0gaDAgKiByODtcbiAgICAgICAgICAgIGQ4ICs9IGgxICogcjc7XG4gICAgICAgICAgICBkOCArPSBoMiAqIHI2O1xuICAgICAgICAgICAgZDggKz0gaDMgKiByNTtcbiAgICAgICAgICAgIGQ4ICs9IGg0ICogcjQ7XG4gICAgICAgICAgICBjID0gKGQ4ID4+PiAxMyk7XG4gICAgICAgICAgICBkOCAmPSAweDFmZmY7XG4gICAgICAgICAgICBkOCArPSBoNSAqIHIzO1xuICAgICAgICAgICAgZDggKz0gaDYgKiByMjtcbiAgICAgICAgICAgIGQ4ICs9IGg3ICogcjE7XG4gICAgICAgICAgICBkOCArPSBoOCAqIHIwO1xuICAgICAgICAgICAgZDggKz0gaDkgKiAoNSAqIHI5KTtcbiAgICAgICAgICAgIGMgKz0gKGQ4ID4+PiAxMyk7XG4gICAgICAgICAgICBkOCAmPSAweDFmZmY7XG4gICAgICAgICAgICB2YXIgZDkgPSBjO1xuICAgICAgICAgICAgZDkgKz0gaDAgKiByOTtcbiAgICAgICAgICAgIGQ5ICs9IGgxICogcjg7XG4gICAgICAgICAgICBkOSArPSBoMiAqIHI3O1xuICAgICAgICAgICAgZDkgKz0gaDMgKiByNjtcbiAgICAgICAgICAgIGQ5ICs9IGg0ICogcjU7XG4gICAgICAgICAgICBjID0gKGQ5ID4+PiAxMyk7XG4gICAgICAgICAgICBkOSAmPSAweDFmZmY7XG4gICAgICAgICAgICBkOSArPSBoNSAqIHI0O1xuICAgICAgICAgICAgZDkgKz0gaDYgKiByMztcbiAgICAgICAgICAgIGQ5ICs9IGg3ICogcjI7XG4gICAgICAgICAgICBkOSArPSBoOCAqIHIxO1xuICAgICAgICAgICAgZDkgKz0gaDkgKiByMDtcbiAgICAgICAgICAgIGMgKz0gKGQ5ID4+PiAxMyk7XG4gICAgICAgICAgICBkOSAmPSAweDFmZmY7XG4gICAgICAgICAgICBjID0gKCgoYyA8PCAyKSArIGMpKSB8IDA7XG4gICAgICAgICAgICBjID0gKGMgKyBkMCkgfCAwO1xuICAgICAgICAgICAgZDAgPSBjICYgMHgxZmZmO1xuICAgICAgICAgICAgYyA9IChjID4+PiAxMyk7XG4gICAgICAgICAgICBkMSArPSBjO1xuICAgICAgICAgICAgaDAgPSBkMDtcbiAgICAgICAgICAgIGgxID0gZDE7XG4gICAgICAgICAgICBoMiA9IGQyO1xuICAgICAgICAgICAgaDMgPSBkMztcbiAgICAgICAgICAgIGg0ID0gZDQ7XG4gICAgICAgICAgICBoNSA9IGQ1O1xuICAgICAgICAgICAgaDYgPSBkNjtcbiAgICAgICAgICAgIGg3ID0gZDc7XG4gICAgICAgICAgICBoOCA9IGQ4O1xuICAgICAgICAgICAgaDkgPSBkOTtcbiAgICAgICAgICAgIG1wb3MgKz0gMTY7XG4gICAgICAgICAgICBieXRlcyAtPSAxNjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oWzBdID0gaDA7XG4gICAgICAgIHRoaXMuX2hbMV0gPSBoMTtcbiAgICAgICAgdGhpcy5faFsyXSA9IGgyO1xuICAgICAgICB0aGlzLl9oWzNdID0gaDM7XG4gICAgICAgIHRoaXMuX2hbNF0gPSBoNDtcbiAgICAgICAgdGhpcy5faFs1XSA9IGg1O1xuICAgICAgICB0aGlzLl9oWzZdID0gaDY7XG4gICAgICAgIHRoaXMuX2hbN10gPSBoNztcbiAgICAgICAgdGhpcy5faFs4XSA9IGg4O1xuICAgICAgICB0aGlzLl9oWzldID0gaDk7XG4gICAgfTtcbiAgICBQb2x5MTMwNS5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKG1hYywgbWFjcG9zKSB7XG4gICAgICAgIGlmIChtYWNwb3MgPT09IHZvaWQgMCkgeyBtYWNwb3MgPSAwOyB9XG4gICAgICAgIHZhciBnID0gbmV3IFVpbnQxNkFycmF5KDEwKTtcbiAgICAgICAgdmFyIGM7XG4gICAgICAgIHZhciBtYXNrO1xuICAgICAgICB2YXIgZjtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGlmICh0aGlzLl9sZWZ0b3Zlcikge1xuICAgICAgICAgICAgaSA9IHRoaXMuX2xlZnRvdmVyO1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyW2krK10gPSAxO1xuICAgICAgICAgICAgZm9yICg7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2ZpbiA9IDE7XG4gICAgICAgICAgICB0aGlzLl9ibG9ja3ModGhpcy5fYnVmZmVyLCAwLCAxNik7XG4gICAgICAgIH1cbiAgICAgICAgYyA9IHRoaXMuX2hbMV0gPj4+IDEzO1xuICAgICAgICB0aGlzLl9oWzFdICY9IDB4MWZmZjtcbiAgICAgICAgZm9yIChpID0gMjsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2hbaV0gKz0gYztcbiAgICAgICAgICAgIGMgPSB0aGlzLl9oW2ldID4+PiAxMztcbiAgICAgICAgICAgIHRoaXMuX2hbaV0gJj0gMHgxZmZmO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hbMF0gKz0gKGMgKiA1KTtcbiAgICAgICAgYyA9IHRoaXMuX2hbMF0gPj4+IDEzO1xuICAgICAgICB0aGlzLl9oWzBdICY9IDB4MWZmZjtcbiAgICAgICAgdGhpcy5faFsxXSArPSBjO1xuICAgICAgICBjID0gdGhpcy5faFsxXSA+Pj4gMTM7XG4gICAgICAgIHRoaXMuX2hbMV0gJj0gMHgxZmZmO1xuICAgICAgICB0aGlzLl9oWzJdICs9IGM7XG4gICAgICAgIGdbMF0gPSB0aGlzLl9oWzBdICsgNTtcbiAgICAgICAgYyA9IGdbMF0gPj4+IDEzO1xuICAgICAgICBnWzBdICY9IDB4MWZmZjtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGdbaV0gPSB0aGlzLl9oW2ldICsgYztcbiAgICAgICAgICAgIGMgPSBnW2ldID4+PiAxMztcbiAgICAgICAgICAgIGdbaV0gJj0gMHgxZmZmO1xuICAgICAgICB9XG4gICAgICAgIGdbOV0gLT0gKDEgPDwgMTMpO1xuICAgICAgICBtYXNrID0gKGMgXiAxKSAtIDE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBnW2ldICY9IG1hc2s7XG4gICAgICAgIH1cbiAgICAgICAgbWFzayA9IH5tYXNrO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5faFtpXSA9ICh0aGlzLl9oW2ldICYgbWFzaykgfCBnW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hbMF0gPSAoKHRoaXMuX2hbMF0pIHwgKHRoaXMuX2hbMV0gPDwgMTMpKSAmIDB4ZmZmZjtcbiAgICAgICAgdGhpcy5faFsxXSA9ICgodGhpcy5faFsxXSA+Pj4gMykgfCAodGhpcy5faFsyXSA8PCAxMCkpICYgMHhmZmZmO1xuICAgICAgICB0aGlzLl9oWzJdID0gKCh0aGlzLl9oWzJdID4+PiA2KSB8ICh0aGlzLl9oWzNdIDw8IDcpKSAmIDB4ZmZmZjtcbiAgICAgICAgdGhpcy5faFszXSA9ICgodGhpcy5faFszXSA+Pj4gOSkgfCAodGhpcy5faFs0XSA8PCA0KSkgJiAweGZmZmY7XG4gICAgICAgIHRoaXMuX2hbNF0gPSAoKHRoaXMuX2hbNF0gPj4+IDEyKSB8ICh0aGlzLl9oWzVdIDw8IDEpIHwgKHRoaXMuX2hbNl0gPDwgMTQpKSAmIDB4ZmZmZjtcbiAgICAgICAgdGhpcy5faFs1XSA9ICgodGhpcy5faFs2XSA+Pj4gMikgfCAodGhpcy5faFs3XSA8PCAxMSkpICYgMHhmZmZmO1xuICAgICAgICB0aGlzLl9oWzZdID0gKCh0aGlzLl9oWzddID4+PiA1KSB8ICh0aGlzLl9oWzhdIDw8IDgpKSAmIDB4ZmZmZjtcbiAgICAgICAgdGhpcy5faFs3XSA9ICgodGhpcy5faFs4XSA+Pj4gOCkgfCAodGhpcy5faFs5XSA8PCA1KSkgJiAweGZmZmY7XG4gICAgICAgIGYgPSB0aGlzLl9oWzBdICsgdGhpcy5fcGFkWzBdO1xuICAgICAgICB0aGlzLl9oWzBdID0gZiAmIDB4ZmZmZjtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgZiA9ICgoKHRoaXMuX2hbaV0gKyB0aGlzLl9wYWRbaV0pIHwgMCkgKyAoZiA+Pj4gMTYpKSB8IDA7XG4gICAgICAgICAgICB0aGlzLl9oW2ldID0gZiAmIDB4ZmZmZjtcbiAgICAgICAgfVxuICAgICAgICBtYWNbbWFjcG9zICsgMF0gPSB0aGlzLl9oWzBdID4+PiAwO1xuICAgICAgICBtYWNbbWFjcG9zICsgMV0gPSB0aGlzLl9oWzBdID4+PiA4O1xuICAgICAgICBtYWNbbWFjcG9zICsgMl0gPSB0aGlzLl9oWzFdID4+PiAwO1xuICAgICAgICBtYWNbbWFjcG9zICsgM10gPSB0aGlzLl9oWzFdID4+PiA4O1xuICAgICAgICBtYWNbbWFjcG9zICsgNF0gPSB0aGlzLl9oWzJdID4+PiAwO1xuICAgICAgICBtYWNbbWFjcG9zICsgNV0gPSB0aGlzLl9oWzJdID4+PiA4O1xuICAgICAgICBtYWNbbWFjcG9zICsgNl0gPSB0aGlzLl9oWzNdID4+PiAwO1xuICAgICAgICBtYWNbbWFjcG9zICsgN10gPSB0aGlzLl9oWzNdID4+PiA4O1xuICAgICAgICBtYWNbbWFjcG9zICsgOF0gPSB0aGlzLl9oWzRdID4+PiAwO1xuICAgICAgICBtYWNbbWFjcG9zICsgOV0gPSB0aGlzLl9oWzRdID4+PiA4O1xuICAgICAgICBtYWNbbWFjcG9zICsgMTBdID0gdGhpcy5faFs1XSA+Pj4gMDtcbiAgICAgICAgbWFjW21hY3BvcyArIDExXSA9IHRoaXMuX2hbNV0gPj4+IDg7XG4gICAgICAgIG1hY1ttYWNwb3MgKyAxMl0gPSB0aGlzLl9oWzZdID4+PiAwO1xuICAgICAgICBtYWNbbWFjcG9zICsgMTNdID0gdGhpcy5faFs2XSA+Pj4gODtcbiAgICAgICAgbWFjW21hY3BvcyArIDE0XSA9IHRoaXMuX2hbN10gPj4+IDA7XG4gICAgICAgIG1hY1ttYWNwb3MgKyAxNV0gPSB0aGlzLl9oWzddID4+PiA4O1xuICAgICAgICB0aGlzLl9maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUG9seTEzMDUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHZhciBtcG9zID0gMDtcbiAgICAgICAgdmFyIGJ5dGVzID0gbS5sZW5ndGg7XG4gICAgICAgIHZhciB3YW50O1xuICAgICAgICBpZiAodGhpcy5fbGVmdG92ZXIpIHtcbiAgICAgICAgICAgIHdhbnQgPSAoMTYgLSB0aGlzLl9sZWZ0b3Zlcik7XG4gICAgICAgICAgICBpZiAod2FudCA+IGJ5dGVzKSB7XG4gICAgICAgICAgICAgICAgd2FudCA9IGJ5dGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3YW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJbdGhpcy5fbGVmdG92ZXIgKyBpXSA9IG1bbXBvcyArIGldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnl0ZXMgLT0gd2FudDtcbiAgICAgICAgICAgIG1wb3MgKz0gd2FudDtcbiAgICAgICAgICAgIHRoaXMuX2xlZnRvdmVyICs9IHdhbnQ7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGVmdG92ZXIgPCAxNikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzKHRoaXMuX2J1ZmZlciwgMCwgMTYpO1xuICAgICAgICAgICAgdGhpcy5fbGVmdG92ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChieXRlcyA+PSAxNikge1xuICAgICAgICAgICAgd2FudCA9IGJ5dGVzIC0gKGJ5dGVzICUgMTYpO1xuICAgICAgICAgICAgdGhpcy5fYmxvY2tzKG0sIG1wb3MsIHdhbnQpO1xuICAgICAgICAgICAgbXBvcyArPSB3YW50O1xuICAgICAgICAgICAgYnl0ZXMgLT0gd2FudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlclt0aGlzLl9sZWZ0b3ZlciArIGldID0gbVttcG9zICsgaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9sZWZ0b3ZlciArPSBieXRlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFBvbHkxMzA1LnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE8oZGNoZXN0KTogaXQgYmVoYXZlcyBkaWZmZXJlbnRseSB0aGFuIG90aGVyIGhhc2hlcy9ITUFDLFxuICAgICAgICAvLyBiZWNhdXNlIGl0IHRocm93cyB3aGVuIGZpbmlzaGVkIOKAlCBvdGhlcnMganVzdCByZXR1cm4gc2F2ZWQgcmVzdWx0LlxuICAgICAgICBpZiAodGhpcy5fZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBvbHkxMzA1IHdhcyBmaW5pc2hlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWFjID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICB0aGlzLmZpbmlzaChtYWMpO1xuICAgICAgICByZXR1cm4gbWFjO1xuICAgIH07XG4gICAgUG9seTEzMDUucHJvdG90eXBlLmNsZWFuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aXBlXzEud2lwZSh0aGlzLl9idWZmZXIpO1xuICAgICAgICB3aXBlXzEud2lwZSh0aGlzLl9yKTtcbiAgICAgICAgd2lwZV8xLndpcGUodGhpcy5faCk7XG4gICAgICAgIHdpcGVfMS53aXBlKHRoaXMuX3BhZCk7XG4gICAgICAgIHRoaXMuX2xlZnRvdmVyID0gMDtcbiAgICAgICAgdGhpcy5fZmluID0gMDtcbiAgICAgICAgdGhpcy5fZmluaXNoZWQgPSB0cnVlOyAvLyBtYXJrIGFzIGZpbmlzaGVkIGV2ZW4gaWYgbm90XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIFBvbHkxMzA1O1xufSgpKTtcbmV4cG9ydHMuUG9seTEzMDUgPSBQb2x5MTMwNTtcbi8qKlxuICogUmV0dXJucyAxNi1ieXRlIGF1dGhlbnRpY2F0b3Igb2YgZGF0YSB1c2luZyBhIG9uZS10aW1lIDMyLWJ5dGUga2V5LlxuICpcbiAqIEltcG9ydGFudDoga2V5IHNob3VsZCBiZSB1c2VkIGZvciBvbmx5IG9uZSBtZXNzYWdlLCBpdCBzaG91bGQgbmV2ZXIgcmVwZWF0LlxuICovXG5mdW5jdGlvbiBvbmVUaW1lQXV0aChrZXksIGRhdGEpIHtcbiAgICB2YXIgaCA9IG5ldyBQb2x5MTMwNShrZXkpO1xuICAgIGgudXBkYXRlKGRhdGEpO1xuICAgIHZhciBkaWdlc3QgPSBoLmRpZ2VzdCgpO1xuICAgIGguY2xlYW4oKTtcbiAgICByZXR1cm4gZGlnZXN0O1xufVxuZXhwb3J0cy5vbmVUaW1lQXV0aCA9IG9uZVRpbWVBdXRoO1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdHdvIGF1dGhlbnRpY2F0b3JzIGFyZSAxNi1ieXRlIGxvbmcgYW5kIGVxdWFsLlxuICogVXNlcyBjb250YW50LXRpbWUgY29tcGFyaXNvbiB0byBhdm9pZCBsZWFraW5nIHRpbWluZyBpbmZvcm1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gZXhwb3J0cy5ESUdFU1RfTEVOR1RIIHx8IGIubGVuZ3RoICE9PSBleHBvcnRzLkRJR0VTVF9MRU5HVEgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gY29uc3RhbnRfdGltZV8xLmVxdWFsKGEsIGIpO1xufVxuZXhwb3J0cy5lcXVhbCA9IGVxdWFsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9seTEzMDUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@stablelib+poly1305@1.0.1/node_modules/@stablelib/poly1305/lib/poly1305.js\n");

/***/ })

};
;