import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchAchievementsPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    achievements {
      student_achievements (pagination: { limit: 12 }) {
        documentId title
        image { url alternativeText }
        winner description date
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    achievements: prettify<AchievementsPageData>;
  }>({ query }).then((res) => res?.achievements ?? null);

  if (!data)
    throw Error("The achievements page data must always remain available.");
  return data;
});
