import { fetchGlobalPagesData } from "@/dal/global";

export default async function Footer() {
  const data = await fetchGlobalPagesData();
  return <div>footer - {data && <div>{data.contactNo}</div>}</div>;
}
