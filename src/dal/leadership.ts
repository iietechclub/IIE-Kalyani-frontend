import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchLeadershipData = cache(async (type: string) => {
  "use cache";
  cacheLife("hours");

  const query = gql`query Query($type: String) {
    leaderships(filters: { type: { eq: $type } }) {
        type name
        image { url alternativeText }
        message quote
    }
  }
  `;
  const data = await graphqlQuery<{ leaderships: Leadership[] }>({
    query,
    variables: { type },
  }).then((res) => res?.leaderships[0] ?? null);

  if (!data) throw Error("The leadership data must always remain available.");
  return data;
});
