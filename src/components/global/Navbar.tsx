import Link from "next/link";
import config from "@/config.json";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  isOpen: boolean;
  toggleNav: () => void;
}

export default function Navbar(props: Props) {
  return (
    <div className="w-full z-[100] sticky backdrop-blur supports-backdrop-blur:bg-white/95 top-0 left-0">
      <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
          <div className="text-3xl mr-1 pt-2">
            <Link href="/">
              <img
                src="/assets/me.jpeg"
                alt="logo"
                className="rounded-full"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>

        <div
          onClick={props.toggleNav}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <button
            className={`hamburger hamburger--slider ${
              props.isOpen ? "is-active" : null
            }`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block space-x-2">
            {config.navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="rounded py-1 px-2 font-medium text-gray-900 sm:py-2 sm:px-3 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {link.title}
              </Link>
            ))}
          </div>
          </div>
      </div>
    </div>
  );
}
