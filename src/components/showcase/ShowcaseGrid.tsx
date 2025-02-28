import { ShowcaseCard, ShowcaseCardProps } from "./ShowcaseCard";
import { useShowcaseStore } from "@/lib/store/useShowcaseStore";
import { AnimatePresence } from "framer-motion";

export function ShowcaseGrid() {
  const { filteredShowcases, loading } = useShowcaseStore();

  if (loading) {
    return <ShowcaseGridSkeleton />;
  }

  return (
    <AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredShowcases.map((showcase: ShowcaseCardProps["showcase"]) => (
          <ShowcaseCard key={showcase.tokenAddress} showcase={showcase} />
        ))}
      </div>
    </AnimatePresence>
  );
}

function ShowcaseGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}
