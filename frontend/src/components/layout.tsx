import { ReactNode } from "react";
import { NavBar } from "./navbar";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

interface Props {
  children?: ReactNode;
  showNetworkButtons?: boolean;
}
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export function Layout({ children, showNetworkButtons }: Props) {
  return (
    <div className={cn("min-w-screen min-h-screen h-full", fontSans.variable)}>
      <NavBar hideNetworkButtons={showNetworkButtons} />
      <div className="max-w-7xl mx-auto my-12">{children}</div>
    </div>
  );
}
