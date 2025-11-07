// src/env.ts
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    BACKEND_URL: z.url(),
    BACKEND_GRAPHQL_URL: z.url(),
  },
  clientPrefix: "NEXT_PUBLIC_",
  client: {
    // Only include vars that can be exposed to frontend
    NEXT_PUBLIC_API_URL: z.url(),
  },
  runtimeEnv: {
    BACKEND_URL: process.env.BACKEND_URL,
    BACKEND_GRAPHQL_URL: process.env.BACKEND_GRAPHQL_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
