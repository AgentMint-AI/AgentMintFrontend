import { ChainOption } from "@/components/ChainSelector";

type FormData = {
  name: string;
  contractAddress: string;
  chain: ChainOption;
  twitterCredentials: {
    username: string;
    password: string;
  };
  contentStrategy: {
    style: string[];
    topics: string[];
    tone: string;
    tags: string[];
    postFrequency: string;
    engagement: {
      replyStyle: string;
      interactionFrequency: string;
      autoReply: boolean;
    };
    contentTypes: {
      text: boolean;
      polls: boolean;
      threads: boolean;
      spaces: boolean;
    };
  };
  metadata: {
    description: string;
    website: string;
    twitter: string;
    telegram: string;
    discord: string;
  };
  tokenomics: {
    isMintable: boolean;
    isBurnable: boolean;
    isPausable: boolean;
    totalSupply: string;
    circulatingSupply: string;
    marketCap: string;
    price: string;
  };
  team: Array<{
    name: string;
    role: string;
    socials: {
      twitter?: string;
      linkedin?: string;
      github?: string;
      telegram?: string;
      x?: string;
    };
  }>;
  roadmap: Array<{
    title: string;
    description: string;
    date: string;
    completed: boolean;
  }>;
  communityGuidelines: {
    allowedTopics: string[];
    bannedTopics: string[];
    moderationLevel: string;
    languagePreference: string;
  };
  marketingStrategy: {
    targetAudience: string[];
    competitors: string[];
    uniqueSellingPoints: string[];
    campaignGoals: string[];
  };
  achievements: Array<{
    title: string;
    date: string;
    description: string;
    type: "partnership" | "development" | "community" | "other";
  }>;
};

export class FormPersistenceService {
  private static STORAGE_KEY = "agent_form_data";
  private static LAST_MODIFIED_KEY = "agent_form_last_modified";
  private static FORM_VERSION = "1.0.0"; // For handling schema updates
  private static VERSION_KEY = "agent_form_version";

  static saveForm(formData: FormData): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(formData));
      localStorage.setItem(this.LAST_MODIFIED_KEY, new Date().toISOString());
      localStorage.setItem(this.VERSION_KEY, this.FORM_VERSION);
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  }

  static loadForm(): FormData | null {
    try {
      const savedVersion = localStorage.getItem(this.VERSION_KEY);
      const formData = localStorage.getItem(this.STORAGE_KEY);

      if (!formData) return null;

      // Version check for future schema migrations
      if (savedVersion !== this.FORM_VERSION) {
        console.warn("Form version mismatch, might need migration");
        // Implement migration logic here if needed
      }

      return JSON.parse(formData);
    } catch (error) {
      console.error("Error loading form data:", error);
      return null;
    }
  }

  static clearForm(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.LAST_MODIFIED_KEY);
      localStorage.removeItem(this.VERSION_KEY);
    } catch (error) {
      console.error("Error clearing form data:", error);
    }
  }

  static getLastModified(): Date | null {
    try {
      const lastModified = localStorage.getItem(this.LAST_MODIFIED_KEY);
      return lastModified ? new Date(lastModified) : null;
    } catch (error) {
      console.error("Error getting last modified date:", error);
      return null;
    }
  }

  static hasStoredForm(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY);
  }

  // Auto-save functionality
  static setupAutoSave(
    formData: FormData,
    interval: number = 30000
  ): () => void {
    const intervalId = setInterval(() => {
      this.saveForm(formData);
    }, interval);

    // Return cleanup function
    return () => clearInterval(intervalId);
  }
}
