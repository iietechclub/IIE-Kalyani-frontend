import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchSuccessStoriesPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    successStoriesPage {
      success_stories (pagination: { pageSize: 6 }) {
        documentId name employer salary
        department { name } image { url alternativeText }
        youtube_url passout_year description
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    successStoriesPage: prettify<SuccessStoriesPageData>;
  }>({ query }).then((res) => res?.successStoriesPage ?? null);

  if (!data)
    throw Error("The success stories page data must always remain available.");
  return data;
});
