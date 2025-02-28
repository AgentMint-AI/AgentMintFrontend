import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function ShowcaseHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Token Showcases</h1>
        <p className="text-gray-500 mt-2">
          Discover and explore community-created tokens
        </p>
      </div>
      <Link href="/create">
        <Button className="flex items-center gap-2">
          <Icons.plus className="h-4 w-4" />
          Create Token
        </Button>
      </Link>
    </div>
  );
}
