import { cacheLife } from "next/cache";
import { cache } from "react";

import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchVisionAndMissionPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    visionAndMission {
      subtitle
      vision
      missions { id text }
      core_values {
        id title icon
        description
      }
      objectives (pagination: { pageSize: 6 }) { id text }
      quote
    }
  }
  `;

  const data = await graphqlQuery<{
    visionAndMission: prettify<VisionAndMissionPageData>;
  }>({
    query,
  }).then((res) => res?.visionAndMission ?? null);

  if (!data)
    throw Error("The vision & mission page data must always remain available.");
  return data;
});
