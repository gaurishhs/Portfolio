import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [page, setPage] = useState("");
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
    let pathname = window.location.pathname.split("/")[1];
    if (window.location.pathname && window.location.pathname !== "/") {
      setPage(pathname.charAt(0).toUpperCase() + pathname.slice(1));
    }
  });
  return (
    <>
      <Head>
        {page ? (
          <title>{page} | Gaurish Sethia</title>
        ) : (
          <title>Gaurish Sethia</title>
        )}
        <meta
          name="description"
          content="Gaurish Sethia is a full stack developer specializing in building production-ready web apps."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gaurishsethia.me/" />
        <meta property="og:title" content="Hey, I am Gaurish Sethia." />
        <meta
          property="og:description"
          content="Gaurish Sethia is a full stack developer specializing in building production-ready web apps."
        />
        <meta property="og:image" content="https://gaurishsethia.me/banner.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gaurishsethia.me/" />
        <meta property="twitter:title" content="Hey, I am Gaurish Sethia." />
        <meta
          property="twitter:description"
          content="Gaurish Sethia is a full stack developer specializing in building production-ready web apps."
        />
        <meta property="twitter:image" content="https://gaurishsethia.me/banner.png"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
