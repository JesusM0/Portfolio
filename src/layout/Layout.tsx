import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { SideBar } from "../components/SideBar";
import { TopNavBar } from "../components/TopNavBar";

interface LayoutProps {
  children: ReactNode;
}

//This Layout is meant to determine what page youre one
export default function Layout({ children }: LayoutProps) {
  //using useLocation from react-router
  const location = useLocation();
  const isHome = location.pathname === "/";

  //if the page is home, we use the side bar(really just split page) setting where the navigation item
  //will be on the left and content on the righ
  if (isHome) {
    return (
      <div className="flex min-h-screen">
        <div className="w-1/2 bg-background p-8 hidden lg:block">
          <SideBar />
        </div>
        <div className="w-full lg:w-2/3 p-10">{children}</div>
      </div>
    );
  }

  //any other page type will have a nav bar on top.
  return (
    <div className="min-h-screen bg-background">
      <TopNavBar />
      <main className="w-full lg:w-2/3 p-10">{children}</main>
    </div>
  );
}
