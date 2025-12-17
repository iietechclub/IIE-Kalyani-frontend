"use client";

import React, { useState, useMemo } from 'react';
import { Handshake, Target, Users, Lightbulb, Award, Rocket, Search, ChevronDown, ClipboardCheck, Download } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { MotionArticle, MotionDiv } from '@/components/animated/motion';

// IndustryCollaboration.jsx — Examination-style hero + existing content
export default function IndustryCollaboration() {
  const collaborationTypes = [
    { icon: Target, title: 'Curriculum Development', description: 'Industry experts contribute to curriculum design ensuring relevance to market needs', features: ['Industry-aligned course content', 'Regular curriculum review', 'Latest technology integration', 'Practical case studies'] },
    { icon: Users, title: 'Guest Lectures & Seminars', description: 'Regular sessions by industry professionals sharing real-world insights', features: ['Expert guest lectures', 'Technical seminars', 'Industry trends discussion', 'Career guidance sessions'] },
    { icon: Lightbulb, title: 'Joint Research Projects', description: 'Collaborative research initiatives between institute and industry partners', features: ['Sponsored research projects', 'Technology development', 'Innovation labs', 'Patent applications'] },
    { icon: Rocket, title: 'Sponsored Labs & Equipment', description: 'Industry partnerships for state-of-the-art laboratory facilities', features: ['Modern lab equipment', 'Software licenses', 'Technology infrastructure', 'Training facilities'] }
  ];

  const benefits = [
    { title: 'For Students', points: ['Exposure to real industry problems', 'Hands-on experience with latest technologies', 'Better placement opportunities', 'Industry mentorship and guidance', 'Networking opportunities'] },
    { title: 'For Industry', points: ['Access to skilled talent pool', 'Research and development support', 'Brand visibility among students', 'Early identification of potential recruits', 'Contribution to skill development'] },
    { title: 'For Institution', points: ['Enhanced curriculum relevance', 'Better placement records', 'Research opportunities', 'Infrastructure development', 'Industry recognition'] }
  ];

  const initiatives = [
    { title: 'Industry Advisory Board', description: 'A dedicated board comprising industry leaders who provide strategic guidance on academic programs and ensure alignment with industry requirements.' },
    { title: 'Memorandum of Understanding (MoUs)', description: 'Formal partnerships with leading companies for internships, placements, joint research, and knowledge exchange programs.' },
    { title: 'Industry Visits', description: 'Regular industrial visits organized for students to understand manufacturing processes, business operations, and workplace culture.' },
    { title: 'Live Project Implementation', description: 'Students work on real industry projects under the guidance of both faculty and industry mentors, solving actual business problems.' },
    { title: 'Corporate Training Programs', description: 'Specialized training sessions conducted by industry professionals on emerging technologies and industry best practices.' },
    { title: 'Innovation and Incubation', description: 'Support for student startups and innovative ideas with guidance and resources from industry partners.' }
  ];

  const partners = ['Technology Sector', 'Manufacturing Industry', 'Consulting Firms', 'Core Engineering Companies', 'IT & Software Services', 'Automobile Industry', 'Infrastructure Sector', 'Banking & Finance'];

  // UI state
  const [query, setQuery] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [partnerFilter, setPartnerFilter] = useState('All');
  const partnerCategories = useMemo(() => ['All', ...partners], [partners]);

  const filteredCollab = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return collaborationTypes;
    return collaborationTypes.filter(c => (c.title + ' ' + c.description + ' ' + c.features.join(' ')).toLowerCase().includes(q));
  }, [query]);

  // hero assets — replace with real paths
  const heroImage = 'https://urli.info/1esM-'; // change to your hero image url
  const pdfHref = '/assets/industry-partners-brochure.pdf'; // change to your MoU/partners pdf

  return (
    <div className="min-h-screen bg-neutral-50 text-black">
      {/* Breadcrumb */}
      <div className="sticky top-0 z-40 border-gray-200 border-b bg-white/60 backdrop-blur">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/training">Training & Placement</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Industry Collaboration</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero*/}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="h-[360px] w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-gray-600 to-black/30" />
        </div>

        <div className="relative mx-auto mt-20 flex max-w-7xl flex-col items-center gap-8 px-4 py-20 lg:flex-row">
          <div className="z-10 flex-1 text-center text-white lg:text-left">
            <MotionDiv initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex items-center gap-4 rounded-xl p-3">
                <ClipboardCheck className="h-12 w-12 text-white" />
                <div className="text-left">
                  <h1 className="text-3xl md:text-4xl font-bold">Industry Collaboration</h1>
                  <p className="text-sm md:text-base text-white/90">
                    Strengthening academia-industry ties — MoUs, sponsored labs, projects, internships and joint research.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Collaboration Types */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-xl font-semibold mb-8">Types of Collaboration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCollab.map((type, idx) => {
              const Icon = type.icon;
              return (
                <MotionArticle key={idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 * idx }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{type.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{type.description}</p>

                      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {type.features.map((f, i2) => (
                          <li key={i2} className="text-sm text-slate-700 flex items-start gap-2">
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-xl font-semibold mb-8">Benefits of Industry Collaboration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <MotionDiv key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 * i }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-center text-rose-600 font-semibold mb-4">{b.title}</h3>
                <ul className="space-y-2 text-sm text-slate-700 ">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-rose-600 mt-0.5" />
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xl font-semibold mb-6">Collaboration Initiatives</h2>
          <div className="space-y-3">
            {initiatives.map((it, i) => (
              <MotionDiv key={i} initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.04 * i }} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button type="button" onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left px-5 py-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold">{it.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{it.description.slice(0, 80)}...</div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
                </button>

                <div className={`${openIdx === i ? 'max-h-screen p-5' : 'max-h-0 p-0'} transition-[max-height] duration-300 text-sm text-slate-700 bg-white/50`}>
                  <p>{it.description}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  );
}