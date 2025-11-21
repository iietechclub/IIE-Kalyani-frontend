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

type LinkButtonWithId = prettify<ComponentType & LinkButton>;
