import SEO from "@/components/global/SEO";
import type { NextPage } from "next";
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
