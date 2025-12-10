import { cacheLife } from "next/cache";
import { cache } from "react";

import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchHomePageData = cache(async () => {
  "use cache";
  cacheLife("hours");

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

      departments_tagline
      departments {
        documentId name tagline
        previewImage { url alternativeText } 
      }

      facilities_tagline
      facilities {
        documentId title tag description
        image { url alternativeText }
      }

      gallery_tagline
      gallery_items {
        documentId title tag type
        image { url alternativeText }
        youtubeUrl videoPreview { url alternativeText }
      }

      our_recruiters_tagline
      our_recruiters_avg_offers
      our_recruiters_internship_offers
      our_recruiters_avg_ctc
      our_recruiters_recruiting_sectors {
        id name icon
      }

      our_creative_team_tagline
      our_creative_team_youtube_video_link
      our_creative_team_image { url alternativeText }
      our_creative_team_quotation
    }
  }
  `;

  const data = await graphqlQuery<{ home: prettify<HomePageData> }>({
    query,
  }).then((res) => res?.home ?? null);

  if (!data) throw Error("The home page data must always remain available.");
  return data;
});
