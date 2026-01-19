import { cacheLife } from "next/cache";
import { cache } from "react";
import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchFeeStructurePageData = cache(async () => {
  "use cache";
  cacheLife("hours");

  const query = gql`{
    feeStructure {
      important_notes { id text }
      general_fees_btech
      general_fees_btech_lateral_entry
      makaut_fees_btech_and_btech_lateral_entry
      general_fees_bba
      total fees_structure_pdf { url alternativeText }
    }
  }
  `;

  const data = await graphqlQuery<{
    feeStructure: prettify<FeeStructurePageData>;
  }>({ query }).then((res) => res?.feeStructure ?? null);

  if (!data)
    throw Error("The fee structure page data must always remain available.");
  return data;
});
