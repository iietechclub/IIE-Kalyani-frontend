import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js 16 App",
  description: "Starter for nextjs app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased md:subpixel-antialiased">{children}</body>
    </html>
  );
}
