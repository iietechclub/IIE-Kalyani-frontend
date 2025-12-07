import CarouselClient from "@/components/home/CarouselClient";

async function WhyChooseUs({ contentItems }: { contentItems: [WhyChoose] }) {
  // Fetch any server data if needed
  const totalViews = contentItems.length - 2; // Show 3 items at a time

  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-12 md:py-20">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-[#FFB627]/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex min-h-[600px] flex-col items-center gap-8 lg:flex-row lg:gap-0">
          {/* Left Section - Title (Always Visible) */}
          <div className="w-full text-center lg:w-1/3 lg:pr-12 lg:text-left">
            <h2
              className="text-[#E63946]"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: "1.2",
                fontWeight: "700",
              }}
            >
              Why Choose <span className="text-[#FF6B35]">IIE Kalyani?</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-[#E63946] to-[#FF6B35] lg:mx-0" />
          </div>

          {/* Right Section - Content Cards */}
          <div className="relative w-full lg:w-2/3">
            {/* Client Component for Carousel */}
            <CarouselClient
              contentItems={contentItems}
              totalViews={totalViews}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
