import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchAboutPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
  about {
    subtitle
    mainImage { url alternativeText }

    alumni placement_percentage

    welcome_description
    welcome_video_youtube_link

    why_choose_points { id text }

    welfare_hub_description
    welfare_hub_tagline
    welfare_hub_org_description
    welfare_hub_org_tagline
  }
}
  `;

  const data = await graphqlQuery<{ about: prettify<AboutPageData> }>({
    query,
  }).then((res) => res?.about ?? null);

  if (!data) throw Error("The about page data must always remain available.");
  return data;
});
