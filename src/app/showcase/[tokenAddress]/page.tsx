"use client";

import * as React from "react";
import useSWR from "swr";
import { TokenBanner } from "@/components/showcase/TokenBanner";
import { TokenInfo } from "@/components/showcase/TokenInfo";
import { ShowcaseContent } from "@/components/showcase/ShowcaseContent";
import { useTokenShowcaseByAddress } from "@/hooks/OnChain/useReadContracts";
import { LoadingShowcase } from "@/components/showcase/LoadingShowcase";
import { formatShowcaseData } from "@/lib/utils/formatShowcaseData";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function TokenShowcasePage({
  params,
}: {
  params: { tokenAddress: string };
}) {
  const { tokenAddress } = React.use(params);
  const { data, isError, isLoading } = useTokenShowcaseByAddress(tokenAddress);

  // Format the data using our utility and ensure we get a single showcase
  const tokenShowcase = React.useMemo(() => {
    if (!data) return null;

    const formatted = formatShowcaseData(data);
    if (Array.isArray(formatted)) {
      throw new Error("Expected single showcase data, received array");
    }
    return formatted;
  }, [data]);

  const { data: tokenMetadata, error: tokenError } = useSWR(
    tokenShowcase
      ? `https://data-dao.vercel.app/api/cid/metadata/${tokenShowcase.tokenMetadataCid}`
      : null,
    fetcher
  );

  const { data: showcaseMetadata, error: showcaseError } = useSWR(
    tokenShowcase
      ? `https://data-dao.vercel.app/api/cid/metadata/${tokenShowcase.showcaseCid}`
      : null,
    fetcher
  );

  if (isError || tokenError || showcaseError) {
    return <LoadingShowcase state="error" />;
  }

  if (isLoading || !tokenShowcase || !tokenMetadata || !showcaseMetadata) {
    return <LoadingShowcase state="loading" />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <TokenBanner metadata={tokenMetadata} tokenAddress={tokenAddress} />

      <div className="container mx-auto px-4">
        <TokenInfo
          metadata={tokenMetadata}
          className="-mt-24 relative z-10 mb-16"
        />
        <ShowcaseContent showcase={showcaseMetadata} className="pt-8" />
      </div>
    </main>
  );
}
