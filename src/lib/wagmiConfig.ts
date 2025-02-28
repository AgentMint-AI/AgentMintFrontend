import { createConfig, http } from "wagmi";
// import {
//   mainnet,
//   polygon,
//   avalanche,
//   base,
//   arbitrum,
//   optimism,
// } from "wagmi/chains";
import { tarus } from "./tarus";

// Define local Anvil chain
export const localAnvil = {
  id: 31337,
  name: "Anvil Local",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
    },
    public: {
      http: ["http://127.0.0.1:8545"],
    },
  },
  blockExplorers: {
    default: { name: "Local Explorer", url: "http://localhost:8545" },
  },
} as const;

export const config = createConfig({
  chains: [tarus /*localAnvil*/],
  transports: {
    [tarus.id]: http(tarus.rpcUrls.default.http[0]),
    // [localAnvil.id]: http(localAnvil.rpcUrls.default.http[0]),
  },
});
