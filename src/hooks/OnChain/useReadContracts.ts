import { useReadContract } from "wagmi";
import { wagmiContractConfig, wagmiAgentRegistryConfig } from "@/lib/constant";

interface TokenShowcase {
  owner: string;
  chain: number; // Chain enum: 0=SECRETNETWORK, 1=EVM, 2=SOLANA, 3=TON
  tokenAddress: string;
  showcaseCid: string;
  tokenMetadataCid: string;
  createdAt: bigint;
}

interface UserTokenInfo {
  chain: number;
  tokenAddress: string;
  showcaseCid: string;
  tokenMetadataCid: string;
  hasShowcase: boolean;
}

interface Agent {
  originalName: string;
  encodedName: string;
  count: bigint;
  exists: boolean;
}

// Create separate hooks for dynamic queries
export function useTokenShowcaseByAddress(tokenAddress: string) {
  const { data, isError, isLoading } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getTokenShowcaseByAddress",
    args: [tokenAddress],
  });

  return {
    data: data as TokenShowcase,
    isError,
    isLoading,
  };
}

export function useTokenShowcasesByPage(page: number, pageSize: number) {
  const { data, isError, isLoading } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getTokenShowcasesByPage",
    args: [page, pageSize],
  });

  return {
    data: data as TokenShowcase[],
    isError,
    isLoading,
  };
}

export function useShowcaseCid(ownerBytes: string, index: number) {
  const { data, isError, isLoading } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getShowcaseCid",
    args: [ownerBytes, index],
  });

  return {
    data: data as string,
    isError,
    isLoading,
  };
}

export function useAgentsByWallet(owner: string) {
  const { data, isError, isLoading } = useReadContract({
    ...wagmiAgentRegistryConfig,
    functionName: "getAgentsByWallet",
    args: [owner],
  });

  return {
    data: data as Agent[],
    isError,
    isLoading,
  };
}

export function useReadContracts(ownerAddress: string) {
  // For all chains, we'll use the address directly as a string
  const ownerString = ownerAddress;
  console.log(ownerString, "ownerString");
  // Read token count for owner
  const {
    data: tokenCount,
    isError: tokenCountError,
    isLoading: tokenCountLoading,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getTokenCount",
    args: [ownerString],
  });

  // Read token details for owner
  const {
    data: tokenDetails,
    isError: tokenDetailsError,
    isLoading: tokenDetailsLoading,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getTokenContract",
    args: [ownerString],
  });

  console.log(tokenDetails, "tokenDe");

  // Read all token showcases
  const {
    data: allShowcases,
    isError: allShowcasesError,
    isLoading: allShowcasesLoading,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getAllTokenShowcases",
    args: [],
  });

  // Read showcase count
  const {
    data: showcaseCount,
    isError: showcaseCountError,
    isLoading: showcaseCountLoading,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getShowcaseCount",
    args: [],
  });

  return {
    tokenCount: tokenCount as number,
    tokenDetails: tokenDetails as UserTokenInfo[],
    allShowcases: allShowcases as TokenShowcase[],
    showcaseCount: showcaseCount as number,
    isError:
      tokenCountError ||
      tokenDetailsError ||
      allShowcasesError ||
      showcaseCountError,
    isLoading:
      tokenCountLoading ||
      tokenDetailsLoading ||
      allShowcasesLoading ||
      showcaseCountLoading,
  };
}
