import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchAlumniRelationPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    alumniRelation {
      about
      alumni_members {
        documentId name description
        position batch company { short_name }
        image { url alternativeText }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    alumniRelation: prettify<AlumniRelationPageData>;
  }>({ query }).then((res) => res?.alumniRelation ?? null);

  if (!data)
    throw Error("The alumni relation page data must always remain available.");
  return data;
});
