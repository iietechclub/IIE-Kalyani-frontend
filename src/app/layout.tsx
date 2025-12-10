/** biome-ignore-all lint/correctness/noChildrenProp: Takes short space */
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { Suspense } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/navbar";

import { fetchGlobalPageData } from "@/dal/global";
import { cn } from "@/lib/utils";

const nunito = Nunito({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const globalData = await fetchGlobalPageData();
  return {
    ...globalData.metadata,
    title: {
      template: `%s | ${globalData.metadata.title}`,
      default: globalData.metadata.title,
    },
  };
}

export default async function RootLayout({ children, }: ReadonlyChildren) {
  return (
    <Suspense>
      <html lang="en">
        <body
          className={cn(
            "antialiased md:subpixel-antialiased",
            nunito.className,
          )}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Suspense>
  );
}
