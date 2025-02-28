import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getExplorerUrl } from "@/lib/explorer";
import { formatAddress } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Icons } from "../ui/icons";

interface TokenCreationSuccessProps {
  data: {
    signature?: string;
    mintAddress?: string;
    tokenAccount?: string;
    ownerAddress?: string;
    contractAddress?: string; // for EVM
    chain: "evm" | "solana" | "secret" | "ton";
  };
  onCreateAgent: () => void;
}

export function TokenCreationSuccess({
  data,
  onCreateAgent,
}: TokenCreationSuccessProps) {
  const explorerUrl = getExplorerUrl(data.chain);

  return (
    <Card className="p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-bold text-green-500 mb-1 md:mb-2">
          🎉 Token Created Successfully!
        </h2>
        <p className="text-sm md:text-base text-gray-400">
          Your token has been deployed and is ready to use
        </p>
      </div>

      <div className="space-y-3 md:space-y-4">
        {data.mintAddress && (
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
            <span className="text-sm md:text-base text-gray-400">
              Token Address
            </span>
            <a
              href={`${explorerUrl}/address/${data.mintAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-purple-400 transition-colors text-sm md:text-base break-all sm:break-normal"
            >
              {formatAddress(data.mintAddress)}
              <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
            </a>
          </div>
        )}

        {data.contractAddress && (
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
            <span className="text-sm md:text-base text-gray-400">
              Contract Address
            </span>
            <a
              href={`${explorerUrl}/address/${data.contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-purple-400 transition-colors text-sm md:text-base break-all sm:break-normal"
            >
              {formatAddress(data.contractAddress)}
              <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
            </a>
          </div>
        )}

        {data.signature && (
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
            <span className="text-sm md:text-base text-gray-400">
              Transaction
            </span>
            <a
              href={`${explorerUrl}/tx/${data.signature}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-purple-400 transition-colors text-sm md:text-base break-all sm:break-normal"
            >
              {formatAddress(data.signature)}
              <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
            </a>
          </div>
        )}
      </div>

      <div className="pt-6 md:pt-8 border-t">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Enhance Your Token
            </h3>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Deploy an AI agent to automate token management and marketing
            </p>
          </div>
          <Button
            onClick={onCreateAgent}
            className="w-full sm:w-auto flex items-center justify-center px-4 md:px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            <span>Create Agent</span>
            <Icons.arrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
