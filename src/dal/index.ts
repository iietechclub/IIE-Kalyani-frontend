import { env } from "@/lib/env";

export async function fetchQuery<T>(query: string): Promise<T | null> {
  const res = await fetch(env.BACKEND_GRAPHQL_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) return null;
  return (await res.json()).data;
}
