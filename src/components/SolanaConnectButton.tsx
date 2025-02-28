"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { formatAddress } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SolanaConnectButton() {
  const { connected, publicKey, disconnect, select, wallets } = useWallet();

  if (!connected) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full">
            <Icons.solana className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {wallets.map((wallet) => (
            <DropdownMenuItem
              key={wallet.adapter.name}
              onClick={() => select(wallet.adapter.name)}
            >
              {wallet.adapter.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={() => disconnect()}
      className="w-full justify-between"
    >
      <span>{formatAddress(publicKey?.toBase58())}</span>
      <Icons.logout className="ml-2 h-4 w-4" />
    </Button>
  );
}
