import { cache } from "react";

import { gql, graphqlQuery } from "@/lib/graphql";

export const fetchGlobalPageData = cache(async () => {
  "use cache";

  const query = gql`{
    global {
      metadata {
        title description
      }

      contactNo contactEmail location
      quickLinks { id label url { url newTab download } }

      organizationName organizationShortName
      organizationSubtitle organizationLogo { url alternativeText }
      menus {
        documentId title contains
        link { variant url { url newTab } }
        menuItems { id label url { url newTab } }
        submenus {
          id title
          children { id icon label url { url newTab } }
        }
      }

      socialLinks {
        documentId platform url { url newTab }
      }
      footerDescription
      footerColumns {
        documentId title
        items { id label url { url newTab } }
      }
    }
  }
  `;

  const data = await graphqlQuery<{ global: prettify<GlobalPageData> }>({
    query,
  }).then((res) => res?.global ?? null);

  if (!data) throw Error("The global page data must always remain available.");
  return data;
});
