import "@/styles/globals.css";

import { Layout } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Web3Modal = dynamic(
  () => import("@/components/w3modal").then((mod) => mod.Web3Modal),
  {
    ssr: false,
  }
);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Web3Modal>
        <DndProvider backend={HTML5Backend}>
          <Layout showNetworkButtons={pageProps.hideNetworkButtons}>
            <Component {...pageProps} />
            <Toaster />
          </Layout>
        </DndProvider>
      </Web3Modal>
    </SessionProvider>
  );
}
