// biome-ignore-all lint/correctness/noUnusedVariables: Globally used type

type MenuItemWithUrlDownload = prettify<
  Omits<MenuItem, "url"> & { url?: UrlWithDownload }
>;

type GlobalPageData = {
  metadata: SEOMetadata;

  contactNo: string;
  contactEmail: string;
  location: string;
  topLinks: MenuItemWithUrlDownload[];

  logoTitle: string;
  logoSubtitle: string;
  logoImage: Media;
  menus: Menu[];

  socialLinks: SocialLink[];
  footerDescription: string;
  footerColumns: FooterColumn[];
};
 
type Home = {
    banners: Banner[];
    why_choose_cards: WhyChoose[];
    departments: Department[];
    facilities: Facility[];
    gallery_items: GalleryItem[];
}