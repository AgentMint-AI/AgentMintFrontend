"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { formatAddress } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface ShowcaseCardProps {
  showcase: {
    owner: string;
    chain: number;
    tokenAddress: string;
    showcaseCid: string;
    tokenMetadataCid: string;
    createdAt: bigint;
    metadata?: {
      name?: string;
      symbol?: string;
      description?: string;
      image?: string;
      socialLinks?: Record<string, string>;
    };
  };
}

export function ShowcaseCard({ showcase }: ShowcaseCardProps) {
  const chainIcon = getChainIcon(showcase.chain);
  const createdDate = new Date(Number(showcase.createdAt) * 1000);

  // Shorten CIDs to first 6 and last 4 characters
  const shortenCid = (cid: string) => {
    return `${cid.slice(0, 6)}...${cid.slice(-4)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:border-purple-500/40 hover:shadow-lg transition-all duration-200 group">
        {showcase.metadata?.image && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={showcase.metadata.image}
              alt={showcase.metadata.name || "Token"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {chainIcon && (
                <div className="w-8 h-8 p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <Image
                    src={chainIcon}
                    alt="Chain"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
              )}
              <div>
                <CardTitle className="text-xl font-bold">
                  {showcase.metadata?.name ||
                    formatAddress(showcase.tokenAddress)}
                </CardTitle>
                {showcase.metadata?.symbol && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ${showcase.metadata.symbol}
                  </span>
                )}
              </div>
            </div>
            <Link
              href={`/showcase/${showcase.tokenAddress}`}
              className="p-2 text-purple-500 hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-full transition-colors"
            >
              <Icons.arrowRight className="h-5 w-5" />
            </Link>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            {showcase.metadata?.description ? (
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {showcase.metadata.description}
              </p>
            ) : (
              <div className="space-y-2 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    CID:
                  </span>{" "}
                  <code className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                    {shortenCid(showcase.showcaseCid)}
                  </code>
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Metadata:
                  </span>{" "}
                  <code className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                    {shortenCid(showcase.tokenMetadataCid)}
                  </code>
                </p>
              </div>
            )}
            <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Icons.user className="h-4 w-4" />
                  <span className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    {formatAddress(showcase.owner)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Icons.calendar className="h-4 w-4" />
                  <span>{createdDate.toLocaleDateString()}</span>
                </div>
              </div>
              {showcase.metadata?.socialLinks && (
                <div className="flex gap-2">
                  {Object.entries(showcase.metadata.socialLinks).map(
                    ([platform, url]) => (
                      <Link
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 transition-colors"
                      >
                        {getSocialIcon(platform)}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function getChainIcon(chainId: number): string {
  switch (chainId) {
    case 1: // Taurus
      return "/chains/taurus.svg";
    case 2: // Solana
      return "/chains/solana.svg";
    case 3: // Secret
      return "/chains/secret.svg";
    case 4: // TON
      return "/chains/ton.svg";
    default:
      return "/chains/taurus.svg";
  }
}

function getSocialIcon(platform: string) {
  const Icon = Icons[platform as keyof typeof Icons] || Icons.link;
  return <Icon className="h-4 w-4" />;
}
