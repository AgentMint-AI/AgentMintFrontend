import { SecretNetworkClient, Wallet } from "secretjs";
import { Connection, PublicKey } from "@solana/web3.js";
import { getMint } from "@solana/spl-token";
import { createPublicClient, http, getContract } from "viem";

export interface TokenInfo {
  decimals: number;
  currentSupply: string;
  adjustedSupply: number;
  mintAuthority?: string;
  freezeAuthority?: string;
  features?: {
    isMintable: boolean;
    isBurnable: boolean;
    isPausable: boolean;
  };
}

export class TokenInfoService {
  private static async getEvmTokenInfo(
    tokenAddress: string,
    rpcUrl: string
  ): Promise<TokenInfo> {
    const client = createPublicClient({
      transport: http(rpcUrl),
    });
    const contract = getContract({
      address: tokenAddress as `0x${string}`,
      abi: [
        {
          name: "totalSupply",
          type: "function",
          stateMutability: "view",
          inputs: [],
          outputs: [{ type: "uint256" }],
        },
      ],
      client,
    });

    const [totalSupply] = await Promise.all([contract.read.totalSupply()]);

    return {
      decimals: 18, //Erc20 has 18 decimals by default and that is what is configured in the contract
      currentSupply: totalSupply?.toString() ?? "",
      adjustedSupply: Number(totalSupply) / Math.pow(10, 18),
      features: {
        isMintable: false, // contract mint to the owner
        isBurnable: true, //
        isPausable: false, // contract pause to the owner
      },
    };
  }

  private static async getSecretTokenInfo(
    tokenAddress: string,
    secretjs: SecretNetworkClient
  ): Promise<TokenInfo> {
    // const contractInfo = await secretjs.query.compute.contractInfo({
    //   contract_address: tokenAddress,
    // });
    // // const codeHash = contractInfo.code_hash;
    // console.log("codeHash", codeHash);
    const params: any = await secretjs.query.compute.queryContract({
      contract_address: tokenAddress,
      query: { token_info: {} },
      // code_hash: codeHash,
    });

    return {
      decimals: params.decimals || 0,
      currentSupply: params.total_supply || "0",
      adjustedSupply: params.total_supply
        ? Number(params.total_supply) / Math.pow(10, params.decimals || 0)
        : 0,
      features: {
        isMintable: true,
        isBurnable: true,
        isPausable: false,
      },
    };
  }

  private static async getSolanaTokenInfo(
    tokenAddress: string,
    connection: Connection
  ): Promise<TokenInfo> {
    const mintPubkey = new PublicKey(tokenAddress);
    const mintInfo = await getMint(connection, mintPubkey);

    return {
      decimals: mintInfo.decimals,
      currentSupply: mintInfo.supply.toString(),
      adjustedSupply: Number(mintInfo.supply) / Math.pow(10, mintInfo.decimals),
      mintAuthority: mintInfo.mintAuthority?.toBase58(),
      freezeAuthority: mintInfo.freezeAuthority?.toBase58(),
      features: {
        isMintable: !!mintInfo.mintAuthority,
        isBurnable: true, // SPL tokens are always burnable
        isPausable: !!mintInfo.freezeAuthority,
      },
    };
  }

  static async getTokenInfo(
    tokenAddress: string,
    chain: number, // 0=SECRETNETWORK, 1=EVM, 2=SOLANA, 3=TON
    options: {
      connection?: Connection;
      secretjs?: SecretNetworkClient;
      rpcUrl?: string;
    }
  ): Promise<TokenInfo | null> {
    try {
      switch (chain) {
        case 0: // Secret Network
          if (!options.secretjs) {
            throw new Error("Secret Network client required");
          }
          return await this.getSecretTokenInfo(tokenAddress, options.secretjs);

        case 1: // EVM
          if (!options.rpcUrl) {
            throw new Error("RPC URL required for EVM");
          }
          return await this.getEvmTokenInfo(tokenAddress, options.rpcUrl);

        case 2: // Solana
          if (!options.connection) {
            throw new Error("Solana connection required");
          }
          return await this.getSolanaTokenInfo(
            tokenAddress,
            options.connection
          );

        default:
          console.error("Unsupported chain type:", chain);
          return null;
      }
    } catch (error) {
      console.error("Error fetching token info:", error);
      return null;
    }
  }
}

// // Example usage:
// async function example() {
//   // EVM example
//   const evmTokenInfo = await TokenInfoService.getTokenInfo(
//     "0xA6a8c021b0250e10ad0d6BD0E62039b9016e37e2", // Token address
//     1, // Chain type (EVM)
//     {
//       rpcUrl: "https://auto-evm.taurus.autonomys.xyz/ws",
//     }
//   );

//   // Secret Network example

//   const secretjs = new SecretNetworkClient({
//     chainId: "pulsar-3",
//     url: "https://pulsar.lcd.secretnodes.com",
//   });
//   const secretTokenInfo = await TokenInfoService.getTokenInfo(
//     "secret136acktxpd0arjprneqxtgxt832n8rnq8rrk7fy", // Token address
//     0, // Chain type (Secret Network)
//     {
//       secretjs,
//     }
//   );

//   // Solana example
//   const connection = new Connection("https://api.mainnet-beta.solana.com");
//   const solanaTokenInfo = await TokenInfoService.getTokenInfo(
//     "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN", // Token address
//     2, // Chain type (Solana)
//     {
//       connection,
//     }
//   );

//   console.log("EVM Token Info:", evmTokenInfo);
//   console.log("Secret Token Info:", secretTokenInfo);
//   console.log("Solana Token Info:", solanaTokenInfo);
// }

// example();
