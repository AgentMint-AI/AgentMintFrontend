import { TokenParams as SolanaTokenParams } from "@/hooks/OnChain/useSolanaWrite";
import { TokenParams as SecretTokenParams } from "@/hooks/OnChain/useSecretNetworkWrite";
import { TokenFormData, TokenMetadata, ShowcaseMetadata } from "@/types/token";
import { TokenFactoryService } from "./TokenFactoryService";

interface TokenCreationResult {
  contractAddress: string;
  metadataCid: string;
  showcaseCid?: string;
}

interface MetadataUploadResult {
  metadataCid: string;
  showcaseCid?: string;
}

export class TokenCreationService {
  private tokenFactoryService: TokenFactoryService;

  constructor() {
    // Initialize TokenFactoryService with environment variables
    this.tokenFactoryService = new TokenFactoryService(
      process.env.NEXT_PUBLIC_EVM_RPC_URL!,
      process.env.NEXT_PUBLIC_EVM_CONTRACT_ADDRESS!,
      process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY!
    );
  }

  private prepareTokenMetadata(values: TokenFormData): TokenMetadata {
    return {
      name: values.name,
      symbol: values.symbol,
      chain: values.chain,
      description: values.description,
      image: values.image,
      decimals: values.decimals,
      initialSupply: values.initialSupply,
      isMintable: values.isMintable,
      isBurnable: values.isBurnable,
      isPausable: values.isPausable,
      hasRevokeMintAuthority: values.hasRevokeMintAuthority,
      hasFreezeAuthority: values.hasFreezeAuthority,
    };
  }

  private prepareShowcaseMetadata(values: TokenFormData): ShowcaseMetadata {
    return {
      youtubeLink: values.showcase?.youtubeLink,
      socialLinks: values.showcase?.socialLinks,
      roadmap: values.showcase?.roadmap,
      team: values.showcase?.team?.map((member) => ({
        name: member.name,
        role: member.role,
        profileImage: member.profileImage,
        socialLinks: Object.fromEntries(
          Object.entries(member.socialLinks ?? {}).filter(
            ([, value]) => value !== undefined
          )
        ),
      })),
      tags: values.showcase?.tags,
    };
  }

  /**
   * Creates a token on the specified chain and registers it in the factory
   * @param values Form values from TokenCreationForm
   * @param chainType The blockchain to create the token on
   * @param uploadTokenMetadata Function to upload metadata
   * @param createSolanaToken Function from useSolanaWrite
   * @param createSecretToken Function from useSecretNetworkWrite
   * @param createEvmToken Function from useEvmWrite
   */
  async createToken(
    values: TokenFormData,
    chainType: "evm" | "solana" | "secret" | "ton",
    showCase: boolean,
    {
      uploadTokenMetadata,
      createSolanaToken,
      createSecretToken,
      createEvmToken,
    }: {
      uploadTokenMetadata: (
        metadata: TokenMetadata,
        showcase?: ShowcaseMetadata
      ) => Promise<MetadataUploadResult>;
      createSolanaToken?: (params: SolanaTokenParams) => Promise<{
        signature: string;
        mintAddress: string;
        tokenAccount: string;
        ownerAddress: string;
      }>;
      createSecretToken?: (params: SecretTokenParams) => Promise<{
        transactionHash: string;
        contractAddress: string;
        ownerAddress: string;
      }>;
      createEvmToken?: (
        name: string,
        symbol: string,
        initialSupply: number,
        showcaseCid: string,
        tokenMetadataCid: string
      ) => Promise<string>;
    }
  ): Promise<TokenCreationResult> {
    try {
      console.log("creating token pls wait");
      console.log(values, "values");
      // Prepare metadata
      const tokenMetadata = this.prepareTokenMetadata(values);
      const showcaseMetadata = this.prepareShowcaseMetadata(values);

      // Upload metadata
      const { metadataCid, showcaseCid } = await uploadTokenMetadata(
        tokenMetadata,
        showCase ? showcaseMetadata : undefined
      );
      console.log("cid", metadataCid);
      let contractAddress: string;
      let ownerAddress: string;

      // Create token based on chain type
      switch (chainType) {
        case "solana": {
          if (!createSolanaToken)
            throw new Error("Solana creation not provided");

          const tokenParams: SolanaTokenParams = {
            name: values.name,
            symbol: values.symbol,
            uri: `${process.env.NEXT_PUBLIC_HOST}/api/token/metadata/solana/${metadataCid}`,
            decimals: values.decimals,
            initialSupply: Number(values.initialSupply),
            isMintable: values.isMintable ?? false,
            isFreezable: values.hasFreezeAuthority ?? false,
            isBurnable: values.isBurnable ?? false,
            isPausable: values.isPausable ?? false,
          };

          const result = await createSolanaToken(tokenParams);
          contractAddress = result.mintAddress;
          ownerAddress = result.ownerAddress;

          // Register token in factory using TokenFactoryService
          await this.tokenFactoryService.addTokenContract(ownerAddress, {
            chain: 2, // Solana
            tokenAddress: contractAddress,
            showcaseCid: showcaseCid || "",
            tokenMetadataCid: metadataCid,
            hasShowcase: !!showcaseCid,
          });
          break;
        }

        case "secret": {
          if (!createSecretToken)
            throw new Error("Secret creation not provided");

          const tokenParams: SecretTokenParams = {
            name: values.name,
            symbol: values.symbol,
            initialSupply: values.initialSupply,
            decimals: values.decimals,
            publicTotalSupply: true,
            enableMint: values.isMintable ?? false,
            enableBurn: values.isBurnable ?? false,
          };

          const result = await createSecretToken(tokenParams);
          contractAddress = result.contractAddress;
          ownerAddress = result.ownerAddress;

          // Register token in factory using TokenFactoryService
          await this.tokenFactoryService.addTokenContract(ownerAddress, {
            chain: 0, // Secret Network
            tokenAddress: contractAddress,
            showcaseCid: showcaseCid || "",
            tokenMetadataCid: metadataCid,
            hasShowcase: !!showcaseCid,
          });
          break;
        }

        case "evm": {
          if (!createEvmToken) throw new Error("EVM creation not provided");

          contractAddress = await createEvmToken(
            values.name,
            values.symbol,
            Number(values.initialSupply),
            showcaseCid || "",
            metadataCid
          );
          break;
        }

        case "ton":
          throw new Error("TON implementation not yet available");

        default:
          throw new Error(`Unsupported chain type: ${chainType}`);
      }

      return {
        contractAddress,
        metadataCid,
        showcaseCid,
      };
    } catch (error) {
      console.error("Error in token creation service:", error);
      throw error;
    }
  }
}
