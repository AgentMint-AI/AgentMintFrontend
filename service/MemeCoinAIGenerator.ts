import Anthropic from "@anthropic-ai/sdk";

export interface MemeCoinOption {
  name: string;
  symbol: string;
  description: string;
  logoPrompt: string;
  initialSupply: number;
  tokenomics: {
    burnPercentage: number;
    taxPercentage: number;
    maxWalletPercentage: number;
  };
  marketingStyle: string[];
  suggestedHashtags: string[];
  contentStrategy: string[];
  communityGuidelines?: string[];
}

interface GenerateOptionsInput {
  topics: string[];
  sentiment: "bullish" | "neutral" | "memetic";
  style: string;
  emojis: string[];
  phrases: string[];
}

class MemeCoinAIGenerator {
  private anthropic: Anthropic;

  constructor(anthropicApiKey: string) {
    this.anthropic = new Anthropic({
      apiKey: anthropicApiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  async generateOptions(
    input: GenerateOptionsInput
  ): Promise<MemeCoinOption[]> {
    try {
      const options = await this.generateMemeCoinOptions(input);
      return options;
    } catch (error) {
      console.error("Error generating meme coin options:", error);
      throw error;
    }
  }

  private async generateMemeCoinOptions(
    input: GenerateOptionsInput
  ): Promise<MemeCoinOption[]> {
    const prompt = `
      Generate 3 unique meme coin options based on these parameters:
      Topics: ${input.topics.join(", ")}
      Sentiment: ${input.sentiment}
      Style: ${input.style}
      Emojis: ${input.emojis.join("")}
      Key Phrases: ${input.phrases.join(", ")}

      For each option, provide a complete, valid JSON object with all strings properly terminated.
      Ensure all arrays are complete and properly closed.
      Keep descriptions and guidelines concise.

      Return the response in this exact JSON format:
      {
        "memeCoinOptions": [
          {
            "name": string,
            "symbol": string,
            "description": string (max 150 chars),
            "logoPrompt": string (max 100 chars),
            "initialSupply": number,
            "tokenomics": {
              "burnPercentage": number,
              "taxPercentage": number,
              "maxWalletPercentage": number
            },
            "marketingStyle": string[] (max 4 items),
            "suggestedHashtags": string[] (max 4 items),
            "contentStrategy": string[] (max 4 items),
            "communityGuidelines": string[] (max 4 items)
          }
        ]
      }
    `;

    const completion = await this.anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      system:
        "You are a meme coin generation expert. Generate creative and unique options. Always return complete, valid JSON.",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
    });

    try {
      const text = completion?.content[0]?.text || "";
      console.log("Raw response:", text); // For debugging
      const response = JSON.parse(text);
      return response.memeCoinOptions;
    } catch (error) {
      console.error("Failed to parse AI response:", error);
      throw new Error("Failed to generate valid meme coin options");
    }
  }
}

// Example usage component for frontend integration
interface AIOptionGeneratorProps {
  input: GenerateOptionsInput;
  onOptionsGenerated: (options: MemeCoinOption[]) => void;
  onError: (error: Error) => void;
}

async function generateMemeCoinOptions({
  input,
  onOptionsGenerated,
  onError,
}: AIOptionGeneratorProps) {
  try {
    const generator = new MemeCoinAIGenerator(
      process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY!
    );
    const options = await generator.generateOptions(input);
    onOptionsGenerated(options);
  } catch (error) {
    onError(error as Error);
  }
}

// Example usage
// const exampleInput: AIOptionGeneratorProps = {
//   input: {
//     topics: ["meme coins", "crypto", "blockchain"],
//     sentiment: "bullish",
//     style: "casual",
//     emojis: ["🚀", "🌙", "💎"],
//     phrases: ["to the moon", "diamond hands", "LFG"],
//   },
//   onOptionsGenerated: (options) => console.log(options),
//   onError: (error) => console.error(error),
// };

// generateMemeCoinOptions(exampleInput);

export { MemeCoinAIGenerator, generateMemeCoinOptions };
