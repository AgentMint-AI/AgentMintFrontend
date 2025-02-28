import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";

export function AgentsHeader() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Social Media Agents</h1>
        <p className="text-gray-400 mt-1">
          Manage your automated social presence
        </p>
      </div>
      <Button
        onClick={() => router.push("/create/social")}
        className="bg-purple-500 hover:bg-purple-600"
      >
        <Icons.plus className="w-4 h-4 mr-2" />
        New Agent
      </Button>
    </div>
  );
}
