import type { NextConfig } from "next";
import { env } from "./src/lib/env";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  experimental: { turbopackFileSystemCacheForDev: true },
  images: {
    remotePatterns: [
      // local development
      new URL(`${env.NEXT_PUBLIC_BACKEND_URL}/uploads/**`),

      // remote servers
      new URL(
        "https://raw.githubusercontent.com/iietechclub/college_images/main/**",
      ),
      new URL("https://images.shiksha.com/mediadata/images/articles/*"),
      new URL("https://content.jdmagicbox.com/v2/comp/delhi/**"),
      new URL("https://urli.info/**"),
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowLocalIP: env.NODE_ENV === "development",
  },
};

export default nextConfig;
