"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { type IconKeys } from "@/components/ui/icons";
import { TagInput } from "./TagInput";
import { PlusCircle, X } from "lucide-react";
import { TokenFormData, ShowcaseMetadata } from "@/types/token";
import { ImageUpload } from "./ImageUpload";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { useSolanaWrite } from "@/hooks/OnChain/useSolanaWrite";
import { SecretNetworkWrite } from "@/hooks/OnChain/useSecretNetworkWrite";
import { useWriteContracts } from "@/hooks/OnChain/useWriteContracts";
import { useTokenUpload } from "@/hooks/autodrive/useTokenUpload";
import { toast } from "sonner";
import { TokenCreationService } from "../../../service/TokenCreationService";
import { TokenCreationSuccess } from "./TokenCreationSuccess";

const formSchema = z
  .object({
    name: z.string().max(50, "Token name must be less than 50 characters"),
    symbol: z.string().max(10, "Token symbol must be less than 10 characters"),
    decimals: z.number().min(0).max(18),
    chain: z.enum(["evm", "solana", "secret", "ton"]),
    initialSupply: z.string(),
    description: z.string(),
    image: z.string().url().optional().or(z.literal("")),
    showcase: z
      .object({
        youtubeLink: z
          .string()
          .url("Please enter a valid YouTube URL")
          .optional()
          .or(z.literal("")),
        socialLinks: z
          .object({
            website: z
              .string()
              .url("Please enter a valid website URL (include https://)")
              .optional()
              .or(z.literal("")),
            twitter: z
              .string()
              .url("Please enter a valid Twitter URL (include https://)")
              .optional()
              .or(z.literal("")),
            telegram: z
              .string()
              .url("Please enter a valid Telegram URL (include https://)")
              .optional()
              .or(z.literal("")),
            discord: z
              .string()
              .url("Please enter a valid Discord URL (include https://)")
              .optional()
              .or(z.literal("")),
            github: z
              .string()
              .url("Please enter a valid GitHub URL (include https://)")
              .optional()
              .or(z.literal("")),
            medium: z
              .string()
              .url("Please enter a valid Medium URL (include https://)")
              .optional()
              .or(z.literal("")),
            reddit: z
              .string()
              .url("Please enter a valid Reddit URL (include https://)")
              .optional()
              .or(z.literal("")),
            instagram: z
              .string()
              .url("Please enter a valid Instagram URL (include https://)")
              .optional()
              .or(z.literal("")),
            facebook: z
              .string()
              .url("Please enter a valid Facebook URL (include https://)")
              .optional()
              .or(z.literal("")),
          })
          .optional()
          .nullable()
          .default({}),
        roadmap: z
          .array(
            z.object({
              title: z.string().optional().or(z.literal("")),
              description: z.string().optional().or(z.literal("")),
              date: z.string().optional().or(z.literal("")),
              completed: z.boolean().optional().default(false),
            })
          )
          .optional()
          .nullable()
          .default([]),
        team: z
          .array(
            z.object({
              name: z.string().optional().or(z.literal("")),
              role: z.string().optional().or(z.literal("")),
              profileImage: z.string().url().optional().or(z.literal("")),
              socialLinks: z
                .object({
                  twitter: z.string().url().optional().or(z.literal("")),
                  linkedin: z.string().url().optional().or(z.literal("")),
                  github: z.string().url().optional().or(z.literal("")),
                })
                .optional()
                .nullable()
                .default({}),
            })
          )
          .optional()
          .nullable()
          .default([]),
        tags: z.array(z.string()).max(3).optional().nullable().default([]),
      })
      .optional()
      .nullable()
      .default({}),
    isMintable: z.boolean().optional().default(false),
    isBurnable: z.boolean().optional().default(false),
    isPausable: z.boolean().optional().default(false),
    hasRevokeMintAuthority: z.boolean().optional().default(false),
    hasFreezeAuthority: z.boolean().optional().default(false),
  })
  .required();

type FormValues = z.infer<typeof formSchema>;

interface TokenCreationFormProps {
  initialData?: Partial<TokenFormData>;
  chainType: "evm" | "solana" | "secret" | "ton";
}

export function TokenCreationForm({
  initialData,
  chainType,
}: TokenCreationFormProps) {
  const { uploadTokenMetadata, isUploading } = useTokenUpload();
  const { createToken: createSolanaToken } = useSolanaWrite();
  const { createToken: createSecretToken } = SecretNetworkWrite();
  const { createEvmToken } = useWriteContracts();
  const [showShowcase, setShowShowcase] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [creationResult, setCreationResult] = useState<any>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      symbol: initialData?.symbol || "",
      chain: chainType,
      decimals: 9,
      initialSupply: initialData?.initialSupply || "",
      description: initialData?.description || "",
      image: initialData?.image || "",
      showcase: {
        youtubeLink: "",
        socialLinks: {
          website: "",
          twitter: "",
          telegram: "",
          discord: "",
          github: "",
          medium: "",
          reddit: "",
          instagram: "",
          facebook: "",
        },
        roadmap: [],
        team: [],
        tags: [],
      },
      isMintable: initialData?.isMintable || false,
      isBurnable: initialData?.isBurnable || false,
      isPausable: initialData?.isPausable || false,

      hasRevokeMintAuthority: initialData?.hasRevokeMintAuthority || false,
      hasFreezeAuthority: initialData?.hasFreezeAuthority || false,
    },
  });

  async function onSubmit(values: FormValues) {
    if (isSubmitting) return;

    setIsSubmitting(true);
    const toastId = toast.loading("Creating your token...");

    try {
      // Clean up showcase data if showcase is disabled
      const submissionValues = {
        ...values,
        showcase: showShowcase ? values.showcase : null,
      };

      const tokenService = new TokenCreationService();
      const result = await tokenService.createToken(
        submissionValues,
        chainType,
        showShowcase,
        {
          uploadTokenMetadata,
          createSolanaToken,
          createSecretToken,
          createEvmToken,
        }
      );

      console.log("results", result);

      setCreationResult(result);
      toast.success("Token created successfully! 🎉", {
        id: toastId,
      });
      return result;
    } catch (error) {
      console.error("Error creating token:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to create token",
        {
          id: toastId,
        }
      );
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }

  const socialLinks: Array<{
    name: keyof NonNullable<ShowcaseMetadata["socialLinks"]>;
    icon: IconKeys;
    placeholder: string;
  }> = [
    {
      name: "website",
      icon: "globe",
      placeholder: "https://website.com",
    },
    {
      name: "twitter",
      icon: "twitter",
      placeholder: "https://twitter.com/",
    },
    {
      name: "telegram",
      icon: "telegram",
      placeholder: "https://telegram.com/",
    },
    {
      name: "discord",
      icon: "discord",
      placeholder: "https://discord.com/",
    },
    {
      name: "medium",
      icon: "medium",
      placeholder: "https://medium.com/",
    },
    {
      name: "facebook",
      icon: "facebook",
      placeholder: "https://facebook.com/",
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const values = form.getValues();

    // If showcase is disabled, remove showcase data
    if (!showShowcase) {
      values.showcase = null;
    }

    try {
      const isValid = await form.trigger();
      if (!isValid) {
        console.log("Form validation errors:", form.formState.errors);
        return;
      }

      await onSubmit(values);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  if (creationResult) {
    console.log(creationResult);
    return (
      <TokenCreationSuccess
        data={{
          ...creationResult,
          chain: chainType,
        }}
        onCreateAgent={() => {
          // Handle agent creation navigation
          // You can use router.push() here
        }}
      />
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={handleFormSubmit} className="space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Token Information</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token Name (Max 50)</FormLabel>
                    <FormControl>
                      <Input placeholder="My awesome token" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="symbol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token Symbol (Max 10)</FormLabel>
                    <FormControl>
                      <Input placeholder="AWESOME" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="decimals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Decimals</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="9"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    Change the number of decimals for your token
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="initialSupply"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supply</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="1000000000" {...field} />
                  </FormControl>
                  <FormDescription>
                    The initial number of available tokens that will be created
                    in your wallet
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {(chainType === "solana" || chainType === "ton") && (
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logo</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value || ""}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription>Add logo for your token</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Here you can briefly describe your token"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Additional Settings</h2>

          <div className="space-y-4">
            {(chainType === "solana" || chainType === "secret") && (
              <>
                <FormField
                  control={form.control}
                  name="isMintable"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Mintable</FormLabel>
                        <FormDescription>
                          If you select it immutable it means you will not be
                          able to update token metadata
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isBurnable"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Burnable</FormLabel>
                        <FormDescription>
                          Allow tokens to be burned (permanently removed from
                          circulation)
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isPausable"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Pausable</FormLabel>
                        <FormDescription>
                          Allow token transfers to be paused in case of
                          emergency
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </>
            )}

            {chainType === "solana" && (
              <>
                <FormField
                  control={form.control}
                  name="hasRevokeMintAuthority"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Revoke Mint Authority</FormLabel>
                        <FormDescription>
                          Prevent additional token supply to increase forever
                          more
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hasFreezeAuthority"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Freeze Authority</FormLabel>
                        <FormDescription>
                          Enable token freezing functionality
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Showcase Token</h2>
            <Switch checked={showShowcase} onCheckedChange={setShowShowcase} />
          </div>

          {showShowcase && (
            <div className="space-y-8">
              <FormField
                control={form.control}
                name="showcase.tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags (optional)</FormLabel>
                    <FormControl>
                      <TagInput
                        value={field.value || []}
                        onChange={field.onChange}
                        placeholder="Enter tag"
                      />
                    </FormControl>
                    <FormDescription>
                      Select tags that are most associated with your project -
                      max 3 tags
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Social Links</h3>
                <p className="text-sm text-gray-500">
                  Please enter complete URLs including https://
                </p>

                {socialLinks.map((social) => (
                  <FormField
                    key={social.name}
                    control={form.control}
                    name={`showcase.socialLinks.${social.name}`}
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <div className="flex items-center space-x-2">
                          {(() => {
                            const Icon = Icons[social.icon];
                            return <Icon className="w-5 h-5" />;
                          })()}
                          <FormLabel className="capitalize">
                            {social.name}
                          </FormLabel>
                        </div>
                        <FormControl>
                          <Input {...field} placeholder={social.placeholder} />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Team Members</h2>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentTeam = form.getValues("showcase.team") || [];
                      form.setValue("showcase.team", [
                        ...currentTeam,
                        {
                          name: "",
                          role: "",
                          profileImage: "",
                          socialLinks: {},
                        },
                      ]);
                    }}
                  >
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Team Member
                  </Button>
                </div>

                {form.formState.errors.showcase?.team && (
                  <p className="text-red-500 text-sm mb-2">
                    {form.formState.errors.showcase.team.message}
                  </p>
                )}

                <div className="space-y-4">
                  {(form.watch("showcase.team") || []).map((_, index) => (
                    <Card key={index} className="p-4 relative">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() => {
                          const currentTeam =
                            form.getValues("showcase.team") || [];
                          form.setValue(
                            "showcase.team",
                            currentTeam.filter((_, i) => i !== index)
                          );
                        }}
                      >
                        <X className="w-4 h-4" />
                      </Button>

                      <div className="grid grid-cols-2 gap-4">
                        <Controller
                          control={form.control}
                          name={`showcase.team.${index}.name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Controller
                          control={form.control}
                          name={`showcase.team.${index}.role`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Role</FormLabel>
                              <FormControl>
                                <Input placeholder="CEO" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Controller
                          control={form.control}
                          name={`showcase.team.${index}.profileImage`}
                          render={({ field }) => (
                            <FormItem className="col-span-2">
                              <FormLabel>Profile Image</FormLabel>
                              <FormControl>
                                <ImageUpload
                                  value={field.value || ""}
                                  onChange={(url) => field.onChange(url)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="col-span-2 space-y-2">
                          <Label>Social Links</Label>
                          <div className="grid grid-cols-2 gap-4">
                            {["twitter", "linkedin", "github"].map(
                              (platform) => (
                                <Controller
                                  key={platform}
                                  control={form.control}
                                  name={`showcase.team.${index}.socialLinks.${platform}`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="capitalize">
                                        {platform}
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder={`https://${platform}.com/username`}
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Roadmap</h2>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentRoadmap =
                        form.getValues("showcase.roadmap") || [];
                      form.setValue("showcase.roadmap", [
                        ...currentRoadmap,
                        {
                          title: "",
                          description: "",
                          date: "",
                          completed: false,
                        },
                      ]);
                    }}
                  >
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Milestone
                  </Button>
                </div>

                <div className="space-y-4">
                  {(form.watch("showcase.roadmap") || []).map((_, index) => (
                    <Card key={index} className="p-4 relative">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2"
                        onClick={() => {
                          const currentRoadmap =
                            form.getValues("showcase.roadmap") || [];
                          form.setValue(
                            "showcase.roadmap",
                            currentRoadmap.filter((_, i) => i !== index)
                          );
                        }}
                      >
                        <X className="w-4 h-4" />
                      </Button>

                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Controller
                            control={form.control}
                            name={`showcase.roadmap.${index}.title`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                  <Input placeholder="Phase 1" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Controller
                            control={form.control}
                            name={`showcase.roadmap.${index}.date`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Date</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Controller
                          control={form.control}
                          name={`showcase.roadmap.${index}.description`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Describe this milestone..."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Controller
                          control={form.control}
                          name={`showcase.roadmap.${index}.completed`}
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel>Completed</FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Card>

        <div className="space-y-4">
          {Object.keys(form.formState.errors).length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <h3 className="text-red-800 font-medium mb-2">
                Please fix the following errors:
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                {Object.entries(form.formState.errors).map(
                  ([key, error]: [string, any]) => {
                    if (key === "showcase") {
                      return Object.entries(error).map(
                        ([showcaseKey, showcaseError]: [string, any]) => {
                          if (showcaseKey === "socialLinks") {
                            return Object.entries(showcaseError).map(
                              ([socialKey, socialError]: [string, any]) => (
                                <li
                                  key={`${key}-${showcaseKey}-${socialKey}`}
                                  className="text-red-700 text-sm"
                                >
                                  {`${socialKey}: ${socialError.message}`}
                                </li>
                              )
                            );
                          }
                          return (
                            <li
                              key={`${key}-${showcaseKey}`}
                              className="text-red-700 text-sm"
                            >
                              {`${showcaseKey}: ${showcaseError.message}`}
                            </li>
                          );
                        }
                      );
                    }
                    return (
                      <li key={key} className="text-red-700 text-sm">
                        {`${key}: ${error.message}`}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || isUploading}
          >
            {isUploading
              ? "Uploading Metadata..."
              : isSubmitting
              ? "Creating Token..."
              : "Create Token"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
