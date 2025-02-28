import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState, useCallback } from "react";
import { PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider } from "@coral-xyz/anchor";
import { solanaTokenConfig } from "@/lib/constant";

export function useSolanaRead() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [tokenInfo, setTokenInfo] = useState(null);

  const getTokenInfo = useCallback(
    async (tokenAddress: string) => {
      if (!publicKey) return;

      try {
        const provider = new AnchorProvider(connection, window.solana, {});
        const program = new Program(
          solanaTokenConfig.idl,
          new PublicKey(solanaTokenConfig.address),
          provider
        );

        // Fetch token information
        const tokenAccount = await program.account.token.fetch(
          new PublicKey(tokenAddress)
        );
        setTokenInfo(tokenAccount);
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
