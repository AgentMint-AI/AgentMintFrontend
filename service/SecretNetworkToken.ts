import { SecretNetworkClient, Wallet } from "secretjs";

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

interface TokenCreationResult {
  transactionHash: string;
  contractAddress: string;
}

interface TokenTransferResult {
  transactionHash: string;
}

export class SecretNetworkTokenService {
  private secretjs: SecretNetworkClient;
  private contract_wasm: Buffer | null = null;

  constructor(private secretNetworkClient: SecretNetworkClient) {
    this.secretjs = secretNetworkClient;
  }

  private async loadWasm() {
    if (!this.contract_wasm) {
      const response = await fetch(
        "/compileContract/snip20_reference_impl.wasm.gz"
      );
      console.log("response", response);
      const arrayBuffer = await response.arrayBuffer();
      this.contract_wasm = Buffer.from(arrayBuffer);
    }
    console.log("this.contract_wasm", this.contract_wasm);
    return this.contract_wasm;
  }

  async createToken(params: TokenParams): Promise<TokenCreationResult> {
    try {
      const wasmBuffer = await this.loadWasm();

      // Upload contract code
      const tx = await this.secretjs.tx.compute.storeCode(
        {
          sender: this.secretjs.address,
          wasm_byte_code: wasmBuffer,
          source: "",
          builder: "",
        },
        {
          gasLimit: 4_000_000,
        }
      );

      const tokenCodeId = Number(
        tx.arrayLog?.find(
          (log) => log.type === "message" && log.key === "code_id"
        )?.value
      );

      if (!tokenCodeId) {
        throw new Error("Failed to get code ID from transaction");
      }

      const tokenCodeHash = (
        await this.secretjs.query.compute.codeHashByCodeId({
          code_id: tokenCodeId.toString(),
        })
      ).code_hash;

      // Initialize contract
      const initMsg = {
        name: params.name,
        symbol: params.symbol,
        decimals: params.decimals,
        prng_seed: Buffer.from("Something really random").toString("base64"),
        admin: this.secretjs.address,
        initial_balances: [
          {
            address: this.secretjs.address,
            amount: params.initialSupply,
          },
        ],
        config: {
          enable_deposit: params.enableDeposit ?? true,
          enable_redeem: params.enableRedeem ?? true,
          enable_mint: params.enableMint ?? true,
          enable_burn: params.enableBurn ?? true,
          can_modify_denoms: params.canModifyDenoms ?? true,
        },
      };

      const instantiateTx = await this.secretjs.tx.compute.instantiateContract(
        {
          code_id: tokenCodeId,
          sender: this.secretjs.address,
          code_hash: tokenCodeHash,
          init_msg: initMsg,
          label: `${params.symbol}_token_${Math.ceil(Math.random() * 10000)}`,
        },
        {
          gasLimit: 400_000,
        }
      );

      const contractAddress = instantiateTx.arrayLog?.find(
        (log) => log.type === "message" && log.key === "contract_address"
      )?.value;

      if (!contractAddress) {
        throw new Error("Failed to get contract address");
      }

      return {
        transactionHash: instantiateTx.transactionHash,
        contractAddress,
      };
    } catch (error) {
      console.error("Error creating token:", error);
      throw error;
    }
  }

  async transferToken(
    contract_address: string,
    recipient: string,
    amount: string
  ): Promise<TokenTransferResult> {
    try {
      const tx = await this.secretjs.tx.compute.executeContract(
        {
          sender: this.secretjs.address,
          contract_address,
          msg: {
            transfer: {
              recipient,
              amount,
            },
          },
        },
        {
          gasLimit: 100_000,
        }
      );

      return {
        transactionHash: tx.transactionHash,
      };
    } catch (error) {
      console.error("Error transferring tokens:", error);
      throw error;
    }
  }
}
// Example usage
// async function testTokenOperations() {
//   try {
//     const wallet = new Wallet(
//       "desk pigeon hammer sleep only mistake stool december offer patrol once vacant"
//     );

//     const secretjs = new SecretNetworkClient({
//       chainId: "pulsar-3",
//       url: "https://pulsar.lcd.secretnodes.com",
//       wallet: wallet,
//       walletAddress: wallet.address,
//     });

//     const secretToken = new SecretNetworkTokenService(secretjs);

//     // Example token parameters
//     const tokenParams = {
//       name: "TestToken",
//       symbol: "TEST",
//       initialSupply: "1000000",
//       decimals: 6,
//       enableDeposit: true,
//       enableRedeem: true,
//       enableMint: true,
//       enableBurn: true,
//       canModifyDenoms: true,
//     };

//     // Create token
//     const createTx = await secretToken.createToken(tokenParams);
//     console.log("Token created:", createTx);

//     // Get contract address from creation transaction
//     const contractAddress = createTx?.arrayLog?.find(
//       (log) => log.type === "message" && log.key === "contract_address"
//     )?.value;
//     console.log("Contract address:", contractAddress);

//     // Transfer some tokens
//     const recipientAddress = "secret1verdmwf2e0d930vulxru5fg3lm9y8r3xg5u7l6"; // Replace with actual recipient address
//     const transferAmount = "1000";

//     const transferTx = await secretToken.transferToken(
//       contractAddress,
//       recipientAddress,
//       transferAmount
//     );
//     console.log("Transfer completed:", transferTx);
//   } catch (error) {
//     console.error("Error in token operations:", error);
//   }
// }

// testTokenOperations().then(() => {
//   console.log("Token operations completed");
// });
