// biome-ignore-all lint/correctness/noUnusedVariables: Globally used

type ButtonVariant = "Primary" | "Secondary" | "Ghost";

type CTAButton = prettify<
  ComponentType & {
    name: string;
    variant: ButtonVariant;
    containsLink: boolean;
    url?: Url;
  }
>;

type LinkButton = {
  variant: ButtonVariant;
  url?: Url;
};

type IconBadge = prettify<
  ComponentType & {
    name: string;
    icon: IconField;
  }
>;

type QuickCard = prettify<
  ComponentType & {
    title: string;
    description: string;
    icon?: IconField;
  }
>;

type ShortText = prettify<ComponentType & { text: string }>;

type LinkButtonWithId = prettify<ComponentType & LinkButton>;
