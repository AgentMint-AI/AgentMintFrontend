"use client";
import React from "react";
import { THEME, TonConnectUIProvider } from "../../tonconnect";
import { tonWalletsList } from "@/config/ton-wallets";

interface TonProviderProps {
  children: React.ReactNode;
}

export function TonProvider({ children }: TonProviderProps) {
  return (
    <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
}
