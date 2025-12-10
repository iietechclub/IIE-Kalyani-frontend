"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import BackendImage from "@/components/BackendImage";
import { Button } from "@/components/ui/button";

type Props = { slides: Banner[] };

export default function BannerCarousel({ slides }: Props) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  // const slides: BannerSlide[] = [
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MTk2NzQxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  //     title: "Welcome to IIE Kalyani",
  //     subtitle: "Ideal Institute of Engineering",
  //     description:
  //       "Building Tomorrow's Engineers Today with 14+ Years of Excellence",
  //     ctaPrimary: "Explore Programs",
  //     ctaSecondary: "Apply Now",
  //     icon: <LuGraduationCap className="size-16" />,
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1759495683438-28670547dc8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGxhYm9yYXRvcnklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYxOTczNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  //     title: "Shape Your Future",
  //     subtitle: "World-Class Education",
  //     description:
  //       "Join thousands of successful graduates who started their journey here",
  //     ctaPrimary: "View Programs",
  //     ctaSecondary: "Contact Us",
  //     icon: <LuAward className="size-16" />,
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYxOTIyODI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  //     title: "State-of-the-Art Facilities",
  //     subtitle: "Modern Learning Environment",
  //     description:
  //       "Experience education with cutting-edge technology and infrastructure",
  //     ctaPrimary: "Campus Tour",
  //     ctaSecondary: "Learn More",
  //     icon: <LuBookOpen className="size-16" />,
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1733426509854-10931d84009a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGxhYm9yYXRvcnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NjAzNjI4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  //     title: "Hands-On Learning",
  //     subtitle: "Practical Experience",
  //     description:
  //       "Develop real-world skills in our advanced laboratories and workshops",
  //     ctaPrimary: "View Facilities",
  //     ctaSecondary: "Admissions",
  //     icon: <LuUsers className="size-16" />,
  //   },
  // ];

  // Auto-advance slides

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, slides.length]);

  const _nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const _prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: must be interactive
    <div
      className="relative h-[650px] overflow-hidden bg-gray-900 sm:h-[500px] md:h-[600px] lg:h-[700px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map(
        ({ documentId, image, title, tag, subtitle, ctaButtons }, idx) => (
          <div
            key={documentId}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <div className="relative size-full">
                <BackendImage
                  fill
                  src={image.url}
                  alt={title}
                  className="object-cover"
                  preload
                />
              </div>
              {/* <ImageWithFallback
              src={image.url}
              alt={title}
              className="h-full w-full object-cover"
            /> */}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex size-full items-center">
                <div className="mt-[50px] mr-0 mb-0 ml-0 max-w-3xl animate-fade-in space-y-3 sm:space-y-4 md:space-y-6">
                  {/* Icon */}
                  {/* <div className="mb-2 text-primary sm:mb-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
                      {icon && <DynamicIcon icon={icon} />}
                    </div>
                  </div> */}

                  {/* Subtitle */}
                  <div className="inline-block rounded-full border border-white/30 bg-white/20 px-3 py-1.5 shadow-lg backdrop-blur-md sm:px-4 sm:py-2">
                    <p className="text-white text-xs uppercase tracking-wider sm:text-sm md:text-base">
                      {tag}
                    </p>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl text-white leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
                    {title}
                  </h1>

                  {/* Description */}
                  <p className="max-w-2xl text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    {subtitle}
                  </p>

                  {/* Call-to-Action Buttons */}
                  <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:gap-3 sm:pt-4 md:gap-4">
                    {ctaButtons.map((ctaButton) => (
                      <CTAButton {...ctaButton} key={ctaButton.id} />
                    ))}
                    {/* <Link href="/programs">
                    <Button
                      size="lg"
                      className="bg-primary text-sm text-white shadow-lg shadow-primary/50 backdrop-blur-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/60 hover:shadow-xl sm:text-base"
                    >
                      {slide.ctaPrimary}
                    </Button>
                  </Link> */}
                    {/* <Link href="/admission/apply">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/40 bg-white/20 text-sm text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/30 sm:text-base"
                    >
                      {slide.ctaSecondary}
                    </Button>
                  </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      )}

      {/* Slide Indicators */}
      <div className="-translate-x-1/2 absolute bottom-4 left-1/2 z-10 flex gap-1.5 sm:bottom-6 sm:gap-2 md:bottom-8">
        {slides.map(({ documentId }, idx) => (
          <button
            type="button"
            key={documentId}
            onClick={() => goToSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
              currentSlide === idx
                ? "w-8 bg-primary sm:w-12"
                : "w-1.5 bg-white/50 hover:bg-white/70 sm:w-2"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const CTAButton = ({ name, variant, url }: CTAButton) => (
  <Link href={url?.url ?? "#"}>
    {variant === "Primary" ? (
      <Button
        size="lg"
        className="cursor-pointer bg-primary text-sm text-white shadow-lg shadow-primary/50 backdrop-blur-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/60 hover:shadow-xl sm:text-base"
      >
        {name}
      </Button>
    ) : (
      <Button
        size="lg"
        variant="outline"
        className="cursor-pointer border-white/40 bg-white/20 text-sm text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/30 hover:text-white sm:text-base"
      >
        {name}
      </Button>
    )}
  </Link>
);
