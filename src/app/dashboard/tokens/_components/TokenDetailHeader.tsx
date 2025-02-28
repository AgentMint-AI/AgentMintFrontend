import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { formatAddress } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

interface TokenDetailHeaderProps {
  token: {
    tokenAddress: string;
    chain: number;
  };
}

export function TokenDetailHeader({ token }: TokenDetailHeaderProps) {
  const router = useRouter();

  const getChainInfo = (chainId: number) => {
    const chains = {
      0: {
        name: "Secret Network",
        icon: <Icons.secret className="w-4 h-4" />,
        color: "bg-purple-500/10 text-purple-500",
      },
      1: {
        name: "EVM",
        icon: <Icons.taurus className="w-4 h-4" />,
        color: "bg-blue-500/10 text-blue-500",
      },
      2: {
        name: "Solana",
        icon: <Icons.solana className="w-4 h-4" />,
        color: "bg-green-500/10 text-green-500",
      },
      3: {
        name: "TON",
        icon: <Icons.ton className="w-4 h-4" />,
        color: "bg-orange-500/10 text-orange-500",
      },
    };
    return (
      chains[chainId as keyof typeof chains] || {
        name: "Unknown",
        icon: <Icons.help className="w-4 h-4" />,
        color: "bg-gray-500/10 text-gray-500",
      }
    );
  };

  const chainInfo = getChainInfo(token.chain);
  console.log(token);
  return (
    <div className="border-b pb-8 mb-8">
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/dashboard/tokens")}
            className="mb-2"
          >
            <Icons.arrowLeft className="w-4 h-4 mr-2" />
            Back to Tokens
          </Button>

          <div>
            <h1 className="text-3xl font-bold mb-2">
              {formatAddress(token.tokenAddress)}
            </h1>
            <Badge className={`px-3 py-1 ${chainInfo.color}`}>
              <div className="flex items-center gap-2">
                {chainInfo.icon}
                {chainInfo.name}
              </div>
            </Badge>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => router.push(`/create/social`)}
            className="bg-purple-500 hover:bg-purple-600"
          >
            <Icons.plus className="w-4 h-4 mr-2" />
            Create Agent
          </Button>
          <Button
            onClick={() => router.push(`/showcase/${token.tokenAddress}`)}
            variant="outline"
          >
            <Icons.eye className="w-4 h-4 mr-2" />
            View Showcase
          </Button>
        </div>
      </div>
    </div>
  );
}
