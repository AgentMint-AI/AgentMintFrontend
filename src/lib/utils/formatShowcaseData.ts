export interface TokenShowcase {
  owner: string;
  chain: number; // Chain enum: 0=SECRETNETWORK, 1=EVM, 2=SOLANA, 3=TON
  tokenAddress: string;
  showcaseCid: string;
  tokenMetadataCid: string;
  createdAt: bigint;
}

export function formatShowcaseData(data: any): TokenShowcase | TokenShowcase[] {
  // Handle single showcase
  if (!Array.isArray(data)) {
    const showcase: TokenShowcase = {
      owner: data.owner,
      chain: Number(data.chain),
      tokenAddress: data.tokenAddress,
      showcaseCid: data.showcaseCid.replace(/"/g, ""), // Remove quotes
      tokenMetadataCid: data.tokenMetadataCid.replace(/"/g, ""), // Remove quotes
      createdAt: BigInt(data.createdAt),
    };
    return showcase;
  }

  // Handle array of showcases
  const showcases: TokenShowcase[] = data.map((item) => ({
    owner: item.owner,
    chain: Number(item.chain),
    tokenAddress: item.tokenAddress,
    showcaseCid: item.showcaseCid.replace(/"/g, ""),
    tokenMetadataCid: item.tokenMetadataCid.replace(/"/g, ""),
    createdAt: BigInt(item.createdAt),
  }));
  return showcases;
}
