"use client"; // Add this directive at the top

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { bsc } from "@wagmi/core/chains";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
// Connectors
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { AuthProvider } from "../context/authContext";
import { loginUser } from "@/apis/authentication";
import { useEffect } from "react";

const { chains, provider, webSocketProvider } = configureChains(
  [bsc],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "3314f39613059cb687432d249f1658d2",
        showQrModal: true,
        metadata: {
          name: "PoolTogether",
          description:
            "Cowfarm is described as a protocol that allows users to place other tokens into a contract for profits.",
          url: "https://crypto-hunters-projects-crypto-hunters-coin-sales-platform.vercel.app",
          icons: [
            "https://crypto-hunters-projects-crypto-hunters-coin-sales-platform.vercel.app/assets/logo-79bd39f5.png",
          ],
        },
      },
    }),
  ],
  provider,
  webSocketProvider,
});

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WagmiConfig client={client}>
      <AuthProvider>
        <html lang="en" className="dark" suppressHydrationWarning>
          <body className={montserrat.className}>
            <div className="bg-black/40 w-full scrollbar-thin  scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-green-600 scrollbar-track-black h-screen overflow-y-scroll">
              {children}
            </div>
          </body>
        </html>
      </AuthProvider>
    </WagmiConfig>
  );
}
