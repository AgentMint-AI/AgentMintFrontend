import { useEffect, useState } from "react";
import { usePublicClient } from "wagmi";
import { wagmiContractConfig } from "@/lib/constant";
import { formatEther } from "viem";

export interface TokenLog {
  type: "mint" | "burn" | "transfer" | "pause" | "resume";
  hash: string;
  from: string;
  to?: string;
  amount?: string;
  timestamp: number;
  blockNumber: number;
}

export function useContractLogs(tokenAddress: string) {
  const [logs, setLogs] = useState<TokenLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const publicClient = usePublicClient();

  const fetchLogs = async () => {
    try {
      setIsLoading(true);

      // Get all relevant events
      const events = await publicClient?.getContractEvents({
        address: tokenAddress as `0x${string}`,
        abi: wagmiContractConfig.abi,
        fromBlock: 0n,
        toBlock: "latest",
        strict: true,
      });

      if (!events) return;

      // Process and format the logs
      const formattedLogs = await Promise.all(
        events.map(async (event) => {
          const block = await publicClient?.getBlock({
            blockNumber: event.blockNumber,
          });

          if (!block) throw new Error("Failed to fetch block");

          let type: TokenLog["type"];
          switch (event.eventName) {
            case "Transfer":
              type = "transfer";
              break;
            case "Mint":
              type = "mint";
              break;
            case "Burn":
              type = "burn";
              break;
            case "Paused":
              type = "pause";
              break;
            case "Unpaused":
              type = "resume";
              break;
            default:
              type = "transfer";
          }

          return {
            type,
            hash: event.transactionHash,
            from: event.args?.from || event.args?.operator || "",
            to: event.args?.to,
            amount: event.args?.amount
              ? formatEther(event.args.amount)
              : undefined,
            timestamp: Number(block.timestamp),
            blockNumber: Number(event.blockNumber),
          } satisfies TokenLog;
        })
      );

      // Sort logs by timestamp (newest first)
      const sortedLogs = formattedLogs.sort(
        (a, b) => b.timestamp - a.timestamp
      );
      setLogs(sortedLogs);
      setError(null);
    } catch (err) {
      console.error("Error fetching logs:", err);
      setError(err instanceof Error ? err : new Error("Failed to fetch logs"));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (tokenAddress) {
      fetchLogs();
    }
  }, [tokenAddress, publicClient]);

  return {
    logs,
    isLoading,
    error,
    refresh: () => {
      if (tokenAddress) {
        setIsLoading(true);
        setError(null);
        fetchLogs();
      }
    },
  };
}
