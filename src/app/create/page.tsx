"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { useAccount } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSecretNetwork } from "@/providers/secretNetworkContext";
import { useTonWallet } from "../../../tonconnect";

export default function CreatePage() {
  const router = useRouter();
  const { isConnected: isEvmConnected } = useAccount();
  const { connected: isSolanaConnected } = useWallet();
  const { isConnected: isSecretConnected } = useSecretNetwork();
  const tonWallet = useTonWallet();
  const isConnected =
    isEvmConnected || isSolanaConnected || isSecretConnected || !!tonWallet;

  const createOptions = [
    {
      title: "AI-Powered Creation",
      description:
        "Let AI generate your meme coin concept and marketing strategy",
      icon: <Icons.sparkles className="w-6 h-6 text-purple-500" />,
      href: "/create/theme",
    },
    {
      title: "Social Agent Setup",
      description: "Configure your AI-powered social media presence",
      icon: <Icons.twitter className="w-6 h-6 text-purple-500" />,
      href: "/create/social",
    },
    {
      title: "Manual Creation",
      description: "Customize every aspect of your meme coin manually",
      icon: <Icons.settings className="w-6 h-6 text-purple-500" />,
      href: "/create/manual",
    },
  ];

  if (!isConnected) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <Icons.wallet className="w-12 h-12 mx-auto text-purple-500 mb-4" />
          <h1 className="text-2xl font-bold mb-4">Connect Your Wallet</h1>
          <p className="text-gray-400 mb-8">
            Please connect your wallet to create a meme coin
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Create Your Meme Coin
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose your creation method below. Our AI will help you generate
          unique concepts, marketing strategies, and social media presence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {createOptions.map((option) => (
          <Card
            key={option.title}
            className="p-6 bg-[#130627] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
          >
            <div className="mb-4">{option.icon}</div>
            <h3 className="text-xl font-bold mb-2">{option.title}</h3>
            <p className="text-gray-400 mb-6">{option.description}</p>
            <Button
              onClick={() => router.push(option.href)}
              className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300"
            >
              Get Started
              <Icons.arrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
