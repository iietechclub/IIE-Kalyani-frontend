import { fetchGlobalPagesData } from "@/dal/global";

export default async function Navbar() {
  const data = await fetchGlobalPagesData();
  return <div>navbar - {data && <div>{data.contactNo}</div>}</div>;
}
