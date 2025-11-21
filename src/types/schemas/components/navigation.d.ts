/** biome-ignore-all lint/correctness/noUnusedVariables: Globally used */

type MenuItem<U = Url> = prettify<
  ComponentType & {
    label: string;
    url?: prettify<U>;
    icon?: string;
  }
>;

type Submenu = prettify<
  ComponentType & {
    title: string;
    children: MenuItem[];
  }
>;
