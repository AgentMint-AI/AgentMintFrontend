"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

interface YoutubeEmbedProps {
  youtubeLink: string;
}

export function YoutubeEmbed({ youtubeLink }: YoutubeEmbedProps) {
  const getYoutubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYoutubeId(youtubeLink);

  if (!videoId) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent className="p-0 aspect-video">
          <iframe
            title="YouTube video player"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}
