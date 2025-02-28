import SocialMediaService from "./service/SocialMediaService";

export const SOLANA_RPC_URL = "https://api.devnet.solana.com";

export const service = new SocialMediaService(
  {
    twitter: {
      apiKey: process.env.TWITTER_API_KEY!,
      apiSecret: process.env.TWITTER_API_SECRET!,
      accessToken: process.env.TWITTER_ACCESS_TOKEN!,
      accessSecret: process.env.TWITTER_ACCESS_SECRET!,
    },
    discord: {
      botToken: process.env.DISCORD_BOT_TOKEN!,
      channelId: process.env.DISCORD_CHANNEL_ID!,
    },
  },
  SOLANA_RPC_URL
);

// Schedule posts
await service.schedulePost({
  userId: "user-wallet-address",
  tokenAddress: "token-mint-address",
  interval: 60, // post every hour
  platforms: ["twitter", "discord"],
  memeContent: {
    image: "path-to-meme.jpg",
    text: "🚀 To the moon! #MemeCoin",
  },
});
