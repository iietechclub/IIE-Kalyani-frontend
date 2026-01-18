// biome-ignore-all lint/correctness/noUnusedVariables: Globally used

type CollectionType = { documentId: string };

type Activity = prettify<
  CollectionType & {
    image: Media;
    title: string;
    description: string;
    icon?: IconField;
    timing: string;
  }
>;

type AlumniMember = prettify<
  CollectionType & {
    name: string;
    position: string;
    batch: string;
    company?: CompanyShortNameOnly;
    image: Media;
    description: string;
  }
>;

type Banner = prettify<
  CollectionType & {
    title: string;
    tag: string;
    image: Media;
    subtitle: string;
    ctaButtons: CTAButton[];
  }
>;

type Club = prettify<
  CollectionType & {
    name: string;
    slug: string;
    preview_image: Media;
    tagline: string;
    subtitle: string;
  }
>;

type CompanyShortNameOnly = { short_name: string };
type Company = prettify<
  CollectionType &
    CompanyShortNameOnly & {
      name: string;
      image: Media;
      domain: string;
    }
>;
type CompanyWithoutName = Omits<Company, "name">;

type DepartmentShortNameOnly = { short_name: string };
type DepartmentNameOnly = { name: string };
type DepartmentCourse = prettify<
  CollectionType &
    DepartmentNameOnly & {
      slug: string;
      icon?: IconField;
      duration: number;
      tagline: string;
    }
>;
type DepartmentFaculty = prettify<
  CollectionType &
    DepartmentNameOnly & {
      hod: CollectionType;
      faculties: Faculty[];
    }
>;
type DepartmentPlacement = prettify<
  CollectionType & DepartmentNameOnly & { placement_data: PlacementData }
>;
type DepartmentShort = prettify<
  CollectionType &
    DepartmentNameOnly &
    DepartmentShortNameOnly & {
      slug: string;
      tagline: string;
      previewImage: Media;
      icon?: IconField;
    }
>;
type Department = prettify<
  DepartmentShort & {
    bannerImage: Media;
    hod: Faculty;
    hod_message: string;
    oneline_vision: string;
    oneline_mission: string;

    about: RichTextBlocks;
    about_image: Media;

    vision_mission_tagline: string;
    vision: RichTextBlocks;
    mission: RichTextBlocks;

    labs: GalleryItem[];
  }
>;

type IEvent = prettify<
  CollectionType & {
    title: string;
    multiple_days: boolean;
    start: string;
    end?: string;
    image: Media;
    description: string;
    tags: ShortText[];
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

type Faculty = prettify<
  CollectionType & {
    name: string;
    image: Media;
    designation: string;
    departments: DepartmentShortNameOnly[];
    qualifications: ShortText[];
  }
>;

type FooterColumn = prettify<
  CollectionType & {
    title: string;
    items: MenuItem[];
  }
>;

type GalleryItemType = "Image" | "Video";
type GalleryCategory = "All" | "Campus" | "Events" | "Academics" | "Sports";
type GalleryItem = prettify<
  CollectionType & {
    title: string;
    tag: string;
    category: string;
    type: GalleryItemType;
    image?: Media;
    videoPreview?: Media;
    youtubeUrl?: string;
  }
>;
type GalleryItemWithoutTag = Omits<GalleryItem, "tag">;

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
    image?: Media;
    image_title?: string;
    image_subtitle?: string;
  }
>;

type PlacementData = prettify<
  CollectionType & {
    table: TableData;
    student_placement_percentage: number;
  }
>;

type ProjectBankItem = prettify<
  CollectionType & {
    title: string;
    department: DepartmentShortNameOnly;
    field: string;
    year: string;
    icon: IconField;
    description: string;
    guides: ShortText[];
    students: ShortText[];
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

type StudentAchievement = prettify<
  CollectionType & {
    image: Media;
    title: string;
    winner: string;
    description: string;
    date: string;
  }
>;

type StudentDeveloperType = "Student" | "Other";
type StudentDeveloper = prettify<
  CollectionType & {
    name: string;
    image: Media;
    type: StudentDeveloperType;
    batch?: string;
    department?: DepartmentShortNameOnly;
    otherFrom?: string;
    contribution: string;
    github: string;
    linkedin: string;
  }
>;

type SuccessStory = prettify<
  CollectionType & {
    name: string;
    department: DepartmentNameOnly;
    image: Media;
    youtube_url: string;
    passout_year: string;
    employer: string;
    salary: string;
    description: string;
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
