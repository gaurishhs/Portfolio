import type { SpotifyNowPlayingData } from "types";
import SpotifyTracker from "./SpotifyTracker";
import config from "@/config.json";
import {
  MdWorkOutline,
  MdOutlineLocationOn,
  MdMailOutline,
} from "react-icons/md";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import Link from "next/link";

export function ProfileCard(spotifyData: SpotifyNowPlayingData) {
  return (
    <div className="overflow-hidden shadow-emerald-700/50 max-w-md rounded-lg shadow scale-100 xl:hover:scale-[1.10] z-10 hover:z-30 transition-all duration-200 ease-out">
      <img
        alt="Profile Picture"
        src="/assets/me.jpeg"
        width={330}
        height={200}
        className="object-cover"
      />

      <div className="bg-transparent">
        <div className="flex flex-col w-full">
          <SpotifyTracker {...spotifyData} />
          <div className="px-6 py-4">
            <h3 className="text-xl font-semibold text-white">Gaurish Sethia</h3>
            <h5 className="py-2 font-semibold text-white">
              Student | Developer
            </h5>
            <div className="space-y-2 text-white">
              <p>
                <MdWorkOutline className="inline-block mr-2" />
                Self - Building Open Source Projects
              </p>
              <p>
                <MdOutlineLocationOn className="inline-block mr-2" />
                Faridabad, India
              </p>
              <p>
                <MdMailOutline className="inline-block mr-2" />
                <Link href={`mailto:${config.email}`}>{config.email}</Link>
              </p>
              <p className="text-white pt-5 gap-2 inline-flex">
                <Link href={config.github}>
                    <AiOutlineGithub size={25} className="mr-2 hover:text-green-500" />
                </Link>
                <Link href={config.linkedIn}>
                    <AiOutlineLinkedin size={25} className="mr-2 hover:text-green-500" />
                </Link>
                <Link href={config.twitter}>
                    <AiOutlineTwitter size={25} className="mr-2 hover:text-green-500" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
