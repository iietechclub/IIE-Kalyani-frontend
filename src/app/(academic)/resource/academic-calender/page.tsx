"use client";

import { useEffect, useState } from "react";
import { LuCalendar, LuDownload } from "react-icons/lu";

export default function AcademicCalendar() {
  const pdfHref = "/assets/academic-calendar-2024-25.pdf";
  const [openPreview, setOpenPreview] = useState<string | null>(null);

  useEffect(() => {
    setOpenPreview(pdfHref);
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-50 text-gray-900"
      // biome-ignore lint/suspicious/noExplicitAny: not important
      style={{ ["--iie-primary" as any]: "#c53030" }}
    >
      {/* Main Layout: Header (left) + PDF Viewer (right) */}
      <main className="max-w-7xl mx-auto h-full px-4 py-12 space-y-8">
        {/* --- LEFT: Hero Section ---
        <section className="flex h-full w-1/2 flex-col justify-center rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex items-center justify-center gap-3 self-start rounded-full bg-(--iie-primary)/10 px-3 py-1.5 text-(--iie-primary)">
            <LuCalendar className="h-5 w-5" />
            <span className="font-medium text-sm">Official Documents</span>
          </div>

          <h1 className="mb-3 font-bold text-3xl md:text-4xl">
            Academic Calendar{" "}
            <span className="text-(--iie-primary)">2024-25</span>
          </h1>

          <p className="mb-5 text-gray-600 text-sm leading-relaxed">
            Stay updated with all important academic events and examination
            schedules. You can preview or download the official academic
            calendar for 2024-25 directly.
          </p>

          <div className="flex gap-3">
            <a
              href={pdfHref}
              download
              className="inline-flex items-center gap-2 rounded-md bg-(--iie-primary) px-4 py-2 text-white shadow hover:bg-(--iie-primary)/90"
            >
              <LuDownload className="h-4 w-4" /> Download Calendar
            </a>
          </div>
        </section> */}
          <section className="flex items-center justify-between gap-6 rounded-xl bg-white p-6 shadow-sm">
        {/* Left content */}
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-(--iie-primary)/10 px-3 py-1.5 text-(--iie-primary)">
            <LuCalendar className="h-5 w-5" />
            <span className="font-medium text-sm">Official Documents</span>
          </div>

          <h1 className="mb-3 font-bold text-3xl md:text-4xl">
            Academic Calendar{" "}
            <span className="text-(--iie-primary)">2024-25</span>
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed">
            Stay updated with all important academic events and examination schedules.
            You can preview or download the official academic calendar for 2024-25 directly.
          </p>
        </div>

  {/* Right: Download button */}
  <a
    href={pdfHref}
    download
    className="shrink-0 inline-flex items-center gap-2 rounded-md bg-(--iie-primary) px-5 py-2.5 text-white shadow hover:bg-(--iie-primary)/90"
  >
    <LuDownload className="h-4 w-4" />
    Download Calendar
  </a>
</section>

        {/* --- RIGHT: PDF Viewer --- */}
        <div className="bg-white grow h-[80vh] border rounded-xl overflow-hidden shadow">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-sm text-black dark:text-black">
              Inline Preview
            </div>

            {/* <a
              href={openPreview ?? pdfHref}
              download
              className="text-sm inline-flex items-center gap-2 bg-[var(--iie-primary)]/90 text-white px-3 py-1.5 rounded-md"
            >
              <Download className="w-4 h-4" /> Download
            </a> */}
          </div>

          {/* PDF iframe */}
          <div className="w-full h-full">
            <iframe
              src="https://drive.google.com/file/d/1UNN_KvTfI79JkTDvR6HQdJyzPG9UP3yz/preview"
              title="Academic Calendar PDF"
              className="w-full h-full border-0"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
