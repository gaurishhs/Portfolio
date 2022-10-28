import Head from "next/head";
import { useRouter } from "next/router";
import { SEOProps } from "types";
import config from "@/config"

export default function SEO({ title, description }: SEOProps) {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description || "Gaurish Sethia is a full stack developer specializing in building production-ready web apps."}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={config.siteURL} />
      <meta property="og:title" content={title || 'Gaurish Sethia'} />
      <meta
        property="og:description"
        content={description || "Gaurish Sethia is a full stack developer specializing in building production-ready web apps."}
      />
      <meta property="og:image" content={config.siteURL + "/banner.png"} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={config.siteURL + router.asPath} />
      <meta property="twitter:title" content={title || 'Gaurish Sethia'} />
      <meta
        property="twitter:description"
        content={description || "Gaurish Sethia is a full stack developer specializing in building production-ready web apps."}
      />
      <meta
        property="twitter:image"
        content={config.siteURL + "/banner.png"}
      ></meta>
    </Head>
  );
}
