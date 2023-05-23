import { ImageResponse } from "next/server";
import posts from '../../posts.json';

export const runtime = "edge";
const inter = fetch(
    new URL(
        `../../../../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff`,
        import.meta.url
    )
).then(res => res.arrayBuffer());

export async function GET(_req: Request, { params: { id } }: { params: { id: string } }) {
    const post = posts.find(p => p.id === id);
    if (!post) {
        return new Response("Not found", { status: 404 });
    }

    return new ImageResponse(
        (
            <div style={{
                fontFamily: "Inter",
            }} tw="flex flex-col w-full h-full bg-zinc-50">
                <div tw="flex flex-row justify-between items-center mt-4 ml-5">
                    <div tw="flex flex-row items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://gaurishsethia.me/me.jpeg" alt="logo" width={32} height={32} tw="rounded-full mr-3" />
                        <span>Gaurish Sethia</span>
                    </div>
                    <span tw="justify-end flex mr-5">
                        gaurishsethia.me
                    </span>
                </div>
                <h1 tw="text-5xl font-bold max-w-xl tracking-tight ml-5 mt-8">
                    {post.title}
                </h1>
            </div>
        ),
        {
            width: 800,
            height: 400,
            fonts: [
                {
                    name: "Inter",
                    data: await inter,
                }
            ]
        }
    );
}