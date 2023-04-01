import { ReactNode } from "react";
import TopBar from "@/components/topBar";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <TopBar />
      <main >{children}</main>
    </div>
  );
}
