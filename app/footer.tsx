import Link from "next/link";
import { GithubIcon, TwitterIcon, EnvelopeIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-300 dark:border-zinc-700">
      <div className="max-w-screen-xl px-3 py-4 mx-auto sm:px-4 lg:px-5">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-300 sm:justify-start">
            <div className="container px-5 py-8 mx-auto flex gap-4 items-center sm:flex-row flex-col text-zinc-800 dark:text-zinc-200">
              <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">
                Home
              </Link>
              <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/blog">
                Blog
              </Link>
              <Link className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">
                Projects
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <ul className="flex flex-wrap justify-center gap-1 lg:justify-end md:gap-8 lg:gap-3">
              <li>
                <a
                  href={"https://twitter.com/gaurishhs"}
                  target={"_blank"}
                  aria-label="twitter link"
                >
                  <TwitterIcon className="fill-zinc-700 w-6 h-6 transition hover:fill-teal-500" />
                </a>
              </li>

              <li>
                <a
                  href={"https://github.com/gaurishhs"}
                  target={"_blank"}
                  aria-label="github link"
                >
                  <GithubIcon className="fill-zinc-700 w-6 h-6 transition hover:fill-teal-500" />
                </a>
              </li>

              <li>
                <a
                  href={"mailto:gaurishsethia@yahoo.com"}
                  target={"_blank"}
                  aria-label="mail"
                >
                  <EnvelopeIcon className="fill-zinc-700 w-6 h-6 transition hover:fill-teal-500" />
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-center text-zinc-400 dark:text-zinc-500 lg:text-right lg:mt-0">
            &copy; {new Date().getFullYear()} Gaurish Sethia. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}