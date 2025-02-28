import { createContext, useContext, useState, useEffect } from "react";
import { SecretNetworkClient, MetaMaskWallet } from "secretjs";
import { toast } from "sonner";

interface SecretNetworkContextType {
  secretjs: SecretNetworkClient | null;
  connectMetaMask: () => Promise<void>;
  connectKeplr: () => Promise<void>;
  connectLeap: () => Promise<void>;
  disconnect: () => void;
  isConnected: boolean;
  address: string | null;
  walletType: "metamask" | "keplr" | "leap" | null;
}

const SecretNetworkContext = createContext<SecretNetworkContextType | null>(
  null
);

const CHAIN_ID = "pulsar-3";
const API_URL = "https://pulsar.lcd.secretnodes.com"; //TODO Replace with actual API URL from https://github.com/scrtlabs/api-registry

export function SecretNetworkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [secretjs, setSecretjs] = useState<SecretNetworkClient | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<
    "metamask" | "keplr" | "leap" | null
  >(null);

  // Auto reconnect on mount
  useEffect(() => {
    const savedWalletType = localStorage.getItem("walletType") as
      | "metamask"
      | "keplr"
      | "leap"
      | null;
    if (savedWalletType === "metamask") {
      connectMetaMask();
    } else if (savedWalletType === "keplr") {
      connectKeplr();
    } else if (savedWalletType === "leap") {
      connectLeap();
    }
  }, []);

  const handleConnection = async (
    connectFn: () => Promise<void>,
    walletName: string
  ) => {
    const toastId = toast.loading(`Connecting to ${walletName}...`);
    try {
      await connectFn();
      toast.dismiss(toastId);
      toast.success(`Connected to ${walletName}`);
    } catch (error: unknown) {
      toast.dismiss(toastId);
      toast.error(
        `Failed to connect to ${walletName}: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      console.error(`${walletName} connection failed:`, error);
    }
  };

  const connectMetaMask = () =>
    handleConnection(async () => {
      try {
        const [ethAddress] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const wallet = await MetaMaskWallet.create(window.ethereum, ethAddress);

        const client = new SecretNetworkClient({
          url: API_URL,
          chainId: CHAIN_ID,
          wallet: wallet,
          walletAddress: wallet.address,
        });
        console.log(wallet.address);

        setSecretjs(client);
        setAddress(wallet.address);
        setWalletType("metamask");
        localStorage.setItem("walletType", "metamask");
      } catch (error) {
        console.error("MetaMask connection failed:", error);
        throw error;
      }
    }, "MetaMask");

  const connectKeplr = () =>
    handleConnection(async () => {
      try {
        const sleep = (ms: number) =>
          new Promise((resolve) => setTimeout(resolve, ms));

        while (
          !window.keplr ||
          !window.getEnigmaUtils ||
          !window.getOfflineSigner
        ) {
          await sleep(50);
        }

        await window.keplr.enable(CHAIN_ID);
        const keplrOfflineSigner = window.keplr.getOfflineSigner(CHAIN_ID);
        const [{ address: myAddress }] = await keplrOfflineSigner.getAccounts();

        const client = new SecretNetworkClient({
          url: API_URL,
          chainId: CHAIN_ID,
          wallet: keplrOfflineSigner,
          walletAddress: myAddress,
          encryptionUtils: window.keplr.getEnigmaUtils(CHAIN_ID),
        });

        setSecretjs(client);
        setAddress(myAddress);
        setWalletType("keplr");
        localStorage.setItem("walletType", "keplr");
      } catch (error) {
        console.error("Keplr connection failed:", error);
        throw error;
      }
    }, "Keplr");

  const connectLeap = () =>
    handleConnection(async () => {
      try {
        const sleep = (ms: number) =>
          new Promise((resolve) => setTimeout(resolve, ms));

        while (
          !window.leap ||
          !window.leap.getEnigmaUtils ||
          !window.leap.getOfflineSignerOnlyAmino
        ) {
          await sleep(50);
        }

        await window.leap.enable(CHAIN_ID);
        const leapOfflineSigner = window.leap.getOfflineSigner(CHAIN_ID);
        const [{ address: myAddress }] = await leapOfflineSigner.getAccounts();

        const client = new SecretNetworkClient({
          url: API_URL,
          chainId: CHAIN_ID,
          wallet: leapOfflineSigner,
          walletAddress: myAddress,
          encryptionUtils: window.leap.getEnigmaUtils(CHAIN_ID),
        });

        setSecretjs(client);
        setAddress(myAddress);
        setWalletType("leap");
        localStorage.setItem("walletType", "leap");
      } catch (error) {
        console.error("Leap connection failed:", error);
        throw error;
      }
    }, "Leap");

  const disconnect = () => {
    setSecretjs(null);
    setAddress(null);
    setWalletType(null);
    localStorage.removeItem("walletType");
  };

  return (
    <SecretNetworkContext.Provider
      value={{
        secretjs,
        connectMetaMask,
        connectKeplr,
        connectLeap,
        disconnect,
        isConnected: !!secretjs,
        address,
        walletType,
      }}
    >
      {children}
    </SecretNetworkContext.Provider>
  );
}

export const useSecretNetwork = () => {
  const context = useContext(SecretNetworkContext);
  if (!context) {
    throw new Error(
      "useSecretNetwork must be used within a SecretNetworkProvider"
    );
  }
  return context;
};
