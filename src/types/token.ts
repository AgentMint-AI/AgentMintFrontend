export interface TeamMember {
  name: string;
  role: string;
  profileImage?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface RoadmapMilestone {
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

export interface TokenMetadata {
  name: string;
  symbol: string;
  chain: "evm" | "solana" | "secret" | "ton";
  description: string;
  image?: string;
  decimals: number;
  initialSupply: string;
  // Chain-specific properties
  isMintable?: boolean;
  isBurnable?: boolean;
  isPausable?: boolean;
  hasRevokeMintAuthority?: boolean;
  hasFreezeAuthority?: boolean;
}

export interface ShowcaseMetadata {
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
  roadmap?: RoadmapMilestone[];
  team?: TeamMember[];
  tags?: string[];
}

export interface TokenFormData extends TokenMetadata {
  showcase?: ShowcaseMetadata;
}
