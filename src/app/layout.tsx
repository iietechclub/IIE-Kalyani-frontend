import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ServerError from "@/components/ServerError";

import { fetchGlobalPagesData } from "@/dal/global";

// export const metadata: Metadata = {
//   title: "IIE Kalyani | Top Engineering College in West Bengal",
//   description: `IIE Kalyani is a premier engineering college in West Bengal,
//     offering Makaut programs in CSE, ECE, ME & CE. Apply now for quality education!`,
// };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "IIE Kalyani | Top Engineering College in West Bengal",
    description: `IIE Kalyani is a premier engineering college in West Bengal,
     offering Makaut programs in CSE, ECE, ME & CE. Apply now for quality education!`,
  };
}

type ReadonlyChildren = Readonly<{ children: React.ReactNode }>;

const Document = ({ children }: ReadonlyChildren) => (
  <html lang="en">
    <body className="antialiased md:subpixel-antialiased">{children}</body>
  </html>
);

export default async function RootLayout({ children }: ReadonlyChildren) {
  const globalData = await fetchGlobalPagesData().catch(() => null);

  if (!globalData) {
    return (
      <Document>
        <ServerError />
      </Document>
    );
  }

  return (
    <Document>
      <Navbar data={globalData} />
      {children}
    </Document>
  );
}
