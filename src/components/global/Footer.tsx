import config from "@/config.json";
import {
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import { Link } from "./Link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-300">
      <div className="max-w-screen-xl px-3 py-4 mx-auto sm:px-4 lg:px-5">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-300 sm:justify-start">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a
                href="/"
                aria-current="page"
                className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
              >
                <Image
                  className="rounded-full"
                  src="/me.jpeg"
                  alt="me"
                  width={40}
                  height={50}
                />
                <span className="ml-3 text-xl">Gaurish</span>
              </a>
              &emsp;
              <p className="text-sm inline-flex text-gray-400 sm:ml-7 sm:pl-3 md:ml-5 lg:ml-7 sm:py-2 sm:mt-0 mt-4">
                <Link href={`mailto:${config.email}`}>{config.email}</Link>
              </p>
              <p className="text-sm inline-flex text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
                <Link href={config.sourceURL}>Source Code</Link>
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <ul className="flex flex-wrap justify-center gap-1 lg:justify-end md:gap-8 lg:gap-3">
              <li>
                <a
                  className="text-white transition hover:text-green-400"
                  href={config.twitter}
                  target={"_blank"}
                  aria-label="twitter link"
                >
                  <FaTwitter size={25} />
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-green-400"
                  href={config.github}
                  target={"_blank"}
                  aria-label="github link"
                >
                  <FaGithub size={25} />
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-green-400"
                  href={config.linkedIn}
                  target={"_blank"}
                  aria-label="linkedin link"
                >
                  <FaLinkedin size={25} />
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
            &copy; Copyright {new Date().getFullYear()} Gaurish Sethia. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}