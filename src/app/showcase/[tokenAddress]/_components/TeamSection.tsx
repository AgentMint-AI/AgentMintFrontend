import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

interface TeamSectionProps {
  team: {
    name: string;
    role: string;
    profileImage: string;
    socialLinks: {
      twitter: string;
      linkedin: string;
      github: string;
    };
  }[];
}

export default function TeamSection({ team }: TeamSectionProps) {
  console.log(team);
  return (
    <div className="mb-12">
      <CardHeader className="px-0">
        <div className="flex items-center gap-2">
          <Icons.users className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Meet Our Team</h2>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-6 backdrop-blur-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={member.profileImage}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="rounded-full ring-2 ring-primary/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                {Object.entries(member.socialLinks).map(
                  ([platform, link]) =>
                    link && (
                      <a
                        key={platform}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        <span className="capitalize">{platform}</span>
                      </a>
                    )
                )}
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
