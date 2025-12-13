'use client';

import { useMemo } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  TrendingUp,
  Building,
  ClipboardCheck,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const heroImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80";

const benefits = [
  {
    icon: TrendingUp,
    title: "Real-world Experience",
    description:
      "Work on live projects and learn practical problem solving, not just theory.",
  },
  {
    icon: Building,
    title: "Skill Enhancement",
    description:
      "Develop industry-relevant skills and tools that make you production-ready.",
  },
  {
    icon: Briefcase,
    title: "Industry Network",
    description:
      "Build professional relationships that often turn into mentorships and job opportunities.",
  },
  {
    icon: ClipboardCheck,
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

export default function InternshipsFocused() {
  const uniqueBenefits = useMemo(() => benefits, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white ">
      {/* Focused Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="w-full h-[420px] md:h-[520px] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
          <div className="absolute -right-36 -top-28 w-96 h-96 bg-[#FF6B35]/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-[144px] pb-[20px] md:pb-[24px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left text-white max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Why Internships Matter
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl text-white/90">
                Internships bridge the gap between learning and
                doing — gain experience, grow your network, and
                unlock career opportunities.
              </p>

              
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-12">
        {/* Value proposition / Benefits */}
        <section className="p-8 md:p-12  -mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-rose-600">
                What you gain from an internship
              </h2>
              <p className="mt-4 text-base text-slate-600 max-w-2xl">
                Practical exposure, mentorship and measurable
                outcomes — internships are the fastest way to
                turn learning into impact.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {uniqueBenefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.title}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.06 * i }}
                      className="flex gap-5 items-start p-5"
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center shadow">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">
                          {b.title}
                        </h4>
                        <p className="text-sm text-slate-600 mt-1">
                          {b.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right column: larger aesthetic card with image + quick stats + CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.99 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-rose-50 border border-gray-100"
            >
              <div className="relative">
                <Image
                  src={heroImage}
                  alt="Internship"
                    width={1200}
                    height={600}
                  className="w-full h-64 object-cover"
                  
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <div className="text-sm text-slate-500">
                      Partner network
                    </div>
                    <div className="text-lg font-semibold mt-1">
                      120+ Companies
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">
                      PPO Rate
                    </div>
                    <div className="text-2xl font-bold text-rose-600">
                      18%
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-600">
                  Our industry partnerships and mentor network
                  help students turn internships into long-term
                  opportunities and career growth.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="mt-12">
          <h3 className="text-center text-4xl font-bold mb-8">
            Internship Process — simple & transparent
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center font-semibold mb-4 text-lg">
                  {p.step}
                </div>
                <h4 className="font-semibold text-lg">
                  {p.title}
                </h4>
                <p className="text-sm text-slate-600 mt-3">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Strip */}
        <section id="apply" className="mt-16 mb-24">
          <div className="bg-gradient-to-r from-rose-50 to-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-xl md:text-2xl font-bold">
                Ready to gain real experience?
              </h3>
              <p className="text-sm md:text-base text-slate-600 mt-2">
                Apply for internships or volunteer as a mentor
                to shape the next generation of talent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/mentor"
                className="inline-flex items-center gap-2 border border-rose-100 px-6 py-3 rounded-full text-rose-900 hover:bg-rose-300 transition"
              >
                Become a Mentor{" "}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}