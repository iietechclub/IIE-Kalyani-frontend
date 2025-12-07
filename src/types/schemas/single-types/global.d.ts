// biome-ignore-all lint/correctness/noUnusedVariables: Globally used

type GlobalPageData = {
  metadata: SEOMetadata;

  contactNo: string;
  contactEmail: string;
  location: string;
  quickLinks: MenuItem<UrlWithDownload>[];

  organizationLogo: Media;
  organizationName: string;
  organizationShortName: string;
  organizationSubtitle: string;
  menus: Menu[];

  socialLinks: SocialLink[];
  footerDescription: string;
  footerColumns: FooterColumn[];
};
