import { LuFileText, LuGraduationCap } from "react-icons/lu";
import { CheckmarkIcon } from "@/components/ui/checkmark-icon";
import { urlFromGithub } from "@/lib/utils";

export default function EligibilityBBA() {
  const eligibilityCriteria = [
    {
      title: "Educational Qualification",
      points: [
        "Passed 10+2 examination or equivalent from a recognized Board.",
        "Candidates from any stream – Science, Commerce, or Arts – are eligible.",
        "Minimum 45% aggregate marks (40% for SC / ST / OBC candidates).",
        "English should be one of the subjects in 10+2.",
      ],
    },
    {
      title: "Entrance / Selection",
      points: [
        "Merit-based admission primarily on the basis of 10+2 marks.",
        "In some cases, a valid score in state / national level entrance examination may be considered.",
        "The institute may conduct a personal interview and/or counseling for final selection.",
      ],
    },
    {
      title: "Age Criteria",
      points: [
        "No strict upper age limit as per current norms.",
        "Candidates must have successfully completed 10+2 or an equivalent examination at the time of admission.",
      ],
    },
  ];

  const programHighlights = [
    "3-year full-time BBA program.",
    "Affiliated to MAKAUT, West Bengal.",
    "Industry-oriented and application-driven curriculum.",
    "Internship and project-based learning opportunities.",
    "Focus on soft skills, communication and leadership.",
    "Entrepreneurship and start-up exposure.",
  ];

  const documentsRequired = [
    "10th Standard Mark Sheet and Certificate.",
    "12th Standard Mark Sheet and Certificate.",
    "Entrance Exam Score Card (if applicable).",
    "Caste Certificate (if applicable).",
    "Domicile Certificate.",
    "Passport size photographs.",
    "Aadhar Card.",
    "Migration Certificate (if applicable).",
    "Character / Conduct Certificate from last attended school.",
  ];

  const careerOpportunities = [
    "Marketing Executive / Manager",
    "Human Resource Executive / Manager",
    "Financial Analyst / Executive",
    "Business / Management Consultant",
    "Operations / Admin Executive",
    "Entrepreneur / Start-up Founder",
    "Banking and Financial Services Professional",
    "Event / Brand / Sales Manager",
  ];

  const notes = [
    "BBA is a 3-year undergraduate management programme (6 semesters).",
    "Students from Science, Commerce and Arts streams are eligible to apply.",
    "Admission is based on merit, institutional norms and seat availability.",
    "Original documents must be produced at the time of verification.",
    "For fee structure and detailed admission schedule, contact the Admission Cell or refer to official notifications.",
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER – same pattern as your MAKAUT header */}
      <header
  className="relative bg-linear-to-r from-red-600 to-red-400 py-12 text-white sm:py-16 md:py-20 overflow-hidden"
  style={{
     backgroundImage: `url(${urlFromGithub("%28admission%29/eligibility/bba/banner.jpg")})`,
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
          BBA Eligibility Criteria
        </h1>
        <p className="text-sm text-white/90 sm:text-base md:text-lg">
          Bachelor of Business Administration at IIE Kalyani —
                eligibility, documents and career scope.
        </p>
      </div>
    </div>

    <p className="max-w-3xl text-white/85 text-xs leading-relaxed sm:text-sm md:text-base">
      Check whether you meet the academic and documentation requirements
            for admission to the BBA programme, as per the institute and
            university norms.
    </p>
  </div>
</header>


      {/* MAIN CONTENT */}
      <div className="border-red-100/60 border-t">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8">
          {/* Quick info strip */}
          <section className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center rounded-full border border-red-100/70 bg-white px-3 py-1">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                BBA - Bachelor of Business Administration
              </span>
              <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1">
                Duration: 3 years (6 semesters)
              </span>
              <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1">
                Affiliated to MAKAUT, West Bengal
              </span>
            </div>
          </section>

          {/* Eligibility Criteria */}
          <section className="mb-12 sm:mb-14">
            <div className="mb-4 border-red-600 border-l-4 pl-4">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Eligibility Requirements
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">
                The following conditions must be satisfied for admission to the
                BBA programme.
              </p>
            </div>

            <div className="space-y-8">
              {eligibilityCriteria.map((criteria) => (
                <div key={criteria.title}>
                  <h3 className="mb-3 font-semibold text-base sm:text-lg">
                    {criteria.title}
                  </h3>
                  <ul className="space-y-2">
                    {criteria.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-slate-700 text-sm sm:text-base"
                      >
                        <CheckmarkIcon className="h-5 w-5 shrink-0 text-red-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Program Highlights */}
          <section className="mb-12 sm:mb-14">
            <div className="mb-4 border-red-600 border-l-4 pl-4">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Program Highlights
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">
                Key features of the BBA programme at IIE Kalyani.
              </p>
            </div>

            <ul className="grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2 sm:text-base">
              {programHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
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

          {/* Career Opportunities */}
          <section className="mb-12 sm:mb-14">
            <div className="mb-4 border-red-600 border-l-4 pl-4">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Career Opportunities After BBA
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">
                BBA graduates can explore diverse roles across management,
                corporate and entrepreneurial domains.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {careerOpportunities.map((career) => (
                <span
                  key={career}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs sm:text-sm"
                >
                  {career}
                </span>
              ))}
            </div>
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
                <li key={note} className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Bottom info line */}
          <section className="border-gray-200 border-t pt-6 pb-10 text-s text-slate-600 sm:text-sm">
            * For the latest admission notifications, important dates and fee
            details, please refer to the official institute website or contact
            the Admission Cell. *
          </section>
        </div>
      </div>
    </main>
  );
}
