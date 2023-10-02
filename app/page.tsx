"use client";

import Link from "next/link";

export default function Home() {
    return (
        <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-2xl mb-6">
                        <div className="text-base mt-3 text-zinc-600 dark:text-zinc-400">
                            <p>
                                Hi, I&apos;m{" "}
                                <span className="italic">Gaurish Sethia</span>,
                                A full stack developer. I work mostly with
                                NextJS/React. I code in JavaScript/Typescript,
                                Golang and Python. I&apos;m currently a student
                                and mostly do Open source. I have 6+ years of
                                experience in Web dev. I&apos;ve always been
                                passionate about writing code and learning new
                                things. My interests include Artificial
                                Intelligence, Deep Learning and Cybersecurity as
                                well.
                            </p>
                            <p className="mt-2">
                                Besides code, I&apos;ve been interested in
                                Computer Hardware, Networking, Cosmology,
                                Spirituality, Politics and Entrepreneurship.
                            </p>
                            <p className="mt-2">
                                If you want to support me financially, you can
                                do so via{" "}
                                <a
                                    target="_blank"
                                    className="font-medium text-zinc-800 dark:text-zinc-200 mr-1 transition hover:text-teal-500 dark:hover:text-teal-500"
                                    href={
                                        "https://github.com/sponsors/gaurishhs"
                                    }
                                >
                                    Github Sponsors
                                </a>
                                or via{" "}
                                <a
                                    target="_blank"
                                    className="font-medium text-zinc-800 dark:text-zinc-200 transition hover:text-teal-500 dark:hover:text-teal-500"
                                    href={"https://liberapay.com/gaurishhs"}
                                >
                                    Liberapay
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex-col flex gap-2">
                            <Link className="hover:opacity-80" href="/blog">
                                <span className="font-mono mr-1">01.</span>
                                Blog
                            </Link>
                            <Link className="hover:opacity-80" href="/projects">
                                <span className="font-mono mr-1">02.</span>
                                Projects
                            </Link>
                        </div>
                        <div className="flex-end gap-2 flex flex-col">
                            <a
                                className="hover:opacity-80"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/gaurishhs"
                            >
                                Github: gaurishhs
                            </a>
                            <a
                                className="hover:opacity-80"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:gaurishsethia@yahoo.com"
                            >
                                Contact: Email
                            </a>
                            <a
                                className="hover:opacity-80"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://x.com/gaurishhs"
                            >
                                Social: X
                            </a>
                            <a
                                className="hover:opacity-80"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/gaurishhs.gpg"
                            >
                                Misc: GPG Key
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
