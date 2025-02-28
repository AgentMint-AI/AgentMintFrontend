import { useState, useCallback } from "react";
import { useSecretNetwork } from "@/providers/secretNetworkContext";
import { SecretNetworkTokenService } from "../../../service/SecretNetworkToken";

export interface TokenParams {
  name: string;
  symbol: string;
  initialSupply: string;
  decimals: number;
  publicTotalSupply?: boolean;
  enableDeposit?: boolean;
  enableRedeem?: boolean;
  enableMint?: boolean;
  enableBurn?: boolean;
  canModifyDenoms?: boolean;
}

export function SecretNetworkWrite() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { secretjs, isConnected } = useSecretNetwork();

  const createToken = useCallback(
    async (params: TokenParams) => {
      if (!isConnected || !secretjs) {
        throw new Error("Secret Network client not initialized");
      }

      setIsLoading(true);
      setError(null);

      try {
        const tokenService = new SecretNetworkTokenService(secretjs);
        const result = await tokenService.createToken({
          ...params,
        });

        return {
          transactionHash: result.transactionHash,
          contractAddress: result.contractAddress,
          ownerAddress: secretjs.address,
        };
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.error("Error creating token:", errorMessage);
        setError(errorMessage);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [secretjs, isConnected]
  );

  const transferToken = useCallback(
    async (contract_address: string, recipient: string, amount: string) => {
      if (!isConnected || !secretjs) {
        throw new Error("Secret Network client not initialized");
      }

      setIsLoading(true);
      setError(null);

      try {
        const tokenService = new SecretNetworkTokenService(secretjs);
        const result = await tokenService.transferToken(
          contract_address,
          recipient,
          amount
        );

        return {
          signature: result.transactionHash,
          success: true,
        };
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.error("Error transferring tokens:", errorMessage);
        setError(errorMessage);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [secretjs, isConnected]
  );

  return {
    createToken,
    transferToken,
    isLoading,
    error,
  };
}
