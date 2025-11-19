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
