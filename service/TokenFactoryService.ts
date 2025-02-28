import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { wagmiContractConfig } from "../src/lib/constant";
import { tarus } from "@/lib/tarus";

export class TokenFactoryService {
  private publicClient;
  private walletClient;
  private factoryAddress: `0x${string}`;

  constructor(rpcUrl: string, factoryAddress: string, privateKey: string) {
    console.log("Initializing TokenFactoryService...");
    console.log("RPC URL:", rpcUrl);
    console.log("Factory Address:", factoryAddress);
    console.log("Private Key:", privateKey);
    if (!rpcUrl || !factoryAddress || !privateKey) {
      throw new Error(
        "Missing required parameters: rpcUrl, factoryAddress, and privateKey must be provided"
      );
    }

    this.factoryAddress = factoryAddress as `0x${string}`;

    this.publicClient = createPublicClient({
      chain: tarus,
      transport: http(rpcUrl),
    });
    console.log("Public client created");

    const account = privateKeyToAccount(privateKey as `0x${string}`);
    console.log("Account created:", account.address);

    this.walletClient = createWalletClient({
      account,
      chain: tarus,
      transport: http(rpcUrl),
    });
    console.log("Wallet client created");
  }

  //USER WILL USE THE HOOKS
  // async createToken(
  //   name: string,
  //   symbol: string,
  //   initialSupply: number,
  //   showcaseCid: string,
  //   tokenMetadataCid: string
  // ) {
  //   try {
  //     const hash = await this.walletClient.writeContract({
  //       address: this.factoryAddress,
  //       abi: wagmiContractConfig.abi,
  //       functionName: "createToken",
  //       args: [name, symbol, initialSupply, showcaseCid, tokenMetadataCid],
  //     });

  //     return hash;
  //   } catch (error) {
  //     console.error("Failed to create token:", error);
  //     throw error;
  //   }
  // }

  async addTokenContract(
    ownerAddress: string,
    tokenInfo: {
      chain: number;
      tokenAddress: string;
      showcaseCid: string;
      tokenMetadataCid: string;
      hasShowcase: boolean;
    }
  ) {
    if (!ownerAddress || !tokenInfo) {
      throw new Error(
        "Missing required parameters: ownerAddress and tokenInfo must be provided"
      );
    }

    console.log("Adding token contract...");
    console.log("Owner address:", ownerAddress);
    console.log("Token info:", tokenInfo);
    try {
      const hash = await this.walletClient.writeContract({
        address: this.factoryAddress,
        abi: wagmiContractConfig.abi,
        functionName: "addTokenContract",
        args: [ownerAddress, tokenInfo],
      });
      console.log("Token contract added successfully. Hash:", hash);
      return hash;
    } catch (error) {
      console.error("Failed to add token contract:", error);
      throw error;
    }
  }

  async getAllTokenShowcases() {
    console.log("Getting all token showcases...");
    try {
      const showcases = await this.publicClient.readContract({
        address: this.factoryAddress,
        abi: wagmiContractConfig.abi,
        functionName: "getAllTokenShowcases",
        args: [],
      });
      console.log("Retrieved showcases:", showcases);
      return showcases;
    } catch (error) {
      console.error("Failed to retrieve all token showcases:", error);
      throw error;
    }
  }

  async getTokenShowcaseByAddress(tokenAddress: string) {
    if (!tokenAddress) {
      throw new Error(
        "Missing required parameter: tokenAddress must be provided"
      );
    }

    console.log("Getting token showcase for address:", tokenAddress);
    try {
      const showcase = await this.publicClient.readContract({
        address: this.factoryAddress,
        abi: wagmiContractConfig.abi,
        functionName: "getTokenShowcaseByAddress",
        args: [tokenAddress],
      });
      console.log("Retrieved showcase:", showcase);
      return showcase;
    } catch (error) {
      console.error("Failed to retrieve token showcase by address:", error);
      throw error;
    }
  }

  async getTokenShowcasesByPage(
    page: number,
    pageSize: number
  ): Promise<[number, string, string, string, boolean][]> {
    if (typeof page !== "number" || typeof pageSize !== "number") {
      throw new Error("Invalid parameters: page and pageSize must be numbers");
    }

    console.log("Getting token showcases by page:", page, "size:", pageSize);
    try {
      const showcases = await this.publicClient.readContract({
        address: this.factoryAddress,
        abi: wagmiContractConfig.abi,
        functionName: "getTokenShowcasesByPage",
        args: [page, pageSize],
      });
      console.log("Retrieved showcases:", showcases);
      return showcases as [number, string, string, string, boolean][];
    } catch (error) {
      console.error("Failed to retrieve token showcases by page:", error);
      throw error;
    }
  }

  async getTokenContract(ownerAddress: string) {
    if (!ownerAddress) {
      throw new Error(
        "Missing required parameter: ownerAddress must be provided"
      );
    }

    console.log("Getting token contract for owner:", ownerAddress);
    try {
      // First convert the address to string format as expected by the contract
      const addressString = `"${ownerAddress}"`;
      console.log("Converted address format:", addressString);

      const tokens = await this.publicClient.readContract({
        address: this.factoryAddress,
        abi: wagmiContractConfig.abi,
        functionName: "getTokenContract",
        args: [ownerAddress],
      });

      // Add type assertion and logging
      const typedTokens = tokens as unknown as [
        number,
        string,
        string,
        string,
        boolean
      ][];
      console.log("Retrieved tokens:", typedTokens);
      return typedTokens;
    } catch (error) {
      console.error("Failed to retrieve token contracts:", error);
      throw error;
    }
  }

  async getTokenCount(ownerAddress: string) {
    if (!ownerAddress) {
      throw new Error(
        "Missing required parameter: ownerAddress must be provided"
      );
    }

    console.log("Getting token count for owner:", ownerAddress);
    try {
      const count = await this.publicClient.readContract({
        address: this.factoryAddress,
        abi: wagmiContractConfig.abi,
        functionName: "getTokenCount",
        args: [ownerAddress],
      });
      console.log("Token count:", count);
      return count;
    } catch (error) {
      console.error("Failed to retrieve token count:", error);
      throw error;
    }
  }

  async getShowcaseCid(ownerAddress: string, index: number) {
    if (!ownerAddress || typeof index !== "number") {
      throw new Error(
        "Missing required parameters: ownerAddress must be provided and index must be a number"
      );
    }

    console.log(
      "Getting showcase CID for owner:",
      ownerAddress,
      "index:",
      index
    );
    try {
      const cid = await this.publicClient.readContract({
        address: this.factoryAddress,
        abi: wagmiContractConfig.abi,
        functionName: "getShowcaseCid",
        args: [ownerAddress, index],
      });
      console.log("Retrieved CID:", cid);
      return cid;
    } catch (error) {
      console.error("Failed to retrieve showcase CID:", error);
      throw error;
    }
  }

  async getShowcaseCount() {
    console.log("Getting showcase count...");
    try {
      const count = await this.publicClient.readContract({
        address: this.factoryAddress,
        abi: wagmiContractConfig.abi,
        functionName: "getShowcaseCount",
        args: [],
      });
      console.log("Showcase count:", count);
      return count;
    } catch (error) {
      console.error("Failed to retrieve showcase count:", error);
      throw error;
    }
  }

  async addressToString(address: string) {
    if (!address) {
      throw new Error("Missing required parameter: address must be provided");
    }

    console.log("Converting address to string:", address);
    try {
      const str = await this.publicClient.readContract({
        address: this.factoryAddress,
        abi: wagmiContractConfig.abi,
        functionName: "addressToString",
        args: [address as `0x${string}`],
      });
      console.log("Converted string:", str);
      return str;
    } catch (error) {
      console.error("Failed to convert address to string:", error);
      throw error;
    }
  }
}

// async function exampleUsage() {
//   // Initialize the service
//   const tokenFactoryService = new TokenFactoryService(
//     "https://auto-evm-0.taurus.subspace.network/ws",
//     "0x4Ef4267aF397a50441A910c2748235DC265848b7",
//     "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
//   );

//   try {
//     // Create a new token
//     // const createHash = await tokenFactoryService.createToken(
//     //   "My Token",
//     //   "MTK",
//     //   1000000,
//     //   "QmShowcaseCid...",
//     //   "QmMetadataCid..."
//     // );
//     // console.log("Token created with hash:", createHash);

//     // Add an existing token
//     // const addHash = await tokenFactoryService.addTokenContract(
//     //   "0xYourOwnerAddress",
//     //   {
//     //     chain: 1, // EVM
//     //     tokenAddress: "0xTokenAddress",
//     //     showcaseCid: "QmShowcaseCid...",
//     //     tokenMetadataCid: "QmMetadataCid...",
//     //     hasShowcase: true
//     //   }
//     // );
//     // console.log("Token added with hash:", addHash);

//     // Get all token showcases
//     const showcases = await tokenFactoryService.getAllTokenShowcases();
//     console.log("All token showcases:", showcases);

//     // Get a specific token showcase
//     const showcase = await tokenFactoryService.getTokenShowcaseByAddress(
//       "0xA6a8c021b0250e10ad0d6BD0E62039b9016e37e2"
//     );
//     console.log("Specific token showcase:", showcase);
//   } catch (error) {
//     console.error("Error in example usage:", error);
//   }
// }

// exampleUsage().then().catch();
// Example usage

// const tokenFactoryService = new TokenFactoryService('YOUR_RPC_URL', 'YOUR_FACTORY_ADDRESS', 'YOUR_PRIVATE_KEY');
// // Create a new token
// const createHash = await tokenFactoryService.createToken("My Token", "MTK", 1000000, "Qm...", "Qm...");

// // Add an existing token
// const addHash = await tokenFactoryService.addTokenContract("0xYourOwnerAddress", {
//   chain: 1, // EVM
//   tokenAddress: "0xTokenAddress",
//   showcaseCid: "Qm...",
//   tokenMetadataCid: "Qm...",
//   hasShowcase: true
// });

// // Get all token showcases
// const showcases = await tokenFactoryService.getAllTokenShowcases();

// // Get a specific token showcase
// const showcase = await tokenFactoryService.getTokenShowcaseByAddress("0xTokenAddress");
