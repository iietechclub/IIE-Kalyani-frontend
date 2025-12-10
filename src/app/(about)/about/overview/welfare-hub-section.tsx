import { fetchAboutPageData } from "@/dal/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function WelfareHubSection() {
  const data = await fetchAboutPageData();
  return (
    <div className="bg-linear-to-br from-gray-100 to-white py-12 pt-2.5 pr-0 pb-5 pl-0 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl text-foreground sm:mb-8 sm:text-3xl md:text-4xl">
          Ideal Science and Research Welfare Hub
        </h2>

        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed sm:space-y-6 sm:text-base">

          <BlocksRenderer content={data.welfare_hub_description}/>

          <div className="my-6 rounded-r-lg border-primary border-l-4 bg-primary/10 p-4 shadow-lg backdrop-blur-sm sm:my-8 sm:p-6">
            <p className="font-semibold text-base text-foreground sm:text-lg">
              {data.welfare_hub_tagline}
            </p>
          </div>

          <h3 className="mt-6 mb-3 text-foreground text-xl sm:mt-8 sm:mb-4 sm:text-2xl">
            Ideal Institute of Engineering
          </h3>
            <BlocksRenderer content={data.welfare_hub_org_description}/>

          <div className="my-6 rounded-lg border border-white/20 bg-white/60 p-4 shadow-lg backdrop-blur-lg sm:my-8 sm:p-6">
            <p className="font-semibold text-base text-foreground italic sm:text-lg">
              {data.welfare_hub_org_tagline}
            </p>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link to="/about/overview" className="w-full sm:w-auto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                Learn More About IIE
              </Button>
            </Link>
            <Link to="/admission/apply" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Apply Now
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
