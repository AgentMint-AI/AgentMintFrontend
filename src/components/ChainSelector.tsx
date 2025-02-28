"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { Icons } from "@/components/ui/icons";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSecretNetwork } from "@/providers/secretNetworkContext";
import { useTonWallet } from "../../tonconnect";

export interface ChainOption {
  id: number | string;
  name: string;
  icon: keyof typeof Icons;
  isEVM: boolean;
  features?: string[];
  chainId?: number;
}

const SUPPORTED_CHAINS: ChainOption[] = [
  {
    id: "solana",
    name: "Solana",
    icon: "solana",
    isEVM: false,
    features: ["SPL Tokens", "Fast Transactions"],
  },
  {
    id: "secret",
    name: "Secret Network",
    icon: "secret",
    isEVM: false,
    features: ["private", "encrypted"],
  },
  {
    id: "taurus",
    name: "Taurus Autonomous",
    icon: "taurus",
    isEVM: true,
    chainId: 490000,
    features: ["mintable", "burnable", "pausable"],
  },
  {
    id: "ton",
    name: "TON",
    icon: "ton",
    isEVM: false,
    features: ["metadata", "freezeAuthority"],
  },
];

interface ChainSelectorProps {
  onSelect: (chain: ChainOption) => void;
  selectedChain: ChainOption | null; // Made required and removed undefined
}

export function ChainSelector({ onSelect, selectedChain }: ChainSelectorProps) {
  const chainId = useChainId();
  const { switchChainAsync } = useSwitchChain();
  const { isConnected: isSecretConnected } = useSecretNetwork();
  const { isConnected: isEvmConnected } = useAccount();
  const { connected: isSolanaConnected } = useWallet();
  const tonWallet = useTonWallet();
  const isTonConnected = !!tonWallet;

  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [localSelectedChain, setLocalSelectedChain] =
    useState<ChainOption | null>(selectedChain);

  useEffect(() => {
    setLocalSelectedChain(selectedChain);
  }, [selectedChain]);

  const getCurrentChain = () => {
    if (isSecretConnected) return "secret";
    if (isEvmConnected) return "taurus";
    if (isSolanaConnected) return "solana";
    if (isTonConnected) return "ton";
    return null;
  };

  const handleChainSelect = async (chainOption: ChainOption) => {
    setIsLoading(chainOption.id.toString());
    try {
      const currentChain = getCurrentChain();

      if (currentChain && currentChain !== chainOption.id) {
        toast.error(
          `Please disconnect from ${currentChain.toUpperCase()} first`
        );
        return;
      }

      if (chainOption.isEVM) {
        if (!isEvmConnected) {
          toast.error("Please connect your EVM wallet first");
          return;
        }

        if (chainOption.chainId && chainId !== chainOption.chainId) {
          await switchChainAsync({ chainId: chainOption.chainId });
        }
      } else {
        // Handle non-EVM chain connections
        switch (chainOption.id) {
          case "solana":
            if (!isSolanaConnected) {
              toast.error("Please connect your Solana wallet first");
              return;
            }
            break;
          case "secret":
            if (!isSecretConnected) {
              toast.error("Please connect your Secret Network wallet first");
              return;
            }
            break;
          case "ton":
            if (!isTonConnected) {
              toast.error("Please connect your TON wallet first");
              return;
            }
            break;
        }
      }

      setLocalSelectedChain(chainOption);
      onSelect(chainOption);
      setIsOpen(false);
      toast.success(`Selected ${chainOption.name}`);
    } catch (error: unknown) {
      console.error("Error switching chain:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to switch chain. Please try again."
      );
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="p-3 cursor-pointer hover:bg-accent flex items-center justify-between">
          <div className="flex items-center gap-2">
            {localSelectedChain ? (
              <>
                <div className="w-5 h-5">
                  {(() => {
                    const IconComponent =
                      Icons[localSelectedChain?.id as keyof typeof Icons];
                    return <IconComponent className="w-5 h-5" />;
                  })()}
                </div>
                <span className="font-medium">{localSelectedChain.name}</span>
              </>
            ) : (
              <>
                <Icons.chain className="w-5 h-5" />
                <span>Select Chain</span>
              </>
            )}
          </div>
          <Icons.chevronDown className="h-4 w-4" />
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {localSelectedChain
              ? `Selected: ${localSelectedChain.name}`
              : "Select Chain"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          {SUPPORTED_CHAINS.map((chainOption) => {
            const IconComponent = Icons[chainOption.icon];
            const isSelected = localSelectedChain?.id === chainOption.id;
            const isCurrentlyLoading = isLoading === chainOption.id.toString();
            const currentChain = getCurrentChain();
            const isConnectedToOtherChain =
              currentChain && currentChain !== chainOption.id;

            return (
              <Card
                key={chainOption.id}
                className={`p-4 cursor-pointer transition-all duration-200 ${
                  isSelected ? "border-purple-500" : "border-purple-500/20"
                } hover:border-purple-500/40 ${
                  isConnectedToOtherChain ? "opacity-50" : ""
                }`}
                onClick={() => handleChainSelect(chainOption)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isCurrentlyLoading ? (
                      <Icons.spinner className="w-8 h-8 animate-spin" />
                    ) : (
                      <IconComponent className="w-8 h-8" />
                    )}
                    <div className="flex flex-col">
                      <span className="font-medium">{chainOption.name}</span>
                      {chainOption.features && (
                        <span className="text-xs text-muted-foreground">
                          {chainOption.features.join(" • ")}
                        </span>
                      )}
                    </div>
                  </div>
                  {isConnectedToOtherChain && (
                    <span className="text-xs text-yellow-500">
                      Disconnect Required
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
