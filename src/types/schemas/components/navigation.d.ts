/** biome-ignore-all lint/correctness/noUnusedVariables: Globally used */

type Submenu = {
  id: string;
  title: string;
  children: MenuItem[];
};

type MenuItem = {
  id: string;
  label: string;
  url?: Url;
  icon?: string;
};

type Banner = {
    title: string;
    tag: string;
    subtitle: string;
    ctabuttons?: CTAButtons[];
}

type CTAButtons = {
    name: string;
    variant: "Primary" | "Secondary" | "Ghost";
    containsLink: boolean;
    url?: Url;    
}