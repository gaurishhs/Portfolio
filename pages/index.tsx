import type { NextPage } from "next";
import { Component, Fragment, ReactNode, useEffect, useState } from "react";
import { Nav } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { AboutMe } from "../components/About";
import { Projects } from "../components/Projects";
import Donate from "../components/Sponsor";
import axios from "axios";

export default class HomePage extends Component<any, { loading: boolean }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  promisify() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  componentDidMount(): void {
    this.promisify().then(() => {
      const element = document.getElementById("preloader");

      if (element) {
        element.style.display = "flex";
        setTimeout(() => {
          element.style.display = "none";
        }, 2000);
      }
    });
  }
  render(): ReactNode {
    return (
      <Fragment>
        <div
          id="preloader"
          className="bg-black flex items-center justify-center  h-screen w-screen"
        >
          <video autoPlay={true} loop={true} muted={true} playsInline={true}>
            <source src="/logo.webm" type="video/webm" />
          </video>
        </div>

        <Layout>
          <Hero />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <AboutMe />
          <Projects />
          <Donate />
          <br />
          <br />
          <Footer />
        </Layout>
      </Fragment>
    );
  }
}
