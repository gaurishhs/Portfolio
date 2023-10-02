export const runtime = "edge";

import { ImageResponse } from "next/server";
import posts from "../../blog/posts.json"

// fonts
const inter300 = fetch(
  new URL(
    `../../../node_modules/@fontsource/inter/files/inter-latin-300-normal.woff`,
    import.meta.url
  )
).then(res => res.arrayBuffer());

const inter500 = fetch(
  new URL(
    `../../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff`,
    import.meta.url
  )
).then(res => res.arrayBuffer());

const inter600 = fetch(
  new URL(
    `../../../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff`,
    import.meta.url
  )
).then(res => res.arrayBuffer());

export async function GET(_req: Request, { params: { id } }: {
    params: {
        id: string;
    };
}) {
  const post = posts.find(p => p.id === id);
  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        tw="flex p-10 h-full w-full bg-zinc-900 flex-col"
        style={font("Inter 300")}
      >
        <header tw="flex text-md w-full">
          <div tw="font-bold text-zinc-100" style={font("Inter 600")}>
            Gaurish Sethia
          </div>
        </header>

        <main tw="flex text-zinc-100 items-center grow pb-3 flex-col justify-center">
          <div tw="flex">
            <div
              tw="p-5 text-4xl font-medium rounded-sm text-center"
              style={font("Inter 500")}
            >
              {post.title}
            </div>
          </div>

          <div
            tw="mt-4 flex text-xl font-sans text-zinc-500"
          >
            {new Date(post.publishedAt).toLocaleDateString('en-GB')} - gaurishsethia.codes
          </div>
        </main>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter 300",
          data: await inter300,
        },
        {
          name: "Inter 500",
          data: await inter500,
        },
        {
          name: "Inter 600",
          data: await inter600,
        },
      ],
    }
  );
}

function font(fontFamily: string) {
  return { fontFamily };
}