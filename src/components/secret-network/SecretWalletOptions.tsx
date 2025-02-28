import { Button } from "@/components/ui/button";
import { useSecretNetwork } from "@/providers/secretNetworkContext";
import { Icons } from "@/components/ui/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SecretWalletOptionsProps {
  onConnect?: () => void;
}

export function SecretWalletOptions({ onConnect }: SecretWalletOptionsProps) {
  const { connectMetaMask, connectKeplr, connectLeap } = useSecretNetwork();
  const [hasLeap, setHasLeap] = useState(false);
  const [hasKeplr, setHasKeplr] = useState(false);

  useEffect(() => {
    setHasLeap(!!window.leap);
    setHasKeplr(!!window.keplr);
  }, []);

  const handleConnect = async (connectFn: () => Promise<void>) => {
    await connectFn();
    onConnect?.();
  };

  const walletOptions = [
    {
      name: "MetaMask",
      icon: "/metamask.svg",
      onClick: () => handleConnect(connectMetaMask),
      description: "Connect using MetaMask wallet",
      disabled: false,
    },
    {
      name: "Keplr",
      icon: "/chains/keplr.svg",
      onClick: () => handleConnect(connectKeplr),
      description: "Connect using Keplr wallet",
      disabled: !hasKeplr,
    },
    {
      name: "Leap",
      icon: "/chains/leap.svg",
      onClick: () => handleConnect(connectLeap),
      description: "Connect using Leap wallet",
      disabled: !hasLeap,
    },
  ];

  return (
    <Card className="border-purple-500/20 bg-[#0A0118]">
      <CardHeader>
        <CardTitle className="text-purple-50">Secret Network</CardTitle>
        <CardDescription>Choose your preferred wallet</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {walletOptions.map((wallet) => (
          <Button
            key={wallet.name}
            variant="outline"
            onClick={wallet.onClick}
            disabled={wallet.disabled}
            className="w-full flex items-center gap-3 hover:bg-purple-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="h-5 w-5 relative">
              <Image
                src={wallet.icon}
                alt={wallet.name}
                width={20}
                height={20}
              />
            </div>
            <span className="flex-1 text-left">{wallet.name}</span>
            <Icons.chevronRight className="h-4 w-4 text-purple-400" />
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
