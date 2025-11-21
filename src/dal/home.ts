import { cacheLife } from "next/cache";
import { cache } from "react";

import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchHomePageData = cache(async () => {
  "use cache";
  cacheLife("minutes");

  const query = gql`{
    home {
      banners {
        documentId tag title subtitle
        ctaButtons {
          id name variant containsLink
          url { url newTab }
        }
      }

      why_choose_cards {
        documentId title description
        image { url alternativeText }
      }

      departments {
        documentId name tagline
        previewImage { url alternativeText } 
      }

      facilities {
        documentId title tag description
        image { url alternativeText }
      }

      gallery_items {
        documentId title tag type
        image { url alternativeText }
        youtubeUrl videoPreview { url alternativeText }
      }
    }
  }
  `;

  const data = await graphqlQuery<{ home: prettify<HomePageData> }>({
    query,
  }).then((res) => res?.home ?? null);

  if (!data) throw Error("The home page data must always remain available.");
  return data;
});
