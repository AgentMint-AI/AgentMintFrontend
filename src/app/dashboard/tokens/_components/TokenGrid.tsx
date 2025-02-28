import { Card } from "@/components/ui/card";
import { formatAddress } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface TokenGridProps {
  tokens: Array<{
    chain: number;
    tokenAddress: string;
    showcaseCid: string;
    hasShowcase: boolean;
  }>;
}

export function TokenGrid({ tokens }: TokenGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {tokens.map((token) => (
        <Link
          href={`/dashboard/tokens/${token.tokenAddress}`}
          key={token.tokenAddress}
        >
          <Card className="p-6 hover:border-purple-500/50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">
                {formatAddress(token.tokenAddress)}
              </span>
              <Badge variant={token.hasShowcase ? "default" : "secondary"}>
                {token.hasShowcase ? "Showcased" : "Draft"}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Chain</span>
                <span>{getChainName(token.chain)}</span>
              </div>
              {/* Add more token details here */}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

function getChainName(chainId: number): string {
  const chains = {
    0: "Secret Network",
    1: "EVM",
    2: "Solana",
    3: "TON",
  };
  return chains[chainId as keyof typeof chains] || "Unknown";
}
