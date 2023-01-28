import { ReactNode, useState } from "react";
import Footer from "../global/Footer";
import { MobileNav } from "../global/MobileNav";
import Navbar from "../global/Navbar";

export function MainLayout({ children }: { children: ReactNode }) {
  let [isOpen, setisOpen] = useState(false);
  let toggleNav = () => setisOpen((prev) => !prev);
  return (
    <div className="flex max-w-3xl px-3 xl:px-0 mx-auto sm:px-6 xl:max-w-5xl flex-col min-h-screen">
      <MobileNav isOpen={isOpen} toggleNav={toggleNav} />
      <Navbar isOpen={isOpen} toggleNav={toggleNav} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
