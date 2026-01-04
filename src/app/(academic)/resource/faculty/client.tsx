"use client";
import Image from "next/image";
import { useState } from "react";
import { MotionDiv } from "@/components/animated/motion";
import BackendImage from "@/components/BackendImage";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function FacultyClient({ departments }: OurFacultyPageData) {
  const [activeDept, setActiveDept] = useState<string>(
    departments[0].documentId ?? "",
  );

  // const _flatFaculty: FacultyMember[] = useMemo(
  //   () =>
  //     departments.flatMap((d) =>
  //       d.faculty.map((f) => ({ ...f, _deptId: d.id }) as FacultyMember),
  //     ),
  //   [],
  // );

  // const _dept = useMemo(
  //   () => departments.find((d) => d.id === activeDept) ?? departments[0],
  //   [activeDept],
  // );

  // Hero image placeholder

  const heroImage =
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920";

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-red-50/30 to-white">
      {/* HERO: matches library-style snippet (same sizes, spacing, badge, CTA style) */}
      <header className="relative">
        <div className="relative h-64 overflow-hidden md:h-96">
          <MotionDiv
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImage}
              alt="IIE Kalyani Campus"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-transparent to-black/30" />
          </MotionDiv>

          <div className="container relative z-10 mx-auto flex h-full items-center px-4">
            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-white"
            >
              <Badge className="mb-4 border-white/30 bg-white/20 text-white">
                Faculty & Departments
              </Badge>

              <h1 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl">
                Our Faculty
              </h1>

              <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
                Meet the team of experienced educators and researchers shaping
                IIE Kalyani — filter, search or contact directly.
              </p>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Main content */}
      <section id="departments" className="py-6">
        {/* Custom Tabs Implementation */}
        <div className="container mx-auto space-y-8 px-4">
          <div className="scrollbar-hide flex w-full items-center justify-between gap-2 overflow-x-auto">
            {departments.map(({ documentId, name }) => (
              <button
                key={documentId}
                type="button"
                onClick={() => setActiveDept(documentId)}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-xs shadow transition sm:text-sm",
                  documentId === activeDept
                    ? "border bg-neutral-100 text-red-700"
                    : "bg-red-50 text-gray-700 hover:bg-red-100",
                )}
              >
                <span className="truncate text-center">{name}</span>
                {/* <span className="ml-1 rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] text-red-600">
                      {faculties.length}
                    </span> */}
              </button>
            ))}
          </div>

          {departments
            .filter((d) => d.documentId === activeDept)
            .map(({ documentId, name, hod, faculties }) => (
              <div key={documentId}>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                  {!faculties.length && (
                    <div className="col-span-full rounded-2xl bg-gray-50 p-6 text-center">
                      No faculty match your search for <strong>{name}</strong>.
                    </div>
                  )}

                  {faculties.map((member, idx) => {
                    const isHod = member.documentId === hod.documentId;
                    return (
                      <MotionDiv
                        key={member.documentId}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        {/* Portrait-style card */}
                        <article
                          className="hover:-translate-y-2 transform overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-2xl"
                          aria-label={`Profile card for ${member.name}`}
                          style={{ width: "100%" }}
                        >
                          {/* portrait area */}
                          <div className="relative h-72 bg-gray-100 md:h-80">
                            <BackendImage
                              fill
                              src={member.image.url}
                              alt={member.name}
                              className="object-cover"
                            />

                            {/* translucent amber info pill overlapping bottom */}
                            <section
                              className="absolute inset-x-4 bottom-3"
                              aria-label={`${member.name} info`}
                            >
                              <div
                                className="rounded-lg p-3 shadow-lg"
                                style={{
                                  background:
                                    "linear-gradient(90deg, rgba(246,183,107,0.78), rgba(245,158,59,0.78))",
                                  borderRadius: 14,
                                  backdropFilter: "blur(4px)",
                                  WebkitBackdropFilter: "blur(4px)",
                                }}
                              >
                                <div className="truncate font-semibold text-black text-sm leading-snug md:text-base">
                                  {member.name}
                                </div>
                                <div className="mt-1 truncate text-black/80 text-xs italic">
                                  {member.designation}
                                </div>
                                {!!member.qualifications.length && (
                                  <div className="mt-1 truncate text-black/70 text-xs">
                                    {`${member.qualifications.map((q) => q.text).join(", ")} ${isHod && "& HOD"}`}
                                  </div>
                                )}
                              </div>
                            </section>

                            {/* decorative strip under the pill */}
                            <div className="pointer-events-none absolute right-6 bottom-4 left-6 md:bottom-6">
                              <div
                                className="ml-auto h-2 w-20 rounded-md shadow-md"
                                style={{
                                  background:
                                    "linear-gradient(90deg, rgba(0,0,0,0.06), rgba(0,0,0,0.12))",
                                  transform: "rotate(-4deg)",
                                }}
                              />
                            </div>
                          </div>

                          {/* spacer to account for overlapping pill */}
                          {/* <div className="h-8" /> */}

                          {/* Contact info commented out  */}
                          {/* <div className="p-4 pt-0" /> */}
                        </article>
                      </MotionDiv>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* bottom spacing */}
      <div className="py-12" />
    </div>
  );
}
