"use client";

import * as React from "react";
import { useTokenShowcaseByAddress } from "@/hooks/OnChain/useReadContracts";
import { Icons } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { TokenDetailHeader } from "../_components/TokenDetailHeader";
import { TokenActions } from "../_components/TokenActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TokenHistory } from "../_components/TokenHistory";
import { TokenStats } from "../_components/TokenStats";

export default function TokenDetailPage({
  params,
}: {
  params: { tokenAddress: string };
}) {
  const { tokenAddress } = React.use(params);
  const {
    data: token,
    isLoading,
    isError,
  } = useTokenShowcaseByAddress(tokenAddress);

  if (isLoading) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-16 text-center">
        <Icons.spinner className="w-8 h-8 animate-spin mx-auto" />
      </div>
    );
  }

  if (isError || !token) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <Card className="p-8 text-center">
          <Icons.alertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-red-500 mb-2">
            Token Not Found
          </h2>
          <p className="text-gray-500">
            The token you&apos;re looking for doesn&apos;t exist or there was an
            error loading it.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <TokenDetailHeader token={token} />

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="actions">Actions</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <TokenStats token={token} />
        </TabsContent>

        <TabsContent value="actions">
          <TokenActions token={token} />
        </TabsContent>

        <TabsContent value="history">
          <TokenHistory token={token} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
