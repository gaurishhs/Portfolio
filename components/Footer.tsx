import config from "../config.json";
import {
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Logo from "./Logo";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "./Link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-300">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-300 sm:justify-start">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a
                href="/"
                aria-current="page"
                className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
              >
                <img
                  className="rounded-full"
                  src="https://cdn.statically.io/img/apidev234.wtf/me.jpeg"
                  alt="me"
                  width={40}
                  height={50}
                />
                <span className="ml-3 text-xl">Gaurish</span>
              </a>
              <p className="text-sm inline-flex text-gray-400 sm:ml-4 sm:pl-3 sm:py-2 sm:mt-0 mt-4">
                <Link href={"mailto:gaurishsethia@yahoo.com"}>gaurishsethia@yahoo.com</Link>
              </p>
              <p className="text-sm inline-flex text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                <Link href={config.sourceURL}>Source Code</Link>
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <ul className="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12">
              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href={config.twitterURL}
                  target={"_blank"}
                >
                  <FaTwitter size={25} />
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href={config.githubURL}
                  target={"_blank"}
                >
                  <FaGithub size={25} />
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href={config.linkedinURL}
                  target={"_blank"}
                >
                  <FaLinkedin size={25} />
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href={config.instagramURL}
                  target={"_blank"}
                >
                  <FaInstagram size={25} />
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
            &copy; Copyright {new Date().getFullYear()} Gaurish. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
