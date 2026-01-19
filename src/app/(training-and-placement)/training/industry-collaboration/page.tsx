"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  LuAward,
  // LuChevronDown,
  LuClipboardCheck,
  LuLightbulb,
  LuRocket,
  LuTarget,
  LuUsers,
} from "react-icons/lu";
import { MotionArticle, MotionDiv } from "@/components/animated/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// IndustryCollaboration.jsx — Examination-style hero + existing content
export default function IndustryCollaboration() {
  const collaborationTypes = [
    {
      icon: LuTarget,
      title: "Curriculum Development",
      description:
        "Industry experts contribute to curriculum design ensuring relevance to market needs",
      features: [
        "Industry-aligned course content",
        "Regular curriculum review",
        "Latest technology integration",
        "Practical case studies",
      ],
    },
    {
      icon: LuUsers,
      title: "Guest Lectures & Seminars",
      description:
        "Regular sessions by industry professionals sharing real-world insights",
      features: [
        "Expert guest lectures",
        "Technical seminars",
        "Industry trends discussion",
        "Career guidance sessions",
      ],
    },
    {
      icon: LuLightbulb,
      title: "Joint Research Projects",
      description:
        "Collaborative research initiatives between institute and industry partners",
      features: [
        "Sponsored research projects",
        "Technology development",
        "Innovation labs",
        "Patent applications",
      ],
    },
    {
      icon: LuRocket,
      title: "Sponsored Labs & Equipment",
      description:
        "Industry partnerships for state-of-the-art laboratory facilities",
      features: [
        "Modern lab equipment",
        "Software licenses",
        "Technology infrastructure",
        "Training facilities",
      ],
    },
  ];

  const benefits = [
    {
      title: "For Students",
      points: [
        "Exposure to real industry problems",
        "Hands-on experience with latest technologies",
        "Better placement opportunities",
        "Industry mentorship and guidance",
        "Networking opportunities",
      ],
    },
    {
      title: "For Industry",
      points: [
        "Access to skilled talent pool",
        "Research and development support",
        "Brand visibility among students",
        "Early identification of potential recruits",
        "Contribution to skill development",
      ],
    },
    {
      title: "For Institution",
      points: [
        "Enhanced curriculum relevance",
        "Better placement records",
        "Research opportunities",
        "Infrastructure development",
        "Industry recognition",
      ],
    },
  ];

  const initiatives = [
    {
      title: "Industry Advisory Board",
      description:
        "A dedicated board comprising industry leaders who provide strategic guidance on academic programs and ensure alignment with industry requirements.",
    },
    {
      title: "Memorandum of Understanding (MoUs)",
      description:
        "Formal partnerships with leading companies for internships, placements, joint research, and knowledge exchange programs.",
    },
    {
      title: "Industry Visits",
      description:
        "Regular industrial visits organized for students to understand manufacturing processes, business operations, and workplace culture.",
    },
    {
      title: "Live Project Implementation",
      description:
        "Students work on real industry projects under the guidance of both faculty and industry mentors, solving actual business problems.",
    },
    {
      title: "Corporate Training Programs",
      description:
        "Specialized training sessions conducted by industry professionals on emerging technologies and industry best practices.",
    },
    {
      title: "Innovation and Incubation",
      description:
        "Support for student startups and innovative ideas with guidance and resources from industry partners.",
    },
  ];

  const partners = [
    "Technology Sector",
    "Manufacturing Industry",
    "Consulting Firms",
    "Core Engineering Companies",
    "IT & Software Services",
    "Automobile Industry",
    "Infrastructure Sector",
    "Banking & Finance",
  ];

  // UI state
  const [query, _setQuery] = useState("");
  // const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [_partnerFilter, _setPartnerFilter] = useState("All");
  const _partnerCategories = useMemo(() => ["All", ...partners], []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: not needed
  const filteredCollabs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return collaborationTypes;
    return collaborationTypes.filter((c) =>
      `${c.title} ${c.description} ${c.features.join(" ")}`
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  // hero assets — replace with real paths
  const heroImage = "https://urli.info/1esM-"; // change to your hero image url
  const _pdfHref = "/assets/industry-partners-brochure.pdf"; // change to your MoU/partners pdf

  return (
    <main className="min-h-screen bg-neutral-50 text-black">
      {/* Hero*/}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-[360px] w-full bg-center bg-cover">
            <Image
              fill
              src={heroImage}
              alt="Industry Collaboration Hero"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-b from-gray-600 to-black/30" />
        </div>

        <div className="relative mx-auto mt-20 flex max-w-7xl flex-col items-center gap-8 px-4 py-20 lg:flex-row">
          <div className="z-10 flex-1 text-center text-white lg:text-left">
            <MotionDiv
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-4 rounded-xl p-3">
                <LuClipboardCheck className="h-12 w-12 text-white" />
                <div className="text-left">
                  <h1 className="font-bold text-3xl md:text-4xl">
                    Industry Collaboration
                  </h1>
                  <p className="text-sm text-white/90 md:text-base">
                    Strengthening academia-industry ties — MoUs, sponsored labs,
                    projects, internships and joint research.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Collaboration Types */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-semibold text-xl">
            Types of Collaboration
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredCollabs.map((type, idx) => {
              const Icon = type.icon;
              return (
                <MotionArticle
                  key={type.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * idx }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-rose-500 to-rose-600 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{type.title}</h3>
                      <p className="mt-1 text-slate-600 text-sm">
                        {type.description}
                      </p>

                      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {type.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-slate-700 text-sm"
                          >
                            <span className="text-rose-600">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </MotionArticle>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-semibold text-xl">
            Benefits of Industry Collaboration
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <MotionDiv
                key={b.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-center font-semibold text-rose-600">
                  {b.title}
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <LuAward className="mt-0.5 h-4 w-4 text-rose-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives (accordion) */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center font-semibold text-xl">
            Collaboration Initiatives
          </h2>
          <Accordion type="single" className="space-y-1" collapsible>
            {initiatives.map((it, i) => (
              <MotionDiv
                key={it.title}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i }}
                className={
                  "overflow-hidden rounded-lg border border-gray-100 bg-white px-5 shadow-sm"
                }
              >
                <AccordionItem value={`item-${i}`}>
                  <AccordionTrigger className="text-base hover:no-underline">
                    {it.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-700">
                    {it.description}
                  </AccordionContent>
                </AccordionItem>
                {/* <button
                  type="button"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div>
                    <div className="font-semibold">{it.title}</div>
                    <div className="mt-1 text-slate-500 text-xs">
                      {it.description.slice(0, 80)}...
                      </div>
                  </div>
                  <LuChevronDown
                    className={cn(
                      "size-5 text-slate-500 transition-transform",
                      openIdx === i && "rotate-180",
                      )}
                  />
                </button>
                
                <div
                  className={cn(
                    openIdx === i ? "max-h-screen p-5" : "max-h-0 p-0",
                    "bg-white/50 text-slate-700 text-sm transition-[max-height] duration-300",
                    )}
                    >
                    <p>{it.description}</p>
                    </div> */}
              </MotionDiv>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
