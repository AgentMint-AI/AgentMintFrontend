"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IconKeys, Icons } from "@/components/ui/icons";
import Image from "next/image";
import useSWR from "swr";

import { useAccount } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";
import { TokenFactoryService } from "../../../service/TokenFactoryService";
import { useSecretNetwork } from "@/providers/secretNetworkContext";
import { useTonWallet } from "../../../tonconnect";

// Define proper types for the token data
interface TokenMetadata {
  name: string;
  symbol: string;
  chain: string;
  description?: string;
  image?: string;
  decimals?: number;
  initialSupply?: string;
  isMintable?: boolean;
  isBurnable?: boolean;
  isPausable?: boolean;
  showcase?: {
    youtubeLink?: string;
    socialLinks?: {
      website?: string;
      twitter?: string;
      telegram?: string;
      discord?: string;
      github?: string;
      medium?: string;
      reddit?: string;
      instagram?: string;
      facebook?: string;
    };
    roadmap?: Array<{
      title: string;
      description: string;
      date: string;
      completed: boolean;
    }>;
    team?: Array<{
      name: string;
      role: string;
      profileImage?: string;
      socialLinks?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
      };
    }>;
    tags?: string[];
  };
}

interface Token extends TokenMetadata {
  id: string;
  contractAddress: string;
}

interface TokenSelectorProps {
  onSelect: (token: Token | null) => void;
  selectedToken: Token | null;
}

// Add this type definition at the top of the file
interface TokenContractResponse {
  chain: number;
  tokenAddress: string;
  showcaseCid: string;
  tokenMetadataCid: string;
  hasShowcase: boolean;
}

// Fetch metadata helper
const fetchMetadata = async (cid: string): Promise<TokenMetadata | null> => {
  if (!cid) return null;
  try {
    const response = await fetch(`/api/token/metadata?cid=${cid}`);
    if (!response.ok) throw new Error("Failed to fetch metadata");
    return response.json();
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return null;
  }
};

// Add a new component for displaying social links
const SocialLinks = ({ links }: { links: Record<string, string> }) => {
  const validLinks = Object.entries(links).filter(
    ([, url]) => url && url.length > 0
  );
  if (validLinks.length === 0) return null;

  return (
    <div className="flex gap-2 mt-2">
      {validLinks.map(([platform, url]) => {
        const Icon = Icons[platform as IconKeys] || Icons.link;
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
};

// Add a component for displaying team members
const TeamMembers = ({ team }: { team: TokenMetadata["showcase"]["team"] }) => {
  if (!team || team.length === 0) return null;

  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-gray-400 mb-2">Team</h4>
      <div className="flex flex-wrap gap-4">
        {team.map((member, index) => (
          <div key={index} className="flex items-center space-x-3">
            {member.profileImage ? (
              <Image
                src={member.profileImage}
                alt={member.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Icons.user className="w-4 h-4 text-purple-500" />
              </div>
            )}
            <div>
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-xs text-gray-400">{member.role}</p>
              {member.socialLinks && <SocialLinks links={member.socialLinks} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add a component for displaying roadmap
const Roadmap = ({
  roadmap,
}: {
  roadmap: TokenMetadata["showcase"]["roadmap"];
}) => {
  if (!roadmap || roadmap.length === 0) return null;

  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-gray-400 mb-2">Roadmap</h4>
      <div className="space-y-2">
        {roadmap.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 ${
              item.completed ? "text-green-500" : "text-gray-400"
            }`}
          >
            {item.completed ? (
              <Icons.checkCircle className="w-4 h-4" />
            ) : (
              <Icons.circle className="w-4 h-4" />
            )}
            <div>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs">{item.description}</p>
              <p className="text-xs text-gray-500">
                {new Date(item.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export function TokenSelector({ onSelect, selectedToken }: TokenSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [isLoading, setIsLoading] = useState(false);

  // Get connected wallet addresses and connection states
  const { address: secretAddress, isConnected: isSecretConnected } =
    useSecretNetwork();
  const { address: evmAddress, isConnected: isEvmConnected } = useAccount();
  const { publicKey: solanaAddress, connected: isSolanaConnected } =
    useWallet();
  const tonWallet = useTonWallet();
  const isTonConnected = !!tonWallet;

  // Initialize TokenFactoryService
  const tokenFactory = new TokenFactoryService(
    process.env.NEXT_PUBLIC_EVM_RPC_URL!,
    process.env.NEXT_PUBLIC_EVM_CONTRACT_ADDRESS!,
    process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY!
  );

  const { data: tokensWithMetadata } = useSWR(
    [
      "tokens",
      evmAddress,
      solanaAddress?.toString(),
      secretAddress,
      tonWallet?.account.address,
    ],
    async () => {
      setIsLoading(true);
      try {
        const currentAddress =
          evmAddress ||
          solanaAddress?.toString() ||
          secretAddress ||
          tonWallet?.account.address;

        if (!currentAddress) {
          console.log("No current address found");
          return [];
        }

        console.log("TokenFactory configuration:", {
          rpcUrl: process.env.NEXT_PUBLIC_EVM_RPC_URL,
          factoryAddress: process.env.NEXT_PUBLIC_EVM_CONTRACT_ADDRESS,
        });

        const tokens = await tokenFactory.getTokenContract(currentAddress);

        if (!tokens || !tokens.length) {
          console.log("No tokens returned from contract");
          return [];
        }

        // Fetch metadata for each token
        const tokensWithMeta = await Promise.all(
          (tokens as unknown as TokenContractResponse[]).map(async (token) => {
            const metadata = await fetchMetadata(token.tokenMetadataCid);
            return metadata
              ? {
                  id: `${token.chain}-${token.tokenAddress}`,
                  contractAddress: token.tokenAddress,
                  ...metadata,
                }
              : null;
          })
        );

        return tokensWithMeta.filter((token): token is Token => token !== null);
      } catch (error) {
        console.error("Error fetching tokens:", error);
        return [];
      } finally {
        setIsLoading(false);
      }
    },
    {
      revalidateOnFocus: false,
    }
  );

  // Filter tokens based on search query
  const filteredTokens = tokensWithMetadata?.filter(
    (token: Token) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.contractAddress.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the current network name
  const getCurrentNetwork = () => {
    if (isEvmConnected) return "EVM";
    if (isSolanaConnected) return "Solana";
    if (isSecretConnected) return "Secret Network";
    if (isTonConnected) return "TON";
    return "No wallet connected";
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-400 mb-2">
        Connected to: {getCurrentNetwork()}
      </div>

      <div className="relative">
        <Input
          placeholder="Search by name, symbol, or address..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-[#0A0118] pl-10"
        />
        <Icons.search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <Icons.spinner className="w-6 h-6 animate-spin text-purple-500" />
        </div>
      ) : (
        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          {!isEvmConnected &&
          !isSolanaConnected &&
          !isSecretConnected &&
          !isTonConnected ? (
            <div className="text-center py-8 text-gray-400">
              Please connect a wallet to view your tokens
            </div>
          ) : filteredTokens?.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No tokens found for the current connected wallet
            </div>
          ) : (
            filteredTokens?.map((token: Token) => (
              <Card
                key={token.id}
                className={`p-4 cursor-pointer transition-all duration-200 ${
                  selectedToken?.id === token.id
                    ? "bg-purple-500/20 border-purple-500"
                    : "bg-[#0A0118] hover:bg-[#1A0627] border-purple-500/20"
                }`}
                onClick={() => onSelect(token)}
              >
                <div className="space-y-4">
                  {/* Token Header */}
                  <div className="flex items-center space-x-4">
                    {token.image ? (
                      <Image
                        src={token.image}
                        alt={token.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Icons.token className="w-6 h-6 text-purple-500" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{token.name}</h3>
                        <span className="text-sm text-gray-400">
                          {token.symbol}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-400">
                          {token.chain}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">
                          {token.contractAddress.slice(0, 6)}...
                          {token.contractAddress.slice(-4)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Token Description */}
                  {token.description && (
                    <p className="text-sm text-gray-400">{token.description}</p>
                  )}

                  {/* Showcase Content */}
                  {token.showcase && (
                    <div className="border-t border-purple-500/20 pt-4 mt-4">
                      {/* Social Links */}
                      {token.showcase.socialLinks && (
                        <SocialLinks links={token.showcase.socialLinks} />
                      )}

                      {/* Team Members */}
                      <TeamMembers team={token.showcase.team} />

                      {/* Roadmap */}
                      <Roadmap roadmap={token.showcase.roadmap} />

                      {/* Tags */}
                      {token.showcase.tags &&
                        token.showcase.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {token.showcase.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                    </div>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>
      )}

      {tokensWithMetadata?.length === pageSize && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setPage(page + 1)}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
