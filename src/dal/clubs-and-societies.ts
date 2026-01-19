import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchClubsAndSocietiesPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    clubsAndSocieties {
      banner { url alternativeText }
      clubs {
        documentId name slug
        preview_image { url alternativeText }
        tagline subtitle
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    clubsAndSocieties: prettify<ClubsAndSocietiesPageData>;
  }>({ query }).then((res) => res?.clubsAndSocieties ?? null);

  if (!data)
    throw Error(
      "The clubs and societies page data must always remain available.",
    );
  return data;
});
