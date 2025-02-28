import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useTonConnectUI } from "../../../tonconnect";
import Image from "next/image";

interface TonWalletButtonProps {
  className?: string;
}

export function TonWalletButton({ className }: TonWalletButtonProps) {
  const [tonConnectUI] = useTonConnectUI();

  return (
    <Button
      variant="outline"
      onClick={() => tonConnectUI.connectWallet()}
      className={`w-full flex items-center gap-3 hover:bg-purple-500/20 transition-all duration-200 ${className}`}
    >
      <Image
        src="/chains/ton.svg"
        alt="TON"
        width={24}
        height={24}
        className="mr-2"
      />
      <span className="flex-1 text-left">TON Wallet</span>
      <Icons.chevronRight className="h-4 w-4 text-purple-400" />
    </Button>
  );
}
