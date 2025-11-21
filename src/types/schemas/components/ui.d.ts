// biome-ignore-all lint/correctness/noUnusedVariables: Globally used type

type CTAButtons = {
    name: string;
    variant: "Primary" | "Secondary" | "Ghost";
    containsLink: boolean;
    url?: Url;    
}