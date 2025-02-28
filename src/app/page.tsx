"use client";

import Footer from "@/components/Footer";
import { ConnectModal } from "@/components/ConnectButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0118] text-gray-100">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            AgentMint.AI Coin Creator
          </h1>
          <p className="text-xl mb-8">
            Create, Launch & Grow Your Meme Coin with AI 🚀
          </p>
          <div className="flex justify-center max-w-xs mx-auto">
            <ConnectModal />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#130627] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-colors">
            <h3 className="text-xl font-bold mb-4">🎯 One-Click Creation</h3>
            <p className="text-gray-300">
              Deploy your private token contract and generate initial meme batch
              instantly
            </p>
          </div>
          <div className="bg-[#130627] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-colors">
            <h3 className="text-xl font-bold mb-4">🤖 AI-Powered Memes</h3>
            <p className="text-gray-300">
              Generate viral memes and content automatically with our advanced
              AI
            </p>
          </div>
          <div className="bg-[#130627] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-colors">
            <h3 className="text-xl font-bold mb-4">🔒 Privacy First</h3>
            <p className="text-gray-300">
              Hidden balances, encrypted transactions, and protected operations
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex-1">
              <div className="text-3xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold mb-2">Connect & Create</h3>
              <p className="text-gray-300">
                Connect your wallet and customize your meme coin details
              </p>
            </div>
            <div className="flex-1">
              <div className="text-3xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold mb-2">Generate Content</h3>
              <p className="text-gray-300">
                Let AI create your memes and social media strategy
              </p>
            </div>
            <div className="flex-1">
              <div className="text-3xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold mb-2">Launch & Grow</h3>
              <p className="text-gray-300">
                Monitor performance and let AI handle your marketing
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Meme Coin?
          </h2>
          <p className="text-xl mb-8">Join the future of memetic finance</p>
          <div className="flex gap-4 justify-center">
            <Link href="/create/theme">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity">
                Launch Meme Coin
              </button>
            </Link>
            <Link href="/docs">
              <button className="border-2 border-purple-500 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-500/20 transition-colors">
                Read Docs
              </button>
            </Link>
            <Link href="/create/social">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity">
                Launch Twitter Agent
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
