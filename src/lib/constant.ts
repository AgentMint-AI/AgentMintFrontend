import { Address } from "viem";
import { abi as Erc20TokenFactoryABI } from "./compiledContracts/Erc20TokenFactory.json";
import { abi as AgentRegistryABI } from "./compiledContracts/AgentRegistry.json";

export const evmContractAddress = process.env
  .NEXT_PUBLIC_EVM_CONTRACT_ADDRESS as Address;

if (!evmContractAddress) {
  throw new Error("EVM contract address is not set");
}

export const wagmiContractConfig = {
  address: evmContractAddress,
  abi: Erc20TokenFactoryABI,
} as const;

export const agentRegistryAddress = process.env
  .NEXT_PUBLIC_AGENT_REGISTRY_ADDRESS as Address;

if (!agentRegistryAddress) {
  throw new Error("Agent registry address is not set");
}

export const wagmiAgentRegistryConfig = {
  address: agentRegistryAddress,
  abi: AgentRegistryABI,
} as const;

export const LOCAL_RPC_URL = "http://127.0.0.1:8545";
