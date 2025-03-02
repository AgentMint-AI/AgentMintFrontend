import { AgentRegistryService } from "./AgentRegistryService";

export interface AgentCreationRequest {
  userId: string;
  userWallet: string; // Added userWallet parameter
  name: string;
  description: string;
  contractAddress: string;
  chain: string;
  personality?: string[];
  expertise?: string[];
  communication_rules?: {
    rules?: string[];
    words_to_avoid?: string[];
  };
  twitter: {
    username: string;
    password: string;
    NUM_TIMELINE_TWEETS?: number;
    NUM_FOLLOWING_RECENT_TWEETS?: number;
    NUM_RANDOM_FOLLOWINGS?: number;
    MAX_MENTIONS?: number;
    MAX_THREAD_LENGTH?: number;
    MAX_MY_RECENT_TWEETS?: number;
    MAX_MY_RECENT_REPLIES?: number;
    RESPONSE_INTERVAL_MINUTES?: number;
    POST_INTERVAL_MINUTES?: number;
    POST_TWEETS?: boolean;
  };
  contentStrategy: {
    style: string[];
    topics: string[];
    tone: string;
    tags: string[];
    postFrequency: string;
    engagement: {
      replyStyle: string;
      interactionFrequency: string;
      autoReply: boolean;
    };
    contentTypes: {
      text: boolean;
      polls: boolean;
      threads: boolean;
      spaces: boolean;
    };
  };
  metadata: {
    description: string;
    website: string;
    telegram: string;
    discord: string;
    medium: string;
    contractAddress?: string;
    chain: string;
  };
  tokenomics: {
    isMintable: boolean;
    isBurnable: boolean;
    isPausable: boolean;
    totalSupply: string;
    circulatingSupply: string;
    marketCap: string;
    price: string;
  };
  team: Array<{
    name: string;
    role: string;
    socials: Record<string, string>;
  }>;
  roadmap: Array<{
    title: string;
    description: string;
    date: string;
    completed: boolean;
  }>;
  communityGuidelines: {
    allowedTopics: string[];
    bannedTopics: string[];
    moderationLevel: string;
    languagePreference: string;
  };
}

export class AgentCreationController {
  private apiUrl =
    process.env.NEXT_PUBLIC_AUTONOMYS_AGENTS_API_URL ||
    "http://localhost:3001/api";
  private agentRegistryService: AgentRegistryService;

  constructor() {
    if (
      !process.env.NEXT_PUBLIC_EVM_RPC_URL ||
      !process.env.NEXT_PUBLIC_AGENT_REGISTRY_ADDRESS ||
      !process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY
    ) {
      throw new Error("Missing required environment variables");
    }

    this.agentRegistryService = new AgentRegistryService(
      process.env.NEXT_PUBLIC_EVM_RPC_URL,
      process.env.NEXT_PUBLIC_AGENT_REGISTRY_ADDRESS,
      process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY
    );
  }

  private async registerAgentOnChain(
    name: string,
    userWallet: string
  ): Promise<string> {
    try {
      const encodedName = await this.agentRegistryService.createAgent(
        name,
        userWallet
      );
      console.log("Agent registered on chain with encoded name:", encodedName);
      return encodedName;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unknown error during blockchain registration";
      console.error("Blockchain registration failed:", error);
      throw new Error(`Blockchain registration failed: ${errorMessage}`);
    }
  }

  async createAgent(params: AgentCreationRequest) {
    console.log("Creating agent with params:", params);
    try {
      // First register the agent on-chain using userWallet
      const encodedAgentName = await this.registerAgentOnChain(
        params.name,
        params.userWallet
      );

      const config = {
        name: params.name,
        description: params.metadata.description,
        personality: [
          ...(params.personality || []),
          ...(params.contentStrategy?.style || []),
          `${params.chain} ecosystem expert`,
        ],
        expertise: [
          ...(params.expertise || []),
          "Cryptocurrency",
          "Blockchain Technology",
          params.chain,
          "Smart Contracts",
          "Community Management",
          "Social Media Marketing",
        ].filter(Boolean),
        communication_rules: {
          rules: [
            ...(params.communication_rules?.rules || []),
            ...(params.communityGuidelines?.allowedTopics || []),
          ],
          words_to_avoid: [
            ...(params.communication_rules?.words_to_avoid || []),
            ...(params.communityGuidelines?.bannedTopics || []),
          ],
          allowed_topics: params.communityGuidelines?.allowedTopics || [
            "Cryptocurrency",
            "Blockchain",
            "Technology",
          ],
          banned_topics: params.communityGuidelines?.bannedTopics || [
            "NSFW content",
            "Hate speech",
          ],
          moderation_level:
            params.communityGuidelines?.moderationLevel || "medium",
          language_preference:
            params.communityGuidelines?.languagePreference || "english",
        },
        twitter: {
          username: params.twitter.username,
          password: params.twitter.password,
          NUM_TIMELINE_TWEETS: params.twitter.NUM_TIMELINE_TWEETS ?? 10,
          NUM_FOLLOWING_RECENT_TWEETS:
            params.twitter.NUM_FOLLOWING_RECENT_TWEETS ?? 10,
          NUM_RANDOM_FOLLOWINGS: params.twitter.NUM_RANDOM_FOLLOWINGS ?? 5,
          MAX_MENTIONS: params.twitter.MAX_MENTIONS ?? 20,
          MAX_THREAD_LENGTH: params.twitter.MAX_THREAD_LENGTH ?? 20,
          MAX_MY_RECENT_TWEETS: params.twitter.MAX_MY_RECENT_TWEETS ?? 10,
          MAX_MY_RECENT_REPLIES: params.twitter.MAX_MY_RECENT_REPLIES ?? 10,
          RESPONSE_INTERVAL_MINUTES:
            params.twitter.RESPONSE_INTERVAL_MINUTES ?? 30,
          POST_INTERVAL_MINUTES: params.twitter.POST_INTERVAL_MINUTES ?? 90,
          POST_TWEETS: params.twitter.POST_TWEETS ?? true,
        },
        twitter_profile: {
          username: params.twitter.username,
          trend_focus: [
            ...(params.contentStrategy?.tags || []),
            `#${params.chain}`,
            "#crypto",
            "#blockchain",
          ],
          content_focus: [
            ...(params.contentStrategy?.topics || []),
            "Project Updates",
            "Community Engagement",
            "Market Analysis",
            `${params.chain} Ecosystem`,
          ],
          engagement_criteria: [
            "Community Growth",
            "Token Utility",
            "Technical Development",
            `${params.chain} Integration`,
          ],
          reply_style: [
            params.contentStrategy?.engagement?.replyStyle || "friendly",
            params.contentStrategy?.tone || "positive",
          ],
          content_types: params.contentStrategy.contentTypes,
          post_frequency: params.contentStrategy.postFrequency,
          tone: params.contentStrategy.tone,
        },
        tokenomics: params.tokenomics,
        metadata: {
          website: params.metadata.website || "",
          telegram: params.metadata.telegram || "",
          discord: params.metadata.discord || "",
          chain: params.chain,
          contractAddress: params.contractAddress || "",
        },
        team: params.team.map((member) => ({
          name: member.name,
          role: member.role,
          socials: member.socials || {},
        })),
        roadmap: params.roadmap.map((item) => ({
          title: item.title,
          description: item.description,
          date: item.date.toString(),
          completed: item.completed,
        })),
      };

      try {
        const response = await fetch(`${this.apiUrl}/characters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: encodedAgentName,
            config,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            `API error: ${response.status} ${response.statusText}${
              errorData.message ? ` - ${errorData.message}` : ""
            }`
          );
        }

        const result = await response.json();

        // Start the character after creation
        const startResponse = await fetch(
          `${this.apiUrl}/characters/${encodedAgentName}/start`,
          {
            method: "POST",
          }
        );

        if (!startResponse.ok) {
          throw new Error(
            `Failed to start character: ${startResponse.statusText}`
          );
        }

        return {
          success: true,
          characterId: result.id,
          encodedName: encodedAgentName,
          config,
        };
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown API error";
        console.error("API request failed:", error);
        throw new Error(`API request failed: ${errorMessage}`);
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Agent creation failed:", error);
      return {
        success: false,
        error: errorMessage,
      };
    }
  }
}

export default AgentCreationController;
