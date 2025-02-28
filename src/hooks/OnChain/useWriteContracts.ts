import { useWriteContract } from "wagmi";
import { wagmiContractConfig } from "@/lib/constant";
import {
  solanaAddressToBytes,
  tonAddressToBytes,
  secretAddressToBytes,
} from "@/lib/tokenUtils";

/**
 * Hook for managing token creation and registration in the EVM contract.
 */
/**
 * Custom hook for managing token creation and registration in the EVM contract.
 *
 * This hook provides functionalities to create a new ERC20 meme coin and
 * to add an existing token to the contract based on the specified blockchain.
 *
 * @returns {Object} An object containing the functions to create a new token
 * and to add an existing token.
 */
export function useWriteContracts() {
  // Create a new token in EVM contract
  const { writeContractAsync: createErc20MemeCoin } = useWriteContract();
  const { writeContractAsync: addToken } = useWriteContract();

  /**
   * Adds an existing token to the contract.
   *
   * @param {string} ownerAddress - The address of the token owner.
   * @param {string} tokenAddress - The address of the token to be added.
   * @param {"SECRETNETWORK" | "SOLANA" | "TON" | "EVM"} chain - The blockchain
   * type where the token exists.
   * @param {string} showcaseCid - The CID for the token's showcase.
   * @param {string} tokenMetadataCid - The CID for the token's metadata.
   *
   * @throws Will throw an error if the chain type is unsupported.
   */
  const addExistingToken = async (
    ownerAddress: string,
    tokenAddress: string,
    chain: "SECRETNETWORK" | "SOLANA" | "TON" | "EVM",
    showcaseCid: string,
    tokenMetadataCid: string
  ) => {
    try {
      // Map chain to enum value
      const chainMap = {
        SECRETNETWORK: 0,
        EVM: 1,
        SOLANA: 2,
        TON: 3,
      };

      // Call addTokenContract with converted parameters
      await addToken({
        ...wagmiContractConfig,
        functionName: "addTokenContract",
        args: [
          ownerAddress,
          {
            chain: chainMap[chain],
            tokenAddress: tokenAddress,
            showcaseCid: showcaseCid,
            tokenMetadataCid: tokenMetadataCid,
            hasShowcase: showcaseCid.length > 0,
          },
        ],
      });
    } catch (error) {
      console.error("Error adding existing token:", error);
      throw error;
    }
  };

  /**
   * Creates a new ERC20 meme coin.
   *
   * @param {string} name - The name of the token.
   * @param {string} symbol - The symbol of the token.
   * @param {number} initialSupply - The initial supply of the token.
   * @param {string} showcaseCid - The CID for the token's showcase.
   * @param {string} tokenMetadataCid - The CID for the token's metadata.
   * @returns {Promise<string>} The address of the created token contract
   */
  const createEvmToken = async (
    name: string,
    symbol: string,
    initialSupply: number,
    showcaseCid: string,
    tokenMetadataCid: string
  ): Promise<string> => {
    try {
      const result = await createErc20MemeCoin({
        ...wagmiContractConfig,
        functionName: "createToken",
        args: [
          name,
          symbol,
          BigInt(initialSupply),
          showcaseCid,
          tokenMetadataCid,
        ],
      });
      console.log("result", result);
      return result as string;
    } catch (error) {
      console.error("Error creating EVM token:", error);
      throw error;
    }
  };

  return { createEvmToken, addExistingToken };
}
