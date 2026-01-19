import { fetchGalleryPageData } from "@/dal/gallery";
import GalleryPageClient from "./client";

export default async function GalleryPage() {
  const { gallery_items } = await fetchGalleryPageData();
  return <GalleryPageClient gallery_items={gallery_items} />;
}
