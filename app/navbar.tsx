import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";

interface NavbarProps {
    isOpen: boolean;
    toggle: () => void;
}

const links = [
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
];

export function MobileNavbar({ isOpen, toggle }: NavbarProps) {
    return (
        <div
            className={`sm:hidden fixed w-full h-screen inset-0 bg-zinc-200 dark:bg-zinc-800 opacity-95 z-[150] transition-transform transform ease-in-out duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <button
                type="button"
                aria-label="toggle modal"
                className="fixed w-8 h-8 right-12 top-7 align-middle cursor-auto focus:outline-none"
                onClick={toggle}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-gray-900 dark:text-gray-100"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <nav className="fixed h-full mt-8">
                {links.map((link, i) => (
                    <div key={i} className="px-8 py-4">
                        <Link
                            href={link.href}
                            onClick={toggle}
                            className="text-2xl font-semibold tracking-wide text-gray-900 dark:text-gray-100"
                        >
                            {link.label}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
}

export function Navbar({ isOpen, toggle }: NavbarProps) {
    const { theme, setTheme } = useTheme();
    return (
        <div className="w-full top-0 left-0">
            <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center">
                    <div className="text-3xl mr-1 pt-2">
                        <Link href="/">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/me.jpeg"
                                alt="logo"
                                className="rounded-full"
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>
                </div>

                <div
                    onClick={toggle}
                    className="text-3xl items-center absolute right-8 top-3 align-middle cursor-pointer md:hidden"
                >
                    <div>
                        <button className="relative group">
                            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 shadow-md">
                                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-x-1.5 group-focus:rotate-180">
                                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                                    <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
                                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="md:flex hidden items-center text-base leading-5">
                    <div className="hidden sm:flex items-center space-x-2">
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="rounded py-1 transition px-2 font-medium text-zinc-900 sm:py-2 sm:px-3 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            type="button"
                            className="flex h-6 w-6 items-center justify-center rounded-md transition"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <SunIcon className="w-10 h-10" onClick={() => setTheme("light")} />
                            ) : (
                                <MoonIcon className="w-10 h-10" onClick={() => setTheme("dark")} />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

