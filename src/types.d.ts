type Omits<T, K extends PropertyKey> = Omit<T, K>;
type prettify<T> = { [K in keyof T]: T[K] } & {};

type Url = { url: string; newTab: boolean };
type UrlWithDownload = prettify<Url & { download: boolean }>;

type Image = { url: string; alternativeText: string };

type MenuItem = {
  id: string;
  label: string;
  url: Url;
};

type MenuItemWithUrlDownload = prettify<
  Omits<MenuItem, "url"> & { url: UrlWithDownload }
>;

type Submenu = {
  id: string;
  title: string;
  children: MenuItem[];
};

type Menu = {
  documentId: string;
  title: string;
  contains: string;
  link: { variant: string; url: Url };
  menuItems: MenuItem[];
  submenus: Submenu[];
};

type SocialPlatform =
  | "Facebook"
  | "Twitter"
  | "Instagram"
  | "YouTube"
  | "WhatsApp";

type SocialLink = {
  documentId: string;
  platform: SocialPlatform;
  url: Url;
};

type FooterColumn = {
  documentId: string;
  title: string;
  items: MenuItem[];
};

// biome-ignore lint/correctness/noUnusedVariables: Globally used type
type GlobalPagesData = {
  contactNo: string;
  contactEmail: string;
  locationTitle: string;
  topLinks: MenuItemWithUrlDownload[];

  logoTitle: string;
  logoSubtitle: string;
  logoImage: Image;
  menus: Menu[];

  socialLinks: SocialLink[];
  footerDescription: string;
  footerColumns: FooterColumn[];
};
