"use client";
import { Icons } from "@/components/ui/icons";
import { AgentCard } from "@/app/dashboard/agents/_components/AgentCard";
import { AgentsHeader } from "@/app/dashboard/agents/_components/AgentsHeader";
import { AgentsEmptyState } from "@/app/dashboard/agents/_components/AgentsEmptyState";
import CharacterManagementService from "../../../../service/CharacterManagementService";
import { toast } from "sonner";
import { useAccount } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";

import { useAgentsByWallet } from "@/hooks/OnChain/useReadContracts";
import useSWR from "swr";
import { useTonWallet } from "../../../../tonconnect";
import { useSecretNetwork } from "@/providers/secretNetworkContext";

export default function AgentsPage() {
  const { isConnected: isEvmConnected, address: evmAddress } = useAccount();
  const { connected: isSolanaConnected, publicKey: solanaAddress } =
    useWallet();
  const { isConnected: isSecretConnected, address: secretAddress } =
    useSecretNetwork();
  const tonWallet = useTonWallet();
  const isTonConnected = !!tonWallet;

  const getWalletAddress = () => {
    if (isEvmConnected) return evmAddress;
    if (isSolanaConnected) return solanaAddress?.toString();
    if (isSecretConnected) return secretAddress;
    if (isTonConnected) return tonWallet?.account.address;
    return undefined;
  };

  const walletAddress = getWalletAddress();
  const isConnected =
    isEvmConnected || isSolanaConnected || isSecretConnected || isTonConnected;
  const { data: agents = [] } = useAgentsByWallet(walletAddress || "");
  const service = new CharacterManagementService();

  // Fetch agent details using SWR
  const fetcher = async (encodedNames: string[]) => {
    const details = await Promise.all(
      encodedNames.map(async (name) => {
        const [schedule, profile, status] = await Promise.all([
          service.getCharacterSchedule(name),
          service.getCharacterProfile(name),
          service.getCharacterStatus(name),
        ]);
        return { name, schedule, profile, status };
      })
    );
    return details;
  };

  // Use SWR to fetch agent details
  const {
    data: agentDetails,
    isLoading,
    mutate,
  } = useSWR(
    agents.length ? [agents.map((agent) => agent.encodedName)] : null,
    fetcher
  );

  const handleStatusToggle = async (
    agentName: string,
    currentStatus: "running" | "stopped"
  ) => {
    try {
      if (currentStatus === "running") {
        await service.stopCharacter(agentName);
      } else {
        await service.startCharacter(agentName);
      }
      // Revalidate the data
      await mutate();
      toast.success(
        `Agent ${
          currentStatus === "running" ? "stopped" : "started"
        } successfully`
      );
    } catch (error) {
      console.error("Failed to toggle agent status:", error);
      toast.error("Failed to update agent status");
    }
  };

  if (!isConnected) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
        <p className="text-gray-500">
          Please connect your wallet to view and manage your agents
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-16 text-center">
        <Icons.spinner className="w-8 h-8 animate-spin mx-auto" />
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <AgentsHeader />

      {!agentDetails?.length ? (
        <AgentsEmptyState />
      ) : (
        <div className="grid gap-6">
          {agentDetails.map((agent) => (
            <AgentCard
              key={agent.name}
              name={agent.name}
              status={agent.status.isRunning ? "running" : "stopped"}
              description={agent.profile.description}
              expertise={agent.profile.expertise}
              schedule={agent.schedule.twitter}
              onStatusToggle={() =>
                handleStatusToggle(
                  agent.name,
                  agent.status.isRunning ? "running" : "stopped"
                )
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
