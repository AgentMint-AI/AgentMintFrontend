module.exports = {

"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/emptyCheck.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "emptyCheck": (()=>emptyCheck)
});
const emptyCheck = {
    extrinsic: {},
    payload: {}
};
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/substrate.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "substrate": (()=>substrate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/emptyCheck.js [app-route] (ecmascript)");
;
const CheckMetadataHash = {
    extrinsic: {
        mode: 'u8'
    },
    payload: {
        metadataHash: 'Option<[u8;32]>'
    }
};
const CheckMortality = {
    extrinsic: {
        era: 'ExtrinsicEra'
    },
    payload: {
        blockHash: 'Hash'
    }
};
const ChargeTransactionPayment = {
    extrinsic: {
        tip: 'Compact<Balance>'
    },
    payload: {}
};
const substrate = {
    ChargeTransactionPayment,
    CheckBlockGasLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"],
    CheckEra: CheckMortality,
    CheckGenesis: {
        extrinsic: {},
        payload: {
            genesisHash: 'Hash'
        }
    },
    CheckMetadataHash,
    CheckMortality,
    CheckNonZeroSender: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"],
    CheckNonce: {
        extrinsic: {
            nonce: 'Compact<Index>'
        },
        payload: {}
    },
    CheckSpecVersion: {
        extrinsic: {},
        payload: {
            specVersion: 'u32'
        }
    },
    CheckTxVersion: {
        extrinsic: {},
        payload: {
            transactionVersion: 'u32'
        }
    },
    CheckVersion: {
        extrinsic: {},
        payload: {
            specVersion: 'u32'
        }
    },
    CheckWeight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"],
    LockStakingStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"],
    SkipCheckIfFeeless: ChargeTransactionPayment,
    ValidateEquivocationReport: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"]
};
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/polkadot.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "polkadot": (()=>polkadot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/emptyCheck.js [app-route] (ecmascript)");
;
const polkadot = {
    LimitParathreadCommits: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"],
    OnlyStakingAndClaims: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"],
    PrevalidateAttests: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"],
    RestrictFunctionality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"],
    TransactionCallFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"],
    ValidateDoubleVoteReports: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"]
};
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/shell.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "shell": (()=>shell)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/emptyCheck.js [app-route] (ecmascript)");
;
const shell = {
    DisallowSigned: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$emptyCheck$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emptyCheck"]
};
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/statemint.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "statemint": (()=>statemint)
});
const statemint = {
    ChargeAssetTxPayment: {
        extrinsic: {
            tip: 'Compact<Balance>',
            // eslint-disable-next-line sort-keys
            assetId: 'TAssetConversion'
        },
        payload: {}
    }
};
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "allExtensions": (()=>allExtensions),
    "expandExtensionTypes": (()=>expandExtensionTypes),
    "fallbackExtensions": (()=>fallbackExtensions),
    "findUnknownExtensions": (()=>findUnknownExtensions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/spread.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$substrate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/substrate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$polkadot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/polkadot.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$shell$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/shell.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$statemint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/signedExtensions/statemint.js [app-route] (ecmascript)");
;
;
;
;
;
const allExtensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$substrate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["substrate"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$polkadot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["polkadot"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$shell$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shell"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$signedExtensions$2f$statemint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["statemint"]);
const fallbackExtensions = [
    'CheckVersion',
    'CheckGenesis',
    'CheckEra',
    'CheckNonce',
    'CheckWeight',
    'ChargeTransactionPayment',
    'CheckBlockGasLimit'
];
function findUnknownExtensions(extensions, userExtensions = {}) {
    const names = [
        ...Object.keys(allExtensions),
        ...Object.keys(userExtensions)
    ];
    return extensions.filter((k)=>!names.includes(k));
}
function expandExtensionTypes(extensions, type, userExtensions = {}) {
    return extensions// Always allow user extensions first - these should provide overrides
    .map((k)=>userExtensions[k] || allExtensions[k]).filter((info)=>!!info).reduce((result, info)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])(result, info[type]), {});
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/index.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/constants.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BARE_EXTRINSIC": (()=>BARE_EXTRINSIC),
    "BIT_SIGNED": (()=>BIT_SIGNED),
    "BIT_UNSIGNED": (()=>BIT_UNSIGNED),
    "DEFAULT_PREAMBLE": (()=>DEFAULT_PREAMBLE),
    "EMPTY_U8A": (()=>EMPTY_U8A),
    "GENERAL_EXTRINSIC": (()=>GENERAL_EXTRINSIC),
    "IMMORTAL_ERA": (()=>IMMORTAL_ERA),
    "LATEST_EXTRINSIC_VERSION": (()=>LATEST_EXTRINSIC_VERSION),
    "LOWEST_SUPPORTED_EXTRINSIC_FORMAT_VERSION": (()=>LOWEST_SUPPORTED_EXTRINSIC_FORMAT_VERSION),
    "SIGNED_EXTRINSIC": (()=>SIGNED_EXTRINSIC),
    "TYPE_MASK": (()=>TYPE_MASK),
    "UNMASK_VERSION": (()=>UNMASK_VERSION),
    "VERSION_MASK": (()=>VERSION_MASK)
});
const BIT_SIGNED = 0b10000000;
const BIT_UNSIGNED = 0;
const EMPTY_U8A = new Uint8Array();
const IMMORTAL_ERA = new Uint8Array([
    0
]);
const UNMASK_VERSION = 0b01111111;
const DEFAULT_PREAMBLE = 'bare';
const LATEST_EXTRINSIC_VERSION = 5;
const VERSION_MASK = 0b00111111;
const TYPE_MASK = 0b11000000;
const BARE_EXTRINSIC = 0b00000000;
const SIGNED_EXTRINSIC = 0b10000000;
const GENERAL_EXTRINSIC = 0b01000000;
const LOWEST_SUPPORTED_EXTRINSIC_FORMAT_VERSION = 4;
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/Extrinsic.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsic": (()=>GenericExtrinsic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/property.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$abstract$2f$Base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/abstract/Base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$concat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/concat.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$compact$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/compact/toU8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/toHex.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/spread.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$compact$2f$addLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/compact/addLength.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/u8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$hex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/hex.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/toU8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$compact$2f$fromU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/compact/fromU8a.js [app-route] (ecmascript)");
;
;
;
const VERSIONS = [
    'ExtrinsicUnknown',
    'ExtrinsicUnknown',
    'ExtrinsicUnknown',
    'ExtrinsicUnknown',
    'ExtrinsicV4',
    'ExtrinsicV5'
];
const PREAMBLE = {
    bare: 'ExtrinsicV5',
    general: 'GeneralExtrinsic',
    signed: 'ExtrinsicV5'
};
const PreambleMask = {
    bare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BARE_EXTRINSIC"],
    general: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GENERAL_EXTRINSIC"],
    signed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SIGNED_EXTRINSIC"]
};
const preambleUnMask = {
    0: 'bare',
    // eslint-disable-next-line sort-keys
    64: 'general',
    // eslint-disable-next-line sort-keys
    128: 'signed'
};
;
/** @internal */ function newFromValue(registry, value, version, preamble) {
    if (value instanceof GenericExtrinsic) {
        return value.unwrap();
    }
    const isSigned = (version & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BIT_SIGNED"]) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BIT_SIGNED"];
    const type = (version & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VERSION_MASK"]) === 5 ? PREAMBLE[preamble] : VERSIONS[version & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VERSION_MASK"]] || VERSIONS[0];
    // we cast here since the VERSION definition is incredibly broad - we don't have a
    // slice for "only add extrinsic types", and more string definitions become unwieldy
    return registry.createTypeUnsafe(type, [
        value,
        {
            isSigned,
            version
        }
    ]);
}
/** @internal */ function decodeExtrinsic(registry, value, version = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LOWEST_SUPPORTED_EXTRINSIC_FORMAT_VERSION"], preamble = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_PREAMBLE"]) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isU8a"])(value) || Array.isArray(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$hex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isHex"])(value)) {
        return decodeU8a(registry, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToU8a"])(value), version, preamble);
    } else if (value instanceof registry.createClassUnsafe('Call')) {
        return newFromValue(registry, {
            method: value
        }, version, preamble);
    }
    return newFromValue(registry, value, version, preamble);
}
/** @internal */ function decodeU8a(registry, value, version, preamble) {
    if (!value.length) {
        return newFromValue(registry, new Uint8Array(), version, preamble);
    }
    const [offset, length] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$compact$2f$fromU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compactFromU8a"])(value);
    const total = offset + length.toNumber();
    if (total > value.length) {
        throw new Error(`Extrinsic: length less than remainder, expected at least ${total}, found ${value.length}`);
    }
    const data = value.subarray(offset, total);
    const unmaskedPreamble = data[0] & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TYPE_MASK"];
    if (preambleUnMask[`${unmaskedPreamble}`] === 'general') {
        // NOTE: GeneralExtrinsic needs to have the full data to validate the preamble and version
        return newFromValue(registry, value, data[0], preambleUnMask[`${unmaskedPreamble}`] || preamble);
    } else {
        return newFromValue(registry, data.subarray(1), data[0], preambleUnMask[`${unmaskedPreamble}`] || preamble);
    }
}
class ExtrinsicBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$abstract$2f$Base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractBase"] {
    __internal__preamble;
    constructor(registry, value, initialU8aLength, preamble){
        super(registry, value, initialU8aLength);
        const signKeys = Object.keys(registry.getSignedExtensionTypes());
        if (this.version === 5 && preamble !== 'general') {
            const getter = (key)=>this.inner.signature[key];
            // This is on the abstract class, ensuring that hasOwnProperty operates
            // correctly, i.e. it needs to be on the base class exposing it
            for(let i = 0, count = signKeys.length; i < count; i++){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectProperty"])(this, signKeys[i], getter);
            }
        }
        const unmaskedPreamble = this.type & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TYPE_MASK"];
        this.__internal__preamble = preamble || preambleUnMask[`${unmaskedPreamble}`];
    }
    isGeneral() {
        return this.__internal__preamble === 'general';
    }
    /**
     * @description The arguments passed to for the call, exposes args so it is compatible with [[Call]]
     */ get args() {
        return this.method.args;
    }
    /**
     * @description The argument definitions, compatible with [[Call]]
     */ get argsDef() {
        return this.method.argsDef;
    }
    /**
     * @description The actual `[sectionIndex, methodIndex]` as used in the Call
     */ get callIndex() {
        return this.method.callIndex;
    }
    /**
     * @description The actual data for the Call
     */ get data() {
        return this.method.data;
    }
    /**
     * @description The era for this extrinsic
     */ get era() {
        return this.isGeneral() ? this.inner.era : this.inner.signature.era;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */ get encodedLength() {
        return this.toU8a().length;
    }
    /**
     * @description `true` id the extrinsic is signed
     */ get isSigned() {
        return this.isGeneral() ? false : this.inner.signature.isSigned;
    }
    /**
     * @description The length of the actual data, excluding prefix
     */ get length() {
        return this.toU8a(true).length;
    }
    /**
     * @description The [[FunctionMetadataLatest]] that describes the extrinsic
     */ get meta() {
        return this.method.meta;
    }
    /**
     * @description The [[Call]] this extrinsic wraps
     */ get method() {
        return this.inner.method;
    }
    /**
     * @description The nonce for this extrinsic
     */ get nonce() {
        return this.isGeneral() ? this.inner.nonce : this.inner.signature.nonce;
    }
    /**
     * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
     */ get signature() {
        if (this.isGeneral()) {
            throw new Error('Extrinsic: GeneralExtrinsic does not have signature implemented');
        }
        return this.inner.signature.signature;
    }
    /**
     * @description The [[Address]] that signed
     */ get signer() {
        if (this.isGeneral()) {
            throw new Error('Extrinsic: GeneralExtrinsic does not have signer implemented');
        }
        return this.inner.signature.signer;
    }
    /**
     * @description Forwards compat
     */ get tip() {
        return this.isGeneral() ? this.inner.tip : this.inner.signature.tip;
    }
    /**
     * @description Forward compat
     */ get assetId() {
        return this.isGeneral() ? this.inner.assetId : this.inner.signature.assetId;
    }
    /**
     * @description Forward compat
     */ get metadataHash() {
        return this.isGeneral() ? this.inner.metadataHash : this.inner.signature.metadataHash;
    }
    /**
     * @description Forward compat
     */ get mode() {
        return this.isGeneral() ? this.inner.mode : this.inner.signature.mode;
    }
    /**
     * @description Returns the raw transaction version (not flagged with signing information)
    */ get type() {
        return this.inner.version;
    }
    get inner() {
        return this.unwrap();
    }
    /**
     * @description Returns the encoded version flag
    */ get version() {
        if (this.type <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LOWEST_SUPPORTED_EXTRINSIC_FORMAT_VERSION"]) {
            return this.type | (this.isSigned ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BIT_SIGNED"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BIT_UNSIGNED"]);
        } else {
            return this.type | (this.isSigned ? PreambleMask.signed : this.isGeneral() ? PreambleMask.general : PreambleMask.bare);
        }
    }
    /**
     * @description Checks if the source matches this in type
     */ is(other) {
        return this.method.is(other);
    }
    unwrap() {
        return super.unwrap();
    }
}
class GenericExtrinsic extends ExtrinsicBase {
    __internal__hashCache;
    static LATEST_EXTRINSIC_VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LATEST_EXTRINSIC_VERSION"];
    constructor(registry, value, { preamble, version } = {}){
        super(registry, decodeExtrinsic(registry, value, version || registry.metadata.extrinsic.version?.toNumber(), preamble), undefined, preamble);
    }
    /**
     * @description returns a hash of the contents
     */ get hash() {
        if (!this.__internal__hashCache) {
            this.__internal__hashCache = super.hash;
        }
        return this.__internal__hashCache;
    }
    /**
     * @description Injects an already-generated signature into the extrinsic
     */ addSignature(signer, signature, payload) {
        this.inner.addSignature(signer, signature, payload);
        this.__internal__hashCache = undefined;
        return this;
    }
    /**
     * @description Returns a breakdown of the hex encoding for this Codec
     */ inspect() {
        const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$concat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aConcat"])(...this.toU8aInner());
        return {
            inner: this.isSigned ? this.inner.inspect().inner : this.inner.method.inspect().inner,
            outer: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$compact$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compactToU8a"])(encoded.length),
                new Uint8Array([
                    this.version
                ])
            ]
        };
    }
    /**
     * @description Sign the extrinsic with a specific keypair
     */ sign(account, options) {
        this.inner.sign(account, options);
        this.__internal__hashCache = undefined;
        return this;
    }
    /**
     * @describe Adds a fake signature to the extrinsic
     */ signFake(signer, options) {
        this.inner.signFake(signer, options);
        this.__internal__hashCache = undefined;
        return this;
    }
    /**
     * @description Returns a hex string representation of the value
     */ toHex(isBare) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToHex"])(this.toU8a(isBare));
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */ toHuman(isExpanded, disableAscii) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])({}, {
            isSigned: this.isSigned,
            method: this.method.toHuman(isExpanded, disableAscii)
        }, this.isSigned ? {
            assetId: this.assetId ? this.assetId.toHuman(isExpanded, disableAscii) : null,
            era: this.era.toHuman(isExpanded, disableAscii),
            metadataHash: this.metadataHash ? this.metadataHash.toHex() : null,
            mode: this.mode ? this.mode.toHuman() : null,
            nonce: this.nonce.toHuman(isExpanded, disableAscii),
            signature: this.signature.toHex(),
            signer: this.signer.toHuman(isExpanded, disableAscii),
            tip: this.tip.toHuman(isExpanded, disableAscii)
        } : null);
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */ toJSON() {
        return this.toHex();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */ toRawType() {
        return 'Extrinsic';
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value is not length-prefixed
     */ toU8a(isBare) {
        const encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$concat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aConcat"])(...this.toU8aInner());
        return isBare ? encoded : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$compact$2f$addLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compactAddLength"])(encoded);
    }
    toU8aInner() {
        // we do not apply bare to the internal values, rather this only determines out length addition,
        // where we strip all lengths this creates an extrinsic that cannot be decoded
        return [
            new Uint8Array([
                this.version
            ]),
            this.inner.toU8a()
        ];
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/ExtrinsicEra.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsicEra": (()=>GenericExtrinsicEra),
    "ImmortalEra": (()=>ImmortalEra),
    "MortalEra": (()=>MortalEra)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Raw$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Raw.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/primitive/U64.js [app-route] (ecmascript) <export u64 as U64>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$format$2f$formatNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/format/formatNumber.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$bn$2f$toBn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/bn/toBn.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$base$2f$Tuple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/base/Tuple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$base$2f$Enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/base/Enum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/u8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$hex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/hex.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/toU8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toBn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/toBn.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$hex$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/hex/toU8a.js [app-route] (ecmascript)");
;
;
;
function getTrailingZeros(period) {
    const binary = period.toString(2);
    let index = 0;
    while(binary[binary.length - 1 - index] === '0'){
        index++;
    }
    return index;
}
/** @internal */ function decodeMortalEra(registry, value) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isU8a"])(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$hex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isHex"])(value) || Array.isArray(value)) {
        return decodeMortalU8a(registry, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToU8a"])(value));
    } else if (!value) {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__["U64"](registry),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__["U64"](registry)
        ];
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(value)) {
        return decodeMortalObject(registry, value);
    }
    throw new Error('Invalid data passed to Mortal era');
}
/** @internal */ function decodeMortalObject(registry, value) {
    const { current, period } = value;
    let calPeriod = Math.pow(2, Math.ceil(Math.log2(period)));
    calPeriod = Math.min(Math.max(calPeriod, 4), 1 << 16);
    const phase = current % calPeriod;
    const quantizeFactor = Math.max(calPeriod >> 12, 1);
    const quantizedPhase = phase / quantizeFactor * quantizeFactor;
    return [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__["U64"](registry, calPeriod),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__["U64"](registry, quantizedPhase)
    ];
}
/** @internal */ function decodeMortalU8a(registry, value) {
    if (value.length === 0) {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__["U64"](registry),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__["U64"](registry)
        ];
    }
    const first = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toBn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToBn"])(value.subarray(0, 1)).toNumber();
    const second = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toBn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToBn"])(value.subarray(1, 2)).toNumber();
    const encoded = first + (second << 8);
    const period = 2 << encoded % (1 << 4);
    const quantizeFactor = Math.max(period >> 12, 1);
    const phase = (encoded >> 4) * quantizeFactor;
    if (period < 4 || phase >= period) {
        throw new Error('Invalid data passed to Mortal era');
    }
    return [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__["U64"](registry, period),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__["U64"](registry, phase)
    ];
}
/** @internal */ function decodeExtrinsicEra(value = new Uint8Array()) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isU8a"])(value)) {
        return !value.length || value[0] === 0 ? new Uint8Array([
            0
        ]) : new Uint8Array([
            1,
            value[0],
            value[1]
        ]);
    } else if (!value) {
        return new Uint8Array([
            0
        ]);
    } else if (value instanceof GenericExtrinsicEra) {
        return decodeExtrinsicEra(value.toU8a());
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$hex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isHex"])(value)) {
        return decodeExtrinsicEra((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$hex$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hexToU8a"])(value));
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(value)) {
        const entries = Object.entries(value).map(([k, v])=>[
                k.toLowerCase(),
                v
            ]);
        const mortal = entries.find(([k])=>k.toLowerCase() === 'mortalera');
        const immortal = entries.find(([k])=>k.toLowerCase() === 'immortalera');
        // this is to de-serialize from JSON
        return mortal ? {
            MortalEra: mortal[1]
        } : immortal ? {
            ImmortalEra: immortal[1]
        } : {
            MortalEra: value
        };
    }
    throw new Error('Invalid data passed to Era');
}
class ImmortalEra extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Raw$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Raw"] {
    constructor(registry, _value){
        // For immortals, we always provide the known value (i.e. treated as a
        // constant no matter how it is constructed - it is a fixed structure)
        super(registry, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IMMORTAL_ERA"]);
    }
}
class MortalEra extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$base$2f$Tuple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tuple"] {
    constructor(registry, value){
        super(registry, {
            period: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__["U64"],
            phase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$primitive$2f$U64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u64__as__U64$3e$__["U64"]
        }, decodeMortalEra(registry, value));
    }
    /**
     * @description Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`
     */ get encodedLength() {
        return 2 | 0;
    }
    /**
     * @description The period of this Mortal wraps as a [[U64]]
     */ get period() {
        return this[0];
    }
    /**
     * @description The phase of this Mortal wraps as a [[U64]]
     */ get phase() {
        return this[1];
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */ toHuman() {
        return {
            period: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$format$2f$formatNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(this.period),
            phase: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$format$2f$formatNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNumber"])(this.phase)
        };
    }
    /**
     * @description Returns a JSON representation of the actual value
     */ toJSON() {
        return this.toHex();
    }
    /**
     * @description Encodes the value as a Uint8Array as per the parity-codec specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     * Period and phase are encoded:
     *   - The period of validity from the block hash found in the signing material.
     *   - The phase in the period that this transaction's lifetime begins (and, importantly,
     *     implies which block hash is included in the signature material). If the `period` is
     *     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that
     *     `period` is.
     */ toU8a(_isBare) {
        const period = this.period.toNumber();
        const encoded = Math.min(15, Math.max(1, getTrailingZeros(period) - 1)) + (this.phase.toNumber() / Math.max(period >> 12, 1) << 4);
        return new Uint8Array([
            encoded & 0xff,
            encoded >> 8
        ]);
    }
    /**
     * @description Get the block number of the start of the era whose properties this object describes that `current` belongs to.
     */ birth(current) {
        const phase = this.phase.toNumber();
        const period = this.period.toNumber();
        // FIXME No toNumber() here
        return ~~((Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$bn$2f$toBn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bnToBn"])(current).toNumber(), phase) - phase) / period) * period + phase;
    }
    /**
     * @description Get the block number of the first block at which the era has ended.
     */ death(current) {
        // FIXME No toNumber() here
        return this.birth(current) + this.period.toNumber();
    }
}
class GenericExtrinsicEra extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$base$2f$Enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Enum"] {
    constructor(registry, value){
        super(registry, {
            ImmortalEra,
            MortalEra
        }, decodeExtrinsicEra(value));
    }
    /**
     * @description Override the encoded length method
     */ get encodedLength() {
        return this.isImmortalEra ? this.asImmortalEra.encodedLength : this.asMortalEra.encodedLength;
    }
    /**
     * @description Returns the item as a [[ImmortalEra]]
     */ get asImmortalEra() {
        if (!this.isImmortalEra) {
            throw new Error(`Cannot convert '${this.type}' via asImmortalEra`);
        }
        return this.inner;
    }
    /**
     * @description Returns the item as a [[MortalEra]]
     */ get asMortalEra() {
        if (!this.isMortalEra) {
            throw new Error(`Cannot convert '${this.type}' via asMortalEra`);
        }
        return this.inner;
    }
    /**
     * @description `true` if Immortal
     */ get isImmortalEra() {
        return this.index === 0;
    }
    /**
     * @description `true` if Mortal
     */ get isMortalEra() {
        return this.index > 0;
    }
    /**
     * @description Encodes the value as a Uint8Array as per the parity-codec specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */ toU8a(isBare) {
        return this.isMortalEra ? this.asMortalEra.toU8a(isBare) : this.asImmortalEra.toU8a(isBare);
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/ExtrinsicPayload.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsicPayload": (()=>GenericExtrinsicPayload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/toHex.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$abstract$2f$Base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/abstract/Base.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$hex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/hex.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$hex$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/hex/toU8a.js [app-route] (ecmascript)");
;
;
;
const VERSIONS = [
    'ExtrinsicPayloadUnknown',
    'ExtrinsicPayloadUnknown',
    'ExtrinsicPayloadUnknown',
    'ExtrinsicPayloadUnknown',
    'ExtrinsicPayloadV4',
    'ExtrinsicPayloadV5'
];
const PREAMBLES = {
    bare: 'ExtrinsicPayloadV5',
    // Not supported yet
    general: 'ExtrinsicPayloadV5',
    signed: 'ExtrinsicPayloadV5'
};
/** @internal */ function decodeExtrinsicPayload(registry, value, version = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LATEST_EXTRINSIC_VERSION"], preamble = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_PREAMBLE"]) {
    if (value instanceof GenericExtrinsicPayload) {
        return value.unwrap();
    }
    const extVersion = version === 5 ? PREAMBLES[preamble] : VERSIONS[version] || VERSIONS[0];
    /**
     * HACK: In order to change the assetId from `number | object` to HexString (While maintaining the true type ie Option<TAssetConversion>),
     * to allow for easier generalization of the SignerPayloadJSON interface the below check is necessary. The ExtrinsicPayloadV4 class does not like
     * a value passed in as an Option, and can't decode it properly. Therefore, we ensure to convert the following below, and then pass the option as a unwrapped
     * JSON value.
     *
     * ref: https://github.com/polkadot-js/api/pull/5968
     * ref: https://github.com/polkadot-js/api/pull/5967
     */ if (value && value.assetId && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$hex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isHex"])(value.assetId)) {
        const adjustedPayload = {
            ...value,
            assetId: registry.createType('TAssetConversion', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$hex$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hexToU8a"])(value.assetId)).toJSON()
        };
        return registry.createTypeUnsafe(extVersion, [
            adjustedPayload,
            {
                version
            }
        ]);
    }
    return registry.createTypeUnsafe(extVersion, [
        value,
        {
            version
        }
    ]);
}
class GenericExtrinsicPayload extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$abstract$2f$Base$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AbstractBase"] {
    constructor(registry, value, { preamble, version } = {}){
        super(registry, decodeExtrinsicPayload(registry, value, version, preamble));
    }
    /**
     * @description The block [[BlockHash]] the signature applies to (mortal/immortal)
     */ get blockHash() {
        return this.inner.blockHash;
    }
    /**
     * @description The [[ExtrinsicEra]]
     */ get era() {
        return this.inner.era;
    }
    /**
     * @description The genesis block [[BlockHash]] the signature applies to
     */ get genesisHash() {
        // NOTE only v3+
        return this.inner.genesisHash || this.registry.createTypeUnsafe('Hash', []);
    }
    /**
     * @description The [[Bytes]] contained in the payload
     */ get method() {
        return this.inner.method;
    }
    /**
     * @description The [[Index]]
     */ get nonce() {
        return this.inner.nonce;
    }
    /**
     * @description The specVersion as a [[u32]] for this payload
     */ get specVersion() {
        // NOTE only v3+
        return this.inner.specVersion || this.registry.createTypeUnsafe('u32', []);
    }
    /**
     * @description The [[Balance]]
     */ get tip() {
        // NOTE from v2+
        return this.inner.tip || this.registry.createTypeUnsafe('Compact<Balance>', []);
    }
    /**
     * @description The transaction version as a [[u32]] for this payload
     */ get transactionVersion() {
        // NOTE only v4+
        return this.inner.transactionVersion || this.registry.createTypeUnsafe('u32', []);
    }
    /**
     * @description The (optional) asset id as a [[u32]] or [[MultiLocation]] for this payload
     */ get assetId() {
        return this.inner.assetId;
    }
    /**
     * @description The (optional) [[Hash]] of the genesis metadata for this payload
     */ get metadataHash() {
        return this.inner.metadataHash;
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */ eq(other) {
        return this.inner.eq(other);
    }
    /**
     * @description Sign the payload with the keypair
     */ sign(signerPair) {
        const signature = this.inner.sign(signerPair);
        // This is extensible, so we could quite readily extend to send back extra
        // information, such as for instance the payload, i.e. `payload: this.toHex()`
        // For the case here we sign via the extrinsic, we ignore the return, so generally
        // this is applicable for external signing
        return {
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToHex"])(signature)
        };
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */ toHuman(isExtended, disableAscii) {
        return this.inner.toHuman(isExtended, disableAscii);
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */ toJSON() {
        return this.toHex();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */ toRawType() {
        return 'ExtrinsicPayload';
    }
    /**
     * @description Returns the string representation of the value
     */ toString() {
        return this.toHex();
    }
    /**
     * @description Returns a serialized u8a form
     */ toU8a(isBare) {
        // call our parent, with only the method stripped
        return super.toU8a(isBare ? {
            method: true
        } : false);
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/ExtrinsicPayloadUnknown.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsicPayloadUnknown": (()=>GenericExtrinsicPayloadUnknown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Struct.js [app-route] (ecmascript)");
;
class GenericExtrinsicPayloadUnknown extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Struct"] {
    constructor(registry, _value, { version = 0 } = {}){
        super(registry, {});
        throw new Error(`Unsupported extrinsic payload version ${version}`);
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/ExtrinsicUnknown.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsicUnknown": (()=>GenericExtrinsicUnknown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Struct.js [app-route] (ecmascript)");
;
;
class GenericExtrinsicUnknown extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Struct"] {
    constructor(registry, _value, { isSigned = false, version = 0 } = {}){
        super(registry, {});
        throw new Error(`Unsupported ${isSigned ? '' : 'un'}signed extrinsic version ${version & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UNMASK_VERSION"]}`);
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/SignerPayload.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericSignerPayload": (()=>GenericSignerPayload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/spread.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/property.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$base$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/base/Option.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/toHex.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Struct.js [app-route] (ecmascript)");
;
;
const knownTypes = {
    address: 'Address',
    assetId: 'Option<TAssetConversion>',
    blockHash: 'Hash',
    blockNumber: 'BlockNumber',
    era: 'ExtrinsicEra',
    genesisHash: 'Hash',
    metadataHash: 'Option<[u8;32]>',
    method: 'Call',
    mode: 'u8',
    nonce: 'Compact<Index>',
    runtimeVersion: 'RuntimeVersion',
    signedExtensions: 'Vec<Text>',
    tip: 'Compact<Balance>',
    version: 'u8'
};
class GenericSignerPayload extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Struct"] {
    __internal__extraTypes;
    constructor(registry, value){
        const extensionTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])({}, registry.getSignedExtensionTypes(), registry.getSignedExtensionExtra());
        super(registry, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])({}, extensionTypes, knownTypes, {
            withSignedTransaction: 'bool'
        }), value);
        this.__internal__extraTypes = {};
        const getter = (key)=>this.get(key);
        // add all extras that are not in the base types
        for (const [key, type] of Object.entries(extensionTypes)){
            if (!knownTypes[key]) {
                this.__internal__extraTypes[key] = type;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectProperty"])(this, key, getter);
        }
    }
    get address() {
        return this.getT('address');
    }
    get blockHash() {
        return this.getT('blockHash');
    }
    get blockNumber() {
        return this.getT('blockNumber');
    }
    get era() {
        return this.getT('era');
    }
    get genesisHash() {
        return this.getT('genesisHash');
    }
    get method() {
        return this.getT('method');
    }
    get nonce() {
        return this.getT('nonce');
    }
    get runtimeVersion() {
        return this.getT('runtimeVersion');
    }
    get signedExtensions() {
        return this.getT('signedExtensions');
    }
    get tip() {
        return this.getT('tip');
    }
    get assetId() {
        return this.getT('assetId');
    }
    get version() {
        return this.getT('version');
    }
    get mode() {
        return this.getT('mode');
    }
    get metadataHash() {
        return this.getT('metadataHash');
    }
    get withSignedTransaction() {
        const val = this.getT('withSignedTransaction');
        return val.isTrue;
    }
    /**
     * @description Creates an representation of the structure as an ISignerPayload JSON
     */ toPayload() {
        const result = {};
        const keys = Object.keys(this.__internal__extraTypes);
        // add any explicit overrides we may have
        for(let i = 0, count = keys.length; i < count; i++){
            const key = keys[i];
            const value = this.getT(key);
            // Don't include Option.isNone
            if (!(value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$base$2f$Option$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Option"]) || value.isSome) {
                // NOTE In the spread below we convert (mostly) to Hex to align
                // with the typings. In the case of "unknown" fields, we use the
                // primitive toJSON conversion (which is serializable). Technically
                // we can include isNone in here as well ("null" is allowed), however
                // for empty fields we just skip it completely (historical compat)
                result[key] = value.toJSON();
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])(result, {
            // the known defaults as managed explicitly and has different
            // formatting in cases, e.g. we mostly expose a hex format here
            address: this.address.toString(),
            assetId: this.assetId && this.assetId.isSome ? this.assetId.toHex() : null,
            blockHash: this.blockHash.toHex(),
            blockNumber: this.blockNumber.toHex(),
            era: this.era.toHex(),
            genesisHash: this.genesisHash.toHex(),
            metadataHash: this.metadataHash.isSome ? this.metadataHash.toHex() : null,
            method: this.method.toHex(),
            mode: this.mode.toNumber(),
            nonce: this.nonce.toHex(),
            signedExtensions: this.signedExtensions.map((e)=>e.toString()),
            specVersion: this.runtimeVersion.specVersion.toHex(),
            tip: this.tip.toHex(),
            transactionVersion: this.runtimeVersion.transactionVersion.toHex(),
            version: this.version.toNumber(),
            withSignedTransaction: this.withSignedTransaction
        });
    }
    /**
     * @description Creates a representation of the payload in raw Exrinsic form
     */ toRaw() {
        const payload = this.toPayload();
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToHex"])(this.registry.createTypeUnsafe('ExtrinsicPayload', [
            payload,
            {
                version: payload.version
            }
        ])// NOTE Explicitly pass the bare flag so the method is encoded un-prefixed (non-decodable, for signing only)
        .toU8a({
            method: true
        }));
        return {
            address: payload.address,
            data,
            type: 'payload'
        };
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/index.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/util.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sign": (()=>sign),
    "signGeneral": (()=>signGeneral),
    "signV5": (()=>signV5)
});
function sign(registry, signerPair, u8a, options) {
    const encoded = u8a.length > 256 ? registry.hash(u8a) : u8a;
    return signerPair.sign(encoded, options);
}
function signV5(registry, signerPair, u8a, options) {
    const encoded = registry.hash(u8a);
    return signerPair.sign(encoded, options);
}
function signGeneral(registry, u8a) {
    const encoded = registry.hash(u8a);
    return encoded;
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/ExtrinsicPayload.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsicPayloadV4": (()=>GenericExtrinsicPayloadV4)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/spread.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$base$2f$Enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/base/Enum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Struct.js [app-route] (ecmascript)");
;
;
;
class GenericExtrinsicPayloadV4 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Struct"] {
    __internal__signOptions;
    constructor(registry, value){
        super(registry, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])({
            method: 'Bytes'
        }, registry.getSignedExtensionTypes(), registry.getSignedExtensionExtra()), value);
        // Do detection for the type of extrinsic, in the case of MultiSignature
        // this is an enum, in the case of AnySignature, this is a Hash only
        // (which may be 64 or 65 bytes)
        this.__internal__signOptions = {
            withType: registry.createTypeUnsafe('ExtrinsicSignature', []) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$base$2f$Enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Enum"]
        };
    }
    /**
     * @description Returns a breakdown of the hex encoding for this Codec
     */ inspect() {
        return super.inspect({
            method: true
        });
    }
    /**
     * @description The block [[BlockHash]] the signature applies to (mortal/immortal)
     */ get blockHash() {
        return this.getT('blockHash');
    }
    /**
     * @description The [[ExtrinsicEra]]
     */ get era() {
        return this.getT('era');
    }
    /**
     * @description The genesis [[BlockHash]] the signature applies to (mortal/immortal)
     */ get genesisHash() {
        return this.getT('genesisHash');
    }
    /**
     * @description The [[Bytes]] contained in the payload
     */ get method() {
        return this.getT('method');
    }
    /**
     * @description The [[Index]]
     */ get nonce() {
        return this.getT('nonce');
    }
    /**
     * @description The specVersion for this signature
     */ get specVersion() {
        return this.getT('specVersion');
    }
    /**
     * @description The tip [[Balance]]
     */ get tip() {
        return this.getT('tip');
    }
    /**
     * @description The transactionVersion for this signature
     */ get transactionVersion() {
        return this.getT('transactionVersion');
    }
    /**
     * @description The (optional) asset id for this signature for chains that support transaction fees in assets
     */ get assetId() {
        return this.getT('assetId');
    }
    /**
     * @description The (optional) asset id for this signature for chains that support transaction fees in assets
     */ get metadataHash() {
        return this.getT('metadataHash');
    }
    /**
     * @description Sign the payload with the keypair
     */ sign(signerPair) {
        // NOTE The `toU8a({ method: true })` argument is absolutely critical, we
        // don't want the method (Bytes) to have the length prefix included. This
        // means that the data-as-signed is un-decodable, but is also doesn't need
        // the extra information, only the pure data (and is not decoded) ...
        // The same applies to V1..V3, if we have a V5, carry this comment
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sign"])(this.registry, signerPair, this.toU8a({
            method: true
        }), this.__internal__signOptions);
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/ExtrinsicSignature.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsicSignatureV4": (()=>GenericExtrinsicSignatureV4)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/spread.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/property.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$undefined$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/undefined.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/ExtrinsicPayload.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/stringify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Struct.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/u8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/toHex.js [app-route] (ecmascript)");
;
;
;
;
const FAKE_SIGNATURE = new Uint8Array(256).fill(1);
function toAddress(registry, address) {
    return registry.createTypeUnsafe('Address', [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isU8a"])(address) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToHex"])(address) : address
    ]);
}
class GenericExtrinsicSignatureV4 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Struct"] {
    __internal__signKeys;
    constructor(registry, value, { isSigned } = {}){
        const signTypes = registry.getSignedExtensionTypes();
        super(registry, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])(// eslint-disable-next-line sort-keys
        {
            signer: 'Address',
            signature: 'ExtrinsicSignature'
        }, signTypes), GenericExtrinsicSignatureV4.decodeExtrinsicSignature(value, isSigned));
        this.__internal__signKeys = Object.keys(signTypes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectProperties"])(this, this.__internal__signKeys, (k)=>this.get(k));
    }
    /** @internal */ static decodeExtrinsicSignature(value, isSigned = false) {
        if (!value) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EMPTY_U8A"];
        } else if (value instanceof GenericExtrinsicSignatureV4) {
            return value;
        }
        return isSigned ? value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EMPTY_U8A"];
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */ get encodedLength() {
        return this.isSigned ? super.encodedLength : 0;
    }
    /**
     * @description `true` if the signature is valid
     */ get isSigned() {
        return !this.signature.isEmpty;
    }
    /**
     * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
     */ get era() {
        return this.getT('era');
    }
    /**
     * @description The [[Index]] for the signature
     */ get nonce() {
        return this.getT('nonce');
    }
    /**
     * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
     */ get signature() {
        // the second case here is when we don't have an enum signature, treat as raw
        return this.multiSignature.value || this.multiSignature;
    }
    /**
     * @description The raw [[ExtrinsicSignature]]
     */ get multiSignature() {
        return this.getT('signature');
    }
    /**
     * @description The [[Address]] that signed
     */ get signer() {
        return this.getT('signer');
    }
    /**
     * @description The [[Balance]] tip
     */ get tip() {
        return this.getT('tip');
    }
    /**
     * @description The [[u32]] or [[MultiLocation]] assetId
     */ get assetId() {
        return this.getT('assetId');
    }
    /**
     * @description the [[u32]] mode
     */ get mode() {
        return this.getT('mode');
    }
    /**
     * @description The [[Hash]] for the metadata
     */ get metadataHash() {
        return this.getT('metadataHash');
    }
    _injectSignature(signer, signature, payload) {
        // use the fields exposed to guide the getters
        for(let i = 0, count = this.__internal__signKeys.length; i < count; i++){
            const k = this.__internal__signKeys[i];
            const v = payload.get(k);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$undefined$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUndefined"])(v)) {
                this.set(k, v);
            }
        }
        // additional fields (exposed in struct itself)
        this.set('signer', signer);
        this.set('signature', signature);
        return this;
    }
    /**
     * @description Adds a raw signature
     */ addSignature(signer, signature, payload) {
        return this._injectSignature(toAddress(this.registry, signer), this.registry.createTypeUnsafe('ExtrinsicSignature', [
            signature
        ]), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicPayloadV4"](this.registry, payload));
    }
    /**
     * @description Creates a payload from the supplied options
     */ createPayload(method, options) {
        const { era, runtimeVersion: { specVersion, transactionVersion } } = options;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicPayloadV4"](this.registry, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])({}, options, {
            era: era || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IMMORTAL_ERA"],
            method: method.toHex(),
            specVersion,
            transactionVersion
        }));
    }
    /**
     * @description Generate a payload and applies the signature from a keypair
     */ sign(method, account, options) {
        if (!account?.addressRaw) {
            throw new Error(`Expected a valid keypair for signing, found ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringify"])(account)}`);
        }
        const payload = this.createPayload(method, options);
        return this._injectSignature(toAddress(this.registry, account.addressRaw), this.registry.createTypeUnsafe('ExtrinsicSignature', [
            payload.sign(account)
        ]), payload);
    }
    /**
     * @description Generate a payload and applies a fake signature
     */ signFake(method, address, options) {
        if (!address) {
            throw new Error(`Expected a valid address for signing, found ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringify"])(address)}`);
        }
        const payload = this.createPayload(method, options);
        return this._injectSignature(toAddress(this.registry, address), this.registry.createTypeUnsafe('ExtrinsicSignature', [
            FAKE_SIGNATURE
        ]), payload);
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */ toU8a(isBare) {
        return this.isSigned ? super.toU8a(isBare) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EMPTY_U8A"];
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/Extrinsic.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EXTRINSIC_VERSION": (()=>EXTRINSIC_VERSION),
    "GenericExtrinsicV4": (()=>GenericExtrinsicV4)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/u8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Struct.js [app-route] (ecmascript)");
;
;
const EXTRINSIC_VERSION = 4;
class GenericExtrinsicV4 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Struct"] {
    constructor(registry, value, { isSigned } = {}){
        super(registry, {
            signature: 'ExtrinsicSignatureV4',
            // eslint-disable-next-line sort-keys
            method: 'Call'
        }, GenericExtrinsicV4.decodeExtrinsic(registry, value, isSigned));
    }
    /** @internal */ static decodeExtrinsic(registry, value, isSigned = false) {
        if (value instanceof GenericExtrinsicV4) {
            return value;
        } else if (value instanceof registry.createClassUnsafe('Call')) {
            return {
                method: value
            };
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isU8a"])(value)) {
            // here we decode manually since we need to pull through the version information
            const signature = registry.createTypeUnsafe('ExtrinsicSignatureV4', [
                value,
                {
                    isSigned
                }
            ]);
            const method = registry.createTypeUnsafe('Call', [
                value.subarray(signature.encodedLength)
            ]);
            return {
                method,
                signature
            };
        }
        return value || {};
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */ get encodedLength() {
        return this.toU8a().length;
    }
    /**
     * @description The [[Call]] this extrinsic wraps
     */ get method() {
        return this.getT('method');
    }
    /**
     * @description The [[ExtrinsicSignatureV4]]
     */ get signature() {
        return this.getT('signature');
    }
    /**
     * @description The version for the signature
     */ get version() {
        return EXTRINSIC_VERSION;
    }
    /**
     * @description Add an [[ExtrinsicSignatureV4]] to the extrinsic (already generated)
     */ addSignature(signer, signature, payload) {
        this.signature.addSignature(signer, signature, payload);
        return this;
    }
    /**
     * @description Sign the extrinsic with a specific keypair
     */ sign(account, options) {
        this.signature.sign(this.method, account, options);
        return this;
    }
    /**
     * @describe Adds a fake signature to the extrinsic
     */ signFake(signer, options) {
        this.signature.signFake(this.method, signer, options);
        return this;
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/index.js [app-route] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsicPayloadV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicPayloadV4"]),
    "GenericExtrinsicSignatureV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$ExtrinsicSignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicSignatureV4"]),
    "GenericExtrinsicV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$Extrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicV4"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/ExtrinsicPayload.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$ExtrinsicSignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/ExtrinsicSignature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$Extrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/Extrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsicPayloadV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicPayloadV4"]),
    "GenericExtrinsicSignatureV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicSignatureV4"]),
    "GenericExtrinsicV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicV4"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/index.js [app-route] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/index.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/GeneralExtrinsic.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GeneralExtrinsic": (()=>GeneralExtrinsic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/spread.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/u8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$hex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/hex.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/toU8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/toHex.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$compact$2f$addLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/compact/addLength.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$concat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/concat.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Struct.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$compact$2f$fromU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/compact/fromU8a.js [app-route] (ecmascript)");
;
;
;
function decodeU8a(u8a) {
    if (!u8a.length) {
        return new Uint8Array();
    }
    const [offset, length] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$compact$2f$fromU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compactFromU8a"])(u8a);
    const total = offset + length.toNumber();
    if (total > u8a.length) {
        throw new Error(`Extrinsic: length less than remainder, expected at least ${total}, found ${u8a.length}`);
    }
    const data = u8a.subarray(offset, total);
    // 69 denotes 0b01000101 which is the version and preamble for this Extrinsic
    if (data[0] !== 69) {
        throw new Error(`Extrinsic: incorrect version for General Transactions, expected 5, found ${data[0] & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UNMASK_VERSION"]}`);
    }
    return data.subarray(1);
}
class GeneralExtrinsic extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Struct"] {
    __internal__version;
    __internal__preamble;
    constructor(registry, value, opt){
        const extTypes = registry.getSignedExtensionTypes();
        super(registry, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])({
            transactionExtensionVersion: 'u8'
        }, extTypes, {
            method: 'Call'
        }), GeneralExtrinsic.decodeExtrinsic(registry, value));
        this.__internal__version = opt?.version || 0b00000101;
        this.__internal__preamble = 0b01000000;
    }
    static decodeExtrinsic(registry, value) {
        if (!value) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EMPTY_U8A"];
        } else if (value instanceof GeneralExtrinsic) {
            return value;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isU8a"])(value) || Array.isArray(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$hex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isHex"])(value)) {
            return decodeU8a((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toU8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToU8a"])(value));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(value)) {
            const { payload, transactionExtensionVersion } = value;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])(payload || {}, {
                transactionExtensionVersion: transactionExtensionVersion || registry.getTransactionExtensionVersion()
            });
        }
        return {};
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */ get encodedLength() {
        return super.encodedLength;
    }
    /**
     * @description The [[ExtrinsicEra]]
     */ get era() {
        return this.getT('era');
    }
    /**
     * @description The [[Index]]
     */ get nonce() {
        return this.getT('nonce');
    }
    /**
     * @description The tip [[Balance]]
     */ get tip() {
        return this.getT('tip');
    }
    /**
     * @description The (optional) asset id for this signature for chains that support transaction fees in assets
     */ get assetId() {
        return this.getT('assetId');
    }
    /**
     * @description The mode used for the CheckMetadataHash TransactionExtension
     */ get mode() {
        return this.getT('mode');
    }
    /**
     * @description The (optional) [[Hash]] for the metadata proof
     */ get metadataHash() {
        return this.getT('metadataHash');
    }
    /**
     * @description The version of the TransactionExtensions used in this extrinsic
     */ get transactionExtensionVersion() {
        return this.getT('transactionExtensionVersion');
    }
    /**
     * @description The [[Call]] this extrinsic wraps
     */ get method() {
        return this.getT('method');
    }
    /**
     * @description The extrinsic's version
     */ get version() {
        return this.__internal__version;
    }
    /**
     * @description The [[Preamble]] for the extrinsic
     */ get preamble() {
        return this.__internal__preamble;
    }
    toHex(isBare) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToHex"])(this.toU8a(isBare));
    }
    toU8a(isBare) {
        return isBare ? this.encode() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$compact$2f$addLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compactAddLength"])(this.encode());
    }
    toRawType() {
        return 'GeneralExt';
    }
    /**
     *
     * @description Returns an encoded GeneralExtrinsic
     */ encode() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$concat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aConcat"])(new Uint8Array([
            this.version | this.preamble
        ]), super.toU8a());
    }
    signFake() {
        throw new Error('Extrinsic: Type GeneralExtrinsic does not have signFake implemented');
    }
    addSignature() {
        throw new Error('Extrinsic: Type GeneralExtrinsic does not have addSignature implemented');
    }
    sign() {
        throw new Error('Extrinsic: Type GeneralExtrinsic does not have sign implemented');
    }
    signature() {
        throw new Error('Extrinsic: Type GeneralExtrinsic does not have the signature getter');
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/ExtrinsicPayload.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsicPayloadV5": (()=>GenericExtrinsicPayloadV5)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/spread.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$base$2f$Enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/base/Enum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Struct.js [app-route] (ecmascript)");
;
;
;
class GenericExtrinsicPayloadV5 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Struct"] {
    __internal__signOptions;
    constructor(registry, value){
        super(registry, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])({
            method: 'Bytes'
        }, registry.getSignedExtensionTypes(), registry.getSignedExtensionExtra()), value);
        // Do detection for the type of extrinsic, in the case of MultiSignature
        // this is an enum, in the case of AnySignature, this is a Hash only
        // (which may be 64 or 65 bytes)
        this.__internal__signOptions = {
            withType: registry.createTypeUnsafe('ExtrinsicSignature', []) instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$base$2f$Enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Enum"]
        };
    }
    /**
     * @description Returns a breakdown of the hex encoding for this Codec
     */ inspect() {
        return super.inspect({
            method: true
        });
    }
    /**
     * @description The block [[BlockHash]] the signature applies to (mortal/immortal)
     */ get blockHash() {
        return this.getT('blockHash');
    }
    /**
     * @description The [[ExtrinsicEra]]
     */ get era() {
        return this.getT('era');
    }
    /**
     * @description The genesis [[BlockHash]] the signature applies to (mortal/immortal)
     */ get genesisHash() {
        return this.getT('genesisHash');
    }
    /**
     * @description The [[Bytes]] contained in the payload
     */ get method() {
        return this.getT('method');
    }
    /**
     * @description The [[Index]]
     */ get nonce() {
        return this.getT('nonce');
    }
    /**
     * @description The specVersion for this signature
     */ get specVersion() {
        return this.getT('specVersion');
    }
    /**
     * @description The tip [[Balance]]
     */ get tip() {
        return this.getT('tip');
    }
    /**
     * @description The transactionVersion for this signature
     */ get transactionVersion() {
        return this.getT('transactionVersion');
    }
    /**
     * @description The (optional) asset id for this signature for chains that support transaction fees in assets
     */ get assetId() {
        return this.getT('assetId');
    }
    /**
     * @description The (optional) metadataHash proof for the CheckMetadataHash TransactionExtension
     */ get metadataHash() {
        return this.getT('metadataHash');
    }
    /**
     * @description Sign the payload with the keypair
     */ sign(signerPair) {
        // NOTE The `toU8a({ method: true })` argument is absolutely critical, we
        // don't want the method (Bytes) to have the length prefix included. This
        // means that the data-as-signed is un-decodable, but is also doesn't need
        // the extra information, only the pure data (and is not decoded) ...
        // The same applies to V1..V3, if we have a V6, carry this comment
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signV5"])(this.registry, signerPair, this.toU8a({
            method: true
        }), this.__internal__signOptions);
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/ExtrinsicSignature.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GenericExtrinsicSignatureV5": (()=>GenericExtrinsicSignatureV5)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/spread.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/object/property.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$undefined$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/undefined.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/ExtrinsicPayload.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/stringify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Struct.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/u8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/u8a/toHex.js [app-route] (ecmascript)");
;
;
;
;
const FAKE_SIGNATURE = new Uint8Array(256).fill(1);
function toAddress(registry, address) {
    return registry.createTypeUnsafe('Address', [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isU8a"])(address) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$u8a$2f$toHex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u8aToHex"])(address) : address
    ]);
}
class GenericExtrinsicSignatureV5 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Struct"] {
    __internal__signKeys;
    __internal__transactionExtensionVersion;
    constructor(registry, value, { isSigned } = {}){
        const signTypes = registry.getSignedExtensionTypes();
        const signedVersion = registry.getTransactionExtensionVersion();
        super(registry, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])(// eslint-disable-next-line sort-keys
        {
            signer: 'Address',
            signature: 'ExtrinsicSignature',
            transactionExtensionVersion: 'u8'
        }, signTypes), GenericExtrinsicSignatureV5.decodeExtrinsicSignature(value, isSigned));
        this.__internal__transactionExtensionVersion = signedVersion;
        this.__internal__signKeys = Object.keys(signTypes);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$property$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectProperties"])(this, this.__internal__signKeys, (k)=>this.get(k));
    }
    /** @internal */ static decodeExtrinsicSignature(value, isSigned = false) {
        if (!value) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EMPTY_U8A"];
        } else if (value instanceof GenericExtrinsicSignatureV5) {
            return value;
        }
        return isSigned ? value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EMPTY_U8A"];
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */ get encodedLength() {
        return this.isSigned ? super.encodedLength : 0;
    }
    /**
     * @description `true` if the signature is valid
     */ get isSigned() {
        return !this.signature.isEmpty;
    }
    /**
     * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
     */ get era() {
        return this.getT('era');
    }
    /**
     * @description The [[Index]] for the signature
     */ get nonce() {
        return this.getT('nonce');
    }
    /**
     * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
     */ get signature() {
        // the second case here is when we don't have an enum signature, treat as raw
        return this.multiSignature.value || this.multiSignature;
    }
    /**
     * @description The raw [[ExtrinsicSignature]]
     */ get multiSignature() {
        return this.getT('signature');
    }
    /**
     * @description The [[Address]] that signed
     */ get signer() {
        return this.getT('signer');
    }
    /**
     * @description The [[Balance]] tip
     */ get tip() {
        return this.getT('tip');
    }
    /**
     * @description The [[u32]] or [[MultiLocation]] assetId
     */ get assetId() {
        return this.getT('assetId');
    }
    /**
     * @description the [[u32]] mode
     */ get mode() {
        return this.getT('mode');
    }
    /**
     * @description The (optional)  [[Hash]] for the metadata proof
     */ get metadataHash() {
        return this.getT('metadataHash');
    }
    /**
     * @description The [[u8]] for the TransactionExtension version
     */ get transactionExtensionVersion() {
        return this.getT('transactionExtensionVersion');
    }
    _injectSignature(signer, signature, payload) {
        // use the fields exposed to guide the getters
        for(let i = 0, count = this.__internal__signKeys.length; i < count; i++){
            const k = this.__internal__signKeys[i];
            const v = payload.get(k);
            if (k === 'transactionExtensionVersion') {
                this.set(k, this.registry.createType('u8', this.__internal__transactionExtensionVersion));
            } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$undefined$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isUndefined"])(v)) {
                this.set(k, v);
            }
        }
        // additional fields (exposed in struct itself)
        this.set('signer', signer);
        this.set('signature', signature);
        return this;
    }
    /**
     * @description Adds a raw signature
     */ addSignature(signer, signature, payload) {
        return this._injectSignature(toAddress(this.registry, signer), this.registry.createTypeUnsafe('ExtrinsicSignature', [
            signature
        ]), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicPayloadV5"](this.registry, payload));
    }
    /**
     * @description Creates a payload from the supplied options
     */ createPayload(method, options) {
        const { era, runtimeVersion: { specVersion, transactionVersion } } = options;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicPayloadV5"](this.registry, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$object$2f$spread$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["objectSpread"])({}, options, {
            era: era || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IMMORTAL_ERA"],
            method: method.toHex(),
            specVersion,
            transactionVersion
        }));
    }
    /**
     * @description Generate a payload and applies the signature from a keypair
     */ sign(method, account, options) {
        if (!account?.addressRaw) {
            throw new Error(`Expected a valid keypair for signing, found ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringify"])(account)}`);
        }
        const payload = this.createPayload(method, options);
        return this._injectSignature(toAddress(this.registry, account.addressRaw), this.registry.createTypeUnsafe('ExtrinsicSignature', [
            payload.sign(account)
        ]), payload);
    }
    /**
     * @description Generate a payload and applies a fake signature
     */ signFake(method, address, options) {
        if (!address) {
            throw new Error(`Expected a valid address for signing, found ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringify"])(address)}`);
        }
        const payload = this.createPayload(method, options);
        return this._injectSignature(toAddress(this.registry, address), this.registry.createTypeUnsafe('ExtrinsicSignature', [
            FAKE_SIGNATURE
        ]), payload);
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */ toU8a(isBare) {
        return this.isSigned ? super.toU8a(isBare) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EMPTY_U8A"];
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/Extrinsic.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EXTRINSIC_VERSION": (()=>EXTRINSIC_VERSION),
    "GenericExtrinsicV5": (()=>GenericExtrinsicV5)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+util@13.4.3/node_modules/@polkadot/util/is/u8a.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types-codec@14.3.1/node_modules/@polkadot/types-codec/native/Struct.js [app-route] (ecmascript)");
;
;
const EXTRINSIC_VERSION = 5;
class GenericExtrinsicV5 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$2d$codec$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2d$codec$2f$native$2f$Struct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Struct"] {
    constructor(registry, value, { isSigned } = {}){
        super(registry, {
            signature: 'ExtrinsicSignatureV5',
            // eslint-disable-next-line sort-keys
            method: 'Call'
        }, GenericExtrinsicV5.decodeExtrinsic(registry, value, isSigned));
    }
    /** @internal */ static decodeExtrinsic(registry, value, isSigned = false) {
        if (value instanceof GenericExtrinsicV5) {
            return value;
        } else if (value instanceof registry.createClassUnsafe('Call')) {
            return {
                method: value
            };
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$util$40$13$2e$4$2e$3$2f$node_modules$2f40$polkadot$2f$util$2f$is$2f$u8a$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isU8a"])(value)) {
            // here we decode manually since we need to pull through the version information
            const signature = registry.createTypeUnsafe('ExtrinsicSignatureV5', [
                value,
                {
                    isSigned
                }
            ]);
            // We add 2 here since the length of the TransactionExtension Version needs to be accounted for
            const method = registry.createTypeUnsafe('Call', [
                value.subarray(signature.encodedLength)
            ]);
            return {
                method,
                signature
            };
        }
        return value || {};
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */ get encodedLength() {
        return this.toU8a().length;
    }
    /**
     * @description The [[Call]] this extrinsic wraps
     */ get method() {
        return this.getT('method');
    }
    /**
     * @description The [[ExtrinsicSignatureV5]]
     */ get signature() {
        return this.getT('signature');
    }
    /**
     * @description The version for the signature
     */ get version() {
        return EXTRINSIC_VERSION;
    }
    /**
     * @description The [[Preamble]] for the extrinsic
     */ get preamble() {
        return this.getT('preamble');
    }
    /**
     * @description Add an [[ExtrinsicSignatureV5]] to the extrinsic (already generated)
     */ addSignature(signer, signature, payload) {
        this.signature.addSignature(signer, signature, payload);
        return this;
    }
    /**
     * @description Sign the extrinsic with a specific keypair
     */ sign(account, options) {
        this.signature.sign(this.method, account, options);
        return this;
    }
    /**
     * @describe Adds a fake signature to the extrinsic
     */ signFake(signer, options) {
        this.signature.signFake(this.method, signer, options);
        return this;
    }
}
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/index.js [app-route] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GeneralExtrinsic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$GeneralExtrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GeneralExtrinsic"]),
    "GenericExtrinsicPayloadV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicPayloadV5"]),
    "GenericExtrinsicSignatureV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$ExtrinsicSignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicSignatureV5"]),
    "GenericExtrinsicV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$Extrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicV5"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$GeneralExtrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/GeneralExtrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/ExtrinsicPayload.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$ExtrinsicSignature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/ExtrinsicSignature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$Extrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/Extrinsic.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GeneralExtrinsic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GeneralExtrinsic"]),
    "GenericExtrinsicPayloadV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicPayloadV5"]),
    "GenericExtrinsicSignatureV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicSignatureV5"]),
    "GenericExtrinsicV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicV5"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/index.js [app-route] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/index.js [app-route] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GeneralExtrinsic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GeneralExtrinsic"]),
    "GenericExtrinsic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$Extrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GenericExtrinsic"]),
    "GenericExtrinsicEra": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$ExtrinsicEra$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicEra"]),
    "GenericExtrinsicPayload": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicPayload"]),
    "GenericExtrinsicPayloadUnknown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$ExtrinsicPayloadUnknown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicPayloadUnknown"]),
    "GenericExtrinsicPayloadV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicPayloadV4"]),
    "GenericExtrinsicPayloadV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicPayloadV5"]),
    "GenericExtrinsicSignatureV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicSignatureV4"]),
    "GenericExtrinsicSignatureV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicSignatureV5"]),
    "GenericExtrinsicUnknown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$ExtrinsicUnknown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicUnknown"]),
    "GenericExtrinsicV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicV4"]),
    "GenericExtrinsicV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericExtrinsicV5"]),
    "GenericImmortalEra": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$ExtrinsicEra$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ImmortalEra"]),
    "GenericMortalEra": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$ExtrinsicEra$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MortalEra"]),
    "GenericSignerPayload": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$SignerPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GenericSignerPayload"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$Extrinsic$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/Extrinsic.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$ExtrinsicEra$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/ExtrinsicEra.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$ExtrinsicPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/ExtrinsicPayload.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$ExtrinsicPayloadUnknown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/ExtrinsicPayloadUnknown.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$ExtrinsicUnknown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/ExtrinsicUnknown.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$SignerPayload$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/SignerPayload.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v4/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$v5$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/v5/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GeneralExtrinsic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GeneralExtrinsic"]),
    "GenericExtrinsic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsic"]),
    "GenericExtrinsicEra": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicEra"]),
    "GenericExtrinsicPayload": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicPayload"]),
    "GenericExtrinsicPayloadUnknown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicPayloadUnknown"]),
    "GenericExtrinsicPayloadV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicPayloadV4"]),
    "GenericExtrinsicPayloadV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicPayloadV5"]),
    "GenericExtrinsicSignatureV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicSignatureV4"]),
    "GenericExtrinsicSignatureV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicSignatureV5"]),
    "GenericExtrinsicUnknown": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicUnknown"]),
    "GenericExtrinsicV4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicV4"]),
    "GenericExtrinsicV5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericExtrinsicV5"]),
    "GenericImmortalEra": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericImmortalEra"]),
    "GenericMortalEra": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericMortalEra"]),
    "GenericSignerPayload": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GenericSignerPayload"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$polkadot$2b$types$40$14$2e$3$2e$1$2f$node_modules$2f40$polkadot$2f$types$2f$extrinsic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@polkadot+types@14.3.1/node_modules/@polkadot/types/extrinsic/index.js [app-route] (ecmascript) <exports>");
}}),

};

//# sourceMappingURL=df603_%40polkadot_types_extrinsic_388d85._.js.map