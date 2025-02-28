import { Steps } from "@/components/Steps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Meme Coin | MemeAI",
  description: "Create your own meme coin with AI-powered tools",
};

const steps = [
  {
    title: "Choose Method",
    description: "Select your creation approach",
    href: "/create",
  },
  {
    title: "Design Theme",
    description: "Generate your meme coin concept",
    href: "/create/theme",
  },
  {
    title: "Social Setup",
    description: "Configure marketing agent",
    href: "/create/social",
  },
];

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="py-8">
          <Steps steps={steps} />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
