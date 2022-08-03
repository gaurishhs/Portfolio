import { useRouter } from "next/router";

export default function Donate() {
  const router = useRouter();
  return (
    <div id="sponsor" className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
      <h2 className="text-center mb-6 font-sans text-3xl font-bold tracking-tight text-emerald-400 sm:text-4xl sm:leading-none">
        <span className="relative px-1">
          <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
          <span className="relative inline-block text-heading">
            Sponsor Me
          </span>
        </span>
      </h2>
      <p className="mb-6 text-base text-indigo-100 md:text-lg">
        If you like my work, You can support me by any of the following methods :)
      </p>
      <div className="grid donate-button grid-cols-3 gap-2">
        <img
          onClick={() => router.push("https://paypal.me/apidev234wtf")}
          alt="paypal"
          width={95}
          height={28}
          src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white"
        ></img>
        <img
          onClick={() => router.push("https://github.com/sponsors/gaurishhs")}
          src="https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA"
          alt="github sponsor"
          width={95}
          height={28}
        />
        <img
          onClick={() => router.push("https://ko-fi.com/gaurishhs")}
          src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white"
          alt="kofi"
          width={95}
          height={28}
        />
      </div>
    </div>
  );
}
