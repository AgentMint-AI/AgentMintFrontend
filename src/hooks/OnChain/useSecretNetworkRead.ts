import { useCallback } from "react";
import { SecretNetworkClient } from "secretjs";

export function useSecretNetworkRead() {
  const queryBalance = useCallback(
    async (
      contractAddress: string,
      codeHash: string,
      secretjs: SecretNetworkClient
    ) => {
      const txQuery = await secretjs.query.snip20.getBalance({
        address: secretjs.address,
        contract: { address: contractAddress, code_hash: codeHash },
        auth: { key: "your_viewing_key" }, // Replace with the actual viewing key
      });
      return txQuery;
    },
    []
  );

  const queryTokenParams = useCallback(
    async (
      contractAddress: string,
      codeHash: string,
      secretjs: SecretNetworkClient
    ) => {
      const txQuery = await secretjs.query.snip20.getSnip20Params({
        contract: { address: contractAddress, code_hash: codeHash },
      });
      return txQuery;
    },
    []
  );

  const getTransactionHistory = useCallback(
    async (
      contractAddress: string,
      codeHash: string,
      secretjs: SecretNetworkClient
    ) => {
      const txQuery = await secretjs.query.snip20.getTransactionHistory({
        contract: { address: contractAddress, code_hash: codeHash },
        address: secretjs.address,
        auth: { key: "your_viewing_key" }, // Replace with the actual viewing key
        page_size: 10,
      });
      return txQuery;
    },
    []
  );

  return {
    queryBalance,
    queryTokenParams,
    getTransactionHistory,
  };
}
