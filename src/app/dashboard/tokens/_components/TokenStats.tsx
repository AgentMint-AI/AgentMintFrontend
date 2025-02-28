import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

interface TokenStatsProps {
  token: {
    tokenAddress: string;
    chain: number;
    metadata?: {
      totalSupply?: string;
      circulatingSupply?: string;
      holders?: number;
      price?: string;
      marketCap?: string;
    };
  };
}

export function TokenStats({ token }: TokenStatsProps) {
  console.log(token);
  const stats = [
    {
      label: "Total Supply",
      value: token.metadata?.totalSupply || "N/A",
      icon: <Icons.coins className="w-4 h-4 text-purple-500" />,
    },
    {
      label: "Circulating Supply",
      value: token.metadata?.circulatingSupply || "N/A",
      icon: <Icons.circulate className="w-4 h-4 text-blue-500" />,
    },
    {
      label: "Holders",
      value: token.metadata?.holders?.toLocaleString() || "N/A",
      icon: <Icons.users className="w-4 h-4 text-green-500" />,
    },
    {
      label: "Price",
      value: token.metadata?.price || "N/A",
      icon: <Icons.dollarSign className="w-4 h-4 text-yellow-500" />,
    },
    {
      label: "Market Cap",
      value: token.metadata?.marketCap || "N/A",
      icon: <Icons.chartBar className="w-4 h-4 text-red-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-4">
          <div className="flex items-center gap-2 mb-2">
            {stat.icon}
            <span className="text-sm text-gray-500">{stat.label}</span>
          </div>
          <p className="text-lg font-semibold">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
}
