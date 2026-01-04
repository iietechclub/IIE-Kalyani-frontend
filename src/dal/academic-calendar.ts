import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchAcademicCalendarPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    academicCalendar {
      session
      calendar_pdf { url alternativeText }
    }
  }
  `;

  const data = await graphqlQuery<{
    academicCalendar: prettify<AcademicCalendarPageData>;
  }>({ query }).then((res) => res?.academicCalendar ?? null);

  if (!data)
    throw Error(
      "The academic calendar page data must always remain available.",
    );
  return data;
});
