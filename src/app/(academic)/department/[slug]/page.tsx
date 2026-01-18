import { notFound } from "next/navigation";
import { fetchDepartmentData } from "@/dal/department";

type Props = { params: Promise<{ slug: string }> };

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params;
  const department = await fetchDepartmentData(slug);

  if (!department) return notFound();
  return <Department {...department} />;
}

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
  LuFlaskConical,
  LuGraduationCap,
  LuLightbulb,
  // LuMail,
  LuTarget,
  LuUsers,
} from "react-icons/lu";
import { MotionDiv } from "@/components/animated/motion";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/scroll-reveal";
// import { FacultyCard } from "@/components/FacultyCard";
import BackendImage from "@/components/BackendImage";
import { blocks } from "@/components/blocks";
import { Card, CardContent } from "@/components/ui/card";

// type Faculty = {
//   name: string;
//   designation: string;
//   department: string;
//   specialization: string;
//   tags: string[];
//   image: string;
// };

// type Lab = {
//   name: string;
//   image: string;
// };

type DepartmentProps = Department; // & {faculties: Faculty[];};

function Department({
  name,
  tagline,
  bannerImage,
  hod,
  hod_message,
  oneline_mission,
  oneline_vision,
  about_image,
  about,
  vision_mission_tagline,
  vision,
  mission,
  labs,
  // faculties = [],
}: DepartmentProps) {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-gray-900">
      {/* Hero */}
      <section className="relative z-0 h-[360px] overflow-hidden md:h-[460px]">
        <BackendImage
          fill
          src={bannerImage.url}
          alt={name}
          className="-z-2 object-cover"
        />
        <div className="-z-1 absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="mb-3 font-extrabold text-white"
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontFamily: "Nunito, sans-serif",
                textShadow: "0 6px 18px rgba(0,0,0,0.6)",
              }}
            >
              {name}
            </h1>
            <p
              className="max-w-2xl text-white/90"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              {tagline}
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* HOD Message (reimagined) */}
      <section className="-mt-12 relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-transparent"
        >
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
            {/* HOD Card */}
            {hod && (
              <div className="lg:col-span-1">
                {hod.name && hod.image && (
                  <Card className="overflow-hidden shadow-xl ring-1 ring-black/5">
                    <div className="relative">
                      {/* HOD photo */}
                      <div className="relative aspect-4/3 w-full overflow-hidden">
                        <BackendImage
                          fill
                          src={hod.image.url}
                          alt={`HOD - ${hod.name}`}
                          className="object-cover object-top"
                          style={{ objectPosition: "50% 10%" }}
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="font-semibold text-xl">{hod.name}</h3>
                        <p className="mb-3 text-muted-foreground text-sm">
                          Professor & Head of Department — {name}
                        </p>

                        {/* <div className="mb-4 flex items-center gap-3 text-sm">
                      <div className="ml-auto flex items-center gap-2">
                        <LuMail className="h-4 w-4 text-rose-600" />
                        <a
                          href="mailto:iiecse@gmail.com"
                          className="text-rose-600 hover:underline"
                        >
                          iiecse@gmail.com
                        </a>
                      </div>
                    </div> */}

                        <div className="flex gap-3"></div>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            )}

            {/* Long message / highlights */}
            <div className="space-y-6 lg:col-span-2">
              <Card className="p-6 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="flex-1">
                      <h4 className="mb-3 font-bold text-2xl">
                        Message from the Head
                      </h4>
                      <p className="mb-4 text-muted-foreground leading-relaxed">
                        {hod_message}
                      </p>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <div className="rounded-lg bg-rose-50 p-2">
                            <LuTarget className="h-5 w-5 text-rose-600" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">
                              Our Vision
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {oneline_vision}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="rounded-lg bg-rose-50 p-2">
                            <LuLightbulb className="size-5 text-rose-600" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">
                              Our Mission
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {oneline_mission}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Highlight strip */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Card className="flex items-center gap-4 p-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <LuFlaskConical className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">
                      State-of-the-art Labs
                    </div>
                    <div className="font-semibold">Advanced Laboratories</div>
                  </div>
                </Card>

                <Card className="flex items-center gap-4 p-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <LuUsers className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">
                      Industry Connections
                    </div>
                    <div className="font-semibold">
                      Live projects & internships
                    </div>
                  </div>
                </Card>

                <Card className="flex items-center gap-4 p-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <LuGraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">
                      Student Success
                    </div>
                    <div className="font-semibold">96% placement record</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      {/* About Department */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <h2
              className="mb-12 text-center font-bold text-3xl text-[#1a1a1a] md:text-4xl"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              About the Department
            </h2>
          </ScrollReveal>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="prose max-w-none space-y-4 text-lg text-muted-foreground leading-relaxed">
                <BlocksRenderer content={about} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-[380px] overflow-hidden rounded-2xl shadow-2xl">
                <BackendImage
                  src={about_image.url}
                  fill
                  alt={`${name} Department`}
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 2xl:max-w-7xl">
        {/* Decorative full-bleed gradient edges */}
        <div
          aria-hidden
          className="-z-10 pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-rose-50/50 via-rose-100/40 to-yellow-50/30"
        />

        {/* Soft corner glows */}
        <div
          aria-hidden
          className="-left-12 -top-6 absolute size-56 rounded-full bg-rose-200/20 blur-3xl"
        />
        <div
          aria-hidden
          className="-right-12 -bottom-6 absolute size-72 rounded-full bg-yellow-200/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal direction="up">
            <div className="mb-12 text-center">
              <h2
                className="font-extrabold text-3xl text-[#111827] tracking-tight md:text-4xl"
                style={{
                  fontFamily:
                    "Nunito, system-ui, -apple-system, 'Segoe UI', Roboto",
                }}
              >
                Vision &amp; Mission
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
                {vision_mission_tagline}
              </p>

              {/* decorative underline */}
              <div className="mt-6 flex justify-center gap-2">
                <div className="h-1 w-20 rounded bg-linear-to-r from-rose-500 to-orange-400" />
                <div className="h-1 w-6 rounded bg-rose-200/50" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                whileHover={{ translateY: -6, scale: 1.01 }}
                className="relative h-full"
              >
                {/* floating accent */}
                <div className="-top-6 -left-6 pointer-events-none absolute h-20 w-20 rounded-full bg-rose-200/30 blur-2xl" />

                <Card className="h-full overflow-hidden border border-white/20 bg-white/80 backdrop-blur">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-rose-500 to-orange-400 text-white shadow-lg">
                        <LuTarget className="size-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-2xl text-foreground">
                          Vision
                        </h3>
                        {/* <p className="mt-1 text-muted-foreground text-sm">
                          To be a center of excellence in computer science
                          education, fostering innovation, research, and
                          holistic development of students to become globally
                          competent professionals and ethical leaders in the
                          field of technology.
                        </p> */}
                      </div>
                    </div>

                    <div className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {/* <p className="mb-3">
                        We aim to equip students with a strong theoretical
                        foundation and practical skills in algorithms, systems,
                        and AI — prepared to solve real-world problems
                        responsibly and creatively.
                        </p>
                        
                        <div className="mt-3 flex flex-wrap gap-2">
                        <span className="inline-block rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-rose-600 text-xs">
                        Algorithms
                        </span>
                        <span className="inline-block rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-amber-700 text-xs">
                        AI & ML
                        </span>
                        <span className="inline-block rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-indigo-700 text-xs">
                        Systems
                        </span>
                        </div> */}
                      <BlocksRenderer blocks={blocks} content={vision} />
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <MotionDiv
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.06 }}
                whileHover={{ translateY: -6, scale: 1.01 }}
                className="relative h-full"
              >
                {/* floating accent */}
                <div className="-right-6 -top-6 pointer-events-none absolute h-24 w-24 rounded-full bg-yellow-200/20 blur-2xl" />

                <Card className="h-full overflow-hidden border border-white/20 bg-white/80 backdrop-blur">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-rose-400 to-pink-500 text-white shadow-lg">
                        <LuLightbulb className="size-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-2xl text-foreground">
                          Mission
                        </h3>
                        {/* <p className="mt-1 text-muted-foreground text-sm">
                          Educate, research and empower students with a strong
                          theoretical and practical foundation in computing,
                          preparing them for industry and research careers.
                        </p> */}
                      </div>
                    </div>

                    {/* <ul className="mt-2 space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-rose-500">•</span>
                        <span>
                          Provide quality education with strong theoretical and
                          practical foundation.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-rose-500">•</span>
                        <span>
                          Promote research, innovation, and entrepreneurship.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-rose-500">•</span>
                        <span>
                          Foster industry-academia collaboration for practical
                          exposure.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-rose-500">•</span>
                        <span>
                          Develop ethical, socially responsible computing
                          professionals.
                        </span>
                      </li>
                    </ul> */}

                    <div className="mt-2 text-gray-600 text-sm leading-relaxed">
                      <BlocksRenderer blocks={blocks} content={mission} />
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Faculty */}
      {/* <section className="bg-linear-to-br from-gray-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <h2 className="mb-12 text-center font-bold text-3xl md:text-4xl">
              Faculty Members
            </h2>
          </ScrollReveal>

          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {faculties.map((member) => (
              <StaggerItem key={member.name}>
                <FacultyCard
                  name={member.name}
                  designation={member.designation}
                  department={member.department}
                  specialization={member.specialization}
                  tags={member.tags}
                  image={member.image}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Labs & Facilities */}
      {!!labs.length && (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="up">
              <h2 className="mb-12 text-center font-bold text-3xl md:text-4xl">
                Labs & Facilities
              </h2>
            </ScrollReveal>

            <StaggerContainer
              staggerDelay={0.12}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {labs
                .filter((lab) => !!lab.image?.url)
                .map((lab) => (
                  <StaggerItem key={lab.documentId}>
                    <MotionDiv
                      whileHover={{ y: -8 }}
                      className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl shadow-xl"
                    >
                      <BackendImage
                        fill
                        // biome-ignore lint/style/noNonNullAssertion: not needed
                        src={lab.image!.url}
                        alt={lab.title}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute right-4 bottom-4 left-4">
                        <div className="flex items-center gap-2 text-white">
                          <LuFlaskConical className="size-5" />
                          <h3 className="text-xl">{lab.title}</h3>
                        </div>
                      </div>
                    </MotionDiv>
                  </StaggerItem>
                ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </main>
  );
}
