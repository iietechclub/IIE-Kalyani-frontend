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
        image { url alternativeText }
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
        documentId name slug
        icon short_name tagline
        previewImage { url alternativeText } 
      }

      facilities_tagline
      facilities {
        documentId title tag description
        icon image { url alternativeText }
      }

      gallery_tagline
      gallery_items {
        documentId title tag type
        image { url alternativeText }
        youtubeUrl videoPreview { url alternativeText }
      }

      our_recruiters_tagline
      our_recruiters_apply_now { url newTab }
      our_recruiters_avg_offers
      our_recruiters_internship_offers
      our_recruiters_avg_ctc
      our_recruiters_recruiting_sectors {
        id name icon
      }

      our_creative_team_tagline
      our_creative_team_youtube_video_link
      our_creative_team_image { url alternativeText }
      student_developers {
        documentId name type
        image { url alternativeText }
        department { short_name } batch
        otherFrom contribution
        github linkedin
      }
      our_creative_team_quotation
    }

    placementRecord {
      companies {
        documentId short_name domain
        image { url alternativeText }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    home: prettify<HomePageData>;
    placementRecord: { companies: CompanyWithoutName[] };
  }>({ query }).then((res) => res ?? null);

  if (!data) throw Error("The home page data must always remain available.");
  return data;
});
