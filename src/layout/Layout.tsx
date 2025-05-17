import { useLocation } from "react-router-dom";
import { TopNavBar } from "../components/TopNavBar";
import { AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/* Navbar transition */}
      <div className="fixed top-0 left-0 w-full h-24 z-40">
        <AnimatePresence>{!isHome && <TopNavBar />}</AnimatePresence>
      </div>

      {/* Prevent being pushed down by navbar*/}
      <main className="w-full px-10 pt-0">{children}</main>
    </div>
  );
}
