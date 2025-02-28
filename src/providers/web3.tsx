"use client";

import "@rainbow-me/rainbowkit/styles.css";
import "@solana/wallet-adapter-react-ui/styles.css";

import { WalletProvider as SolanaWalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { getSolanaWallets } from "@/lib/wallets";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { config } from "@/lib/wagmiConfig";
import { useMemo } from "react";
import { SecretNetworkProvider } from "./secretNetworkContext";
import { TonProvider } from "./TonProvider";
import { clusterApiUrl } from "@solana/web3.js";
import { ConnectionProvider } from "@solana/wallet-adapter-react";

// Add chain environment check

// Update wagmi config

// Create a client
const queryClient = new QueryClient();

export function Web3Providers({ children }: { children: React.ReactNode }) {
  const solanaWallets = useMemo(() => getSolanaWallets(), []);
  const endpoint = useMemo(() => clusterApiUrl("devnet"), []);

  return (
    <div className="bg-[#0A0118]">
      <TonProvider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider
              theme={darkTheme({
                accentColor: "#E11D48",
                accentColorForeground: "white",
                borderRadius: "medium",
              })}
            >
              <ConnectionProvider endpoint={endpoint}>
                <SolanaWalletProvider wallets={solanaWallets} autoConnect>
                  <WalletModalProvider>
                    <SecretNetworkProvider>{children}</SecretNetworkProvider>
                  </WalletModalProvider>
                </SolanaWalletProvider>
              </ConnectionProvider>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </TonProvider>
    </div>
  );
}
