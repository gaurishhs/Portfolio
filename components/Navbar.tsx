import { useState } from "react";
import Logo from "./Logo";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full hover:bg-gray-200 bg-gray-50 transition ease transform duration-300`;
  return (
    <div className="bg-transparent ease-out">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="/"
            aria-label="Gaurish Sethia"
            title="Gaurish Sethia"
            className="inline-flex items-center"
          >
            <Logo className="logo" />
          </a>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="#about"
                aria-label="About me"
                title="About me"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                aria-label="About me"
                title="About me"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#sponsor"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sponsor me"
                title="Sponsor me"
              >
                Sponsor
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              className="flex flex-col h-10 w-12 rounded text-gray-200 justify-center items-center group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isMenuOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isMenuOpen
                    ? "opacity-0"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
            {isMenuOpen && (
              <div data-aos="zoom-in-down" className="absolute z-[1] top-20 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#about"
                          aria-label="About me"
                          title="About me"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About Me
                        </a>
                      </li>
                      <li>
                        <a
                          href="#projects"
                          aria-label="About me"
                          title="About me"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="#sponsor"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sponsor me"
                          title="Sponsor me"
                        >
                          Sponsor Me
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
