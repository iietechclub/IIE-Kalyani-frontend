import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchAdmissionSessionPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    admissionSession {
      session
      btech_programs { short_name }
      bba_programs { short_name }
    }
  }
  `;

  const data = await graphqlQuery<{
    admissionSession: prettify<AdmissionSessionPageData>;
  }>({ query }).then((res) => res?.admissionSession ?? null);

  if (!data)
    throw Error(
      "The admission session page data must always remain available.",
    );
  return data;
});
