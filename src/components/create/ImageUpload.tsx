"use client";

import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";
import { useImageUpload } from "@/hooks/autodrive/useImageUpload";
import { toast } from "sonner";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const { uploadImage, isUploading, error } = useImageUpload();

  const onDrop = async (acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      toast.error(
        "Please upload a valid image file (JPEG, PNG, GIF, SVG or BMP under 5MB)"
      );
      return;
    }

    if (acceptedFiles.length === 0) return;

    try {
      const file = acceptedFiles[0];
      const imageUrl = await uploadImage(file);
      onChange(`https://data-dao.vercel.app${imageUrl}`);
      console.log(imageUrl, "imageUrl");
    } catch (err) {
      console.error("Error uploading file:", err);
      toast.error("Failed to upload image");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
      "image/svg+xml": [".svg"],
      "image/bmp": [".bmp"],
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  return (
    <div className="flex items-center gap-4">
      <div
        {...getRootProps()}
        className={`h-16 w-16 rounded-full border-2 border-dashed ${
          isDragActive ? "border-purple-500 bg-purple-50/10" : "border-gray-300"
        } flex items-center justify-center cursor-pointer transition-colors`}
      >
        <input {...getInputProps()} />
        {value ? (
          <div className="relative h-16 w-16">
            <Image
              src={value}
              alt="Token logo"
              width={64}
              height={64}
              className="rounded-full object-cover"
              loading="eager"
              priority={true}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = "/fallback-image.png"; // Add a fallback image
                toast.error("Failed to load image");
              }}
            />
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50">
                <Icons.spinner className="h-6 w-6 animate-spin text-white" />
              </div>
            )}
          </div>
        ) : (
          <Icons.upload className="h-6 w-6 text-gray-400" />
        )}
      </div>
      <Button
        type="button"
        variant="outline"
        {...getRootProps()}
        disabled={isUploading}
      >
        {isUploading ? (
          <>
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          "Upload Logo"
        )}
      </Button>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
