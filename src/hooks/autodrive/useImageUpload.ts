import { useState } from "react";

interface UseImageUploadResult {
  uploadImage: (file: File) => Promise<string>;
  isUploading: boolean;
  error: string | null;
}

export function useImageUpload(): UseImageUploadResult {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<string> => {
    setIsUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      //https://data-dao.vercel.app/api/cid/metadata
      const response = await fetch(
        "https://data-dao.vercel.app/api/upload/avatar",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to upload image");
      }

      console.log(data, "data");

      return data.url;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to upload image";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadImage,
    isUploading,
    error,
  };
}
