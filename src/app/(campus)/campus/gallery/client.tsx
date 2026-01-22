"use client";
import { useState } from "react";
import { LuCamera } from "react-icons/lu";
import { MotionDiv, MotionFigure } from "@/components/animated/motion";
import BackendImage from "@/components/BackendImage";
import GithubImage from "@/components/GithubImage";

export default function GalleryPageClient({ gallery_items }: GalleryPageData) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const galleryCategories = [
    { name: "All", aria: "All Photos" },
    { name: "Campus", aria: "Campus Life" },
    { name: "Events", aria: "Events" },
    { name: "Academics", aria: "Academics" },
    { name: "Sports", aria: "Sports" },
  ] as const;

  // const galleryImages = [
  //   {
  //     id: 1,
  //     title: "Annual Convocation 2024",
  //     category: "events",
  //     src: "(campus)/campus/gallery/Annual_convocation.JPG",
  //     date: "Nov 2025",
  //   },
  //   {
  //     id: 2,
  //     title: "Campus Infrastructure",
  //     category: "campus",
  //     src: "(home)/why-choose-iie/vibrant-campus.jpg",
  //     date: "Nov 2024",
  //   },
  //   {
  //     id: 3,
  //     title: "Tech Fest 2024",
  //     category: "events",
  //     src: "(campus)/campus/gallery/Cultural_Night.jpg",
  //     date: "Oct 2024",
  //   },
  //   {
  //     id: 4,
  //     title: "Computer Lab Session",
  //     category: "academics",
  //     src: "(campus)/campus/gallery/Computer_lab.JPG",
  //     date: "Sep 2024",
  //   },
  //   {
  //     id: 5,
  //     title: "Cricket Championship",
  //     category: "sports",
  //     src: "(campus)/campus/gallery/Cricket_Tournament.jpg",
  //     date: "Aug 2024",
  //   },
  //   {
  //     id: 6,
  //     title: "Cultural Night",
  //     category: "events",
  //     src: "(campus)/campus/gallery/Cultural_Night.jpg",
  //     date: "Aug 2024",
  //   },
  //   {
  //     id: 7,
  //     title: "Central Library",
  //     category: "campus",
  //     src: "(campus)/campus/gallery/Library.JPG",
  //     date: "Jul 2024",
  //   },
  //   {
  //     id: 8,
  //     title: "Engineering Workshop",
  //     category: "academics",
  //     src: "(campus)/campus/gallery/Tata_Social_Enterprise.jpg",
  //     date: "Jun 2024",
  //   },
  //   {
  //     id: 9,
  //     title: "Football Tournament",
  //     category: "sports",
  //     src: "(campus)/campus/gallery/Football_Tournament.jpg",
  //     date: "May 2024",
  //   },
  //   {
  //     id: 10,
  //     title: "Independence Day Celebration",
  //     category: "events",
  //     src: "(campus)/campus/gallery/Independence.jpg",
  //     date: "Aug 2024",
  //   },
  //   {
  //     id: 11,
  //     title: "Student Lounge Area",
  //     category: "campus",
  //     src: "(campus)/campus/gallery/Canteen_Lounge.jpg",
  //     date: "Apr 2024",
  //   },
  //   {
  //     id: 12,
  //     title: "Science Exhibition",
  //     category: "academics",
  //     src: "(campus)/campus/gallery/Science_exhibition.jpg",
  //     date: "Mar 2024",
  //   },
  // ] as const;

  // generate random heights once so layout is 'random' and stable
  // const _imageHeights = useMemo(() => {
  //   const rng = (seed: number) => {
  //     let s = seed;
  //     return () => {
  //       s = (s * 9301 + 49297) % 233280;
  //       return s / 233280;
  //     };
  //   };
  //   const rand = rng(12345);
  //   return galleryImages.reduce<Record<number, number>>((acc, img) => {
  //     const h = Math.round(160 + Math.floor(rand() * 260)); // 160..420
  //     acc[img.id] = h;
  //     return acc;
  //   }, {});
  // }, [galleryImages.reduce]);

  const filtered =
    activeCategory === "All"
      ? gallery_items
      : gallery_items.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-indigo-50/30 to-white text-black">
      {/* HERO BANNER */}
      <header className="relative">
        <div className="relative h-48 w-full bg-center bg-cover bg-no-repeat sm:h-64 md:h-80 lg:h-96">
          {/* dark overlay for contrast */}
          <GithubImage
            fill
            src="(campus)/campus/gallery/banner.JPG"
            alt="Campus Gallery Banner"
            className="object-cover blur-xs"
            preload
          />

          <div className="absolute inset-0 bg-black/50" />

          {/* subtle decorative shapes (hidden on very small screens) */}
          <div className="-left-10 -top-10 pointer-events-none absolute hidden size-36 rounded-full bg-white/8 blur-2xl sm:block" />
          <div className="pointer-events-none absolute right-8 bottom-4 hidden size-44 rounded-full bg-pink-400/15 blur-2xl sm:block" />

          <div className="container relative z-10 mx-auto flex h-full items-center px-3 pl-8 sm:px-4 sm:pl-16 md:pl-32">
            <MotionDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-white"
            >
              {/* badge */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-2 py-0.5 sm:mb-4 sm:px-3 sm:py-1">
                <LuCamera className="size-4 text-white sm:size-5" />
                <span className="text-[0.7rem] sm:text-sm">Campus Gallery</span>
              </div>

              {/* heading — same font, responsive size */}
              <h1 className="mb-2 font-semibold text-[1rem] sm:mb-3 sm:text-[1.50rem] md:text-[1.75rem]">
                Memories, Moments & Events — IIE Kalyani
              </h1>

              {/* paragraph */}
              <p className="mb-3 text-[0.50rem] text-white/90 sm:mb-4 sm:text-sm md:text-base">
                Browse through highlights from past events, campus life and
                academic moments. Click an image to view the full-sized photo.
              </p>

              {/* button */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("gallery-grid")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-md bg-red-600 px-3 py-1 text-[0.7rem] text-white shadow hover:bg-red-700 sm:px-4 sm:py-2 sm:text-sm"
                >
                  View Photos
                </button>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Intro + category buttons */}
      <section className="container mx-auto px-4 pt-10">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-muted-foreground">
            Our photo gallery captures the spirit of campus: energetic fests,
            focused academic sessions, sports moments and everyday student life.
          </p>
        </div>

        {/* category buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveCategory(cat.name)}
              className={`rounded-full px-2 py-1.5 text-[0.70rem] transition-shadow sm:px-3 sm:py-2 sm:text-sm md:px-4 md:text-base ${
                activeCategory === cat.name
                  ? "bg-red-600 text-white shadow-lg"
                  : "border bg-white text-gray-700"
              }
              `}
              aria-pressed={activeCategory === cat.name}
              aria-label={cat.aria}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      <main id="gallery-grid" className="container mx-auto px-4 pb-20">
        <div className="grid auto-rows-[120px] grid-cols-3 gap-3 sm:auto-rows-[150px] sm:grid-cols-4 lg:auto-rows-[180px] lg:grid-cols-5">
          {filtered
            .filter((e) => !!e.image)
            .map(
              (img, idx) =>
                img.image && (
                  <MotionFigure
                    key={img.documentId}
                    className={`relative overflow-hidden rounded-lg bg-gray-100 shadow-sm ${
                      idx % 7 === 0
                        ? "col-span-2 row-span-2"
                        : idx % 5 === 0
                          ? "row-span-2"
                          : idx % 6 === 0
                            ? "col-span-2"
                            : ""
                    }
        `}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open(
                        img.image?.url,
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    {/* IMAGE */}
                    <BackendImage
                      fill
                      title={img.title}
                      src={img.image.url}
                      alt={img.title}
                      loading={idx < 6 ? "eager" : "lazy"}
                      className="size-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    {/* CAPTION — hidden on mobile */}
                    {/* <figcaption className="absolute inset-x-0 bottom-0 hidden bg-white/80 p-2 text-[0.75rem] text-gray-700 sm:block">
                      <div className="font-medium">{img.title}</div>
                      <div className="text-[0.65rem] text-muted-foreground">
                        {img.date}
                      </div>
                    </figcaption> */}
                  </MotionFigure>
                ),
            )}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">
            No images in this category.
          </div>
        )}
      </main>
    </div>
  );
}
