import Image from "next/image";
import {
  LuBookOpen,
  LuBuilding2,
  LuCheck,
  LuFlaskConical,
  LuMonitor,
  LuShield,
  LuWifi,
  LuWind,
  LuZap,
} from "react-icons/lu";

export default function InfrastructurePage() {
  const facilities = [
    {
      title: "Modern Classrooms",
      description:
        "Smart classrooms equipped with projectors, audio systems, and comfortable seating for 60-80 students",
      icon: LuBuilding2,
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80",
      features: [
        "Smart Boards",
        "AC Rooms",
        "Ergonomic Furniture",
        "Natural Lighting",
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Advanced Laboratories",
      description:
        "State-of-the-art labs for CSE, EE, ME, ECE with latest equipment and software",
      icon: LuFlaskConical,
      image:
        "https://images.unsplash.com/photo-1632435499182-e436787ce107?auto=format&fit=crop&w=1400&q=80",
      features: [
        "Latest Equipment",
        "Safety Measures",
        "High-Speed Internet",
        "Research Support",
      ],
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Central Library",
      description:
        "Extensive collection of 50,000+ books, journals, e-resources, and digital library access",
      icon: LuBookOpen,
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80",
      features: [
        "Digital Library",
        "Reading Rooms",
        "Research Journals",
        "Study Spaces",
      ],
      color: "from-green-400 to-green-600",
    },
    {
      title: "Computer Centers",
      description:
        "300+ high-performance computers with licensed software and 24/7 internet connectivity",
      icon: LuMonitor,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
      features: [
        "Licensed Software",
        "Latest Hardware",
        "24/7 Access",
        "Tech Support",
      ],
      color: "from-orange-400 to-orange-600",
    },
  ];

  const amenities = [
    {
      icon: LuWifi,
      title: "Campus-Wide WiFi",
      description: "High-speed internet across entire campus",
    },
    {
      icon: LuZap,
      title: "24/7 Power Backup",
      description: "Uninterrupted power supply with generators",
    },
    {
      icon: LuWind,
      title: "Climate Control",
      description: "AC and ventilation in all major buildings",
    },
    {
      icon: LuShield,
      title: "Security & Safety",
      description: "CCTV surveillance and 24/7 security",
    },
  ];

  const buildingSpecs = [
    { label: "Total Campus Area", value: "15 Acres" },
    { label: "Academic Blocks", value: "4 Blocks" },
    { label: "Laboratory Halls", value: "25+ Labs" },
    { label: "Smart Classrooms", value: "50+ Rooms" },
    { label: "Auditorium Capacity", value: "500 Seats" },
    { label: "Seminar Halls", value: "8 Halls" },
  ];

  const keyFeatures = [
    "Earthquake-resistant building structure",
    "Ramp and lift facilities for differently-abled",
    "Fire safety equipment and emergency exits",
    "Rainwater harvesting systems",
    "Solar panels for sustainable energy",
    "Eco-friendly waste management",
    "Green spaces and landscaped gardens",
    "Parking facilities for students and staff",
  ];

  const campusDescription = `The Ideal Institute of Engineering (IIE), located in the heart of Kalyani, a zestful town of West Bengal, offers a well-structured campus designed to foster academic excellence and holistic development. Strategically located opposite Kalyani Shil Panchal Station, the campus enjoys seamless connectivity, with Kalyani Main Station just a few minutes away by train or bus, ensuring easy access for students and faculty alike.

Surrounded by lush greenery, the campus offers a tranquil and aesthetically pleasing ambiance, making it an ideal learning environment. The smooth internal roads enhance mobility within the campus, while a picturesque fountain and a vibrant green garden adorned with blooming plants add to its charm, creating a refreshing retreat amidst rigorous academic pursuits.

Understanding the need for comfortable living spaces, IIE provides off-campus hostel accommodations for both boys and girls. These hostels feature shared rooms equipped with essential amenities, ensuring a safe, convenient, and student-friendly environment.`;

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative bg-linear-to-r from-red-600 to-red-700 py-12 text-white sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-black/8" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-col items-start gap-3 sm:mb-6 sm:flex-row sm:items-center sm:gap-6">
            <div className="shrink-0 rounded-2xl bg-white/10 p-2.5 backdrop-blur-sm sm:p-4">
              <LuBuilding2 className="size-9 text-white sm:size-11" />
            </div>

            <div className="min-w-0">
              <h1 className="mb-1 font-semibold text-2xl leading-tight sm:mb-2 sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="block">Campus Infrastructure</span>
              </h1>
              <p className="truncate text-sm text-white/90 sm:text-base md:text-lg">
                World-class facilities for learning, innovation and growth
              </p>
            </div>
          </div>

          <p className="max-w-3xl text-white/85 text-xs leading-relaxed sm:text-sm md:text-base">
            Experience modern classrooms, advanced labs, a comprehensive library
            and student-first amenities — all designed to support your academic
            journey at IIE Kalyani.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
        {/* Campus Description */}
        <section className="mb-12">
          <div className="mb-4 border-red-600 border-l-4 pl-4">
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
              About the Campus
            </h2>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <p className="whitespace-pre-line text-slate-700 text-sm leading-relaxed sm:text-base">
              {campusDescription}
            </p>
          </div>
        </section>

        {/* Building Specs */}
        <section className="mb-12 sm:mb-14">
          <div className="mb-4 border-red-600 border-l-4 pl-4">
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
              Campus at a Glance
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buildingSpecs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg bg-white p-4 shadow-sm"
              >
                <div className="font-semibold text-lg text-red-600">
                  {spec.value}
                </div>
                <div className="text-slate-600 text-sm">{spec.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Facilities */}
        <section className="mb-12 sm:mb-14">
          <div className="mb-4 border-red-600 border-l-4 pl-4">
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
              Our Key Facilities
            </h2>
            <p className="mt-1 text-slate-600 text-sm sm:text-base">
              Designed to support academic excellence, research and student
              wellbeing
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <article
                  key={facility.title}
                  className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2"
                >
                  <div className="relative h-56 md:h-full">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <div
                        className={`mb-3 inline-flex items-center gap-3 rounded-md bg-linear-to-r ${facility.color} px-3 py-1 text-white shadow-sm`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{facility.title}</span>
                      </div>
                      <p className="mb-4 text-slate-600 text-sm sm:text-base">
                        {facility.description}
                      </p>

                      <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                        {facility.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <LuCheck className="mt-1 h-4 w-4 shrink-0 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <a
                        href={`/facilities/${facility.title.replace(/\s+/g, "-").toLowerCase()}`}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Amenities */}
        <section className="mb-12 sm:mb-14">
          <div className="mb-4 border-red-600 border-l-4 pl-4">
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
              Essential Amenities
            </h2>
            <p className="mt-1 text-slate-600 text-sm sm:text-base">
              Comfort, convenience and safety for every student
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={amenity.title}
                  className="rounded-lg bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <Icon className="size-6" />
                  </div>
                  <div className="mb-1 font-semibold">{amenity.title}</div>
                  <div className="text-slate-600 text-sm">
                    {amenity.description}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-10 sm:mb-14">
          <div className="mb-4 border-red-600 border-l-4 pl-4">
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
              Sustainability & Safety
            </h2>
            <p className="mt-1 text-slate-600 text-sm sm:text-base">
              Green, accessible and safe campus practices
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <LuCheck className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom info line */}
        <section className="border-gray-200 border-t pt-6 pb-10 text-slate-500 text-xs sm:text-sm">
          For campus tours, facility access inquiries, or accommodation details,
          please contact the administration office or visit during working
          hours.
        </section>
      </div>
    </main>
  );
}
