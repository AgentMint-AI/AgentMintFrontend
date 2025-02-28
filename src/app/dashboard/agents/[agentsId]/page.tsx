"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CharacterManagementService from "../../../../../service/CharacterManagementService";
import { toast } from "sonner";

import { AgentProfileForm } from "../_components/AgentProfileForm";
import { AgentScheduleForm } from "../_components/AgentScheduleForm";

export default function AgentPage({
  params,
}: {
  params: { agentsId: string };
}) {
  const { agentsId } = React.use(params);
  console.log(agentsId, "agentsId");
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSaving, setIsSaving] = React.useState(false);
  const service = new CharacterManagementService();
  const [schedule, setSchedule] = React.useState({
    POST_INTERVAL_MINUTES: 120,
    content_focus: [] as string[],
    trend_focus: [] as string[],
  });
  const [profile, setProfile] = React.useState({
    description: "",
    personality: [] as string[],
    expertise: [] as string[],
  });

  React.useEffect(() => {
    loadAgentData();
  }, [agentsId]);

  const loadAgentData = async () => {
    setIsLoading(true);
    try {
      const scheduleData = await service.getCharacterSchedule(agentsId);
      const profileData = await service.getCharacterProfile(agentsId);
      setSchedule(scheduleData.twitter);
      setProfile(profileData);
    } catch (error) {
      console.error("Failed to load agent data:", error);
      toast.error("Failed to load agent data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveSchedule = async () => {
    setIsSaving(true);
    try {
      await service.updateCharacterSchedule(agentsId, schedule);
      toast.success("Schedule updated successfully");
    } catch (error) {
      console.error("Failed to update schedule:", error);
      toast.error("Failed to update schedule");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveProfile = async () => {
    setIsSaving(true);
    try {
      await service.updateCharacterProfile(agentsId, profile);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-16 text-center">
        <Icons.spinner className="w-8 h-8 animate-spin mx-auto" />
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{agentsId}</h1>
          <p className="text-gray-400">Manage your social media agent</p>
        </div>
        <Button
          onClick={() => router.push("/dashboard/agents")}
          variant="outline"
        >
          <Icons.arrowLeft className="w-4 h-4 mr-2" />
          Back to Agents
        </Button>
      </div>

      <Tabs defaultValue="schedule">
        <TabsList className="mb-8">
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule">
          <AgentScheduleForm
            schedule={schedule}
            onScheduleChange={setSchedule}
            onSave={handleSaveSchedule}
            isSaving={isSaving}
          />
        </TabsContent>

        <TabsContent value="profile">
          <AgentProfileForm
            profile={profile}
            onProfileChange={setProfile}
            onSave={handleSaveProfile}
            isSaving={isSaving}
          />
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="p-6 bg-[#130627] border border-purple-500/20">
            <div className="text-center py-8">
              <Icons.chart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Analytics Coming Soon</h3>
              <p className="text-gray-400">
                Performance metrics and insights will be available here
              </p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
