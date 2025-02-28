import { useState } from "react";
import { TokenMetadata, ShowcaseMetadata } from "@/types/token";

interface UploadProgress {
  images: number;
  metadata: number;
  showcase: number;
}

export function useTokenUpload() {
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({
    images: 0,
    metadata: 0,
    showcase: 0,
  });
  const [isUploading, setIsUploading] = useState(false);

  const uploadTokenMetadata = async (
    tokenMetadata: TokenMetadata,
    showcaseMetadata?: ShowcaseMetadata
  ): Promise<{ metadataCid: string; showcaseCid?: string }> => {
    setIsUploading(true);
    try {
      // Upload token metadata
      console.log("uploading in useTokenUpload");
      setUploadProgress((prev) => ({ ...prev, metadata: 50 }));
      const tokenResponse = await fetch("/api/token/metadata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tokenMetadata),
      });

      if (!tokenResponse.ok) {
        const error = await tokenResponse.json();
        throw new Error(error.message || "Failed to upload token metadata");
      }

      const { cid: metadataCid } = await tokenResponse.json();
      console.log("metadataCid", metadataCid);
      setUploadProgress((prev) => ({ ...prev, metadata: 100 }));

      // Upload showcase metadata if provided
      let showcaseCid;
      if (showcaseMetadata) {
        setUploadProgress((prev) => ({ ...prev, showcase: 50 }));
        const showcaseResponse = await fetch("/api/token/showcase", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(showcaseMetadata),
        });

        if (!showcaseResponse.ok) {
          const error = await showcaseResponse.json();
          throw new Error(
            error.message || "Failed to upload showcase metadata"
          );
        }

        const { cid: showcaseId } = await showcaseResponse.json();
        showcaseCid = showcaseId;
        setUploadProgress((prev) => ({ ...prev, showcase: 100 }));
      }

      return { metadataCid, showcaseCid };
    } catch (error) {
      console.error("Error uploading metadata:", error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const resetProgress = () => {
    setUploadProgress({ images: 0, metadata: 0, showcase: 0 });
    setIsUploading(false);
  };

  return {
    isUploading,
    uploadProgress,
    uploadTokenMetadata,
    resetProgress,
  };
}

// {
//   "name": "My Token",
//   "symbol": "MTK",
//   "description": "Description here",
//   "image": "https://{public_url}/cid/image/cidOfTokenLogo",
//   "decimals": 9,
//   "initialSupply": "1000000000",
//   "showcase": {
//     "youtubeLink": "https://youtube.com/...",
//     "socialLinks": {
//       "website": "https://...",
//       "twitter": "https://twitter.com/...",
//       "telegram": "https://t.me/..."
//     },
//     "roadmap": [
//       {
//         "title": "Phase 1",
//         "description": "Launch token",
//         "date": "2024-Q2",
//         "completed": false
//       }
//     ],
//     "team": [
//       {
//         "name": "John Doe",
//         "role": "Lead Developer",
//         "profileImage": "cidOfProfileImage",
//         "socialLinks": {
//           "twitter": "https://twitter.com/johndoe",
//           "github": "https://github.com/johndoe"
//         }
//       }
//     ]
//   },
//   "isMintable": true,
//   "isBurnable": true,
//   "isPausable": false
// }
