import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchClubPageData = cache(async (slug: string) => {
  "use cache";
  cacheLife("hours");

  const query = gql`query ($slug: String) {
    clubs (filters: { slug: { eq: $slug } }) {
      documentId name slug
      banner_image { url alternativeText }
      tagline subtitle content
      gallery_items {
        documentId title image {
          url alternativeText
        }
      }
    }
  }
  `;

  const data = await graphqlQuery<{clubs: prettify<ClubFull[]>}>({
    query,
    variables: { slug },
  }).then((res) => res?.clubs?.[0] ?? null);

  if (!data) throw Error("The club page data must always remain available.");
  return data;
});
