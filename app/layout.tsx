import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import type { Metadata } from "next";
import { Navbar } from "./navbar";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gaurish Sethia",
    keywords: ["Gaurish Sethia", "Gaurish", "Sethia", "gaurishhs", "gaurish", "apidev234"],
    openGraph: {
        type: "website",
        url: "https://gaurishsethia.codes",
        title: "Gaurish Sethia",
        description:
            "Gaurish Sethia is a self-taught full stack developer who is passionate about writing code and is an open source enthusiast.",
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
    themeColor: "#00e000",
    twitter: {
        card: "summary_large_image",
        site: "@gaurishhs",
        creator: "@gaurishhs",
        description:
            "Gaurish Sethia is a self-taught full stack developer who is passionate about writing code and is an open source enthusiast.",
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
                    "max-w-2xl m-auto dark:bg-zinc-900 bg-zinc-50 text-zinc-800 dark:text-zinc-100"
                )}
            >
                <ThemeProvider attribute="class">
                    <main className="p-6 pt-3 md:pt-6 items-center min-h-screen">
                        <Navbar />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}