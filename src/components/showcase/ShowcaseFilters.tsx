import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useShowcaseStore } from "@/lib/store/useShowcaseStore";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function ShowcaseFilters() {
  const { searchTerm, setSearchTerm, selectedChain, setSelectedChain } =
    useShowcaseStore();

  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Icons.search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by name, symbol, or address..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select
          value={selectedChain?.toString() || "5"}
          onValueChange={(value) =>
            setSelectedChain(value === "5" ? null : Number(value))
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Chains" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">
              <div className="flex items-center gap-2">
                <span>All Chains</span>
              </div>
            </SelectItem>
            <SelectItem value="1">
              <div className="flex items-center gap-2">
                <Icons.taurus className="h-4 w-4" />
                <span>Taurus</span>
              </div>
            </SelectItem>
            <SelectItem value="2">
              <div className="flex items-center gap-2">
                <Icons.solana className="h-4 w-4" />
                <span>Solana</span>
              </div>
            </SelectItem>
            <SelectItem value="3">
              <div className="flex items-center gap-2">
                <Icons.secret className="h-4 w-4" />
                <span>Secret</span>
              </div>
            </SelectItem>
            <SelectItem value="4">
              <div className="flex items-center gap-2">
                <Icons.ton className="h-4 w-4" />
                <span>TON</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      <div className="flex gap-2 flex-wrap">
        {searchTerm && (
          <Badge variant="secondary" className="flex items-center gap-2">
            <span>Search: {searchTerm}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 p-0 hover:bg-transparent"
              onClick={() => setSearchTerm("")}
            >
              <Icons.x className="h-3 w-3" />
            </Button>
          </Badge>
        )}
        {selectedChain && (
          <Badge variant="secondary" className="flex items-center gap-2">
            <span>Chain: {getChainName(selectedChain)}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 p-0 hover:bg-transparent"
              onClick={() => setSelectedChain(null)}
            >
              <Icons.x className="h-3 w-3" />
            </Button>
          </Badge>
        )}
      </div>
    </div>
  );
}

function getChainName(chainId: number): string {
  switch (chainId) {
    case 1:
      return "Taurus";
    case 2:
      return "Solana";
    case 3:
      return "Secret";
    case 4:
      return "TON";
    default:
      return "Unknown";
  }
}
