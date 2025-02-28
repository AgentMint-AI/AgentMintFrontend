export function getExplorerUrl(
  chain: "evm" | "solana" | "secret" | "ton"
): string {
  switch (chain) {
    case "evm":
      return "https://blockscout.taurus.autonomys.xyz";
    case "solana":
      return "https://explorer.solana.com";
    case "secret":
      return "https://www.secretscan.io";
    case "ton":
      return "https://tonscan.org";
    default:
      return "";
  }
}
