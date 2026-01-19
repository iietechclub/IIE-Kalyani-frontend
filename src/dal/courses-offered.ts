import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchCoursesOfferedPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    coursesOffered {
      courses {
        documentId icon name
        duration slug tagline
      }
      achievements_and_milestones {
        id title icon
        description
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    coursesOffered: prettify<CoursesOfferedPageData>;
  }>({ query }).then((res) => res?.coursesOffered ?? null);

  if (!data)
    throw Error("The courses offered page data must always remain available.");
  return data;
});
