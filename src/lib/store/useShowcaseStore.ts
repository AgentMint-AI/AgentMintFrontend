import { create } from "zustand";
import { ShowcaseCardProps } from "@/components/showcase/ShowcaseCard";

interface ShowcaseState {
  showcases: ShowcaseCardProps["showcase"][];
  filteredShowcases: ShowcaseCardProps["showcase"][];
  loading: boolean;
  searchTerm: string;
  selectedChain: number | null;
  setShowcases: (showcases: ShowcaseCardProps["showcase"][]) => void;
  setLoading: (loading: boolean) => void;
  setSearchTerm: (term: string) => void;
  setSelectedChain: (chain: number | null) => void;
  updateShowcaseMetadata: (tokenAddress: string, metadata: any) => void;
  filterShowcases: () => void;
}

export const useShowcaseStore = create<ShowcaseState>((set, get) => ({
  showcases: [],
  filteredShowcases: [],
  loading: true,
  searchTerm: "",
  selectedChain: null,

  setShowcases: (showcases) => {
    set({ showcases });
    get().filterShowcases();
  },

  setLoading: (loading) => set({ loading }),

  setSearchTerm: (searchTerm) => {
    set({ searchTerm });
    get().filterShowcases();
  },

  setSelectedChain: (selectedChain) => {
    set({ selectedChain });
    get().filterShowcases();
  },

  updateShowcaseMetadata: (tokenAddress, metadata) => {
    set((state) => ({
      showcases: state.showcases.map((showcase) =>
        showcase.tokenAddress === tokenAddress
          ? { ...showcase, metadata }
          : showcase
      ),
    }));
    get().filterShowcases();
  },

  filterShowcases: () => {
    const { showcases, searchTerm, selectedChain } = get();
    let filtered = [...showcases];

    if (selectedChain !== null) {
      filtered = filtered.filter((s) => s.chain === selectedChain);
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.metadata?.name?.toLowerCase().includes(searchLower) ||
          s.tokenAddress.toLowerCase().includes(searchLower) ||
          s.metadata?.description?.toLowerCase().includes(searchLower) ||
          s.metadata?.symbol?.toLowerCase().includes(searchLower)
      );
    }

    set({ filteredShowcases: filtered });
  },
}));
