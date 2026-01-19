import Image from "next/image";
import {
  LuAward,
  LuBookOpen,
  LuBuilding2,
  LuCalendar,
  LuCheck,
  LuExternalLink,
  LuFileText,
  LuGraduationCap,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";

import { cn } from "@/lib/utils";

export default function Makaut() {
  const recognitionAndAccreditation = [
    {
      title: "UGC Recognition",
      desc: "Recognized by the University Grants Commission (UGC), Government of India",
    },
    {
      title: "State University",
      desc: "Approved by the Government of West Bengal under Act 2001",
    },
    {
      title: "AICTE Approved",
      desc: "All programs comply with AICTE standards and guidelines",
    },
    {
      title: "NBA Accreditation",
      desc: "Several programs accredited by the National Board of Accreditation",
    },
  ];

  const universityDetails = [
    ["Location:", "Kolkata, West Bengal"],
    ["Type:", "Public State University"],
    ["Chancellor:", "Hon'ble Governor of WB"],
  ];

  const programsOffered = [
    {
      icon: LuBookOpen,
      title: "Engineering & Technology",
      programs: ["B.Tech", "M.Tech", "Integrated M.Tech"],
      className: "from-blue-500 to-blue-600",
    },
    {
      icon: LuBuilding2,
      title: "Management Studies",
      programs: ["MBA", "PGDM", "Executive MBA"],
      className: "from-green-500 to-green-600",
    },
    {
      icon: LuGraduationCap,
      title: "Computer Applications",
      programs: ["MCA", "BCA", "Diploma Programs"],
      className: "from-purple-500 to-purple-600",
    },
    {
      icon: LuFileText,
      title: "Pharmacy",
      programs: ["B.Pharm", "M.Pharm", "Pharm.D"],
      className: "from-orange-500 to-orange-600",
    },
    {
      icon: LuTrendingUp,
      title: "Architecture",
      programs: ["B.Arch", "M.Arch", "Urban Planning"],
      className: "from-red-500 to-red-600",
    },
    {
      icon: LuAward,
      title: "Hotel Management",
      programs: ["BHM", "Diploma in HM", "Advanced Courses"],
      color: "from-pink-500 to-pink-600",
    },
  ];

  const affiliationKeyPoints = [
    {
      title: "Updated Curriculum",
      desc: "MAKAUT regularly updates the syllabus to match current industry and academic standards.",
      icon: LuFileText,
    },
    {
      title: "Recognized Degrees",
      desc: "Degrees issued under MAKAUT affiliation are accepted nationally for jobs and higher studies.",
      icon: LuAward,
    },
    {
      title: "Quality Assurance",
      desc: "Strict academic frameworks ensure consistent quality across all affiliated institutions.",
      icon: LuTrendingUp,
    },
  ];

  const affiliationBenefits = [
    {
      title: "National Recognition",
      desc: "Degrees affiliated with MAKAUT are recognized across India, ensuring wide academic and professional acceptance.",
    },
    {
      title: "Standardized Education",
      desc: "MAKAUT follows a structured curriculum that maintains uniform quality across all affiliated institutions.",
    },
    {
      title: "Research Opportunities",
      desc: "Students gain exposure to research projects, innovation programs, and academic collaborations.",
    },
    {
      title: "Higher Education",
      desc: "MAKAUT credentials support smooth admission into postgraduate and doctoral programs nationwide.",
    },
    {
      title: "Enhanced Employability",
      desc: "Industry-aligned syllabus and evaluation systems improve job readiness and career prospects.",
    },
    {
      title: "Network & Resources",
      desc: "Affiliation provides access to academic networks, learning resources, and institutional partnerships.",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-red-600 to-red-700 py-12 text-white sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black/8" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-col items-start gap-3 sm:mb-6 sm:flex-row sm:items-center sm:gap-6">
            <div className="shrink-0 rounded-2xl bg-white/10 p-2.5 backdrop-blur-sm sm:p-4">
              <LuGraduationCap className="size-9 text-white sm:size-11" />
            </div>

            <div className="min-w-0">
              <h1 className="mb-1 font-semibold text-2xl leading-tight sm:mb-2 sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="block">MAKAUT Affiliation</span>
              </h1>
              <p className="truncate text-sm text-white/90 sm:text-base md:text-lg">
                Maulana Abul Kalam Azad University of Technology, West Bengal
              </p>
            </div>
          </div>

          <p className="max-w-3xl text-white/85 text-xs leading-relaxed sm:text-sm md:text-base">
            IIE Kalyani is proudly affiliated with MAKAUT, West Bengal (formerly
            WBUT), ensuring high-quality technical education and recognized
            degree programs that meet national standards.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:mb-14 sm:gap-10 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="mb-2 font-semibold text-gray-900 text-lg sm:mb-3 sm:text-2xl md:text-3xl">
                About MAKAUT
              </h2>
              <p className="mb-2 text-gray-700 text-sm sm:text-base">
                Maulana Abul Kalam Azad University of Technology (MAKAUT),
                formerly known as West Bengal University of Technology (WBUT),
                is a public state university located in West Bengal, India. It
                was established on July 18, 2001.
              </p>
              <p className="mb-2 text-gray-700 text-sm sm:text-base">
                The university is named after Maulana Abul Kalam Azad, the first
                Minister of Education in independent India. It was established
                to promote technical and management education, research, and
                training in the state.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                MAKAUT’s headquarters is at Salt Lake, Kolkata - 700064.
                Recognized by the UGC, it oversees 200+ affiliated colleges
                across West Bengal.
              </p>
            </div>

            {/* Accreditation Box */}
            <div className="inset-shadow-2xs rounded-2xl bg-linear-to-br from-red-50 to-orange-50 p-4 shadow sm:p-6 md:p-8">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-base text-gray-900 sm:mb-4 sm:text-xl">
                <LuAward className="h-5 w-5 text-red-600 sm:h-6 sm:w-6" />
                Recognition & Accreditation
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {recognitionAndAccreditation.map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3 sm:gap-4">
                    <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600 sm:h-5 sm:w-5" />
                    <div className="min-w-0">
                      <h4 className="mb-0.5 text-gray-900 text-sm sm:text-base">
                        {title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="h-56 w-full sm:h-64 md:h-72 lg:h-80">
                <Image
                  fill
                  src="https://images.shiksha.com/mediadata/images/articles/1661339417phpsZb9hC.jpeg"
                  alt="MAKAUT University"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 top-1/2 bottom-0 bg-linear-to-t from-black/90 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-4 text-white sm:p-6">
                <h3 className="mb-1 font-semibold text-base sm:mb-2 sm:text-lg md:text-xl">
                  Excellence in Technical Education
                </h3>
                <p className="text-white/90 text-xs sm:text-sm">
                  Shaping the future of engineering and technology education in
                  West Bengal
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start gap-3 rounded-xl bg-linear-to-br from-red-600 to-red-700 p-3 text-white sm:p-4">
                <LuUsers className="h-7 w-7 shrink-0 opacity-90 sm:h-9 sm:w-9" />
                <div>
                  <div className="font-semibold text-xl sm:text-2xl">200+</div>
                  <div className="text-white/90 text-xs sm:text-sm">
                    Affiliated Colleges
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-linear-to-br from-orange-600 to-red-600 p-3 text-white sm:p-4">
                <LuCalendar className="h-7 w-7 shrink-0 opacity-90 sm:h-9 sm:w-9" />
                <div>
                  <div className="font-semibold text-xl sm:text-2xl">2001</div>
                  <div className="text-white/90 text-xs sm:text-sm">
                    Established Year
                  </div>
                </div>
              </div>
            </div>

            {/* University Info */}
            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5">
              <h3 className="mb-3 font-semibold text-base text-gray-900 sm:text-lg">
                University Details
              </h3>
              <div className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
                {universityDetails.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between border-gray-100 border-b pb-1 sm:pb-2"
                  >
                    <span className="text-gray-600">{label}</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}

                <div className="flex items-center justify-between pt-2">
                  <span className="text-gray-600">Website:</span>
                  <a
                    href="https://makautwb.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-red-600 text-sm hover:underline"
                  >
                    makautwb.ac.in
                    <LuExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-4 text-center font-semibold text-gray-900 text-xl sm:mb-6 sm:text-2xl md:text-3xl">
            Programs Offered by MAKAUT
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {programsOffered.map(
              ({ icon: Icon, title, programs, className }) => (
                <div
                  key={title}
                  className="rounded-xl border border-gray-100 bg-white p-4 transition-all hover:shadow-md sm:p-5"
                >
                  <div
                    className={cn(
                      "mb-3 flex size-10 items-center justify-center rounded-lg bg-linear-to-br sm:size-12",
                      className,
                    )}
                  >
                    <Icon className="size-5 text-white sm:size-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900 text-sm sm:text-base">
                    {title}
                  </h3>
                  <ul className="space-y-1">
                    {programs.map((program) => (
                      <li
                        key={program}
                        className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm"
                      >
                        <span className="text-red-600">•</span>
                        <span>{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>

        {/* IIE Kalyani Affiliation Section */}
        <div className="mb-8 rounded-2xl bg-linear-to-br from-red-50 to-orange-50 p-4 sm:mb-12 sm:p-6 md:p-8">
          <h2 className="mb-3 text-center font-semibold text-gray-900 text-lg sm:mb-4 sm:text-2xl md:text-3xl">
            IIE Kalyani – MAKAUT Affiliation
          </h2>
          <p className="mx-auto mb-4 max-w-3xl text-center text-gray-700 text-xs sm:text-sm md:text-base">
            IIE Kalyani is proudly affiliated with MAKAUT, ensuring degrees
            recognized nationwide. Our curriculum aligns with MAKAUT's academic
            framework and evolving industry standards.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-6">
            {affiliationKeyPoints.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="rounded-lg bg-white p-3 text-center shadow-sm sm:p-4"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 sm:mb-3 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 text-red-600 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-gray-900 text-sm sm:text-base">
                  {title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 md:p-8">
          <h2 className="mb-4 text-center font-semibold text-gray-900 text-lg sm:mb-6 sm:text-2xl md:text-3xl">
            Benefits of MAKAUT Affiliation
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {affiliationBenefits.map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 sm:h-10 sm:w-10">
                  <LuCheck className="size-4 text-green-600 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
