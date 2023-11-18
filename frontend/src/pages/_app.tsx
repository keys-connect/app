import "@/styles/globals.css";

import { Layout } from "@/components/layout";
import type { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import dynamic from "next/dynamic";

const Web3Modal = dynamic(
  () => import("@/components/w3modal").then((mod) => mod.Web3Modal),
  {
    ssr: false,
  }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Modal>
      <DndProvider backend={HTML5Backend}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DndProvider>
    </Web3Modal>
  );
}
