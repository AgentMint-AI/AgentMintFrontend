import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";

interface TokenActionsProps {
  token: {
    tokenAddress: string;
    chain: number;
    metadata?: {
      isMintable?: boolean;
      isBurnable?: boolean;
      isPausable?: boolean;
    };
  };
}

export function TokenActions({ token }: TokenActionsProps) {
  const router = useRouter();

  const actions = [
    {
      label: "Mint Tokens",
      icon: <Icons.plus className="w-4 h-4" />,
      onClick: () =>
        router.push(`/dashboard/tokens/${token.tokenAddress}/mint`),
      disabled: !token.metadata?.isMintable,
      description: "Create new tokens",
    },
    {
      label: "Burn Tokens",
      icon: <Icons.flame className="w-4 h-4" />,
      onClick: () =>
        router.push(`/dashboard/tokens/${token.tokenAddress}/burn`),
      disabled: !token.metadata?.isBurnable,
      description: "Remove tokens from circulation",
    },
    {
      label: "Transfer",
      icon: <Icons.send className="w-4 h-4" />,
      onClick: () =>
        router.push(`/dashboard/tokens/${token.tokenAddress}/transfer`),
      disabled: false,
      description: "Send tokens to another address",
    },
    {
      label: token.metadata?.isPausable
        ? "Pause Transfers"
        : "Resume Transfers",
      icon: token.metadata?.isPausable ? (
        <Icons.pause className="w-4 h-4" />
      ) : (
        <Icons.play className="w-4 h-4" />
      ),
      onClick: () =>
        router.push(`/dashboard/tokens/${token.tokenAddress}/pause`),
      disabled: !token.metadata?.isPausable,
      description: "Control token transfers",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Token Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Card
            key={action.label}
            className={`p-4 cursor-pointer transition-colors ${
              action.disabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-purple-500/50"
            }`}
            onClick={!action.disabled ? action.onClick : undefined}
          >
            <div className="flex items-center gap-2 mb-2">
              {action.icon}
              <span className="font-medium">{action.label}</span>
            </div>
            <p className="text-sm text-gray-500">{action.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
