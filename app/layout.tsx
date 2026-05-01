import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Bebas_Neue,
  Crimson_Pro,
  Geist,
  Geist_Mono,
} from "next/font/google";
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

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "E-Cell SRM Ramapuram",
  description:
    "E-Cell SRM Ramapuram - student-led startup ecosystem, incubation support, and hackathon guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} ${crimsonPro.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-screen lg:h-screen flex flex-col overflow-y-auto lg:overflow-hidden ecell-body">
        {children}
        <footer className="mt-auto shrink-0 border-t border-white/10 px-6 py-4 text-xs text-white/70">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>
              Copyright {new Date().getFullYear()} All rights reserved | E-Cell SRM Ramapuram
            </span>
            {/* <span aria-hidden="true">|</span> */}
            <Link
              href="https://www.ecellrmp.srm.edu.in"
              target="_blank"
              className="text-white/80 transition hover:text-white"
            >
              www.ecellrmp.srm.edu.in
            </Link>
            <Link
              href="https://anasalamportfolio.netlify.app"
              target="_blank"
              className="text-white/80 transition hover:text-white"
            >
              Developed by Anas Alam
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
