import { LuFileText, LuGraduationCap } from "react-icons/lu";
import { CheckmarkIcon } from "@/components/ui/checkmark-icon";
import { urlFromGithub } from "@/lib/utils";

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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* ===== HERO (full width, your style) ===== */}
     <header
  className="relative bg-linear-to-r from-red-600 to-red-400 py-12 text-white sm:py-16 md:py-20 overflow-hidden"
  style={{
    backgroundImage: `url(${urlFromGithub("%28admission%29/eligibility/btech/banner.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
      <div className="shrink-0 rounded-2xl bg-white/10 p-3 backdrop-blur-sm sm:p-4">
        <LuGraduationCap className="h-9 w-9 text-white sm:h-11 sm:w-11" />
      </div>
      <div className="min-w-0">
        <h1 className="mb-1 font-semibold text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          B.Tech Eligibility Criteria
        </h1>
        <p className="text-sm text-white/90 sm:text-base md:text-lg">
          Requirements for admission to undergraduate engineering programs
          at IIE Kalyani.
        </p>
      </div>
    </div>

    <p className="max-w-3xl text-white/85 text-xs leading-relaxed sm:text-sm md:text-base">
      Carefully read the academic qualification, entrance exam
      requirements, branches offered, and mandatory documents before
      applying through WBJEE / JEE or as per MAKAUT guidelines.
    </p>
  </div>
</header>


      {/* ===== MAIN CONTENT (full-page feel, simple & modern) ===== */}
      <div className="border-red-100/60 border-t">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8">
          {/* Quick summary strip */}
          <section className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center rounded-full border border-red-100/70 bg-white px-3 py-1">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                MAKAUT, West Bengal – B.Tech
              </span>
              <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 px-3 py-1">
                Duration: 4 years (8 semesters)
              </span>
            </div>
          </section>

          {/* ===== Eligibility Requirements ===== */}
          <section className="mb-12 sm:mb-14">
            <div className="mb-4 border-red-600 border-l-4 pl-4">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Eligibility Requirements
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">
                Candidates must satisfy all of the following conditions to be
                considered for B.Tech admission.
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
                        <CheckmarkIcon className="size-5 shrink-0 text-red-600" />
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
            <div className="mb-4 border-red-600 border-l-4 pl-4">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                B.Tech Programs Offered
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">
                Following undergraduate engineering branches are available at
                IIE Kalyani.
              </p>
            </div>

            <ul className="grid gap-x-10 gap-y-3 text-sm sm:grid-cols-2 sm:text-base">
              {branchesOffered.map((branch) => (
                <li key={branch} className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>{branch}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ===== Documents Required ===== */}
          <section className="mb-12 sm:mb-14">
            <div className="mb-4 flex items-center gap-2 border-red-600 border-l-4 pl-4">
              <LuFileText className="size-5 text-red-600" />
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Documents Required at the Time of Admission
              </h2>
            </div>

            <ul className="grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2 sm:text-base">
              {documentsRequired.map((doc) => (
                <li key={doc} className="flex items-start gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ===== Important Notes ===== */}
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
            For latest updates, counseling schedules and admission notices,
            candidates are advised to follow official WBJEE, JEE Main and MAKAUT
            notifications.
          </section>
        </div>
      </div>
    </main>
  );
}
