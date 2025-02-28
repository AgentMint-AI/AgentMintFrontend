"use client";

import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: Icons.home,
    },
    {
      name: "Tokens",
      href: "/dashboard/tokens",
      icon: Icons.coins,
    },
    {
      name: "AI Agents",
      href: "/dashboard/agents",
      icon: Icons.bot,
    },
    {
      name: "Showcase",
      href: "/showcase",
      icon: Icons.sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0118]">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col fixed h-screen bg-[#130627] border-r border-purple-500/20">
          <div className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 flex flex-col pt-8 pb-4">
              <div className="flex items-center flex-shrink-0 px-4 mb-8">
                <h1 className="text-xl font-bold">Meme Coin Creator</h1>
              </div>
              <nav className="mt-5 flex-1 px-4 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        isActive
                          ? "bg-purple-500/20 text-white"
                          : "text-gray-300 hover:bg-purple-500/10"
                      } group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200`}
                    >
                      <Icon className="mr-3 flex-shrink-0 h-5 w-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:pl-64 flex flex-col flex-1">
          {/* Top navigation for mobile */}
          <div className="md:hidden bg-[#130627] border-b border-purple-500/20 p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">Meme Coin Creator</h1>
              {/* Add mobile menu button here if needed */}
            </div>
          </div>

          {/* Main content */}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
