"use client";
import { AnimatePresence } from "motion/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { MotionDiv } from "../animated/motion";
import BackendImage from "../BackendImage";

type Props = { why_choose_cards: WhyChoose[] };
const WhyChooseUs = ({ why_choose_cards: contentItems }: Props) => {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-16">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-[#FFB627]/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex min-h-[600px] flex-col items-center gap-8 xl:flex-row xl:gap-0">
          {/* Left Section - Title (Always Visible) */}
          <MotionDiv
            className="w-full text-center lg:pr-12 lg:text-left xl:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
          >
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
            <div className="mx-auto mt-6 h-1 w-24 bg-linear-to-r from-[#E63946] to-[#FF6B35] lg:mx-0" />
          </MotionDiv>

          {/* Right Section - Content Cards */}
          <div className="relative w-full lg:w-2/3">
            <div className="scrollbar-hide flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto pb-4 md:gap-6 lg:pb-0">
              {contentItems.map((item, offset) => (
                <AnimatePresence key={item.documentId} mode="wait">
                  <MotionDiv
                    className="flex w-56 shrink-0 snap-start md:w-72"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{
                      duration: 0.2,
                      delay: offset * 0.1,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                      {/* Image */}
                      <div className="relative h-48 shrink-0 overflow-hidden md:h-64">
                        <div className="size-full transition-transform duration-500 group-hover:scale-110">
                          <BackendImage
                            fill
                            src={item.image.url}
                            alt={item.title}
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="flex grow flex-col p-4 md:p-6">
                        <h3
                          className="mb-2 text-[#E63946] md:mb-3"
                          style={{
                            fontSize: "clamp(1rem, 2vw, 1.25rem)",
                            fontWeight: "700",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p className="line-clamp-3 grow text-gray-600 text-sm leading-relaxed md:text-base">
                          {item.description}
                        </p>

                        {/* Accent bar */}
                        <div className="mt-3 h-1 w-12 bg-linear-to-r from-[#E63946] to-[#FF6B35] transition-all duration-300 group-hover:w-full md:mt-4" />
                      </div>
                    </div>
                  </MotionDiv>
                </AnimatePresence>
              ))}
            </div>

            {/* Navigation Arrows - Hidden on mobile */}
            {/* <button
              type="button"
              // onClick={handlePrev}
              className="-translate-y-1/2 -translate-x-6 group absolute top-1/2 left-0 hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-[#E63946] hover:text-white lg:flex"
              aria-label="Previous"
            >
              <LuChevronLeft className="h-6 w-6 text-[#E63946] group-hover:text-white" />
            </button>

            <button
              type="button"
              // onClick={handleNext}
              className="-translate-y-1/2 group absolute top-1/2 right-0 hidden h-12 w-12 translate-x-6 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-[#E63946] hover:text-white lg:flex"
              aria-label="Next"
            >
              <LuChevronRight className="size-6 text-[#E63946] group-hover:text-white" />
            </button> */}
          </div>
        </div>

        {/* Pagination Dots */}
        {/* <div className="mt-8 flex justify-center gap-3 md:mt-12">
          {Array.from({ length: totalViews }).map((_, idx) => (
            <button
              type="button"
              key={idx}
              // onClick={() => handleDotClick(idx)}
              className={cn("rounded-full transition-all duration-300 ${
                idx === currentView",
                  ? "h-3 w-12 bg-linear-to-r from-[#E63946] to-[#FF6B35]"
                  : "size-3 bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to view ${idx + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
