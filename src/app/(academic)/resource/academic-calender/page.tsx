"use client";

import { useEffect, useState } from "react";
import { LuCalendar, LuDownload } from "react-icons/lu";

export default function AcademicCalendar() {
  // const pdfHref = "/pdfs/Academic-Calendar-IIE-Kalyani-2025-26.pdf";
  const pdfHref =
    "https://drive.google.com/file/d/1n1KNIHUhXr1ar_Ww8ROO-gwFk1fcZhR_/preview?usp=sharing";
  const [openPreview, setOpenPreview] = useState<string | null>(null);

  useEffect(() => {
    setOpenPreview(pdfHref);
  }, []);

  return (
    <div
      className="bg-gray-50 text-gray-900"
      // biome-ignore lint/suspicious/noExplicitAny: not important
      style={{ ["--iie-primary" as any]: "#c53030" }}
    >
      {/* Main Layout: Header (left) + PDF Viewer (right) */}
      <main className="flex- mx-auto h-full max-w-7xl items-stretch space-y-4 px-4 py-12 sm:space-y-6">
        {/* --- LEFT: Hero Section --- */}
        <section className="flex flex-wrap items-center justify-between rounded-xl bg-white- p-6 shadow-sm-">
          <div className="max-w-180">
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
          </div>

          <div>
            <a
              href={pdfHref}
              download
              className="inline-flex w-fit items-center gap-2 rounded-md bg-(--iie-primary) px-4 py-2 text-white shadow hover:bg-(--iie-primary)/90"
            >
              <LuDownload className="size-4" /> Download Calendar
            </a>
          </div>
        </section>

        {/* --- RIGHT: PDF Viewer iframe --- */}
        <div className="mx-auto h-130- h-160- h-300- max-w-3xl overflow-hidden rounded-xl border bg-white shadow">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div className="text-gray-600 text-sm">
              <span className="font-bold text-primary">Academic Calendar</span>{" "}
              Preview
            </div>
            {/* <a
              href={openPreview ?? pdfHref}
              download
              className="text-sm inline-flex items-center gap-2 bg-[var(--iie-primary)]/90 text-white px-3 py-1.5 rounded-md"
            >
              <Download className="w-4 h-4" /> Download
            </a> */}
          </div>

          <iframe
            src={openPreview ?? pdfHref}
            title="Academic Calendar PDF"
            className="aspect-[8.27/11.69] w-full"
          />
        </div>
      </main>
    </div>
  );
}
