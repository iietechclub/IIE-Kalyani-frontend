"use client";
import Image from "next/image";
import { useState } from "react";
import { LuArchive, LuBookOpen, LuImage, LuUsers } from "react-icons/lu";
import { MotionDiv, MotionSvg } from "@/components/animated/motion";

export default function LibraryPage() {
  const _facilities = [
    {
      icon: LuBookOpen,
      title: "Reading Halls",
      desc: "Quiet & spacious seating for 200+ students",
    },
    {
      icon: LuArchive,
      title: "Archive & Thesis",
      desc: "Access to theses, reports and institutional repository",
    },
    {
      icon: LuUsers,
      title: "Group Study Rooms",
      desc: "Bookable rooms for collaborative work",
    },
    {
      icon: LuImage,
      title: "Digital Library",
      desc: "E-books, journals and multimedia resources",
    },
  ];

  const galleryImages = [
    "/images/library/thumb-1.jpg",
    "/images/library/thumb-2.jpg",
    "/images/library/thumb-3.jpg",
    "/images/library/thumb-4.jpg",
    "/images/library/thumb-5.jpg",
    "/images/library/thumb-6.jpg",
  ];

  const [activeTab, setActiveTab] = useState<"about" | "resources">("about");

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <header  className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-[320px] w-full bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80')] bg-center bg-cover opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-700/60 to-transparent"></div>
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 lg:flex-row">
          <div className="z-10 flex-1 text-white">
            <MotionDiv
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-4 rounded-xl p-3">
                <LuBookOpen className="h-12 w-12 text-white" />
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">
                    Institute Library
                  </h1>
                  <p className="mt-1 text-sm text-white/90 md:text-base">
                    Knowledge hub — books, journals, digital resources &
                    research support
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <nav className="mb-6 flex gap-2 border-b pb-4">
            <button
              type="button"
              onClick={() => setActiveTab("about")}
              className={`rounded-md px-4 py-2 font-medium text-sm ${
                activeTab === "about"
                  ? "bg-red-600 text-white"
                  : "text-slate-700 hover:bg-gray-50"
              }`}
            >
              About
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("resources")}
              className={`rounded-md px-4 py-2 font-medium text-sm ${
                activeTab === "resources"
                  ? "bg-red-600 text-white"
                  : "text-slate-700 hover:bg-gray-50"
              }`}
            >
              Resources
            </button>
          </nav>

          {/* About Section */}
          {activeTab === "about" && (
            <MotionDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <article className="prose prose-sm md:prose-base max-w-none text-slate-700">
                <h2 className="font-bold text-[30px]">Introduction</h2>
                <p>
                  The library is a treasure house of knowledge. A well-stocked
                  library is an asset to the college. IIE is proud of its
                  library. It contains over 15,000 volumes of books, journals,
                  and magazines. The library is fully automated and subscribes
                  to J-Gate and DELNET for global e-journal access.
                </p>

                <p>
                  The digital library provides access to e-books, research
                  databases, and video lectures. Students can search, issue, and
                  renew books online using KOHA software.
                </p>

                <div className="mt-6 rounded-xl border border-yellow-300/50 bg-yellow-50 p-4">
                  <p className="text-sm text-yellow-800">
                    ⚠️ Further details pending — please confirm final
                    requirements with the Library Team.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="mb-3">Gallery</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {galleryImages.map((src, i) => (
                      <div
                        key={src}
                        className="relative h-32 w-full overflow-hidden rounded-lg bg-gray-100"
                      >
                        <Image
                          fill
                          src={src}
                          alt={`Library ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </MotionDiv>
          )}

          {/* Resources Section (Under Development with gears) */}
          {activeTab === "resources" && (
            <MotionDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex min-h-[60vh] flex-col items-center justify-center text-center"
            >
              {/* Gears Animation */}
              <div className="relative mb-8 flex items-center justify-center">
                {/* Large Gear */}
                <MotionSvg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-28 w-28 text-gray-300"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                >
                  <path
                    fill="currentColor"
                    d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 00.12-.65l-2-3.46a.5.5 0 00-.6-.22l-2.49 1a7.007 7.007 0 00-1.69-.98l-.38-2.65A.5.5 0 0014 1h-4a.5.5 0 00-.5.43l-.38 2.65c-.6.25-1.17.57-1.69.98l-2.49-1a.5.5 0 00-.6.22l-2 3.46a.5.5 0 00.12.65L4.57 10c-.05.32-.07.66-.07 1s.02.68.07 1L2.46 14.65a.5.5 0 00-.12.65l2 3.46c.14.24.44.34.7.22l2.49-1c.52.41 1.09.73 1.69.98l.38 2.65c.05.26.27.43.5.43h4c.23 0 .45-.17.5-.43l.38-2.65c.6-.25 1.17-.57 1.69-.98l2.49 1c.26.11.56.02.7-.22l2-3.46a.5.5 0 00-.12-.65L19.43 14c.05-.32.07-.66.07-1s-.03-.66-.07-.98zM12 15.5A3.5 3.5 0 1012 8a3.5 3.5 0 000 7.5z"
                  />
                </MotionSvg>

                {/* Small Gear */}
                <MotionSvg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="absolute right-[-35px] bottom-[-20px] h-14 w-14 text-red-600"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                >
                  <path
                    fill="currentColor"
                    d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65a.5.5 0 00.12-.65l-2-3.46a.5.5 0 00-.6-.22l-2.49 1a7.007 7.007 0 00-1.69-.98l-.38-2.65A.5.5 0 0014 1h-4a.5.5 0 00-.5.43l-.38 2.65c-.6.25-1.17.57-1.69.98l-2.49-1a.5.5 0 00-.6.22l-2 3.46a.5.5 0 00.12.65L4.57 10c-.05.32-.07.66-.07 1s.02.68.07 1L2.46 14.65a.5.5 0 00-.12.65l2 3.46c.14.24.44.34.7.22l2.49-1c.52.41 1.09.73 1.69.98l.38 2.65c.05.26.27.43.5.43h4c.23 0 .45-.17.5-.43l.38-2.65c.6-.25 1.17-.57 1.69-.98l2.49 1c.26.11.56.02.7-.22l2-3.46a.5.5 0 00-.12-.65L19.43 14c.05-.32.07-.66.07-1s-.03-.66-.07-.98zM12 15.5A3.5 3.5 0 1012 8a3.5 3.5 0 000 7.5z"
                  />
                </MotionSvg>
              </div>

              <h2 className="mb-2 font-semibold text-2xl">Work in Progress</h2>
              <p className="mx-auto max-w-md text-muted-foreground text-sm">
                The library’s digital resources section is currently under
                construction. We’re updating our catalog and integrating new
                e-learning tools.
              </p>

              <div className="mt-6 flex justify-center gap-3">
                <a
                  href="/"
                  className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Go Home
                </a>
                <button
                  type="button"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="rounded-md border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
                >
                  Back to Top
                </button>
              </div>
            </MotionDiv>
          )}
        </div>
      </div>
    </main>
  );
}
