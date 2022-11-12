import Navbar from "@/components/global/Navbar";
import SEO from "@/components/global/SEO";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
const Hero = dynamic(() => import("@/components/home/Hero"), {
  ssr: false,
  loading: () => {
    return (
      <Fragment>
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <div className="spinner"></div>
        </div>
      </Fragment>
    );
  },
});

const Home: NextPage = () => {
  return (
    <Fragment>
      <SEO title="Home - Gaurish Sethia" />
      <Hero />
    </Fragment>
  );
};

export default Home;
