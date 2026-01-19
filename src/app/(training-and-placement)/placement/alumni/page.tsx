import { fetchAlumniRelationPageData } from "@/dal/alumni-relation";
import AlumniRelationPageClient from "./client";

export default async function AlumniRelationPage() {
  const data = await fetchAlumniRelationPageData();
  return <AlumniRelationPageClient {...data} />;
}
