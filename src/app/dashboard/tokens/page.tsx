"use client";

import { useRouter } from "next/navigation";
import { useReadContracts } from "@/hooks/OnChain/useReadContracts";
import { TokenGrid } from "./_components/TokenGrid";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAccount } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSecretNetwork } from "@/providers/secretNetworkContext";
import { useTonWallet } from "../../../../tonconnect/hooks/useTonWallet";

export default function TokensPage() {
  const router = useRouter();
  const { isConnected: isSecretConnected, address: secretAddress } =
    useSecretNetwork();
  const { connected: isSolanaConnected, publicKey: solanaAddress } =
    useWallet();
  const { isConnected: isEvmConnected, address: evmAddress } = useAccount();
  const tonWallet = useTonWallet();
  const isTonConnected = !!tonWallet;

  const getWalletAddress = () => {
    if (isSecretConnected) return secretAddress;
    if (isSolanaConnected) return solanaAddress?.toString();
    if (isTonConnected) return tonWallet?.account.address;
    if (isEvmConnected) return evmAddress;
    return undefined;
  };

  console.log("secretAddress", secretAddress);
  console.log("evmAddress", evmAddress);

  const walletAddress = getWalletAddress();
  const { tokenDetails, isLoading, isError } = useReadContracts(
    walletAddress || ""
  );

  if (isLoading) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-16 text-center">
        <Icons.spinner className="w-8 h-8 animate-spin mx-auto" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <Card className="p-8 text-center">
          <Icons.alertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-red-500 mb-2">
            Failed to load tokens
          </h2>
          <p className="text-gray-500 mb-4">
            There was an error loading your tokens. Please try again.
          </p>
          <Button onClick={() => window.location.reload()}>
            <Icons.refresh className="w-4 h-4 mr-2" />
            Retry
          </Button>
        </Card>
      </div>
    );
  }

  if (!walletAddress) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <Card className="p-8 text-center">
          <Icons.wallet className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Wallet Not Connected</h2>
          <p className="text-gray-500 mb-4">
            Please connect a wallet to view your tokens.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Tokens</h1>
          <p className="text-gray-500">
            Manage and monitor your token portfolio
          </p>
        </div>
        <Button
          onClick={() => router.push("/create/token")}
          className="bg-purple-500 hover:bg-purple-600"
        >
          <Icons.plus className="w-4 h-4 mr-2" />
          Create New Token
        </Button>
      </div>

      <TokenGrid tokens={tokenDetails || []} />
    </div>
  );
}
