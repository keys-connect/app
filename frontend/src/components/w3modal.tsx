import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { ReactNode } from "react";
import {
  gnosis,
  gnosisChiado,
  goerli,
  mainnet,
  polygon,
  polygonMumbai,
  scrollSepolia,
} from "viem/chains";
import { WagmiConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";

const projectId = process.env.WALLET_CONNECT_PROJECT_ID!;

const metadata = {
  name: "k3ys.xyz",
  description: "Web3Modal Example",
  url: "https://k3ys.xyz",
  icons: ["https://k3ys.xyz/logo.png"],
};

const { chains } = configureChains(
  [
    mainnet,
    gnosis,
    goerli,
    gnosisChiado,
    scrollSepolia,
    polygonMumbai,
    polygon,
  ],
  [
    alchemyProvider({
      apiKey: process.env.ALCHEMY_API_KEY!,
    }),
    publicProvider(),
  ]
);
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: "light" });

export function Web3Modal({ children }: { children?: ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
