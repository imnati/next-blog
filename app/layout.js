import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Blog",
  description: "A simple blog app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full`}
      >
        <div className="min-h-dvh bg-zinc-200 text-zinc-950">
          <div className="mx-auto flex min-h-dvh w-full max-w-[1100px] flex-col border-x border-zinc-300 bg-white">
            <header className="flex h-14 items-center justify-between border-b border-zinc-300 px-4 sm:px-6">
              <Link href="/" className="flex items-center gap-3 font-semibold">
                <p className="text-lg text-zinc-950">Next Blog</p>
              </Link>
              <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600">
                <Link
                  href="/"
                  className="hover:text-zinc-950 focus-visible:text-zinc-900"
                >
                  Home
                </Link>
                <Link
                  href="/posts"
                  className="hover:text-zinc-950 focus-visible:text-zinc-900"
                >
                  Posts
                </Link>
              </nav>
            </header>
            <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10">
              {children}
            </main>
            <footer className="border-t border-zinc-300 bg-zinc-100 px-4 py-6 text-center text-sm text-zinc-600 sm:px-6 sm:py-8">
              &copy; {new Date().getFullYear()} Next Blog. All rights reserved.
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
