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
      new URL("http://localhost:1339/uploads/**"),
      new URL("http://localhost:1337/uploads/**"),

      // remote servers
      new URL("https://raw.githubusercontent.com/iietechclub/college_images/main/**"),
      new URL("https://images.shiksha.com/mediadata/images/articles/*"),
      new URL("https://content.jdmagicbox.com/v2/comp/delhi/**"),
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowLocalIP: env.NODE_ENV === "development",
  },
};

export default nextConfig;
