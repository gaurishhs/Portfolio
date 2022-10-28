import Twemoji from "../global/Twemoji";
import config from "@/config";
import Typewriter from "typewriter-effect";
import { ProfileCard } from "./Profile/Card";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import type { SpotifyNowPlayingData } from "types";
import { Link } from "../global/Link";

export default function Hero() {
  const response = useSWR("/api/spotify", fetcher);
  const data = response.data as SpotifyNowPlayingData;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-2xl mb-6">
            <div className="mb-8 inline-flex gap-2 text-5xl leading-[60px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 md:text-7xl md:leading-[86px]">
              Whatsup! <Twemoji emoji="👋" />
            </div>
            <h2 className="font-sans font-medium tracking-tight text-neutral-200 sm:leading-none max-w-lg mb-6">
              I'm <b>Gaurish Sethia</b> - A self-taught full stack developer and a student.
            </h2>
              <Typewriter
                options={{
                  strings: config.descriptionStrings,
                  autoStart: true,
                  delay: 50,
                  deleteSpeed: 0,
                  loop: true,
                  wrapperClassName: 'text-neutral-200 text-base',
                  cursorClassName: 'text-neutral-200 animate-pulse',
                }}
              />

            <div className="text-base mt-3 text-neutral-400 md:text-lg">
              I started my coding journey back in 2019, midst of the Novel
              Coronavirus pandemic as i was totally bored and exploring new
              opportunities as to what I was capable of.
              <p className="mt-2">
                I work mostly with languages like Javascript/Typescript and
                Golang. I use Web technologies such as React(Next.js,
                Preact.js), Vue(Nuxt.js, VuePress, Vuetify) with bundlers like
                Webpack 5, Turbopack, ViteJS.
              </p>
              <p className="mt-2">
                If you want to support me financially, you can do so via <Link href={config.githubSponsorURL}>Github Sponsors</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <ProfileCard {...data} />
        </div>
      </div>
    </div>
  );
}
