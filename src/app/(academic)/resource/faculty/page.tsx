"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { MotionDiv } from "@/components/animated/motion";
import { Badge } from "@/components/ui/badge";

type FacultyMember = {
  name: string;
  designation: string;
  qualification?: string;
  specialization?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  office?: string;
  research?: string;
  _deptId?: string;
};

type Department = {
  id: string;
  name: string;
  faculty: FacultyMember[];
};

export default function Faculty() {
  const [query, _setQuery] = useState("");
  const [activeDept, setActiveDept] = useState<string>("cse");

  const departments: Department[] = [
    {
      id: "cse",
      name: "Computer Science & Engineering",
      faculty: [
        {
          name: "Dr. Ananya Roy",
          designation: "Professor & HOD",
          qualification: "Ph.D. ",
          specialization: "AI, ML, Computer Vision",
          avatar: "/images/faculty/ananya.jpg",
        },
        {
          name: "Prof. Rohan Das",
          designation: "Associate Professor",
          qualification: "M.Tech",
          specialization: "Data Science, Big Data",
          avatar: "/images/faculty/rohan.jpg",
        },
        {
          name: "Ms. Sanya Verma",
          designation: "Assistant Professor",
          qualification: "M.Tech",
          specialization: "Web & Cloud",
          avatar: "/images/faculty/sanya.jpg",
        },
        {
          name: "Dr. Ananya Roy",
          designation: "Professor & HOD",
          qualification: "Ph.D.",
          specialization: "AI, ML, Computer Vision",
          avatar: "/images/faculty/ananya.jpg",
        },
        {
          name: "Prof. Rohan Das",
          designation: "Associate Professor",
          qualification: "M.Tech",
          specialization: "Data Science, Big Data",
          avatar: "/images/faculty/rohan.jpg",
        },
        {
          name: "Ms. Sanya Verma",
          designation: "Assistant Professor",
          qualification: "M.Tech",
          specialization: "Web & Cloud",
          avatar: "/images/faculty/sanya.jpg",
        },
      ],
    },
    {
      id: "ee",
      name: "Electrical Engineering",
      faculty: [
        {
          name: "Dr. Vikram Sen",
          designation: "Professor & HOD",
          qualification: "Ph.D. (EE)",
          specialization: "Power Systems, Renewable Energy",
          avatar: "/images/faculty/vikram.jpg",
        },
        {
          name: "Prof. Meera Nair",
          designation: "Associate Professor",
          qualification: "M.Tech",
          specialization: "Control Systems",
          avatar: "/images/faculty/meera.jpg",
        },
        {
          name: "Dr. Vikram Sen",
          designation: "Professor & HOD",
          qualification: "Ph.D. (EE)",
          specialization: "Power Systems, Renewable Energy",
          avatar: "/images/faculty/vikram.jpg",
        },
        {
          name: "Prof. Meera Nair",
          designation: "Associate Professor",
          qualification: "M.Tech",
          specialization: "Control Systems",
          avatar: "/images/faculty/meera.jpg",
        },
      ],
    },
    {
      id: "me",
      name: "Mechanical Engineering",
      faculty: [
        {
          name: "Dr. Sanjay Mishra",
          designation: "Professor & HOD",
          qualification: "Ph.D. (ME)",
          specialization: "Thermal Engineering",
          avatar: "/images/faculty/sanjay.jpg",
        },
        {
          name: "Dr. Sanjay Mishra",
          designation: "Professor & HOD",
          qualification: "Ph.D. (ME)",
          specialization: "Thermal Engineering",
          avatar: "/images/faculty/sanjay.jpg",
        },
        {
          name: "Dr. Sanjay Mishra",
          designation: "Professor & HOD",
          qualification: "Ph.D. (ME)",
          specialization: "Thermal Engineering",
          avatar: "/images/faculty/sanjay.jpg",
        },
        {
          name: "Dr. Sanjay Mishra",
          designation: "Professor & HOD",
          qualification: "Ph.D. (ME)",
          specialization: "Thermal Engineering",
          avatar: "/images/faculty/sanjay.jpg",
        },
        {
          name: "Dr. Sanjay Mishra",
          designation: "Professor & HOD",
          qualification: "Ph.D. (ME)",
          specialization: "Thermal Engineering",
          avatar: "/images/faculty/sanjay.jpg",
        },
      ],
    },
    {
      id: "basic",
      name: "Basic Science & Humanities",
      faculty: [
        {
          name: "Dr. Sunita Bose",
          designation: "Professor",
          qualification: "Ph.D. (Physics)",
          specialization: "Applied Physics",
          avatar: "/images/faculty/sunita.jpg",
        },
        {
          name: "Dr. Sunita Bose",
          designation: "Professor",
          qualification: "Ph.D. (Physics)",
          specialization: "Applied Physics",
          avatar: "/images/faculty/sunita.jpg",
        },
        {
          name: "Dr. Sunita Bose",
          designation: "Professor",
          qualification: "Ph.D. (Physics)",
          specialization: "Applied Physics",
          avatar: "/images/faculty/sunita.jpg",
        },
        {
          name: "Dr. Sunita Bose",
          designation: "Professor",
          qualification: "Ph.D. (Physics)",
          specialization: "Applied Physics",
          avatar: "/images/faculty/sunita.jpg",
        },
        {
          name: "Dr. Sunita Bose",
          designation: "Professor",
          qualification: "Ph.D. (Physics)",
          specialization: "Applied Physics",
          avatar: "/images/faculty/sunita.jpg",
        },
        {
          name: "Dr. Sunita Bose",
          designation: "Professor",
          qualification: "Ph.D. (Physics)",
          specialization: "Applied Physics",
          avatar: "/images/faculty/sunita.jpg",
        },
        {
          name: "Dr. Sunita Bose",
          designation: "Professor",
          qualification: "Ph.D. (Physics)",
          specialization: "Applied Physics",
          avatar: "/images/faculty/sunita.jpg",
        },
      ],
    },
    {
      id: "aiml",
      name: "Artificial Intelligence & Machine Learning",
      faculty: [
        {
          name: "Dr. Priya Sen",
          designation: "Professor & HOD",
          qualification: "Ph.D. (AI & Robotics)",
          specialization: "Neural Networks, NLP",
          avatar: "/images/faculty/priya.jpg",
        },
        {
          name: "Mr. Arindam Paul",
          designation: "Assistant Professor",
          qualification: "M.Tech (AI)",
          specialization: "Computer Vision, Deep Learning",
          email: "arindam.paul@iiekalyani.com",
          phone: "+91 70000 00009",
          avatar: "/images/faculty/arindam.jpg",
          office: "Block E, Room 502",
          research: "Autonomous systems and image analytics",
        },
        {
          name: "Dr. Priya Sen",
          designation: "Professor & HOD",
          qualification: "Ph.D. (AI & Robotics)",
          specialization: "Neural Networks, NLP",
          avatar: "/images/faculty/priya.jpg",
        },
        {
          name: "Mr. Arindam Paul",
          designation: "Assistant Professor",
          qualification: "M.Tech (AI)",
          specialization: "Computer Vision, Deep Learning",
          email: "arindam.paul@iiekalyani.com",
          phone: "+91 70000 00009",
          avatar: "/images/faculty/arindam.jpg",
          office: "Block E, Room 502",
          research: "Autonomous systems and image analytics",
        },
        {
          name: "Dr. Priya Sen",
          designation: "Professor & HOD",
          qualification: "Ph.D. (AI & Robotics)",
          specialization: "Neural Networks, NLP",
          avatar: "/images/faculty/priya.jpg",
        },
        {
          name: "Mr. Arindam Paul",
          designation: "Assistant Professor",
          qualification: "M.Tech (AI)",
          specialization: "Computer Vision, Deep Learning",
          email: "arindam.paul@iiekalyani.com",
          phone: "+91 70000 00009",
          avatar: "/images/faculty/arindam.jpg",
          office: "Block E, Room 502",
          research: "Autonomous systems and image analytics",
        },
        {
          name: "Dr. Priya Sen",
          designation: "Professor & HOD",
          qualification: "Ph.D. (AI & Robotics)",
          specialization: "Neural Networks, NLP",
          avatar: "/images/faculty/priya.jpg",
        },
        {
          name: "Mr. Arindam Paul",
          designation: "Assistant Professor",
          qualification: "M.Tech (AI)",
          specialization: "Computer Vision, Deep Learning",
          email: "arindam.paul@iiekalyani.com",
          phone: "+91 70000 00009",
          avatar: "/images/faculty/arindam.jpg",
          office: "Block E, Room 502",
          research: "Autonomous systems and image analytics",
        },
      ],
    },
    {
      id: "ece",
      name: "Electronics & Communication Engineering",
      faculty: [
        {
          name: "Dr. Reema Kapoor",
          designation: "Professor & HOD",
          qualification: "Ph.D. (ECE)",
          specialization: "VLSI, Embedded Systems",
          avatar: "/images/faculty/reema.jpg",
        },
        {
          name: "Prof. Ankit Malhotra",
          designation: "Associate Professor",
          qualification: "M.Tech (ECE)",
          specialization: "Signal Processing, IoT",
          avatar: "/images/faculty/ankit.jpg",
        },
        {
          name: "Dr. Reema Kapoor",
          designation: "Professor & HOD",
          qualification: "Ph.D. (ECE)",
          specialization: "VLSI, Embedded Systems",
          avatar: "/images/faculty/reema.jpg",
        },
        {
          name: "Prof. Ankit Malhotra",
          designation: "Associate Professor",
          qualification: "M.Tech (ECE)",
          specialization: "Signal Processing, IoT",
          avatar: "/images/faculty/ankit.jpg",
        },
        {
          name: "Dr. Reema Kapoor",
          designation: "Professor & HOD",
          qualification: "Ph.D. (ECE)",
          specialization: "VLSI, Embedded Systems",
          avatar: "/images/faculty/reema.jpg",
        },
        {
          name: "Prof. Ankit Malhotra",
          designation: "Associate Professor",
          qualification: "M.Tech (ECE)",
          specialization: "Signal Processing, IoT",
          avatar: "/images/faculty/ankit.jpg",
        },
      ],
    },
    {
      id: "ce",
      name: "Civil Engineering",
      faculty: [
        {
          name: "Dr. Pankaj Sharma",
          designation: "Professor & HOD",
          qualification: "Ph.D. (Civil)",
          specialization: "Structural Engineering",
          avatar: "/images/faculty/pankaj.jpg",
        },
        {
          name: "Ms. Kavita Das",
          designation: "Assistant Professor",
          qualification: "M.Tech (Civil)",
          specialization: "Environmental Engineering",
          avatar: "/images/faculty/kavita.jpg",
        },
        {
          name: "Dr. Pankaj Sharma",
          designation: "Professor & HOD",
          qualification: "Ph.D. (Civil)",
          specialization: "Structural Engineering",
          avatar: "/images/faculty/pankaj.jpg",
        },
        {
          name: "Ms. Kavita Das",
          designation: "Assistant Professor",
          qualification: "M.Tech (Civil)",
          specialization: "Environmental Engineering",
          avatar: "/images/faculty/kavita.jpg",
        },
        {
          name: "Dr. Pankaj Sharma",
          designation: "Professor & HOD",
          qualification: "Ph.D. (Civil)",
          specialization: "Structural Engineering",
          avatar: "/images/faculty/pankaj.jpg",
        },
        {
          name: "Ms. Kavita Das",
          designation: "Assistant Professor",
          qualification: "M.Tech (Civil)",
          specialization: "Environmental Engineering",
          avatar: "/images/faculty/kavita.jpg",
        },
      ],
    },
    {
      id: "bba",
      name: "Bachelor of Business Administration",
      faculty: [
        {
          name: "Dr. Rajesh Khanna",
          designation: "Professor & HOD",
          qualification: "Ph.D. (Management)",
          specialization: "Marketing & Strategy",
          avatar: "/images/faculty/rajesh.jpg",
        },
        {
          name: "Ms. Shruti Mehta",
          designation: "Assistant Professor",
          qualification: "MBA (Finance)",
          specialization: "Financial Management",
          avatar: "/images/faculty/shruti.jpg",
        },
      ],
    },
  ];
  const matchesQuery = (m: FacultyMember, q: string) => {
    if (!q) return true;
    const s = q.toLowerCase();
    return (
      (m.name || "").toLowerCase().includes(s) ||
      (m.specialization || "").toLowerCase().includes(s) ||
      (m.research || "").toLowerCase().includes(s) ||
      (m.qualification || "").toLowerCase().includes(s) ||
      (m.designation || "").toLowerCase().includes(s)
    );
  };

  const _flatFaculty: FacultyMember[] = useMemo(
    () =>
      departments.flatMap((d) =>
        d.faculty.map((f) => ({ ...f, _deptId: d.id }) as FacultyMember),
      ),
    [],
  );

  const _dept = useMemo(
    () => departments.find((d) => d.id === activeDept) ?? departments[0],
    [activeDept],
  );

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
        <div className="container mx-auto px-4">
          {/* Custom Tabs Implementation */}
          <div className="w-full">
            <div className="-mx-[50vw] relative right-1/2 left-1/2 mb-4 w-[95vw]">
              <div className="flex w-full max-w-[100vw] items-center justify-between overflow-x-auto overflow-y-hidden">
                {departments.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setActiveDept(d.id)}
                    className={`inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-xs transition sm:text-sm ${d.id === activeDept ? "bg-white text-red-700 ring-2 ring-red-200" : "bg-red-50 text-gray-700 hover:bg-red-100"}`}
                  >
                    <span className="truncate text-center">{d.name}</span>
                    <span className="ml-1 rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] text-red-600">
                      {d.faculty.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {departments.map((d) => {
              const q = query.trim().toLowerCase();
              const facultyForDept = (d.faculty || []).filter((m) =>
                matchesQuery(m, q),
              );

              if (d.id !== activeDept) return null;

              return (
                <div key={d.id}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                    {facultyForDept.length === 0 && (
                      <div className="col-span-full rounded-2xl bg-gray-50 p-6 text-center">
                        No faculty match your search for{" "}
                        <strong>{d.name}</strong>.
                      </div>
                    )}

                    {facultyForDept.map((member, idx) => (
                      <MotionDiv
                        key={member.email ?? member.name + idx}
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
                          <div className="relative h-64 bg-gray-100 md:h-72">
                            <Image
                              src={
                                member.avatar ??
                                `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=random`
                              }
                              alt={member.name}
                              fill
                              className="object-cover"
                            />

                            {/* translucent amber info pill overlapping bottom */}
                            <section
                              className="-bottom-6 md:-bottom-8 absolute right-4 left-4"
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
                                {member.qualification && (
                                  <div className="mt-1 truncate text-black/70 text-xs">
                                    {member.qualification}
                                  </div>
                                )}
                              </div>
                            </section>

                            {/* decorative strip under the pill */}
                            <div className="-bottom-2 md:-bottom-4 pointer-events-none absolute right-6 left-6">
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
                          <div className="h-8" />

                          <div className="p-4 pt-0">
                            {/* Contact info commented out  */}
                          </div>
                        </article>
                      </MotionDiv>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* bottom spacing */}
      <div className="py-12" />
    </div>
  );
}
