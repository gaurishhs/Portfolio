import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
