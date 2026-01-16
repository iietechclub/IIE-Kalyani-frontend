import { fetchPlacementRecordPageData } from "@/dal/placement-record";
import PlacementRecordPageClient from "./client";

export default async function PlacementRecordPage() {
  const data = await fetchPlacementRecordPageData();
  return <PlacementRecordPageClient {...data} />;
}
