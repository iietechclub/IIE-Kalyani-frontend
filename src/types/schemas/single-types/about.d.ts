// biome-ignore-all lint/correctness/noUnusedVariables: Globally used

type AboutPageData = {
  subtitle: string;
  mainImage: Media;

  alumni: number;
  placement_percentage: number;

  welcome_description: RichTextBlocks;
  welcome_image: Media;

  why_choose_points: ShortText[];

  welfare_hub_description: RichTextBlocks;
  welfare_hub_tagline: string;
  welfare_hub_org_description: RichTextBlocks;
  welfare_hub_org_tagline: string;
};
