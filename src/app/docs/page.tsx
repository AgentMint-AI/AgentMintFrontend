"use client";

import { Icons } from "@/components/ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-100">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            AgentMint.AI Documentation
          </h1>
          <p className="text-gray-400">
            Create, manage, and automate your meme coins across multiple
            blockchains
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5 bg-[#1E293B]">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="contracts">Contracts</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="coming-soon">Coming Soon</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <div className="space-y-8">
              <div className="bg-[#1E293B] p-6 rounded-lg border border-purple-500/10">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Prerequisites
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <Icons.check className="w-5 h-5 mr-2 mt-1 text-green-500" />
                    <span>
                      <strong className="text-white">Web3 Wallet:</strong>{" "}
                      Install MetaMask, Phantom, or Keplr wallet
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icons.check className="w-5 h-5 mr-2 mt-1 text-green-500" />
                    <span>
                      <strong className="text-white">Test Tokens:</strong> Get
                      testnet tokens from our supported faucets
                    </span>
                  </li>
                  {/* <li className="flex items-start">
                    <Icons.check className="w-5 h-5 mr-2 mt-1 text-green-500" />
                    <span>
                      <strong className="text-white">Discord Account:</strong>{" "}
                      Join our community for support
                    </span>
                  </li> */}
                </ul>
              </div>

              <div className="bg-[#1E293B] p-6 rounded-lg border border-purple-500/10">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Quick Start
                </h2>
                <div className="space-y-4">
                  <div className="border border-purple-500/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      1. Connect Your Wallet
                    </h3>
                    <p className="text-gray-300">
                      Click the &quot;Connect Wallet&quot; button and select
                      your preferred blockchain network
                    </p>
                  </div>
                  <div className="border border-purple-500/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      2. Create Your Meme Coin
                    </h3>
                    <p className="text-gray-300">
                      Navigate to the creation page and fill in your token
                      details
                    </p>
                  </div>
                  <div className="border border-purple-500/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      3. Configure AI Agent
                    </h3>
                    <p className="text-gray-300">
                      Set up your AI-powered social media presence and marketing
                      strategy
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E293B] p-6 rounded-lg border border-purple-500/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-purple-500/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      🤖 AI-Powered
                    </h3>
                    <p className="text-gray-300">
                      Automated content generation and social media management
                    </p>
                  </div>
                  <div className="border border-purple-500/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      🌐 Multi-Chain
                    </h3>
                    <p className="text-gray-300">
                      Support for EVM, Solana, Secret Network, and TON
                    </p>
                  </div>
                  <div className="border border-purple-500/10 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      🔒 Privacy-First
                    </h3>
                    <p className="text-gray-300">
                      Optional privacy features with Secret Network integration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="guides">
            <div className="bg-[#1E293B] p-6 rounded-lg border border-purple-500/10">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Step-by-Step Guides
              </h2>
              <div className="space-y-6">
                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Creating a Meme Coin
                  </h3>
                  <ol className="space-y-3 text-gray-300">
                    <li>1. Connect your wallet and select network</li>
                    <li>2. Navigate to the Create page</li>
                    <li>3. Fill in token details (name, symbol, supply)</li>
                    <li>4. Configure tokenomics and distribution</li>
                    <li>5. Deploy your contract</li>
                  </ol>
                </div>

                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Setting Up AI Agent
                  </h3>
                  <ol className="space-y-3 text-gray-300">
                    <li>1. Go to the Agents dashboard</li>
                    <li>2. Create new agent profile</li>
                    <li>3. Configure social media accounts</li>
                    <li>4. Set content strategy</li>
                    <li>5. Launch your AI agent</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contracts">
            <div className="bg-[#1E293B] p-6 rounded-lg border border-purple-500/10">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Smart Contracts
              </h2>
              <div className="space-y-6">
                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    AgentRegistry.sol
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Manages agent registrations and profiles
                  </p>
                  <code className="bg-[#2D3B4F] p-2 rounded text-gray-300 block mb-2">
                    0xBE14Ff1a26C2136Dcc26F1f341aE792Be82f6D11
                  </code>
                  <a
                    href="https://blockscout.taurus.autonomys.xyz/address/0xBE14Ff1a26C2136Dcc26F1f341aE792Be82f6D11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    <Icons.external className="w-4 h-4 mr-2" />
                    View on Explorer
                  </a>
                </div>

                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Erc20TokenFactory.sol
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Creates and manages ERC20 tokens
                  </p>
                  <code className="bg-[#2D3B4F] p-2 rounded text-gray-300 block mb-2">
                    0x4Ef4267aF397a50441A910c2748235DC265848b7
                  </code>
                  <a
                    href="https://blockscout.taurus.autonomys.xyz/address/0x4ef4267af397a50441a910c2748235dc265848b7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    <Icons.external className="w-4 h-4 mr-2" />
                    View on Explorer
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="bg-[#1E293B] p-6 rounded-lg border border-purple-500/10">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Resources & Faucets
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Solana
                  </h3>
                  <a
                    href="https://faucet.solana.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    <Icons.external className="w-4 h-4 mr-2" />
                    Solana Faucet
                  </a>
                </div>

                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Secret Network
                  </h3>
                  <a
                    href="https://faucet.pulsar.scrttestnet.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    <Icons.external className="w-4 h-4 mr-2" />
                    Secret Network Faucet
                  </a>
                </div>

                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Community
                  </h3>
                  <a
                    href="https://discordapp.com/channels/864285291518361610/1133496871499862077"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    <Icons.discord className="w-4 h-4 mr-2" />
                    Taurus Discord
                  </a>
                </div>

                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    RPC Endpoints
                  </h3>
                  <p className="text-gray-300">
                    Taurus RPC:{" "}
                    <code className="bg-[#2D3B4F] p-1 rounded">
                      https://auto-evm.taurus.autonomys.xyz/ws
                    </code>
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="coming-soon">
            <div className="bg-[#1E293B] p-6 rounded-lg border border-purple-500/10">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Coming Soon Features
              </h2>
              <div className="space-y-6">
                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    TON Blockchain Integration
                  </h3>
                  <p className="text-gray-300">
                    Full support for The Open Network (TON) blockchain,
                    including token creation and management
                  </p>
                </div>

                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Advanced Token Operations
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Dynamic minting capabilities</li>
                    <li>• Controlled token burning mechanism</li>
                    <li>• Advanced tokenomics configuration</li>
                  </ul>
                </div>

                <div className="border border-purple-500/10 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Enhanced Twitter Integration
                  </h3>
                  <p className="text-gray-300">
                    Secure Twitter authentication without username/password
                    using OAuth 2.0
                  </p>
                  <ul className="space-y-3 text-gray-300 mt-3">
                    <li>• One-click Twitter account verification</li>
                    <li>• Automated posting and engagement</li>
                    <li>• Analytics dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
