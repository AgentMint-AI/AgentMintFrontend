import { Icons } from "@/components/ui/icons";

export default function TokenActionsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-2xl w-full bg-card rounded-lg shadow-lg p-8 border border-border">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Token Management Coming Soon!
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          We&apos;re working hard to bring you advanced token management
          features including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center space-x-4 p-4 rounded-md bg-secondary/10 hover:bg-secondary/20 transition-colors">
            <Icons.fire className="w-8 h-8 text-destructive" />
            <span className="text-lg">Token Burning</span>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-md bg-secondary/10 hover:bg-secondary/20 transition-colors">
            <Icons.plus className="w-8 h-8 text-primary" />
            <span className="text-lg">Token Minting</span>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-md bg-secondary/10 hover:bg-secondary/20 transition-colors">
            <Icons.transfer className="w-8 h-8 text-accent" />
            <span className="text-lg">Token Transfers</span>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-md bg-secondary/10 hover:bg-secondary/20 transition-colors">
            <Icons.lock className="w-8 h-8 text-info" />
            <span className="text-lg">Token Freezing</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
          <Icons.clock className="w-5 h-5" />
          <p>Check back soon for these exciting features!</p>
        </div>
      </div>
    </div>
  );
}
