"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { type MemeCoinOption } from "../../../service/MemeCoinAIGenerator";

interface MemeCoinOptionsListProps {
  options: MemeCoinOption[];
  onSelect: (option: MemeCoinOption) => void;
}

export function MemeCoinOptionsList({
  options,
  onSelect,
}: MemeCoinOptionsListProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {options.map((option, index) => (
        <Card
          key={index}
          className="p-6 bg-[#130627] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
        >
          <h3 className="text-xl font-bold mb-2">{option.name}</h3>
          <p className="text-sm text-gray-400 mb-4">{option.description}</p>

          <div className="space-y-2 mb-4">
            <div className="text-sm">
              <span className="font-medium">Symbol:</span> {option.symbol}
            </div>
            <div className="text-sm">
              <span className="font-medium">Supply:</span>{" "}
              {option.initialSupply.toLocaleString()}
            </div>
            <div className="text-sm">
              <span className="font-medium">Burn:</span>{" "}
              {option.tokenomics.burnPercentage}%
            </div>
          </div>

          <div className="space-y-3">
            {option.marketingStyle && (
              <div className="flex flex-wrap gap-2">
                {option.marketingStyle.slice(0, 3).map((style, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300"
                  >
                    {style}
                  </span>
                ))}
              </div>
            )}

            {option.suggestedHashtags && (
              <div className="flex flex-wrap gap-2">
                {option.suggestedHashtags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <Button
            onClick={() => onSelect(option)}
            className="w-full mt-4 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300"
          >
            Select & Continue
            <Icons.arrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Card>
      ))}
    </div>
  );
}
