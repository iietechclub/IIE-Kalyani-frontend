// import { cacheLife } from "next/cache";
import { fetchQuery } from "@/dal";

export async function fetchGlobalPagesData() {
  // "use cache";
  // cacheLife("seconds");

  const query = `{
    global {
        contactNo contactEmail locationTitle
        topLinks { id label url { url newTab download } }
        
        logoTitle logoSubtitle
        logoImage { url alternativeText }
        menus {
            documentId title contains
            link { variant url { url newTab } }
        menuItems { id label url { url newTab } }
        submenus {
            id title
            children { id label url { url newTab } }
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
  }`;

  return fetchQuery<{ global: prettify<GlobalPagesData> }>(query).then(
    (res) => res?.global ?? null,
  );
}
