import { LuCheck, LuFileText, LuGraduationCap } from "react-icons/lu";
import GithubImage from "@/components/GithubImage";
import { urlFromGithub } from "@/lib/utils";

export default function EligibilityBTechLateral() {
  const eligibilityCriteria = [
    {
      title: "Educational Qualification",
      points: [
        "Passed 3 years Diploma examination with at least 45% marks (40% for reserved category) in an appropriate branch of Engineering / Technology from a State Council / Board of Technical Education recognized by AICTE.",
        "OR B.Sc. degree from a recognized University as defined by UGC, with at least 45% marks (40% for reserved category) and passed 10+2 (Science) with Mathematics as a subject.",
        "Students from B.Sc. stream must clear Engineering Graphics / Engineering Drawing and Engineering Mechanics of the First Year Engineering programme along with Second Year subjects, as per MAKAUT norms.",
      ],
    },
    {
      title: "Entrance Examination",
      points: [
        "Qualified in JELET (Joint Entrance for Lateral Entry Test) conducted by WBJEEB, OR",
        "As per MAKAUT admission guidelines for lateral entry for the concerned academic session.",
      ],
    },
    {
      title: "Age Limit",
      points: [
        "No upper age limit as per current MAKAUT norms.",
        "Candidates should have completed Diploma or B.Sc. with required eligibility criteria.",
      ],
    },
  ];

  const lateralEntryBranches = [
    "Computer Science & Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electronics & Communication Engineering",
  ];

  const documentsRequired = [
    "Diploma Mark Sheets (all semesters) / B.Sc. Mark Sheets",
    "Diploma Certificate / B.Sc. Degree Certificate",
    "JELET Score Card / Rank Card",
    "10th Standard Mark Sheet and Certificate",
    "12th Standard Mark Sheet and Certificate (for B.Sc. candidates)",
    "Caste Certificate (if applicable)",
    "Domicile Certificate",
    "Passport Size Photographs",
    "Aadhar Card",
    "Migration Certificate",
    "Character / Conduct Certificate",
  ];

  const admissionProcess = [
    "Appear for JELET conducted by WBJEEB (or as per MAKAUT lateral entry notification).",
    "Register and participate in the centralized counselling process.",
    "Fill choices and receive seat allotment based on rank, category and preferences.",
    "Report to the institute for physical reporting and document verification.",
    "Complete fee payment and confirm admission as per institute schedule.",
  ];

  const notes = [
    "Lateral entry admission is for direct admission to the 2nd year of the B.Tech programme.",
    "Candidates must have studied relevant subjects in Diploma / B.Sc. as per the branch applied for.",
    "All admissions are subject to rules of MAKAUT, WBJEEB and AICTE for the respective academic year.",
    "All original documents must be produced at the time of verification; photocopies without originals will not be accepted.",
    "Students from B.Sc. stream may be required to clear additional subjects as prescribed by MAKAUT.",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-linear-to-r from-red-600 to-red-400 py-12 text-white sm:py-16 md:py-20">
        <GithubImage
          fill
          src="(admission)/eligibility/btech-lateral/banner.jpg"
          alt="B.Tech Lateral Entry Banner"
          className="object-cover blur-xs"
          preload
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="shrink-0 rounded-2xl bg-white/10 p-3 backdrop-blur-sm sm:p-4">
              <LuGraduationCap className="h-9 w-9 text-white sm:h-11 sm:w-11" />
            </div>
            <div className="min-w-0">
              <h1 className="mb-1 font-semibold text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                B.Tech Lateral Entry
              </h1>
              <p className="text-sm text-white/90 sm:text-base md:text-lg">
                Direct 2nd-year admission for Diploma and B.Sc. graduates as per
                JELET / MAKAUT norms.
              </p>
            </div>
          </div>

          <p className="max-w-3xl text-white/85 text-xs leading-relaxed sm:text-sm md:text-base">
            Candidates seeking lateral entry admission to B.Tech at IIE Kalyani
            must fulfil the academic, entrance and documentation requirements
            laid down by MAKAUT and WBJEEB.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="border-red-100/60 border-t">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
          {/* Quick info strip */}
          <section className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center rounded-full border border-red-100/70 bg-white px-3 py-1">
                <span className="mr-2 size-2 rounded-full bg-green-500" />
                Lateral Entry – B.Tech (2nd Year)
              </span>
              <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 px-3 py-1">
                Duration after entry: 3 years (6 semesters)
              </span>
            </div>
          </section>

          {/* Eligibility */}
          <section className="mb-12 sm:mb-14">
            <div className="mb-4 border-red-600 border-l-4 pl-4">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Eligibility Requirements
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">
                All candidates must satisfy the following academic and
                examination requirements.
              </p>
            </div>

            <div className="space-y-8">
              {eligibilityCriteria.map((item) => (
                <div key={item.title}>
                  <h3 className="mb-3 font-semibold text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-slate-700 text-sm sm:text-base"
                      >
                        <LuCheck className="h-5 w-5 shrink-0 text-red-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Branches Available */}
          <section className="mb-12 sm:mb-14">
            <div className="mb-4 border-red-600 border-l-4 pl-4">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Branches Available for Lateral Entry
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">
                Lateral entry candidates may be admitted to the following B.Tech
                branches, subject to seat availability.
              </p>
            </div>

            <ul className="grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2 sm:text-base">
              {lateralEntryBranches.map((branch) => (
                <li key={branch} className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>{branch}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Admission Process */}
          <section className="mb-12 sm:mb-14">
            <div className="mb-4 border-red-600 border-l-4 pl-4">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Admission Process (JELET)
              </h2>
            </div>

            <ol className="space-y-4 text-sm sm:text-base">
              {admissionProcess.map((step, idx) => (
                <li key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 font-semibold text-white text-xs sm:h-8 sm:w-8 sm:text-sm">
                      {idx + 1}
                    </div>
                    {idx + 1 !== admissionProcess.length && (
                      <div className="mt-1 w-px flex-1 bg-red-100" />
                    )}
                  </div>
                  <p className="pt-0.5 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Documents Required */}
          <section className="mb-12 sm:mb-14">
            <div className="mb-4 flex items-center gap-2 border-red-600 border-l-4 pl-4">
              <LuFileText className="h-5 w-5 text-red-600" />
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Documents Required at the Time of Admission
              </h2>
            </div>

            <ul className="grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2 sm:text-base">
              {documentsRequired.map((doc) => (
                <li key={doc} className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Important Notes */}
          <section className="mb-10 sm:mb-14">
            <div className="mb-4 border-red-600 border-l-4 pl-4">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Important Notes
              </h2>
            </div>

            <ul className="space-y-2 text-slate-700 text-sm sm:text-base">
              {notes.map((note) => (
                <li key={note} className="flex gap-2">
                  <span className="text-red-600">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Bottom info line */}
          <section className="border-gray-200 border-t pt-6 pb-10 text-slate-500 text-xs sm:text-sm">
            For latest lateral entry notifications, counselling schedules and
            detailed rules, candidates are advised to follow official WBJEEB and
            MAKAUT websites.
          </section>
        </div>
      </div>
    </main>
  );
}
