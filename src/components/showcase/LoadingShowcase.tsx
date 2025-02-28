"use client";

import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "framer-motion";
import { Icons } from "../ui/icons";
import { Button } from "../ui/button";

interface LoadingShowcaseProps {
  state: "loading" | "error";
}

export function LoadingShowcase({ state }: LoadingShowcaseProps) {
  if (state === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-16">
          <Icons.alertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Failed to Load Data</h3>
          <p className="text-muted-foreground mb-6">
            There was an error loading the token information. Please try again
            later.
          </p>
          <Button onClick={() => window.location.reload()} variant="outline">
            <Icons.refresh className="mr-2 h-4 w-4" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Banner Skeleton */}
      <div className="relative h-[500px] bg-gradient-to-b from-gray-900 to-background">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-24">
          <div className="space-y-6">
            <div className="flex gap-3">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-32" />
            </div>
            <div className="space-y-3">
              <Skeleton className="h-12 w-64 md:w-96" />
              <Skeleton className="h-8 w-32" />
            </div>
            <Skeleton className="h-20 w-full max-w-2xl" />
          </div>
        </div>
      </div>

      {/* Token Info Skeleton */}
      <div className="container mx-auto px-4">
        <div className="-mt-24 relative z-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Card className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-5 w-5 rounded-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-8 w-32" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {/* YouTube Section Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-48" />
            </CardHeader>
            <CardContent>
              <Skeleton className="aspect-video w-full" />
            </CardContent>
          </Card>

          {/* Social Links Section Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-48" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Roadmap Section Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-48" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Section Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-48" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-48 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
