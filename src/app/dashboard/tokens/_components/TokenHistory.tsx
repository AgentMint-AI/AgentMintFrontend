import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { formatAddress } from "@/lib/utils";
import { useContractLogs } from "@/hooks/OnChain/useContractLogs";

interface Transaction {
  type: "mint" | "burn" | "transfer" | "pause" | "resume";
  hash: string;
  from: string;
  to?: string;
  amount?: string;
  timestamp: number;
}

interface TokenHistoryProps {
  token: {
    tokenAddress: string;
    transactions?: Transaction[];
  };
}

export function TokenHistory({ token }: TokenHistoryProps) {
  const { logs, isLoading, error } = useContractLogs(token.tokenAddress);

  const getTransactionIcon = (type: Transaction["type"]) => {
    const icons = {
      mint: <Icons.plus className="w-4 h-4 text-green-500" />,
      burn: <Icons.flame className="w-4 h-4 text-red-500" />,
      transfer: <Icons.send className="w-4 h-4 text-blue-500" />,
      pause: <Icons.pause className="w-4 h-4 text-yellow-500" />,
      resume: <Icons.play className="w-4 h-4 text-green-500" />,
    };
    return icons[type];
  };

  if (isLoading) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <Card className="p-8 text-center">
          <Icons.spinner className="w-6 h-6 animate-spin mx-auto" />
          <p className="mt-2 text-gray-500">Loading transaction history...</p>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <Card className="p-8 text-center">
          <Icons.alertTriangle className="w-6 h-6 text-red-500 mx-auto" />
          <p className="mt-2 text-red-500">Error loading transaction history</p>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-4">Type</th>
                <th className="text-left p-4">Transaction</th>
                <th className="text-left p-4">From</th>
                <th className="text-left p-4">To</th>
                <th className="text-left p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((tx) => (
                <tr
                  key={tx.hash}
                  className="border-b border-gray-800 hover:bg-gray-900/50"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {getTransactionIcon(tx.type)}
                      <span>
                        {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <a
                      href={`https://etherscan.io/tx/${tx.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      {formatAddress(tx.hash)}
                    </a>
                  </td>
                  <td className="p-4">{formatAddress(tx.from)}</td>
                  <td className="p-4">{tx.to ? formatAddress(tx.to) : "-"}</td>
                  <td className="p-4">
                    {new Date(tx.timestamp * 1000).toLocaleString()}
                  </td>
                </tr>
              ))}
              {(!logs || logs.length === 0) && (
                <tr>
                  <td colSpan={5} className="text-center p-8 text-gray-500">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
