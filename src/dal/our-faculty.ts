import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchOurFacultyPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    ourFaculty {
      departments {
        documentId name
        hod { documentId }
        faculties (pagination: { pageSize: 40 }) {
          documentId name designation
          image { url alternativeText }
          qualifications { id text }
        }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    ourFaculty: prettify<OurFacultyPageData>;
  }>({ query }).then((res) => res?.ourFaculty ?? null);

  if (!data)
    throw Error("The our faculty page data must always remain available.");
  return data;
});
