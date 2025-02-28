module.exports = {

"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "assertCurrentChain": (()=>assertCurrentChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/chain.js [app-ssr] (ecmascript)");
;
function assertCurrentChain({ chain, currentChainId }) {
    if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainNotFoundError"]();
    if (currentChainId !== chain.id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainMismatchError"]({
        chain,
        currentChainId
    });
} //# sourceMappingURL=assertCurrentChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getTransactionError": (()=>getTransactionError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/errors/getNodeError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
;
;
;
function getTransactionError(err, { docsPath, ...args }) {
    const cause = (()=>{
        const cause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getNodeError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeError"])(err, args);
        if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownNodeError"]) return err;
        return cause;
    })();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionExecutionError"](cause, {
        docsPath,
        ...args
    });
} //# sourceMappingURL=getTransactionError.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sendTransaction": (()=>sendTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/lru.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$eip7702$2f$utils$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/experimental/eip7702/utils/recoverAuthorizationAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/formatters/extract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const supportsWalletNamespace = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruMap"](128);
async function sendTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, accessList, authorizationList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, ...rest } = parameters;
    if (typeof account_ === 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/sendTransaction'
    });
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertRequest"])(parameters);
        const to = await (async ()=>{
            // If `to` exists on the parameters, use that.
            if (parameters.to) return parameters.to;
            // If no `to` exists, and we are sending a EIP-7702 transaction, use the
            // address of the first authorization in the list.
            if (authorizationList && authorizationList.length > 0) return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$eip7702$2f$utils$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAuthorizationAddress"])({
                authorization: authorizationList[0]
            }).catch(()=>{
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`to` is required. Could not infer from `authorizationList`.');
            });
            // Otherwise, we are sending a deployment transaction.
            return undefined;
        })();
        if (account?.type === 'json-rpc' || account === null) {
            let chainId;
            if (chain !== null) {
                chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertCurrentChain"])({
                    currentChainId: chainId,
                    chain
                });
            }
            const chainFormat = client.chain?.formatters?.transactionRequest?.format;
            const format = chainFormat || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
            const request = format({
                // Pick out extra data that might exist on the chain's transaction request type.
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$extract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extract"])(rest, {
                    format: chainFormat
                }),
                accessList,
                authorizationList,
                blobs,
                chainId,
                data,
                from: account?.address,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                to,
                value
            });
            const isWalletNamespaceSupported = supportsWalletNamespace.get(client.uid);
            const method = isWalletNamespaceSupported ? 'wallet_sendTransaction' : 'eth_sendTransaction';
            try {
                return await client.request({
                    method,
                    params: [
                        request
                    ]
                }, {
                    retryCount: 0
                });
            } catch (e) {
                if (isWalletNamespaceSupported === false) throw e;
                const error = e;
                // If the transport does not support the method or input, attempt to use the
                // `wallet_sendTransaction` method.
                if (error.name === 'InvalidInputRpcError' || error.name === 'InvalidParamsRpcError' || error.name === 'MethodNotFoundRpcError' || error.name === 'MethodNotSupportedRpcError') {
                    return await client.request({
                        method: 'wallet_sendTransaction',
                        params: [
                            request
                        ]
                    }, {
                        retryCount: 0
                    }).then((hash)=>{
                        supportsWalletNamespace.set(client.uid, true);
                        return hash;
                    }).catch((e)=>{
                        const walletNamespaceError = e;
                        if (walletNamespaceError.name === 'MethodNotFoundRpcError' || walletNamespaceError.name === 'MethodNotSupportedRpcError') {
                            supportsWalletNamespace.set(client.uid, false);
                            throw error;
                        }
                        throw walletNamespaceError;
                    });
                }
                throw error;
            }
        }
        if (account?.type === 'local') {
            // Prepare the request for signing (assign appropriate fees, etc.)
            const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareTransactionRequest"], 'prepareTransactionRequest')({
                account,
                accessList,
                authorizationList,
                blobs,
                chain,
                data,
                gas,
                gasPrice,
                maxFeePerBlobGas,
                maxFeePerGas,
                maxPriorityFeePerGas,
                nonce,
                nonceManager: account.nonceManager,
                parameters: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultParameters"],
                    'sidecars'
                ],
                value,
                ...rest,
                to
            });
            const serializer = chain?.serializers?.transaction;
            const serializedTransaction = await account.signTransaction(request, {
                serializer
            });
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendRawTransaction"], 'sendRawTransaction')({
                serializedTransaction
            });
        }
        if (account?.type === 'smart') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
            metaMessages: [
                'Consider using the `sendUserOperation` Action instead.'
            ],
            docsPath: '/docs/actions/bundler/sendUserOperation',
            type: 'smart'
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]({
            docsPath: '/docs/actions/wallet/sendTransaction',
            type: account?.type
        });
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountTypeNotSupportedError"]) throw err;
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionError"])(err, {
            ...parameters,
            account,
            chain: parameters.chain || undefined
        });
    }
} //# sourceMappingURL=sendTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/writeContract.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "writeContract": (()=>writeContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/errors/getContractError.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
async function writeContract(client, parameters) {
    const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
    if (typeof account_ === 'undefined') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/contract/writeContract'
    });
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi,
        args,
        functionName
    });
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"], 'sendTransaction')({
            data: `${data}${dataSuffix ? dataSuffix.replace('0x', '') : ''}`,
            to: address,
            account,
            ...request
        });
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractError"])(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/writeContract',
            functionName,
            sender: account?.address
        });
    }
} //# sourceMappingURL=writeContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/createPublicClient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createPublicClient": (()=>createPublicClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/createClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/decorators/public.js [app-ssr] (ecmascript)");
;
;
function createPublicClient(parameters) {
    const { key = 'public', name = 'Public Client' } = parameters;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])({
        ...parameters,
        key,
        name,
        type: 'publicClient'
    });
    return client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$public$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicActions"]);
} //# sourceMappingURL=createPublicClient.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/toAccount.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// TODO(v3): Rename to `toLocalAccount` + add `source` property to define source (privateKey, mnemonic, hdKey, etc).
__turbopack_esm__({
    "toAccount": (()=>toAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
;
;
function toAccount(source) {
    if (typeof source === 'string') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(source, {
            strict: false
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address: source
        });
        return {
            address: source,
            type: 'json-rpc'
        };
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(source.address, {
        strict: false
    })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: source.address
    });
    return {
        address: source.address,
        nonceManager: source.nonceManager,
        sign: source.sign,
        experimental_signAuthorization: source.experimental_signAuthorization,
        signMessage: source.signMessage,
        signTransaction: source.signTransaction,
        signTypedData: source.signTypedData,
        source: 'custom',
        type: 'local'
    };
} //# sourceMappingURL=toAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/sign.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// TODO(v3): Convert to sync.
__turbopack_esm__({
    "setSignEntropy": (()=>setSignEntropy),
    "sign": (()=>sign)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$8$2e$1$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+curves@1.8.1/node_modules/@noble/curves/esm/secp256k1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/signature/serializeSignature.js [app-ssr] (ecmascript)");
;
;
;
let extraEntropy = false;
function setSignEntropy(entropy) {
    if (!entropy) throw new Error('must be a `true` or a hex value.');
    extraEntropy = entropy;
}
async function sign({ hash, privateKey, to = 'object' }) {
    const { r, s, recovery } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$8$2e$1$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secp256k1"].sign(hash.slice(2), privateKey.slice(2), {
        lowS: true,
        extraEntropy
    });
    const signature = {
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(r, {
            size: 32
        }),
        s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(s, {
            size: 32
        }),
        v: recovery ? 28n : 27n,
        yParity: recovery
    };
    return (()=>{
        if (to === 'bytes' || to === 'hex') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeSignature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeSignature"])({
            ...signature,
            to
        });
        return signature;
    })();
} //# sourceMappingURL=sign.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/signAuthorization.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "experimental_signAuthorization": (()=>experimental_signAuthorization)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/sign.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$eip7702$2f$utils$2f$hashAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/experimental/eip7702/utils/hashAuthorization.js [app-ssr] (ecmascript)");
;
;
async function experimental_signAuthorization(parameters) {
    const { contractAddress, chainId, nonce, privateKey, to = 'object' } = parameters;
    const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sign"])({
        hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$eip7702$2f$utils$2f$hashAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashAuthorization"])({
            contractAddress,
            chainId,
            nonce
        }),
        privateKey,
        to
    });
    if (to === 'object') return {
        contractAddress,
        chainId,
        nonce,
        ...signature
    };
    return signature;
} //# sourceMappingURL=signAuthorization.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/signMessage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signMessage": (()=>signMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/sign.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/signature/hashMessage.js [app-ssr] (ecmascript)");
;
;
async function signMessage({ message, privateKey }) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sign"])({
        hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(message),
        privateKey,
        to: 'hex'
    });
} //# sourceMappingURL=signMessage.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "assertTransactionEIP1559": (()=>assertTransactionEIP1559),
    "assertTransactionEIP2930": (()=>assertTransactionEIP2930),
    "assertTransactionEIP4844": (()=>assertTransactionEIP4844),
    "assertTransactionEIP7702": (()=>assertTransactionEIP7702),
    "assertTransactionLegacy": (()=>assertTransactionLegacy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/chain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/blob.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/size.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/slice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$kzg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/constants/kzg.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function assertTransactionEIP7702(transaction) {
    const { authorizationList } = transaction;
    if (authorizationList) {
        for (const authorization of authorizationList){
            const { contractAddress, chainId } = authorization;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(contractAddress)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
                address: contractAddress
            });
            if (chainId < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
                chainId
            });
        }
    }
    assertTransactionEIP1559(transaction);
}
function assertTransactionEIP4844(transaction) {
    const { blobVersionedHashes } = transaction;
    if (blobVersionedHashes) {
        if (blobVersionedHashes.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyBlobError"]();
        for (const hash of blobVersionedHashes){
            const size_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(hash);
            const version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(hash, 0, 1));
            if (size_ !== 32) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidVersionedHashSizeError"]({
                hash,
                size: size_
            });
            if (version !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$kzg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["versionedHashVersionKzg"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$blob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidVersionedHashVersionError"]({
                hash,
                version
            });
        }
    }
    assertTransactionEIP1559(transaction);
}
function assertTransactionEIP1559(transaction) {
    const { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = transaction;
    if (chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (maxFeePerGas && maxFeePerGas > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas
    });
    if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
}
function assertTransactionEIP2930(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (maxPriorityFeePerGas || maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.');
    if (gasPrice && gasPrice > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas: gasPrice
    });
}
function assertTransactionLegacy(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (typeof chainId !== 'undefined' && chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (maxPriorityFeePerGas || maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.');
    if (gasPrice && gasPrice > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint256"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas: gasPrice
    });
} //# sourceMappingURL=assertTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/serializeAccessList.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "serializeAccessList": (()=>serializeAccessList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
;
;
;
function serializeAccessList(accessList) {
    if (!accessList || accessList.length === 0) return [];
    const serializedAccessList = [];
    for(let i = 0; i < accessList.length; i++){
        const { address, storageKeys } = accessList[i];
        for(let j = 0; j < storageKeys.length; j++){
            if (storageKeys[j].length - 2 !== 64) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidStorageKeySizeError"]({
                    storageKey: storageKeys[j]
                });
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(address, {
            strict: false
        })) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
                address
            });
        }
        serializedAccessList.push([
            address,
            storageKeys
        ]);
    }
    return serializedAccessList;
} //# sourceMappingURL=serializeAccessList.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/experimental/eip7702/utils/serializeAuthorizationList.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "serializeAuthorizationList": (()=>serializeAuthorizationList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
;
;
function serializeAuthorizationList(authorizationList) {
    if (!authorizationList || authorizationList.length === 0) return [];
    const serializedAuthorizationList = [];
    for (const authorization of authorizationList){
        const { contractAddress, chainId, nonce, ...signature } = authorization;
        serializedAuthorizationList.push([
            chainId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId) : '0x',
            contractAddress,
            nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toYParitySignatureArray"])({}, signature)
        ]);
    }
    return serializedAuthorizationList;
} //# sourceMappingURL=serializeAuthorizationList.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "serializeTransaction": (()=>serializeTransaction),
    "toYParitySignatureArray": (()=>toYParitySignatureArray)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getTransactionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/getTransactionType.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/assertTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/serializeAccessList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$eip7702$2f$utils$2f$serializeAuthorizationList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/experimental/eip7702/utils/serializeAuthorizationList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToCommitments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/blob/blobsToCommitments.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentsToVersionedHashes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToProofs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/blob/blobsToProofs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/blob/toBlobSidecars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/data/trim.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function serializeTransaction(transaction, signature) {
    const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$getTransactionType$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionType"])(transaction);
    if (type === 'eip1559') return serializeTransactionEIP1559(transaction, signature);
    if (type === 'eip2930') return serializeTransactionEIP2930(transaction, signature);
    if (type === 'eip4844') return serializeTransactionEIP4844(transaction, signature);
    if (type === 'eip7702') return serializeTransactionEIP7702(transaction, signature);
    return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP7702(transaction, signature) {
    const { authorizationList, chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP7702"])(transaction);
    const serializedAccessList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList);
    const serializedAuthorizationList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$eip7702$2f$utils$2f$serializeAuthorizationList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAuthorizationList"])(authorizationList);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x04',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
            nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
            maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxPriorityFeePerGas) : '0x',
            maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxFeePerGas) : '0x',
            gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
            to ?? '0x',
            value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
            data ?? '0x',
            serializedAccessList,
            serializedAuthorizationList,
            ...toYParitySignatureArray(transaction, signature)
        ])
    ]);
}
function serializeTransactionEIP4844(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP4844"])(transaction);
    let blobVersionedHashes = transaction.blobVersionedHashes;
    let sidecars = transaction.sidecars;
    // If `blobs` are passed, we will need to compute the KZG commitments & proofs.
    if (transaction.blobs && (typeof blobVersionedHashes === 'undefined' || typeof sidecars === 'undefined')) {
        const blobs = typeof transaction.blobs[0] === 'string' ? transaction.blobs : transaction.blobs.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesToHex"])(x));
        const kzg = transaction.kzg;
        const commitments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToCommitments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blobsToCommitments"])({
            blobs,
            kzg
        });
        if (typeof blobVersionedHashes === 'undefined') blobVersionedHashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$commitmentsToVersionedHashes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commitmentsToVersionedHashes"])({
            commitments
        });
        if (typeof sidecars === 'undefined') {
            const proofs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$blobsToProofs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blobsToProofs"])({
                blobs,
                commitments,
                kzg
            });
            sidecars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$blob$2f$toBlobSidecars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBlobSidecars"])({
                blobs,
                commitments,
                proofs
            });
        }
    }
    const serializedAccessList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList);
    const serializedTransaction = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
        maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxFeePerGas) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        maxFeePerBlobGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxFeePerBlobGas) : '0x',
        blobVersionedHashes ?? [],
        ...toYParitySignatureArray(transaction, signature)
    ];
    const blobs = [];
    const commitments = [];
    const proofs = [];
    if (sidecars) for(let i = 0; i < sidecars.length; i++){
        const { blob, commitment, proof } = sidecars[i];
        blobs.push(blob);
        commitments.push(commitment);
        proofs.push(proof);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x03',
        sidecars ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])([
            serializedTransaction,
            blobs,
            commitments,
            proofs
        ]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
}
function serializeTransactionEIP1559(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP1559"])(transaction);
    const serializedAccessList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList);
    const serializedTransaction = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
        maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxFeePerGas) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        ...toYParitySignatureArray(transaction, signature)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x02',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
}
function serializeTransactionEIP2930(transaction, signature) {
    const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionEIP2930"])(transaction);
    const serializedAccessList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList);
    const serializedTransaction = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
        gasPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gasPrice) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        ...toYParitySignatureArray(transaction, signature)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x01',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
}
function serializeTransactionLegacy(transaction, signature) {
    const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertTransactionLegacy"])(transaction);
    let serializedTransaction = [
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
        gasPrice ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gasPrice) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
        data ?? '0x'
    ];
    if (signature) {
        const v = (()=>{
            // EIP-155 (inferred chainId)
            if (signature.v >= 35n) {
                const inferredChainId = (signature.v - 35n) / 2n;
                if (inferredChainId > 0) return signature.v;
                return 27n + (signature.v === 35n ? 0n : 1n);
            }
            // EIP-155 (explicit chainId)
            if (chainId > 0) return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
            // Pre-EIP-155 (no chainId)
            const v = 27n + (signature.v === 27n ? 0n : 1n);
            if (signature.v !== v) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidLegacyVError"]({
                v: signature.v
            });
            return v;
        })();
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(signature.r);
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(signature.s);
        serializedTransaction = [
            ...serializedTransaction,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(v),
            r === '0x00' ? '0x' : r,
            s === '0x00' ? '0x' : s
        ];
    } else if (chainId > 0) {
        serializedTransaction = [
            ...serializedTransaction,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
            '0x',
            '0x'
        ];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction);
}
function toYParitySignatureArray(transaction, signature_) {
    const signature = signature_ ?? transaction;
    const { v, yParity } = signature;
    if (typeof signature.r === 'undefined') return [];
    if (typeof signature.s === 'undefined') return [];
    if (typeof v === 'undefined' && typeof yParity === 'undefined') return [];
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(signature.r);
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(signature.s);
    const yParity_ = (()=>{
        if (typeof yParity === 'number') return yParity ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(1) : '0x';
        if (v === 0n) return '0x';
        if (v === 1n) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(1);
        return v === 27n ? '0x' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(1);
    })();
    return [
        yParity_,
        r === '0x00' ? '0x' : r,
        s === '0x00' ? '0x' : s
    ];
} //# sourceMappingURL=serializeTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/signTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signTransaction": (()=>signTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/sign.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
;
;
;
async function signTransaction(parameters) {
    const { privateKey, transaction, serializer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"] } = parameters;
    const signableTransaction = (()=>{
        // For EIP-4844 Transactions, we want to sign the transaction payload body (tx_payload_body) without the sidecars (ie. without the network wrapper).
        // See: https://github.com/ethereum/EIPs/blob/e00f4daa66bd56e2dbd5f1d36d09fd613811a48b/EIPS/eip-4844.md#networking
        if (transaction.type === 'eip4844') return {
            ...transaction,
            sidecars: false
        };
        return transaction;
    })();
    const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sign"])({
        hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(serializer(signableTransaction)),
        privateKey
    });
    return serializer(transaction, signature);
} //# sourceMappingURL=signTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/signTypedData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signTypedData": (()=>signTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/sign.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-ssr] (ecmascript)");
;
;
async function signTypedData(parameters) {
    const { privateKey, ...typedData } = parameters;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sign"])({
        hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashTypedData"])(typedData),
        privateKey,
        to: 'hex'
    });
} //# sourceMappingURL=signTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/privateKeyToAccount.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "privateKeyToAccount": (()=>privateKeyToAccount)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$8$2e$1$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@noble+curves@1.8.1/node_modules/@noble/curves/esm/secp256k1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$publicKeyToAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/toAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/sign.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$signAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/signAuthorization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/signMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$signTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/signTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$signTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/signTypedData.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function privateKeyToAccount(privateKey, options = {}) {
    const { nonceManager } = options;
    const publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$curves$40$1$2e$8$2e$1$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secp256k1"].getPublicKey(privateKey.slice(2), false));
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$publicKeyToAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicKeyToAddress"])(publicKey);
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$toAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toAccount"])({
        address,
        nonceManager,
        async sign ({ hash }) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sign"])({
                hash,
                privateKey,
                to: 'hex'
            });
        },
        async experimental_signAuthorization (authorization) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$signAuthorization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experimental_signAuthorization"])({
                ...authorization,
                privateKey
            });
        },
        async signMessage ({ message }) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signMessage"])({
                message,
                privateKey
            });
        },
        async signTransaction (transaction, { serializer } = {}) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$signTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signTransaction"])({
                privateKey,
                transaction,
                serializer
            });
        },
        async signTypedData (typedData) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$signTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signTypedData"])({
                ...typedData,
                privateKey
            });
        }
    });
    return {
        ...account,
        publicKey,
        source: 'privateKey'
    };
} //# sourceMappingURL=privateKeyToAccount.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/addChain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addChain": (()=>addChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
async function addChain(client, { chain }) {
    const { id, name, nativeCurrency, rpcUrls, blockExplorers } = chain;
    await client.request({
        method: 'wallet_addEthereumChain',
        params: [
            {
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(id),
                chainName: name,
                nativeCurrency,
                rpcUrls: rpcUrls.default.http,
                blockExplorerUrls: blockExplorers ? Object.values(blockExplorers).map(({ url })=>url) : undefined
            }
        ]
    }, {
        dedupe: true,
        retryCount: 0
    });
} //# sourceMappingURL=addChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/deployContract.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deployContract": (()=>deployContract)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
;
;
function deployContract(walletClient, parameters) {
    const { abi, args, bytecode, ...request } = parameters;
    const calldata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeDeployData"])({
        abi,
        args,
        bytecode
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"])(walletClient, {
        ...request,
        data: calldata
    });
} //# sourceMappingURL=deployContract.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/getAddresses.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getAddresses": (()=>getAddresses)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
;
async function getAddresses(client) {
    if (client.account?.type === 'local') return [
        client.account.address
    ];
    const addresses = await client.request({
        method: 'eth_accounts'
    }, {
        dedupe: true
    });
    return addresses.map((address)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksumAddress"])(address));
} //# sourceMappingURL=getAddresses.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/getPermissions.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Gets the wallets current permissions.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/getPermissions
 * - JSON-RPC Methods: [`wallet_getPermissions`](https://eips.ethereum.org/EIPS/eip-2255)
 *
 * @param client - Client to use
 * @returns The wallet permissions. {@link GetPermissionsReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getPermissions } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const permissions = await getPermissions(client)
 */ __turbopack_esm__({
    "getPermissions": (()=>getPermissions)
});
async function getPermissions(client) {
    const permissions = await client.request({
        method: 'wallet_getPermissions'
    }, {
        dedupe: true
    });
    return permissions;
} //# sourceMappingURL=getPermissions.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/requestAddresses.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "requestAddresses": (()=>requestAddresses)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
;
async function requestAddresses(client) {
    const addresses = await client.request({
        method: 'eth_requestAccounts'
    }, {
        dedupe: true,
        retryCount: 0
    });
    return addresses.map((address)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(address));
} //# sourceMappingURL=requestAddresses.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/requestPermissions.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Requests permissions for a wallet.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/requestPermissions
 * - JSON-RPC Methods: [`wallet_requestPermissions`](https://eips.ethereum.org/EIPS/eip-2255)
 *
 * @param client - Client to use
 * @param parameters - {@link RequestPermissionsParameters}
 * @returns The wallet permissions. {@link RequestPermissionsReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { requestPermissions } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const permissions = await requestPermissions(client, {
 *   eth_accounts: {}
 * })
 */ __turbopack_esm__({
    "requestPermissions": (()=>requestPermissions)
});
async function requestPermissions(client, permissions) {
    return client.request({
        method: 'wallet_requestPermissions',
        params: [
            permissions
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=requestPermissions.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/signTransaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signTransaction": (()=>signTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/assertRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/getAction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/chain/assertCurrentChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
async function signTransaction(client, parameters) {
    const { account: account_ = client.account, chain = client.chain, ...transaction } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/signTransaction'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$assertRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertRequest"])({
        account,
        ...parameters
    });
    const chainId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
    if (chain !== null) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$assertCurrentChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertCurrentChain"])({
        currentChainId: chainId,
        chain
    });
    const formatters = chain?.formatters || client.chain?.formatters;
    const format = formatters?.transactionRequest?.format || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransactionRequest"];
    if (account.signTransaction) return account.signTransaction({
        ...transaction,
        chainId
    }, {
        serializer: client.chain?.serializers?.transaction
    });
    return await client.request({
        method: 'eth_signTransaction',
        params: [
            {
                ...format(transaction),
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(chainId),
                from: account.address
            }
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signTransaction.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/signTypedData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signTypedData": (()=>signTypedData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/account.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/typedData.js [app-ssr] (ecmascript)");
;
;
;
async function signTypedData(client, parameters) {
    const { account: account_ = client.account, domain, message, primaryType } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/actions/wallet/signTypedData'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const types = {
        EIP712Domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTypesForEIP712Domain"])({
            domain
        }),
        ...parameters.types
    };
    // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
    // as we can't statically check this with TypeScript.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTypedData"])({
        domain,
        message,
        primaryType,
        types
    });
    if (account.signTypedData) return account.signTypedData({
        domain,
        message,
        primaryType,
        types
    });
    const typedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTypedData"])({
        domain,
        message,
        primaryType,
        types
    });
    return client.request({
        method: 'eth_signTypedData_v4',
        params: [
            account.address,
            typedData
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=signTypedData.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/switchChain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "switchChain": (()=>switchChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
async function switchChain(client, { id }) {
    await client.request({
        method: 'wallet_switchEthereumChain',
        params: [
            {
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(id)
            }
        ]
    }, {
        retryCount: 0
    });
} //# sourceMappingURL=switchChain.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/watchAsset.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Adds an EVM chain to the wallet.
 *
 * - Docs: https://viem.sh/docs/actions/wallet/watchAsset
 * - JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-747)
 *
 * @param client - Client to use
 * @param parameters - {@link WatchAssetParameters}
 * @returns Boolean indicating if the token was successfully added. {@link WatchAssetReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { watchAsset } from 'viem/wallet'
 *
 * const client = createWalletClient({
 *   chain: mainnet,
 *   transport: custom(window.ethereum),
 * })
 * const success = await watchAsset(client, {
 *   type: 'ERC20',
 *   options: {
 *     address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 *     decimals: 18,
 *     symbol: 'WETH',
 *   },
 * })
 */ __turbopack_esm__({
    "watchAsset": (()=>watchAsset)
});
async function watchAsset(client, params) {
    const added = await client.request({
        method: 'wallet_watchAsset',
        params
    }, {
        retryCount: 0
    });
    return added;
} //# sourceMappingURL=watchAsset.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/decorators/wallet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "walletActions": (()=>walletActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$addChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/addChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$deployContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/deployContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/getAddresses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/getPermissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/requestAddresses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/requestPermissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/signMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/signTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/signTypedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$switchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/switchChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$watchAsset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/watchAsset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/writeContract.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function walletActions(client) {
    return {
        addChain: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$addChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addChain"])(client, args),
        deployContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$deployContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deployContract"])(client, args),
        getAddresses: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddresses"])(client),
        getChainId: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"])(client),
        getPermissions: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPermissions"])(client),
        prepareTransactionRequest: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareTransactionRequest"])(client, args),
        requestAddresses: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestAddresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestAddresses"])(client),
        requestPermissions: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$requestPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestPermissions"])(client, args),
        sendRawTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendRawTransaction"])(client, args),
        sendTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendTransaction"])(client, args),
        signMessage: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signMessage"])(client, args),
        signTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signTransaction"])(client, args),
        signTypedData: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$signTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signTypedData"])(client, args),
        switchChain: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$switchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["switchChain"])(client, args),
        watchAsset: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$watchAsset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchAsset"])(client, args),
        writeContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$writeContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeContract"])(client, args)
    };
} //# sourceMappingURL=wallet.js.map
}}),
"[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/createWalletClient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createWalletClient": (()=>createWalletClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/createClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/viem@2.23.5_bufferutil@4.0.9_typescript@5.7.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/decorators/wallet.js [app-ssr] (ecmascript)");
;
;
function createWalletClient(parameters) {
    const { key = 'wallet', name = 'Wallet Client', transport } = parameters;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])({
        ...parameters,
        key,
        name,
        transport,
        type: 'walletClient'
    });
    return client.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$23$2e$5_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$7$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$24$2e$2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$decorators$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletActions"]);
} //# sourceMappingURL=createWalletClient.js.map
}}),

};

//# sourceMappingURL=18be4_viem__esm_690057._.js.map