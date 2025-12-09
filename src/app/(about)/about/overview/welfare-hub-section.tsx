import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
  description: RichTextBlocks;
  tagline: string;
  org_description: RichTextBlocks;
  org_tagline: string;
};
export default function WelfareHubSection({
  description,
  tagline,
  org_description,
  org_tagline,
}: Props) {
  return (
    <div className="bg-linear-to-br from-gray-100 to-white py-12 pt-2.5 pr-0 pb-5 pl-0 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl text-foreground sm:mb-8 sm:text-3xl md:text-4xl">
          Ideal Science and Research Welfare Hub
        </h2>

        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed sm:space-y-6 sm:text-base">
          <BlocksRenderer content={description} />

          <div className="my-6 rounded-r-lg border-primary border-l-4 bg-primary/10 p-4 shadow-lg backdrop-blur-sm sm:my-8 sm:p-6">
            <p className="font-semibold text-base text-foreground sm:text-lg">
              {tagline}
            </p>
          </div>

          <h3 className="mt-6 mb-3 text-foreground text-xl sm:mt-8 sm:mb-4 sm:text-2xl">
            Ideal Institute of Engineering
          </h3>

          <BlocksRenderer content={org_description} />

          <div className="my-6 rounded-lg border border-white/20 bg-white/60 p-4 shadow-lg backdrop-blur-lg sm:my-8 sm:p-6">
            <p className="font-semibold text-base text-foreground italic sm:text-lg">
              {org_tagline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
