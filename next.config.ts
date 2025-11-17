import type { NextConfig } from "next";
import { env } from "./src/lib/env";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
    dangerouslyAllowLocalIP: env.NODE_ENV === "development",
  },
};

export default nextConfig;
