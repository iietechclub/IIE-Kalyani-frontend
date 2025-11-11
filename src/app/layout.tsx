/** biome-ignore-all lint/correctness/noChildrenProp: Takes short space */
import type { Metadata } from "next";
import "./globals.css";

import { Suspense } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import { fetchGlobalPagesData } from "@/dal/global";

export async function generateMetadata(): Promise<Metadata> {
  const globalData = await fetchGlobalPagesData();
  return globalData?.metadata ?? {};
}

export default function RootLayout({ children }: ReadonlyChildren) {
  return (
    <html lang="en">
      <body className="antialiased md:subpixel-antialiased">
        <Suspense children={<Navbar />} />
        {children}
        <Suspense children={<Footer />} />
      </body>
    </html>
  );
}
