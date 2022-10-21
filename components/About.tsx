import { Link } from "./Link"

export const AboutMe = () => {
  return (
    <div id="about" className="px-4 space-x-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-emerald-400 sm:text-4xl sm:leading-none">
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-heading">
                  About Me
                </span>
              </span>
            </h2>
            <p className="text-base text-opacity-50 nunito text-gray-200 md:text-lg">
              I started my coding journey back in 2019, midst of the Novel
              Coronavirus pandemic as i was totally bored and exploring new
              opportunities as to what I was capable of.
            </p>
          </div>
          <p className="mb-4 text-sm nunito text-opacity-50 text-gray-200 tracking-widest">
            Few Technologies I have been working with recently:
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              <li className="flex text-neutral-600">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                <Link href="https://en.wikipedia.org/wiki/JavaScript">Javascript(ES6+)</Link>/<Link href="https://www.typescriptlang.org/">Typescript</Link>
              </li>
              <li className="flex text-neutral-600">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                <Link href="https://go.dev">Golang</Link>
              </li>
              <li className="flex text-neutral-600">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                <Link href="https://reactjs.org">React.js</Link>(<Link href="https://nextjs.org">Next.js</Link>)/<Link href="https://vuejs.org">Vue.js</Link>(<Link href="https://nuxtjs.org">Nuxt.js</Link>)
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                <Link href="https://tailwindcss.com">TailwindCSS</Link>
              </li>
              <li className="flex text-neutral-600">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                <Link href="https://sass-lang.com">SASS/SCSS</Link>
              </li>
              <li className="flex">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                <Link href="https://tauri.studio">Tauri</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="/me.jpeg"
            alt="me"
            width={256}
            height={296}
          />
        </div>
      </div>
    </div>
  );
};
