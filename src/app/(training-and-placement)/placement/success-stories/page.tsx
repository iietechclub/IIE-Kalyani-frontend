"use client"
import { useState } from 'react';
import { LuExternalLink, LuClipboardCheck } from 'react-icons/lu';
import Image from 'next/image';
import { MotionArticle, MotionDiv } from '@/components/animated/motion';

// White background - 3 column responsive layout
export default function SuccessStories() {
  const initialStories = [
    { name: 'Rahidul Khan', branch: 'Computer Science & Engineering', batch: '2027', company: 'TATA Consultancy', package: '0000 LPA', story: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting.', avatar: '' },
    { name: 'Rohit Sen', branch: 'Computer Science & Engineering', batch: '2024', company: 'TCS', package: '7.5 LPA', story: "My journey at IIE Kalyani was transformative. The placement cell provided excellent training and guidance that helped me secure a position at TCS. The mock interviews and technical sessions were particularly helpful.", avatar: '' },
    { name: 'Nisha Roy', branch: 'Electrical Engineering', batch: '2024', company: 'Larsen & Toubro', package: '8.2 LPA', story: "The faculty support and industry exposure I received at IIE Kalyani prepared me well for corporate life. The placement process was smooth and well-organized.", avatar: '' },
    { name: 'Aman Gupta', branch: 'Mechanical Engineering', batch: '2023', company: 'Tata Motors', package: '9.0 LPA', story: "IIE Kalyani gave me a strong foundation in both technical and soft skills. The training programs conducted by the placement cell helped me understand industry expectations.", avatar: '' },
    { name: 'Sonal Verma', branch: 'Computer Science & Engineering', batch: '2023', company: 'Infosys', package: '6.5 LPA', story: "The placement cell's dedication and support made all the difference. From resume building to interview preparation, every aspect was covered. I'm now part of a great team at Infosys.", avatar: '' },
    { name: 'Pooja Singh', branch: 'Civil Engineering', batch: '2024', company: 'JSW Steel', package: '7.8 LPA', story: "My experience at IIE Kalyani was enriching. The practical approach to education and regular industry interactions gave me real-world insights.", avatar: '' },
  ];

  const [active, setActive] = useState<typeof initialStories[0] | null>(null);
  const demoLeftImage = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80';
  const heroImage = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=80';

  return (
    <div className="min-h-screen pt-13 bg-gray-50 text-slate-900">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-[260px] md:h-80 lg:h-[360px] bg-cover bg-center opacity-70"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-rose-700/70 to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto mt-16 px-4 py-16 flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 text-center lg:text-left text-white z-10">
            <MotionDiv
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-4 p-3 rounded-xl mb-6">
                <LuClipboardCheck className="w-12 h-12 text-white" />
                <div className="text-left">
                  <h1 className="text-3xl md:text-4xl font-bold">Success Stories</h1>
                  <p className="text-sm md:text-base text-white/90 max-w-xl">
                    Read inspiring alumni journeys — how placement support, mentorship, and exposure helped them succeed.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* 3-column Stories Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {initialStories.map((s, i) => (
            <MotionArticle
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* LEFT visual */}
                <div className="md:w-1/2 w-full relative h-48 md:h-auto bg-gray-200">
                  <Image
                    fill
                    src={s.avatar || demoLeftImage}
                    alt={`${s.name} visual`}
                    className="absolute inset-0 w-full h-full object-cover brightness-95"
                  />
                  <div className="absolute left-13 bottom-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 text-xs text-gray-700 bg-white/80 hover:bg-white transition"
                    >
                      Watch YouTube Video <LuExternalLink className="w-3 h-5" />
                    </a>
                  </div>
                </div>

                {/* RIGHT content */}
                <div className="md:w-1/2 w-full p-6 flex flex-col">
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900">{s.name}</h2>
                    <p className="text-xs text-gray-500 mt-1">{s.branch} • {s.batch}</p>
                  </div>

                  <div className="flex items-center justify-between mt-3 mb-4">
                    <div className="text-sm font-semibold text-rose-600">{s.company}</div>
                    <div className="text-xs text-gray-500">{s.package}</div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-6">{s.story}</p>

                  
                </div>
              </div>
            </MotionArticle>
          ))}
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setActive(null)} />
          <MotionDiv
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-2xl w-full bg-white rounded-2xl p-6 z-10 shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden">
                <Image
                  fill
                  src={active.avatar || demoLeftImage}
                  alt={active.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{active.name}</h3>
                <div className="text-xs text-gray-500">{active.branch} • Batch {active.batch}</div>
                <div className="text-xs text-rose-600 mt-1">{active.company} • {active.package}</div>
              </div>
              <button onClick={() => setActive(null)} className="text-sm text-gray-500">Close</button>
            </div>
            <hr className="my-4" />
            <p className="text-sm text-gray-700">{active.story}</p>
            <div className="mt-4 text-right">
              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-rose-600 hover:underline">
                Contact Placement Cell
              </a>
            </div>
          </MotionDiv>
        </div>
      )}
    </div>
  );
}
