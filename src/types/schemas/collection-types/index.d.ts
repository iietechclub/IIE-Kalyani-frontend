// biome-ignore-all lint/correctness/noUnusedVariables: Globally used type

type FooterColumn = {
  documentId: string;
  title: string;
  items: MenuItem[];
};

type MenuContains = "Links" | "MenuItems" | "SubMenus";
type Menu = {
  documentId: string;
  title: string;
  contains: MenuContains;
  link: { variant: string; url?: Url };
  menuItems: MenuItem[];
  submenus: Submenu[];
};

type SocialPlatform =
  | "Facebook"
  | "Twitter"
  | "LinkedIn"
  | "Instagram"
  | "YouTube"
  | "WhatsApp";

type SocialLink = {
  documentId: string;
  platform: SocialPlatform;
  url?: Url;
};

type Url = { url: string; newTab: boolean };
type UrlWithDownload = prettify<Url & { download: boolean }>;
 
type GalleryItem = {
    title: string;
    tag: string;
    image?: Media;
    videoPreview?: Media;
    youtubeUrl?: string;
}

type Facility = {
    image: Media;
    title: string;
    description: string;
}

type Department = {
    name: string;
    tagline: string;
    previewImage: Media;
    bannerImage: Media;
    icon: string;
}

type WhyChoose = {
    image: Media;
    title: string;
    description: string;
}