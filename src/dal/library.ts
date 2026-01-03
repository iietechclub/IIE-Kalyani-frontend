import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchLibraryPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    library {
      introduction
      gallery_images {
        documentId image { url alternativeText }
      }
      resources {
        id title description url { url }
        image { url alternativeText }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    library: prettify<LibraryPageData>;
  }>({ query }).then((res) => res?.library ?? null);

  if (!data) throw Error("The library page data must always remain available.");
  return data;
});
