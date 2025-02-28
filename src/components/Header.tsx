"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useAccount } from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "./ui/icons";
import { ConnectModal } from "./ConnectButton";
import { useSecretNetwork } from "@/providers/secretNetworkContext";
import { useTonWallet } from "../../tonconnect";

export function Header() {
  const { isConnected: isEvmConnected } = useAccount();
  const { connected: isSolanaConnected } = useWallet();
  const { isConnected: isSecretConnected } = useSecretNetwork();
  const tonWallet = useTonWallet();
  const isTonConnected = !!tonWallet;

  const isConnected =
    isEvmConnected || isSolanaConnected || isSecretConnected || isTonConnected;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    {
      href: "/",
      label: "Home",
      icon: <Icons.home className="w-4 h-4 mr-2" />,
      requiresAuth: false,
    },
    {
      href: "/showcase",
      label: "Showcase",
      icon: <Icons.sparkles className="w-4 h-4 mr-2" />,
      requiresAuth: false,
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <Icons.layout className="w-4 h-4 mr-2" />,
      requiresAuth: true,
    },
    {
      href: "/dashboard/tokens",
      label: "Tokens",
      icon: <Icons.coins className="w-4 h-4 mr-2" />,
      requiresAuth: true,
    },
    {
      href: "/dashboard/agents",
      label: "AI Agents",
      icon: <Icons.bot className="w-4 h-4 mr-2" />,
      requiresAuth: true,
    },
    {
      href: "/create",
      label: "Create",
      icon: <Icons.plus className="w-4 h-4 mr-2" />,
      requiresAuth: true,
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-purple-500/20"
          : "bg-gradient-to-b from-purple-900/90 to-black/90"
      )}
    >
      <div className="container flex h-20 items-center">
        {/* Logo */}
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="flex items-center space-x-3">
            <Icons.sparkles className="w-8 h-8 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              AgentMint.AI
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 px-8">
          {navigationLinks.map(({ href, label, icon, requiresAuth }) => (
            <div key={href}>
              <Link
                href={href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-pink-500",
                  requiresAuth &&
                    !isConnected &&
                    "pointer-events-none opacity-50"
                )}
              >
                {icon}
                {label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Connect Button & Mobile Menu */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:block">
            <ConnectModal />
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-pink-500"
              >
                <Icons.menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-gradient-to-b from-purple-900/95 to-black/95 text-white border-purple-500/20"
            >
              <div className="flex flex-col space-y-8 pt-8">
                <ConnectModal />
                <nav className="flex flex-col space-y-6">
                  {navigationLinks.map(
                    ({ href, label, icon, requiresAuth }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center text-base font-medium transition-colors hover:text-pink-500 hover:translate-x-2 duration-200",
                          requiresAuth &&
                            !isConnected &&
                            "pointer-events-none opacity-50"
                        )}
                      >
                        {icon}
                        {label}
                      </Link>
                    )
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
