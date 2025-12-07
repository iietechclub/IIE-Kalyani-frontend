"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CarouselClient({
  contentItems,
  totalViews,
}: {
  contentItems: [WhyChoose];
  totalViews: number;
}) {
  const [currentView, setCurrentView] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentView((prev) => (prev + 1) % totalViews);
    }, 6000);

    return () => clearInterval(autoplayInterval);
  }, [totalViews]);

  const handleNext = () => {
    setCurrentView((prev) => (prev + 1) % totalViews);
  };

  const handlePrev = () => {
    setCurrentView((prev) => (prev - 1 + totalViews) % totalViews);
  };

  const handleDotClick = (index: number) => {
    setCurrentView(index);
  };

  return (
    <>
      <div className="scrollbar-hide flex items-stretch justify-center gap-4 overflow-x-auto pb-4 md:gap-6 lg:overflow-visible lg:pb-0">
        <AnimatePresence mode="wait">
          {[0, 1, 2].map((offset) => {
            const itemIndex = currentView + offset;
            if (itemIndex >= contentItems.length) return null;

            const item = contentItems[itemIndex];

            return (
              <motion.div
                key={`${item.documentId}-${currentView}`}
                className="flex w-64 flex-shrink-0 md:w-80"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-48 flex-shrink-0 overflow-hidden md:h-64">
                    <Image
                      src={item.image.url}
                      alt={item.image.alternativeText}
                      width={320}
                      height={256}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-grow flex-col p-4 md:p-6">
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
                    <p className="flex-grow text-gray-600 text-sm leading-relaxed md:text-base">
                      {item.description}
                    </p>

                    {/* Accent bar */}
                    <div className="mt-3 h-1 w-12 bg-gradient-to-r from-[#E63946] to-[#FF6B35] transition-all duration-300 group-hover:w-full md:mt-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="-translate-y-1/2 -translate-x-6 group absolute top-1/2 left-0 hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-[#E63946] hover:text-white lg:flex"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6 text-[#E63946] group-hover:text-white" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="-translate-y-1/2 group absolute top-1/2 right-0 hidden h-12 w-12 translate-x-6 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-[#E63946] hover:text-white lg:flex"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6 text-[#E63946] group-hover:text-white" />
      </button>

      {/* Pagination Dots */}
      <div className="mt-8 flex justify-center gap-3 md:mt-12">
        {Array.from({ length: totalViews }).map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => handleDotClick(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentView
                ? "h-3 w-12 bg-gradient-to-r from-[#E63946] to-[#FF6B35]"
                : "h-3 w-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to view ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
