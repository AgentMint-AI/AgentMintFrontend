import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface ProfileFormProps {
  profile: {
    description: string;
    personality: string[];
    expertise: string[];
  };
  onProfileChange: (profile: any) => void;
  onSave: () => Promise<void>;
  isSaving: boolean;
}

export function AgentProfileForm({
  profile,
  onProfileChange,
  onSave,
  isSaving,
}: ProfileFormProps) {
  return (
    <Card className="p-6 bg-[#130627] border border-purple-500/20">
      <div className="space-y-6">
        <div>
          <Label>Description</Label>
          <Textarea
            value={profile.description}
            onChange={(e) =>
              onProfileChange({ ...profile, description: e.target.value })
            }
            className="bg-[#0A0118]"
          />
        </div>

        <div>
          <Label>Personality Traits (comma-separated)</Label>
          <Input
            value={profile.personality.join(", ")}
            onChange={(e) =>
              onProfileChange({
                ...profile,
                personality: e.target.value.split(",").map((s) => s.trim()),
              })
            }
            className="bg-[#0A0118]"
          />
        </div>

        <div>
          <Label>Expertise Areas (comma-separated)</Label>
          <Input
            value={profile.expertise.join(", ")}
            onChange={(e) =>
              onProfileChange({
                ...profile,
                expertise: e.target.value.split(",").map((s) => s.trim()),
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
          Save Profile
        </Button>
      </div>
    </Card>
  );
}
