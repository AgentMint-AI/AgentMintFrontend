/**
 * Service class for interacting with the AgentRegistry smart contract.
 * Provides functionality to create and manage agents on the blockchain.
 */
import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { tarus } from "@/lib/tarus";
import { wagmiAgentRegistryConfig } from "@/lib/constant";

export class AgentRegistryService {
  private publicClient;
  private walletClient;

  /**
   * Creates a new instance of AgentRegistryService
   * @param rpcUrl - URL of the EVM RPC endpoint
   * @param registryAddress - Address of the deployed AgentRegistry contract
   * @param privateKey - Private key for transaction signing
   * @throws {Error} If any required parameters are missing
   */
  constructor(rpcUrl: string, registryAddress: string, privateKey: string) {
    console.log("Initializing AgentRegistryService...");

    if (!rpcUrl || !registryAddress || !privateKey) {
      throw new Error(
        "Missing required parameters: rpcUrl, registryAddress, and privateKey must be provided"
      );
    }

    this.publicClient = createPublicClient({
      chain: tarus,
      transport: http(rpcUrl),
    });

    const account = privateKeyToAccount(privateKey as `0x${string}`);
    console.log("Account created:", account.address);

    this.walletClient = createWalletClient({
      account,
      chain: tarus,
      transport: http(rpcUrl),
    });
  }

  /**
   * Creates a new agent on the blockchain
   * @param originalName - The original name for the agent
   * @param owner - The wallet address of the agent owner
   * @returns Promise<string> The encoded name of the created agent
   * @throws {Error} If agent creation fails
   */
  async createAgent(originalName: string, owner: string): Promise<string> {
    try {
      const { request } = await this.publicClient.simulateContract({
        ...wagmiAgentRegistryConfig,
        functionName: "createAgent",
        args: [originalName, owner],
      });

      const hash = await this.walletClient.writeContract(request);
      console.log("Transaction hash:", hash);

      // Wait for transaction to be mined
      await this.publicClient.waitForTransactionReceipt({ hash });

      // Get the latest agent's encoded name from getAgentsByWallet
      const agents = await this.getAgentsByWallet(owner);
      const latestAgent = agents[agents.length - 1];
      const encodedName = latestAgent.encodedName;

      console.log("Encoded name:", encodedName);
      return encodedName;
    } catch (error) {
      console.error("Error creating agent:", error);
      throw error;
    }
  }

  /**
   * Retrieves all agents owned by a specific wallet
   * @param owner - The wallet address to query agents for
   * @returns Promise containing array of agent objects
   * @throws {Error} If retrieval fails
   */
  async getAgentsByWallet(owner: string) {
    try {
      const agents = await this.publicClient.readContract({
        ...wagmiAgentRegistryConfig,
        functionName: "getAgentsByWallet",
        args: [owner],
      });

      return agents;
    } catch (error) {
      console.error("Error getting agents:", error);
      throw error;
    }
  }
}

// Example usage:
// async function example() {
//   const agentRegistry = new AgentRegistryService(
//     "http://127.0.0.1:8545", // RPC URL
//     "0x5FbDB2315678afecb367f032d93F642f64180aa3", // Contract address
//     "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" // Private key
//   );

//   try {
//     // Create a new agent
//     const encodedName = await agentRegistry.createAgent(
//       "CoolAgentS", // Original name
//       "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" // Owner wallet address
//     );
//     console.log("Agent created with encoded name:", encodedName);

//     // Get all agents for a wallet
//     const agents = await agentRegistry.getAgentsByWallet(
//       "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
//     );
//     console.log("Agents for wallet:", agents);
//   } catch (error) {
//     console.error("Error in example:", error);
//   }
// }

// example();
