// biome-ignore-all lint/correctness/noUnusedVariables: Globally used

type CollectionType = { documentId: string };

type Banner = prettify<
  CollectionType & {
    title: string;
    tag: string;
    subtitle: string;
    ctaButtons: CTAButton[];
  }
>;

type Department = prettify<
  CollectionType & {
    name: string;
    tagline: string;
    previewImage: Media;
    bannerImage: Media;
    icon?: string;
  }
>;

type Facility = prettify<
  CollectionType & {
    image: Media;
    title: string;
    description: string;
  }
>;

type FooterColumn = prettify<
  CollectionType & {
    title: string;
    items: MenuItem[];
  }
>;

type GalleryItemType = "Image" | "Video";
type GalleryItem = prettify<
  CollectionType & {
    title: string;
    tag: string;
    type: GalleryItemType;
    image?: Media;
    videoPreview?: Media;
    youtubeUrl?: string;
  }
>;

type MenuContains = "Links" | "MenuItems" | "SubMenus";
type Menu = prettify<
  CollectionType & {
    title: string;
    contains: MenuContains;
    link: LinkButton;
    menuItems: MenuItem[];
    submenus: Submenu[];
  }
>;

type SocialPlatform =
  | "Facebook"
  | "Twitter"
  | "LinkedIn"
  | "Instagram"
  | "YouTube"
  | "WhatsApp";

type SocialLink = prettify<
  CollectionType & {
    platform: SocialPlatform;
    url?: Url;
  }
>;

type Url = { url: string; newTab?: boolean };
type UrlWithDownload = prettify<Url & { download?: boolean }>;

type WhyChoose = prettify<
  CollectionType & {
    image: Media;
    title: string;
    description: string;
  }
>;
