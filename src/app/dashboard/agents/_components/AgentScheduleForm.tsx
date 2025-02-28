import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";

interface ScheduleFormProps {
  schedule: {
    POST_INTERVAL_MINUTES: number;
    content_focus: string[];
    trend_focus: string[];
  };
  onScheduleChange: (schedule: any) => void;
  onSave: () => Promise<void>;
  isSaving: boolean;
}

export function AgentScheduleForm({
  schedule,
  onScheduleChange,
  onSave,
  isSaving,
}: ScheduleFormProps) {
  return (
    <Card className="p-6 bg-[#130627] border border-purple-500/20">
      <div className="space-y-6">
        <div>
          <Label>Posting Interval (minutes)</Label>
          <Input
            type="number"
            value={schedule.POST_INTERVAL_MINUTES}
            onChange={(e) =>
              onScheduleChange({
                ...schedule,
                POST_INTERVAL_MINUTES: parseInt(e.target.value),
              })
            }
            className="bg-[#0A0118]"
          />
        </div>

        <div>
          <Label>Content Focus (comma-separated)</Label>
          <Input
            value={schedule.content_focus.join(", ")}
            onChange={(e) =>
              onScheduleChange({
                ...schedule,
                content_focus: e.target.value.split(",").map((s) => s.trim()),
              })
            }
            className="bg-[#0A0118]"
          />
        </div>

        <div>
          <Label>Trend Focus (comma-separated)</Label>
          <Input
            value={schedule.trend_focus.join(", ")}
            onChange={(e) =>
              onScheduleChange({
                ...schedule,
                trend_focus: e.target.value.split(",").map((s) => s.trim()),
              })
            }
            className="bg-[#0A0118]"
          />
        </div>

        <Button
          onClick={onSave}
          className="w-full bg-purple-500 hover:bg-purple-600"
          disabled={isSaving}
        >
          {isSaving ? (
            <Icons.spinner className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <Icons.check className="w-4 h-4 mr-2" />
          )}
          Save Schedule
        </Button>
      </div>
    </Card>
  );
}
