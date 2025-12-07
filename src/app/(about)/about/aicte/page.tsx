import Image from "next/image";
import {
  LuBookOpen,
  LuBuilding2,
  LuCheck,
  LuExternalLink,
  LuFileText,
  LuGlobe,
  LuLightbulb,
  LuShield,
  LuTarget,
  LuUsers,
} from "react-icons/lu";

export default function Aicte() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white pb-12">
      {/* Hero Section */}
      <header className="relative bg-linear-to-r from-blue-600 to-red-600 py-10 text-white sm:py-14 md:py-18">
        <div className="absolute inset-0 bg-black/8"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 flex flex-col items-start gap-3 sm:mb-4 sm:flex-row sm:items-center sm:gap-4">
            <div className="shrink-0 rounded-2xl bg-white/10 p-2.5 backdrop-blur-sm sm:p-3">
              <LuShield className="h-9 w-9 text-white sm:h-11 sm:w-11" />
            </div>
            <div className="min-w-0">
              <h1 className="font-semibold text-xl leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
                AICTE Approval
              </h1>
              <p className="truncate text-white/90 text-xs sm:text-sm md:text-base">
                All India Council for Technical Education
              </p>
            </div>
          </div>

          <p className="max-w-3xl text-white/85 text-xs leading-relaxed sm:text-sm md:text-base">
            IIE Kalyani is AICTE approved, ensuring adherence to national
            standards of technical education and maintaining the highest quality
            of academic delivery and infrastructure.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-6 sm:mb-12 sm:gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <section className="space-y-5">
            <div>
              <h2 className="mb-2 font-semibold text-gray-900 text-lg sm:text-xl md:text-2xl">
                About AICTE
              </h2>
              <p className="mb-2 text-gray-700 text-xs sm:text-sm">
                The All India Council for Technical Education (AICTE) is a
                statutory body under the Department of Higher Education,
                Ministry of Education, Government of India.
              </p>
              <p className="mb-2 text-gray-700 text-xs sm:text-sm">
                Established in November 1945 and reconstituted in 1987, AICTE
                ensures proper planning and coordinated development of technical
                education in India.
              </p>
              <p className="text-gray-700 text-xs sm:text-sm">
                It accredits technical, management, and applied science programs
                across India, maintaining national standards for excellence in
                education.
              </p>
            </div>

            {/* Core Functions Box */}
            <div className="rounded-2xl bg-linear-to-br from-blue-50 to-red-50 p-4 sm:p-6">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-base text-gray-900 sm:text-lg">
                <LuTarget className="h-5 w-5 text-blue-600" />
                Core Functions of AICTE
              </h3>

              <div className="space-y-3">
                {[
                  [
                    "Planning & Coordination",
                    "Systematic planning and development of technical education",
                  ],
                  [
                    "Quality Assurance",
                    "Maintaining high standards nationwide",
                  ],
                  [
                    "Approval & Accreditation",
                    "Granting approval and accrediting programs",
                  ],
                  [
                    "Policy Development",
                    "Formulating progressive education policies",
                  ],
                  [
                    "Monitoring & Evaluation",
                    "Regular assessment of institutions",
                  ],
                ].map(([title, desc], idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3">
                    <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600 sm:h-5 sm:w-5" />
                    <div>
                      <h4 className="mb-0.5 text-gray-900 text-sm sm:text-base">
                        {title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-linear-to-br from-green-50 to-blue-50 p-3 sm:p-4">
              <h3 className="mb-1 flex items-center gap-2 font-semibold text-gray-900 text-sm sm:text-base">
                <LuGlobe className="h-4 w-4 text-green-600" />
                National Recognition
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm">
                AICTE-approved degrees are recognized globally, offering
                international career and academic opportunities.
              </p>
            </div>
          </section>

          {/* Right Column */}
          <aside className="space-y-5">
            <div className="relative overflow-hidden rounded-2xl shadow-sm">
              <div className="h-48 w-full sm:h-64 md:h-72 lg:h-80">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="AICTE Approved Institution"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="AICTE Approved Institution"
                className="h-48 w-full object-cover sm:h-64 md:h-72 lg:h-80"
                loading="lazy"
              /> */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <div className="absolute right-0 bottom-0 left-0 p-3 text-white sm:p-4">
                <h3 className="mb-0.5 font-semibold text-sm sm:text-lg">
                  National Standards of Excellence
                </h3>
                <p className="text-white/90 text-xs sm:text-sm">
                  Committed to maintaining quality in technical education across
                  India
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex flex-col items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-blue-700 p-3 text-white sm:p-4">
                <LuBuilding2 className="mb-2 h-6 w-6 opacity-90 sm:h-8 sm:w-8" />
                <div className="font-bold text-lg sm:text-2xl">10,000+</div>
                <div className="text-white/90 text-xs sm:text-sm">
                  Approved Institutions
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-xl bg-linear-to-br from-red-600 to-red-700 p-3 text-white sm:p-4">
                <LuUsers className="mb-2 h-6 w-6 opacity-90 sm:h-8 sm:w-8" />
                <div className="font-bold text-lg sm:text-2xl">1945</div>
                <div className="text-white/90 text-xs sm:text-sm">
                  Established Year
                </div>
              </div>
            </div>

            {/* AICTE Details */}
            <div className="rounded-xl border border-gray-100 bg-white p-3 sm:p-4">
              <h3 className="mb-2 font-semibold text-gray-900 text-sm sm:text-base">
                AICTE Details
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                {[
                  ["Headquarters:", "New Delhi"],
                  ["Type:", "Statutory Body"],
                  ["Under:", "Ministry of Education"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between border-gray-100 border-b pb-1"
                  >
                    <span className="text-gray-600">{label}</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}

                <div className="flex items-center justify-between pt-2">
                  <span className="text-gray-600 text-xs sm:text-sm">
                    Website:
                  </span>
                  <a
                    href="https://www.aicte-india.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 text-xs hover:underline sm:text-sm"
                  >
                    aicte-india.org <LuExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* International Recognition */}
          </aside>
        </div>

        {/* Programs Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="mb-4 text-center font-semibold text-gray-900 text-lg sm:text-xl md:text-2xl">
            Programs Covered Under AICTE
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {[
              [
                LuBookOpen,
                "Engineering & Technology",
                "B.Tech, M.Tech, B.E., M.E., and Integrated Programs",
                "from-blue-500 to-blue-600",
              ],
              [
                LuBuilding2,
                "Management",
                "MBA, PGDM, Executive MBA, and Specialized Programs",
                "from-green-500 to-green-600",
              ],
              [
                LuLightbulb,
                "Computer Applications",
                "MCA, BCA, and Advanced Computing Programs",
                "from-purple-500 to-purple-600",
              ],
              [
                LuFileText,
                "Architecture & Pharmacy",
                "B.Arch, M.Arch, B.Pharm, M.Pharm, and related courses",
                "from-orange-500 to-orange-600",
              ],
            ].map(([Icon, title, desc, color], idx) => {
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-100 bg-white p-3 transition-all hover:shadow-md sm:p-4"
                >
                  <div
                    className={`h-9 w-9 rounded-lg bg-linear-to-br sm:h-10 sm:w-10 ${color} mb-2 flex items-center justify-center`}
                  >
                    <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="mb-1 font-semibold text-gray-900 text-sm sm:text-base">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{desc}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="mt-12 rounded-2xl border border-blue-500/20 bg-linear-to-r from-blue-600/10 via-red-600/10 to-blue-600/10 p-6 text-center sm:p-8">
          <h2 className="mb-3 font-semibold text-gray-900 text-xl sm:text-2xl">
            IIE Kalyani – Under AICTE Approval
          </h2>
          <p className="mx-auto max-w-3xl text-gray-700 text-sm sm:text-base">
            IIE Kalyani operates under AICTE approval, ensuring programs that
            meet national academic benchmarks and quality standards. Our
            curriculum is designed in line with AICTE’s model syllabus and
            guidelines.
          </p>
        </section>
      </main>

      {/* utility styles */}
      <style>{`
        @media (max-width: 420px) {
          .truncate { white-space: normal; }
        }
      `}</style>
    </div>
  );
}
