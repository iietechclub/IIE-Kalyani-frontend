import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchCulturalEventsPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    culturalEvents {
      activities {
        documentId title
        description timing icon
        image { url alternativeText }
      }

      gallery_images {
        documentId image { url alternativeText }
      }

      upcoming_events {
        documentId title description
        multiple_days start end
        image { url alternativeText }
        tags { id text }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    culturalEvents: prettify<CulturalEventsPageData>;
  }>({ query }).then((res) => res?.culturalEvents ?? null);

  if (!data)
    throw Error("The cultural events page data must always remain available.");
  return data;
});
