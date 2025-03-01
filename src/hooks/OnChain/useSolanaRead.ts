import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState, useCallback } from "react";
import { PublicKey } from "@solana/web3.js";
import { getMint } from "@solana/spl-token";

interface TokenInfo {
  decimals: number;
  supply: string;
  adjustedSupply: number;
  mintAuthority?: string;
  freezeAuthority?: string;
}

export function useSolanaRead() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null);

  const getTokenInfo = useCallback(
    async (tokenAddress: string) => {
      if (!publicKey) return;

      try {
        // Create a PublicKey object from the token mint address
        const mintPubkey = new PublicKey(tokenAddress);

        // Fetch the mint info
        const mintInfo = await getMint(connection, mintPubkey);

        setTokenInfo({
          decimals: mintInfo.decimals,
          supply: mintInfo.supply.toString(),
          adjustedSupply:
            Number(mintInfo.supply) / Math.pow(10, mintInfo.decimals),
          mintAuthority: mintInfo.mintAuthority?.toBase58(),
          freezeAuthority: mintInfo.freezeAuthority?.toBase58(),
        });
      } catch (error) {
        console.error("Error fetching token information:", error);
      }
    },
    [connection, publicKey]
  );

  return {
    getTokenInfo,
    tokenInfo,
  };
}
