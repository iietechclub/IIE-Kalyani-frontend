import { fetchGlobalPageData } from "@/dal/global";
import NavbarClient from "./client";

export default async function Navbar() {
  const data = await fetchGlobalPageData();
  return <NavbarClient data={data} />;
}
