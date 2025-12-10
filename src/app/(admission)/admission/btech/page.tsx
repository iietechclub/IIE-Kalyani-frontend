import { LuGraduationCap , LuFileText  } from "react-icons/lu";
import {CheckmarkIcon} from "@/components/checkmark-icon";

export default function EligibilityBTech() {
  const eligibilityCriteria = [
    {
      title: "Educational Qualification",
      points: [
        "Passed 10+2 examination with Physics and Mathematics as compulsory subjects.",
        "One of: Chemistry / Computer Science / Biology / Biotechnology / Technical Vocational subject.",
        "Minimum 45% marks (40% for SC/ST candidates) in the above subjects taken together.",
      ],
    },
    {
      title: "Entrance Examination",
      points: [
        "Qualified in WBJEE (West Bengal Joint Entrance Examination), OR",
        "Valid JEE Main score, OR",
        "As per MAKAUT admission guidelines for the academic session.",
      ],
    },
    {
      title: "Age Limit",
      points: [
        "No upper age limit as per MAKAUT norms.",
        "Candidates must have passed 10+2 or equivalent examination.",
      ],
    },
  ];

  const branchesOffered = [
    "Computer Science & Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electronics & Communication Engineering",
    "Artificial Intelligence & Machine Learning",
  ];

  const documentsRequired = [
    "10th Mark Sheet & Certificate",
    "12th Mark Sheet & Certificate",
    "WBJEE / JEE Main Scorecard",
    "Caste Certificate (if applicable)",
    "Domicile Certificate",
    "Passport Size Photographs",
    "Aadhar Card",
    "Migration Certificate (if applicable)",
    "Character / Conduct Certificate",
  ];

  const notes = [
    "Percentage calculation follows MAKAUT norms.",
    "Candidates must appear in person for document verification.",
    "Admission is subject to verification of original documents.",
    "Seats are allocated based on merit and availability.",
    "For detailed rules, refer to MAKAUT’s official admission guidelines.",
  ];

  return (
    <div className="min-h-screen bg-slate-50  text-slate-900">

     
      {/* ===== HERO (full width, your style) ===== */}
      <header className="relative bg-gradient-to-r from-red-600 to-red-400 text-white py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-2xl flex-shrink-0">
              <LuGraduationCap  className="h-9 w-9 sm:h-11 sm:w-11 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-1">
                B.Tech Eligibility Criteria
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90">
                Requirements for admission to undergraduate engineering programs at IIE Kalyani.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-white/85 max-w-3xl leading-relaxed">
            Carefully read the academic qualification, entrance exam requirements, branches offered,
            and mandatory documents before applying through WBJEE / JEE or as per MAKAUT guidelines.
          </p>
        </div>
      </header>

      {/* ===== MAIN CONTENT (full-page feel, simple & modern) ===== */}
      <main className="border-t border-red-100/60 border-red-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
          {/* Quick summary strip */}
          <section className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center rounded-full bg-white bg-gray-900 px-3 py-1 border border-red-100/70 border-red-900/40">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                MAKAUT, West Bengal – B.Tech
              </span>
              <span className="inline-flex items-center rounded-full bg-white/80 bg-gray-900 px-3 py-1 border border-gray-200 border-gray-800">
                Duration: 4 years (8 semesters)
              </span>
            </div>
          </section>

          {/* ===== Eligibility Requirements ===== */}
          <section className="mb-12 sm:mb-14">
            <div className="border-l-4 border-red-600 pl-4 mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Eligibility Requirements
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1">
                Candidates must satisfy all of the following conditions to be considered for B.Tech admission.
              </p>
            </div>

            <div className="space-y-8">
              {eligibilityCriteria.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm sm:text-base text-slate-700 text-slate-300"
                      >
                        <CheckmarkIcon className="w-5 h-5 flex-shrink-0 text-red-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Branches Offered ===== */}
          <section className="mb-12 sm:mb-14">
            <div className="border-l-4 border-red-600 pl-4 mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                B.Tech Programs Offered
              </h2>
              <p className="text-sm sm:text-base text-slate-600 text-slate-300 mt-1">
                Following undergraduate engineering branches are available at IIE Kalyani.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-sm sm:text-base">
              {branchesOffered.map((branch, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <span>{branch}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Documents Required ===== */}
          <section className="mb-12 sm:mb-14">
            <div className="border-l-4 border-red-600 pl-4 mb-4 flex items-center gap-2">
              <LuFileText  className="w-5 h-5 text-red-600" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Documents Required at the Time of Admission
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2 text-sm sm:text-base">
              {documentsRequired.map((doc, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <span className="mt-1 text-red-600">•</span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Important Notes ===== */}
          <section className="mb-10 sm:mb-14">
            <div className="border-l-4 border-red-600 pl-4 mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Important Notes
              </h2>
            </div>
            <ul className="space-y-2 text-sm sm:text-base text-slate-700 text-slate-300">
              {notes.map((note, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Bottom info line */}
          <section className="border-t border-gray-200 pt-6 pb-10 text-xs sm:text-sm text-slate-500 text-slate-400">
            For latest updates, counseling schedules and admission notices, candidates are
            advised to follow official WBJEE, JEE Main and MAKAUT notifications.
          </section>
        </div>
      </main>
    </div>
  );
}
