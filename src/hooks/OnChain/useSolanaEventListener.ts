// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import { useEffect, useCallback } from "react";
// import { PublicKey } from "@solana/web3.js";
// import { solanaTokenConfig } from "@/lib/constant";
// export function useSolanaEventListener() {
//   const { connection } = useConnection();
//   const { publicKey } = useWallet();

//   const subscribeToTokenFactory = useCallback(() => {
//     // Subscribe to program account changes
//     const factoryPubkey = new PublicKey(solanaTokenConfig.address);
//     const subscriptionId = connection.onAccountChange(
//       factoryPubkey,
//       (accountInfo) => {
//         console.log("Token factory updated:", accountInfo);
//         // Handle the update here
//       }
//     );

//     // Subscribe to user address addition events
//     if (publicKey) {
//       const userAddressPubkey = publicKey; // Use the connected wallet's public key
//       const userSubscriptionId = connection.onAccountChange(
//         userAddressPubkey,
//         (accountInfo) => {
//           console.log("User address updated:", accountInfo);
//           // Handle the update here
//         }
//       );

//       return () => {
//         connection.removeAccountChangeListener(userSubscriptionId);
//       };
//     }

//     return () => {
//       connection.removeAccountChangeListener(subscriptionId);
//     };
//   }, [connection, publicKey]);

//   useEffect(() => {
//     const unsubscribe = subscribeToTokenFactory();
//     return () => {
//       unsubscribe();
//     };
//   }, [subscribeToTokenFactory]);
// }
