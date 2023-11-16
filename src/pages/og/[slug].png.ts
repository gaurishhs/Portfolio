import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import Inter300 from "@fontsource/inter/files/inter-latin-300-normal.woff";
import Inter500 from "@fontsource/inter/files/inter-latin-500-normal.woff";
import Inter600 from "@fontsource/inter/files/inter-latin-600-normal.woff";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

const dimensions = {
    width: 1200,
    height: 630,
};

interface Props {
    title: string;
    pubDate: Date;
}

export async function GET(context: APIContext) {
    const { title, pubDate } = context.props as Props;
    const date = pubDate.toLocaleDateString("en-US", {
        dateStyle: "full",
    });

    const markup = html`<div
    tw="flex p-10 h-full bg-neutral-900 w-full flex-col"
    style={{
      fontFamily: 'Inter 300',
    }}
  >
    <header tw="flex text-2xl w-full">
      <div tw="font-bold text-neutral-100" style={{
        fontFamily: 'Inter 600',

      }}>
        Gaurish Sethia
      </div>
    </header>

    <main tw="flex text-neutral-100 items-center grow pb-3 flex-col justify-center">
      <div tw="flex">
        <div
          tw="p-5 text-5xl font-medium rounded-sm text-center"
          style={{
            fontFamily: 'Inter 500'
          }}
        >
          ${title}
        </div>
      </div>

      <div
        tw="mt-4 flex text-xl font-sans text-neutral-500"
      >
        ${date}
      </div>
    </main>
  </div>`;

    const svg = await satori(markup, {
        fonts: [
            {
              name: "Inter 300",
              data: Buffer.from(Inter300),
            },
            {
              name: "Inter 500",
              data: Buffer.from(Inter500),
            },
            {
              name: "Inter 600",
              data: Buffer.from(Inter600),
            },
        ],
        height: dimensions.height,
        width: dimensions.width,
    });

    const image = new Resvg(svg, {
        fitTo: {
            mode: "width",
            value: dimensions.width,
        },
    }).render();

    return new Response(image.asPng(), {
        headers: {
            "Content-Type": "image/png",
        },
    });
}

export async function getStaticPaths() {
    const posts = await getCollection("blog");
    const paths = posts.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
            props: {
                title: post.data.title,
                pubDate: post.data.date,
            },
        };
    });
    return paths;
}