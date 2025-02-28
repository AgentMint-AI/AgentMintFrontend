// ai-meme-coin-creator/src/app/hooks/useEventListener.ts
import { useWatchContractEvent } from "wagmi";
import { wagmiContractConfig } from "@/lib/constant";
import { config } from "@/lib/wagmiConfig";

export function useEventListener() {
  // Listen for token creation events from EVM tarus
  useWatchContractEvent({
    ...wagmiContractConfig,
    config: config,
    eventName: "TokenCreated",
    onLogs(logs) {
      // Parse event data
      const { owner, chain, tokenAddress, showcaseCid, tokenMetadataCid } =
        logs[0].args;
      console.log("Token created (EVM):", {
        owner,
        chain,
        tokenAddress,
        showcaseCid,
        tokenMetadataCid,
      });
    },
  });

  // Listen for token added events from EVM
  useWatchContractEvent({
    ...wagmiContractConfig,
    config: config,
    eventName: "TokenAdded",
    onLogs(logs) {
      // Parse event data
      const { owner, chain, tokenAddress, showcaseCid, tokenMetadataCid } =
        logs[0].args;
      console.log("Token added (EVM):", {
        owner,
        chain,
        tokenAddress,
        showcaseCid,
        tokenMetadataCid,
      });
    },
  });
}
