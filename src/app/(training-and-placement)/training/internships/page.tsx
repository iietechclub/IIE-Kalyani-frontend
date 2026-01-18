"use client";
import Image from "next/image";
import {
  LuBriefcase,
  LuBuilding,
  LuClipboardCheck,
  // LuExternalLink,
  LuTrendingUp,
} from "react-icons/lu";
import { MotionDiv } from "@/components/animated/motion";
import { urlFromGithub } from "@/lib/utils";

const benefits = [
  {
    icon: LuTrendingUp,
    title: "Real-world Experience",
    description:
      "Work on live projects and learn practical problem solving, not just theory.",
  },
  {
    icon: LuBuilding,
    title: "Skill Enhancement",
    description:
      "Develop industry-relevant skills and tools that make you production-ready.",
  },
  {
    icon: LuBriefcase,
    title: "Industry Network",
    description:
      "Build professional relationships that often turn into mentorships and job opportunities.",
  },
  {
    icon: LuClipboardCheck,
    title: "Career Opportunities",
    description:
      "Internships increase chances of PPOs and accelerate your career trajectory.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Register",
    description:
      "Sign up via the placement portal with your profile and interests.",
  },
  {
    step: 2,
    title: "Shortlisting",
    description:
      "Placement team matches profiles to suitable internship opportunities.",
  },
  {
    step: 3,
    title: "Selection",
    description:
      "Attend tests/interviews or complete short assignments from companies.",
  },
  {
    step: 4,
    title: "Onboard & Deliver",
    description:
      "Start the internship with mentorship, milestones and regular feedback.",
  },
  {
    step: 5,
    title: "Evaluate & Convert",
    description:
      "Receive evaluation; top performers may receive PPOs or recommendation letters.",
  },
];

export default function InternshipsPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-neutral-50 to-white">
      {/* Focused Hero */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="h-[420px] w-full bg-center bg-cover md:h-[520px]"
            aria-hidden
          >
            <Image
              fill
              src={urlFromGithub(
                "(training-and-placement)/training/internships/internship-banner.jpg",
              )}
              alt="Internships banner image"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/20" />
          <div className="-right-36 -top-28 absolute size-96 rounded-full bg-[#FF6B35]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-20 md:pb-24">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl text-center text-white md:text-left">
              <h1 className="font-extrabold text-4xl leading-tight md:text-5xl">
                Why Internships Matter
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-white/90 md:text-xl">
                Internships bridge the gap between learning and doing — gain
                experience, grow your network, and unlock career opportunities.
              </p>
            </div>
          </MotionDiv>
        </div>
      </header>

      <div className="mx-auto mt-12 mb-24 max-w-7xl px-6">
        {/* Value proposition / Benefits */}
        <section className="-mt-8 p-8 md:p-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-bold text-2xl text-rose-600 md:text-3xl">
                What you gain from an internship
              </h2>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Practical exposure, mentorship and measurable outcomes —
                internships are the fastest way to turn learning into impact.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {benefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <MotionDiv
                      key={b.title}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.06 * i }}
                      className="flex items-start gap-5 p-5"
                    >
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-rose-500 to-rose-600 text-white shadow">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{b.title}</h4>
                        <p className="mt-1 text-slate-600 text-sm">
                          {b.description}
                        </p>
                      </div>
                    </MotionDiv>
                  );
                })}
              </div>
            </div>

            {/* Right column: larger aesthetic card with image + quick stats + CTA */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.99 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-linear-to-br from-white to-rose-50 shadow-2xl"
            >
              <div className="relative">
                <Image
                  src={urlFromGithub(
                    "(training-and-placement)/training/internships/internship-banner.jpg",
                  )}
                  alt="Students collaborating in a professional workplace environment"
                  width={1200}
                  height={600}
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <div className="text-slate-500 text-sm">
                      Partner network
                    </div>
                    <div className="mt-1 font-semibold text-lg">
                      120+ Companies
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 text-xs">PPO Rate</div>
                    <div className="font-bold text-2xl text-rose-600">18%</div>
                  </div>
                </div>

                <p className="mt-4 text-slate-600 text-sm">
                  Our industry partnerships and mentor network help students
                  turn internships into long-term opportunities and career
                  growth.
                </p>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="mt-12">
          <h3 className="mb-8 text-center font-bold text-4xl">
            Internship Process — simple & transparent
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {processSteps.map((p, i) => (
              <MotionDiv
                key={p.step}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i }}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-rose-500 to-rose-600 font-semibold text-lg text-white">
                  {p.step}
                </div>
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-3 text-slate-600 text-sm">{p.description}</p>
              </MotionDiv>
            ))}
          </div>
        </section>

        {/* CTA Strip */}
        {/* <section id="apply" className="mt-16">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-gray-100 bg-linear-to-r from-rose-50 to-white p-6 shadow-xl md:flex-row md:p-8">
            <div className="max-w-xl">
              <h3 className="font-bold text-xl md:text-2xl">
                Ready to gain real experience?
              </h3>
              <p className="mt-2 text-slate-600 text-sm md:text-base">
                Apply for internships or volunteer as a mentor to shape the next
                generation of talent.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/mentor"
                className="inline-flex items-center gap-2 rounded-full border border-rose-100 px-6 py-3 text-rose-900 transition hover:bg-rose-300"
              >
                Become a Mentor <LuExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
