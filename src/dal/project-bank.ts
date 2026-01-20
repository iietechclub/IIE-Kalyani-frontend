import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchProjectBankPageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    projectBank {
      projects (pagination: { pageSize: 200 }) {
        documentId
        title department { short_name }
        field year icon description
        
        guides { id text }
        students { id text }
      }
    }
  }
  `;

  const data = await graphqlQuery<{
    projectBank: prettify<ProjectBankPageData>;
  }>({ query }).then((res) => res?.projectBank ?? null);

  if (!data)
    throw Error("The project bank page data must always remain available.");
  return data;
});
