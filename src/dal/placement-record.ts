import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchPlacementRecordPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    placementRecord {
      departments {
        documentId name
        placement_data {
          documentId table
          students_placement_percentage
        }
      }
      companies {
        documentId name domain
        image { url alternativeText }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    placementRecord: prettify<PlacementRecordPageData>;
  }>({ query }).then((res) => res?.placementRecord ?? null);

  if (!data)
    throw Error("The placement record page data must always remain available.");
  return data;
});
