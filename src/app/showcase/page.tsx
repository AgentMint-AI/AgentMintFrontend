"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { ShowcaseGrid } from "@/components/showcase/ShowcaseGrid";
import { ShowcaseFilters } from "@/components/showcase/ShowcaseFilters";
import { ShowcaseHeader } from "@/components/showcase/ShowcaseHeader";
import { useShowcaseStore } from "@/lib/store/useShowcaseStore";
import { useReadContract } from "wagmi";
import { wagmiContractConfig } from "@/lib/constant";
import { formatShowcaseData } from "@/lib/utils/formatShowcaseData";
import type { TokenShowcase } from "@/lib/utils/formatShowcaseData";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ShowcasePage() {
  const { setShowcases, setLoading, updateShowcaseMetadata } =
    useShowcaseStore();
  const [formattedShowcases, setFormattedShowcases] =
    useState<TokenShowcase[]>();

  // Use the hook to read all showcases
  const { data: showcaseData, isLoading } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getAllTokenShowcases",
    args: [],
  });

  // Format showcase data
  useEffect(() => {
    if (!showcaseData) return;

    try {
      const formatted = formatShowcaseData(showcaseData);
      console.log("Formatted showcases:", formatted);
      if (!Array.isArray(formatted)) {
        throw new Error(
          "Expected array of showcase data, received single item"
        );
      }
      setShowcases(formatted);
      setFormattedShowcases(formatted);
    } catch (error) {
      console.error("Error processing showcases:", error);
    }
  }, [showcaseData, setShowcases]);
  //https://data-dao.vercel.app/api/cid/metadata/bafkr6igvrhrqaf7liljzjbnb3t6lvdq5npc45pjybvjgm444t6jwo3qete
  // Fetch metadata for all showcases using SWR
  console.log(formattedShowcases);
  const { data: metadataResults } = useSWR(
    formattedShowcases
      ? formattedShowcases.map(
          (showcase) =>
            `https://data-dao.vercel.app/api/cid/metadata/${showcase.tokenMetadataCid}`
        )
      : null,
    (urls) => Promise.all(urls.map((url) => fetcher(url)))
  );

  // Update metadata in store when available
  useEffect(() => {
    if (formattedShowcases && metadataResults) {
      formattedShowcases.forEach((showcase, index) => {
        updateShowcaseMetadata(showcase.tokenAddress, metadataResults[index]);
      });
    }
  }, [formattedShowcases, metadataResults, updateShowcaseMetadata]);

  // Update loading state
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return (
    <div className="container mx-auto px-4 py-8">
      <ShowcaseHeader />
      <ShowcaseFilters />
      <ShowcaseGrid />
    </div>
  );
}
