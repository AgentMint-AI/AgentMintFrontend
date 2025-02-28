interface CharacterSchedule {
  POST_TWEETS: boolean;
  POST_INTERVAL_MINUTES: number;
  content_focus: string[];
  trend_focus: string[];
  engagement_criteria: string[];
  reply_style: string[];
}

interface CharacterProfile {
  name: string;
  description: string;
  personality: string[];
  expertise: string[];
  communication_rules?: {
    rules?: string[];
    words_to_avoid?: string[];
  };
}

export interface CharacterStatus {
  name: string;
  isRunning: boolean;
  uptime?: number;
  stats?: {
    tweets: number;
    replies: number;
    errors: number;
  };
}

class CharacterManagementService {
  private apiUrl =
    process.env.AUTONOMYS_AGENTS_API_URL || "http://localhost:3001/api";

  async updateCharacterSchedule(
    characterName: string,
    schedule: Partial<CharacterSchedule>
  ) {
    try {
      const response = await fetch(
        `${this.apiUrl}/characters/${characterName}/schedule`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            twitter: schedule,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to update character schedule:", error);
      throw new Error("Schedule update failed");
    }
  }

  async getCharacterSchedule(characterName: string) {
    try {
      console.log(this.apiUrl);
      const response = await fetch(
        `${this.apiUrl}/characters/${characterName}/schedule`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to get character schedule:", error);
      throw new Error("Failed to retrieve schedule");
    }
  }

  async updateCharacterProfile(
    characterName: string,
    profile: Partial<CharacterProfile>
  ) {
    try {
      const response = await fetch(
        `${this.apiUrl}/characters/${characterName}/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profile),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to update character profile:", error);
      throw new Error("Profile update failed");
    }
  }

  async getCharacterProfile(characterName: string) {
    try {
      console.log(this.apiUrl);
      const response = await fetch(
        `${this.apiUrl}/characters/${characterName}/profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to get character profile:", error);
      throw new Error("Failed to retrieve profile");
    }
  }

  async startCharacter(characterName: string) {
    try {
      const response = await fetch(
        `${this.apiUrl}/characters/${characterName}/start`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to start character:", error);
      throw new Error("Character start failed");
    }
  }

  async stopCharacter(characterName: string) {
    try {
      const response = await fetch(
        `${this.apiUrl}/characters/${characterName}/stop`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to stop character:", error);
      throw new Error("Character stop failed");
    }
  }

  async getAllCharactersStatus(): Promise<CharacterStatus[]> {
    try {
      const response = await fetch(`${this.apiUrl}/characters/status`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to get all character statuses:", error);
      throw new Error("Failed to retrieve character statuses");
    }
  }

  async getCharacterStatus(characterName: string): Promise<CharacterStatus> {
    try {
      const response = await fetch(
        `${this.apiUrl}/characters/${characterName}/status`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to get character status:", error);
      throw new Error("Failed to retrieve character status");
    }
  }
}

export default CharacterManagementService;
