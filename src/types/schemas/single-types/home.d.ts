/** biome-ignore-all lint/correctness/noUnusedVariables: Globally used */

type HomePageData = {
  banners: Banner[];
  why_choose_cards: WhyChoose[];

  departments_tagline: string;
  departments: Department[];

  facilities_tagline: string;
  facilities: Facility[];

  gallery_tagline: string;
  gallery_items: GalleryItem[];

  our_recruiters_tagline: string;
  our_recruiters_avg_offers: number;
  our_recruiters_internship_offers: number;
  our_recruiters_avg_ctc: number;
  our_recruiters_recruiting_sectors: QuickCard[];

  our_creative_team_tagline: string;
  our_creative_team_youtube_video_link: string;
  our_creative_team_image: Media;
  our_creative_team_quotation: string;
};
