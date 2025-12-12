'use client';

import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Camera } from 'lucide-react';

export default function GalleryPageWithHero() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'campus' | 'events' | 'academics' | 'sports'>('all');

  const galleryCategories = [
    { id: 'all', name: 'All', aria: 'All Photos' },
    { id: 'campus', name: 'Campus', aria: 'Campus Life' },
    { id: 'events', name: 'Events', aria: 'Events' },
    { id: 'academics', name: 'Academics', aria: 'Academics' },
    { id: 'sports', name: 'Sports', aria: 'Sports' },
  ] as const;

  const galleryImages = [
    { id: 1, title: 'Annual Convocation 2024', category: 'events', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80', date: 'Dec 2024' },
    { id: 2, title: 'Campus Infrastructure', category: 'campus', src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80', date: 'Nov 2024' },
    { id: 3, title: 'Tech Fest 2024', category: 'events', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80', date: 'Oct 2024' },
    { id: 4, title: 'Computer Lab Session', category: 'academics', src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80', date: 'Sep 2024' },
    { id: 5, title: 'Cricket Championship', category: 'sports', src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1600&q=80', date: 'Aug 2024' },
    { id: 6, title: 'Cultural Night', category: 'events', src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80', date: 'Aug 2024' },
    { id: 7, title: 'Central Library', category: 'campus', src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80', date: 'Jul 2024' },
    { id: 8, title: 'Engineering Workshop', category: 'academics', src: 'https://images.unsplash.com/photo-1581093458791-9d42e1bbf0c5?auto=format&fit=crop&w=1600&q=80', date: 'Jun 2024' },
    { id: 9, title: 'Football Tournament', category: 'sports', src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1600&q=80', date: 'May 2024' },
    { id: 10, title: 'Independence Day Celebration', category: 'events', src: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1600&q=80', date: 'Aug 2024' },
    { id: 11, title: 'Student Lounge Area', category: 'campus', src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80', date: 'Apr 2024' },
    { id: 12, title: 'Science Exhibition', category: 'academics', src: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1600&q=80', date: 'Mar 2024' },
  ] as const;

  // generate random heights once so layout is 'random' and stable
  const imageHeights = useMemo(() => {
    const rng = (seed: number) => {
      let s = seed;
      return () => (s = (s * 9301 + 49297) % 233280) / 233280;
    };
    const rand = rng(12345);
    return galleryImages.reduce<Record<number, number>>((acc, img) => {
      const h = Math.round(160 + Math.floor(rand() * 260)); // 160..420
      acc[img.id] = h;
      return acc;
    }, {});
  }, [galleryImages]);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(i => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50/30 to-white">
      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/campus">Campus Life</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Gallery</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* HERO BANNER */}
      <header className="relative">
        <div className="h-64 sm:h-96 w-full relative  bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30"></div>

          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4">
                <Camera className="w-5 h-5 text-white" />
                <span className="text-sm">Campus Gallery</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold mb-3">Memories, Moments & Events — IIE Kalyani</h1>
              <p className="text-sm sm:text-base text-white/90 mb-4">
                Browse through highlights from past events, campus life and academic moments. Click an image to view the full-sized photo.
              </p>

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => {
                    // jump to gallery grid
                    document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white shadow"
                >
                  View Photos
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Intro + category buttons */}
      <section className="container mx-auto px-4 pt-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-muted-foreground">
            Our photo gallery captures the spirit of campus: energetic fests, focused academic sessions, sports moments and everyday student life.
          </p>
        </div>

        {/* category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {galleryCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm transition-shadow ${activeCategory === cat.id ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-700 border'}`}
              aria-pressed={activeCategory === cat.id}
              aria-label={cat.aria}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry gallery using CSS columns */}
      <main id="gallery-grid" className="container mx-auto px-4 pb-20">
        <div className="masonry-gallery" style={{ columnGap: '1rem' }}>
          <style>{`
            .masonry-gallery { column-count: 1; }
            @media (min-width: 640px) { .masonry-gallery { column-count: 2; } }
            @media (min-width: 1024px) { .masonry-gallery { column-count: 3; } }
            @media (min-width: 1280px) { .masonry-gallery { column-count: 4; } }
            .masonry-item { break-inside: avoid; -webkit-column-break-inside: avoid; margin-bottom: 1rem; }
          `}</style>

          {filtered.map((img, idx) => (
            <motion.figure
              key={img.id}
              className="masonry-item rounded-lg overflow-hidden bg-gray-100 shadow-sm"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              style={{ cursor: 'pointer' }}
              title={`${img.title} — ${img.date}`}
              onClick={() => window.open(img.src, '_blank', 'noopener,noreferrer')}
            >
            <div style={{ height: imageHeights[img.id], overflow: 'hidden' }} className="relative"> 
                <Image
                  src={img.src}
                  alt={img.title}
                  fill 
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

              <figcaption className="p-3 text-sm text-muted-foreground">
                <div className="font-medium">{img.title}</div>
                <div className="text-xs">{img.date}</div>
              </figcaption>
            </motion.figure>
          ))}

        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No images in this category.</div>
        )}
      </main>
    </div>
  );
}
