"use client";

import { ManualAgentForm } from "@/components/social/ManualAgentForm";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSecretNetwork } from "@/providers/secretNetworkContext";
import { useTonWallet } from "../../../../tonconnect/hooks/useTonWallet";

export default function ManualCreatePage() {
  const router = useRouter();
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

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => router.push("/create/social")}
      >
        <Icons.arrowLeft className="w-4 h-4 mr-2" />
        Back to Options
      </Button>

      {!walletAddress ? (
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
          <p className="text-gray-400 mb-4">
            Please connect your wallet to create an agent. We support EVM
            Autonomys, Solana, Secret Network and TON wallets.
          </p>
        </div>
      ) : (
        <ManualAgentForm userWallet={walletAddress.toString()} />
      )}
    </div>
  );
}
