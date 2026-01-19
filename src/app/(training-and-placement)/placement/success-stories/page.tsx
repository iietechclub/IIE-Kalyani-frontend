import Image from "next/image";
import Link from "next/link";
import { LuClipboardCheck, LuExternalLink } from "react-icons/lu";
import { MotionArticle, MotionDiv } from "@/components/animated/motion";

// White background - 3 column responsive layout
export default function SuccessStories() {
  const initialStories = [
    {
      name: "Rahidul Khan",
      branch: "Computer Science & Engineering",
      batch: "2027",
      company: "TATA Consultancy",
      package: "0000 LPA",
      story:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting.",
      avatar: "",
    },
    {
      name: "Rohit Sen",
      branch: "Computer Science & Engineering",
      batch: "2024",
      company: "TCS",
      package: "7.5 LPA",
      story:
        "My journey at IIE Kalyani was transformative. The placement cell provided excellent training and guidance that helped me secure a position at TCS. The mock interviews and technical sessions were particularly helpful.",
      avatar: "",
    },
    {
      name: "Nisha Roy",
      branch: "Electrical Engineering",
      batch: "2024",
      company: "Larsen & Toubro",
      package: "8.2 LPA",
      story:
        "The faculty support and industry exposure I received at IIE Kalyani prepared me well for corporate life. The placement process was smooth and well-organized.",
      avatar: "",
    },
    {
      name: "Aman Gupta",
      branch: "Mechanical Engineering",
      batch: "2023",
      company: "Tata Motors",
      package: "9.0 LPA",
      story:
        "IIE Kalyani gave me a strong foundation in both technical and soft skills. The training programs conducted by the placement cell helped me understand industry expectations.",
      avatar: "",
    },
    {
      name: "Sonal Verma",
      branch: "Computer Science & Engineering",
      batch: "2023",
      company: "Infosys",
      package: "6.5 LPA",
      story:
        "The placement cell's dedication and support made all the difference. From resume building to interview preparation, every aspect was covered. I'm now part of a great team at Infosys.",
      avatar: "",
    },
    {
      name: "Pooja Singh",
      branch: "Civil Engineering",
      batch: "2024",
      company: "JSW Steel",
      package: "7.8 LPA",
      story:
        "My experience at IIE Kalyani was enriching. The practical approach to education and regular industry interactions gave me real-world insights.",
      avatar: "",
    },
  ];

  const demoLeftImage =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80";
  const heroImage =
    "https://github.com/Anjel-cmd/college_images123/blob/main/White%20Minimalist%20Corporate%20Personal%20Profile%20LinkedIn%20Banner.png?raw=true";

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      {/* Hero */}
      <header className="relative overflow-hidden h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>


        <div className="relative mx-auto flex h-full max-w-7xl items-center gap-8 px-4 lg:flex-row">
          <div className="z-10 flex-1 text-center text-white lg:text-left">
            <MotionDiv
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-4 rounded-xl p-3">
                <LuClipboardCheck className="size-12 text-white" />
                <div className="text-left">
                  <h1 className="font-bold text-3xl md:text-4xl">
                    Success Stories
                  </h1>
                  <p className="max-w-xl text-sm text-white/90 md:text-base">
                    Read inspiring alumni journeys — how placement support,
                    mentorship, and exposure helped them succeed.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* 3-column Stories Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {initialStories.map((s, i) => (
            <MotionArticle
              // biome-ignore lint/suspicious/noArrayIndexKey: not needed
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex h-full flex-col md:flex-row">
                {/* LEFT visual */}
                <div className="relative h-48 w-full bg-gray-200 md:h-auto md:w-1/2">
                  <Image
                    fill
                    src={s.avatar || demoLeftImage}
                    alt={`${s.name} visual`}
                    className="absolute inset-0 h-full w-full object-cover brightness-95"
                  />
                  <div className="absolute bottom-4 left-13">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-3 py-1.5 text-gray-700 text-xs transition hover:bg-white"
                    >
                      Watch YouTube Video <LuExternalLink className="h-5 w-3" />
                    </Link>
                  </div>
                </div>

                {/* RIGHT content */}
                <div className="flex w-full flex-col p-6 md:w-1/2">
                  <div>
                    <h2 className="font-extrabold text-gray-900 text-xl">
                      {s.name}
                    </h2>
                    <p className="mt-1 text-gray-500 text-xs">
                      {s.branch} • {s.batch}
                    </p>
                  </div>

                  <div className="mt-3 mb-4 flex items-center justify-between">
                    <div className="font-semibold text-rose-600 text-sm">
                      {s.company}
                    </div>
                    <div className="text-gray-500 text-xs">{s.package}</div>
                  </div>

                  <p className="line-clamp-6 text-gray-700 text-sm leading-relaxed">
                    {s.story}
                  </p>
                </div>
              </div>
            </MotionArticle>
          ))}
        </div>
      </section>
    </div>
  );
}
