// src/env.ts
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    BACKEND_GRAPHQL_URL: z.url(),
    NODE_ENV: z.enum(["production", "development", "test"]),
  },
  clientPrefix: "NEXT_PUBLIC_",
  client: {
    // Only include vars that can be exposed to frontend
    NEXT_PUBLIC_API_URL: z.url(),
    NEXT_PUBLIC_BACKEND_URL: z.url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    BACKEND_GRAPHQL_URL: process.env.BACKEND_GRAPHQL_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
