import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Nav } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import { AboutMe } from "@/components/About";
import { Projects } from "@/components/Projects";
import Donate from "@/components/Sponsor";

const Home: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (
      document.referrer &&
      document.referrer.startsWith(window.location.origin)
    ) {
      setLoading(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-black flex items-center justify-center  h-screen w-screen">
          <video autoPlay={true} loop={true} muted={true} playsInline={true}>
            <source src="/logo.webm" type="video/webm" />
          </video>
        </div>
      ) : (
        ""
      )}
      <>
        <Layout>
          <Hero />
          <AboutMe />
          <Projects />
          <Donate />
        </Layout>
      </>
    </>
  );
};

export default Home;