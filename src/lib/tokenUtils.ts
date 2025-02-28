import { PublicKey } from "@solana/web3.js";
import { parseEther, getAddress } from "viem";

// Convert a Solana address to bytes
export function solanaAddressToBytes(address: string): Uint8Array {
  const publicKey = new PublicKey(address);
  return publicKey.toBuffer();
}

// Convert bytes back to a Solana address
export function bytesToSolanaAddress(bytes: Uint8Array): string {
  return new PublicKey(bytes).toString();
}

// Convert an EVM address to bytes
export function evmAddressToBytes(address: string): string {
  return parseEther(address).toString();
}

// Convert bytes back to an EVM address
export function bytesToEvmAddress(bytes: string): string {
  return getAddress(bytes);
}

// Convert a Secret Network address to bytes (assuming base64 encoding)
export function secretAddressToBytes(address: string): Uint8Array {
  return Uint8Array.from(
    atob(address)
      .split("")
      .map((c) => c.charCodeAt(0))
  );
}

// Convert bytes back to a Secret Network address
export function bytesToSecretAddress(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes));
}

// Convert a TON address to bytes (assuming base64 encoding)
export function tonAddressToBytes(address: string): Uint8Array {
  return Uint8Array.from(
    atob(address)
      .split("")
      .map((c) => c.charCodeAt(0))
  );
}

// Convert bytes back to a TON address
export function bytesToTonAddress(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes));
}

// Additional utility functions can be added here
