import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function AgentsEmptyState() {
  const router = useRouter();

  return (
    <div className="text-center py-12">
      <Icons.bot className="w-12 h-12 mx-auto text-gray-400 mb-4" />
      <h3 className="text-xl font-bold mb-2">No Agents Found</h3>
      <p className="text-gray-400 mb-6">
        Create your first social media agent to get started
      </p>
      <Button
        onClick={() => router.push("/create/social")}
        className="bg-purple-500 hover:bg-purple-600"
      >
        <Icons.plus className="w-4 h-4 mr-2" />
        Create Agent
      </Button>
    </div>
  );
}
