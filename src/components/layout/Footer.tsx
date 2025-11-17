import { fetchGlobalPageData } from "@/dal/global";

export default async function Footer() {
  const data = await fetchGlobalPageData();
  return <div>footer - {data && <div>{data.contactNo}</div>}</div>;
}
