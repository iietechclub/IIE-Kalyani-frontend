import { LuGraduationCap, LuFileText } from "react-icons/lu";;

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "../../components/ui/breadcrumb";
import { CheckmarkIcon } from "@/components/ui/checkmark-icon";

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
      <header className="relative bg-gradient-to-r from-red-600 to-red-400 text-white py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black/8" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white/10 backdrop-blur-sm p-2.5 sm:p-4 rounded-2xl flex-shrink-0">
              <LuGraduationCap className="h-9 w-9 sm:h-11 sm:w-11 text-white" />
            </div>

            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-1 sm:mb-2">
                <span className="block">BBA Eligibility Criteria</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90 truncate">
                Bachelor of Business Administration at IIE Kalyani — eligibility, documents and career scope.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-white/85 max-w-3xl leading-relaxed">
            Check whether you meet the academic and documentation requirements for admission to the
            BBA programme, as per the institute and university norms.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="border-t border-red-100/60 dark:border-red-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
          {/* Quick info strip */}
          <section className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center rounded-full border border-red-100/70 bg-gray-900 bg-white px-3 py-1">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                BBA - Bachelor of Business Administration
              </span>
              <span className="inline-flex items-center rounded-full border border-red-100/70 bg-gray-900 bg-white px-3 py-1">
                Duration: 3 years (6 semesters)
              </span>
              <span className="inline-flex items-center rounded-full border border-red-100/70 bg-gray-900 bg-white px-3 py-1">
                Affiliated to MAKAUT, West Bengal
              </span>
            </div>
          </section>

          {/* Eligibility Criteria */}
          <section className="mb-12 sm:mb-14">
            <div className="border-l-4 border-red-600 pl-4 mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Eligibility Requirements
              </h2>
              <p className="mt-1 text-slate-600 text-sm sm:text-base">
                The following conditions must be satisfied for admission to the BBA programme.
              </p>
            </div>

            <div className="space-y-8">
              {eligibilityCriteria.map((criteria, idx) => (
                <div key={idx}>
                  <h3 className="text-base sm:text-lg font-semibold mb-3">
                    {criteria.title}
                  </h3>
                  <ul className="space-y-2">
                    {criteria.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex gap-3 text-slate-700 text-sm sm:text-base"
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

          {/* Program Highlights */}
          <section className="mb-12 sm:mb-14">
            <div className="border-l-4 border-red-600 pl-4 mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Program Highlights
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-600 mt-1">
                Key features of the BBA programme at IIE Kalyani.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2 text-sm sm:text-base">
              {programHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Documents Required */}
          <section className="mb-12 sm:mb-14">
            <div className="border-l-4 border-red-600 pl-4 mb-4 flex items-center gap-2">
              <LuFileText className="w-5 h-5 text-red-600" />
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

          {/* Career Opportunities */}
          <section className="mb-12 sm:mb-14">
            <div className="border-l-4 border-red-600 pl-4 mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Career Opportunities After BBA
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-600 mt-1">
                BBA graduates can explore diverse roles across management, corporate and entrepreneurial domains.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {careerOpportunities.map((career, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-gray-200 dark:border-gray-200 text-xs sm:text-sm "
                >
                  {career}
                </span>
              ))}
            </div>
          </section>

          {/* Important Notes */}
          <section className="mb-10 sm:mb-14">
            <div className="border-l-4 border-red-600 pl-4 mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Important Notes
              </h2>
            </div>

            <ul className="space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-800">
              {notes.map((note, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 text-red-600">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Bottom info line */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-6 pb-10 text-s sm:text-sm text-slate-600 dark:text-slate-400">
           * For the latest admission notifications, important dates and fee details, please refer to
            the official institute website or contact the Admission Cell. *
          </section>
        </div>
      </div>
    </main>
  );
}
