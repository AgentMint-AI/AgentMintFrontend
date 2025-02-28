import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";

interface MetadataInputProps {
  metadata: string;
  setMetadata: (value: string) => void;
}

export const MetadataInput: React.FC<MetadataInputProps> = ({
  metadata,
  setMetadata,
}) => {
  return (
    <div className="space-y-4">
      <Label>Metadata (e.g., images, descriptions)</Label>
      <Textarea
        value={metadata}
        onChange={(e) => setMetadata(e.target.value)}
        placeholder="Enter metadata for your token..."
        className="bg-[#0A0118]"
      />
    </div>
  );
};
