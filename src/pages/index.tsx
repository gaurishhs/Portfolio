import Navbar from "@/components/global/Navbar";
import SEO from "@/components/global/SEO";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Inter from "@next/font";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Hero from "@/components/home/Hero";

const Home: NextPage = () => {
  return (
    <Fragment>
      <SEO title="Home - Gaurish Sethia" />
      <Hero />
    </Fragment>
  );
};

export default Home;
