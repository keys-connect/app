import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Footer } from "./footer";
import { NavBar } from "./navbar";

interface Props {
  children?: ReactNode;
  showNetworkButtons?: boolean;
}

export function Layout({ children, showNetworkButtons }: Props) {
  return (
    <div className={cn("min-w-screen min-h-screen h-full")}>
      <NavBar hideNetworkButtons={showNetworkButtons} />
      <div className="max-w-7xl mx-auto py-12">{children}</div>
      <Footer />
    </div>
  );
}
