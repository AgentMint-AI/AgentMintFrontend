"use client";

import { YoutubeEmbed } from "../youtubeEmbeded";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Icons } from "../ui/icons";
import SocialLinks from "../socialLinks";
import Roadmap from "@/app/showcase/[tokenAddress]/_components/Roadmap";
import TeamSection from "@/app/showcase/[tokenAddress]/_components/TeamSection";

interface ShowcaseContentProps {
  showcase: {
    youtubeLink: string;
    socialLinks: Record<string, string>;
    roadmap: {
      title: string;
      description: string;
      date: string;
      completed: boolean;
    }[];
    team: {
      name: string;
      role: string;
      profileImage: string;
      socialLinks: {
        twitter: string;
        linkedin: string;
        github: string;
      };
    }[];
  };
  className?: string;
}

export function ShowcaseContent({ showcase, className }: ShowcaseContentProps) {
  return (
    <div className={className}>
      <div className="space-y-16">
        {/* YouTube Section */}
        {showcase.youtubeLink && (
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                  <Icons.youtube className="h-6 w-6 text-red-500" />
                  Featured Video
                </CardTitle>
              </CardHeader>
              <YoutubeEmbed youtubeLink={showcase.youtubeLink} />
            </motion.div>
          </section>
        )}

        {/* Social Links Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-purple-500/5 to-blue-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                  <Icons.link className="h-6 w-6 text-purple-500" />
                  Connect With Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SocialLinks socialLinks={showcase.socialLinks} />
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Roadmap Section */}
        {showcase.roadmap && showcase.roadmap.length > 0 && (
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                    <Icons.roadmap className="h-6 w-6 text-blue-500" />
                    Project Roadmap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Roadmap roadmap={showcase.roadmap} />
                </CardContent>
              </Card>
            </motion.div>
          </section>
        )}

        {/* Team Section */}
        {showcase.team && showcase.team.length > 0 && (
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-cyan-500/5 to-green-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                    <Icons.users className="h-6 w-6 text-cyan-500" />
                    Meet The Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TeamSection team={showcase.team} />
                </CardContent>
              </Card>
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
}
