import { cacheLife } from "next/cache";

export async function globalData() {
  "use cache";
  cacheLife("minutes");

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

  const res = await fetch("http://localhost:1337/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query }),
  });

  console.log(await res.json());
}
