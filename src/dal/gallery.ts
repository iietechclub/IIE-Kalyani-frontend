import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchGalleryPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    gallery {
      gallery_items (pagination: { pageSize: 200 }) {
        documentId title category
        image { url alternativeText }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    gallery: prettify<GalleryPageData>;
  }>({ query }).then((res) => res?.gallery ?? null);

  if (!data) throw Error("The gallery page data must always remain available.");
  return data;
});
