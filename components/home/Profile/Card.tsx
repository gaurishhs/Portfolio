import Image from "next/image";
import type { SpotifyNowPlayingData } from "types";
import SpotifyTracker from "./SpotifyTracker";
import config from "@/config";
import {
  MdWorkOutline,
  MdOutlineLocationOn,
  MdMailOutline,
} from "react-icons/md";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import Link from "next/link";

export function ProfileCard(spotifyData: SpotifyNowPlayingData) {
  return (
    <div className="overflow-hidden shadow-cyan-700/50 max-w-md rounded-lg shadow scale-100 xl:hover:scale-[1.10] z-10 hover:z-30 transition-all duration-200 ease-out">
      <Image
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
            <h5 className="py-2 font-semibold text-gray-400">
              Student | Developer
            </h5>
            <div className="space-y-2">
              <p className="text-gray-400">
                <MdWorkOutline className="inline-block mr-2" />
                Self - Building Open Source Projects
              </p>
              <p className="text-gray-400">
                <MdOutlineLocationOn className="inline-block mr-2" />
                Faridabad, India
              </p>
              <p className="text-gray-400">
                <MdMailOutline className="inline-block mr-2" />
                <Link href={`mailto:${config.email}`}>{config.email}</Link>
              </p>
              <p className="text-gray-400 pt-5 gap-2 inline-flex">
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
