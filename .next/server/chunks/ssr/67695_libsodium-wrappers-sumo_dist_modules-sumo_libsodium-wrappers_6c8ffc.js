module.exports = {

"[project]/node_modules/.pnpm/libsodium-wrappers-sumo@0.7.15/node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
!function(e) {
    function a(e, a) {
        "use strict";
        var r, t = "uint8array", _ = a.ready.then(function() {
            function t() {
                if (0 !== r._sodium_init()) throw new Error("libsodium was not correctly initialized.");
                for(var a = [
                    "crypto_aead_aegis128l_decrypt",
                    "crypto_aead_aegis128l_decrypt_detached",
                    "crypto_aead_aegis128l_encrypt",
                    "crypto_aead_aegis128l_encrypt_detached",
                    "crypto_aead_aegis128l_keygen",
                    "crypto_aead_aegis256_decrypt",
                    "crypto_aead_aegis256_decrypt_detached",
                    "crypto_aead_aegis256_encrypt",
                    "crypto_aead_aegis256_encrypt_detached",
                    "crypto_aead_aegis256_keygen",
                    "crypto_aead_chacha20poly1305_decrypt",
                    "crypto_aead_chacha20poly1305_decrypt_detached",
                    "crypto_aead_chacha20poly1305_encrypt",
                    "crypto_aead_chacha20poly1305_encrypt_detached",
                    "crypto_aead_chacha20poly1305_ietf_decrypt",
                    "crypto_aead_chacha20poly1305_ietf_decrypt_detached",
                    "crypto_aead_chacha20poly1305_ietf_encrypt",
                    "crypto_aead_chacha20poly1305_ietf_encrypt_detached",
                    "crypto_aead_chacha20poly1305_ietf_keygen",
                    "crypto_aead_chacha20poly1305_keygen",
                    "crypto_aead_xchacha20poly1305_ietf_decrypt",
                    "crypto_aead_xchacha20poly1305_ietf_decrypt_detached",
                    "crypto_aead_xchacha20poly1305_ietf_encrypt",
                    "crypto_aead_xchacha20poly1305_ietf_encrypt_detached",
                    "crypto_aead_xchacha20poly1305_ietf_keygen",
                    "crypto_auth",
                    "crypto_auth_hmacsha256",
                    "crypto_auth_hmacsha256_final",
                    "crypto_auth_hmacsha256_init",
                    "crypto_auth_hmacsha256_keygen",
                    "crypto_auth_hmacsha256_update",
                    "crypto_auth_hmacsha256_verify",
                    "crypto_auth_hmacsha512",
                    "crypto_auth_hmacsha512256",
                    "crypto_auth_hmacsha512256_final",
                    "crypto_auth_hmacsha512256_init",
                    "crypto_auth_hmacsha512256_keygen",
                    "crypto_auth_hmacsha512256_update",
                    "crypto_auth_hmacsha512256_verify",
                    "crypto_auth_hmacsha512_final",
                    "crypto_auth_hmacsha512_init",
                    "crypto_auth_hmacsha512_keygen",
                    "crypto_auth_hmacsha512_update",
                    "crypto_auth_hmacsha512_verify",
                    "crypto_auth_keygen",
                    "crypto_auth_verify",
                    "crypto_box_beforenm",
                    "crypto_box_curve25519xchacha20poly1305_beforenm",
                    "crypto_box_curve25519xchacha20poly1305_detached",
                    "crypto_box_curve25519xchacha20poly1305_detached_afternm",
                    "crypto_box_curve25519xchacha20poly1305_easy",
                    "crypto_box_curve25519xchacha20poly1305_easy_afternm",
                    "crypto_box_curve25519xchacha20poly1305_keypair",
                    "crypto_box_curve25519xchacha20poly1305_open_detached",
                    "crypto_box_curve25519xchacha20poly1305_open_detached_afternm",
                    "crypto_box_curve25519xchacha20poly1305_open_easy",
                    "crypto_box_curve25519xchacha20poly1305_open_easy_afternm",
                    "crypto_box_curve25519xchacha20poly1305_seal",
                    "crypto_box_curve25519xchacha20poly1305_seal_open",
                    "crypto_box_curve25519xchacha20poly1305_seed_keypair",
                    "crypto_box_detached",
                    "crypto_box_easy",
                    "crypto_box_easy_afternm",
                    "crypto_box_keypair",
                    "crypto_box_open_detached",
                    "crypto_box_open_easy",
                    "crypto_box_open_easy_afternm",
                    "crypto_box_seal",
                    "crypto_box_seal_open",
                    "crypto_box_seed_keypair",
                    "crypto_core_ed25519_add",
                    "crypto_core_ed25519_from_hash",
                    "crypto_core_ed25519_from_uniform",
                    "crypto_core_ed25519_is_valid_point",
                    "crypto_core_ed25519_random",
                    "crypto_core_ed25519_scalar_add",
                    "crypto_core_ed25519_scalar_complement",
                    "crypto_core_ed25519_scalar_invert",
                    "crypto_core_ed25519_scalar_mul",
                    "crypto_core_ed25519_scalar_negate",
                    "crypto_core_ed25519_scalar_random",
                    "crypto_core_ed25519_scalar_reduce",
                    "crypto_core_ed25519_scalar_sub",
                    "crypto_core_ed25519_sub",
                    "crypto_core_hchacha20",
                    "crypto_core_hsalsa20",
                    "crypto_core_ristretto255_add",
                    "crypto_core_ristretto255_from_hash",
                    "crypto_core_ristretto255_is_valid_point",
                    "crypto_core_ristretto255_random",
                    "crypto_core_ristretto255_scalar_add",
                    "crypto_core_ristretto255_scalar_complement",
                    "crypto_core_ristretto255_scalar_invert",
                    "crypto_core_ristretto255_scalar_mul",
                    "crypto_core_ristretto255_scalar_negate",
                    "crypto_core_ristretto255_scalar_random",
                    "crypto_core_ristretto255_scalar_reduce",
                    "crypto_core_ristretto255_scalar_sub",
                    "crypto_core_ristretto255_sub",
                    "crypto_generichash",
                    "crypto_generichash_blake2b_salt_personal",
                    "crypto_generichash_final",
                    "crypto_generichash_init",
                    "crypto_generichash_keygen",
                    "crypto_generichash_update",
                    "crypto_hash",
                    "crypto_hash_sha256",
                    "crypto_hash_sha256_final",
                    "crypto_hash_sha256_init",
                    "crypto_hash_sha256_update",
                    "crypto_hash_sha512",
                    "crypto_hash_sha512_final",
                    "crypto_hash_sha512_init",
                    "crypto_hash_sha512_update",
                    "crypto_kdf_derive_from_key",
                    "crypto_kdf_keygen",
                    "crypto_kx_client_session_keys",
                    "crypto_kx_keypair",
                    "crypto_kx_seed_keypair",
                    "crypto_kx_server_session_keys",
                    "crypto_onetimeauth",
                    "crypto_onetimeauth_final",
                    "crypto_onetimeauth_init",
                    "crypto_onetimeauth_keygen",
                    "crypto_onetimeauth_update",
                    "crypto_onetimeauth_verify",
                    "crypto_pwhash",
                    "crypto_pwhash_scryptsalsa208sha256",
                    "crypto_pwhash_scryptsalsa208sha256_ll",
                    "crypto_pwhash_scryptsalsa208sha256_str",
                    "crypto_pwhash_scryptsalsa208sha256_str_verify",
                    "crypto_pwhash_str",
                    "crypto_pwhash_str_needs_rehash",
                    "crypto_pwhash_str_verify",
                    "crypto_scalarmult",
                    "crypto_scalarmult_base",
                    "crypto_scalarmult_ed25519",
                    "crypto_scalarmult_ed25519_base",
                    "crypto_scalarmult_ed25519_base_noclamp",
                    "crypto_scalarmult_ed25519_noclamp",
                    "crypto_scalarmult_ristretto255",
                    "crypto_scalarmult_ristretto255_base",
                    "crypto_secretbox_detached",
                    "crypto_secretbox_easy",
                    "crypto_secretbox_keygen",
                    "crypto_secretbox_open_detached",
                    "crypto_secretbox_open_easy",
                    "crypto_secretstream_xchacha20poly1305_init_pull",
                    "crypto_secretstream_xchacha20poly1305_init_push",
                    "crypto_secretstream_xchacha20poly1305_keygen",
                    "crypto_secretstream_xchacha20poly1305_pull",
                    "crypto_secretstream_xchacha20poly1305_push",
                    "crypto_secretstream_xchacha20poly1305_rekey",
                    "crypto_shorthash",
                    "crypto_shorthash_keygen",
                    "crypto_shorthash_siphashx24",
                    "crypto_sign",
                    "crypto_sign_detached",
                    "crypto_sign_ed25519_pk_to_curve25519",
                    "crypto_sign_ed25519_sk_to_curve25519",
                    "crypto_sign_ed25519_sk_to_pk",
                    "crypto_sign_ed25519_sk_to_seed",
                    "crypto_sign_final_create",
                    "crypto_sign_final_verify",
                    "crypto_sign_init",
                    "crypto_sign_keypair",
                    "crypto_sign_open",
                    "crypto_sign_seed_keypair",
                    "crypto_sign_update",
                    "crypto_sign_verify_detached",
                    "crypto_stream_chacha20",
                    "crypto_stream_chacha20_ietf_xor",
                    "crypto_stream_chacha20_ietf_xor_ic",
                    "crypto_stream_chacha20_keygen",
                    "crypto_stream_chacha20_xor",
                    "crypto_stream_chacha20_xor_ic",
                    "crypto_stream_keygen",
                    "crypto_stream_xchacha20_keygen",
                    "crypto_stream_xchacha20_xor",
                    "crypto_stream_xchacha20_xor_ic",
                    "randombytes_buf",
                    "randombytes_buf_deterministic",
                    "randombytes_close",
                    "randombytes_random",
                    "randombytes_set_implementation",
                    "randombytes_stir",
                    "randombytes_uniform",
                    "sodium_version_string"
                ], t = [
                    x,
                    k,
                    S,
                    T,
                    w,
                    Y,
                    B,
                    A,
                    M,
                    I,
                    K,
                    N,
                    L,
                    O,
                    U,
                    C,
                    P,
                    R,
                    X,
                    G,
                    D,
                    F,
                    V,
                    H,
                    W,
                    q,
                    j,
                    z,
                    J,
                    Q,
                    Z,
                    $,
                    ee,
                    ae,
                    re,
                    te,
                    _e,
                    ne,
                    se,
                    ce,
                    oe,
                    he,
                    pe,
                    ye,
                    ie,
                    le,
                    ue,
                    de,
                    ve,
                    ge,
                    be,
                    fe,
                    me,
                    Ee,
                    xe,
                    ke,
                    Se,
                    Te,
                    we,
                    Ye,
                    Be,
                    Ae,
                    Me,
                    Ie,
                    Ke,
                    Ne,
                    Le,
                    Oe,
                    Ue,
                    Ce,
                    Pe,
                    Re,
                    Xe,
                    Ge,
                    De,
                    Fe,
                    Ve,
                    He,
                    We,
                    qe,
                    je,
                    ze,
                    Je,
                    Qe,
                    Ze,
                    $e,
                    ea,
                    aa,
                    ra,
                    ta,
                    _a,
                    na,
                    sa,
                    ca,
                    oa,
                    ha,
                    pa,
                    ya,
                    ia,
                    la,
                    ua,
                    da,
                    va,
                    ga,
                    ba,
                    fa,
                    ma,
                    Ea,
                    xa,
                    ka,
                    Sa,
                    Ta,
                    wa,
                    Ya,
                    Ba,
                    Aa,
                    Ma,
                    Ia,
                    Ka,
                    Na,
                    La,
                    Oa,
                    Ua,
                    Ca,
                    Pa,
                    Ra,
                    Xa,
                    Ga,
                    Da,
                    Fa,
                    Va,
                    Ha,
                    Wa,
                    qa,
                    ja,
                    za,
                    Ja,
                    Qa,
                    Za,
                    $a,
                    er,
                    ar,
                    rr,
                    tr,
                    _r,
                    nr,
                    sr,
                    cr,
                    or,
                    hr,
                    pr,
                    yr,
                    ir,
                    lr,
                    ur,
                    dr,
                    vr,
                    gr,
                    br,
                    fr,
                    mr,
                    Er,
                    xr,
                    kr,
                    Sr,
                    Tr,
                    wr,
                    Yr,
                    Br,
                    Ar,
                    Mr,
                    Ir,
                    Kr,
                    Nr,
                    Lr,
                    Or,
                    Ur,
                    Cr,
                    Pr,
                    Rr,
                    Xr,
                    Gr,
                    Dr,
                    Fr,
                    Vr,
                    Hr,
                    Wr,
                    qr
                ], _ = 0; _ < t.length; _++)"function" == typeof r["_" + a[_]] && (e[a[_]] = t[_]);
                var n = [
                    "SODIUM_LIBRARY_VERSION_MAJOR",
                    "SODIUM_LIBRARY_VERSION_MINOR",
                    "crypto_aead_aegis128l_ABYTES",
                    "crypto_aead_aegis128l_KEYBYTES",
                    "crypto_aead_aegis128l_MESSAGEBYTES_MAX",
                    "crypto_aead_aegis128l_NPUBBYTES",
                    "crypto_aead_aegis128l_NSECBYTES",
                    "crypto_aead_aegis256_ABYTES",
                    "crypto_aead_aegis256_KEYBYTES",
                    "crypto_aead_aegis256_MESSAGEBYTES_MAX",
                    "crypto_aead_aegis256_NPUBBYTES",
                    "crypto_aead_aegis256_NSECBYTES",
                    "crypto_aead_aes256gcm_ABYTES",
                    "crypto_aead_aes256gcm_KEYBYTES",
                    "crypto_aead_aes256gcm_MESSAGEBYTES_MAX",
                    "crypto_aead_aes256gcm_NPUBBYTES",
                    "crypto_aead_aes256gcm_NSECBYTES",
                    "crypto_aead_chacha20poly1305_ABYTES",
                    "crypto_aead_chacha20poly1305_IETF_ABYTES",
                    "crypto_aead_chacha20poly1305_IETF_KEYBYTES",
                    "crypto_aead_chacha20poly1305_IETF_MESSAGEBYTES_MAX",
                    "crypto_aead_chacha20poly1305_IETF_NPUBBYTES",
                    "crypto_aead_chacha20poly1305_IETF_NSECBYTES",
                    "crypto_aead_chacha20poly1305_KEYBYTES",
                    "crypto_aead_chacha20poly1305_MESSAGEBYTES_MAX",
                    "crypto_aead_chacha20poly1305_NPUBBYTES",
                    "crypto_aead_chacha20poly1305_NSECBYTES",
                    "crypto_aead_chacha20poly1305_ietf_ABYTES",
                    "crypto_aead_chacha20poly1305_ietf_KEYBYTES",
                    "crypto_aead_chacha20poly1305_ietf_MESSAGEBYTES_MAX",
                    "crypto_aead_chacha20poly1305_ietf_NPUBBYTES",
                    "crypto_aead_chacha20poly1305_ietf_NSECBYTES",
                    "crypto_aead_xchacha20poly1305_IETF_ABYTES",
                    "crypto_aead_xchacha20poly1305_IETF_KEYBYTES",
                    "crypto_aead_xchacha20poly1305_IETF_MESSAGEBYTES_MAX",
                    "crypto_aead_xchacha20poly1305_IETF_NPUBBYTES",
                    "crypto_aead_xchacha20poly1305_IETF_NSECBYTES",
                    "crypto_aead_xchacha20poly1305_ietf_ABYTES",
                    "crypto_aead_xchacha20poly1305_ietf_KEYBYTES",
                    "crypto_aead_xchacha20poly1305_ietf_MESSAGEBYTES_MAX",
                    "crypto_aead_xchacha20poly1305_ietf_NPUBBYTES",
                    "crypto_aead_xchacha20poly1305_ietf_NSECBYTES",
                    "crypto_auth_BYTES",
                    "crypto_auth_KEYBYTES",
                    "crypto_auth_hmacsha256_BYTES",
                    "crypto_auth_hmacsha256_KEYBYTES",
                    "crypto_auth_hmacsha512256_BYTES",
                    "crypto_auth_hmacsha512256_KEYBYTES",
                    "crypto_auth_hmacsha512_BYTES",
                    "crypto_auth_hmacsha512_KEYBYTES",
                    "crypto_box_BEFORENMBYTES",
                    "crypto_box_MACBYTES",
                    "crypto_box_MESSAGEBYTES_MAX",
                    "crypto_box_NONCEBYTES",
                    "crypto_box_PUBLICKEYBYTES",
                    "crypto_box_SEALBYTES",
                    "crypto_box_SECRETKEYBYTES",
                    "crypto_box_SEEDBYTES",
                    "crypto_box_curve25519xchacha20poly1305_BEFORENMBYTES",
                    "crypto_box_curve25519xchacha20poly1305_MACBYTES",
                    "crypto_box_curve25519xchacha20poly1305_MESSAGEBYTES_MAX",
                    "crypto_box_curve25519xchacha20poly1305_NONCEBYTES",
                    "crypto_box_curve25519xchacha20poly1305_PUBLICKEYBYTES",
                    "crypto_box_curve25519xchacha20poly1305_SEALBYTES",
                    "crypto_box_curve25519xchacha20poly1305_SECRETKEYBYTES",
                    "crypto_box_curve25519xchacha20poly1305_SEEDBYTES",
                    "crypto_box_curve25519xsalsa20poly1305_BEFORENMBYTES",
                    "crypto_box_curve25519xsalsa20poly1305_MACBYTES",
                    "crypto_box_curve25519xsalsa20poly1305_MESSAGEBYTES_MAX",
                    "crypto_box_curve25519xsalsa20poly1305_NONCEBYTES",
                    "crypto_box_curve25519xsalsa20poly1305_PUBLICKEYBYTES",
                    "crypto_box_curve25519xsalsa20poly1305_SECRETKEYBYTES",
                    "crypto_box_curve25519xsalsa20poly1305_SEEDBYTES",
                    "crypto_core_ed25519_BYTES",
                    "crypto_core_ed25519_HASHBYTES",
                    "crypto_core_ed25519_NONREDUCEDSCALARBYTES",
                    "crypto_core_ed25519_SCALARBYTES",
                    "crypto_core_ed25519_UNIFORMBYTES",
                    "crypto_core_hchacha20_CONSTBYTES",
                    "crypto_core_hchacha20_INPUTBYTES",
                    "crypto_core_hchacha20_KEYBYTES",
                    "crypto_core_hchacha20_OUTPUTBYTES",
                    "crypto_core_hsalsa20_CONSTBYTES",
                    "crypto_core_hsalsa20_INPUTBYTES",
                    "crypto_core_hsalsa20_KEYBYTES",
                    "crypto_core_hsalsa20_OUTPUTBYTES",
                    "crypto_core_ristretto255_BYTES",
                    "crypto_core_ristretto255_HASHBYTES",
                    "crypto_core_ristretto255_NONREDUCEDSCALARBYTES",
                    "crypto_core_ristretto255_SCALARBYTES",
                    "crypto_core_salsa2012_CONSTBYTES",
                    "crypto_core_salsa2012_INPUTBYTES",
                    "crypto_core_salsa2012_KEYBYTES",
                    "crypto_core_salsa2012_OUTPUTBYTES",
                    "crypto_core_salsa208_CONSTBYTES",
                    "crypto_core_salsa208_INPUTBYTES",
                    "crypto_core_salsa208_KEYBYTES",
                    "crypto_core_salsa208_OUTPUTBYTES",
                    "crypto_core_salsa20_CONSTBYTES",
                    "crypto_core_salsa20_INPUTBYTES",
                    "crypto_core_salsa20_KEYBYTES",
                    "crypto_core_salsa20_OUTPUTBYTES",
                    "crypto_generichash_BYTES",
                    "crypto_generichash_BYTES_MAX",
                    "crypto_generichash_BYTES_MIN",
                    "crypto_generichash_KEYBYTES",
                    "crypto_generichash_KEYBYTES_MAX",
                    "crypto_generichash_KEYBYTES_MIN",
                    "crypto_generichash_blake2b_BYTES",
                    "crypto_generichash_blake2b_BYTES_MAX",
                    "crypto_generichash_blake2b_BYTES_MIN",
                    "crypto_generichash_blake2b_KEYBYTES",
                    "crypto_generichash_blake2b_KEYBYTES_MAX",
                    "crypto_generichash_blake2b_KEYBYTES_MIN",
                    "crypto_generichash_blake2b_PERSONALBYTES",
                    "crypto_generichash_blake2b_SALTBYTES",
                    "crypto_hash_BYTES",
                    "crypto_hash_sha256_BYTES",
                    "crypto_hash_sha512_BYTES",
                    "crypto_kdf_BYTES_MAX",
                    "crypto_kdf_BYTES_MIN",
                    "crypto_kdf_CONTEXTBYTES",
                    "crypto_kdf_KEYBYTES",
                    "crypto_kdf_blake2b_BYTES_MAX",
                    "crypto_kdf_blake2b_BYTES_MIN",
                    "crypto_kdf_blake2b_CONTEXTBYTES",
                    "crypto_kdf_blake2b_KEYBYTES",
                    "crypto_kdf_hkdf_sha256_BYTES_MAX",
                    "crypto_kdf_hkdf_sha256_BYTES_MIN",
                    "crypto_kdf_hkdf_sha256_KEYBYTES",
                    "crypto_kdf_hkdf_sha512_BYTES_MAX",
                    "crypto_kdf_hkdf_sha512_BYTES_MIN",
                    "crypto_kdf_hkdf_sha512_KEYBYTES",
                    "crypto_kx_PUBLICKEYBYTES",
                    "crypto_kx_SECRETKEYBYTES",
                    "crypto_kx_SEEDBYTES",
                    "crypto_kx_SESSIONKEYBYTES",
                    "crypto_onetimeauth_BYTES",
                    "crypto_onetimeauth_KEYBYTES",
                    "crypto_onetimeauth_poly1305_BYTES",
                    "crypto_onetimeauth_poly1305_KEYBYTES",
                    "crypto_pwhash_ALG_ARGON2I13",
                    "crypto_pwhash_ALG_ARGON2ID13",
                    "crypto_pwhash_ALG_DEFAULT",
                    "crypto_pwhash_BYTES_MAX",
                    "crypto_pwhash_BYTES_MIN",
                    "crypto_pwhash_MEMLIMIT_INTERACTIVE",
                    "crypto_pwhash_MEMLIMIT_MAX",
                    "crypto_pwhash_MEMLIMIT_MIN",
                    "crypto_pwhash_MEMLIMIT_MODERATE",
                    "crypto_pwhash_MEMLIMIT_SENSITIVE",
                    "crypto_pwhash_OPSLIMIT_INTERACTIVE",
                    "crypto_pwhash_OPSLIMIT_MAX",
                    "crypto_pwhash_OPSLIMIT_MIN",
                    "crypto_pwhash_OPSLIMIT_MODERATE",
                    "crypto_pwhash_OPSLIMIT_SENSITIVE",
                    "crypto_pwhash_PASSWD_MAX",
                    "crypto_pwhash_PASSWD_MIN",
                    "crypto_pwhash_SALTBYTES",
                    "crypto_pwhash_STRBYTES",
                    "crypto_pwhash_argon2i_BYTES_MAX",
                    "crypto_pwhash_argon2i_BYTES_MIN",
                    "crypto_pwhash_argon2i_MEMLIMIT_INTERACTIVE",
                    "crypto_pwhash_argon2i_MEMLIMIT_MAX",
                    "crypto_pwhash_argon2i_MEMLIMIT_MIN",
                    "crypto_pwhash_argon2i_MEMLIMIT_MODERATE",
                    "crypto_pwhash_argon2i_MEMLIMIT_SENSITIVE",
                    "crypto_pwhash_argon2i_OPSLIMIT_INTERACTIVE",
                    "crypto_pwhash_argon2i_OPSLIMIT_MAX",
                    "crypto_pwhash_argon2i_OPSLIMIT_MIN",
                    "crypto_pwhash_argon2i_OPSLIMIT_MODERATE",
                    "crypto_pwhash_argon2i_OPSLIMIT_SENSITIVE",
                    "crypto_pwhash_argon2i_PASSWD_MAX",
                    "crypto_pwhash_argon2i_PASSWD_MIN",
                    "crypto_pwhash_argon2i_SALTBYTES",
                    "crypto_pwhash_argon2i_STRBYTES",
                    "crypto_pwhash_argon2id_BYTES_MAX",
                    "crypto_pwhash_argon2id_BYTES_MIN",
                    "crypto_pwhash_argon2id_MEMLIMIT_INTERACTIVE",
                    "crypto_pwhash_argon2id_MEMLIMIT_MAX",
                    "crypto_pwhash_argon2id_MEMLIMIT_MIN",
                    "crypto_pwhash_argon2id_MEMLIMIT_MODERATE",
                    "crypto_pwhash_argon2id_MEMLIMIT_SENSITIVE",
                    "crypto_pwhash_argon2id_OPSLIMIT_INTERACTIVE",
                    "crypto_pwhash_argon2id_OPSLIMIT_MAX",
                    "crypto_pwhash_argon2id_OPSLIMIT_MIN",
                    "crypto_pwhash_argon2id_OPSLIMIT_MODERATE",
                    "crypto_pwhash_argon2id_OPSLIMIT_SENSITIVE",
                    "crypto_pwhash_argon2id_PASSWD_MAX",
                    "crypto_pwhash_argon2id_PASSWD_MIN",
                    "crypto_pwhash_argon2id_SALTBYTES",
                    "crypto_pwhash_argon2id_STRBYTES",
                    "crypto_pwhash_scryptsalsa208sha256_BYTES_MAX",
                    "crypto_pwhash_scryptsalsa208sha256_BYTES_MIN",
                    "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_INTERACTIVE",
                    "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX",
                    "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN",
                    "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_SENSITIVE",
                    "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_INTERACTIVE",
                    "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX",
                    "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN",
                    "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_SENSITIVE",
                    "crypto_pwhash_scryptsalsa208sha256_PASSWD_MAX",
                    "crypto_pwhash_scryptsalsa208sha256_PASSWD_MIN",
                    "crypto_pwhash_scryptsalsa208sha256_SALTBYTES",
                    "crypto_pwhash_scryptsalsa208sha256_STRBYTES",
                    "crypto_scalarmult_BYTES",
                    "crypto_scalarmult_SCALARBYTES",
                    "crypto_scalarmult_curve25519_BYTES",
                    "crypto_scalarmult_curve25519_SCALARBYTES",
                    "crypto_scalarmult_ed25519_BYTES",
                    "crypto_scalarmult_ed25519_SCALARBYTES",
                    "crypto_scalarmult_ristretto255_BYTES",
                    "crypto_scalarmult_ristretto255_SCALARBYTES",
                    "crypto_secretbox_KEYBYTES",
                    "crypto_secretbox_MACBYTES",
                    "crypto_secretbox_MESSAGEBYTES_MAX",
                    "crypto_secretbox_NONCEBYTES",
                    "crypto_secretbox_xchacha20poly1305_KEYBYTES",
                    "crypto_secretbox_xchacha20poly1305_MACBYTES",
                    "crypto_secretbox_xchacha20poly1305_MESSAGEBYTES_MAX",
                    "crypto_secretbox_xchacha20poly1305_NONCEBYTES",
                    "crypto_secretbox_xsalsa20poly1305_KEYBYTES",
                    "crypto_secretbox_xsalsa20poly1305_MACBYTES",
                    "crypto_secretbox_xsalsa20poly1305_MESSAGEBYTES_MAX",
                    "crypto_secretbox_xsalsa20poly1305_NONCEBYTES",
                    "crypto_secretstream_xchacha20poly1305_ABYTES",
                    "crypto_secretstream_xchacha20poly1305_HEADERBYTES",
                    "crypto_secretstream_xchacha20poly1305_KEYBYTES",
                    "crypto_secretstream_xchacha20poly1305_MESSAGEBYTES_MAX",
                    "crypto_secretstream_xchacha20poly1305_TAG_FINAL",
                    "crypto_secretstream_xchacha20poly1305_TAG_MESSAGE",
                    "crypto_secretstream_xchacha20poly1305_TAG_PUSH",
                    "crypto_secretstream_xchacha20poly1305_TAG_REKEY",
                    "crypto_shorthash_BYTES",
                    "crypto_shorthash_KEYBYTES",
                    "crypto_shorthash_siphash24_BYTES",
                    "crypto_shorthash_siphash24_KEYBYTES",
                    "crypto_shorthash_siphashx24_BYTES",
                    "crypto_shorthash_siphashx24_KEYBYTES",
                    "crypto_sign_BYTES",
                    "crypto_sign_MESSAGEBYTES_MAX",
                    "crypto_sign_PUBLICKEYBYTES",
                    "crypto_sign_SECRETKEYBYTES",
                    "crypto_sign_SEEDBYTES",
                    "crypto_sign_ed25519_BYTES",
                    "crypto_sign_ed25519_MESSAGEBYTES_MAX",
                    "crypto_sign_ed25519_PUBLICKEYBYTES",
                    "crypto_sign_ed25519_SECRETKEYBYTES",
                    "crypto_sign_ed25519_SEEDBYTES",
                    "crypto_stream_KEYBYTES",
                    "crypto_stream_MESSAGEBYTES_MAX",
                    "crypto_stream_NONCEBYTES",
                    "crypto_stream_chacha20_IETF_KEYBYTES",
                    "crypto_stream_chacha20_IETF_MESSAGEBYTES_MAX",
                    "crypto_stream_chacha20_IETF_NONCEBYTES",
                    "crypto_stream_chacha20_KEYBYTES",
                    "crypto_stream_chacha20_MESSAGEBYTES_MAX",
                    "crypto_stream_chacha20_NONCEBYTES",
                    "crypto_stream_chacha20_ietf_KEYBYTES",
                    "crypto_stream_chacha20_ietf_MESSAGEBYTES_MAX",
                    "crypto_stream_chacha20_ietf_NONCEBYTES",
                    "crypto_stream_salsa2012_KEYBYTES",
                    "crypto_stream_salsa2012_MESSAGEBYTES_MAX",
                    "crypto_stream_salsa2012_NONCEBYTES",
                    "crypto_stream_salsa208_KEYBYTES",
                    "crypto_stream_salsa208_MESSAGEBYTES_MAX",
                    "crypto_stream_salsa208_NONCEBYTES",
                    "crypto_stream_salsa20_KEYBYTES",
                    "crypto_stream_salsa20_MESSAGEBYTES_MAX",
                    "crypto_stream_salsa20_NONCEBYTES",
                    "crypto_stream_xchacha20_KEYBYTES",
                    "crypto_stream_xchacha20_MESSAGEBYTES_MAX",
                    "crypto_stream_xchacha20_NONCEBYTES",
                    "crypto_stream_xsalsa20_KEYBYTES",
                    "crypto_stream_xsalsa20_MESSAGEBYTES_MAX",
                    "crypto_stream_xsalsa20_NONCEBYTES",
                    "crypto_verify_16_BYTES",
                    "crypto_verify_32_BYTES",
                    "crypto_verify_64_BYTES"
                ];
                for(_ = 0; _ < n.length; _++)"function" == typeof (c = r["_" + n[_].toLowerCase()]) && (e[n[_]] = c());
                var s = [
                    "SODIUM_VERSION_STRING",
                    "crypto_pwhash_STRPREFIX",
                    "crypto_pwhash_argon2i_STRPREFIX",
                    "crypto_pwhash_argon2id_STRPREFIX",
                    "crypto_pwhash_scryptsalsa208sha256_STRPREFIX"
                ];
                for(_ = 0; _ < s.length; _++){
                    var c;
                    "function" == typeof (c = r["_" + s[_].toLowerCase()]) && (e[s[_]] = r.UTF8ToString(c()));
                }
            }
            r = a;
            try {
                t();
                var _ = new Uint8Array([
                    98,
                    97,
                    108,
                    108,
                    115
                ]), n = e.randombytes_buf(e.crypto_secretbox_NONCEBYTES), s = e.randombytes_buf(e.crypto_secretbox_KEYBYTES), c = e.crypto_secretbox_easy(_, n, s), o = e.crypto_secretbox_open_easy(c, n, s);
                if (e.memcmp(_, o)) return;
            } catch (e) {
                if (null == r.useBackupModule) throw new Error("Both wasm and asm failed to load" + e);
            }
            r.useBackupModule(), t();
        });
        function n(e) {
            if ("function" == typeof TextEncoder) return (new TextEncoder).encode(e);
            e = unescape(encodeURIComponent(e));
            for(var a = new Uint8Array(e.length), r = 0, t = e.length; r < t; r++)a[r] = e.charCodeAt(r);
            return a;
        }
        function s(e) {
            if ("function" == typeof TextDecoder) return new TextDecoder("utf-8", {
                fatal: !0
            }).decode(e);
            var a = 8192, r = Math.ceil(e.length / a);
            if (r <= 1) try {
                return decodeURIComponent(escape(String.fromCharCode.apply(null, e)));
            } catch (e) {
                throw new TypeError("The encoded data was not valid.");
            }
            for(var t = "", _ = 0, n = 0; n < r; n++){
                var c = Array.prototype.slice.call(e, n * a + _, (n + 1) * a + _);
                if (0 != c.length) {
                    var o, h = c.length, p = 0;
                    do {
                        var y = c[--h];
                        y >= 240 ? (p = 4, o = !0) : y >= 224 ? (p = 3, o = !0) : y >= 192 ? (p = 2, o = !0) : y < 128 && (p = 1, o = !0);
                    }while (!o)
                    for(var i = p - (c.length - h), l = 0; l < i; l++)_--, c.pop();
                    t += s(c);
                }
            }
            return t;
        }
        function c(e) {
            e = E(null, e, "input");
            for(var a, r, t, _ = "", n = 0; n < e.length; n++)t = 87 + (r = 15 & e[n]) + (r - 10 >> 8 & -39) << 8 | 87 + (a = e[n] >>> 4) + (a - 10 >> 8 & -39), _ += String.fromCharCode(255 & t) + String.fromCharCode(t >>> 8);
            return _;
        }
        var o = {
            ORIGINAL: 1,
            ORIGINAL_NO_PADDING: 3,
            URLSAFE: 5,
            URLSAFE_NO_PADDING: 7
        };
        function h(e) {
            if (null == e) return o.URLSAFE_NO_PADDING;
            if (e !== o.ORIGINAL && e !== o.ORIGINAL_NO_PADDING && e !== o.URLSAFE && e != o.URLSAFE_NO_PADDING) throw new Error("unsupported base64 variant");
            return e;
        }
        function p(e, a) {
            a = h(a), e = E(_, e, "input");
            var t, _ = [], n = 0 | Math.floor(e.length / 3), c = e.length - 3 * n, o = 4 * n + (0 !== c ? 2 & a ? 2 + (c >>> 1) : 4 : 0), p = new u(o + 1), y = d(e);
            return _.push(y), _.push(p.address), 0 === r._sodium_bin2base64(p.address, p.length, y, e.length, a) && b(_, "conversion failed"), p.length = o, t = s(p.to_Uint8Array()), g(_), t;
        }
        function y(e, a) {
            var r = a || t;
            if (!i(r)) throw new Error(r + " output format is not available");
            if (e instanceof u) {
                if ("uint8array" === r) return e.to_Uint8Array();
                if ("text" === r) return s(e.to_Uint8Array());
                if ("hex" === r) return c(e.to_Uint8Array());
                if ("base64" === r) return p(e.to_Uint8Array(), o.URLSAFE_NO_PADDING);
                throw new Error('What is output format "' + r + '"?');
            }
            if ("object" == typeof e) {
                for(var _ = Object.keys(e), n = {}, h = 0; h < _.length; h++)n[_[h]] = y(e[_[h]], r);
                return n;
            }
            if ("string" == typeof e) return e;
            throw new TypeError("Cannot format output");
        }
        function i(e) {
            for(var a = [
                "uint8array",
                "text",
                "hex",
                "base64"
            ], r = 0; r < a.length; r++)if (a[r] === e) return !0;
            return !1;
        }
        function l(e) {
            if (e) {
                if ("string" != typeof e) throw new TypeError("When defined, the output format must be a string");
                if (!i(e)) throw new Error(e + " is not a supported output format");
            }
        }
        function u(e) {
            this.length = e, this.address = v(e);
        }
        function d(e) {
            var a = v(e.length);
            return r.HEAPU8.set(e, a), a;
        }
        function v(e) {
            var a = r._malloc(e);
            if (0 === a) throw {
                message: "_malloc() failed",
                length: e
            };
            return a;
        }
        function g(e) {
            if (e) for(var a = 0; a < e.length; a++)t = e[a], r._free(t);
            var t;
        }
        function b(e, a) {
            throw g(e), new Error(a);
        }
        function f(e, a) {
            throw g(e), new TypeError(a);
        }
        function m(e, a, r) {
            null == a && f(e, r + " cannot be null or undefined");
        }
        function E(e, a, r) {
            return m(e, a, r), a instanceof Uint8Array ? a : "string" == typeof a ? n(a) : void f(e, "unsupported input type for " + r);
        }
        function x(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = null;
            null != e && (o = d(e = E(c, e, "secret_nonce")), e.length, c.push(o)), a = E(c, a, "ciphertext");
            var h, p = r._crypto_aead_aegis128l_abytes(), i = a.length;
            i < p && f(c, "ciphertext is too short"), h = d(a), c.push(h);
            var v = null, m = 0;
            null != t && (v = d(t = E(c, t, "additional_data")), m = t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var x, k = 0 | r._crypto_aead_aegis128l_npubbytes();
            _.length !== k && f(c, "invalid public_nonce length"), x = d(_), c.push(x), n = E(c, n, "key");
            var S, T = 0 | r._crypto_aead_aegis128l_keybytes();
            n.length !== T && f(c, "invalid key length"), S = d(n), c.push(S);
            var w = new u(i - r._crypto_aead_aegis128l_abytes() | 0), Y = w.address;
            if (c.push(Y), 0 === r._crypto_aead_aegis128l_decrypt(Y, null, o, h, i, 0, v, m, 0, x, S)) {
                var B = y(w, s);
                return g(c), B;
            }
            b(c, "ciphertext cannot be decrypted using that key");
        }
        function k(e, a, t, _, n, s, c) {
            var o = [];
            l(c);
            var h = null;
            null != e && (h = d(e = E(o, e, "secret_nonce")), e.length, o.push(h));
            var p = d(a = E(o, a, "ciphertext")), i = a.length;
            o.push(p), t = E(o, t, "mac");
            var v, m = 0 | r._crypto_box_macbytes();
            t.length !== m && f(o, "invalid mac length"), v = d(t), o.push(v);
            var x = null, k = 0;
            null != _ && (x = d(_ = E(o, _, "additional_data")), k = _.length, o.push(x)), n = E(o, n, "public_nonce");
            var S, T = 0 | r._crypto_aead_aegis128l_npubbytes();
            n.length !== T && f(o, "invalid public_nonce length"), S = d(n), o.push(S), s = E(o, s, "key");
            var w, Y = 0 | r._crypto_aead_aegis128l_keybytes();
            s.length !== Y && f(o, "invalid key length"), w = d(s), o.push(w);
            var B = new u(0 | i), A = B.address;
            if (o.push(A), 0 === r._crypto_aead_aegis128l_decrypt_detached(A, h, p, i, 0, v, x, k, 0, S, w)) {
                var M = y(B, c);
                return g(o), M;
            }
            b(o, "ciphertext cannot be decrypted using that key");
        }
        function S(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "message")), h = e.length;
            c.push(o);
            var p = null, i = 0;
            null != a && (p = d(a = E(c, a, "additional_data")), i = a.length, c.push(p));
            var v = null;
            null != t && (v = d(t = E(c, t, "secret_nonce")), t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var m, x = 0 | r._crypto_aead_aegis128l_npubbytes();
            _.length !== x && f(c, "invalid public_nonce length"), m = d(_), c.push(m), n = E(c, n, "key");
            var k, S = 0 | r._crypto_aead_aegis128l_keybytes();
            n.length !== S && f(c, "invalid key length"), k = d(n), c.push(k);
            var T = new u(h + r._crypto_aead_aegis128l_abytes() | 0), w = T.address;
            if (c.push(w), 0 === r._crypto_aead_aegis128l_encrypt(w, null, o, h, 0, p, i, 0, v, m, k)) {
                var Y = y(T, s);
                return g(c), Y;
            }
            b(c, "invalid usage");
        }
        function T(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "message")), h = e.length;
            c.push(o);
            var p = null, i = 0;
            null != a && (p = d(a = E(c, a, "additional_data")), i = a.length, c.push(p));
            var v = null;
            null != t && (v = d(t = E(c, t, "secret_nonce")), t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var m, x = 0 | r._crypto_aead_aegis128l_npubbytes();
            _.length !== x && f(c, "invalid public_nonce length"), m = d(_), c.push(m), n = E(c, n, "key");
            var k, S = 0 | r._crypto_aead_aegis128l_keybytes();
            n.length !== S && f(c, "invalid key length"), k = d(n), c.push(k);
            var T = new u(0 | h), w = T.address;
            c.push(w);
            var Y = new u(0 | r._crypto_aead_aegis128l_abytes()), B = Y.address;
            if (c.push(B), 0 === r._crypto_aead_aegis128l_encrypt_detached(w, B, null, o, h, 0, p, i, 0, v, m, k)) {
                var A = y({
                    ciphertext: T,
                    mac: Y
                }, s);
                return g(c), A;
            }
            b(c, "invalid usage");
        }
        function w(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_aead_aegis128l_keybytes()), _ = t.address;
            a.push(_), r._crypto_aead_aegis128l_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function Y(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = null;
            null != e && (o = d(e = E(c, e, "secret_nonce")), e.length, c.push(o)), a = E(c, a, "ciphertext");
            var h, p = r._crypto_aead_aegis256_abytes(), i = a.length;
            i < p && f(c, "ciphertext is too short"), h = d(a), c.push(h);
            var v = null, m = 0;
            null != t && (v = d(t = E(c, t, "additional_data")), m = t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var x, k = 0 | r._crypto_aead_aegis256_npubbytes();
            _.length !== k && f(c, "invalid public_nonce length"), x = d(_), c.push(x), n = E(c, n, "key");
            var S, T = 0 | r._crypto_aead_aegis256_keybytes();
            n.length !== T && f(c, "invalid key length"), S = d(n), c.push(S);
            var w = new u(i - r._crypto_aead_aegis256_abytes() | 0), Y = w.address;
            if (c.push(Y), 0 === r._crypto_aead_aegis256_decrypt(Y, null, o, h, i, 0, v, m, 0, x, S)) {
                var B = y(w, s);
                return g(c), B;
            }
            b(c, "ciphertext cannot be decrypted using that key");
        }
        function B(e, a, t, _, n, s, c) {
            var o = [];
            l(c);
            var h = null;
            null != e && (h = d(e = E(o, e, "secret_nonce")), e.length, o.push(h));
            var p = d(a = E(o, a, "ciphertext")), i = a.length;
            o.push(p), t = E(o, t, "mac");
            var v, m = 0 | r._crypto_box_macbytes();
            t.length !== m && f(o, "invalid mac length"), v = d(t), o.push(v);
            var x = null, k = 0;
            null != _ && (x = d(_ = E(o, _, "additional_data")), k = _.length, o.push(x)), n = E(o, n, "public_nonce");
            var S, T = 0 | r._crypto_aead_aegis256_npubbytes();
            n.length !== T && f(o, "invalid public_nonce length"), S = d(n), o.push(S), s = E(o, s, "key");
            var w, Y = 0 | r._crypto_aead_aegis256_keybytes();
            s.length !== Y && f(o, "invalid key length"), w = d(s), o.push(w);
            var B = new u(0 | i), A = B.address;
            if (o.push(A), 0 === r._crypto_aead_aegis256_decrypt_detached(A, h, p, i, 0, v, x, k, 0, S, w)) {
                var M = y(B, c);
                return g(o), M;
            }
            b(o, "ciphertext cannot be decrypted using that key");
        }
        function A(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "message")), h = e.length;
            c.push(o);
            var p = null, i = 0;
            null != a && (p = d(a = E(c, a, "additional_data")), i = a.length, c.push(p));
            var v = null;
            null != t && (v = d(t = E(c, t, "secret_nonce")), t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var m, x = 0 | r._crypto_aead_aegis256_npubbytes();
            _.length !== x && f(c, "invalid public_nonce length"), m = d(_), c.push(m), n = E(c, n, "key");
            var k, S = 0 | r._crypto_aead_aegis256_keybytes();
            n.length !== S && f(c, "invalid key length"), k = d(n), c.push(k);
            var T = new u(h + r._crypto_aead_aegis256_abytes() | 0), w = T.address;
            if (c.push(w), 0 === r._crypto_aead_aegis256_encrypt(w, null, o, h, 0, p, i, 0, v, m, k)) {
                var Y = y(T, s);
                return g(c), Y;
            }
            b(c, "invalid usage");
        }
        function M(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "message")), h = e.length;
            c.push(o);
            var p = null, i = 0;
            null != a && (p = d(a = E(c, a, "additional_data")), i = a.length, c.push(p));
            var v = null;
            null != t && (v = d(t = E(c, t, "secret_nonce")), t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var m, x = 0 | r._crypto_aead_aegis256_npubbytes();
            _.length !== x && f(c, "invalid public_nonce length"), m = d(_), c.push(m), n = E(c, n, "key");
            var k, S = 0 | r._crypto_aead_aegis256_keybytes();
            n.length !== S && f(c, "invalid key length"), k = d(n), c.push(k);
            var T = new u(0 | h), w = T.address;
            c.push(w);
            var Y = new u(0 | r._crypto_aead_aegis256_abytes()), B = Y.address;
            if (c.push(B), 0 === r._crypto_aead_aegis256_encrypt_detached(w, B, null, o, h, 0, p, i, 0, v, m, k)) {
                var A = y({
                    ciphertext: T,
                    mac: Y
                }, s);
                return g(c), A;
            }
            b(c, "invalid usage");
        }
        function I(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_aead_aegis256_keybytes()), _ = t.address;
            a.push(_), r._crypto_aead_aegis256_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function K(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = null;
            null != e && (o = d(e = E(c, e, "secret_nonce")), e.length, c.push(o)), a = E(c, a, "ciphertext");
            var h, p = r._crypto_aead_chacha20poly1305_abytes(), i = a.length;
            i < p && f(c, "ciphertext is too short"), h = d(a), c.push(h);
            var v = null, m = 0;
            null != t && (v = d(t = E(c, t, "additional_data")), m = t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var x, k = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
            _.length !== k && f(c, "invalid public_nonce length"), x = d(_), c.push(x), n = E(c, n, "key");
            var S, T = 0 | r._crypto_aead_chacha20poly1305_keybytes();
            n.length !== T && f(c, "invalid key length"), S = d(n), c.push(S);
            var w = new u(i - r._crypto_aead_chacha20poly1305_abytes() | 0), Y = w.address;
            if (c.push(Y), 0 === r._crypto_aead_chacha20poly1305_decrypt(Y, null, o, h, i, 0, v, m, 0, x, S)) {
                var B = y(w, s);
                return g(c), B;
            }
            b(c, "ciphertext cannot be decrypted using that key");
        }
        function N(e, a, t, _, n, s, c) {
            var o = [];
            l(c);
            var h = null;
            null != e && (h = d(e = E(o, e, "secret_nonce")), e.length, o.push(h));
            var p = d(a = E(o, a, "ciphertext")), i = a.length;
            o.push(p), t = E(o, t, "mac");
            var v, m = 0 | r._crypto_box_macbytes();
            t.length !== m && f(o, "invalid mac length"), v = d(t), o.push(v);
            var x = null, k = 0;
            null != _ && (x = d(_ = E(o, _, "additional_data")), k = _.length, o.push(x)), n = E(o, n, "public_nonce");
            var S, T = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
            n.length !== T && f(o, "invalid public_nonce length"), S = d(n), o.push(S), s = E(o, s, "key");
            var w, Y = 0 | r._crypto_aead_chacha20poly1305_keybytes();
            s.length !== Y && f(o, "invalid key length"), w = d(s), o.push(w);
            var B = new u(0 | i), A = B.address;
            if (o.push(A), 0 === r._crypto_aead_chacha20poly1305_decrypt_detached(A, h, p, i, 0, v, x, k, 0, S, w)) {
                var M = y(B, c);
                return g(o), M;
            }
            b(o, "ciphertext cannot be decrypted using that key");
        }
        function L(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "message")), h = e.length;
            c.push(o);
            var p = null, i = 0;
            null != a && (p = d(a = E(c, a, "additional_data")), i = a.length, c.push(p));
            var v = null;
            null != t && (v = d(t = E(c, t, "secret_nonce")), t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var m, x = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
            _.length !== x && f(c, "invalid public_nonce length"), m = d(_), c.push(m), n = E(c, n, "key");
            var k, S = 0 | r._crypto_aead_chacha20poly1305_keybytes();
            n.length !== S && f(c, "invalid key length"), k = d(n), c.push(k);
            var T = new u(h + r._crypto_aead_chacha20poly1305_abytes() | 0), w = T.address;
            if (c.push(w), 0 === r._crypto_aead_chacha20poly1305_encrypt(w, null, o, h, 0, p, i, 0, v, m, k)) {
                var Y = y(T, s);
                return g(c), Y;
            }
            b(c, "invalid usage");
        }
        function O(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "message")), h = e.length;
            c.push(o);
            var p = null, i = 0;
            null != a && (p = d(a = E(c, a, "additional_data")), i = a.length, c.push(p));
            var v = null;
            null != t && (v = d(t = E(c, t, "secret_nonce")), t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var m, x = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
            _.length !== x && f(c, "invalid public_nonce length"), m = d(_), c.push(m), n = E(c, n, "key");
            var k, S = 0 | r._crypto_aead_chacha20poly1305_keybytes();
            n.length !== S && f(c, "invalid key length"), k = d(n), c.push(k);
            var T = new u(0 | h), w = T.address;
            c.push(w);
            var Y = new u(0 | r._crypto_aead_chacha20poly1305_abytes()), B = Y.address;
            if (c.push(B), 0 === r._crypto_aead_chacha20poly1305_encrypt_detached(w, B, null, o, h, 0, p, i, 0, v, m, k)) {
                var A = y({
                    ciphertext: T,
                    mac: Y
                }, s);
                return g(c), A;
            }
            b(c, "invalid usage");
        }
        function U(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = null;
            null != e && (o = d(e = E(c, e, "secret_nonce")), e.length, c.push(o)), a = E(c, a, "ciphertext");
            var h, p = r._crypto_aead_chacha20poly1305_ietf_abytes(), i = a.length;
            i < p && f(c, "ciphertext is too short"), h = d(a), c.push(h);
            var v = null, m = 0;
            null != t && (v = d(t = E(c, t, "additional_data")), m = t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var x, k = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
            _.length !== k && f(c, "invalid public_nonce length"), x = d(_), c.push(x), n = E(c, n, "key");
            var S, T = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
            n.length !== T && f(c, "invalid key length"), S = d(n), c.push(S);
            var w = new u(i - r._crypto_aead_chacha20poly1305_ietf_abytes() | 0), Y = w.address;
            if (c.push(Y), 0 === r._crypto_aead_chacha20poly1305_ietf_decrypt(Y, null, o, h, i, 0, v, m, 0, x, S)) {
                var B = y(w, s);
                return g(c), B;
            }
            b(c, "ciphertext cannot be decrypted using that key");
        }
        function C(e, a, t, _, n, s, c) {
            var o = [];
            l(c);
            var h = null;
            null != e && (h = d(e = E(o, e, "secret_nonce")), e.length, o.push(h));
            var p = d(a = E(o, a, "ciphertext")), i = a.length;
            o.push(p), t = E(o, t, "mac");
            var v, m = 0 | r._crypto_box_macbytes();
            t.length !== m && f(o, "invalid mac length"), v = d(t), o.push(v);
            var x = null, k = 0;
            null != _ && (x = d(_ = E(o, _, "additional_data")), k = _.length, o.push(x)), n = E(o, n, "public_nonce");
            var S, T = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
            n.length !== T && f(o, "invalid public_nonce length"), S = d(n), o.push(S), s = E(o, s, "key");
            var w, Y = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
            s.length !== Y && f(o, "invalid key length"), w = d(s), o.push(w);
            var B = new u(0 | i), A = B.address;
            if (o.push(A), 0 === r._crypto_aead_chacha20poly1305_ietf_decrypt_detached(A, h, p, i, 0, v, x, k, 0, S, w)) {
                var M = y(B, c);
                return g(o), M;
            }
            b(o, "ciphertext cannot be decrypted using that key");
        }
        function P(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "message")), h = e.length;
            c.push(o);
            var p = null, i = 0;
            null != a && (p = d(a = E(c, a, "additional_data")), i = a.length, c.push(p));
            var v = null;
            null != t && (v = d(t = E(c, t, "secret_nonce")), t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var m, x = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
            _.length !== x && f(c, "invalid public_nonce length"), m = d(_), c.push(m), n = E(c, n, "key");
            var k, S = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
            n.length !== S && f(c, "invalid key length"), k = d(n), c.push(k);
            var T = new u(h + r._crypto_aead_chacha20poly1305_ietf_abytes() | 0), w = T.address;
            if (c.push(w), 0 === r._crypto_aead_chacha20poly1305_ietf_encrypt(w, null, o, h, 0, p, i, 0, v, m, k)) {
                var Y = y(T, s);
                return g(c), Y;
            }
            b(c, "invalid usage");
        }
        function R(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "message")), h = e.length;
            c.push(o);
            var p = null, i = 0;
            null != a && (p = d(a = E(c, a, "additional_data")), i = a.length, c.push(p));
            var v = null;
            null != t && (v = d(t = E(c, t, "secret_nonce")), t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var m, x = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
            _.length !== x && f(c, "invalid public_nonce length"), m = d(_), c.push(m), n = E(c, n, "key");
            var k, S = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
            n.length !== S && f(c, "invalid key length"), k = d(n), c.push(k);
            var T = new u(0 | h), w = T.address;
            c.push(w);
            var Y = new u(0 | r._crypto_aead_chacha20poly1305_ietf_abytes()), B = Y.address;
            if (c.push(B), 0 === r._crypto_aead_chacha20poly1305_ietf_encrypt_detached(w, B, null, o, h, 0, p, i, 0, v, m, k)) {
                var A = y({
                    ciphertext: T,
                    mac: Y
                }, s);
                return g(c), A;
            }
            b(c, "invalid usage");
        }
        function X(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_aead_chacha20poly1305_ietf_keybytes()), _ = t.address;
            a.push(_), r._crypto_aead_chacha20poly1305_ietf_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function G(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_aead_chacha20poly1305_keybytes()), _ = t.address;
            a.push(_), r._crypto_aead_chacha20poly1305_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function D(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = null;
            null != e && (o = d(e = E(c, e, "secret_nonce")), e.length, c.push(o)), a = E(c, a, "ciphertext");
            var h, p = r._crypto_aead_xchacha20poly1305_ietf_abytes(), i = a.length;
            i < p && f(c, "ciphertext is too short"), h = d(a), c.push(h);
            var v = null, m = 0;
            null != t && (v = d(t = E(c, t, "additional_data")), m = t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var x, k = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            _.length !== k && f(c, "invalid public_nonce length"), x = d(_), c.push(x), n = E(c, n, "key");
            var S, T = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
            n.length !== T && f(c, "invalid key length"), S = d(n), c.push(S);
            var w = new u(i - r._crypto_aead_xchacha20poly1305_ietf_abytes() | 0), Y = w.address;
            if (c.push(Y), 0 === r._crypto_aead_xchacha20poly1305_ietf_decrypt(Y, null, o, h, i, 0, v, m, 0, x, S)) {
                var B = y(w, s);
                return g(c), B;
            }
            b(c, "ciphertext cannot be decrypted using that key");
        }
        function F(e, a, t, _, n, s, c) {
            var o = [];
            l(c);
            var h = null;
            null != e && (h = d(e = E(o, e, "secret_nonce")), e.length, o.push(h));
            var p = d(a = E(o, a, "ciphertext")), i = a.length;
            o.push(p), t = E(o, t, "mac");
            var v, m = 0 | r._crypto_box_macbytes();
            t.length !== m && f(o, "invalid mac length"), v = d(t), o.push(v);
            var x = null, k = 0;
            null != _ && (x = d(_ = E(o, _, "additional_data")), k = _.length, o.push(x)), n = E(o, n, "public_nonce");
            var S, T = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            n.length !== T && f(o, "invalid public_nonce length"), S = d(n), o.push(S), s = E(o, s, "key");
            var w, Y = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
            s.length !== Y && f(o, "invalid key length"), w = d(s), o.push(w);
            var B = new u(0 | i), A = B.address;
            if (o.push(A), 0 === r._crypto_aead_xchacha20poly1305_ietf_decrypt_detached(A, h, p, i, 0, v, x, k, 0, S, w)) {
                var M = y(B, c);
                return g(o), M;
            }
            b(o, "ciphertext cannot be decrypted using that key");
        }
        function V(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "message")), h = e.length;
            c.push(o);
            var p = null, i = 0;
            null != a && (p = d(a = E(c, a, "additional_data")), i = a.length, c.push(p));
            var v = null;
            null != t && (v = d(t = E(c, t, "secret_nonce")), t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var m, x = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            _.length !== x && f(c, "invalid public_nonce length"), m = d(_), c.push(m), n = E(c, n, "key");
            var k, S = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
            n.length !== S && f(c, "invalid key length"), k = d(n), c.push(k);
            var T = new u(h + r._crypto_aead_xchacha20poly1305_ietf_abytes() | 0), w = T.address;
            if (c.push(w), 0 === r._crypto_aead_xchacha20poly1305_ietf_encrypt(w, null, o, h, 0, p, i, 0, v, m, k)) {
                var Y = y(T, s);
                return g(c), Y;
            }
            b(c, "invalid usage");
        }
        function H(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "message")), h = e.length;
            c.push(o);
            var p = null, i = 0;
            null != a && (p = d(a = E(c, a, "additional_data")), i = a.length, c.push(p));
            var v = null;
            null != t && (v = d(t = E(c, t, "secret_nonce")), t.length, c.push(v)), _ = E(c, _, "public_nonce");
            var m, x = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            _.length !== x && f(c, "invalid public_nonce length"), m = d(_), c.push(m), n = E(c, n, "key");
            var k, S = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
            n.length !== S && f(c, "invalid key length"), k = d(n), c.push(k);
            var T = new u(0 | h), w = T.address;
            c.push(w);
            var Y = new u(0 | r._crypto_aead_xchacha20poly1305_ietf_abytes()), B = Y.address;
            if (c.push(B), 0 === r._crypto_aead_xchacha20poly1305_ietf_encrypt_detached(w, B, null, o, h, 0, p, i, 0, v, m, k)) {
                var A = y({
                    ciphertext: T,
                    mac: Y
                }, s);
                return g(c), A;
            }
            b(c, "invalid usage");
        }
        function W(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes()), _ = t.address;
            a.push(_), r._crypto_aead_xchacha20poly1305_ietf_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function q(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "key");
            var c, o = 0 | r._crypto_auth_keybytes();
            a.length !== o && f(_, "invalid key length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_auth_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_auth(p, n, s, 0, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function j(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "key");
            var c, o = 0 | r._crypto_auth_hmacsha256_keybytes();
            a.length !== o && f(_, "invalid key length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_auth_hmacsha256_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_auth_hmacsha256(p, n, s, 0, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function z(e, a) {
            var t = [];
            l(a), m(t, e, "state_address");
            var _ = new u(0 | r._crypto_auth_hmacsha256_bytes()), n = _.address;
            if (t.push(n), !(0 | r._crypto_auth_hmacsha256_final(e, n))) {
                var s = (r._free(e), y(_, a));
                return g(t), s;
            }
            b(t, "invalid usage");
        }
        function J(e, a) {
            var t = [];
            l(a);
            var _ = null, n = 0;
            null != e && (_ = d(e = E(t, e, "key")), n = e.length, t.push(_));
            var s = new u(208).address;
            if (!(0 | r._crypto_auth_hmacsha256_init(s, _, n))) {
                var c = s;
                return g(t), c;
            }
            b(t, "invalid usage");
        }
        function Q(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_auth_hmacsha256_keybytes()), _ = t.address;
            a.push(_), r._crypto_auth_hmacsha256_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function Z(e, a, t) {
            var _ = [];
            l(t), m(_, e, "state_address");
            var n = d(a = E(_, a, "message_chunk")), s = a.length;
            _.push(n), 0 | r._crypto_auth_hmacsha256_update(e, n, s) && b(_, "invalid usage"), g(_);
        }
        function $(e, a, t) {
            var _ = [];
            e = E(_, e, "tag");
            var n, s = 0 | r._crypto_auth_hmacsha256_bytes();
            e.length !== s && f(_, "invalid tag length"), n = d(e), _.push(n);
            var c = d(a = E(_, a, "message")), o = a.length;
            _.push(c), t = E(_, t, "key");
            var h, p = 0 | r._crypto_auth_hmacsha256_keybytes();
            t.length !== p && f(_, "invalid key length"), h = d(t), _.push(h);
            var y = !(0 | r._crypto_auth_hmacsha256_verify(n, c, o, 0, h));
            return g(_), y;
        }
        function ee(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "key");
            var c, o = 0 | r._crypto_auth_hmacsha512_keybytes();
            a.length !== o && f(_, "invalid key length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_auth_hmacsha512_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_auth_hmacsha512(p, n, s, 0, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function ae(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "key");
            var c, o = 0 | r._crypto_auth_hmacsha512256_keybytes();
            a.length !== o && f(_, "invalid key length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_auth_hmacsha512256_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_auth_hmacsha512256(p, n, s, 0, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function re(e, a) {
            var t = [];
            l(a), m(t, e, "state_address");
            var _ = new u(0 | r._crypto_auth_hmacsha512256_bytes()), n = _.address;
            if (t.push(n), !(0 | r._crypto_auth_hmacsha512256_final(e, n))) {
                var s = (r._free(e), y(_, a));
                return g(t), s;
            }
            b(t, "invalid usage");
        }
        function te(e, a) {
            var t = [];
            l(a);
            var _ = null, n = 0;
            null != e && (_ = d(e = E(t, e, "key")), n = e.length, t.push(_));
            var s = new u(416).address;
            if (!(0 | r._crypto_auth_hmacsha512256_init(s, _, n))) {
                var c = s;
                return g(t), c;
            }
            b(t, "invalid usage");
        }
        function _e(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_auth_hmacsha512256_keybytes()), _ = t.address;
            a.push(_), r._crypto_auth_hmacsha512256_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function ne(e, a, t) {
            var _ = [];
            l(t), m(_, e, "state_address");
            var n = d(a = E(_, a, "message_chunk")), s = a.length;
            _.push(n), 0 | r._crypto_auth_hmacsha512256_update(e, n, s) && b(_, "invalid usage"), g(_);
        }
        function se(e, a, t) {
            var _ = [];
            e = E(_, e, "tag");
            var n, s = 0 | r._crypto_auth_hmacsha512256_bytes();
            e.length !== s && f(_, "invalid tag length"), n = d(e), _.push(n);
            var c = d(a = E(_, a, "message")), o = a.length;
            _.push(c), t = E(_, t, "key");
            var h, p = 0 | r._crypto_auth_hmacsha512256_keybytes();
            t.length !== p && f(_, "invalid key length"), h = d(t), _.push(h);
            var y = !(0 | r._crypto_auth_hmacsha512256_verify(n, c, o, 0, h));
            return g(_), y;
        }
        function ce(e, a) {
            var t = [];
            l(a), m(t, e, "state_address");
            var _ = new u(0 | r._crypto_auth_hmacsha512_bytes()), n = _.address;
            if (t.push(n), !(0 | r._crypto_auth_hmacsha512_final(e, n))) {
                var s = (r._free(e), y(_, a));
                return g(t), s;
            }
            b(t, "invalid usage");
        }
        function oe(e, a) {
            var t = [];
            l(a);
            var _ = null, n = 0;
            null != e && (_ = d(e = E(t, e, "key")), n = e.length, t.push(_));
            var s = new u(416).address;
            if (!(0 | r._crypto_auth_hmacsha512_init(s, _, n))) {
                var c = s;
                return g(t), c;
            }
            b(t, "invalid usage");
        }
        function he(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_auth_hmacsha512_keybytes()), _ = t.address;
            a.push(_), r._crypto_auth_hmacsha512_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function pe(e, a, t) {
            var _ = [];
            l(t), m(_, e, "state_address");
            var n = d(a = E(_, a, "message_chunk")), s = a.length;
            _.push(n), 0 | r._crypto_auth_hmacsha512_update(e, n, s) && b(_, "invalid usage"), g(_);
        }
        function ye(e, a, t) {
            var _ = [];
            e = E(_, e, "tag");
            var n, s = 0 | r._crypto_auth_hmacsha512_bytes();
            e.length !== s && f(_, "invalid tag length"), n = d(e), _.push(n);
            var c = d(a = E(_, a, "message")), o = a.length;
            _.push(c), t = E(_, t, "key");
            var h, p = 0 | r._crypto_auth_hmacsha512_keybytes();
            t.length !== p && f(_, "invalid key length"), h = d(t), _.push(h);
            var y = !(0 | r._crypto_auth_hmacsha512_verify(n, c, o, 0, h));
            return g(_), y;
        }
        function ie(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_auth_keybytes()), _ = t.address;
            a.push(_), r._crypto_auth_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function le(e, a, t) {
            var _ = [];
            e = E(_, e, "tag");
            var n, s = 0 | r._crypto_auth_bytes();
            e.length !== s && f(_, "invalid tag length"), n = d(e), _.push(n);
            var c = d(a = E(_, a, "message")), o = a.length;
            _.push(c), t = E(_, t, "key");
            var h, p = 0 | r._crypto_auth_keybytes();
            t.length !== p && f(_, "invalid key length"), h = d(t), _.push(h);
            var y = !(0 | r._crypto_auth_verify(n, c, o, 0, h));
            return g(_), y;
        }
        function ue(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "publicKey");
            var n, s = 0 | r._crypto_box_publickeybytes();
            e.length !== s && f(_, "invalid publicKey length"), n = d(e), _.push(n), a = E(_, a, "privateKey");
            var c, o = 0 | r._crypto_box_secretkeybytes();
            a.length !== o && f(_, "invalid privateKey length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_box_beforenmbytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_box_beforenm(p, n, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function de(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "publicKey");
            var n, s = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            e.length !== s && f(_, "invalid publicKey length"), n = d(e), _.push(n), a = E(_, a, "privateKey");
            var c, o = 0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
            a.length !== o && f(_, "invalid privateKey length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_box_curve25519xchacha20poly1305_beforenmbytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_box_curve25519xchacha20poly1305_beforenm(p, n, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function ve(e, a, t, _, n) {
            var s = [];
            l(n);
            var c = d(e = E(s, e, "message")), o = e.length;
            s.push(c), a = E(s, a, "nonce");
            var h, p = 0 | r._crypto_box_curve25519xchacha20poly1305_noncebytes();
            a.length !== p && f(s, "invalid nonce length"), h = d(a), s.push(h), t = E(s, t, "publicKey");
            var i, v = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            t.length !== v && f(s, "invalid publicKey length"), i = d(t), s.push(i), _ = E(s, _, "privateKey");
            var m, x = 0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
            _.length !== x && f(s, "invalid privateKey length"), m = d(_), s.push(m);
            var k = new u(0 | o), S = k.address;
            s.push(S);
            var T = new u(0 | r._crypto_box_curve25519xchacha20poly1305_macbytes()), w = T.address;
            if (s.push(w), !(0 | r._crypto_box_curve25519xchacha20poly1305_detached(S, w, c, o, 0, h, i, m))) {
                var Y = y({
                    ciphertext: k,
                    mac: T
                }, n);
                return g(s), Y;
            }
            b(s, "invalid usage");
        }
        function ge(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "message")), c = e.length;
            n.push(s), a = E(n, a, "nonce");
            var o, h = 0 | r._crypto_box_curve25519xchacha20poly1305_noncebytes();
            a.length !== h && f(n, "invalid nonce length"), o = d(a), n.push(o), t = E(n, t, "sharedKey");
            var p, i = 0 | r._crypto_box_curve25519xchacha20poly1305_beforenmbytes();
            t.length !== i && f(n, "invalid sharedKey length"), p = d(t), n.push(p);
            var v = new u(0 | c), m = v.address;
            n.push(m);
            var x = new u(0 | r._crypto_box_curve25519xchacha20poly1305_macbytes()), k = x.address;
            if (n.push(k), !(0 | r._crypto_box_curve25519xchacha20poly1305_detached_afternm(m, k, s, c, 0, o, p))) {
                var S = y({
                    ciphertext: v,
                    mac: x
                }, _);
                return g(n), S;
            }
            b(n, "invalid usage");
        }
        function be(e, a, t, _, n) {
            var s = [];
            l(n);
            var c = d(e = E(s, e, "message")), o = e.length;
            s.push(c), a = E(s, a, "nonce");
            var h, p = 0 | r._crypto_box_curve25519xchacha20poly1305_noncebytes();
            a.length !== p && f(s, "invalid nonce length"), h = d(a), s.push(h), t = E(s, t, "publicKey");
            var i, v = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            t.length !== v && f(s, "invalid publicKey length"), i = d(t), s.push(i), _ = E(s, _, "privateKey");
            var m, x = 0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
            _.length !== x && f(s, "invalid privateKey length"), m = d(_), s.push(m);
            var k = new u(o + r._crypto_box_curve25519xchacha20poly1305_macbytes() | 0), S = k.address;
            if (s.push(S), !(0 | r._crypto_box_curve25519xchacha20poly1305_easy(S, c, o, 0, h, i, m))) {
                var T = y(k, n);
                return g(s), T;
            }
            b(s, "invalid usage");
        }
        function fe(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "message")), c = e.length;
            n.push(s), a = E(n, a, "nonce");
            var o, h = 0 | r._crypto_box_curve25519xchacha20poly1305_noncebytes();
            a.length !== h && f(n, "invalid nonce length"), o = d(a), n.push(o), t = E(n, t, "sharedKey");
            var p, i = 0 | r._crypto_box_curve25519xchacha20poly1305_beforenmbytes();
            t.length !== i && f(n, "invalid sharedKey length"), p = d(t), n.push(p);
            var v = new u(c + r._crypto_box_curve25519xchacha20poly1305_macbytes() | 0), m = v.address;
            if (n.push(m), !(0 | r._crypto_box_curve25519xchacha20poly1305_easy_afternm(m, s, c, 0, o, p))) {
                var x = y(v, _);
                return g(n), x;
            }
            b(n, "invalid usage");
        }
        function me(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes()), _ = t.address;
            a.push(_);
            var n = new u(0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes()), s = n.address;
            a.push(s), r._crypto_box_curve25519xchacha20poly1305_keypair(_, s);
            var c = y({
                publicKey: t,
                privateKey: n,
                keyType: "curve25519"
            }, e);
            return g(a), c;
        }
        function Ee(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "ciphertext")), h = e.length;
            c.push(o), a = E(c, a, "mac");
            var p, i = 0 | r._crypto_box_curve25519xchacha20poly1305_macbytes();
            a.length !== i && f(c, "invalid mac length"), p = d(a), c.push(p), t = E(c, t, "nonce");
            var v, m = 0 | r._crypto_box_curve25519xchacha20poly1305_noncebytes();
            t.length !== m && f(c, "invalid nonce length"), v = d(t), c.push(v), _ = E(c, _, "publicKey");
            var x, k = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            _.length !== k && f(c, "invalid publicKey length"), x = d(_), c.push(x), n = E(c, n, "privateKey");
            var S, T = 0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
            n.length !== T && f(c, "invalid privateKey length"), S = d(n), c.push(S);
            var w = new u(0 | h), Y = w.address;
            if (c.push(Y), !(0 | r._crypto_box_curve25519xchacha20poly1305_open_detached(Y, o, p, h, 0, v, x, S))) {
                var B = y(w, s);
                return g(c), B;
            }
            b(c, "incorrect key pair for the given ciphertext");
        }
        function xe(e, a, t, _, n) {
            var s = [];
            l(n);
            var c = d(e = E(s, e, "ciphertext")), o = e.length;
            s.push(c), a = E(s, a, "mac");
            var h, p = 0 | r._crypto_box_curve25519xchacha20poly1305_macbytes();
            a.length !== p && f(s, "invalid mac length"), h = d(a), s.push(h), t = E(s, t, "nonce");
            var i, v = 0 | r._crypto_box_curve25519xchacha20poly1305_noncebytes();
            t.length !== v && f(s, "invalid nonce length"), i = d(t), s.push(i), _ = E(s, _, "sharedKey");
            var m, x = 0 | r._crypto_box_curve25519xchacha20poly1305_beforenmbytes();
            _.length !== x && f(s, "invalid sharedKey length"), m = d(_), s.push(m);
            var k = new u(0 | o), S = k.address;
            if (s.push(S), !(0 | r._crypto_box_curve25519xchacha20poly1305_open_detached_afternm(S, c, h, o, 0, i, m))) {
                var T = y(k, n);
                return g(s), T;
            }
            b(s, "incorrect secret key for the given ciphertext");
        }
        function ke(e, a, t, _, n) {
            var s = [];
            l(n), e = E(s, e, "ciphertext");
            var c, o = r._crypto_box_curve25519xchacha20poly1305_macbytes(), h = e.length;
            h < o && f(s, "ciphertext is too short"), c = d(e), s.push(c), a = E(s, a, "nonce");
            var p, i = 0 | r._crypto_box_curve25519xchacha20poly1305_noncebytes();
            a.length !== i && f(s, "invalid nonce length"), p = d(a), s.push(p), t = E(s, t, "publicKey");
            var v, m = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            t.length !== m && f(s, "invalid publicKey length"), v = d(t), s.push(v), _ = E(s, _, "privateKey");
            var x, k = 0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
            _.length !== k && f(s, "invalid privateKey length"), x = d(_), s.push(x);
            var S = new u(h - r._crypto_box_curve25519xchacha20poly1305_macbytes() | 0), T = S.address;
            if (s.push(T), !(0 | r._crypto_box_curve25519xchacha20poly1305_open_easy(T, c, h, 0, p, v, x))) {
                var w = y(S, n);
                return g(s), w;
            }
            b(s, "incorrect key pair for the given ciphertext");
        }
        function Se(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "ciphertext")), c = e.length;
            n.push(s), a = E(n, a, "nonce");
            var o, h = 0 | r._crypto_box_curve25519xchacha20poly1305_noncebytes();
            a.length !== h && f(n, "invalid nonce length"), o = d(a), n.push(o), t = E(n, t, "sharedKey");
            var p, i = 0 | r._crypto_box_curve25519xchacha20poly1305_beforenmbytes();
            t.length !== i && f(n, "invalid sharedKey length"), p = d(t), n.push(p);
            var v = new u(c - r._crypto_box_curve25519xchacha20poly1305_macbytes() | 0), m = v.address;
            if (n.push(m), !(0 | r._crypto_box_curve25519xchacha20poly1305_open_easy_afternm(m, s, c, 0, o, p))) {
                var x = y(v, _);
                return g(n), x;
            }
            b(n, "incorrect secret key for the given ciphertext");
        }
        function Te(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "publicKey");
            var c, o = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            a.length !== o && f(_, "invalid publicKey length"), c = d(a), _.push(c);
            var h = new u(s + r._crypto_box_curve25519xchacha20poly1305_sealbytes() | 0), p = h.address;
            _.push(p), r._crypto_box_curve25519xchacha20poly1305_seal(p, n, s, 0, c);
            var i = y(h, t);
            return g(_), i;
        }
        function we(e, a, t, _) {
            var n = [];
            l(_), e = E(n, e, "ciphertext");
            var s, c = r._crypto_box_curve25519xchacha20poly1305_sealbytes(), o = e.length;
            o < c && f(n, "ciphertext is too short"), s = d(e), n.push(s), a = E(n, a, "publicKey");
            var h, p = 0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            a.length !== p && f(n, "invalid publicKey length"), h = d(a), n.push(h), t = E(n, t, "secretKey");
            var i, v = 0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
            t.length !== v && f(n, "invalid secretKey length"), i = d(t), n.push(i);
            var b = new u(o - r._crypto_box_curve25519xchacha20poly1305_sealbytes() | 0), m = b.address;
            n.push(m), r._crypto_box_curve25519xchacha20poly1305_seal_open(m, s, o, 0, h, i);
            var x = y(b, _);
            return g(n), x;
        }
        function Ye(e, a) {
            var t = [];
            l(a), e = E(t, e, "seed");
            var _, n = 0 | r._crypto_box_curve25519xchacha20poly1305_seedbytes();
            e.length !== n && f(t, "invalid seed length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes()), c = s.address;
            t.push(c);
            var o = new u(0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes()), h = o.address;
            if (t.push(h), !(0 | r._crypto_box_curve25519xchacha20poly1305_seed_keypair(c, h, _))) {
                var p = {
                    publicKey: y(s, a),
                    privateKey: y(o, a),
                    keyType: "x25519"
                };
                return g(t), p;
            }
            b(t, "invalid usage");
        }
        function Be(e, a, t, _, n) {
            var s = [];
            l(n);
            var c = d(e = E(s, e, "message")), o = e.length;
            s.push(c), a = E(s, a, "nonce");
            var h, p = 0 | r._crypto_box_noncebytes();
            a.length !== p && f(s, "invalid nonce length"), h = d(a), s.push(h), t = E(s, t, "publicKey");
            var i, v = 0 | r._crypto_box_publickeybytes();
            t.length !== v && f(s, "invalid publicKey length"), i = d(t), s.push(i), _ = E(s, _, "privateKey");
            var m, x = 0 | r._crypto_box_secretkeybytes();
            _.length !== x && f(s, "invalid privateKey length"), m = d(_), s.push(m);
            var k = new u(0 | o), S = k.address;
            s.push(S);
            var T = new u(0 | r._crypto_box_macbytes()), w = T.address;
            if (s.push(w), !(0 | r._crypto_box_detached(S, w, c, o, 0, h, i, m))) {
                var Y = y({
                    ciphertext: k,
                    mac: T
                }, n);
                return g(s), Y;
            }
            b(s, "invalid usage");
        }
        function Ae(e, a, t, _, n) {
            var s = [];
            l(n);
            var c = d(e = E(s, e, "message")), o = e.length;
            s.push(c), a = E(s, a, "nonce");
            var h, p = 0 | r._crypto_box_noncebytes();
            a.length !== p && f(s, "invalid nonce length"), h = d(a), s.push(h), t = E(s, t, "publicKey");
            var i, v = 0 | r._crypto_box_publickeybytes();
            t.length !== v && f(s, "invalid publicKey length"), i = d(t), s.push(i), _ = E(s, _, "privateKey");
            var m, x = 0 | r._crypto_box_secretkeybytes();
            _.length !== x && f(s, "invalid privateKey length"), m = d(_), s.push(m);
            var k = new u(o + r._crypto_box_macbytes() | 0), S = k.address;
            if (s.push(S), !(0 | r._crypto_box_easy(S, c, o, 0, h, i, m))) {
                var T = y(k, n);
                return g(s), T;
            }
            b(s, "invalid usage");
        }
        function Me(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "message")), c = e.length;
            n.push(s), a = E(n, a, "nonce");
            var o, h = 0 | r._crypto_box_noncebytes();
            a.length !== h && f(n, "invalid nonce length"), o = d(a), n.push(o), t = E(n, t, "sharedKey");
            var p, i = 0 | r._crypto_box_beforenmbytes();
            t.length !== i && f(n, "invalid sharedKey length"), p = d(t), n.push(p);
            var v = new u(c + r._crypto_box_macbytes() | 0), m = v.address;
            if (n.push(m), !(0 | r._crypto_box_easy_afternm(m, s, c, 0, o, p))) {
                var x = y(v, _);
                return g(n), x;
            }
            b(n, "invalid usage");
        }
        function Ie(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_box_publickeybytes()), _ = t.address;
            a.push(_);
            var n = new u(0 | r._crypto_box_secretkeybytes()), s = n.address;
            if (a.push(s), !(0 | r._crypto_box_keypair(_, s))) {
                var c = {
                    publicKey: y(t, e),
                    privateKey: y(n, e),
                    keyType: "x25519"
                };
                return g(a), c;
            }
            b(a, "internal error");
        }
        function Ke(e, a, t, _, n, s) {
            var c = [];
            l(s);
            var o = d(e = E(c, e, "ciphertext")), h = e.length;
            c.push(o), a = E(c, a, "mac");
            var p, i = 0 | r._crypto_box_macbytes();
            a.length !== i && f(c, "invalid mac length"), p = d(a), c.push(p), t = E(c, t, "nonce");
            var v, m = 0 | r._crypto_box_noncebytes();
            t.length !== m && f(c, "invalid nonce length"), v = d(t), c.push(v), _ = E(c, _, "publicKey");
            var x, k = 0 | r._crypto_box_publickeybytes();
            _.length !== k && f(c, "invalid publicKey length"), x = d(_), c.push(x), n = E(c, n, "privateKey");
            var S, T = 0 | r._crypto_box_secretkeybytes();
            n.length !== T && f(c, "invalid privateKey length"), S = d(n), c.push(S);
            var w = new u(0 | h), Y = w.address;
            if (c.push(Y), !(0 | r._crypto_box_open_detached(Y, o, p, h, 0, v, x, S))) {
                var B = y(w, s);
                return g(c), B;
            }
            b(c, "incorrect key pair for the given ciphertext");
        }
        function Ne(e, a, t, _, n) {
            var s = [];
            l(n), e = E(s, e, "ciphertext");
            var c, o = r._crypto_box_macbytes(), h = e.length;
            h < o && f(s, "ciphertext is too short"), c = d(e), s.push(c), a = E(s, a, "nonce");
            var p, i = 0 | r._crypto_box_noncebytes();
            a.length !== i && f(s, "invalid nonce length"), p = d(a), s.push(p), t = E(s, t, "publicKey");
            var v, m = 0 | r._crypto_box_publickeybytes();
            t.length !== m && f(s, "invalid publicKey length"), v = d(t), s.push(v), _ = E(s, _, "privateKey");
            var x, k = 0 | r._crypto_box_secretkeybytes();
            _.length !== k && f(s, "invalid privateKey length"), x = d(_), s.push(x);
            var S = new u(h - r._crypto_box_macbytes() | 0), T = S.address;
            if (s.push(T), !(0 | r._crypto_box_open_easy(T, c, h, 0, p, v, x))) {
                var w = y(S, n);
                return g(s), w;
            }
            b(s, "incorrect key pair for the given ciphertext");
        }
        function Le(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "ciphertext")), c = e.length;
            n.push(s), a = E(n, a, "nonce");
            var o, h = 0 | r._crypto_box_noncebytes();
            a.length !== h && f(n, "invalid nonce length"), o = d(a), n.push(o), t = E(n, t, "sharedKey");
            var p, i = 0 | r._crypto_box_beforenmbytes();
            t.length !== i && f(n, "invalid sharedKey length"), p = d(t), n.push(p);
            var v = new u(c - r._crypto_box_macbytes() | 0), m = v.address;
            if (n.push(m), !(0 | r._crypto_box_open_easy_afternm(m, s, c, 0, o, p))) {
                var x = y(v, _);
                return g(n), x;
            }
            b(n, "incorrect secret key for the given ciphertext");
        }
        function Oe(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "publicKey");
            var c, o = 0 | r._crypto_box_publickeybytes();
            a.length !== o && f(_, "invalid publicKey length"), c = d(a), _.push(c);
            var h = new u(s + r._crypto_box_sealbytes() | 0), p = h.address;
            if (_.push(p), !(0 | r._crypto_box_seal(p, n, s, 0, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function Ue(e, a, t, _) {
            var n = [];
            l(_), e = E(n, e, "ciphertext");
            var s, c = r._crypto_box_sealbytes(), o = e.length;
            o < c && f(n, "ciphertext is too short"), s = d(e), n.push(s), a = E(n, a, "publicKey");
            var h, p = 0 | r._crypto_box_publickeybytes();
            a.length !== p && f(n, "invalid publicKey length"), h = d(a), n.push(h), t = E(n, t, "privateKey");
            var i, v = 0 | r._crypto_box_secretkeybytes();
            t.length !== v && f(n, "invalid privateKey length"), i = d(t), n.push(i);
            var m = new u(o - r._crypto_box_sealbytes() | 0), x = m.address;
            if (n.push(x), !(0 | r._crypto_box_seal_open(x, s, o, 0, h, i))) {
                var k = y(m, _);
                return g(n), k;
            }
            b(n, "incorrect key pair for the given ciphertext");
        }
        function Ce(e, a) {
            var t = [];
            l(a), e = E(t, e, "seed");
            var _, n = 0 | r._crypto_box_seedbytes();
            e.length !== n && f(t, "invalid seed length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_box_publickeybytes()), c = s.address;
            t.push(c);
            var o = new u(0 | r._crypto_box_secretkeybytes()), h = o.address;
            if (t.push(h), !(0 | r._crypto_box_seed_keypair(c, h, _))) {
                var p = {
                    publicKey: y(s, a),
                    privateKey: y(o, a),
                    keyType: "x25519"
                };
                return g(t), p;
            }
            b(t, "invalid usage");
        }
        function Pe(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "p");
            var n, s = 0 | r._crypto_core_ed25519_bytes();
            e.length !== s && f(_, "invalid p length"), n = d(e), _.push(n), a = E(_, a, "q");
            var c, o = 0 | r._crypto_core_ed25519_bytes();
            a.length !== o && f(_, "invalid q length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_core_ed25519_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_core_ed25519_add(p, n, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "input is an invalid element");
        }
        function Re(e, a) {
            var t = [];
            l(a);
            var _ = d(e = E(t, e, "r"));
            e.length, t.push(_);
            var n = new u(0 | r._crypto_core_ed25519_bytes()), s = n.address;
            if (t.push(s), !(0 | r._crypto_core_ed25519_from_hash(s, _))) {
                var c = y(n, a);
                return g(t), c;
            }
            b(t, "invalid usage");
        }
        function Xe(e, a) {
            var t = [];
            l(a);
            var _ = d(e = E(t, e, "r"));
            e.length, t.push(_);
            var n = new u(0 | r._crypto_core_ed25519_bytes()), s = n.address;
            if (t.push(s), !(0 | r._crypto_core_ed25519_from_uniform(s, _))) {
                var c = y(n, a);
                return g(t), c;
            }
            b(t, "invalid usage");
        }
        function Ge(e, a) {
            var t = [];
            l(a), e = E(t, e, "repr");
            var _, n = 0 | r._crypto_core_ed25519_bytes();
            e.length !== n && f(t, "invalid repr length"), _ = d(e), t.push(_);
            var s = 1 == (0 | r._crypto_core_ed25519_is_valid_point(_));
            return g(t), s;
        }
        function De(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_core_ed25519_bytes()), _ = t.address;
            a.push(_), r._crypto_core_ed25519_random(_);
            var n = y(t, e);
            return g(a), n;
        }
        function Fe(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "x");
            var n, s = 0 | r._crypto_core_ed25519_scalarbytes();
            e.length !== s && f(_, "invalid x length"), n = d(e), _.push(n), a = E(_, a, "y");
            var c, o = 0 | r._crypto_core_ed25519_scalarbytes();
            a.length !== o && f(_, "invalid y length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_core_ed25519_scalarbytes()), p = h.address;
            _.push(p), r._crypto_core_ed25519_scalar_add(p, n, c);
            var i = y(h, t);
            return g(_), i;
        }
        function Ve(e, a) {
            var t = [];
            l(a), e = E(t, e, "s");
            var _, n = 0 | r._crypto_core_ed25519_scalarbytes();
            e.length !== n && f(t, "invalid s length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_core_ed25519_scalarbytes()), c = s.address;
            t.push(c), r._crypto_core_ed25519_scalar_complement(c, _);
            var o = y(s, a);
            return g(t), o;
        }
        function He(e, a) {
            var t = [];
            l(a), e = E(t, e, "s");
            var _, n = 0 | r._crypto_core_ed25519_scalarbytes();
            e.length !== n && f(t, "invalid s length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_core_ed25519_scalarbytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_core_ed25519_scalar_invert(c, _))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "invalid reciprocate");
        }
        function We(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "x");
            var n, s = 0 | r._crypto_core_ed25519_scalarbytes();
            e.length !== s && f(_, "invalid x length"), n = d(e), _.push(n), a = E(_, a, "y");
            var c, o = 0 | r._crypto_core_ed25519_scalarbytes();
            a.length !== o && f(_, "invalid y length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_core_ed25519_scalarbytes()), p = h.address;
            _.push(p), r._crypto_core_ed25519_scalar_mul(p, n, c);
            var i = y(h, t);
            return g(_), i;
        }
        function qe(e, a) {
            var t = [];
            l(a), e = E(t, e, "s");
            var _, n = 0 | r._crypto_core_ed25519_scalarbytes();
            e.length !== n && f(t, "invalid s length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_core_ed25519_scalarbytes()), c = s.address;
            t.push(c), r._crypto_core_ed25519_scalar_negate(c, _);
            var o = y(s, a);
            return g(t), o;
        }
        function je(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_core_ed25519_scalarbytes()), _ = t.address;
            a.push(_), r._crypto_core_ed25519_scalar_random(_);
            var n = y(t, e);
            return g(a), n;
        }
        function ze(e, a) {
            var t = [];
            l(a), e = E(t, e, "sample");
            var _, n = 0 | r._crypto_core_ed25519_nonreducedscalarbytes();
            e.length !== n && f(t, "invalid sample length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_core_ed25519_scalarbytes()), c = s.address;
            t.push(c), r._crypto_core_ed25519_scalar_reduce(c, _);
            var o = y(s, a);
            return g(t), o;
        }
        function Je(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "x");
            var n, s = 0 | r._crypto_core_ed25519_scalarbytes();
            e.length !== s && f(_, "invalid x length"), n = d(e), _.push(n), a = E(_, a, "y");
            var c, o = 0 | r._crypto_core_ed25519_scalarbytes();
            a.length !== o && f(_, "invalid y length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_core_ed25519_scalarbytes()), p = h.address;
            _.push(p), r._crypto_core_ed25519_scalar_sub(p, n, c);
            var i = y(h, t);
            return g(_), i;
        }
        function Qe(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "p");
            var n, s = 0 | r._crypto_core_ed25519_bytes();
            e.length !== s && f(_, "invalid p length"), n = d(e), _.push(n), a = E(_, a, "q");
            var c, o = 0 | r._crypto_core_ed25519_bytes();
            a.length !== o && f(_, "invalid q length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_core_ed25519_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_core_ed25519_sub(p, n, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "input is an invalid element");
        }
        function Ze(e, a, t, _) {
            var n = [];
            l(_), e = E(n, e, "input");
            var s, c = 0 | r._crypto_core_hchacha20_inputbytes();
            e.length !== c && f(n, "invalid input length"), s = d(e), n.push(s), a = E(n, a, "privateKey");
            var o, h = 0 | r._crypto_core_hchacha20_keybytes();
            a.length !== h && f(n, "invalid privateKey length"), o = d(a), n.push(o);
            var p = null;
            null != t && (p = d(t = E(n, t, "constant")), t.length, n.push(p));
            var i = new u(0 | r._crypto_core_hchacha20_outputbytes()), v = i.address;
            if (n.push(v), !(0 | r._crypto_core_hchacha20(v, s, o, p))) {
                var m = y(i, _);
                return g(n), m;
            }
            b(n, "invalid usage");
        }
        function $e(e, a, t, _) {
            var n = [];
            l(_), e = E(n, e, "input");
            var s, c = 0 | r._crypto_core_hsalsa20_inputbytes();
            e.length !== c && f(n, "invalid input length"), s = d(e), n.push(s), a = E(n, a, "privateKey");
            var o, h = 0 | r._crypto_core_hsalsa20_keybytes();
            a.length !== h && f(n, "invalid privateKey length"), o = d(a), n.push(o);
            var p = null;
            null != t && (p = d(t = E(n, t, "constant")), t.length, n.push(p));
            var i = new u(0 | r._crypto_core_hsalsa20_outputbytes()), v = i.address;
            if (n.push(v), !(0 | r._crypto_core_hsalsa20(v, s, o, p))) {
                var m = y(i, _);
                return g(n), m;
            }
            b(n, "invalid usage");
        }
        function ea(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "p");
            var n, s = 0 | r._crypto_core_ristretto255_bytes();
            e.length !== s && f(_, "invalid p length"), n = d(e), _.push(n), a = E(_, a, "q");
            var c, o = 0 | r._crypto_core_ristretto255_bytes();
            a.length !== o && f(_, "invalid q length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_core_ristretto255_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_core_ristretto255_add(p, n, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "input is an invalid element");
        }
        function aa(e, a) {
            var t = [];
            l(a);
            var _ = d(e = E(t, e, "r"));
            e.length, t.push(_);
            var n = new u(0 | r._crypto_core_ristretto255_bytes()), s = n.address;
            if (t.push(s), !(0 | r._crypto_core_ristretto255_from_hash(s, _))) {
                var c = y(n, a);
                return g(t), c;
            }
            b(t, "invalid usage");
        }
        function ra(e, a) {
            var t = [];
            l(a), e = E(t, e, "repr");
            var _, n = 0 | r._crypto_core_ristretto255_bytes();
            e.length !== n && f(t, "invalid repr length"), _ = d(e), t.push(_);
            var s = 1 == (0 | r._crypto_core_ristretto255_is_valid_point(_));
            return g(t), s;
        }
        function ta(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_core_ristretto255_bytes()), _ = t.address;
            a.push(_), r._crypto_core_ristretto255_random(_);
            var n = y(t, e);
            return g(a), n;
        }
        function _a(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "x");
            var n, s = 0 | r._crypto_core_ristretto255_scalarbytes();
            e.length !== s && f(_, "invalid x length"), n = d(e), _.push(n), a = E(_, a, "y");
            var c, o = 0 | r._crypto_core_ristretto255_scalarbytes();
            a.length !== o && f(_, "invalid y length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_core_ristretto255_scalarbytes()), p = h.address;
            _.push(p), r._crypto_core_ristretto255_scalar_add(p, n, c);
            var i = y(h, t);
            return g(_), i;
        }
        function na(e, a) {
            var t = [];
            l(a), e = E(t, e, "s");
            var _, n = 0 | r._crypto_core_ristretto255_scalarbytes();
            e.length !== n && f(t, "invalid s length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_core_ristretto255_scalarbytes()), c = s.address;
            t.push(c), r._crypto_core_ristretto255_scalar_complement(c, _);
            var o = y(s, a);
            return g(t), o;
        }
        function sa(e, a) {
            var t = [];
            l(a), e = E(t, e, "s");
            var _, n = 0 | r._crypto_core_ristretto255_scalarbytes();
            e.length !== n && f(t, "invalid s length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_core_ristretto255_scalarbytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_core_ristretto255_scalar_invert(c, _))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "invalid reciprocate");
        }
        function ca(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "x");
            var n, s = 0 | r._crypto_core_ristretto255_scalarbytes();
            e.length !== s && f(_, "invalid x length"), n = d(e), _.push(n), a = E(_, a, "y");
            var c, o = 0 | r._crypto_core_ristretto255_scalarbytes();
            a.length !== o && f(_, "invalid y length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_core_ristretto255_scalarbytes()), p = h.address;
            _.push(p), r._crypto_core_ristretto255_scalar_mul(p, n, c);
            var i = y(h, t);
            return g(_), i;
        }
        function oa(e, a) {
            var t = [];
            l(a), e = E(t, e, "s");
            var _, n = 0 | r._crypto_core_ristretto255_scalarbytes();
            e.length !== n && f(t, "invalid s length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_core_ristretto255_scalarbytes()), c = s.address;
            t.push(c), r._crypto_core_ristretto255_scalar_negate(c, _);
            var o = y(s, a);
            return g(t), o;
        }
        function ha(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_core_ristretto255_scalarbytes()), _ = t.address;
            a.push(_), r._crypto_core_ristretto255_scalar_random(_);
            var n = y(t, e);
            return g(a), n;
        }
        function pa(e, a) {
            var t = [];
            l(a), e = E(t, e, "sample");
            var _, n = 0 | r._crypto_core_ristretto255_nonreducedscalarbytes();
            e.length !== n && f(t, "invalid sample length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_core_ristretto255_scalarbytes()), c = s.address;
            t.push(c), r._crypto_core_ristretto255_scalar_reduce(c, _);
            var o = y(s, a);
            return g(t), o;
        }
        function ya(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "x");
            var n, s = 0 | r._crypto_core_ristretto255_scalarbytes();
            e.length !== s && f(_, "invalid x length"), n = d(e), _.push(n), a = E(_, a, "y");
            var c, o = 0 | r._crypto_core_ristretto255_scalarbytes();
            a.length !== o && f(_, "invalid y length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_core_ristretto255_scalarbytes()), p = h.address;
            _.push(p), r._crypto_core_ristretto255_scalar_sub(p, n, c);
            var i = y(h, t);
            return g(_), i;
        }
        function ia(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "p");
            var n, s = 0 | r._crypto_core_ristretto255_bytes();
            e.length !== s && f(_, "invalid p length"), n = d(e), _.push(n), a = E(_, a, "q");
            var c, o = 0 | r._crypto_core_ristretto255_bytes();
            a.length !== o && f(_, "invalid q length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_core_ristretto255_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_core_ristretto255_sub(p, n, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "input is an invalid element");
        }
        function la(e, a, t, _) {
            var n = [];
            l(_), m(n, e, "hash_length"), ("number" != typeof e || (0 | e) !== e || e < 0) && f(n, "hash_length must be an unsigned integer");
            var s = d(a = E(n, a, "message")), c = a.length;
            n.push(s);
            var o = null, h = 0;
            null != t && (o = d(t = E(n, t, "key")), h = t.length, n.push(o));
            var p = new u(e |= 0), i = p.address;
            if (n.push(i), !(0 | r._crypto_generichash(i, e, s, c, 0, o, h))) {
                var v = y(p, _);
                return g(n), v;
            }
            b(n, "invalid usage");
        }
        function ua(e, a, t, _, n) {
            var s = [];
            l(n), m(s, e, "subkey_len"), ("number" != typeof e || (0 | e) !== e || e < 0) && f(s, "subkey_len must be an unsigned integer");
            var c = null, o = 0;
            null != a && (c = d(a = E(s, a, "key")), o = a.length, s.push(c));
            var h = null, p = 0;
            null != t && (t = E(s, t, "id"), p = 0 | r._crypto_generichash_blake2b_saltbytes(), t.length !== p && f(s, "invalid id length"), h = d(t), s.push(h));
            var i = null, v = 0;
            null != _ && (_ = E(s, _, "ctx"), v = 0 | r._crypto_generichash_blake2b_personalbytes(), _.length !== v && f(s, "invalid ctx length"), i = d(_), s.push(i));
            var x = new u(0 | e), k = x.address;
            if (s.push(k), !(0 | r._crypto_generichash_blake2b_salt_personal(k, e, null, 0, 0, c, o, h, i))) {
                var S = y(x, n);
                return g(s), S;
            }
            b(s, "invalid usage");
        }
        function da(e, a, t) {
            var _ = [];
            l(t), m(_, e, "state_address"), m(_, a, "hash_length"), ("number" != typeof a || (0 | a) !== a || a < 0) && f(_, "hash_length must be an unsigned integer");
            var n = new u(a |= 0), s = n.address;
            if (_.push(s), !(0 | r._crypto_generichash_final(e, s, a))) {
                var c = (r._free(e), y(n, t));
                return g(_), c;
            }
            b(_, "invalid usage");
        }
        function va(e, a, t) {
            var _ = [];
            l(t);
            var n = null, s = 0;
            null != e && (n = d(e = E(_, e, "key")), s = e.length, _.push(n)), m(_, a, "hash_length"), ("number" != typeof a || (0 | a) !== a || a < 0) && f(_, "hash_length must be an unsigned integer");
            var c = new u(357).address;
            if (!(0 | r._crypto_generichash_init(c, n, s, a))) {
                var o = c;
                return g(_), o;
            }
            b(_, "invalid usage");
        }
        function ga(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_generichash_keybytes()), _ = t.address;
            a.push(_), r._crypto_generichash_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function ba(e, a, t) {
            var _ = [];
            l(t), m(_, e, "state_address");
            var n = d(a = E(_, a, "message_chunk")), s = a.length;
            _.push(n), 0 | r._crypto_generichash_update(e, n, s) && b(_, "invalid usage"), g(_);
        }
        function fa(e, a) {
            var t = [];
            l(a);
            var _ = d(e = E(t, e, "message")), n = e.length;
            t.push(_);
            var s = new u(0 | r._crypto_hash_bytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_hash(c, _, n, 0))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "invalid usage");
        }
        function ma(e, a) {
            var t = [];
            l(a);
            var _ = d(e = E(t, e, "message")), n = e.length;
            t.push(_);
            var s = new u(0 | r._crypto_hash_sha256_bytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_hash_sha256(c, _, n, 0))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "invalid usage");
        }
        function Ea(e, a) {
            var t = [];
            l(a), m(t, e, "state_address");
            var _ = new u(0 | r._crypto_hash_sha256_bytes()), n = _.address;
            if (t.push(n), !(0 | r._crypto_hash_sha256_final(e, n))) {
                var s = (r._free(e), y(_, a));
                return g(t), s;
            }
            b(t, "invalid usage");
        }
        function xa(e) {
            var a = [];
            l(e);
            var t = new u(104).address;
            if (!(0 | r._crypto_hash_sha256_init(t))) {
                var _ = t;
                return g(a), _;
            }
            b(a, "invalid usage");
        }
        function ka(e, a, t) {
            var _ = [];
            l(t), m(_, e, "state_address");
            var n = d(a = E(_, a, "message_chunk")), s = a.length;
            _.push(n), 0 | r._crypto_hash_sha256_update(e, n, s) && b(_, "invalid usage"), g(_);
        }
        function Sa(e, a) {
            var t = [];
            l(a);
            var _ = d(e = E(t, e, "message")), n = e.length;
            t.push(_);
            var s = new u(0 | r._crypto_hash_sha512_bytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_hash_sha512(c, _, n, 0))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "invalid usage");
        }
        function Ta(e, a) {
            var t = [];
            l(a), m(t, e, "state_address");
            var _ = new u(0 | r._crypto_hash_sha512_bytes()), n = _.address;
            if (t.push(n), !(0 | r._crypto_hash_sha512_final(e, n))) {
                var s = (r._free(e), y(_, a));
                return g(t), s;
            }
            b(t, "invalid usage");
        }
        function wa(e) {
            var a = [];
            l(e);
            var t = new u(208).address;
            if (!(0 | r._crypto_hash_sha512_init(t))) {
                var _ = t;
                return g(a), _;
            }
            b(a, "invalid usage");
        }
        function Ya(e, a, t) {
            var _ = [];
            l(t), m(_, e, "state_address");
            var n = d(a = E(_, a, "message_chunk")), s = a.length;
            _.push(n), 0 | r._crypto_hash_sha512_update(e, n, s) && b(_, "invalid usage"), g(_);
        }
        function Ba(e, a, t, _, s) {
            var c = [];
            l(s), m(c, e, "subkey_len"), ("number" != typeof e || (0 | e) !== e || e < 0) && f(c, "subkey_len must be an unsigned integer"), m(c, a, "subkey_id");
            var o, h = 0;
            if ("bigint" == typeof a && a >= BigInt(0)) {
                const e = a >> BigInt(32);
                e > BigInt(4294967295) && f(c, "subkey_id cannot be more than 64 bits"), h = Number(e), o = Number(a & BigInt(4294967295));
            } else "number" == typeof a && (0 | a) === a && a >= 0 ? o = a : f(c, "subkey_id must be an unsigned integer or bigint");
            "string" != typeof t && f(c, "ctx must be a string"), t = n(t + "\0"), null != i && t.length - 1 !== i && f(c, "invalid ctx length");
            var p = d(t), i = t.length - 1;
            c.push(p), _ = E(c, _, "key");
            var v, b = 0 | r._crypto_kdf_keybytes();
            _.length !== b && f(c, "invalid key length"), v = d(_), c.push(v);
            var x = new u(0 | e), k = x.address;
            c.push(k), r._crypto_kdf_derive_from_key(k, e, o, h, p, v);
            var S = y(x, s);
            return g(c), S;
        }
        function Aa(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_kdf_keybytes()), _ = t.address;
            a.push(_), r._crypto_kdf_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function Ma(e, a, t, _) {
            var n = [];
            l(_), e = E(n, e, "clientPublicKey");
            var s, c = 0 | r._crypto_kx_publickeybytes();
            e.length !== c && f(n, "invalid clientPublicKey length"), s = d(e), n.push(s), a = E(n, a, "clientSecretKey");
            var o, h = 0 | r._crypto_kx_secretkeybytes();
            a.length !== h && f(n, "invalid clientSecretKey length"), o = d(a), n.push(o), t = E(n, t, "serverPublicKey");
            var p, i = 0 | r._crypto_kx_publickeybytes();
            t.length !== i && f(n, "invalid serverPublicKey length"), p = d(t), n.push(p);
            var v = new u(0 | r._crypto_kx_sessionkeybytes()), m = v.address;
            n.push(m);
            var x = new u(0 | r._crypto_kx_sessionkeybytes()), k = x.address;
            if (n.push(k), !(0 | r._crypto_kx_client_session_keys(m, k, s, o, p))) {
                var S = y({
                    sharedRx: v,
                    sharedTx: x
                }, _);
                return g(n), S;
            }
            b(n, "invalid usage");
        }
        function Ia(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_kx_publickeybytes()), _ = t.address;
            a.push(_);
            var n = new u(0 | r._crypto_kx_secretkeybytes()), s = n.address;
            if (a.push(s), !(0 | r._crypto_kx_keypair(_, s))) {
                var c = {
                    publicKey: y(t, e),
                    privateKey: y(n, e),
                    keyType: "x25519"
                };
                return g(a), c;
            }
            b(a, "internal error");
        }
        function Ka(e, a) {
            var t = [];
            l(a), e = E(t, e, "seed");
            var _, n = 0 | r._crypto_kx_seedbytes();
            e.length !== n && f(t, "invalid seed length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_kx_publickeybytes()), c = s.address;
            t.push(c);
            var o = new u(0 | r._crypto_kx_secretkeybytes()), h = o.address;
            if (t.push(h), !(0 | r._crypto_kx_seed_keypair(c, h, _))) {
                var p = {
                    publicKey: y(s, a),
                    privateKey: y(o, a),
                    keyType: "x25519"
                };
                return g(t), p;
            }
            b(t, "internal error");
        }
        function Na(e, a, t, _) {
            var n = [];
            l(_), e = E(n, e, "serverPublicKey");
            var s, c = 0 | r._crypto_kx_publickeybytes();
            e.length !== c && f(n, "invalid serverPublicKey length"), s = d(e), n.push(s), a = E(n, a, "serverSecretKey");
            var o, h = 0 | r._crypto_kx_secretkeybytes();
            a.length !== h && f(n, "invalid serverSecretKey length"), o = d(a), n.push(o), t = E(n, t, "clientPublicKey");
            var p, i = 0 | r._crypto_kx_publickeybytes();
            t.length !== i && f(n, "invalid clientPublicKey length"), p = d(t), n.push(p);
            var v = new u(0 | r._crypto_kx_sessionkeybytes()), m = v.address;
            n.push(m);
            var x = new u(0 | r._crypto_kx_sessionkeybytes()), k = x.address;
            if (n.push(k), !(0 | r._crypto_kx_server_session_keys(m, k, s, o, p))) {
                var S = y({
                    sharedRx: v,
                    sharedTx: x
                }, _);
                return g(n), S;
            }
            b(n, "invalid usage");
        }
        function La(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "key");
            var c, o = 0 | r._crypto_onetimeauth_keybytes();
            a.length !== o && f(_, "invalid key length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_onetimeauth_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_onetimeauth(p, n, s, 0, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function Oa(e, a) {
            var t = [];
            l(a), m(t, e, "state_address");
            var _ = new u(0 | r._crypto_onetimeauth_bytes()), n = _.address;
            if (t.push(n), !(0 | r._crypto_onetimeauth_final(e, n))) {
                var s = (r._free(e), y(_, a));
                return g(t), s;
            }
            b(t, "invalid usage");
        }
        function Ua(e, a) {
            var t = [];
            l(a);
            var _ = null;
            null != e && (_ = d(e = E(t, e, "key")), e.length, t.push(_));
            var n = new u(144).address;
            if (!(0 | r._crypto_onetimeauth_init(n, _))) {
                var s = n;
                return g(t), s;
            }
            b(t, "invalid usage");
        }
        function Ca(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_onetimeauth_keybytes()), _ = t.address;
            a.push(_), r._crypto_onetimeauth_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function Pa(e, a, t) {
            var _ = [];
            l(t), m(_, e, "state_address");
            var n = d(a = E(_, a, "message_chunk")), s = a.length;
            _.push(n), 0 | r._crypto_onetimeauth_update(e, n, s) && b(_, "invalid usage"), g(_);
        }
        function Ra(e, a, t) {
            var _ = [];
            e = E(_, e, "hash");
            var n, s = 0 | r._crypto_onetimeauth_bytes();
            e.length !== s && f(_, "invalid hash length"), n = d(e), _.push(n);
            var c = d(a = E(_, a, "message")), o = a.length;
            _.push(c), t = E(_, t, "key");
            var h, p = 0 | r._crypto_onetimeauth_keybytes();
            t.length !== p && f(_, "invalid key length"), h = d(t), _.push(h);
            var y = !(0 | r._crypto_onetimeauth_verify(n, c, o, 0, h));
            return g(_), y;
        }
        function Xa(e, a, t, _, n, s, c) {
            var o = [];
            l(c), m(o, e, "keyLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && f(o, "keyLength must be an unsigned integer");
            var h = d(a = E(o, a, "password")), p = a.length;
            o.push(h), t = E(o, t, "salt");
            var i, v = 0 | r._crypto_pwhash_saltbytes();
            t.length !== v && f(o, "invalid salt length"), i = d(t), o.push(i), m(o, _, "opsLimit"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && f(o, "opsLimit must be an unsigned integer"), m(o, n, "memLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && f(o, "memLimit must be an unsigned integer"), m(o, s, "algorithm"), ("number" != typeof s || (0 | s) !== s || s < 0) && f(o, "algorithm must be an unsigned integer");
            var x = new u(0 | e), k = x.address;
            if (o.push(k), !(0 | r._crypto_pwhash(k, e, 0, h, p, 0, i, _, 0, n, s))) {
                var S = y(x, c);
                return g(o), S;
            }
            b(o, "invalid usage");
        }
        function Ga(e, a, t, _, n, s) {
            var c = [];
            l(s), m(c, e, "keyLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && f(c, "keyLength must be an unsigned integer");
            var o = d(a = E(c, a, "password")), h = a.length;
            c.push(o), t = E(c, t, "salt");
            var p, i = 0 | r._crypto_pwhash_scryptsalsa208sha256_saltbytes();
            t.length !== i && f(c, "invalid salt length"), p = d(t), c.push(p), m(c, _, "opsLimit"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && f(c, "opsLimit must be an unsigned integer"), m(c, n, "memLimit"), ("number" != typeof n || (0 | n) !== n || n < 0) && f(c, "memLimit must be an unsigned integer");
            var v = new u(0 | e), x = v.address;
            if (c.push(x), !(0 | r._crypto_pwhash_scryptsalsa208sha256(x, e, 0, o, h, 0, p, _, 0, n))) {
                var k = y(v, s);
                return g(c), k;
            }
            b(c, "invalid usage");
        }
        function Da(e, a, t, _, n, s, c) {
            var o = [];
            l(c);
            var h = d(e = E(o, e, "password")), p = e.length;
            o.push(h);
            var i = d(a = E(o, a, "salt")), v = a.length;
            o.push(i), m(o, t, "opsLimit"), ("number" != typeof t || (0 | t) !== t || t < 0) && f(o, "opsLimit must be an unsigned integer"), m(o, _, "r"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && f(o, "r must be an unsigned integer"), m(o, n, "p"), ("number" != typeof n || (0 | n) !== n || n < 0) && f(o, "p must be an unsigned integer"), m(o, s, "keyLength"), ("number" != typeof s || (0 | s) !== s || s < 0) && f(o, "keyLength must be an unsigned integer");
            var x = new u(0 | s), k = x.address;
            if (o.push(k), !(0 | r._crypto_pwhash_scryptsalsa208sha256_ll(h, p, i, v, t, 0, _, n, k, s))) {
                var S = y(x, c);
                return g(o), S;
            }
            b(o, "invalid usage");
        }
        function Fa(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "password")), c = e.length;
            n.push(s), m(n, a, "opsLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && f(n, "opsLimit must be an unsigned integer"), m(n, t, "memLimit"), ("number" != typeof t || (0 | t) !== t || t < 0) && f(n, "memLimit must be an unsigned integer");
            var o = new u(0 | r._crypto_pwhash_scryptsalsa208sha256_strbytes()).address;
            if (n.push(o), !(0 | r._crypto_pwhash_scryptsalsa208sha256_str(o, s, c, 0, a, 0, t))) {
                var h = r.UTF8ToString(o);
                return g(n), h;
            }
            b(n, "invalid usage");
        }
        function Va(e, a, t) {
            var _ = [];
            l(t), "string" != typeof e && f(_, "hashed_password must be a string"), e = n(e + "\0"), null != c && e.length - 1 !== c && f(_, "invalid hashed_password length");
            var s = d(e), c = e.length - 1;
            _.push(s);
            var o = d(a = E(_, a, "password")), h = a.length;
            _.push(o);
            var p = !(0 | r._crypto_pwhash_scryptsalsa208sha256_str_verify(s, o, h, 0));
            return g(_), p;
        }
        function Ha(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "password")), c = e.length;
            n.push(s), m(n, a, "opsLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && f(n, "opsLimit must be an unsigned integer"), m(n, t, "memLimit"), ("number" != typeof t || (0 | t) !== t || t < 0) && f(n, "memLimit must be an unsigned integer");
            var o = new u(0 | r._crypto_pwhash_strbytes()).address;
            if (n.push(o), !(0 | r._crypto_pwhash_str(o, s, c, 0, a, 0, t))) {
                var h = r.UTF8ToString(o);
                return g(n), h;
            }
            b(n, "invalid usage");
        }
        function Wa(e, a, t, _) {
            var s = [];
            l(_), "string" != typeof e && f(s, "hashed_password must be a string"), e = n(e + "\0"), null != o && e.length - 1 !== o && f(s, "invalid hashed_password length");
            var c = d(e), o = e.length - 1;
            s.push(c), m(s, a, "opsLimit"), ("number" != typeof a || (0 | a) !== a || a < 0) && f(s, "opsLimit must be an unsigned integer"), m(s, t, "memLimit"), ("number" != typeof t || (0 | t) !== t || t < 0) && f(s, "memLimit must be an unsigned integer");
            var h = !!(0 | r._crypto_pwhash_str_needs_rehash(c, a, 0, t));
            return g(s), h;
        }
        function qa(e, a, t) {
            var _ = [];
            l(t), "string" != typeof e && f(_, "hashed_password must be a string"), e = n(e + "\0"), null != c && e.length - 1 !== c && f(_, "invalid hashed_password length");
            var s = d(e), c = e.length - 1;
            _.push(s);
            var o = d(a = E(_, a, "password")), h = a.length;
            _.push(o);
            var p = !(0 | r._crypto_pwhash_str_verify(s, o, h, 0));
            return g(_), p;
        }
        function ja(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "privateKey");
            var n, s = 0 | r._crypto_scalarmult_scalarbytes();
            e.length !== s && f(_, "invalid privateKey length"), n = d(e), _.push(n), a = E(_, a, "publicKey");
            var c, o = 0 | r._crypto_scalarmult_bytes();
            a.length !== o && f(_, "invalid publicKey length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_scalarmult_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_scalarmult(p, n, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "weak public key");
        }
        function za(e, a) {
            var t = [];
            l(a), e = E(t, e, "privateKey");
            var _, n = 0 | r._crypto_scalarmult_scalarbytes();
            e.length !== n && f(t, "invalid privateKey length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_scalarmult_bytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_scalarmult_base(c, _))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "unknown error");
        }
        function Ja(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "n");
            var n, s = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
            e.length !== s && f(_, "invalid n length"), n = d(e), _.push(n), a = E(_, a, "p");
            var c, o = 0 | r._crypto_scalarmult_ed25519_bytes();
            a.length !== o && f(_, "invalid p length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_scalarmult_ed25519_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_scalarmult_ed25519(p, n, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid point or scalar is 0");
        }
        function Qa(e, a) {
            var t = [];
            l(a), e = E(t, e, "scalar");
            var _, n = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
            e.length !== n && f(t, "invalid scalar length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_scalarmult_ed25519_bytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_scalarmult_ed25519_base(c, _))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "scalar is 0");
        }
        function Za(e, a) {
            var t = [];
            l(a), e = E(t, e, "scalar");
            var _, n = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
            e.length !== n && f(t, "invalid scalar length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_scalarmult_ed25519_bytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_scalarmult_ed25519_base_noclamp(c, _))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "scalar is 0");
        }
        function $a(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "n");
            var n, s = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
            e.length !== s && f(_, "invalid n length"), n = d(e), _.push(n), a = E(_, a, "p");
            var c, o = 0 | r._crypto_scalarmult_ed25519_bytes();
            a.length !== o && f(_, "invalid p length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_scalarmult_ed25519_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_scalarmult_ed25519_noclamp(p, n, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid point or scalar is 0");
        }
        function er(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "scalar");
            var n, s = 0 | r._crypto_scalarmult_ristretto255_scalarbytes();
            e.length !== s && f(_, "invalid scalar length"), n = d(e), _.push(n), a = E(_, a, "element");
            var c, o = 0 | r._crypto_scalarmult_ristretto255_bytes();
            a.length !== o && f(_, "invalid element length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_scalarmult_ristretto255_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_scalarmult_ristretto255(p, n, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "result is identity element");
        }
        function ar(e, a) {
            var t = [];
            l(a), e = E(t, e, "scalar");
            var _, n = 0 | r._crypto_core_ristretto255_scalarbytes();
            e.length !== n && f(t, "invalid scalar length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_core_ristretto255_bytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_scalarmult_ristretto255_base(c, _))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "scalar is 0");
        }
        function rr(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "message")), c = e.length;
            n.push(s), a = E(n, a, "nonce");
            var o, h = 0 | r._crypto_secretbox_noncebytes();
            a.length !== h && f(n, "invalid nonce length"), o = d(a), n.push(o), t = E(n, t, "key");
            var p, i = 0 | r._crypto_secretbox_keybytes();
            t.length !== i && f(n, "invalid key length"), p = d(t), n.push(p);
            var v = new u(0 | c), m = v.address;
            n.push(m);
            var x = new u(0 | r._crypto_secretbox_macbytes()), k = x.address;
            if (n.push(k), !(0 | r._crypto_secretbox_detached(m, k, s, c, 0, o, p))) {
                var S = y({
                    mac: x,
                    cipher: v
                }, _);
                return g(n), S;
            }
            b(n, "invalid usage");
        }
        function tr(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "message")), c = e.length;
            n.push(s), a = E(n, a, "nonce");
            var o, h = 0 | r._crypto_secretbox_noncebytes();
            a.length !== h && f(n, "invalid nonce length"), o = d(a), n.push(o), t = E(n, t, "key");
            var p, i = 0 | r._crypto_secretbox_keybytes();
            t.length !== i && f(n, "invalid key length"), p = d(t), n.push(p);
            var v = new u(c + r._crypto_secretbox_macbytes() | 0), m = v.address;
            if (n.push(m), !(0 | r._crypto_secretbox_easy(m, s, c, 0, o, p))) {
                var x = y(v, _);
                return g(n), x;
            }
            b(n, "invalid usage");
        }
        function _r(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_secretbox_keybytes()), _ = t.address;
            a.push(_), r._crypto_secretbox_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function nr(e, a, t, _, n) {
            var s = [];
            l(n);
            var c = d(e = E(s, e, "ciphertext")), o = e.length;
            s.push(c), a = E(s, a, "mac");
            var h, p = 0 | r._crypto_secretbox_macbytes();
            a.length !== p && f(s, "invalid mac length"), h = d(a), s.push(h), t = E(s, t, "nonce");
            var i, v = 0 | r._crypto_secretbox_noncebytes();
            t.length !== v && f(s, "invalid nonce length"), i = d(t), s.push(i), _ = E(s, _, "key");
            var m, x = 0 | r._crypto_secretbox_keybytes();
            _.length !== x && f(s, "invalid key length"), m = d(_), s.push(m);
            var k = new u(0 | o), S = k.address;
            if (s.push(S), !(0 | r._crypto_secretbox_open_detached(S, c, h, o, 0, i, m))) {
                var T = y(k, n);
                return g(s), T;
            }
            b(s, "wrong secret key for the given ciphertext");
        }
        function sr(e, a, t, _) {
            var n = [];
            l(_), e = E(n, e, "ciphertext");
            var s, c = r._crypto_secretbox_macbytes(), o = e.length;
            o < c && f(n, "ciphertext is too short"), s = d(e), n.push(s), a = E(n, a, "nonce");
            var h, p = 0 | r._crypto_secretbox_noncebytes();
            a.length !== p && f(n, "invalid nonce length"), h = d(a), n.push(h), t = E(n, t, "key");
            var i, v = 0 | r._crypto_secretbox_keybytes();
            t.length !== v && f(n, "invalid key length"), i = d(t), n.push(i);
            var m = new u(o - r._crypto_secretbox_macbytes() | 0), x = m.address;
            if (n.push(x), !(0 | r._crypto_secretbox_open_easy(x, s, o, 0, h, i))) {
                var k = y(m, _);
                return g(n), k;
            }
            b(n, "wrong secret key for the given ciphertext");
        }
        function cr(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "header");
            var n, s = 0 | r._crypto_secretstream_xchacha20poly1305_headerbytes();
            e.length !== s && f(_, "invalid header length"), n = d(e), _.push(n), a = E(_, a, "key");
            var c, o = 0 | r._crypto_secretstream_xchacha20poly1305_keybytes();
            a.length !== o && f(_, "invalid key length"), c = d(a), _.push(c);
            var h = new u(52).address;
            if (!(0 | r._crypto_secretstream_xchacha20poly1305_init_pull(h, n, c))) {
                var p = h;
                return g(_), p;
            }
            b(_, "invalid usage");
        }
        function or(e, a) {
            var t = [];
            l(a), e = E(t, e, "key");
            var _, n = 0 | r._crypto_secretstream_xchacha20poly1305_keybytes();
            e.length !== n && f(t, "invalid key length"), _ = d(e), t.push(_);
            var s = new u(52).address, c = new u(0 | r._crypto_secretstream_xchacha20poly1305_headerbytes()), o = c.address;
            if (t.push(o), !(0 | r._crypto_secretstream_xchacha20poly1305_init_push(s, o, _))) {
                var h = {
                    state: s,
                    header: y(c, a)
                };
                return g(t), h;
            }
            b(t, "invalid usage");
        }
        function hr(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_secretstream_xchacha20poly1305_keybytes()), _ = t.address;
            a.push(_), r._crypto_secretstream_xchacha20poly1305_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function pr(e, a, t, _) {
            var n = [];
            l(_), m(n, e, "state_address"), a = E(n, a, "cipher");
            var s, c = r._crypto_secretstream_xchacha20poly1305_abytes(), o = a.length;
            o < c && f(n, "cipher is too short"), s = d(a), n.push(s);
            var h = null, p = 0;
            null != t && (h = d(t = E(n, t, "ad")), p = t.length, n.push(h));
            var i = new u(o - r._crypto_secretstream_xchacha20poly1305_abytes() | 0), b = i.address;
            n.push(b);
            var x, k = (x = v(1), n.push(x), (k = 0 === r._crypto_secretstream_xchacha20poly1305_pull(e, b, 0, x, s, o, 0, h, p) && {
                tag: r.HEAPU8[x],
                message: i
            }) && {
                message: y(k.message, _),
                tag: k.tag
            });
            return g(n), k;
        }
        function yr(e, a, t, _, n) {
            var s = [];
            l(n), m(s, e, "state_address");
            var c = d(a = E(s, a, "message_chunk")), o = a.length;
            s.push(c);
            var h = null, p = 0;
            null != t && (h = d(t = E(s, t, "ad")), p = t.length, s.push(h)), m(s, _, "tag"), ("number" != typeof _ || (0 | _) !== _ || _ < 0) && f(s, "tag must be an unsigned integer");
            var i = new u(o + r._crypto_secretstream_xchacha20poly1305_abytes() | 0), v = i.address;
            if (s.push(v), !(0 | r._crypto_secretstream_xchacha20poly1305_push(e, v, 0, c, o, 0, h, p, 0, _))) {
                var x = y(i, n);
                return g(s), x;
            }
            b(s, "invalid usage");
        }
        function ir(e, a) {
            var t = [];
            return l(a), m(t, e, "state_address"), r._crypto_secretstream_xchacha20poly1305_rekey(e), g(t), !0;
        }
        function lr(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "key");
            var c, o = 0 | r._crypto_shorthash_keybytes();
            a.length !== o && f(_, "invalid key length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_shorthash_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_shorthash(p, n, s, 0, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function ur(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_shorthash_keybytes()), _ = t.address;
            a.push(_), r._crypto_shorthash_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function dr(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "key");
            var c, o = 0 | r._crypto_shorthash_siphashx24_keybytes();
            a.length !== o && f(_, "invalid key length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_shorthash_siphashx24_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_shorthash_siphashx24(p, n, s, 0, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function vr(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "privateKey");
            var c, o = 0 | r._crypto_sign_secretkeybytes();
            a.length !== o && f(_, "invalid privateKey length"), c = d(a), _.push(c);
            var h = new u(e.length + r._crypto_sign_bytes() | 0), p = h.address;
            if (_.push(p), !(0 | r._crypto_sign(p, null, n, s, 0, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function gr(e, a, t) {
            var _ = [];
            l(t);
            var n = d(e = E(_, e, "message")), s = e.length;
            _.push(n), a = E(_, a, "privateKey");
            var c, o = 0 | r._crypto_sign_secretkeybytes();
            a.length !== o && f(_, "invalid privateKey length"), c = d(a), _.push(c);
            var h = new u(0 | r._crypto_sign_bytes()), p = h.address;
            if (_.push(p), !(0 | r._crypto_sign_detached(p, null, n, s, 0, c))) {
                var i = y(h, t);
                return g(_), i;
            }
            b(_, "invalid usage");
        }
        function br(e, a) {
            var t = [];
            l(a), e = E(t, e, "edPk");
            var _, n = 0 | r._crypto_sign_publickeybytes();
            e.length !== n && f(t, "invalid edPk length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_scalarmult_scalarbytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_sign_ed25519_pk_to_curve25519(c, _))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "invalid key");
        }
        function fr(e, a) {
            var t = [];
            l(a), e = E(t, e, "edSk");
            var _, n = 0 | r._crypto_sign_secretkeybytes();
            e.length !== n && f(t, "invalid edSk length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_scalarmult_scalarbytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_sign_ed25519_sk_to_curve25519(c, _))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "invalid key");
        }
        function mr(e, a) {
            var t = [];
            l(a), e = E(t, e, "privateKey");
            var _, n = 0 | r._crypto_sign_secretkeybytes();
            e.length !== n && f(t, "invalid privateKey length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_sign_publickeybytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_sign_ed25519_sk_to_pk(c, _))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "invalid key");
        }
        function Er(e, a) {
            var t = [];
            l(a), e = E(t, e, "privateKey");
            var _, n = 0 | r._crypto_sign_secretkeybytes();
            e.length !== n && f(t, "invalid privateKey length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_sign_seedbytes()), c = s.address;
            if (t.push(c), !(0 | r._crypto_sign_ed25519_sk_to_seed(c, _))) {
                var o = y(s, a);
                return g(t), o;
            }
            b(t, "invalid key");
        }
        function xr(e, a, t) {
            var _ = [];
            l(t), m(_, e, "state_address"), a = E(_, a, "privateKey");
            var n, s = 0 | r._crypto_sign_secretkeybytes();
            a.length !== s && f(_, "invalid privateKey length"), n = d(a), _.push(n);
            var c = new u(0 | r._crypto_sign_bytes()), o = c.address;
            if (_.push(o), !(0 | r._crypto_sign_final_create(e, o, null, n))) {
                var h = (r._free(e), y(c, t));
                return g(_), h;
            }
            b(_, "invalid usage");
        }
        function kr(e, a, t, _) {
            var n = [];
            l(_), m(n, e, "state_address"), a = E(n, a, "signature");
            var s, c = 0 | r._crypto_sign_bytes();
            a.length !== c && f(n, "invalid signature length"), s = d(a), n.push(s), t = E(n, t, "publicKey");
            var o, h = 0 | r._crypto_sign_publickeybytes();
            t.length !== h && f(n, "invalid publicKey length"), o = d(t), n.push(o);
            var p = !(0 | r._crypto_sign_final_verify(e, s, o));
            return g(n), p;
        }
        function Sr(e) {
            var a = [];
            l(e);
            var t = new u(208).address;
            if (!(0 | r._crypto_sign_init(t))) {
                var _ = t;
                return g(a), _;
            }
            b(a, "internal error");
        }
        function Tr(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_sign_publickeybytes()), _ = t.address;
            a.push(_);
            var n = new u(0 | r._crypto_sign_secretkeybytes()), s = n.address;
            if (a.push(s), !(0 | r._crypto_sign_keypair(_, s))) {
                var c = {
                    publicKey: y(t, e),
                    privateKey: y(n, e),
                    keyType: "ed25519"
                };
                return g(a), c;
            }
            b(a, "internal error");
        }
        function wr(e, a, t) {
            var _ = [];
            l(t), e = E(_, e, "signedMessage");
            var n, s = r._crypto_sign_bytes(), c = e.length;
            c < s && f(_, "signedMessage is too short"), n = d(e), _.push(n), a = E(_, a, "publicKey");
            var o, h = 0 | r._crypto_sign_publickeybytes();
            a.length !== h && f(_, "invalid publicKey length"), o = d(a), _.push(o);
            var p = new u(c - r._crypto_sign_bytes() | 0), i = p.address;
            if (_.push(i), !(0 | r._crypto_sign_open(i, null, n, c, 0, o))) {
                var v = y(p, t);
                return g(_), v;
            }
            b(_, "incorrect signature for the given public key");
        }
        function Yr(e, a) {
            var t = [];
            l(a), e = E(t, e, "seed");
            var _, n = 0 | r._crypto_sign_seedbytes();
            e.length !== n && f(t, "invalid seed length"), _ = d(e), t.push(_);
            var s = new u(0 | r._crypto_sign_publickeybytes()), c = s.address;
            t.push(c);
            var o = new u(0 | r._crypto_sign_secretkeybytes()), h = o.address;
            if (t.push(h), !(0 | r._crypto_sign_seed_keypair(c, h, _))) {
                var p = {
                    publicKey: y(s, a),
                    privateKey: y(o, a),
                    keyType: "ed25519"
                };
                return g(t), p;
            }
            b(t, "invalid usage");
        }
        function Br(e, a, t) {
            var _ = [];
            l(t), m(_, e, "state_address");
            var n = d(a = E(_, a, "message_chunk")), s = a.length;
            _.push(n), 0 | r._crypto_sign_update(e, n, s, 0) && b(_, "invalid usage"), g(_);
        }
        function Ar(e, a, t) {
            var _ = [];
            e = E(_, e, "signature");
            var n, s = 0 | r._crypto_sign_bytes();
            e.length !== s && f(_, "invalid signature length"), n = d(e), _.push(n);
            var c = d(a = E(_, a, "message")), o = a.length;
            _.push(c), t = E(_, t, "publicKey");
            var h, p = 0 | r._crypto_sign_publickeybytes();
            t.length !== p && f(_, "invalid publicKey length"), h = d(t), _.push(h);
            var y = !(0 | r._crypto_sign_verify_detached(n, c, o, 0, h));
            return g(_), y;
        }
        function Mr(e, a, t, _) {
            var n = [];
            l(_), m(n, e, "outLength"), ("number" != typeof e || (0 | e) !== e || e < 0) && f(n, "outLength must be an unsigned integer"), a = E(n, a, "key");
            var s, c = 0 | r._crypto_stream_chacha20_keybytes();
            a.length !== c && f(n, "invalid key length"), s = d(a), n.push(s), t = E(n, t, "nonce");
            var o, h = 0 | r._crypto_stream_chacha20_noncebytes();
            t.length !== h && f(n, "invalid nonce length"), o = d(t), n.push(o);
            var p = new u(0 | e), i = p.address;
            n.push(i), r._crypto_stream_chacha20(i, e, 0, o, s);
            var v = y(p, _);
            return g(n), v;
        }
        function Ir(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "input_message")), c = e.length;
            n.push(s), a = E(n, a, "nonce");
            var o, h = 0 | r._crypto_stream_chacha20_ietf_noncebytes();
            a.length !== h && f(n, "invalid nonce length"), o = d(a), n.push(o), t = E(n, t, "key");
            var p, i = 0 | r._crypto_stream_chacha20_ietf_keybytes();
            t.length !== i && f(n, "invalid key length"), p = d(t), n.push(p);
            var v = new u(0 | c), m = v.address;
            if (n.push(m), 0 === r._crypto_stream_chacha20_ietf_xor(m, s, c, 0, o, p)) {
                var x = y(v, _);
                return g(n), x;
            }
            b(n, "invalid usage");
        }
        function Kr(e, a, t, _, n) {
            var s = [];
            l(n);
            var c = d(e = E(s, e, "input_message")), o = e.length;
            s.push(c), a = E(s, a, "nonce");
            var h, p = 0 | r._crypto_stream_chacha20_ietf_noncebytes();
            a.length !== p && f(s, "invalid nonce length"), h = d(a), s.push(h), m(s, t, "nonce_increment"), ("number" != typeof t || (0 | t) !== t || t < 0) && f(s, "nonce_increment must be an unsigned integer"), _ = E(s, _, "key");
            var i, v = 0 | r._crypto_stream_chacha20_ietf_keybytes();
            _.length !== v && f(s, "invalid key length"), i = d(_), s.push(i);
            var x = new u(0 | o), k = x.address;
            if (s.push(k), 0 === r._crypto_stream_chacha20_ietf_xor_ic(k, c, o, 0, h, t, i)) {
                var S = y(x, n);
                return g(s), S;
            }
            b(s, "invalid usage");
        }
        function Nr(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_stream_chacha20_keybytes()), _ = t.address;
            a.push(_), r._crypto_stream_chacha20_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function Lr(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "input_message")), c = e.length;
            n.push(s), a = E(n, a, "nonce");
            var o, h = 0 | r._crypto_stream_chacha20_noncebytes();
            a.length !== h && f(n, "invalid nonce length"), o = d(a), n.push(o), t = E(n, t, "key");
            var p, i = 0 | r._crypto_stream_chacha20_keybytes();
            t.length !== i && f(n, "invalid key length"), p = d(t), n.push(p);
            var v = new u(0 | c), m = v.address;
            if (n.push(m), 0 === r._crypto_stream_chacha20_xor(m, s, c, 0, o, p)) {
                var x = y(v, _);
                return g(n), x;
            }
            b(n, "invalid usage");
        }
        function Or(e, a, t, _, n) {
            var s = [];
            l(n);
            var c = d(e = E(s, e, "input_message")), o = e.length;
            s.push(c), a = E(s, a, "nonce");
            var h, p = 0 | r._crypto_stream_chacha20_noncebytes();
            a.length !== p && f(s, "invalid nonce length"), h = d(a), s.push(h), m(s, t, "nonce_increment"), ("number" != typeof t || (0 | t) !== t || t < 0) && f(s, "nonce_increment must be an unsigned integer"), _ = E(s, _, "key");
            var i, v = 0 | r._crypto_stream_chacha20_keybytes();
            _.length !== v && f(s, "invalid key length"), i = d(_), s.push(i);
            var x = new u(0 | o), k = x.address;
            if (s.push(k), 0 === r._crypto_stream_chacha20_xor_ic(k, c, o, 0, h, t, 0, i)) {
                var S = y(x, n);
                return g(s), S;
            }
            b(s, "invalid usage");
        }
        function Ur(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_stream_keybytes()), _ = t.address;
            a.push(_), r._crypto_stream_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function Cr(e) {
            var a = [];
            l(e);
            var t = new u(0 | r._crypto_stream_xchacha20_keybytes()), _ = t.address;
            a.push(_), r._crypto_stream_xchacha20_keygen(_);
            var n = y(t, e);
            return g(a), n;
        }
        function Pr(e, a, t, _) {
            var n = [];
            l(_);
            var s = d(e = E(n, e, "input_message")), c = e.length;
            n.push(s), a = E(n, a, "nonce");
            var o, h = 0 | r._crypto_stream_xchacha20_noncebytes();
            a.length !== h && f(n, "invalid nonce length"), o = d(a), n.push(o), t = E(n, t, "key");
            var p, i = 0 | r._crypto_stream_xchacha20_keybytes();
            t.length !== i && f(n, "invalid key length"), p = d(t), n.push(p);
            var v = new u(0 | c), m = v.address;
            if (n.push(m), 0 === r._crypto_stream_xchacha20_xor(m, s, c, 0, o, p)) {
                var x = y(v, _);
                return g(n), x;
            }
            b(n, "invalid usage");
        }
        function Rr(e, a, t, _, n) {
            var s = [];
            l(n);
            var c = d(e = E(s, e, "input_message")), o = e.length;
            s.push(c), a = E(s, a, "nonce");
            var h, p = 0 | r._crypto_stream_xchacha20_noncebytes();
            a.length !== p && f(s, "invalid nonce length"), h = d(a), s.push(h), m(s, t, "nonce_increment"), ("number" != typeof t || (0 | t) !== t || t < 0) && f(s, "nonce_increment must be an unsigned integer"), _ = E(s, _, "key");
            var i, v = 0 | r._crypto_stream_xchacha20_keybytes();
            _.length !== v && f(s, "invalid key length"), i = d(_), s.push(i);
            var x = new u(0 | o), k = x.address;
            if (s.push(k), 0 === r._crypto_stream_xchacha20_xor_ic(k, c, o, 0, h, t, 0, i)) {
                var S = y(x, n);
                return g(s), S;
            }
            b(s, "invalid usage");
        }
        function Xr(e, a) {
            var t = [];
            l(a), m(t, e, "length"), ("number" != typeof e || (0 | e) !== e || e < 0) && f(t, "length must be an unsigned integer");
            var _ = new u(0 | e), n = _.address;
            t.push(n), r._randombytes_buf(n, e);
            var s = y(_, a);
            return g(t), s;
        }
        function Gr(e, a, t) {
            var _ = [];
            l(t), m(_, e, "length"), ("number" != typeof e || (0 | e) !== e || e < 0) && f(_, "length must be an unsigned integer"), a = E(_, a, "seed");
            var n, s = 0 | r._randombytes_seedbytes();
            a.length !== s && f(_, "invalid seed length"), n = d(a), _.push(n);
            var c = new u(0 | e), o = c.address;
            _.push(o), r._randombytes_buf_deterministic(o, e, n);
            var h = y(c, t);
            return g(_), h;
        }
        function Dr(e) {
            l(e), r._randombytes_close();
        }
        function Fr(e) {
            l(e);
            var a = r._randombytes_random() >>> 0;
            return g([]), a;
        }
        function Vr(e, a) {
            var t = [];
            l(a);
            for(var _ = r._malloc(24), n = 0; n < 6; n++)r.setValue(_ + 4 * n, r.Runtime.addFunction(e[[
                "implementation_name",
                "random",
                "stir",
                "uniform",
                "buf",
                "close"
            ][n]]), "i32");
            0 | r._randombytes_set_implementation(_) && b(t, "unsupported implementation"), g(t);
        }
        function Hr(e) {
            l(e), r._randombytes_stir();
        }
        function Wr(e, a) {
            var t = [];
            l(a), m(t, e, "upper_bound"), ("number" != typeof e || (0 | e) !== e || e < 0) && f(t, "upper_bound must be an unsigned integer");
            var _ = r._randombytes_uniform(e) >>> 0;
            return g(t), _;
        }
        function qr() {
            var e = r._sodium_version_string(), a = r.UTF8ToString(e);
            return g([]), a;
        }
        return u.prototype.to_Uint8Array = function() {
            var e = new Uint8Array(this.length);
            return e.set(r.HEAPU8.subarray(this.address, this.address + this.length)), e;
        }, e.add = function(e, a) {
            if (!(e instanceof Uint8Array && a instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can added");
            var r = e.length, t = 0, _ = 0;
            if (a.length != e.length) throw new TypeError("Arguments must have the same length");
            for(_ = 0; _ < r; _++)t >>= 8, t += e[_] + a[_], e[_] = 255 & t;
        }, e.base64_variants = o, e.compare = function(e, a) {
            if (!(e instanceof Uint8Array && a instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be compared");
            if (e.length !== a.length) throw new TypeError("Only instances of identical length can be compared");
            for(var r = 0, t = 1, _ = e.length; _-- > 0;)r |= a[_] - e[_] >> 8 & t, t &= (a[_] ^ e[_]) - 1 >> 8;
            return r + r + t - 1;
        }, e.from_base64 = function(e, a) {
            a = h(a);
            var t, _ = [], n = new u(3 * (e = E(_, e, "input")).length / 4), s = d(e), c = v(4), o = v(4);
            return _.push(s), _.push(n.address), _.push(n.result_bin_len_p), _.push(n.b64_end_p), 0 !== r._sodium_base642bin(n.address, n.length, s, e.length, 0, c, o, a) && b(_, "invalid input"), r.getValue(o, "i32") - s !== e.length && b(_, "incomplete input"), n.length = r.getValue(c, "i32"), t = n.to_Uint8Array(), g(_), t;
        }, e.from_hex = function(e) {
            var a, t = [], _ = new u((e = E(t, e, "input")).length / 2), n = d(e), s = v(4);
            return t.push(n), t.push(_.address), t.push(_.hex_end_p), 0 !== r._sodium_hex2bin(_.address, _.length, n, e.length, 0, 0, s) && b(t, "invalid input"), r.getValue(s, "i32") - n !== e.length && b(t, "incomplete input"), a = _.to_Uint8Array(), g(t), a;
        }, e.from_string = n, e.increment = function(e) {
            if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be incremented");
            for(var a = 256, r = 0, t = e.length; r < t; r++)a >>= 8, a += e[r], e[r] = 255 & a;
        }, e.is_zero = function(e) {
            if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be checked");
            for(var a = 0, r = 0, t = e.length; r < t; r++)a |= e[r];
            return 0 === a;
        }, e.libsodium = a, e.memcmp = function(e, a) {
            if (!(e instanceof Uint8Array && a instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be compared");
            if (e.length !== a.length) throw new TypeError("Only instances of identical length can be compared");
            for(var r = 0, t = 0, _ = e.length; t < _; t++)r |= e[t] ^ a[t];
            return 0 === r;
        }, e.memzero = function(e) {
            if (!(e instanceof Uint8Array)) throw new TypeError("Only Uint8Array instances can be wiped");
            for(var a = 0, r = e.length; a < r; a++)e[a] = 0;
        }, e.output_formats = function() {
            return [
                "uint8array",
                "text",
                "hex",
                "base64"
            ];
        }, e.pad = function(e, a) {
            if (!(e instanceof Uint8Array)) throw new TypeError("buffer must be a Uint8Array");
            if ((a |= 0) <= 0) throw new Error("block size must be > 0");
            var t, _ = [], n = v(4), s = 1, c = 0, o = 0 | e.length, h = new u(o + a);
            _.push(n), _.push(h.address);
            for(var p = h.address, y = h.address + o + a; p < y; p++)r.HEAPU8[p] = e[c], c += s = 1 & ~((65535 & ((o -= s) >>> 48 | o >>> 32 | o >>> 16 | o)) - 1 >> 16);
            return 0 !== r._sodium_pad(n, h.address, e.length, a, h.length) && b(_, "internal error"), h.length = r.getValue(n, "i32"), t = h.to_Uint8Array(), g(_), t;
        }, e.unpad = function(e, a) {
            if (!(e instanceof Uint8Array)) throw new TypeError("buffer must be a Uint8Array");
            if ((a |= 0) <= 0) throw new Error("block size must be > 0");
            var t = [], _ = d(e), n = v(4);
            return t.push(_), t.push(n), 0 !== r._sodium_unpad(n, _, e.length, a) && b(t, "unsupported/invalid padding"), e = (e = new Uint8Array(e)).subarray(0, r.getValue(n, "i32")), g(t), e;
        }, e.ready = _, e.symbols = function() {
            return Object.keys(e).sort();
        }, e.to_base64 = p, e.to_hex = c, e.to_string = s, e;
    }
    var r = "object" == typeof e.sodium && "function" == typeof e.sodium.onload ? e.sodium.onload : null;
    "function" == typeof define && define.amd ? ((r)=>r !== undefined && __turbopack_export_value__(r))(a(exports, __turbopack_require__("[project]/node_modules/.pnpm/libsodium-sumo@0.7.15/node_modules/libsodium-sumo/dist/modules-sumo/libsodium-sumo.js [app-ssr] (ecmascript)"))) : "object" == ("TURBOPACK compile-time value", "object") && "string" != typeof exports.nodeName ? a(exports, __turbopack_require__("[project]/node_modules/.pnpm/libsodium-sumo@0.7.15/node_modules/libsodium-sumo/dist/modules-sumo/libsodium-sumo.js [app-ssr] (ecmascript)")) : e.sodium = a(e.commonJsStrict = {}, e.libsodium), r && e.sodium.ready.then(function() {
        r(e.sodium);
    });
}(this);
}}),

};

//# sourceMappingURL=67695_libsodium-wrappers-sumo_dist_modules-sumo_libsodium-wrappers_6c8ffc.js.map