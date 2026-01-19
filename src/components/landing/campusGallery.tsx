"use client";
import Link from "next/link";
import { useState } from "react";
import { LuPlay } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { MotionDiv, MotionH3 } from "../animated/motion";
import BackendImage from "../BackendImage";

type Props = { tagline: string; galleryItems: GalleryItem[] };

export default function CampusGallery({ tagline, galleryItems }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItemColors = [
    "#E63946",
    "#FF6B35",
    "#FFB627",
    "#E63946",
    "#FF6B35",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#FFB627]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#E63946]/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <MotionDiv
          className="mb-10 text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-3 text-[#E63946] md:mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
          >
            Campus <span className="text-[#FF6B35]">Life Gallery</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty px-4 text-base text-gray-600 md:text-xl">
            {tagline}
          </p>
        </MotionDiv>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {galleryItems.map((item, idx) => {
            const color = galleryItemColors[idx % galleryItemColors.length];
            return (
              <MotionDiv
                key={item.title}
                className={cn(
                  "group relative cursor-pointer",
                  idx === 0 && "md:row-span-2",
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <MotionDiv
                  className="relative h-full overflow-hidden rounded-lg shadow-lg md:rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      idx === 0 ? "h-full" : "h-35 md:h-70",
                    )}
                  >
                    <MotionDiv
                      className="size-full"
                      animate={{ scale: hoveredIndex === idx ? 1.1 : 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.type === "Image" && item.image?.url && (
                        <BackendImage
                          fill
                          src={item.image?.url}
                          alt={item.title}
                          className="size-full object-cover"
                        />
                      )}
                    </MotionDiv>

                    {/* Overlay */}
                    <MotionDiv
                      className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: hoveredIndex === idx ? 0.8 : 0.5 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Category badge */}
                    <MotionDiv
                      className="absolute top-2 right-2 rounded-full px-2 py-0.5 text-white text-xs backdrop-blur-sm md:top-4 md:right-4 md:px-3 md:py-1 md:text-sm"
                      style={{ backgroundColor: `${color}CC` }}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      {item.tag}
                    </MotionDiv>

                    {/* Content */}
                    <div className="absolute right-0 bottom-0 left-0 p-2 md:p-6">
                      <MotionH3
                        className="mb-1 text-white text-xs md:mb-2 md:text-base"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredIndex === idx ? 0 : 10,
                          opacity: hoveredIndex === idx ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.title}
                      </MotionH3>

                      <MotionDiv
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredIndex === idx ? 0 : 20,
                          opacity: hoveredIndex === idx ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="hidden md:block"
                      >
                        <Link
                          href="/campus/gallery"
                          className="flex items-center gap-2 text-white transition-colors hover:text-[#FCBF49]"
                        >
                          <LuPlay className="size-4" />
                          <span className="text-sm">View Gallery</span>
                        </Link>
                      </MotionDiv>
                    </div>

                    {/* Accent border on hover */}
                    <MotionDiv
                      className="pointer-events-none absolute inset-0 rounded-lg border-2 md:rounded-2xl md:border-4"
                      style={{ borderColor: color }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === idx ? 0.5 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </MotionDiv>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
