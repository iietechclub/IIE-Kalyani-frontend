import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchStudentsSectionPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    studentsSection {
      notices (
        sort: "createdAt:asc"
        pagination: { pageSize: 200 }
      ) {
        documentId title posted_on
        document { url alternativeText }
      }
      student_achievements {
        documentId image {
          url alternativeText
        }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    studentsSection: prettify<StudentsSectionPageData>;
  }>({ query }).then((res) => res?.studentsSection ?? null);

  if (!data)
    throw Error("The students section page data must always remain available.");
  return data;
});
