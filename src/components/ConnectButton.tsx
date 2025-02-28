"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useAccount, useDisconnect } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";
import { formatAddress } from "@/lib/utils";
import Image from "next/image";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useSecretNetwork } from "@/providers/secretNetworkContext";
import { useTonAddress, useTonWallet, useTonConnectUI } from "../../tonconnect";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { SecretWalletOptions } from "@/components/secret-network/SecretWalletOptions";
import { toast } from "sonner";

interface ChainOption {
  id: string;
  name: string;
  icon: string;
  features: string[];
  isConnected: boolean;
  connect: () => void;
}

export function ConnectModal() {
  const {
    isConnected: isSecretConnected,
    address: secretAddress,
    disconnect: disconnectSecret,
  } = useSecretNetwork();
  const { address, isConnected: isEvmConnected } = useAccount();
  const { disconnect: disconnectEvm } = useDisconnect();
  const {
    connected: isSolanaConnected,
    publicKey,
    disconnect: disconnectSolana,
  } = useWallet();
  const tonWallet = useTonWallet();
  const tonAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();
  const isTonConnected = !!tonWallet;
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState<string | null>(null);

  const isConnected =
    isEvmConnected || isSolanaConnected || isSecretConnected || isTonConnected;

  const handleDisconnect = () => {
    if (isSolanaConnected) disconnectSolana();
    if (isSecretConnected) disconnectSecret();
    if (isEvmConnected) disconnectEvm();
    if (isTonConnected) tonConnectUI.disconnect();
  };

  const getDisplayAddress = () => {
    if (isSolanaConnected && publicKey)
      return formatAddress(publicKey.toBase58());
    if (isSecretConnected && secretAddress) return formatAddress(secretAddress);
    if (isTonConnected && tonAddress) return formatAddress(tonAddress);
    if (isEvmConnected && address) return formatAddress(address);
    return "";
  };

  const getChainLogo = (): string => {
    if (isSolanaConnected) return "/chains/solana.svg";
    if (isSecretConnected) return "/chains/secret.svg";
    if (isEvmConnected) return "/chains/taurus.svg";
    if (isTonConnected) return "/chains/ton.svg";
    return "/chains/taurus.svg";
  };

  const handleChainSelect = (chainId: string) => {
    if (chainId === "secret") {
      setSelectedChain("secret");
    } else if (chainId === "ton") {
      //setIsLoading(chainId);
      // tonConnectUI.connectWallet();
      toast.info("TON integration coming soon! please connect another chain", {
        style: {
          fontSize: "1.2rem",
          padding: "1rem",
          minWidth: "300px",
        },
      });
    }
    // Other chains will be handled by their respective buttons
  };

  const SUPPORTED_CHAINS: ChainOption[] = [
    {
      id: "solana",
      name: "Solana",
      icon: "/chains/solana.svg",
      features: ["SPL Tokens", "Fast Transactions"],
      isConnected: isSolanaConnected,
      connect: () => {
        setSelectedChain("solana");
      },
    },
    {
      id: "secret",
      name: "Secret Network",
      icon: "/chains/secret.svg",
      features: ["private", "encrypted"],
      isConnected: isSecretConnected,
      connect: () => handleChainSelect("secret"),
    },
    {
      id: "taurus",
      name: "Taurus Autonomous",
      icon: "/chains/taurus.svg",
      features: ["mintable", "burnable", "pausable"],
      isConnected: isEvmConnected,
      connect: () => {
        setSelectedChain("taurus");
      },
    },
    {
      id: "ton",
      name: "TON",
      icon: "/chains/ton.svg",
      features: ["metadata", "freezeAuthority"],
      isConnected: isTonConnected,
      connect: () => {
        // setIsLoading("ton");
        // tonConnectUI.connectWallet();
        handleChainSelect("ton");
      },
    },
  ];

  if (isConnected) {
    return (
      <Button
        variant="outline"
        onClick={handleDisconnect}
        className="w-full justify-between hover:bg-purple-600/10 hover:border-purple-500 bg-[#1A1325] border-2 border-purple-500/30 py-4 rounded-xl transition-all duration-300"
      >
        <div className="flex items-center">
          <Image
            src={getChainLogo()}
            alt="Chain icon"
            width={24}
            height={24}
            className="mr-3 object-contain"
          />
          <span className="font-mono text-sm font-medium text-purple-50">
            {getDisplayAddress()}
          </span>
        </div>
        <Icons.logout className="ml-2 h-5 w-5 text-purple-400 hover:text-purple-300 transition-colors" />
      </Button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full hover:bg-purple-600/10 hover:border-purple-500 bg-[#1A1325] border-2 border-purple-500/30 py-4 rounded-xl transition-all duration-300"
        >
          <span className="text-sm font-medium text-purple-50">
            Connect Wallet
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#0A0118] border border-purple-500/20">
        {selectedChain === "secret" ? (
          <>
            <DialogHeader>
              <Button
                variant="ghost"
                className="absolute left-4 top-4 p-0 hover:bg-transparent"
                onClick={() => setSelectedChain(null)}
              >
                <Icons.arrowLeft className="h-4 w-4 text-purple-400" />
              </Button>
            </DialogHeader>
            <SecretWalletOptions onConnect={() => setIsOpen(false)} />
          </>
        ) : selectedChain === "taurus" ? (
          <>
            <DialogHeader>
              <Button
                variant="ghost"
                className="absolute left-4 top-4 p-0 hover:bg-transparent"
                onClick={() => setSelectedChain(null)}
              >
                <Icons.arrowLeft className="h-4 w-4 text-purple-400" />
              </Button>
              <DialogTitle className="text-xl font-bold text-gray-100">
                Connect to Taurus
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <RainbowConnectButton.Custom>
                {({ openConnectModal, mounted }) => {
                  const ready = mounted;
                  if (!ready) return null;
                  return (
                    <Button
                      onClick={openConnectModal}
                      variant="outline"
                      className="w-full hover:bg-purple-500/20 transition-all duration-200"
                    >
                      Connect EVM Wallet
                    </Button>
                  );
                }}
              </RainbowConnectButton.Custom>
            </div>
          </>
        ) : selectedChain === "solana" ? (
          <>
            <DialogHeader>
              <Button
                variant="ghost"
                className="absolute left-4 top-4 p-0 hover:bg-transparent"
                onClick={() => setSelectedChain(null)}
              >
                <Icons.arrowLeft className="h-4 w-4 text-purple-400" />
              </Button>
              <DialogTitle className="text-xl font-bold text-gray-100">
                Connect to Solana
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <WalletMultiButton className="w-full !bg-transparent hover:!bg-purple-500/20 !border-2 !border-purple-500/30 !py-4 !rounded-xl !transition-all !duration-300" />
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-100">
                Connect Wallet
              </DialogTitle>
              <p className="text-sm text-gray-400">
                Select a chain to connect your wallet
              </p>
            </DialogHeader>
            <div className="grid gap-4">
              {SUPPORTED_CHAINS.map((chain) => (
                <Card
                  key={chain.id}
                  className={`p-4 cursor-pointer transition-all duration-200 ${
                    chain.isConnected
                      ? "border-purple-500"
                      : "border-purple-500/20"
                  } hover:border-purple-500/40`}
                  onClick={chain.connect}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isLoading === chain.id ? (
                        <Icons.spinner className="w-8 h-8 animate-spin" />
                      ) : (
                        <Image
                          src={chain.icon}
                          alt={chain.name}
                          width={32}
                          height={32}
                        />
                      )}
                      <div className="flex flex-col">
                        <span className="font-medium">{chain.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {chain.features.join(" • ")}
                        </span>
                      </div>
                    </div>
                    {chain.isConnected && (
                      <span className="text-xs text-green-500">Connected</span>
                    )}
                    {!chain.isConnected && (
                      <Icons.chevronRight className="h-4 w-4 text-purple-400" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
