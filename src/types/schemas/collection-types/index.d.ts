// biome-ignore-all lint/correctness/noUnusedVariables: Globally used

type CollectionType = { documentId: string };

type Banner = prettify<
  CollectionType & {
    title: string;
    tag: string;
    image: Media;
    subtitle: string;
    ctaButtons: CTAButton[];
  }
>;

type Company = prettify<
  CollectionType & {
    name: string;
    short_name: string;
    image: Media;
    domain: string;
  }
>;

type CompanyWithoutName = Omits<Company, "name">;

type DepartmentNameOnly = { name: string };
type Department = prettify<
  CollectionType &
    DepartmentNameOnly & {
      slug: string;
      short_name: string;
      tagline: string;
      previewImage: Media;
      bannerImage: Media;
      icon?: IconField;
    }
>;

type Facility = prettify<
  CollectionType & {
    image: Media;
    title: string;
    tag?: string;
    icon?: IconField;
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

type Leadership = prettify<
  CollectionType & {
    type: string;
    name: string;
    image: Media;
    message: RichTextBlocks;
    quote?: string;
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
  | "GitHub"
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

type StudentDeveloper = prettify<
  CollectionType & {
    name: string;
    image: Media;
    contribution: string;
    department: { name: string };
    github: string;
    linkedin: string;
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
