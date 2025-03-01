import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface AgentCardProps {
  name: string[];
  status: "running" | "stopped";
  description: string;
  expertise: string[];
  schedule: {
    POST_INTERVAL_MINUTES: number;
    content_focus: string[];
  };
  onStatusToggle: () => Promise<void>;
}

export function AgentCard({
  name,
  status,
  description,
  expertise,
  schedule,
  onStatusToggle,
}: AgentCardProps) {
  const router = useRouter();

  // Extract the actual name from the format 0xc7_name_1
  const displayName = name[0]?.split("_")[1];

  return (
    <Card className="p-6 bg-[#130627] border border-purple-500/20">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{displayName}</h3>
          <p className="text-gray-400 mb-2">{description}</p>
          <div className="flex gap-2 flex-wrap">
            {expertise.map((exp) => (
              <Badge key={exp} variant="secondary">
                {exp}
              </Badge>
            ))}
          </div>
        </div>
        <Badge variant={status === "running" ? "destructive" : "secondary"}>
          {status}
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-black/20 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Posting Schedule</h4>
          <p className="text-sm text-gray-400">
            Every {schedule.POST_INTERVAL_MINUTES} minutes
          </p>
        </div>
        <div className="bg-black/20 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Content Focus</h4>
          <div className="flex gap-2 flex-wrap">
            {schedule.content_focus.map((focus) => (
              <Badge key={focus} variant="outline">
                {focus}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() => router.push(`/dashboard/agents/${name}`)}
          className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-white"
        >
          <Icons.settings className="w-4 h-4 mr-2" />
          Manage
        </Button>
        <Button
          onClick={onStatusToggle}
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
        >
          {status === "running" ? (
            <Icons.pause className="w-4 h-4 mr-2" />
          ) : (
            <Icons.play className="w-4 h-4 mr-2" />
          )}
          {status === "running" ? "Pause" : "Start"}
        </Button>
      </div>
    </Card>
  );
}
