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
      <main className="mx-auto flex h-full max-w-7xl items-start gap-6 px-4 py-12">
        {/* --- LEFT: Hero Section --- */}
        <section className="flex h-full w-1/2 flex-col justify-center rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex items-center justify-center gap-3 self-start rounded-full bg-[var(--iie-primary)]/10 px-3 py-1.5 text-[var(--iie-primary)]">
            <LuCalendar className="h-5 w-5" />
            <span className="font-medium text-sm">Official Documents</span>
          </div>

          <h1 className="mb-3 font-bold text-3xl md:text-4xl">
            Academic Calendar{" "}
            <span className="text-[var(--iie-primary)]">2024–25</span>
          </h1>

          <p className="mb-5 text-gray-600 text-sm leading-relaxed">
            Stay updated with all important academic events and examination
            schedules. You can preview or download the official academic
            calendar for 2024–25 directly.
          </p>

          <div className="flex gap-3">
            <a
              href={pdfHref}
              download
              className="inline-flex items-center gap-2 rounded-md bg-[var(--iie-primary)] px-4 py-2 text-white shadow hover:bg-[var(--iie-primary)]/90"
            >
              <LuDownload className="h-4 w-4" /> Download Calendar
            </a>
          </div>
        </section>

        {/* --- RIGHT: PDF Viewer --- */}
        <div className="h-24 grow overflow-hidden rounded-xl border bg-white shadow">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div className="text-gray-600 text-sm">Inline Preview</div>
            {/* <a
              href={openPreview ?? pdfHref}
              download
              className="text-sm inline-flex items-center gap-2 bg-[var(--iie-primary)]/90 text-white px-3 py-1.5 rounded-md"
            >
              <Download className="w-4 h-4" /> Download
            </a> */}
          </div>

          {/* PDF iframe */}
          <div className="h-full w-full">
            <iframe
              src={openPreview ?? pdfHref}
              title="Academic Calendar PDF"
              className="h-full w-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
