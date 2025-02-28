"use client";

import React from "react";
import { Icons } from "./ui/icons";
import { motion } from "framer-motion";

interface SocialLinksProps {
  socialLinks: Record<string, string>;
}

export default function SocialLinks({ socialLinks }: SocialLinksProps) {
  const socialPlatforms = {
    website: { icon: Icons.globe, color: "text-blue-500" },
    twitter: { icon: Icons.twitter, color: "text-blue-400" },
    telegram: { icon: Icons.telegram, color: "text-blue-500" },
    discord: { icon: Icons.discord, color: "text-indigo-500" },
    github: { icon: Icons.github, color: "text-gray-700" },
    medium: { icon: Icons.medium, color: "text-green-600" },
    reddit: { icon: Icons.reddit, color: "text-orange-500" },
    instagram: { icon: Icons.instagram, color: "text-pink-500" },
    facebook: { icon: Icons.facebook, color: "text-blue-600" },
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Object.entries(socialLinks).map(
        ([platform, link], index) =>
          link && (
            <motion.a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors group"
            >
              {platform in socialPlatforms && (
                <span
                  className={`${
                    socialPlatforms[platform as keyof typeof socialPlatforms]
                      .color
                  } group-hover:scale-110 transition-transform`}
                >
                  {React.createElement(
                    socialPlatforms[platform as keyof typeof socialPlatforms]
                      .icon,
                    {
                      className: "h-5 w-5",
                    }
                  )}
                </span>
              )}
              <span className="capitalize font-medium">{platform}</span>
            </motion.a>
          )
      )}
    </div>
  );
}
