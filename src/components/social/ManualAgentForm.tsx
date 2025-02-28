"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Icons } from "@/components/ui/icons";
import { ChainOption, ChainSelector } from "@/components/ChainSelector";
import { PlusCircle, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormPersistenceService } from "../../../service/FormPersistenceService";
import { AgentCreationController } from "../../../service/AgentCreationController";
import { AgentCreationRequest } from "../../../service/AgentCreationController";

type SocialIcon = "globe" | "twitter" | "telegram" | "discord" | "medium";
type MetadataKey = "website" | "twitter" | "telegram" | "discord" | "medium";

interface SocialLink {
  name: MetadataKey;
  icon: SocialIcon;
  placeholder: string;
}

export function ManualAgentForm({ userWallet }: { userWallet: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const initialFormState = {
    name: "",
    contractAddress: "",
    chain: null as ChainOption | null,
    twitterCredentials: {
      username: "",
      password: "",
    },
    contentStrategy: {
      style: ["casual", "humorous"],
      topics: [] as string[],
      tone: "positive",
      tags: [] as string[],
      postFrequency: "daily",
      engagement: {
        replyStyle: "friendly",
        interactionFrequency: "medium",
        autoReply: true,
      },
      contentTypes: {
        text: true,
        polls: false,
        threads: true,
        spaces: false,
      },
    },
    metadata: {
      description: "",
      website: "",
      twitter: "",
      telegram: "",
      discord: "",
      medium: "",
    },
    tokenomics: {
      isMintable: false,
      isBurnable: false,
      isPausable: false,
      totalSupply: "",
      circulatingSupply: "",
      marketCap: "",
      price: "",
    },
    team: [] as Array<{
      name: string;
      role: string;
      socials: {
        twitter?: string;
        linkedin?: string;
        github?: string;
        telegram?: string;
        x?: string;
      };
    }>,
    roadmap: [] as Array<{
      title: string;
      description: string;
      date: string;
      completed: boolean;
    }>,
    communityGuidelines: {
      allowedTopics: [] as string[],
      bannedTopics: [] as string[],
      moderationLevel: "medium",
      languagePreference: "english",
    },
    marketingStrategy: {
      targetAudience: [] as string[],
      competitors: [] as string[],
      uniqueSellingPoints: [] as string[],
      campaignGoals: [] as string[],
    },
    achievements: [] as Array<{
      title: string;
      date: string;
      description: string;
      type: "partnership" | "development" | "community" | "other";
    }>,
  };

  const [formData, setFormData] = useState(() => {
    const savedForm = FormPersistenceService.loadForm();
    return savedForm || initialFormState;
  });
  const [autoSave, setAutoSave] = useState(true);
  const [progress, setProgress] = useState(0);

  const [completedSections, setCompletedSections] = useState({
    basic: false,
    social: false,
    content: false,
    team: false,
    roadmap: false,
    community: false,
  });

  useEffect(() => {
    const checkSectionCompletion = {
      basic: () => {
        return !!(
          formData.name &&
          formData.contractAddress &&
          formData.chain &&
          formData.twitterCredentials.username &&
          formData.twitterCredentials.password
        );
      },
      social: () => {
        return Object.values(formData.metadata).some((value) => !!value);
      },
      content: () => {
        return !!(
          formData.contentStrategy.postFrequency &&
          Object.values(formData.contentStrategy.contentTypes).some((v) => v)
        );
      },
      team: () => {
        return (
          formData.team.length > 0 &&
          formData.team.every((member) => member.name && member.role)
        );
      },
      roadmap: () => {
        return (
          formData.roadmap.length > 0 &&
          formData.roadmap.every((item) => item.title && item.date)
        );
      },
      community: () => {
        return !!(
          formData.communityGuidelines.allowedTopics.length > 0 ||
          formData.communityGuidelines.bannedTopics.length > 0
        );
      },
    };

    setCompletedSections({
      basic: checkSectionCompletion.basic(),
      social: checkSectionCompletion.social(),
      content: checkSectionCompletion.content(),
      team: checkSectionCompletion.team(),
      roadmap: checkSectionCompletion.roadmap(),
      community: checkSectionCompletion.community(),
    });
  }, [formData]);

  useEffect(() => {
    const completed = Object.values(completedSections).filter(Boolean).length;
    const total = Object.keys(completedSections).length;
    setProgress((completed / total) * 100);
  }, [completedSections]);

  useEffect(() => {
    const savedForm = FormPersistenceService.loadForm();
    if (savedForm) {
      setFormData(savedForm);
      toast("Form Restored", {
        description: "Your previous progress has been loaded",
      });
    }
  }, []);

  useEffect(() => {
    if (!autoSave) return;

    const cleanup = FormPersistenceService.setupAutoSave(formData);
    return () => cleanup();
  }, [formData, autoSave]);

  const socialLinks: SocialLink[] = [
    { name: "website", icon: "globe", placeholder: "https://yourwebsite.com" },
    {
      name: "twitter",
      icon: "twitter",
      placeholder: "https://twitter.com/username",
    },
    {
      name: "telegram",
      icon: "telegram",
      placeholder: "https://t.me/username",
    },
    {
      name: "discord",
      icon: "discord",
      placeholder: "https://discord.gg/invite",
    },
    {
      name: "medium",
      icon: "medium",
      placeholder: "https://medium.com/@username",
    },
  ];

  const handleCreateAgent = async () => {
    setIsLoading(true);
    try {
      const controller = new AgentCreationController();

      const request: AgentCreationRequest = {
        userId: "user123", // You'll need to get this from your auth system
        userWallet: userWallet,
        name: formData.name,
        description: formData.metadata.description,
        contractAddress: formData.contractAddress,
        chain: formData.chain?.id.toString() || "",
        twitter: {
          username: formData.twitterCredentials.username,
          password: formData.twitterCredentials.password,
        },
        contentStrategy: formData.contentStrategy,
        metadata: {
          description: formData.metadata.description,
          website: formData.metadata.website,
          chain: formData.chain?.name as string,
          telegram: formData.metadata.telegram,
          discord: formData.metadata.discord,
          medium: formData.metadata.discord,
        },
        tokenomics: formData.tokenomics,
        team: formData.team,
        roadmap: formData.roadmap,
        communityGuidelines: {
          allowedTopics: formData.communityGuidelines.allowedTopics,
          bannedTopics: formData.communityGuidelines.bannedTopics,
          moderationLevel:
            formData.communityGuidelines.moderationLevel || "moderate",
          languagePreference:
            formData.communityGuidelines.languagePreference || "en",
        },
      };

      const result = await controller.createAgent(request);

      if (result.success) {
        toast.success("Agent created successfully!");
        router.push("/dashboard");
      } else {
        throw new Error("Failed to create agent");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create agent");
    } finally {
      setIsLoading(false);
    }
  };

  const addTeamMember = () => {
    setFormData({
      ...formData,
      team: [...formData.team, { name: "", role: "", socials: {} }],
    });
  };

  const addRoadmapItem = () => {
    setFormData({
      ...formData,
      roadmap: [
        ...formData.roadmap,
        { title: "", description: "", date: "", completed: false },
      ],
    });
  };

  const handleManualSave = () => {
    FormPersistenceService.saveForm(formData);
    toast("Progress Saved", {
      description: "Your form data has been manually saved",
    });
  };

  const handleClearForm = () => {
    FormPersistenceService.clearForm();
    setFormData(initialFormState);
    toast("Form Cleared", {
      description: "Your form data has been cleared",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          AI Social Agent Setup
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-4">
          Configure your AI-powered social media agent with custom parameters
        </p>

        <div className="max-w-xl mx-auto mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span>Setup Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-400">
            {Object.entries(completedSections).map(([section, isComplete]) => (
              <div
                key={section}
                className={`px-2 py-1 rounded ${
                  isComplete
                    ? "bg-green-500/20 text-green-400"
                    : "bg-gray-500/20"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 mb-6">
        <Label htmlFor="auto-save">Auto-save</Label>
        <Switch
          id="auto-save"
          checked={autoSave}
          onCheckedChange={setAutoSave}
        />
      </div>

      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <Card className="p-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium mb-2">
                    Project Name
                  </Label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-[#0A0118]"
                    placeholder="Enter your project name"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2">
                    Contract Address
                  </Label>
                  <Input
                    value={formData.contractAddress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contractAddress: e.target.value,
                      })
                    }
                    className="bg-[#0A0118]"
                    placeholder="0x..."
                  />
                </div>
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">
                  Blockchain
                </Label>
                <ChainSelector
                  selectedChain={formData.chain}
                  onSelect={(chain) => setFormData({ ...formData, chain })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium mb-2">
                    Twitter Username
                  </Label>
                  <Input
                    value={formData.twitterCredentials.username}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        twitterCredentials: {
                          ...formData.twitterCredentials,
                          username: e.target.value,
                        },
                      })
                    }
                    className="bg-[#0A0118]"
                    placeholder="@username"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2">
                    Twitter Password
                  </Label>
                  <Input
                    type="password"
                    value={formData.twitterCredentials.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        twitterCredentials: {
                          ...formData.twitterCredentials,
                          password: e.target.value,
                        },
                      })
                    }
                    className="bg-[#0A0118]"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">
                  Content Topics
                </Label>
                <Textarea
                  value={formData.contentStrategy.topics.join(", ")}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contentStrategy: {
                        ...formData.contentStrategy,
                        topics: e.target.value.split(",").map((t) => t.trim()),
                      },
                    })
                  }
                  placeholder="Enter topics separated by commas (e.g., DeFi, NFTs, Gaming)"
                  className="bg-[#0A0118]"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Token Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Mintable</Label>
                    <Switch
                      checked={formData.tokenomics.isMintable}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          tokenomics: {
                            ...formData.tokenomics,
                            isMintable: checked,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Burnable</Label>
                    <Switch
                      checked={formData.tokenomics.isBurnable}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          tokenomics: {
                            ...formData.tokenomics,
                            isBurnable: checked,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Pausable</Label>
                    <Switch
                      checked={formData.tokenomics.isPausable}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          tokenomics: {
                            ...formData.tokenomics,
                            isPausable: checked,
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Social Links</h2>
                <div className="flex items-center gap-2"></div>
              </div>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = Icons[social.icon];
                  return (
                    <div
                      key={social.name}
                      className="flex items-center space-x-2"
                    >
                      <Icon className="w-5 h-5" />
                      <Input
                        value={formData.metadata[social.name] || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            metadata: {
                              ...formData.metadata,
                              [social.name]: e.target.value,
                            },
                          })
                        }
                        placeholder={social.placeholder}
                        className="bg-[#0A0118]"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card className="p-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Content Strategy</h2>
              <div className="space-y-4">
                <div>
                  <Label className="block text-sm font-medium mb-2">
                    Post Frequency
                  </Label>
                  <select
                    className="w-full p-2 rounded-md bg-[#0A0118] border border-gray-600"
                    value={formData.contentStrategy.postFrequency}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contentStrategy: {
                          ...formData.contentStrategy,
                          postFrequency: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="hourly">Multiple times per day</option>
                    <option value="daily">Once per day</option>
                    <option value="weekly">Few times per week</option>
                  </select>
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-4">
                    Content Types
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#0A0118] rounded-md">
                    {Object.entries(formData.contentStrategy.contentTypes).map(
                      ([type, enabled]) => (
                        <div
                          key={type}
                          className="flex items-center justify-between p-2 border border-gray-700 rounded"
                        >
                          <Label className="capitalize text-sm">{type}</Label>
                          <Switch
                            checked={enabled}
                            onCheckedChange={(checked) =>
                              setFormData({
                                ...formData,
                                contentStrategy: {
                                  ...formData.contentStrategy,
                                  contentTypes: {
                                    ...formData.contentStrategy.contentTypes,
                                    [type]: checked,
                                  },
                                },
                              })
                            }
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card className="p-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Team Members</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addTeamMember}
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Member
                </Button>
              </div>

              {formData.team.map((member, index) => (
                <Card key={index} className="p-4 relative">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-2"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        team: formData.team.filter((_, i) => i !== index),
                      })
                    }
                  >
                    <X className="w-4 h-4" />
                  </Button>

                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Name"
                        value={member.name}
                        onChange={(e) => {
                          const newTeam = [...formData.team];
                          newTeam[index].name = e.target.value;
                          setFormData({ ...formData, team: newTeam });
                        }}
                        className="bg-[#0A0118]"
                      />
                      <Input
                        placeholder="Role"
                        value={member.role}
                        onChange={(e) => {
                          const newTeam = [...formData.team];
                          newTeam[index].role = e.target.value;
                          setFormData({ ...formData, team: newTeam });
                        }}
                        className="bg-[#0A0118]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="X/Twitter Handle (with @)"
                        value={member.socials.x || member.socials.twitter}
                        onChange={(e) => {
                          const newTeam = [...formData.team];
                          newTeam[index].socials = {
                            ...newTeam[index].socials,
                            x: e.target.value,
                            twitter: e.target.value,
                          };
                          setFormData({ ...formData, team: newTeam });
                        }}
                        className="bg-[#0A0118]"
                      />
                      <Input
                        placeholder="Telegram Handle (with @)"
                        value={member.socials.telegram}
                        onChange={(e) => {
                          const newTeam = [...formData.team];
                          newTeam[index].socials = {
                            ...newTeam[index].socials,
                            telegram: e.target.value,
                          };
                          setFormData({ ...formData, team: newTeam });
                        }}
                        className="bg-[#0A0118]"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap">
          <Card className="p-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Roadmap</h2>
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Roadmap</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addRoadmapItem}
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Milestone
                </Button>
              </div>

              {formData.roadmap.map((item, index) => (
                <Card key={index} className="p-4 relative">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-2"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        roadmap: formData.roadmap.filter((_, i) => i !== index),
                      })
                    }
                  >
                    <X className="w-4 h-4" />
                  </Button>

                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Title"
                        value={item.title}
                        onChange={(e) => {
                          const newRoadmap = [...formData.roadmap];
                          newRoadmap[index].title = e.target.value;
                          setFormData({ ...formData, roadmap: newRoadmap });
                        }}
                        className="bg-[#0A0118]"
                      />
                      <Input
                        type="date"
                        value={item.date}
                        onChange={(e) => {
                          const newRoadmap = [...formData.roadmap];
                          newRoadmap[index].date = e.target.value;
                          setFormData({ ...formData, roadmap: newRoadmap });
                        }}
                        className="bg-[#0A0118]"
                      />
                    </div>
                    <Textarea
                      placeholder="Description"
                      value={item.description}
                      onChange={(e) => {
                        const newRoadmap = [...formData.roadmap];
                        newRoadmap[index].description = e.target.value;
                        setFormData({ ...formData, roadmap: newRoadmap });
                      }}
                      className="bg-[#0A0118]"
                    />
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={item.completed}
                        onCheckedChange={(checked) => {
                          const newRoadmap = [...formData.roadmap];
                          newRoadmap[index].completed = checked;
                          setFormData({ ...formData, roadmap: newRoadmap });
                        }}
                      />
                      <Label>Completed</Label>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="community">
          <Card className="p-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">
                Community Guidelines
              </h2>
              <Textarea
                placeholder="Enter allowed topics (comma-separated)"
                value={formData.communityGuidelines.allowedTopics.join(", ")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    communityGuidelines: {
                      ...formData.communityGuidelines,
                      allowedTopics: e.target.value
                        .split(",")
                        .map((t) => t.trim()),
                    },
                  })
                }
              />
              <Textarea
                placeholder="Enter banned topics (comma-separated)"
                value={formData.communityGuidelines.bannedTopics.join(", ")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    communityGuidelines: {
                      ...formData.communityGuidelines,
                      bannedTopics: e.target.value
                        .split(",")
                        .map((t) => t.trim()),
                    },
                  })
                }
              />
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleManualSave}>
            Save Progress
          </Button>
          <Button
            variant="outline"
            onClick={handleClearForm}
            className="text-red-500 hover:text-red-600"
          >
            Clear Form
          </Button>
        </div>

        <Button
          onClick={handleCreateAgent}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          disabled={isLoading || progress < 100}
        >
          {isLoading ? (
            <Icons.spinner className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <Icons.twitter className="w-4 h-4 mr-2" />
          )}
          Create Social Agent
        </Button>
      </div>
    </div>
  );
}
