"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import {
  Award,
  Target,
  Users,
  FileText,
  Calendar,
  MapPin,
  TrendingUp,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

/**
 * IQACLite
 * - Minimal box design (not heavy cards)
 * - Renders arrays (already present in your project) as clean lists/sections
 * - Replace placeholder links (pdfLink, docLink, etc.) with exact URLs from main site
 */

const heroImage = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920';

// --- example content arrays (kept from your earlier code) ---
const objectives = [
  'To develop a quality system for conscious, consistent and catalytic programmed action to improve the academic and administrative performance of the Institute',
  'To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.',
];

const functionalities = [
  'Development and application of quality benchmarks/parameters for the various academic and administrative activities of the Institute',
  'Facilitating the creation of a learner-centric environment conducive for quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process',
  'Arrangement for feedback responses from students, parents and other stakeholders on quality-related institutional processes',
  'Dissemination of information on the various quality parameters of higher education',
  'Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles',
  'Documentation of the various programmes/activities of the Institute, leading to quality improvement',
  'Acting as a nodal agency of the Institute for coordinating quality-related activities, including adoption and dissemination of good practices',
  'Development and maintenance of Institutional database through MIS for the purpose of maintaining /enhancing the institutional quality',
  'Development of Quality Culture in Institute',
  'Preparation of the Annual Quality Assurance Report (AQAR) of the Institute based on the quality parameters/assessment criteria developed by the relevant quality assurance body (like NAAC, NBA) in the prescribed format',
  'Bi-annual development of Quality Radars (QRs) and Ranking of Integral Units of Institute based on the AQAR',
];

const composition = [
  'Dr. Ashwini Kumar Sharma, Chairperson, Principal',
  'Dr. Bidisha Ghosh, Co-ordinator, Assistant Professor (BSH)',
  'Dr. Raghupati Goswami, Management Representative (Chairman)',
  'Mr. Subhasis Jana, Member, HOD (CSE)',
  'Mrs. Archita Basu, Member, Assistant Professor',
  'Mrs. Sangita Debnath, HOD (CE)',
  'Mrs. Arpita Dey, Member, Assistant Professor',
  'Mr. Kousik Sarkar, Member, Assistant Professor',
  'Mr. Suvam Mondal, Member, Student Representative',
  'Mr. Rebati Sarkar, Member, Alumni Student',
];

const planOfAction = [
  'Conduct the meeting at the beginning of each semester (Twice in a year).',
  'Prime agenda: review-based planning of academic policies for sustainable growth.',
  'Develop a monitoring system for quality assurance of the policies.',
  'Prepare a detailed Annual Quality Assurance Report (AQAR) at the end of the academic year and submit to Governing Body/University.',
];

const academicActivities = [
  'Organize interactive sessions with faculty following principal/CAC guidelines to strengthen Teaching-Learning process.',
  'Release guidelines regarding all academic activities before and during the commencement of each semester.',
  'Distribution of CMF to Departments before internal exams.',
  'Upload Academic plans (academic calendar) on college portal for student access.',
  'Continuous monitoring & maintenance of CMF (Content Management Framework).',
  'Attendance preparation, distribution and monthly compilation + low-attendance alerts to mentors.',
];

const administrativeActivities = [
  'Assist Principal Office in scheduling Governing Body, College Academic Council meetings.',
  'Help PO in constituting central committees (Discipline, Central facilities, Grievance, Student Activity, T&P, Purchase).',
  'Assist PO for record maintenance, documentation and budget allocation coordination.',
];

const minutesAgenda = [
  'Review ongoing activities aimed at quality enhancement & teaching-learning.',
  'Faculty seminars & meetings; soft skills enhancement.',
  'Check complaint box contents; student seminars, flip classes, tech quizzes.',
];

export default function IQACLite() {
  // Replace these placeholders with exact URLs from the live site if you want direct PDF links preserved:
  const pdfAqar = 'https://iiekalyani.com/wp-content/uploads/.../AQAR.pdf'; // <- replace
  const pdfBrochure = 'https://iiekalyani.com/wp-content/uploads/.../IQAC-brochure.pdf'; // <- replace

  return (
    <div className="pt-20 md:pt-28 min-h-screen bg-gradient-to-br from-white via-red-50/30 to-white dark:from-gray-900 dark:via-red-950/20 dark:to-gray-900">
      {/* Breadcrumb - Removed due to component not available */}

      {/* Hero - uses same sizes & spacing you've insisted on; retains badge and CTA */}
      <header className="relative">
        <div className="relative overflow-hidden h-64 md:h-96">
          <motion.div
            initial={{ scale: 1.03 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImage}
              alt="IQAC hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-700/70 to-black/40" />
          </motion.div>

          <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <Badge className="mb-3 bg-white/20 text-white border-white/30">IQAC — Quality Assurance Cell</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                IQAC — Quality Assurance Cell
              </h1>
              <p className="mt-4 text-sm sm:text-base text-white/90">
                The Internal Quality Assurance Cell (IQAC) at IIE Kalyani drives continuous improvement across academic and administrative processes — institutionalising best practices and strengthening quality culture.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href={pdfAqar}
                  className="inline-flex items-center px-4 py-2 rounded-md border border-white/20 bg-white text-rose-700 hover:bg-gray-100"
                >
                  AQAR / Reports (PDF)
                </a>

                <a
                  href={pdfBrochure}
                  className="inline-flex items-center px-4 py-2 rounded-md border border-white/20 text-white/95 hover:bg-white/10"
                >
                  IQAC Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content - minimal boxes: subtle separators rather than heavy cards */}
      <main className="max-w-7xl mx-auto px-4 py-10 space-y-8">
        {/* Objectives */}
        <section id="objectives" className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Objectives</h2>
          <ul className="list-disc pl-6 space-y-2">
            {objectives.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </section>

        {/* Proposed functionalities (kept as plain list with light separators) */}
        <section id="functionalities" className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Proposed Functionalities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {functionalities.map((f, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/60 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                <div className="text-sm">{f}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Composition & plan (two columns) */}
        <section className="grid lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Composition</h3>
            <ul className="list-disc pl-5 space-y-1">
              {composition.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Plan of Action</h3>
            <ol className="list-decimal pl-5 space-y-1">
              {planOfAction.map((p, i) => <li key={i}>{p}</li>)}
            </ol>
          </div>
        </section>

        {/* Activities */}
        <section>
          <h3 className="text-xl font-medium mb-2">Academic Activities (2023-2024)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {academicActivities.map((a, i) => (
              <div key={i} className="text-sm text-muted-foreground">{a}</div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-2">Administrative Activities</h3>
          <ul className="list-disc pl-6 space-y-2">
            {administrativeActivities.map((ad, i) => <li key={i}>{ad}</li>)}
          </ul>
        </section>

        <section id="minutes">
          <h3 className="text-xl font-medium mb-2">Minutes of Meeting — Key Agenda</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {minutesAgenda.map((m, i) => (
              <div key={i} className="text-sm">{m}</div>
            ))}
          </div>
        </section>

        {/* Footer link area: preserve links / PDFs */}
        <section className="pt-6 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div>
              <strong>Important documents:</strong>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href={pdfAqar} className="text-rose-600 hover:underline">Annual Quality Assurance Report (AQAR) — PDF</a>
                <a href={pdfBrochure} className="text-rose-600 hover:underline">IQAC Brochure — PDF</a>
                <a href="https://iiekalyani.com/iqac/" className="text-rose-600 hover:underline">Full IQAC Page on main site</a>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <div>Contact: <a href="mailto:iqac@iiekalyani.com" className="text-rose-600 hover:underline">iqac@iiekalyani.com</a></div>
              <div className="mt-1">Phone: <a href="tel:+911234567890" className="text-rose-600 hover:underline">+91 12345 67890</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
