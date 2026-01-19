import { cacheLife } from "next/cache";
import { cache } from "react";

import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchDepartmentData = cache(async (slug: string) => {
  "use cache";
  cacheLife("hours");

  const query = gql`query ($slug: String){
    departments (filters: { slug: { eq: $slug } }) {
      documentId name slug tagline
      bannerImage { url alternativeText }

      hod { name image { url alternativeText } }
      hod_message oneline_vision oneline_mission

      about about_image { url alternativeText }
      vision_mission_tagline vision mission

      labs {
        documentId title
        image { url alternativeText }
      }
    }
  }
  `;

  const data = await graphqlQuery<{ departments: prettify<Department[]> }>({
    query,
    variables: { slug },
  }).then((res) => res?.departments?.[0] ?? null);
  return data;
});
