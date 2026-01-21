"use client";
import { MotionDiv } from "@/components/animated/motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { urlFromGithub } from "@/lib/utils";


/**
 * IQACLite
 * - Minimal box design (not heavy cards)
 * - Renders arrays (already present in your project) as clean lists/sections
 * - Replace placeholder links (pdfLink, docLink, etc.) with exact URLs from main site
 */

// --- example content arrays (kept from your earlier code) ---
const objectives = [
  "To develop a quality system for conscious, consistent and catalytic programmed action to improve the academic and administrative performance of the Institute",
  "To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.",
];

const functionalities = [
  "Development and application of quality benchmarks/parameters for the various academic and administrative activities of the Institute",
  "Facilitating the creation of a learner-centric environment conducive for quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process",
  "Arrangement for feedback responses from students, parents and other stakeholders on quality-related institutional processes",
  "Dissemination of information on the various quality parameters of higher education",
  "Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles",
  "Documentation of the various programmes/activities of the Institute, leading to quality improvement",
  "Acting as a nodal agency of the Institute for coordinating quality-related activities, including adoption and dissemination of good practices",
  "Development and maintenance of Institutional database through MIS for the purpose of maintaining /enhancing the institutional quality",
  "Development of Quality Culture in Institute",
  "Preparation of the Annual Quality Assurance Report (AQAR) of the Institute based on the quality parameters/assessment criteria developed by the relevant quality assurance body (like NAAC, NBA) in the prescribed format",
  "Bi-annual development of Quality Radars (QRs) and Ranking of Integral Units of Institute based on the AQAR",
];

const composition = [
  "Dr. Ashwini Kumar Sharma, Chairperson, Principal",
  "Dr. Bidisha Ghosh, Co-ordinator, Assistant Professor (BSH)",
  "Dr. Raghupati Goswami, Management Representative (Chairman)",
  "Mr. Subhasis Jana, Member, HOD (CSE)",
  "Mrs. Archita Basu, Member, Assistant Professor",
  "Mrs. Sangita Debnath, HOD (CE)",
  "Mrs. Arpita Dey, Member, Assistant Professor",
  "Mr. Kousik Sarkar, Member, Assistant Professor",
  "Mr. Suvam Mondal, Member, Student Representative",
  "Mr. Rebati Sarkar, Member, Alumni Student",
];

const planOfAction = [
  "Conduct the meeting at the beginning of each semester (Twice in a year).",
  "Prime agenda: review-based planning of academic policies for sustainable growth.",
  "Develop a monitoring system for quality assurance of the policies.",
  "Prepare a detailed Annual Quality Assurance Report (AQAR) at the end of the academic year and submit to Governing Body/University.",
];

const academicActivities = [
  "Organize interactive sessions with faculty following principal/CAC guidelines to strengthen Teaching-Learning process.",
  "Release guidelines regarding all academic activities before and during the commencement of each semester.",
  "Distribution of CMF to Departments before internal exams.",
  "Upload Academic plans (academic calendar) on college portal for student access.",
  "Continuous monitoring & maintenance of CMF (Content Management Framework).",
  "Attendance preparation, distribution and monthly compilation + low-attendance alerts to mentors.",
];

const administrativeActivities = [
  "Assist Principal Office in scheduling Governing Body, College Academic Council meetings.",
  "Help PO in constituting central committees (Discipline, Central facilities, Grievance, Student Activity, T&P, Purchase).",
  "Assist PO for record maintenance, documentation and budget allocation coordination.",
];

const minutesAgenda = [
  "Review ongoing activities aimed at quality enhancement & teaching-learning.",
  "Faculty seminars & meetings; soft skills enhancement.",
  "Check complaint box contents; student seminars, flip classes, tech quizzes.",
];

export default function IQACLite() {
  // Replace these placeholders with exact URLs from the live site if you want direct PDF links preserved:
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-red-50/30 to-white">
      {/* Breadcrumb - Removed due to component not available */}

      {/* Hero - uses same sizes & spacing you've insisted on; retains badge and CTA */}
      <header className="relative">
        <div className="relative h-64 overflow-hidden md:h-96">
          <MotionDiv
            initial={{ scale: 1.03 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={urlFromGithub("(admission)/eligibility/btech/banner.jpg")}
              alt="IQAC hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-red-500 to-black/30" />
          </MotionDiv>

          <div className="container relative z-10 mx-auto flex h-full items-center px-6 md:px-20">
            <div className="max-w-3xl text-white">
              <Badge className="mb-3 border-white/30 bg-white/20 text-white">
                IQAC — Quality Assurance Cell
              </Badge>
              <h1 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl">
                IQAC — Quality Assurance Cell
              </h1>
              <p className="mt-4 text-sm text-white/90 sm:text-base">
                The Internal Quality Assurance Cell (IQAC) at IIE Kalyani drives
                continuous improvement across academic and administrative
                processes — institutionalising best practices and strengthening
                quality culture.
              </p>

              {/* <div className="mt-6 flex gap-3">
                <a
                  href={pdfAqar}
                  className="inline-flex items-center rounded-md border border-white/20 bg-white px-4 py-2 text-rose-700 hover:bg-gray-100"
                >
                  AQAR / Reports (PDF)
                </a>

                <a
                  href={pdfBrochure}
                  className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-white/95 hover:bg-white/10"
                >
                  IQAC Brochure
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      {/* Main content - minimal boxes: subtle separators rather than heavy cards */}
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-10">
        {/* Objectives */}
        <section id="objectives" className="prose max-w-none">
          <h2 className="font-semibold text-2xl">Objectives</h2>
          <ul className="list-disc space-y-2 pl-6">
            {objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>

        {/* Proposed functionalities (kept as plain list with light separators) */}
        <section id="functionalities" className="prose max-w-none">
          <h2 className="font-semibold text-2xl">Proposed Functionalities</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {functionalities.map((f) => (
              <div
                key={f}
                className="rounded-lg border border-gray-100 bg-white/60 p-3"
              >
                <div className="text-sm">{f}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Composition & plan (two columns) */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium text-xl">Composition</h3>
            <ul className="list-disc space-y-1 pl-5">
              {composition.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-medium text-xl">Plan of Action</h3>
            <ol className="list-decimal space-y-1 pl-5">
              {planOfAction.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* Activities */}
        <section>
          <h3 className="mb-2 font-medium text-xl">
            Academic Activities (2023-2024)
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {academicActivities.map((a) => (
              <div key={a} className="text-muted-foreground text-sm">
                {a}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-2 font-medium text-xl">
            Administrative Activities
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            {administrativeActivities.map((ad) => (
              <li key={ad}>{ad}</li>
            ))}
          </ul>
        </section>

        <section id="minutes">
          <h3 className="mb-2 font-medium text-xl">
            Minutes of Meeting — Key Agenda
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {minutesAgenda.map((m) => (
              <div key={m} className="text-sm">
                {m}
              </div>
            ))}
          </div>
        </section>

        {/* Footer link area: preserve links / PDFs */}
        {/* <section className="border-gray-100 border-t pt-6">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <strong>Important documents:</strong>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href={pdfAqar} className="text-rose-600 hover:underline">
                  Annual Quality Assurance Report (AQAR) — PDF
                </a>
                <a href={pdfBrochure} className="text-rose-600 hover:underline">
                  IQAC Brochure — PDF
                </a>
                <a
                  href="https://iiekalyani.com/iqac/"
                  className="text-rose-600 hover:underline"
                >
                  Full IQAC Page on main site
                </a>
              </div>
            </div>

            <div className="text-muted-foreground text-sm">
              <div>
                Contact:{" "}
                <a
                  href="mailto:iqac@iiekalyani.com"
                  className="text-rose-600 hover:underline"
                >
                  iqac@iiekalyani.com
                </a>
              </div>
              <div className="mt-1">
                Phone:{" "}
                <a
                  href="tel:+911234567890"
                  className="text-rose-600 hover:underline"
                >
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
