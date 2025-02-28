"use client";

import { useState } from "react";
import { TokenCreationForm } from "@/components/create/TokenCreationForm";
import { type MemeCoinOption } from "../../../../service/MemeCoinAIGenerator";
import { type ChainOption } from "@/components/ChainSelector";
import { ThemeForm } from "@/components/create/ThemeForm";
import { MemeCoinOptionsList } from "@/components/create/MemeCoinOptionsList";
import { TokenFormData } from "@/types/token";

export default function ThemePage() {
  const [options, setOptions] = useState<MemeCoinOption[]>([]);
  const [selectedChain, setSelectedChain] = useState<ChainOption | null>(null);
  const [selectedOption, setSelectedOption] = useState<MemeCoinOption | null>(
    null
  );

  const handleSelectOption = (option: MemeCoinOption) => {
    setSelectedOption(option);
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Design Your Meme Coin
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Let our AI generate unique meme coin concepts based on your
          preferences
        </p>
      </div>

      {!selectedOption ? (
        <>
          <ThemeForm
            selectedChain={selectedChain}
            onChainSelect={setSelectedChain}
            onOptionsGenerated={setOptions}
          />

          {options.length > 0 && (
            <MemeCoinOptionsList
              options={options}
              onSelect={handleSelectOption}
            />
          )}
        </>
      ) : (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              Customize Your Token: {selectedOption.name}
            </h2>
            <button
              onClick={() => setSelectedOption(null)}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Options
            </button>
          </div>

          <TokenCreationForm
            initialData={
              {
                name: selectedOption.name,
                symbol: selectedOption.symbol,
                description: selectedOption.description,
                initialSupply: selectedOption.initialSupply.toString(),
                decimals: 9,
                chain: "evm" as const,
                showcase: {
                  tags: [
                    ...selectedOption.suggestedHashtags.map((tag) =>
                      tag.replace("#", "")
                    ),
                    ...selectedOption.marketingStyle,
                    ...selectedOption.contentStrategy,
                    ...(selectedOption.communityGuidelines || []),
                  ].slice(0, 3),
                  roadmap: [],
                  team: [],
                  socialLinks: {
                    website: "",
                    twitter: "",
                    telegram: "",
                    discord: "",
                    github: "",
                    medium: "",
                    reddit: "",
                    instagram: "",
                    facebook: "",
                  },
                },
                isMintable: true,
                isBurnable: selectedOption.tokenomics.burnPercentage > 0,
                isPausable: false,
              } satisfies Partial<TokenFormData>
            }
            chainType={
              selectedChain?.id === "taurus"
                ? "evm"
                : selectedChain?.id === "solana"
                ? "solana"
                : selectedChain?.id === "secret"
                ? "secret"
                : "ton"
            }
          />
        </div>
      )}
    </div>
  );
}
