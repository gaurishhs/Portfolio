import './globals.css';
import "@code-hike/mdx/dist/index.css";
import { Inter } from 'next/font/google'
import clsx from 'clsx';
import Navigation from './navigation';
import { ThemeProvider } from './theme-provider';
import type { Metadata } from 'next';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Gaurish Sethia",
  keywords: [
    "Gaurish Sethia",
    "Gaurish",
    "Sethia",
    "gaurishhs",
    "gaurish",
  ],
  openGraph: {
    type: "website",
    url: "https://gaurishsethia.me",
    title: "Gaurish Sethia",
    description: "Gaurish Sethia is a full stack developer specializing in building production-ready web apps.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gaurishhs",
    creator: "@gaurishhs",
    description: "Gaurish Sethia is a full stack developer specializing in building production-ready web apps.",
    title: "Gaurish Sethia",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='antialiased' suppressHydrationWarning>
      <body className={clsx(inter.className, "flex max-w-3xl dark:bg-zinc-900 bg-zinc-50 px-3 xl:px-0 mx-auto sm:px-6 xl:max-w-5xl flex-col min-h-screen")}>
        <ThemeProvider attribute='class'>
          <Navigation />
          <main className='flex-grow'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}