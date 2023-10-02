import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import type { Metadata } from "next";
import { Navbar } from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gaurish Sethia",
    keywords: ["Gaurish Sethia", "Gaurish", "Sethia", "gaurishhs", "gaurish"],
    openGraph: {
        type: "website",
        url: "https://gaurishsethia.codes",
        title: "Gaurish Sethia",
        description:
            "Gaurish Sethia is a full stack developer specializing in building production-ready web apps.",
    },
    alternates: {
        canonical: "./",
        types: {
            "application/rss+xml": `https://gaurishsethia.codes/atom`,
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        card: "summary_large_image",
        site: "@gaurishhs",
        creator: "@gaurishhs",
        description:
            "Gaurish Sethia is a full stack developer specializing in building production-ready web apps.",
        title: "Gaurish Sethia",
    },
    metadataBase: new URL("https://gaurishsethia.codes"),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="antialiased" suppressHydrationWarning>
            <body
                className={clsx(
                    inter.className,
                    "flex min-h-screen justify-center items-center dark:bg-zinc-900 bg-zinc-50 text-zinc-800 dark:text-zinc-100"
                )}
            >
                <main>
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
