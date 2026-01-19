import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchTechnicalEventsAndSeminarsPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    technicalEventsAndSeminars {
      upcoming_events {
        documentId title description
        multiple_days start end
        image { url alternativeText }
        tags { id text }
      }
      past_events {
        documentId title description
        multiple_days start end
        image { url alternativeText }
        tags { id text }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    technicalEventsAndSeminars: prettify<TechnicalEventsAndSeminarsPageData>;
  }>({ query }).then((res) => res?.technicalEventsAndSeminars ?? null);

  if (!data)
    throw Error(
      "The technical events and seminars page data must always remain available.",
    );
  return data;
});
