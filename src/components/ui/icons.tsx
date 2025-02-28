import {
  Wallet,
  LogOut,
  Menu,
  type Icon as LucideIcon,
  Plus,
  Sparkles,
  Home,
  LayoutDashboardIcon,
  Settings,
  ArrowRight,
  Rocket,
  Check,
  ArrowLeft,
  Pause,
  ChartLine,
  ChevronRight,
  ChevronDown,
  CheckCheckIcon,
  X,
  Upload,
  Loader2,
  Globe,
  PlusCircle,
  Search,
  Circle,
  CheckCircle,
  User,
  AlertTriangle,
  Redo2,
  Package,
  ExternalLink,
  Calendar,
  Link,
  Coins,
  Hash,
  AlertCircle,
  RefreshCcw,
  Copy,
  ChartBar,
  SendIcon,
  Eye,
  BotIcon,
  HelpCircle,
  Clock,
  Lock,
} from "lucide-react";
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaReddit,
  FaTelegramPlane,
  FaDiscord,
  FaMediumM,
  FaPen,
  FaYoutube,
  FaUsers,
  FaRoad,
  FaDollarSign,
  FaPlay,
  FaFire,
} from "react-icons/fa";
import Image from "next/image";
import { ImageProps } from "next/image";

export type Icon = typeof LucideIcon;

export type IconProps = Omit<ImageProps, "src" | "alt">;

export const Icons = {
  logout: LogOut,
  menu: Menu,
  wallet: Wallet,
  layout: LayoutDashboardIcon,
  plus: Plus,
  home: Home,
  sparkles: Sparkles,
  twitter: FaTwitter,
  settings: Settings,
  arrowRight: ArrowRight,
  spinner: Loader2,
  rocket: Rocket,
  check: Check,
  base: Wallet,
  arbitrum: Wallet,
  optimism: Wallet,
  polygon: Wallet,
  avalanche: Wallet,
  arrowLeft: ArrowLeft,
  chart: ChartLine,
  pause: Pause,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chain: CheckCheckIcon,
  x: X,
  token: PlusCircle,
  search: Search,
  circle: Circle,
  checkCircle: CheckCircle,
  user: User,
  alertTriangle: AlertTriangle,
  redo2: Redo2,
  package: Package,
  externalLink: ExternalLink,
  calendar: Calendar,
  link: Link,
  icons: Package,
  coins: Coins,
  hash: Hash,
  alertCircle: AlertCircle,
  refresh: RefreshCcw,
  copy: Copy,
  chartBar: ChartBar,
  dollarSign: FaDollarSign,
  circulate: FaDollarSign,
  flame: FaFire,
  play: FaPlay,
  send: SendIcon,
  eye: Eye,
  bot: BotIcon,
  help: HelpCircle,
  metamask: (props: IconProps) => (
    <Image
      src="/chains/metamask.svg"
      width={24}
      height={24}
      alt="MetaMask"
      {...props}
    />
  ),
  keplr: (props: IconProps) => (
    <Image
      src="/chains/keplr.svg"
      width={24}
      height={24}
      alt="Keplr"
      {...props}
    />
  ),
  leap: (props: IconProps) => (
    <Image
      src="/chains/leap.svg"
      width={24}
      height={24}
      alt="Leap"
      {...props}
    />
  ),
  taurus: (props: IconProps) => (
    <Image
      src="/chains/taurus.svg"
      width={24}
      height={24}
      alt="Taurus"
      {...props}
    />
  ),
  ton: (props: IconProps) => (
    <Image src="/chains/ton.svg" width={24} height={24} alt="TON" {...props} />
  ),
  secret: (props: IconProps) => (
    <Image
      src="/chains/secret.svg"
      width={24}
      height={24}
      alt="Secret Network"
      {...props}
    />
  ),
  solana: (props: IconProps) => (
    <Image
      src="/chains/solana.svg"
      width={24}
      height={24}
      alt="Solana"
      {...props}
    />
  ),
  upload: Upload,
  globe: Globe,
  telegram: FaTelegramPlane,
  discord: FaDiscord,
  facebook: FaFacebookF,
  github: FaGithub,
  medium: FaMediumM,
  instagram: FaInstagram,
  reddit: FaReddit,
  pen: FaPen,
  youtube: FaYoutube,
  users: FaUsers,
  roadmap: FaRoad,
  plusCircle: PlusCircle,
  fire: FaFire,
  transfer: SendIcon,
  lock: Lock,
  clock: Clock,
  external: ExternalLink,
} as const;

export type IconKeys = keyof typeof Icons;
