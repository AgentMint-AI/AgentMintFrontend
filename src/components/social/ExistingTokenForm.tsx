"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/ui/icons";
import { TokenSelector } from "./TokenSelector";
import { FormPersistenceService } from "../../../service/FormPersistenceService";
import { toast } from "sonner";

interface Token {
  id: string;
  symbol: string;
  name: string;
  contractAddress: string;
  chain: string;
  description?: string;
  isMintable?: boolean;
  isBurnable?: boolean;
  isPausable?: boolean;
  initialSupply?: string;
  showcase?: {
    tags?: string[];
    socialLinks?: {
      website?: string;
      twitter?: string;
      telegram?: string;
      discord?: string;
      medium?: string;
    };
    team?: Array<{
      name: string;
      role: string;
      socialLinks?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
      };
    }>;
    roadmap?: Array<{
      title: string;
      description: string;
      date: string;
      completed: boolean;
    }>;
  };
}

export function ExistingTokenForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [twitterCredentials, setTwitterCredentials] = useState({
    username: "",
    password: "",
  });

  const handleCreateAgent = async () => {
    if (!selectedToken) return;

    setIsLoading(true);
    try {
      // Convert selected token data to ManualAgentForm format
      const formData = {
        name: selectedToken.name,
        contractAddress: selectedToken.contractAddress,
        chain: {
          id: selectedToken.chain,
          name: selectedToken.chain,
        },
        twitterCredentials,
        contentStrategy: {
          style: ["casual", "professional"],
          topics: [],
          tone: "positive",
          tags: selectedToken.showcase?.tags || [],
          postFrequency: "daily",
          engagement: {
            replyStyle: "friendly",
            interactionFrequency: "medium",
            autoReply: true,
          },
          contentTypes: {
            text: true,
            polls: false,
            threads: true,
            spaces: false,
          },
        },
        metadata: {
          description: selectedToken.description || "",
          website: selectedToken.showcase?.socialLinks?.website || "",
          twitter: selectedToken.showcase?.socialLinks?.twitter || "",
          telegram: selectedToken.showcase?.socialLinks?.telegram || "",
          discord: selectedToken.showcase?.socialLinks?.discord || "",
          medium: selectedToken.showcase?.socialLinks?.medium || "",
        },
        tokenomics: {
          isMintable: selectedToken.isMintable || false,
          isBurnable: selectedToken.isBurnable || false,
          isPausable: selectedToken.isPausable || false,
          totalSupply: selectedToken.initialSupply || "",
          circulatingSupply: "",
          marketCap: "",
          price: "",
        },
        team:
          selectedToken.showcase?.team?.map((member) => ({
            name: member.name,
            role: member.role,
            socials: {
              twitter: member.socialLinks?.twitter || "",
              linkedin: member.socialLinks?.linkedin || "",
              github: member.socialLinks?.github || "",
            },
          })) || [],
        roadmap:
          selectedToken.showcase?.roadmap?.map((item) => ({
            title: item.title,
            description: item.description,
            date: item.date,
            completed: item.completed,
          })) || [],
        communityGuidelines: {
          allowedTopics: [],
          bannedTopics: [],
          moderationLevel: "medium",
          languagePreference: "english",
        },
        marketingStrategy: {
          targetAudience: [],
          competitors: [],
          uniqueSellingPoints: [],
          campaignGoals: [],
        },
        achievements: [],
      };

      // Save form data
      FormPersistenceService.saveForm(formData);

      toast.success("Token data loaded successfully!");
      router.push("/create/manual");
    } catch (error) {
      console.error(error);
      toast.error("Failed to load token data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Create Agent from Token
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Select your existing token and configure your AI-powered social media
          agent
        </p>
      </div>

      <Card className="p-6 bg-[#130627] border border-purple-500/20">
        <TokenSelector
          onSelect={setSelectedToken}
          selectedToken={selectedToken!}
        />
      </Card>

      {selectedToken && (
        <Card className="p-6 bg-[#130627] border border-purple-500/20">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Twitter Username
              </label>
              <Input
                value={twitterCredentials.username}
                onChange={(e) =>
                  setTwitterCredentials({
                    ...twitterCredentials,
                    username: e.target.value,
                  })
                }
                className="bg-[#0A0118]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Twitter Password
              </label>
              <Input
                type="password"
                value={twitterCredentials.password}
                onChange={(e) =>
                  setTwitterCredentials({
                    ...twitterCredentials,
                    password: e.target.value,
                  })
                }
                className="bg-[#0A0118]"
              />
            </div>

            <Button
              onClick={handleCreateAgent}
              className="w-full bg-purple-500 hover:bg-purple-600"
              disabled={isLoading}
            >
              {isLoading ? (
                <Icons.spinner className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Icons.twitter className="w-4 h-4 mr-2" />
              )}
              Create Social Agent
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
