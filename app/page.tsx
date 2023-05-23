export default function Home() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-2xl mb-6">
            <div className="text-4xl font-bold tracking-tight text-zinc-800 mb-8 dark:text-zinc-100 sm:text-5xl">
              Whatsup!
            </div>
            <h2 className="text-base text-zinc-600 dark:text-zinc-400 max-w-lg mb-6">
              I&apos;m <b>Gaurish Sethia</b> - A self-taught full stack
              developer.
            </h2>
            <div className="text-base mt-3 text-zinc-600 dark:text-zinc-400">
              <p>
                I write code in TypeScript, Go and a little bit of Python.
                I&apos;m passionate about building scalable and performant web
                applications. Being a self-taught developer, I&apos;ve learnt a
                lot from the open source community and I&apos;m always looking
                forward to contribute back to the community. My favourite tech
                stack is Next.js, tRPC, TailwindCSS and Prisma with end-to-end
                type-safety.
              </p>
              <p className="mt-2">
                I&apos;ve been writing code since 2019 and my spirit of learning
                new things has never stopped since then.
              </p>
              <p className="mt-2">
                If you want to support me financially, you can do so via{" "}
                <a
                  target="_blank"
                  className="font-medium text-zinc-800 dark:text-zinc-200 mr-1 transition hover:text-teal-500 dark:hover:text-teal-500"
                  href={"https://github.com/sponsors/gaurishhs"}
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
        </div>
        <div className="flex items-center justify-start gap-5 flex-col lg:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/me.jpeg"
            width={"full"}
            height={"full"}
            alt="me"
            className="rounded-xl rotate-3"
          />
        </div>
      </div>
    </div>
  );
}
