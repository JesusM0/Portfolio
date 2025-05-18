import { useLocation } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import AnimatedBackground from "./AnimatedBackground";
import type { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative min-h-screen w-screen">
      <AnimatedBackground />

      {/* AnimatePresence with wait mode ensures exit animation runs */}
      <div className="fixed top-0 left-0 w-full h-16 z-50">
        <AnimatePresence mode="wait">
          {!isHome && (
            <TopNavBar key="top-navbar" /> // key is REQUIRED for AnimatePresence to work
          )}
        </AnimatePresence>
      </div>

      <main className="w-full px-10 pt-0">{children}</main>
    </div>
  );
}
