import { ChildrenProp } from "@/types/children-props";
import TopBar from "@/components/topBar";
import Footer from "./footer";

export default function Layout({ children }: ChildrenProp) {
  return (
    <div>
      <TopBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
