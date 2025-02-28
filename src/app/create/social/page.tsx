"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ExistingTokenForm } from "@/components/social/ExistingTokenForm";
import { useRouter } from "next/navigation";
// import { Token } from "@/types/token";

export default function SocialPage() {
  const [selectedOption, setSelectedOption] = useState<"existing" | null>(null);
  const router = useRouter();

  const options = [
    {
      id: "existing",
      title: "Create from Existing Token",
      description:
        "Select your token and we'll configure the agent automatically",
      icon: <Icons.token className="w-6 h-6 text-purple-500" />,
    },
    {
      id: "manual",
      title: "Manual Setup",
      description: "Configure your AI agent manually with custom parameters",
      icon: <Icons.settings className="w-6 h-6 text-purple-500" />,
    },
  ];

  if (!selectedOption) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Setup Social Media Agent
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose how you want to configure your AI-powered social media agent
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {options.map((option) => (
            <Card
              key={option.id}
              className="p-6 bg-[#130627] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 cursor-pointer"
              onClick={() => {
                if (option.id === "manual") {
                  router.push("/create/manual");
                } else {
                  setSelectedOption("existing");
                }
              }}
            >
              <div className="mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold mb-2">{option.title}</h3>
              <p className="text-gray-400 mb-6">{option.description}</p>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => setSelectedOption(null)}
      >
        <Icons.arrowLeft className="w-4 h-4 mr-2" />
        Back to Options
      </Button>

      <ExistingTokenForm />
    </div>
  );
}
