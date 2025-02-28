"use client";

import { TokenMetadata } from "@/types/token";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { formatAddress } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Icons } from "../ui/icons";
import { getExplorerUrl } from "@/lib/explorer";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface TokenBannerProps {
  metadata: TokenMetadata;
  tokenAddress: string;
}

export function TokenBanner({ metadata, tokenAddress }: TokenBannerProps) {
  const chainColors = {
    evm: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    solana: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    secret: "bg-red-500/10 text-red-500 border-red-500/20",
    ton: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(tokenAddress);
    toast.success("Address copied to clipboard!");
  };

  const explorerUrl = getExplorerUrl(
    metadata.chain as "evm" | "solana" | "secret" | "ton"
  );

  return (
    <Parallax
      blur={0}
      bgImage={metadata.image}
      bgImageAlt={metadata.name}
      strength={200}
      className="relative h-[500px]"
      renderLayer={(percentage) => (
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: `translate(-50%, ${percentage * 50}px)`,
            opacity: Math.min(percentage * 1.5, 1),
          }}
        />
      )}
      onLoad={(e) => {
        // Add error handling for image load
        const img = e.target as HTMLImageElement;
        img.onerror = () => {
          img.style.display = "none";
        };
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className={
                chainColors[metadata.chain as keyof typeof chainColors]
              }
            >
              {metadata.chain === "evm" ? (
                <Icons.taurus />
              ) : metadata.chain === "solana" ? (
                <Icons.solana />
              ) : metadata.chain === "secret" ? (
                <Icons.secret />
              ) : metadata.chain === "ton" ? (
                <Icons.ton />
              ) : null}
            </Badge>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-white/10 text-white border-white/20 cursor-pointer hover:bg-white/20"
                onClick={handleCopyAddress}
              >
                <Icons.hash className="w-4 h-4 mr-1" />
                {formatAddress(tokenAddress)}
                <Icons.copy className="w-3 h-3 ml-1" />
              </Badge>
              <a
                href={`${explorerUrl}/address/${tokenAddress}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-white/70 hover:text-white"
                >
                  <Icons.externalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
              {metadata.name}
            </h1>
            <p className="text-2xl text-white/80 font-semibold">
              ${metadata.symbol}
            </p>
          </div>
          <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
            {metadata.description}
          </p>
        </motion.div>
      </div>
    </Parallax>
  );
}
