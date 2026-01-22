import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchSportsPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    sports {
      gallery_highlights (pagination: { pageSize: 12 }) {
        documentId image {
          url alternativeText
        }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    sports: prettify<SportsPageData>;
  }>({ query }).then((res) => res?.sports ?? null);

  if (!data) throw Error("The sports page data must always remain available.");
  return data;
});
