module.exports = {

"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/authz.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgRevoke = exports.MsgExec = exports.MsgGrant = exports.StakeAuthorizationType = exports.MsgGrantAuthorization = void 0;
const authz_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/authz/v1beta1/authz.js [app-ssr] (ecmascript)");
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/authz/v1beta1/tx.js [app-ssr] (ecmascript)");
const authz_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/bank/v1beta1/authz.js [app-ssr] (ecmascript)");
const authz_3 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/staking/v1beta1/authz.js [app-ssr] (ecmascript)");
var MsgGrantAuthorization;
(function(MsgGrantAuthorization) {
    MsgGrantAuthorization["MsgAcknowledgement"] = "/ibc.core.channel.v1.MsgAcknowledgement";
    MsgGrantAuthorization["MsgBeginRedelegate"] = "/cosmos.staking.v1beta1.MsgBeginRedelegate";
    MsgGrantAuthorization["MsgChannelCloseConfirm"] = "/ibc.core.channel.v1.MsgChannelCloseConfirm";
    MsgGrantAuthorization["MsgChannelCloseInit"] = "/ibc.core.channel.v1.MsgChannelCloseInit";
    MsgGrantAuthorization["MsgChannelOpenAck"] = "/ibc.core.channel.v1.MsgChannelOpenAck";
    MsgGrantAuthorization["MsgChannelOpenConfirm"] = "/ibc.core.channel.v1.MsgChannelOpenConfirm";
    MsgGrantAuthorization["MsgChannelOpenInit"] = "/ibc.core.channel.v1.MsgChannelOpenInit";
    MsgGrantAuthorization["MsgChannelOpenTry"] = "/ibc.core.channel.v1.MsgChannelOpenTry";
    MsgGrantAuthorization["MsgConnectionOpenAck"] = "/ibc.core.connection.v1.MsgConnectionOpenAck";
    MsgGrantAuthorization["MsgConnectionOpenConfirm"] = "/ibc.core.connection.v1.MsgConnectionOpenConfirm";
    MsgGrantAuthorization["MsgConnectionOpenInit"] = "/ibc.core.connection.v1.MsgConnectionOpenInit";
    MsgGrantAuthorization["MsgConnectionOpenTry"] = "/ibc.core.connection.v1.MsgConnectionOpenTry";
    MsgGrantAuthorization["MsgCreateClient"] = "/ibc.core.client.v1.MsgCreateClient";
    MsgGrantAuthorization["MsgCreateValidator"] = "/cosmos.staking.v1beta1.MsgCreateValidator";
    MsgGrantAuthorization["MsgDelegate"] = "/cosmos.staking.v1beta1.MsgDelegate";
    MsgGrantAuthorization["MsgDeposit"] = "/cosmos.gov.v1.MsgDeposit";
    MsgGrantAuthorization["MsgEditValidator"] = "/cosmos.staking.v1beta1.MsgEditValidator";
    MsgGrantAuthorization["MsgExec"] = "/cosmos.authz.v1beta1.MsgExec";
    MsgGrantAuthorization["MsgExecuteContract"] = "/secret.compute.v1beta1.MsgExecuteContract";
    MsgGrantAuthorization["MsgFundCommunityPool"] = "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
    MsgGrantAuthorization["MsgGrant"] = "/cosmos.authz.v1beta1.MsgGrant";
    MsgGrantAuthorization["MsgGrantAllowance"] = "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
    MsgGrantAuthorization["MsgInstantiateContract"] = "/secret.compute.v1beta1.MsgInstantiateContract";
    MsgGrantAuthorization["MsgMultiSend"] = "/cosmos.bank.v1beta1.MsgMultiSend";
    MsgGrantAuthorization["MsgRecvPacket"] = "/ibc.core.channel.v1.MsgRecvPacket";
    MsgGrantAuthorization["MsgRevoke"] = "/cosmos.authz.v1beta1.MsgRevoke";
    MsgGrantAuthorization["MsgRevokeAllowance"] = "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
    MsgGrantAuthorization["MsgSend"] = "/cosmos.bank.v1beta1.MsgSend";
    MsgGrantAuthorization["MsgSetWithdrawAddress"] = "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
    MsgGrantAuthorization["MsgStoreCode"] = "/secret.compute.v1beta1.MsgStoreCode";
    MsgGrantAuthorization["MsgSubmitEvidence"] = "/cosmos.evidence.v1beta1.MsgSubmitEvidence";
    MsgGrantAuthorization["MsgSubmitMisbehaviour"] = "/ibc.core.client.v1.MsgSubmitMisbehaviour";
    MsgGrantAuthorization["MsgSubmitProposal"] = "/cosmos.gov.v1.MsgSubmitProposal";
    MsgGrantAuthorization["MsgTimeout"] = "/ibc.core.channel.v1.MsgTimeout";
    MsgGrantAuthorization["MsgTimeoutOnClose"] = "/ibc.core.channel.v1.MsgTimeoutOnClose";
    MsgGrantAuthorization["MsgTransfer"] = "/ibc.applications.transfer.v1.MsgTransfer";
    MsgGrantAuthorization["MsgUndelegate"] = "/cosmos.staking.v1beta1.MsgUndelegate";
    MsgGrantAuthorization["MsgUnjail"] = "/cosmos.slashing.v1beta1.MsgUnjail";
    MsgGrantAuthorization["MsgUpdateClient"] = "/ibc.core.client.v1.MsgUpdateClient";
    MsgGrantAuthorization["MsgUpgradeClient"] = "/ibc.core.client.v1.MsgUpgradeClient";
    MsgGrantAuthorization["MsgVerifyInvariant"] = "/cosmos.crisis.v1beta1.MsgVerifyInvariant";
    MsgGrantAuthorization["MsgVote"] = "/cosmos.gov.v1.MsgVote";
    MsgGrantAuthorization["MsgVoteWeighted"] = "/cosmos.gov.v1.MsgVoteWeighted";
    MsgGrantAuthorization["MsgWithdrawDelegatorReward"] = "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    MsgGrantAuthorization["MsgWithdrawValidatorCommission"] = "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
})(MsgGrantAuthorization = exports.MsgGrantAuthorization || (exports.MsgGrantAuthorization = {}));
function isGenericAuthorization(object) {
    return "msg" in object;
}
function isSendAuthorization(object) {
    return "spend_limit" in object;
}
function isStakeAuthorization(object) {
    return "max_tokens" in object && "allow_list" in object && "deny_list" in object && "authorization_type" in object;
}
/** AuthorizationType defines the type of staking module authorization type */ var StakeAuthorizationType;
(function(StakeAuthorizationType) {
    /** defines an authorization type for MsgDelegate */ StakeAuthorizationType[StakeAuthorizationType["Delegate"] = 1] = "Delegate";
    /** defines an authorization type for MsgUndelegate */ StakeAuthorizationType[StakeAuthorizationType["Undelegate"] = 2] = "Undelegate";
    /** defines an authorization type for MsgBeginRedelegate */ StakeAuthorizationType[StakeAuthorizationType["Redelegate"] = 3] = "Redelegate";
})(StakeAuthorizationType = exports.StakeAuthorizationType || (exports.StakeAuthorizationType = {}));
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */ class MsgGrant {
    constructor(params){
        this.params = params;
    }
    toProto() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            let grant;
            const expiration = {
                seconds: String(Math.floor(this.params.expiration)),
                nanos: 0
            };
            if (isSendAuthorization(this.params.authorization)) {
                grant = {
                    authorization: {
                        type_url: "/cosmos.bank.v1beta1.SendAuthorization",
                        value: authz_2.SendAuthorization.encode(this.params.authorization).finish()
                    },
                    expiration
                };
            } else if (isStakeAuthorization(this.params.authorization)) {
                let allow_list = undefined;
                let deny_list = undefined;
                if (((_a = this.params.authorization.allow_list) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    allow_list = {
                        address: this.params.authorization.allow_list
                    };
                } else if (((_b = this.params.authorization.deny_list) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    deny_list = {
                        address: this.params.authorization.deny_list
                    };
                }
                grant = {
                    authorization: {
                        type_url: "/cosmos.staking.v1beta1.StakeAuthorization",
                        value: authz_3.StakeAuthorization.encode({
                            max_tokens: this.params.authorization.max_tokens,
                            allow_list,
                            deny_list,
                            authorization_type: Number(this.params.authorization.authorization_type)
                        }).finish()
                    },
                    expiration
                };
            } else if (isGenericAuthorization(this.params.authorization)) {
                grant = {
                    authorization: {
                        type_url: "/cosmos.authz.v1beta1.GenericAuthorization",
                        value: authz_1.GenericAuthorization.encode({
                            msg: String(this.params.authorization.msg)
                        }).finish()
                    },
                    expiration
                };
            } else {
                throw new Error("Unknown authorization type.");
            }
            const msgContent = {
                granter: this.params.granter,
                grantee: this.params.grantee,
                grant: grant
            };
            return {
                type_url: "/cosmos.authz.v1beta1.MsgGrant",
                value: msgContent,
                encode: ()=>tx_1.MsgGrant.encode(msgContent).finish()
            };
        });
    }
    toAmino() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            let grant = {
                type: "cosmos-sdk/MsgGrant",
                value: {
                    granter: this.params.granter,
                    grantee: this.params.grantee,
                    grant: {
                        //@ts-ignore
                        authorization: {},
                        expiration: new Date(Math.floor(this.params.expiration) * 1000).toISOString().replace(/\.\d+Z/, "Z")
                    }
                }
            };
            if (isSendAuthorization(this.params.authorization)) {
                grant.value.grant.authorization = {
                    type: "cosmos-sdk/SendAuthorization",
                    value: {
                        spend_limit: this.params.authorization.spend_limit
                    }
                };
            } else if (isStakeAuthorization(this.params.authorization)) {
                let Validators;
                if (((_a = this.params.authorization.allow_list) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    Validators = {
                        type: "cosmos-sdk/StakeAuthorization/AllowList",
                        value: {
                            allow_list: {
                                address: this.params.authorization.allow_list
                            }
                        }
                    };
                } else if (((_b = this.params.authorization.deny_list) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    Validators = {
                        type: "cosmos-sdk/StakeAuthorization/DenyList",
                        value: {
                            deny_list: {
                                address: this.params.authorization.deny_list
                            }
                        }
                    };
                } else {
                    throw new Error("Must pass in allow_list or deny_list.");
                }
                grant.value.grant.authorization = {
                    type: "cosmos-sdk/StakeAuthorization",
                    value: {
                        max_tokens: this.params.authorization.max_tokens,
                        authorization_type: this.params.authorization.authorization_type,
                        Validators
                    }
                };
            } else if (isGenericAuthorization(this.params.authorization)) {
                grant.value.grant.authorization = {
                    type: "cosmos-sdk/GenericAuthorization",
                    value: {
                        msg: this.params.authorization.msg
                    }
                };
            } else {
                throw new Error("Unknown authorization type.");
            }
            return grant;
        });
    }
}
exports.MsgGrant = MsgGrant;
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */ class MsgExec {
    constructor(params){
        this.params = params;
    }
    toProto(encryptionUtils) {
        return __awaiter(this, void 0, void 0, function*() {
            const msgs = [];
            for (const m of this.params.msgs){
                const asProto = yield m.toProto(encryptionUtils);
                msgs.push({
                    type_url: asProto.type_url,
                    value: asProto.encode()
                });
            }
            const msgContent = {
                grantee: this.params.grantee,
                msgs
            };
            return {
                type_url: "/cosmos.authz.v1beta1.MsgExec",
                value: msgContent,
                encode: ()=>tx_1.MsgExec.encode(msgContent).finish()
            };
        });
    }
    toAmino(encryptionUtils) {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgExec",
                value: {
                    grantee: this.params.grantee,
                    msgs: yield Promise.all(this.params.msgs.map((m)=>m.toAmino(encryptionUtils)))
                }
            };
        });
    }
}
exports.MsgExec = MsgExec;
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */ class MsgRevoke {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            const msgContent = {
                granter: this.params.granter,
                grantee: this.params.grantee,
                msg_type_url: String(this.params.msg)
            };
            return {
                type_url: "/cosmos.authz.v1beta1.MsgRevoke",
                value: msgContent,
                encode: ()=>tx_1.MsgRevoke.encode(msgContent).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgRevoke",
                value: {
                    granter: this.params.granter,
                    grantee: this.params.grantee,
                    msg_type_url: String(this.params.msg)
                }
            };
        });
    }
}
exports.MsgRevoke = MsgRevoke; //# sourceMappingURL=authz.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/bank.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgSetSendEnabled = exports.MsgMultiSend = exports.MsgSend = exports.MsgSetSendEnabledParams = exports.MsgMultiSendParams = exports.MsgSendParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/bank/v1beta1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/bank/v1beta1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgSendParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgSend;
    }
});
Object.defineProperty(exports, "MsgMultiSendParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgMultiSend;
    }
});
Object.defineProperty(exports, "MsgSetSendEnabledParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgSetSendEnabled;
    }
});
/** MsgSend represents a message to send coins from one account to another. */ class MsgSend {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.bank.v1beta1.MsgSend",
                value: this.params,
                encode: ()=>tx_1.MsgSend.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgSend",
                value: this.params
            };
        });
    }
}
exports.MsgSend = MsgSend;
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */ class MsgMultiSend {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: this.params,
                encode: ()=>tx_1.MsgMultiSend.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgMultiSend",
                value: this.params
            };
        });
    }
}
exports.MsgMultiSend = MsgMultiSend;
class MsgSetSendEnabled {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
                value: this.params,
                encode: ()=>tx_1.MsgSetSendEnabled.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgSetSendEnabled",
                value: this.params
            };
        });
    }
}
exports.MsgSetSendEnabled = MsgSetSendEnabled; //# sourceMappingURL=bank.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/compute.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgClearAdmin = exports.MsgUpdateAdmin = exports.MsgMigrateContract = exports.MsgStoreCode = exports.MsgExecuteContract = exports.MsgInstantiateContract = exports.getMissingCodeHashWarning = void 0;
const encoding_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)");
const utils_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/utils.js [app-ssr] (ecmascript)");
const msg_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/secret/compute/v1beta1/msg.js [app-ssr] (ecmascript)");
function getMissingCodeHashWarning(method) {
    return `${new Date().toISOString()} WARNING: ${method} was used without the "code_hash" parameter. This is discouraged and will result in much slower execution times for your app.`;
}
exports.getMissingCodeHashWarning = getMissingCodeHashWarning;
/** Instantiate a contract from code id */ class MsgInstantiateContract {
    constructor({ sender, code_id, label, init_msg, init_funds, code_hash, admin }){
        this.warnCodeHash = false;
        this.sender = sender;
        this.codeId = String(code_id);
        this.label = label;
        this.initMsg = init_msg;
        this.initMsgEncrypted = null;
        this.initFunds = init_funds !== null && init_funds !== void 0 ? init_funds : [];
        this.admin = admin !== null && admin !== void 0 ? admin : "";
        if (code_hash) {
            this.codeHash = code_hash.replace(/^0x/, "").toLowerCase();
        } else {
            // codeHash will be set in SecretNetworkClient before invoking async toProto() & toAimno()
            this.codeHash = "";
            this.warnCodeHash = true;
            console.warn(getMissingCodeHashWarning("MsgInstantiateContract"));
        }
    }
    toProto(utils) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgInstantiateContract"));
            }
            if (!this.initMsgEncrypted) {
                // The encryption uses a random nonce
                // async toProto() & async toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.initMsgEncrypted = yield utils.encrypt(this.codeHash, this.initMsg);
            }
            const msgContent = {
                sender: (0, utils_1.addressToBytes)(this.sender),
                code_id: this.codeId,
                label: this.label,
                init_msg: this.initMsgEncrypted,
                init_funds: this.initFunds,
                // callback_sig & callback_code_hash are internal stuff that doesn't matter here
                callback_sig: new Uint8Array(0),
                callback_code_hash: "",
                admin: this.admin
            };
            return {
                type_url: "/secret.compute.v1beta1.MsgInstantiateContract",
                value: msgContent,
                encode: ()=>msg_1.MsgInstantiateContract.encode(msgContent).finish()
            };
        });
    }
    toAmino(utils) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgInstantiateContract"));
            }
            if (!this.initMsgEncrypted) {
                // The encryption uses a random nonce
                // async toProto() & async toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.initMsgEncrypted = yield utils.encrypt(this.codeHash, this.initMsg);
            }
            return {
                type: "wasm/MsgInstantiateContract",
                value: {
                    sender: (0, encoding_1.toBase64)((0, utils_1.addressToBytes)(this.sender)),
                    code_id: this.codeId,
                    label: this.label,
                    init_msg: this.initMsgEncrypted.length == 0 ? undefined : (0, encoding_1.toBase64)(this.initMsgEncrypted),
                    init_funds: this.initFunds,
                    admin: this.admin.length > 0 ? this.admin : undefined
                }
            };
        });
    }
}
exports.MsgInstantiateContract = MsgInstantiateContract;
/** Execute a function on a contract */ class MsgExecuteContract {
    constructor({ sender, contract_address: contractAddress, msg, sent_funds: sentFunds, code_hash: codeHash }){
        this.warnCodeHash = false;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.msg = msg;
        this.msgEncrypted = null;
        this.sentFunds = sentFunds !== null && sentFunds !== void 0 ? sentFunds : [];
        if (codeHash) {
            this.codeHash = codeHash.replace(/^0x/, "").toLowerCase();
        } else {
            // codeHash will be set in SecretNetworkClient before invoking async toProto() & toAimno()
            this.codeHash = "";
            this.warnCodeHash = true;
            console.warn(getMissingCodeHashWarning("MsgExecuteContract"));
        }
    }
    toProto(utils) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgExecuteContract"));
            }
            if (!this.msgEncrypted) {
                // The encryption uses a random nonce
                // async toProto() & async toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.msgEncrypted = yield utils.encrypt(this.codeHash, this.msg);
            }
            const msgContent = {
                sender: (0, utils_1.addressToBytes)(this.sender),
                contract: (0, utils_1.addressToBytes)(this.contractAddress),
                msg: this.msgEncrypted,
                sent_funds: this.sentFunds,
                // callback_sig & callback_code_hash are internal stuff that doesn't matter here
                callback_sig: new Uint8Array(),
                callback_code_hash: ""
            };
            return {
                type_url: "/secret.compute.v1beta1.MsgExecuteContract",
                value: msgContent,
                encode: ()=>msg_1.MsgExecuteContract.encode(msgContent).finish()
            };
        });
    }
    toAmino(utils) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgExecuteContract"));
            }
            if (!this.msgEncrypted) {
                // The encryption uses a random nonce
                // async toProto() & async toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.msgEncrypted = yield utils.encrypt(this.codeHash, this.msg);
            }
            return {
                type: "wasm/MsgExecuteContract",
                value: {
                    sender: (0, encoding_1.toBase64)((0, utils_1.addressToBytes)(this.sender)),
                    contract: (0, encoding_1.toBase64)((0, utils_1.addressToBytes)(this.contractAddress)),
                    msg: (0, encoding_1.toBase64)(this.msgEncrypted),
                    sent_funds: this.sentFunds
                }
            };
        });
    }
}
exports.MsgExecuteContract = MsgExecuteContract;
/** Upload a compiled contract to Secret Network */ class MsgStoreCode {
    constructor({ sender, wasm_byte_code: wasmByteCode, source, builder }){
        this.sender = sender;
        this.source = source;
        this.builder = builder;
        this.wasmByteCode = wasmByteCode;
    }
    gzipWasm() {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(0, utils_1.is_gzip)(this.wasmByteCode)) {
                const pako = yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/pako@2.0.4/node_modules/pako/index.js [app-ssr] (ecmascript)")));
                this.wasmByteCode = pako.gzip(this.wasmByteCode, {
                    level: 9
                });
            }
        });
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            this.gzipWasm();
            const msgContent = {
                sender: (0, utils_1.addressToBytes)(this.sender),
                wasm_byte_code: this.wasmByteCode,
                source: this.source,
                builder: this.builder
            };
            return {
                type_url: "/secret.compute.v1beta1.MsgStoreCode",
                value: msgContent,
                encode: ()=>msg_1.MsgStoreCode.encode(msgContent).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            this.gzipWasm();
            return {
                type: "wasm/MsgStoreCode",
                value: {
                    sender: (0, encoding_1.toBase64)((0, utils_1.addressToBytes)(this.sender)),
                    wasm_byte_code: (0, encoding_1.toBase64)(this.wasmByteCode),
                    source: this.source.length > 0 ? this.source : undefined,
                    builder: this.builder.length > 0 ? this.builder : undefined
                }
            };
        });
    }
}
exports.MsgStoreCode = MsgStoreCode;
/** Execute a function on a contract */ class MsgMigrateContract {
    constructor({ sender, contract_address: contractAddress, msg, code_id: codeId, code_hash: codeHash }){
        this.warnCodeHash = false;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.msg = msg;
        this.msgEncrypted = null;
        this.codeId = String(codeId);
        if (codeHash) {
            this.codeHash = codeHash.replace(/^0x/, "").toLowerCase();
        } else {
            // codeHash will be set in SecretNetworkClient before invoking async toProto() & toAimno()
            this.codeHash = "";
            this.warnCodeHash = true;
            console.warn(getMissingCodeHashWarning("MsgMigrateContract"));
        }
    }
    toProto(utils) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgMigrateContract"));
            }
            if (!this.msgEncrypted) {
                // The encryption uses a random nonce
                // async toProto() & async toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.msgEncrypted = yield utils.encrypt(this.codeHash, this.msg);
            }
            const msgContent = {
                sender: this.sender,
                contract: this.contractAddress,
                msg: this.msgEncrypted,
                code_id: this.codeId,
                // callback_sig & callback_code_hash are internal stuff that doesn't matter here
                callback_sig: new Uint8Array(),
                callback_code_hash: ""
            };
            return {
                type_url: "/secret.compute.v1beta1.MsgMigrateContract",
                value: msgContent,
                encode: ()=>msg_1.MsgMigrateContract.encode(msgContent).finish()
            };
        });
    }
    toAmino(utils) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgMigrateContract"));
            }
            if (!this.msgEncrypted) {
                // The encryption uses a random nonce
                // async toProto() & async toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.msgEncrypted = yield utils.encrypt(this.codeHash, this.msg);
            }
            return {
                type: "wasm/MsgMigrateContract",
                value: {
                    sender: this.sender,
                    contract: this.contractAddress,
                    msg: (0, encoding_1.toBase64)(this.msgEncrypted),
                    code_id: this.codeId
                }
            };
        });
    }
}
exports.MsgMigrateContract = MsgMigrateContract;
/** MsgUpdateAdmin sets a new admin for a secret contract. */ class MsgUpdateAdmin {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/secret.compute.v1beta1.MsgUpdateAdmin",
                value: this.params,
                encode: ()=>msg_1.MsgUpdateAdmin.encode({
                        sender: this.params.sender,
                        new_admin: this.params.new_admin,
                        contract: this.params.contract_address,
                        // callback_sig is internal stuff that doesn't matter here
                        callback_sig: new Uint8Array()
                    }).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "wasm/MsgUpdateAdmin",
                value: {
                    sender: this.params.sender,
                    new_admin: this.params.new_admin,
                    contract: this.params.contract_address
                }
            };
        });
    }
}
exports.MsgUpdateAdmin = MsgUpdateAdmin;
/** MsgClearAdmin removes any admin stored for a secret contract. */ class MsgClearAdmin {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/secret.compute.v1beta1.MsgClearAdmin",
                value: this.params,
                encode: ()=>msg_1.MsgClearAdmin.encode({
                        sender: this.params.sender,
                        contract: this.params.contract_address,
                        // callback_sig is internal stuff that doesn't matter here
                        callback_sig: new Uint8Array()
                    }).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "wasm/MsgClearAdmin",
                value: {
                    sender: this.params.sender,
                    contract: this.params.contract_address
                }
            };
        });
    }
}
exports.MsgClearAdmin = MsgClearAdmin; //# sourceMappingURL=compute.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/crisis.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgVerifyInvariant = exports.MsgVerifyInvariantParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/crisis/v1beta1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/crisis/v1beta1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgVerifyInvariantParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgVerifyInvariant;
    }
});
/** MsgVerifyInvariant represents a message to verify a particular invariance. */ class MsgVerifyInvariant {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: this.params,
                encode: ()=>tx_1.MsgVerifyInvariant.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgVerifyInvariant",
                value: this.params
            };
        });
    }
}
exports.MsgVerifyInvariant = MsgVerifyInvariant; //# sourceMappingURL=crisis.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/distribution.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgDepositValidatorRewardsPool = exports.MsgCommunityPoolSpend = exports.MsgSetAutoRestake = exports.MsgFundCommunityPool = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorReward = exports.MsgSetWithdrawAddress = exports.MsgDepositValidatorRewardsPoolParams = exports.MsgCommunityPoolSpendParams = exports.MsgSetAutoRestakeParams = exports.MsgFundCommunityPoolParams = exports.MsgWithdrawValidatorCommissionParams = exports.MsgWithdrawDelegatorRewardParams = exports.MsgSetWithdrawAddressParams = void 0;
const encoding_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)");
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/distribution/v1beta1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/distribution/v1beta1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgSetWithdrawAddressParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgSetWithdrawAddress;
    }
});
Object.defineProperty(exports, "MsgWithdrawDelegatorRewardParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgWithdrawDelegatorReward;
    }
});
Object.defineProperty(exports, "MsgWithdrawValidatorCommissionParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgWithdrawValidatorCommission;
    }
});
Object.defineProperty(exports, "MsgFundCommunityPoolParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgFundCommunityPool;
    }
});
Object.defineProperty(exports, "MsgSetAutoRestakeParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgSetAutoRestake;
    }
});
Object.defineProperty(exports, "MsgCommunityPoolSpendParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgCommunityPoolSpend;
    }
});
Object.defineProperty(exports, "MsgDepositValidatorRewardsPoolParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgDepositValidatorRewardsPool;
    }
});
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */ class MsgSetWithdrawAddress {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: this.params,
                encode: ()=>tx_1.MsgSetWithdrawAddress.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgModifyWithdrawAddress",
                value: this.params
            };
        });
    }
}
exports.MsgSetWithdrawAddress = MsgSetWithdrawAddress;
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */ class MsgWithdrawDelegatorReward {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: this.params,
                encode: ()=>tx_1.MsgWithdrawDelegatorReward.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgWithdrawDelegationReward",
                value: this.params
            };
        });
    }
}
exports.MsgWithdrawDelegatorReward = MsgWithdrawDelegatorReward;
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */ class MsgWithdrawValidatorCommission {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: this.params,
                encode: ()=>tx_1.MsgWithdrawValidatorCommission.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgWithdrawValCommission",
                value: this.params
            };
        });
    }
}
exports.MsgWithdrawValidatorCommission = MsgWithdrawValidatorCommission;
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */ class MsgFundCommunityPool {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: this.params,
                encode: ()=>tx_1.MsgFundCommunityPool.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgFundCommunityPool",
                value: this.params
            };
        });
    }
}
exports.MsgFundCommunityPool = MsgFundCommunityPool;
/**
 * MsgSetAutoRestake enables or disables auto-restaking for
 * a delegator-validator pair.
 */ class MsgSetAutoRestake {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgSetAutoRestake",
                value: this.params,
                encode: ()=>tx_1.MsgSetAutoRestake.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgSetAutoRestake",
                value: Object.assign({}, this.params, {
                    enabled: this.params.enabled ? true : undefined
                })
            };
        });
    }
}
exports.MsgSetAutoRestake = MsgSetAutoRestake;
class MsgCommunityPoolSpend {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
                value: this.params,
                encode: ()=>tx_1.MsgCommunityPoolSpend.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgCommunityPoolSpend",
                value: this.params
            };
        });
    }
}
exports.MsgCommunityPoolSpend = MsgCommunityPoolSpend;
class MsgDepositValidatorRewardsPool {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            const msgContent = Object.assign(Object.assign({}, this.params), {
                validator_address: (0, encoding_1.toBech32)("secretvaloper", (0, encoding_1.fromBech32)(this.params.validator_address).data)
            });
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
                value: msgContent,
                encode: ()=>tx_1.MsgDepositValidatorRewardsPool.encode(msgContent).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgDepositValidatorRewardsPool",
                value: this.params
            };
        });
    }
}
exports.MsgDepositValidatorRewardsPool = MsgDepositValidatorRewardsPool; //# sourceMappingURL=distribution.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/emergency_button.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgUpdateParams = exports.MsgToggleIbcSwitch = exports.EmergencyButtonParams = exports.MsgUpdateParamsParams = exports.MsgToggleIbcSwitchParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/secret/emergencybutton/v1beta1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/secret/emergencybutton/v1beta1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgToggleIbcSwitchParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgToggleIbcSwitch;
    }
});
Object.defineProperty(exports, "MsgUpdateParamsParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgUpdateParams;
    }
});
var params_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/secret/emergencybutton/v1beta1/params.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "EmergencyButtonParams", {
    enumerable: true,
    get: function() {
        return params_1.Params;
    }
});
class MsgToggleIbcSwitch {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch",
                value: this.params,
                encode: ()=>tx_1.MsgToggleIbcSwitch.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "emergencybutton/MsgToggleIbcSwitch",
                value: this.params
            };
        });
    }
}
exports.MsgToggleIbcSwitch = MsgToggleIbcSwitch;
class MsgUpdateParams {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/secret.emergencybutton.v1beta1.MsgUpdateParams",
                value: this.params,
                encode: ()=>tx_1.MsgUpdateParams.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "emergencybutton/MsgUpdateParams",
                value: this.params
            };
        });
    }
}
exports.MsgUpdateParams = MsgUpdateParams; //# sourceMappingURL=emergency_button.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/evidence.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgSubmitEvidence = exports.MsgSubmitEvidenceParams = void 0;
var tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/evidence/v1beta1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgSubmitEvidenceParams", {
    enumerable: true,
    get: function() {
        return tx_1.MsgSubmitEvidence;
    }
});
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */ class MsgSubmitEvidence {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgSubmitEvidence not implemented.");
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgSubmitEvidence not implemented.");
        });
    }
}
exports.MsgSubmitEvidence = MsgSubmitEvidence; //# sourceMappingURL=evidence.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/feegrant.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgPruneAllowances = exports.MsgRevokeAllowance = exports.MsgGrantAllowance = exports.MsgPruneAllowancesParams = exports.MsgRevokeAllowanceParams = void 0;
const feegrant_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/feegrant/v1beta1/feegrant.js [app-ssr] (ecmascript)");
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/feegrant/v1beta1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/feegrant/v1beta1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgRevokeAllowanceParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgRevokeAllowance;
    }
});
Object.defineProperty(exports, "MsgPruneAllowancesParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgPruneAllowances;
    }
});
function isBasicAllowance(obj) {
    return "spend_limit" in obj;
}
function isPeriodicAllowance(obj) {
    return "period_spend_limit" in obj;
}
function isAllowedMsgAllowance(obj) {
    return "allowed_messages" in obj;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */ class MsgGrantAllowance {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            let allowance;
            if (isBasicAllowance(this.params.allowance)) {
                allowance = {
                    type_url: "/cosmos.feegrant.v1beta1.BasicAllowance",
                    value: feegrant_1.BasicAllowance.encode(this.params.allowance).finish()
                };
            } else if (isPeriodicAllowance(this.params.allowance)) {
                allowance = {
                    type_url: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                    value: feegrant_1.PeriodicAllowance.encode(this.params.allowance).finish()
                };
            } else if (isAllowedMsgAllowance(this.params.allowance)) {
                let internalAllowance;
                if (isBasicAllowance(this.params.allowance.allowance)) {
                    internalAllowance = {
                        type_url: "/cosmos.feegrant.v1beta1.BasicAllowance",
                        value: feegrant_1.BasicAllowance.encode(this.params.allowance.allowance).finish()
                    };
                } else if (isPeriodicAllowance(this.params.allowance.allowance)) {
                    internalAllowance = {
                        type_url: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                        value: feegrant_1.PeriodicAllowance.encode(this.params.allowance.allowance).finish()
                    };
                } else {
                    throw new Error(`PeriodicAllowance: Cannot cast allowance into 'BasicAllowance' or 'PeriodicAllowance': ${JSON.stringify(this.params.allowance.allowance)}`);
                }
                allowance = {
                    type_url: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
                    value: feegrant_1.AllowedMsgAllowance.encode({
                        allowed_messages: this.params.allowance.allowed_messages,
                        allowance: internalAllowance
                    }).finish()
                };
            } else {
                throw new Error(`Cannot cast allowance into 'BasicAllowance', 'PeriodicAllowance' or 'AllowedMsgAllowance': ${JSON.stringify(this.params.allowance)}`);
            }
            return {
                type_url: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: this.params,
                encode: ()=>tx_1.MsgGrantAllowance.encode({
                        grantee: this.params.grantee,
                        granter: this.params.granter,
                        allowance
                    }).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            let allowance;
            if (isBasicAllowance(this.params.allowance)) {
                allowance = {
                    type: "cosmos-sdk/BasicAllowance",
                    value: {
                        spend_limit: this.params.allowance.spend_limit,
                        expiration: this.params.allowance.expiration
                    }
                };
            } else if (isPeriodicAllowance(this.params.allowance)) {
                allowance = {
                    type: "cosmos-sdk/PeriodicAllowance",
                    value: {
                        basic: this.params.allowance.basic,
                        period: this.params.allowance.period,
                        period_spend_limit: this.params.allowance.period_spend_limit,
                        period_can_spend: this.params.allowance.period_can_spend,
                        period_reset: this.params.allowance.period_reset
                    }
                };
            } else if (isAllowedMsgAllowance(this.params.allowance)) {
                let internalAllowance;
                if (isBasicAllowance(this.params.allowance.allowance)) {
                    internalAllowance = {
                        type: "cosmos-sdk/BasicAllowance",
                        value: {
                            spend_limit: this.params.allowance.allowance.spend_limit,
                            expiration: this.params.allowance.allowance.expiration
                        }
                    };
                } else if (isPeriodicAllowance(this.params.allowance.allowance)) {
                    internalAllowance = {
                        type: "cosmos-sdk/PeriodicAllowance",
                        value: {
                            basic: this.params.allowance.allowance.basic,
                            period: this.params.allowance.allowance.period,
                            period_spend_limit: this.params.allowance.allowance.period_spend_limit,
                            period_can_spend: this.params.allowance.allowance.period_can_spend,
                            period_reset: this.params.allowance.allowance.period_reset
                        }
                    };
                } else {
                    throw new Error(`PeriodicAllowance: Cannot cast allowance into 'BasicAllowance' or 'PeriodicAllowance': ${JSON.stringify(this.params.allowance.allowance)}`);
                }
                allowance = {
                    type: "cosmos-sdk/AllowedMsgAllowance",
                    value: {
                        allowed_messages: this.params.allowance.allowed_messages,
                        allowance: internalAllowance
                    }
                };
            } else {
                throw new Error(`Cannot cast allowance into 'BasicAllowance', 'PeriodicAllowance' or 'AllowedMsgAllowance': ${JSON.stringify(this.params.allowance)}`);
            }
            return {
                type: "cosmos-sdk/MsgGrantAllowance",
                value: {
                    granter: this.params.granter,
                    grantee: this.params.grantee,
                    allowance: allowance
                }
            };
        });
    }
}
exports.MsgGrantAllowance = MsgGrantAllowance;
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */ class MsgRevokeAllowance {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: this.params,
                encode: ()=>tx_1.MsgRevokeAllowance.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgRevokeAllowance",
                value: this.params
            };
        });
    }
}
exports.MsgRevokeAllowance = MsgRevokeAllowance;
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */ class MsgPruneAllowances {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: this.params,
                encode: ()=>tx_1.MsgPruneAllowances.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgPruneAllowances",
                value: this.params
            };
        });
    }
}
exports.MsgPruneAllowances = MsgPruneAllowances; //# sourceMappingURL=feegrant.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/gov.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgExecLegacyContent = exports.MsgCancelProposal = exports.MsgDeposit = exports.MsgVoteWeighted = exports.MsgVote = exports.MsgSubmitProposal = exports.ProposalType = exports.ProposalStatus = exports.VoteOption = exports.MsgDepositParams = exports.MsgCancelProposalParams = exports.MsgVoteWeightedParams = exports.MsgVoteParams = void 0;
const any_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/google/protobuf/any.js [app-ssr] (ecmascript)");
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/gov/v1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/gov/v1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgVoteParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgVote;
    }
});
Object.defineProperty(exports, "MsgVoteWeightedParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgVoteWeighted;
    }
});
Object.defineProperty(exports, "MsgCancelProposalParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgCancelProposal;
    }
});
Object.defineProperty(exports, "MsgDepositParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgDeposit;
    }
});
var gov_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/gov/v1/gov.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "VoteOption", {
    enumerable: true,
    get: function() {
        return gov_1.VoteOption;
    }
});
Object.defineProperty(exports, "ProposalStatus", {
    enumerable: true,
    get: function() {
        return gov_1.ProposalStatus;
    }
});
var ProposalType;
(function(ProposalType) {
    ProposalType["TextProposal"] = "TextProposal";
    ProposalType["CommunityPoolSpendProposal"] = "CommunityPoolSpendProposal";
    /**
     * @see {@link https://docs.scrt.network/guides/governance} for possible subspaces, keys and values.
     */ ProposalType["ParameterChangeProposal"] = "ParameterChangeProposal";
    /** Not supported with Amino signer. */ ProposalType["ClientUpdateProposal"] = "ClientUpdateProposal";
    /** Not supported with Amino signer. */ ProposalType["UpgradeProposal"] = "UpgradeProposal";
    ProposalType["SoftwareUpgradeProposal"] = "SoftwareUpgradeProposal";
    ProposalType["CancelSoftwareUpgradeProposal"] = "CancelSoftwareUpgradeProposal";
})(ProposalType = exports.ProposalType || (exports.ProposalType = {}));
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */ class MsgSubmitProposal {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            let msgContent = Object.assign(Object.assign({}, this.params), {
                messages: yield Promise.all(this.params.messages.map((msg)=>__awaiter(this, void 0, void 0, function*() {
                        const protoMsg = yield msg.toProto();
                        return any_1.Any.fromPartial({
                            type_url: protoMsg.type_url,
                            value: protoMsg.encode()
                        });
                    })))
            });
            return {
                type_url: `/cosmos.gov.v1.MsgSubmitProposal`,
                value: msgContent,
                encode: ()=>tx_1.MsgSubmitProposal.encode(msgContent).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("Not implemented. Please use WalletProto");
        });
    }
}
exports.MsgSubmitProposal = MsgSubmitProposal;
class MsgVote {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/cosmos.gov.v1.MsgVote`,
                value: this.params,
                encode: ()=>tx_1.MsgVote.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgVote",
                value: this.params
            };
        });
    }
}
exports.MsgVote = MsgVote;
/** MsgVoteWeighted defines a message to cast a vote, with an option to split the vote. */ class MsgVoteWeighted {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/cosmos.gov.v1.MsgVoteWeighted`,
                value: this.params,
                encode: ()=>tx_1.MsgVoteWeighted.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgVoteWeighted",
                value: this.params
            };
        });
    }
}
exports.MsgVoteWeighted = MsgVoteWeighted;
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */ class MsgDeposit {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/cosmos.gov.v1.MsgDeposit`,
                value: this.params,
                encode: ()=>tx_1.MsgDeposit.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgDeposit",
                value: this.params
            };
        });
    }
}
exports.MsgDeposit = MsgDeposit;
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */ class MsgCancelProposal {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/cosmos.gov.v1.MsgCancelProposal`,
                value: this.params,
                encode: ()=>tx_1.MsgCancelProposal.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgCancelProposal",
                value: this.params
            };
        });
    }
}
exports.MsgCancelProposal = MsgCancelProposal;
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */ class MsgExecLegacyContent {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            let content;
            switch(this.params.type){
                case ProposalType.TextProposal:
                    const { TextProposal } = yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/gov/v1beta1/gov.js [app-ssr] (ecmascript)")));
                    content = any_1.Any.fromPartial({
                        type_url: "/cosmos.gov.v1beta1.TextProposal",
                        value: TextProposal.encode(TextProposal.fromPartial(this.params.content)).finish()
                    });
                    break;
                case ProposalType.CommunityPoolSpendProposal:
                    const { CommunityPoolSpendProposal } = yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/distribution/v1beta1/distribution.js [app-ssr] (ecmascript)")));
                    content = any_1.Any.fromPartial({
                        type_url: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
                        value: CommunityPoolSpendProposal.encode(CommunityPoolSpendProposal.fromPartial(this.params.content)).finish()
                    });
                    break;
                case ProposalType.ParameterChangeProposal:
                    const { ParameterChangeProposal } = yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/params/v1beta1/params.js [app-ssr] (ecmascript)")));
                    content = any_1.Any.fromPartial({
                        type_url: "/cosmos.params.v1beta1.ParameterChangeProposal",
                        value: ParameterChangeProposal.encode(ParameterChangeProposal.fromPartial(this.params.content)).finish()
                    });
                    break;
                case ProposalType.ClientUpdateProposal:
                    const { ClientUpdateProposal } = yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/client/v1/client.js [app-ssr] (ecmascript)")));
                    content = any_1.Any.fromPartial({
                        type_url: "/ibc.core.client.v1.ClientUpdateProposal",
                        value: ClientUpdateProposal.encode(ClientUpdateProposal.fromPartial(this.params.content)).finish()
                    });
                    break;
                case ProposalType.UpgradeProposal:
                    const { UpgradeProposal } = yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/client/v1/client.js [app-ssr] (ecmascript)")));
                    content = any_1.Any.fromPartial({
                        type_url: "/ibc.core.client.v1.UpgradeProposal",
                        value: UpgradeProposal.encode(UpgradeProposal.fromPartial(this.params.content)).finish()
                    });
                    break;
                case ProposalType.SoftwareUpgradeProposal:
                    const { SoftwareUpgradeProposal } = yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/upgrade/v1beta1/upgrade.js [app-ssr] (ecmascript)")));
                    content = any_1.Any.fromPartial({
                        type_url: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
                        value: SoftwareUpgradeProposal.encode(SoftwareUpgradeProposal.fromPartial(this.params.content)).finish()
                    });
                    break;
                case ProposalType.CancelSoftwareUpgradeProposal:
                    const { CancelSoftwareUpgradeProposal } = yield Promise.resolve().then(()=>__importStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/upgrade/v1beta1/upgrade.js [app-ssr] (ecmascript)")));
                    content = any_1.Any.fromPartial({
                        type_url: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
                        value: CancelSoftwareUpgradeProposal.encode(CancelSoftwareUpgradeProposal.fromPartial(this.params.content)).finish()
                    });
                    break;
                default:
                    throw new Error(`Unknown proposal type: "${this.params.type}" - ${JSON.stringify(this.params.content)}`);
            }
            const msgContent = {
                authority: this.params.authority,
                content
            };
            return {
                type_url: `/cosmos.gov.v1.MsgExecLegacyContent`,
                value: msgContent,
                encode: ()=>tx_1.MsgExecLegacyContent.encode(msgContent).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("Not implemented. Please use WalletProto");
        });
    }
}
exports.MsgExecLegacyContent = MsgExecLegacyContent; //# sourceMappingURL=gov.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_channel.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgPruneAcknowledgements = exports.MsgChannelUpgradeCancel = exports.MsgChannelUpgradeTimeout = exports.MsgChannelUpgradeOpen = exports.MsgChannelUpgradeAck = exports.MsgChannelUpgradeTry = exports.MsgChannelUpgradeInit = exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAck = exports.MsgChannelOpenTry = exports.MsgAcknowledgement = exports.MsgChannelOpenInit = exports.MsgTimeoutOnClose = exports.MsgTimeout = exports.MsgRecvPacket = exports.MsgPruneAcknowledgementsParams = exports.MsgChannelUpgradeCancelParams = exports.MsgChannelUpgradeTimeoutParams = exports.MsgChannelUpgradeOpenParams = exports.MsgChannelUpgradeAckParams = exports.MsgChannelUpgradeTryParams = exports.MsgChannelUpgradeInitParams = exports.MsgAcknowledgementParams = exports.MsgTimeoutOnCloseParams = exports.MsgTimeoutParams = exports.MsgRecvPacketParams = exports.MsgChannelCloseConfirmParams = exports.MsgChannelCloseInitParams = exports.MsgChannelOpenConfirmParams = exports.MsgChannelOpenAckParams = exports.MsgChannelOpenTryParams = exports.MsgChannelOpenInitParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/channel/v1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/channel/v1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgChannelOpenInitParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelOpenInit;
    }
});
Object.defineProperty(exports, "MsgChannelOpenTryParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelOpenTry;
    }
});
Object.defineProperty(exports, "MsgChannelOpenAckParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelOpenAck;
    }
});
Object.defineProperty(exports, "MsgChannelOpenConfirmParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelOpenConfirm;
    }
});
Object.defineProperty(exports, "MsgChannelCloseInitParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelCloseInit;
    }
});
Object.defineProperty(exports, "MsgChannelCloseConfirmParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelCloseConfirm;
    }
});
Object.defineProperty(exports, "MsgRecvPacketParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgRecvPacket;
    }
});
Object.defineProperty(exports, "MsgTimeoutParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgTimeout;
    }
});
Object.defineProperty(exports, "MsgTimeoutOnCloseParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgTimeoutOnClose;
    }
});
Object.defineProperty(exports, "MsgAcknowledgementParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgAcknowledgement;
    }
});
Object.defineProperty(exports, "MsgChannelUpgradeInitParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelUpgradeInit;
    }
});
Object.defineProperty(exports, "MsgChannelUpgradeTryParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelUpgradeTry;
    }
});
Object.defineProperty(exports, "MsgChannelUpgradeAckParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelUpgradeAck;
    }
});
Object.defineProperty(exports, "MsgChannelUpgradeOpenParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelUpgradeOpen;
    }
});
Object.defineProperty(exports, "MsgChannelUpgradeTimeoutParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelUpgradeTimeout;
    }
});
Object.defineProperty(exports, "MsgChannelUpgradeCancelParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgChannelUpgradeCancel;
    }
});
Object.defineProperty(exports, "MsgPruneAcknowledgementsParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgPruneAcknowledgements;
    }
});
/** MsgRecvPacket receives incoming IBC packet */ class MsgRecvPacket {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgRecvPacket",
                value: this.msg,
                encode: ()=>tx_1.MsgRecvPacket.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgRecvPacket doesn't support Amino encoding.");
        });
    }
}
exports.MsgRecvPacket = MsgRecvPacket;
/** MsgTimeout receives timed-out packet */ class MsgTimeout {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgTimeout",
                value: this.msg,
                encode: ()=>tx_1.MsgTimeout.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgTimeout doesn't support Amino encoding.");
        });
    }
}
exports.MsgTimeout = MsgTimeout;
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */ class MsgTimeoutOnClose {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                value: this.msg,
                encode: ()=>tx_1.MsgTimeoutOnClose.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgTimeoutOnClose doesn't support Amino encoding.");
        });
    }
}
exports.MsgTimeoutOnClose = MsgTimeoutOnClose;
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */ class MsgChannelOpenInit {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelOpenInit.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelOpenInit doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelOpenInit = MsgChannelOpenInit;
/** MsgAcknowledgement receives incoming IBC acknowledgement */ class MsgAcknowledgement {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgAcknowledgement",
                value: this.msg,
                encode: ()=>tx_1.MsgAcknowledgement.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgAcknowledgement doesn't support Amino encoding.");
        });
    }
}
exports.MsgAcknowledgement = MsgAcknowledgement;
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */ class MsgChannelOpenTry {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelOpenTry",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelOpenTry.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelOpenTry doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelOpenTry = MsgChannelOpenTry;
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */ class MsgChannelOpenAck {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelOpenAck",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelOpenAck.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelOpenAck doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelOpenAck = MsgChannelOpenAck;
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */ class MsgChannelOpenConfirm {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelOpenConfirm.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelOpenConfirm doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelOpenConfirm = MsgChannelOpenConfirm;
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */ class MsgChannelCloseInit {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelCloseInit.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelCloseInit doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelCloseInit = MsgChannelCloseInit;
/** MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of channel state to CLOSED on Chain A. */ class MsgChannelCloseConfirm {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelCloseConfirm.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelCloseConfirm doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelCloseConfirm = MsgChannelCloseConfirm;
class MsgChannelUpgradeInit {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelUpgradeInit.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelUpgradeInit doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelUpgradeInit = MsgChannelUpgradeInit;
class MsgChannelUpgradeTry {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelUpgradeTry.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelUpgradeTry doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelUpgradeTry = MsgChannelUpgradeTry;
class MsgChannelUpgradeAck {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelUpgradeAck.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelUpgradeAck doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelUpgradeAck = MsgChannelUpgradeAck;
class MsgChannelUpgradeOpen {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelUpgradeOpen.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelUpgradeOpen doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelUpgradeOpen = MsgChannelUpgradeOpen;
class MsgChannelUpgradeTimeout {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelUpgradeTimeout.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelUpgradeTimeout doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelUpgradeTimeout = MsgChannelUpgradeTimeout;
class MsgChannelUpgradeCancel {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
                value: this.msg,
                encode: ()=>tx_1.MsgChannelUpgradeCancel.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgChannelUpgradeCancel doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelUpgradeCancel = MsgChannelUpgradeCancel;
class MsgPruneAcknowledgements {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
                value: this.msg,
                encode: ()=>tx_1.MsgPruneAcknowledgements.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgPruneAcknowledgements doesn't support Amino encoding.");
        });
    }
}
exports.MsgPruneAcknowledgements = MsgPruneAcknowledgements; //# sourceMappingURL=ibc_channel.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_client.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgIBCSoftwareUpgrade = exports.MsgRecoverClient = exports.MsgCreateClient = exports.MsgSubmitMisbehaviour = exports.MsgUpgradeClient = exports.MsgUpdateClient = exports.MsgIBCSoftwareUpgradeParams = exports.MsgRecoverClientParams = exports.MsgSubmitMisbehaviourParams = exports.MsgUpgradeClientParams = exports.MsgUpdateClientParams = exports.MsgCreateClientParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/client/v1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/client/v1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgCreateClientParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgCreateClient;
    }
});
Object.defineProperty(exports, "MsgUpdateClientParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgUpdateClient;
    }
});
Object.defineProperty(exports, "MsgUpgradeClientParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgUpgradeClient;
    }
});
Object.defineProperty(exports, "MsgSubmitMisbehaviourParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgSubmitMisbehaviour;
    }
});
Object.defineProperty(exports, "MsgRecoverClientParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgRecoverClient;
    }
});
Object.defineProperty(exports, "MsgIBCSoftwareUpgradeParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgIBCSoftwareUpgrade;
    }
});
/** MsgUpdateClient defines an sdk.Msg to update a IBC client state using the given header. */ class MsgUpdateClient {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.client.v1.MsgUpdateClient",
                value: this.msg,
                encode: ()=>tx_1.MsgUpdateClient.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgUpdateClient doesn't support Amino encoding.");
        });
    }
}
exports.MsgUpdateClient = MsgUpdateClient;
/** MsgUpdateClient defines an sdk.Msg to update a IBC client state using the given header. */ class MsgUpgradeClient {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.client.v1.MsgUpgradeClient",
                value: this.msg,
                encode: ()=>tx_1.MsgUpgradeClient.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgUpgradeClient doesn't support Amino encoding.");
        });
    }
}
exports.MsgUpgradeClient = MsgUpgradeClient;
/** MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for light client misbehaviour. */ class MsgSubmitMisbehaviour {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: this.msg,
                encode: ()=>tx_1.MsgSubmitMisbehaviour.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgSubmitMisbehaviour doesn't support Amino encoding.");
        });
    }
}
exports.MsgSubmitMisbehaviour = MsgSubmitMisbehaviour;
/** MsgCreateClient defines a message to create an IBC client */ class MsgCreateClient {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.client.v1.MsgCreateClient",
                value: this.msg,
                encode: ()=>tx_1.MsgCreateClient.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgCreateClient doesn't support Amino encoding.");
        });
    }
}
exports.MsgCreateClient = MsgCreateClient;
class MsgRecoverClient {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.client.v1.MsgRecoverClient",
                value: this.msg,
                encode: ()=>tx_1.MsgRecoverClient.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgRecoverClient doesn't support Amino encoding.");
        });
    }
}
exports.MsgRecoverClient = MsgRecoverClient;
class MsgIBCSoftwareUpgrade {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
                value: this.msg,
                encode: ()=>tx_1.MsgIBCSoftwareUpgrade.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgIBCSoftwareUpgrade doesn't support Amino encoding.");
        });
    }
}
exports.MsgIBCSoftwareUpgrade = MsgIBCSoftwareUpgrade; //# sourceMappingURL=ibc_client.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_connection.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgConnectionOpenConfirm = exports.MsgConnectionOpenAck = exports.MsgConnectionOpenTry = exports.MsgConnectionOpenInit = exports.MsgConnectionOpenConfirmParams = exports.MsgConnectionOpenAckParams = exports.MsgConnectionOpenTryParams = exports.MsgConnectionOpenInitParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/connection/v1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/connection/v1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgConnectionOpenInitParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgConnectionOpenInit;
    }
});
Object.defineProperty(exports, "MsgConnectionOpenTryParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgConnectionOpenTry;
    }
});
Object.defineProperty(exports, "MsgConnectionOpenAckParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgConnectionOpenAck;
    }
});
Object.defineProperty(exports, "MsgConnectionOpenConfirmParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgConnectionOpenConfirm;
    }
});
/** MsgConnectionOpenInit defines the msg sent by an account on Chain A to initialize a connection with Chain B. */ class MsgConnectionOpenInit {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: this.msg,
                encode: ()=>tx_1.MsgConnectionOpenInit.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgConnectionOpenInit doesn't support Amino encoding.");
        });
    }
}
exports.MsgConnectionOpenInit = MsgConnectionOpenInit;
/** MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a connection on Chain B. */ class MsgConnectionOpenTry {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: this.msg,
                encode: ()=>tx_1.MsgConnectionOpenTry.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgConnectionOpenTry doesn't support Amino encoding.");
        });
    }
}
exports.MsgConnectionOpenTry = MsgConnectionOpenTry;
/** MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to acknowledge the change of connection state to TRYOPEN on Chain B. */ class MsgConnectionOpenAck {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: this.msg,
                encode: ()=>tx_1.MsgConnectionOpenAck.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgConnectionOpenAck doesn't support Amino encoding.");
        });
    }
}
exports.MsgConnectionOpenAck = MsgConnectionOpenAck;
/** MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of connection state to OPEN on Chain A. */ class MsgConnectionOpenConfirm {
    constructor(msg){
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: this.msg,
                encode: ()=>tx_1.MsgConnectionOpenConfirm.encode(this.msg).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgConnectionOpenConfirm doesn't support Amino encoding.");
        });
    }
}
exports.MsgConnectionOpenConfirm = MsgConnectionOpenConfirm; //# sourceMappingURL=ibc_connection.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_fee.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgPayPacketFeeAsync = exports.MsgPayPacketFee = exports.MsgRegisterCounterpartyPayee = exports.MsgRegisterPayee = exports.MsgRegisterPayeeParams = exports.MsgRegisterCounterpartyPayeeParams = exports.MsgPayPacketFeeParams = exports.MsgPayPacketFeeAsyncParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/applications/fee/v1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/applications/fee/v1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgPayPacketFeeAsyncParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgPayPacketFeeAsync;
    }
});
Object.defineProperty(exports, "MsgPayPacketFeeParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgPayPacketFee;
    }
});
Object.defineProperty(exports, "MsgRegisterCounterpartyPayeeParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgRegisterCounterpartyPayee;
    }
});
Object.defineProperty(exports, "MsgRegisterPayeeParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgRegisterPayee;
    }
});
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */ class MsgRegisterPayee {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.applications.fee.v1.MsgRegisterPayee",
                value: this.params,
                encode: ()=>tx_1.MsgRegisterPayee.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgRegisterPayee",
                value: this.params
            };
        });
    }
}
exports.MsgRegisterPayee = MsgRegisterPayee;
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */ class MsgRegisterCounterpartyPayee {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
                value: this.params,
                encode: ()=>tx_1.MsgRegisterCounterpartyPayee.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgRegisterCounterpartyPayee",
                value: this.params
            };
        });
    }
}
exports.MsgRegisterCounterpartyPayee = MsgRegisterCounterpartyPayee;
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */ class MsgPayPacketFee {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.applications.fee.v1.MsgPayPacketFee",
                value: this.params,
                encode: ()=>tx_1.MsgPayPacketFee.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgPayPacketFee",
                value: this.params
            };
        });
    }
}
exports.MsgPayPacketFee = MsgPayPacketFee;
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */ class MsgPayPacketFeeAsync {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
                value: this.params,
                encode: ()=>tx_1.MsgPayPacketFeeAsync.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgPayPacketFeeAsync",
                value: this.params
            };
        });
    }
}
exports.MsgPayPacketFeeAsync = MsgPayPacketFeeAsync; //# sourceMappingURL=ibc_fee.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_transfer.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgTransfer = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/applications/transfer/v1/tx.js [app-ssr] (ecmascript)");
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */ class MsgTransfer {
    constructor(params){
        this.params = params;
    }
    toProto() {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            const msgContent = {
                source_port: this.params.source_port,
                source_channel: this.params.source_channel,
                token: this.params.token,
                sender: this.params.sender,
                receiver: this.params.receiver,
                timeout_height: this.params.timeout_height,
                timeout_timestamp: this.params.timeout_timestamp ? `${this.params.timeout_timestamp}000000000` // sec -> ns
                 : "0",
                memo: (_a = this.params.memo) !== null && _a !== void 0 ? _a : ""
            };
            return {
                type_url: "/ibc.applications.transfer.v1.MsgTransfer",
                value: msgContent,
                encode: ()=>tx_1.MsgTransfer.encode(msgContent).finish()
            };
        });
    }
    toAmino() {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgTransfer",
                value: {
                    source_port: this.params.source_port,
                    source_channel: this.params.source_channel,
                    token: this.params.token,
                    sender: this.params.sender,
                    receiver: this.params.receiver,
                    timeout_height: this.params.timeout_height ? {
                        revision_number: this.params.timeout_height.revision_number,
                        revision_height: this.params.timeout_height.revision_height
                    } : {},
                    timeout_timestamp: this.params.timeout_timestamp ? `${this.params.timeout_timestamp}000000000` // sec -> ns
                     : "0",
                    memo: (_a = this.params.memo) !== null && _a !== void 0 ? _a : ""
                }
            };
        });
    }
}
exports.MsgTransfer = MsgTransfer; //# sourceMappingURL=ibc_transfer.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_interchain_accounts.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgSendTx = exports.MsgRegisterInterchainAccount = exports.MsgSendTxParams = exports.MsgRegisterInterchainAccountParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/applications/interchain_accounts/controller/v1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/applications/interchain_accounts/controller/v1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgRegisterInterchainAccountParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgRegisterInterchainAccount;
    }
});
Object.defineProperty(exports, "MsgSendTxParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgSendTx;
    }
});
class MsgRegisterInterchainAccount {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount`,
                value: this.params,
                encode: ()=>tx_1.MsgRegisterInterchainAccount.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("Not implemented. Please use WalletProto");
        });
    }
}
exports.MsgRegisterInterchainAccount = MsgRegisterInterchainAccount;
class MsgSendTx {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/ibc.applications.interchain_accounts.controller.v1.MsgSendTx`,
                value: this.params,
                encode: ()=>tx_1.MsgSendTx.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("Not implemented. Please use WalletProto");
        });
    }
}
exports.MsgSendTx = MsgSendTx; //# sourceMappingURL=ibc_interchain_accounts.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/slashing.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgUnjail = exports.MsgUnjailParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/slashing/v1beta1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/slashing/v1beta1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgUnjailParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgUnjail;
    }
});
/** MsgUnjail defines a message to release a validator from jail. */ class MsgUnjail {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: this.params,
                encode: ()=>tx_1.MsgUnjail.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgUnjail",
                value: {
                    address: this.params.validator_addr
                }
            };
        });
    }
}
exports.MsgUnjail = MsgUnjail; //# sourceMappingURL=slashing.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/staking.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MsgCancelUnbondingDelegation = exports.MsgUndelegate = exports.MsgBeginRedelegate = exports.MsgDelegate = exports.MsgEditValidator = exports.MsgCreateValidator = exports.MsgCancelUnbondingDelegationParams = exports.MsgUndelegateParams = exports.MsgBeginRedelegateParams = exports.MsgDelegateParams = exports.ValidatorDescription = void 0;
const encoding_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)");
const bignumber_js_1 = __importDefault(__turbopack_require__("[project]/node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.mjs [app-ssr] (ecmascript)"));
const keys_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/crypto/ed25519/keys.js [app-ssr] (ecmascript)");
const any_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/google/protobuf/any.js [app-ssr] (ecmascript)");
const staking_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/staking/v1beta1/staking.js [app-ssr] (ecmascript)");
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/staking/v1beta1/tx.js [app-ssr] (ecmascript)");
var staking_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/staking/v1beta1/staking.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "ValidatorDescription", {
    enumerable: true,
    get: function() {
        return staking_2.Description;
    }
});
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/staking/v1beta1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgDelegateParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgDelegate;
    }
});
Object.defineProperty(exports, "MsgBeginRedelegateParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgBeginRedelegate;
    }
});
Object.defineProperty(exports, "MsgUndelegateParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgUndelegate;
    }
});
Object.defineProperty(exports, "MsgCancelUnbondingDelegationParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgCancelUnbondingDelegation;
    }
});
/** MsgCreateValidator defines an SDK message for creating a new validator. */ class MsgCreateValidator {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            const msgContent = {
                description: this.params.description,
                commission: {
                    rate: new bignumber_js_1.default(this.params.commission.rate).toFixed(18).replace(/0\.0*/, ""),
                    max_rate: new bignumber_js_1.default(this.params.commission.max_rate).toFixed(18).replace(/0\.0*/, ""),
                    max_change_rate: new bignumber_js_1.default(this.params.commission.max_change_rate).toFixed(18).replace(/0\.0*/, "")
                },
                min_self_delegation: this.params.min_self_delegation,
                delegator_address: this.params.delegator_address,
                validator_address: (0, encoding_1.toBech32)("secretvaloper", (0, encoding_1.fromBech32)(this.params.delegator_address).data),
                pubkey: any_1.Any.fromPartial({
                    type_url: "/cosmos.crypto.ed25519.PubKey",
                    value: keys_1.PubKey.encode(keys_1.PubKey.fromPartial({
                        key: (0, encoding_1.fromBase64)(this.params.pubkey)
                    })).finish()
                }),
                value: this.params.initial_delegation
            };
            return {
                type_url: `/cosmos.staking.v1beta1.MsgCreateValidator`,
                value: msgContent,
                encode: ()=>tx_1.MsgCreateValidator.encode(msgContent).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgCreateValidator",
                value: {
                    description: {
                        moniker: this.params.description.moniker,
                        identity: this.params.description.identity,
                        website: this.params.description.website,
                        security_contact: this.params.description.security_contact,
                        details: this.params.description.details
                    },
                    commission: {
                        rate: new bignumber_js_1.default(this.params.commission.rate).toFixed(18).replace(/0\.0*/, ""),
                        max_rate: new bignumber_js_1.default(this.params.commission.max_rate).toFixed(18).replace(/0\.0*/, ""),
                        max_change_rate: new bignumber_js_1.default(this.params.commission.max_change_rate).toFixed(18).replace(/0\.0*/, "")
                    },
                    min_self_delegation: this.params.min_self_delegation,
                    delegator_address: this.params.delegator_address,
                    validator_address: (0, encoding_1.toBech32)("secretvaloper", (0, encoding_1.fromBech32)(this.params.delegator_address).data),
                    pubkey: {
                        type: "tendermint/PubKeyEd25519",
                        value: this.params.pubkey
                    },
                    value: this.params.initial_delegation
                }
            };
        });
    }
}
exports.MsgCreateValidator = MsgCreateValidator;
/** MsgEditValidator defines an SDK message for editing an existing validator. */ class MsgEditValidator {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            const msgContent = {
                validator_address: this.params.validator_address,
                description: staking_1.Description.fromPartial(this.params.description || {}),
                commission_rate: this.params.commission_rate ? new bignumber_js_1.default(this.params.commission_rate).toFixed(18).replace(/0\.0*/, "") : "",
                min_self_delegation: this.params.min_self_delegation || ""
            };
            return {
                type_url: `/cosmos.staking.v1beta1.MsgEditValidator`,
                value: msgContent,
                encode: ()=>tx_1.MsgEditValidator.encode(msgContent).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            let description;
            if (this.params.description) {
                description = {
                    moniker: this.params.description.moniker,
                    identity: this.params.description.identity,
                    website: this.params.description.website,
                    security_contact: this.params.description.security_contact,
                    details: this.params.description.details
                };
            }
            let commission_rate;
            if (this.params.commission_rate) {
                commission_rate = new bignumber_js_1.default(this.params.commission_rate).toFixed(18);
            }
            return {
                type: "cosmos-sdk/MsgEditValidator",
                value: {
                    validator_address: this.params.validator_address,
                    description,
                    commission_rate,
                    min_self_delegation: this.params.min_self_delegation
                }
            };
        });
    }
}
exports.MsgEditValidator = MsgEditValidator;
/** MsgDelegate defines an SDK message for performing a delegation of coins from a delegator to a validator. */ class MsgDelegate {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/cosmos.staking.v1beta1.MsgDelegate`,
                value: this.params,
                encode: ()=>tx_1.MsgDelegate.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgDelegate",
                value: this.params
            };
        });
    }
}
exports.MsgDelegate = MsgDelegate;
/** MsgBeginRedelegate defines an SDK message for performing a redelegation of coins from a delegator and source validator to a destination validator. */ class MsgBeginRedelegate {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/cosmos.staking.v1beta1.MsgBeginRedelegate`,
                value: this.params,
                encode: ()=>tx_1.MsgBeginRedelegate.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgBeginRedelegate",
                value: this.params
            };
        });
    }
}
exports.MsgBeginRedelegate = MsgBeginRedelegate;
/** MsgUndelegate defines an SDK message for performing an undelegation from a delegate and a validator */ class MsgUndelegate {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/cosmos.staking.v1beta1.MsgUndelegate`,
                value: this.params,
                encode: ()=>tx_1.MsgUndelegate.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgUndelegate",
                value: this.params
            };
        });
    }
}
exports.MsgUndelegate = MsgUndelegate;
class MsgCancelUnbondingDelegation {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation`,
                value: this.params,
                encode: ()=>tx_1.MsgCancelUnbondingDelegation.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "cosmos-sdk/MsgCancelUnbondingDelegation",
                value: this.params
            };
        });
    }
}
exports.MsgCancelUnbondingDelegation = MsgCancelUnbondingDelegation; //# sourceMappingURL=staking.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/types.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
}); //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/upgrade.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgCancelUpgrade = exports.MsgSoftwareUpgrade = exports.MsgCancelUpgradeParams = exports.MsgSoftwareUpgradeParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/upgrade/v1beta1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/upgrade/v1beta1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgSoftwareUpgradeParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgSoftwareUpgrade;
    }
});
Object.defineProperty(exports, "MsgCancelUpgradeParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgCancelUpgrade;
    }
});
class MsgSoftwareUpgrade {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade`,
                value: this.params,
                encode: ()=>tx_1.MsgSoftwareUpgrade.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("Not implemented. Please use WalletProto");
        });
    }
}
exports.MsgSoftwareUpgrade = MsgSoftwareUpgrade;
class MsgCancelUpgrade {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: `/cosmos.upgrade.v1beta1.MsgCancelUpgrade`,
                value: this.params,
                encode: ()=>tx_1.MsgCancelUpgrade.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("Not implemented. Please use WalletProto");
        });
    }
}
exports.MsgCancelUpgrade = MsgCancelUpgrade; //# sourceMappingURL=upgrade.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/vesting.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgCreatePeriodicVestingAccount = exports.MsgCreatePermanentLockedAccount = exports.MsgCreateVestingAccount = exports.MsgCreatePeriodicVestingAccountParams = exports.MsgCreatePermanentLockedAccountParams = exports.MsgCreateVestingAccountParams = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/vesting/v1beta1/tx.js [app-ssr] (ecmascript)");
var tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/vesting/v1beta1/tx.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "MsgCreateVestingAccountParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgCreateVestingAccount;
    }
});
Object.defineProperty(exports, "MsgCreatePermanentLockedAccountParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgCreatePermanentLockedAccount;
    }
});
Object.defineProperty(exports, "MsgCreatePeriodicVestingAccountParams", {
    enumerable: true,
    get: function() {
        return tx_2.MsgCreatePeriodicVestingAccount;
    }
});
/** MsgCreateVestingAccount defines a message that enables creating a vesting account. */ class MsgCreateVestingAccount {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: this.params,
                encode: ()=>tx_1.MsgCreateVestingAccount.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgCreateVestingAccount not implemented.");
        });
    }
}
exports.MsgCreateVestingAccount = MsgCreateVestingAccount;
class MsgCreatePermanentLockedAccount {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
                value: this.params,
                encode: ()=>tx_1.MsgCreatePermanentLockedAccount.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgCreatePermanentLockedAccount not implemented.");
        });
    }
}
exports.MsgCreatePermanentLockedAccount = MsgCreatePermanentLockedAccount;
class MsgCreatePeriodicVestingAccount {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type_url: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
                value: this.params,
                encode: ()=>tx_1.MsgCreatePeriodicVestingAccount.encode(this.params).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            throw new Error("MsgCreatePeriodicVestingAccount not implemented.");
        });
    }
}
exports.MsgCreatePeriodicVestingAccount = MsgCreatePeriodicVestingAccount; //# sourceMappingURL=vesting.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.MsgRegistry = void 0;
const tx_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/upgrade/v1beta1/tx.js [app-ssr] (ecmascript)");
const tx_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/authz/v1beta1/tx.js [app-ssr] (ecmascript)");
const tx_3 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/applications/interchain_accounts/controller/v1/tx.js [app-ssr] (ecmascript)");
const tx_4 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/bank/v1beta1/tx.js [app-ssr] (ecmascript)");
const tx_5 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/crisis/v1beta1/tx.js [app-ssr] (ecmascript)");
const tx_6 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/distribution/v1beta1/tx.js [app-ssr] (ecmascript)");
const tx_7 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/evidence/v1beta1/tx.js [app-ssr] (ecmascript)");
const tx_8 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/feegrant/v1beta1/tx.js [app-ssr] (ecmascript)");
const tx_9 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/gov/v1/tx.js [app-ssr] (ecmascript)");
const tx_10 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/slashing/v1beta1/tx.js [app-ssr] (ecmascript)");
const tx_11 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/staking/v1beta1/tx.js [app-ssr] (ecmascript)");
const tx_12 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/cosmos/vesting/v1beta1/tx.js [app-ssr] (ecmascript)");
const tx_13 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/applications/fee/v1/tx.js [app-ssr] (ecmascript)");
const tx_14 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/applications/transfer/v1/tx.js [app-ssr] (ecmascript)");
const tx_15 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/channel/v1/tx.js [app-ssr] (ecmascript)");
const tx_16 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/client/v1/tx.js [app-ssr] (ecmascript)");
const tx_17 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/ibc/core/connection/v1/tx.js [app-ssr] (ecmascript)");
const msg_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/secret/compute/v1beta1/msg.js [app-ssr] (ecmascript)");
const tx_18 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/secret/emergencybutton/v1beta1/tx.js [app-ssr] (ecmascript)");
const msg_2 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/secret/registration/v1beta1/msg.js [app-ssr] (ecmascript)");
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/authz.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/bank.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/compute.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/crisis.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/distribution.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/emergency_button.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/evidence.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/feegrant.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/gov.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_channel.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_client.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_connection.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_fee.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_transfer.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/ibc_interchain_accounts.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/slashing.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/staking.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/types.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/upgrade.js [app-ssr] (ecmascript)"), exports);
__exportStar(__turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/vesting.js [app-ssr] (ecmascript)"), exports);
exports.MsgRegistry = new Map([
    [
        "/cosmos.authz.v1beta1.MsgGrant",
        tx_2.MsgGrant
    ],
    [
        "/cosmos.authz.v1beta1.MsgExec",
        tx_2.MsgExec
    ],
    [
        "/cosmos.authz.v1beta1.MsgRevoke",
        tx_2.MsgRevoke
    ],
    [
        "/cosmos.bank.v1beta1.MsgSend",
        tx_4.MsgSend
    ],
    [
        "/cosmos.bank.v1beta1.MsgMultiSend",
        tx_4.MsgMultiSend
    ],
    [
        "/cosmos.bank.v1beta1.MsgSetSendEnabled",
        tx_4.MsgSetSendEnabled
    ],
    [
        "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
        tx_5.MsgVerifyInvariant
    ],
    [
        "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
        tx_6.MsgSetWithdrawAddress
    ],
    [
        "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        tx_6.MsgWithdrawDelegatorReward
    ],
    [
        "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
        tx_6.MsgWithdrawValidatorCommission
    ],
    [
        "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
        tx_6.MsgFundCommunityPool
    ],
    [
        "/cosmos.distribution.v1beta1.MsgSetAutoRestake",
        tx_6.MsgSetAutoRestake
    ],
    [
        "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        tx_6.MsgCommunityPoolSpend
    ],
    [
        "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
        tx_6.MsgDepositValidatorRewardsPool
    ],
    [
        "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
        tx_7.MsgSubmitEvidence
    ],
    [
        "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
        tx_8.MsgGrantAllowance
    ],
    [
        "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
        tx_8.MsgRevokeAllowance
    ],
    [
        "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
        tx_8.MsgPruneAllowances
    ],
    [
        "/cosmos.gov.v1.MsgSubmitProposal",
        tx_9.MsgSubmitProposal
    ],
    [
        "/cosmos.gov.v1.MsgVote",
        tx_9.MsgVote
    ],
    [
        "/cosmos.gov.v1.MsgVoteWeighted",
        tx_9.MsgVoteWeighted
    ],
    [
        "/cosmos.gov.v1.MsgDeposit",
        tx_9.MsgDeposit
    ],
    [
        "/cosmos.gov.v1.MsgCancelProposal",
        tx_9.MsgCancelProposal
    ],
    [
        "/cosmos.gov.v1.MsgExecLegacyContent",
        tx_9.MsgExecLegacyContent
    ],
    [
        "/cosmos.slashing.v1beta1.MsgUnjail",
        tx_10.MsgUnjail
    ],
    [
        "/cosmos.staking.v1beta1.MsgCreateValidator",
        tx_11.MsgCreateValidator
    ],
    [
        "/cosmos.staking.v1beta1.MsgEditValidator",
        tx_11.MsgEditValidator
    ],
    [
        "/cosmos.staking.v1beta1.MsgDelegate",
        tx_11.MsgDelegate
    ],
    [
        "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        tx_11.MsgBeginRedelegate
    ],
    [
        "/cosmos.staking.v1beta1.MsgUndelegate",
        tx_11.MsgUndelegate
    ],
    [
        "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        tx_11.MsgCancelUnbondingDelegation
    ],
    [
        "/ibc.applications.transfer.v1.MsgTransfer",
        tx_14.MsgTransfer
    ],
    [
        "/ibc.applications.fee.v1.MsgPayPacketFee",
        tx_13.MsgPayPacketFee
    ],
    [
        "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
        tx_13.MsgPayPacketFeeAsync
    ],
    [
        "/ibc.applications.fee.v1.MsgRegisterPayee",
        tx_13.MsgRegisterPayee
    ],
    [
        "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
        tx_13.MsgRegisterCounterpartyPayee
    ],
    [
        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        tx_3.MsgSendTx
    ],
    [
        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        tx_3.MsgRegisterInterchainAccount
    ],
    [
        "/ibc.core.channel.v1.MsgChannelOpenInit",
        tx_15.MsgChannelOpenInit
    ],
    [
        "/ibc.core.channel.v1.MsgChannelOpenTry",
        tx_15.MsgChannelOpenTry
    ],
    [
        "/ibc.core.channel.v1.MsgChannelOpenAck",
        tx_15.MsgChannelOpenAck
    ],
    [
        "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        tx_15.MsgChannelOpenConfirm
    ],
    [
        "/ibc.core.channel.v1.MsgChannelCloseInit",
        tx_15.MsgChannelCloseInit
    ],
    [
        "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        tx_15.MsgChannelCloseConfirm
    ],
    [
        "/ibc.core.channel.v1.MsgRecvPacket",
        tx_15.MsgRecvPacket
    ],
    [
        "/ibc.core.channel.v1.MsgTimeout",
        tx_15.MsgTimeout
    ],
    [
        "/ibc.core.channel.v1.MsgTimeoutOnClose",
        tx_15.MsgTimeoutOnClose
    ],
    [
        "/ibc.core.channel.v1.MsgAcknowledgement",
        tx_15.MsgAcknowledgement
    ],
    [
        "/ibc.core.channel.v1.MsgChannelUpgradeInit",
        tx_15.MsgChannelUpgradeInit
    ],
    [
        "/ibc.core.channel.v1.MsgChannelUpgradeTry",
        tx_15.MsgChannelUpgradeTry
    ],
    [
        "/ibc.core.channel.v1.MsgChannelUpgradeAck",
        tx_15.MsgChannelUpgradeAck
    ],
    [
        "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
        tx_15.MsgChannelUpgradeOpen
    ],
    [
        "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
        tx_15.MsgChannelUpgradeTimeout
    ],
    [
        "/ibc.core.channel.v1.MsgPruneAcknowledgements",
        tx_15.MsgPruneAcknowledgements
    ],
    [
        "/ibc.core.client.v1.MsgCreateClient",
        tx_16.MsgCreateClient
    ],
    [
        "/ibc.core.client.v1.MsgUpdateClient",
        tx_16.MsgUpdateClient
    ],
    [
        "/ibc.core.client.v1.MsgUpgradeClient",
        tx_16.MsgUpgradeClient
    ],
    [
        "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        tx_16.MsgSubmitMisbehaviour
    ],
    [
        "/ibc.core.client.v1.MsgRecoverClient",
        tx_16.MsgRecoverClient
    ],
    [
        "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
        tx_16.MsgIBCSoftwareUpgrade
    ],
    [
        "/ibc.core.connection.v1.MsgConnectionOpenInit",
        tx_17.MsgConnectionOpenInit
    ],
    [
        "/ibc.core.connection.v1.MsgConnectionOpenTry",
        tx_17.MsgConnectionOpenTry
    ],
    [
        "/ibc.core.connection.v1.MsgConnectionOpenAck",
        tx_17.MsgConnectionOpenAck
    ],
    [
        "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        tx_17.MsgConnectionOpenConfirm
    ],
    [
        "/secret.compute.v1beta1.MsgStoreCode",
        msg_1.MsgStoreCode
    ],
    [
        "/secret.compute.v1beta1.MsgInstantiateContract",
        msg_1.MsgInstantiateContract
    ],
    [
        "/secret.compute.v1beta1.MsgExecuteContract",
        msg_1.MsgExecuteContract
    ],
    [
        "/secret.compute.v1beta1.MsgMigrateContract",
        msg_1.MsgMigrateContract
    ],
    [
        "/secret.compute.v1beta1.MsgUpdateAdmin",
        msg_1.MsgUpdateAdmin
    ],
    [
        "/secret.compute.v1beta1.MsgClearAdmin",
        msg_1.MsgClearAdmin
    ],
    [
        "/secret.registration.v1beta1.RaAuthenticate",
        msg_2.RaAuthenticate
    ],
    [
        "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
        tx_12.MsgCreateVestingAccount
    ],
    [
        "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
        tx_12.MsgCreatePermanentLockedAccount
    ],
    [
        "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
        tx_12.MsgCreatePeriodicVestingAccount
    ],
    [
        "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        tx_1.MsgSoftwareUpgrade
    ],
    [
        "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
        tx_1.MsgCancelUpgrade
    ],
    [
        "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch",
        tx_18.MsgToggleIbcSwitch
    ]
]); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/tx/registration.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

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
exports.RaAuthenticate = void 0;
const encoding_1 = __turbopack_require__("[project]/node_modules/.pnpm/@cosmjs+encoding@0.32.3/node_modules/@cosmjs/encoding/build/index.js [app-ssr] (ecmascript)");
const utils_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/utils.js [app-ssr] (ecmascript)");
const msg_1 = __turbopack_require__("[project]/node_modules/.pnpm/secretjs@1.15.1_encoding@0.1.13/node_modules/secretjs/dist/protobuf/secret/registration/v1beta1/msg.js [app-ssr] (ecmascript)");
/** RaAuthenticate defines a message to register an new node. */ class RaAuthenticate {
    constructor(params){
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function*() {
            const msgContent = {
                sender: (0, utils_1.addressToBytes)(this.params.sender),
                certificate: this.params.certificate
            };
            return {
                type_url: "/secret.registration.v1beta1.RaAuthenticate",
                value: msgContent,
                encode: ()=>msg_1.RaAuthenticate.encode(msgContent).finish()
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function*() {
            return {
                type: "reg/authenticate",
                value: {
                    sender: this.params.sender,
                    ra_cert: (0, encoding_1.toBase64)(this.params.certificate)
                }
            };
        });
    }
}
exports.RaAuthenticate = RaAuthenticate; //# sourceMappingURL=registration.js.map
}}),

};

//# sourceMappingURL=5b0a5_secretjs_dist_tx_ffb82f._.js.map