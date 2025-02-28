import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState, useCallback } from "react";
import {
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
  createInitializeMintInstruction,
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
} from "@solana/spl-token";
import {
  Keypair,
  SystemProgram,
  Transaction,
  PublicKey,
} from "@solana/web3.js";

/**
 * Interface defining the parameters required to create a new SPL token.
 * @interface TokenParams
 * @property {string} name - The name of the token (e.g., "Solana USD")
 * @property {string} symbol - The symbol of the token (e.g., "USDC")
 * @property {string} uri - The URI pointing to the token's metadata
 * @property {number} decimals - Number of decimal places (e.g., 9 for most Solana tokens)
 * @property {number} initialSupply - Initial amount of tokens to mint
 * @property {boolean} isMintable - Whether new tokens can be minted later
 * @property {boolean} isFreezable - Whether token accounts can be frozen
 * @property {boolean} isBurnable - Whether tokens can be burned
 * @property {boolean} isPausable - Whether transfers can be paused
 */
export interface TokenParams {
  name: string;
  symbol: string;
  uri: string;
  decimals: number;
  initialSupply: number;
  isMintable: boolean;
  isFreezable: boolean;
  isBurnable: boolean;
  isPausable: boolean;
}

/**
 * A custom React hook for creating and managing SPL tokens on Solana.
 * This hook provides functions to:
 * 1. Create new SPL tokens with custom parameters
 * 2. Create Associated Token Accounts (ATAs) for existing tokens
 *
 * The hook handles all the necessary transaction building, signing, and sending
 * while managing loading states and error handling.
 *
 * @example
 * ```tsx
 * const { createToken, createTokenAccount, isLoading } = useSolanaWrite();
 *
 * // Create a new token
 * const handleCreateToken = async () => {
 *   const result = await createToken({
 *     name: "My Token",
 *     symbol: "MTK",
 *     decimals: 9,
 *     initialSupply: 1000000,
 *     // ... other params
 *   });
 *   console.log("Token created:", result.mintAddress);
 * };
 *
 * // Create an ATA for an existing token
 * const handleCreateATA = async () => {
 *   const result = await createTokenAccount(
 *     "token_mint_address",
 *     "owner_address"
 *   );
 *   console.log("ATA created:", result.tokenAccount);
 * };
 * ```
 *
 * @returns {Object} An object containing token management functions and state
 * @returns {Function} createToken - Creates a new SPL token with specified parameters
 * @returns {Function} createTokenAccount - Creates an ATA for an existing token
 * @returns {boolean} isLoading - Loading state for ongoing operations
 */
export function useSolanaWrite() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Creates a new SPL token with the specified parameters.
   * This function:
   * 1. Creates a new mint account
   * 2. Initializes the mint with specified decimals and authorities
   * 3. Creates an Associated Token Account (ATA) for the token creator
   * 4. Mints the initial supply to the creator's ATA if specified
   *
   * @param {TokenParams} params - Parameters for the new token
   * @returns {Promise<Object>} Object containing transaction signature and addresses
   * @returns {string} signature - The transaction signature
   * @returns {string} mintAddress - The address of the new token mint
   * @returns {string} tokenAccount - The address of the creator's token account
   * @throws {Error} If wallet is not connected or transaction fails
   */
  const createToken = useCallback(
    async (params: TokenParams) => {
      console.log("Creating new token with params:", params);
      if (!publicKey || !sendTransaction) {
        throw new Error("Wallet not connected");
      }

      setIsLoading(true);

      try {
        // Generate the mint keypair
        const mintKeypair = Keypair.generate();
        console.log(
          "Generated mint keypair:",
          mintKeypair.publicKey.toString()
        );

        // Get minimum lamports for rent exemption
        const lamports = await connection.getMinimumBalanceForRentExemption(
          MINT_SIZE
        );
        console.log("Required lamports for rent exemption:", lamports);

        // Get the ATA address before creating it
        const associatedTokenAccount = await getAssociatedTokenAddress(
          mintKeypair.publicKey,
          publicKey,
          false,
          TOKEN_PROGRAM_ID
        );
        console.log(
          "Associated token account address:",
          associatedTokenAccount.toString()
        );

        // Create a transaction for token creation
        const transaction = new Transaction().add(
          // Create the mint account
          SystemProgram.createAccount({
            fromPubkey: publicKey,
            newAccountPubkey: mintKeypair.publicKey,
            space: MINT_SIZE,
            lamports,
            programId: TOKEN_PROGRAM_ID,
          }),
          // Initialize the mint
          createInitializeMintInstruction(
            mintKeypair.publicKey,
            params.decimals,
            publicKey,
            params.isFreezable ? publicKey : null,
            TOKEN_PROGRAM_ID
          ),
          // Create the associated token account
          createAssociatedTokenAccountInstruction(
            publicKey,
            associatedTokenAccount,
            publicKey,
            mintKeypair.publicKey
          )
        );
        console.log("Created transaction with initial instructions");

        // If initial supply > 0, add mint instruction
        if (params.initialSupply > 0) {
          const mintAmount =
            params.initialSupply * Math.pow(10, params.decimals);
          console.log(
            "Adding mint instruction for initial supply:",
            mintAmount
          );
          transaction.add(
            createMintToInstruction(
              mintKeypair.publicKey,
              associatedTokenAccount,
              publicKey,
              mintAmount
            )
          );
        }

        // Send the transaction
        console.log("Sending transaction...");
        const signature = await sendTransaction(transaction, connection, {
          signers: [mintKeypair],
        });
        console.log("Transaction sent with signature:", signature);

        // Wait for confirmation
        await connection.confirmTransaction(signature);
        console.log("Transaction confirmed");

        const result = {
          signature,
          mintAddress: mintKeypair.publicKey.toString(),
          tokenAccount: associatedTokenAccount.toString(),
          ownerAddress: publicKey.toString(),
        };
        console.log("Token creation completed successfully:", result);
        return result;
      } catch (error) {
        console.error("Error creating token:", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [connection, publicKey, sendTransaction]
  );

  /**
   * Creates an Associated Token Account (ATA) for an existing token.
   * This function creates a new ATA that can hold a specific token for a specific owner.
   * If the ATA already exists, the transaction will fail.
   *
   * @param {string} mintAddress - The address of the token mint
   * @param {string} owner - The address of the account that will own the token account
   * @returns {Promise<Object>} Object containing transaction details
   * @returns {string} signature - The transaction signature
   * @returns {string} tokenAccount - The address of the new token account
   * @throws {Error} If wallet is not connected or transaction fails
   */
  const createTokenAccount = useCallback(
    async (mintAddress: string, owner: string) => {
      console.log(
        "Creating token account for mint:",
        mintAddress,
        "owner:",
        owner
      );
      if (!publicKey || !sendTransaction) {
        throw new Error("Wallet not connected");
      }

      setIsLoading(true);

      try {
        const mintPubkey = new PublicKey(mintAddress);
        const ownerPubkey = new PublicKey(owner);
        console.log(
          "Parsed public keys - mint:",
          mintPubkey.toString(),
          "owner:",
          ownerPubkey.toString()
        );

        const associatedTokenAddress = await getAssociatedTokenAddress(
          mintPubkey,
          ownerPubkey,
          false,
          TOKEN_PROGRAM_ID
        );
        console.log(
          "Generated associated token address:",
          associatedTokenAddress.toString()
        );

        const transaction = new Transaction().add(
          createAssociatedTokenAccountInstruction(
            publicKey,
            associatedTokenAddress,
            ownerPubkey,
            mintPubkey
          )
        );
        console.log("Created transaction with ATA instruction");

        console.log("Sending transaction...");
        const signature = await sendTransaction(transaction, connection);
        console.log("Transaction sent with signature:", signature);

        await connection.confirmTransaction(signature);
        console.log("Transaction confirmed");

        const result = {
          signature,
          tokenAccount: associatedTokenAddress.toString(),
        };
        console.log("Token account creation completed successfully:", result);
        return result;
      } catch (error) {
        console.error("Error creating token account:", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [connection, publicKey, sendTransaction]
  );

  return {
    createToken,
    createTokenAccount,
    isLoading,
  };
}

// // Constants
//     createTokenAccount,
//     isLoading,
//   };
// }

// Constants
