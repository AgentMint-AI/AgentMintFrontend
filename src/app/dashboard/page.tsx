"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-2">
          Manage your meme coins and AI agents from one place
        </p>
      </div>

      {/* Quick actions grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-[#130627] border border-purple-500/20">
          <div className="flex items-center mb-4">
            <Icons.coins className="w-8 h-8 text-purple-500" />
            <h3 className="text-xl font-bold ml-3">Tokens</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Create and manage your meme tokens
          </p>
          <Button
            onClick={() => router.push("/dashboard/tokens")}
            className="w-full bg-purple-500 hover:bg-purple-600"
          >
            View Tokens
          </Button>
        </Card>

        <Card className="p-6 bg-[#130627] border border-purple-500/20">
          <div className="flex items-center mb-4">
            <Icons.bot className="w-8 h-8 text-purple-500" />
            <h3 className="text-xl font-bold ml-3">AI Agents</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Manage your AI-powered marketing agents
          </p>
          <Button
            onClick={() => router.push("/dashboard/agents")}
            className="w-full bg-purple-500 hover:bg-purple-600"
          >
            View Agents
          </Button>
        </Card>

        <Card className="p-6 bg-[#130627] border border-purple-500/20">
          <div className="flex items-center mb-4">
            <Icons.plus className="w-8 h-8 text-purple-500" />
            <h3 className="text-xl font-bold ml-3">Create New</h3>
          </div>
          <p className="text-gray-400 mb-4">Start creating a new meme token</p>
          <Button
            onClick={() => router.push("/create")}
            className="w-full bg-purple-500 hover:bg-purple-600"
          >
            Create Token
          </Button>
        </Card>
      </div>
    </div>
  );
}
