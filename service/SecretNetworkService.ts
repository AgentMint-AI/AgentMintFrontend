// import { SecretNetworkClient } from "secretjs";

// interface TwitterCredentials {
//   username: string;
//   password: string;
//   cookies?: string;
// }

// export class SecretNetworkService {
//   private client: SecretNetworkClient;
//   private contractAddress: string;
//   private contractHash: string;

//   constructor() {
//     this.client = new SecretNetworkClient({
//       url: process.env.SECRET_LCD_URL || "https://lcd.secret.express",
//       chainId: process.env.SECRET_CHAIN_ID || "secret-4",
//     });
//     this.contractAddress = process.env.SECRET_CONTRACT_ADDRESS!;
//     this.contractHash = process.env.SECRET_CONTRACT_HASH!;
//   }

//   async storeCredentials(
//     userId: string,
//     credentials: TwitterCredentials
//   ): Promise<string> {
//     const viewingKey = this.generateViewingKey();

//     await this.client.tx.compute.executeContract({
//       sender: process.env.SECRET_WALLET_ADDRESS!,
//       contract_address: this.contractAddress,
//       code_hash: this.contractHash,
//       msg: {
//         store_value: {
//           key: userId,
//           value: credentials,
//           viewing_key: viewingKey,
//         },
//       },
//     });

//     return viewingKey;
//   }

//   async getCredentials(
//     userId: string,
//     viewingKey: string
//   ): Promise<TwitterCredentials> {
//     const response = await this.client.query.compute.queryContract({
//       contract_address: this.contractAddress,
//       code_hash: this.contractHash,
//       query: {
//         retrieve_value: {
//           key: userId,
//           viewing_key: viewingKey,
//         },
//       },
//     });

//     return response;
//   }

//   private generateViewingKey(): string {
//     return Math.random().toString(36).substring(2) + Date.now().toString(36);
//   }
// }
