"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { ChainSelector } from "@/components/ChainSelector";
import { type ChainOption } from "@/components/ChainSelector";
import { toast } from "sonner";
import { generateMemeCoinOptions } from "../../../service/MemeCoinAIGenerator";
import { type MemeCoinOption } from "../../../service/MemeCoinAIGenerator";
interface ThemeFormProps {
  selectedChain: ChainOption | null;
  onChainSelect: (chain: ChainOption) => void;
  onOptionsGenerated: (options: MemeCoinOption[]) => void;
}

export function ThemeForm({
  selectedChain,
  onChainSelect,
  onOptionsGenerated,
}: ThemeFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    topics: "",
    sentiment: "bullish",
    style: "casual",
    emojis: "🚀,🌙,💎",
    phrases: "to the moon,diamond hands,LFG",
  });

  const handleGenerate = async () => {
    if (!selectedChain) {
      toast.error("Please select a blockchain first");
      return;
    }

    setIsLoading(true);
    try {
      //   await generateMemeCoinOptions({
      //     input: {
      //       topics: formData.topics.split(",").map((t) => t.trim()),
      //       sentiment: formData.sentiment as "bullish" | "neutral" | "memetic",
      //       style: formData.style,
      //       emojis: formData.emojis.split(",").map((e) => e.trim()),
      //       phrases: formData.phrases.split(",").map((p) => p.trim()),
      //     },
      //     onOptionsGenerated: (options) => {
      //       onOptionsGenerated(options);
      //       setIsLoading(false);
      //     },
      //     onError: (error) => {
      //       console.error(error);
      //       toast.error("Failed to generate options");
      //       setIsLoading(false);
      //     },
      //   });
      // Simulate API call with dummy data
      const dummyOptions = [
        {
          name: "HellBucks",
          symbol: "HELL",
          description:
            "Infernal crypto rising from the depths, burning through traditional finance with demonic gains! 🔥",
          logoPrompt: "Cartoonish devil holding crypto coin with flames",
          initialSupply: 666000000,
          tokenomics: {
            burnPercentage: 3,
            taxPercentage: 5,
            maxWalletPercentage: 2,
          },
          marketingStyle: ["Edgy", "Dark humor", "Provocative", "Rebellious"],
          suggestedHashtags: [
            "#HellCoin",
            "#DiamondHandsInferno",
            "#ToTheMoonFromHell",
            "#LFGHellBucks",
          ],
          contentStrategy: [
            "Viral memes",
            "Satanic investment jokes",
            "Community challenges",
            "Extreme price prediction videos",
          ],
          communityGuidelines: [
            "HODL like you're escaping hell",
            "No fear, only gains",
            "Spread the infernal gospel",
            "Diamond hands or eternal damnation",
          ],
        },
        {
          name: "InfernalToken",
          symbol: "BLZE",
          description:
            "Scorching crypto that burns through traditional investment barriers with hellfire gains! 🔥",
          logoPrompt: "Flaming pentagram with crypto symbol in center",
          initialSupply: 666666666,
          tokenomics: {
            burnPercentage: 4,
            taxPercentage: 6,
            maxWalletPercentage: 3,
          },
          marketingStyle: [
            "Provocative",
            "Rebellious",
            "Dark comedy",
            "Intense",
          ],
          suggestedHashtags: [
            "#InfernalInvestment",
            "#HellishReturns",
            "#DiamondHandsInferno",
            "#LFGBlazeToken",
          ],
          contentStrategy: [
            "Shock value memes",
            "Demonic investment tutorials",
            "Viral challenge videos",
            "Extreme gain screenshots",
          ],
          communityGuidelines: [
            "Burn traditional finance",
            "HODL or burn",
            "No weakness allowed",
            "Spread hellish investment vibes",
          ],
        },
        {
          name: "DamnationCoin",
          symbol: "DAMN",
          description:
            "Crypto that turns financial suffering into legendary gains, straight from the depths of investment hell! 🔥",
          logoPrompt: "Demonic hand holding golden cryptocurrency",
          initialSupply: 999999999,
          tokenomics: {
            burnPercentage: 5,
            taxPercentage: 4,
            maxWalletPercentage: 2,
          },
          marketingStyle: ["Dark humor", "Intense", "Rebellious", "Shocking"],
          suggestedHashtags: [
            "#DamnationWealth",
            "#HellishReturns",
            "#ToTheMoonFromHell",
            "#LFGDamnCoin",
          ],
          contentStrategy: [
            "Extreme investment memes",
            "Satirical financial content",
            "Community roast sessions",
            "Viral challenge competitions",
          ],
          communityGuidelines: [
            "Fear is for the weak",
            "Embrace the inferno",
            "Diamond hands forever",
            "No surrender to traditional markets",
          ],
        },
      ];

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      onOptionsGenerated(dummyOptions);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate options");
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 bg-[#130627] border border-purple-500/20 mb-8">
      <div className="space-y-6">
        <div>
          <Label className="block text-sm font-medium mb-2">
            Select Blockchain
          </Label>
          <ChainSelector
            selectedChain={selectedChain}
            onSelect={onChainSelect}
          />
        </div>

        {selectedChain && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="block text-sm font-medium mb-2">
                  Topics (comma-separated)
                </Label>
                <Input
                  value={formData.topics}
                  onChange={(e) =>
                    setFormData({ ...formData, topics: e.target.value })
                  }
                  placeholder="meme coins, crypto, blockchain"
                  className="bg-[#0A0118]"
                  disabled={isLoading}
                />
              </div>
              <div>
                <Label className="block text-sm font-medium mb-2">
                  Key Phrases (comma-separated)
                </Label>
                <Input
                  value={formData.phrases}
                  onChange={(e) =>
                    setFormData({ ...formData, phrases: e.target.value })
                  }
                  placeholder="to the moon, diamond hands, LFG"
                  className="bg-[#0A0118]"
                  disabled={isLoading}
                />
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              className="w-full bg-purple-500 hover:bg-purple-600 disabled:opacity-50"
              disabled={isLoading || !formData.topics.trim()}
            >
              {isLoading ? (
                <Icons.spinner className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Icons.sparkles className="w-4 h-4 mr-2" />
              )}
              {isLoading ? "Generating..." : "Generate Options"}
            </Button>
          </>
        )}
      </div>
    </Card>
  );
}
