"use client";

import { TokenMetadata } from "@/types/token";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";

interface TokenInfoProps {
  metadata: TokenMetadata;
  className?: string;
}

export function TokenInfo({ metadata, className }: TokenInfoProps) {
  const stats = [
    {
      label: "Initial Supply",
      value: Number(metadata.initialSupply).toLocaleString(),
      icon: Icons.coins,
      color: "text-yellow-500",
      gradient: "from-yellow-500/20 to-transparent",
    },
    {
      label: "Decimals",
      value: metadata.decimals,
      icon: Icons.hash,
      color: "text-blue-500",
      gradient: "from-blue-500/20 to-transparent",
    },
    {
      label: "Features",
      value:
        [
          metadata.isMintable && "Mintable",
          metadata.isBurnable && "Burnable",
          metadata.isPausable && "Pausable",
        ]
          .filter(Boolean)
          .join(", ") || "Standard",
      icon: Icons.settings,
      color: "text-purple-500",
      gradient: "from-purple-500/20 to-transparent",
    },
  ];

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card
              className={cn(
                "overflow-hidden backdrop-blur-xl bg-white/90 dark:bg-gray-900/90",
                "hover:bg-white dark:hover:bg-gray-900 transition-all duration-200",
                "shadow-lg hover:shadow-xl border-t-2",
                `border-t-${stat.color.split("-")[1]}/20`
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-10",
                  stat.gradient
                )}
              />
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </CardTitle>
                <stat.icon className={cn("h-5 w-5", stat.color)} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
