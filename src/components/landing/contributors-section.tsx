import Image from "next/image";
import { LuGithub, LuLinkedin, LuPlay, LuUsers } from "react-icons/lu";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated/scroll-reveal";
import { MotionDiv } from "../animated/motion";
import BackendImage from "../BackendImage";


type Props = {
  our_creative_team_tagline: string;
  our_creative_team_youtube_video_link: string;
  our_creative_team_image: Media;
  student_developers: StudentDeveloper[];
  our_creative_team_quotation: string;
};

export default function ContributorsSection({
  our_creative_team_tagline,
  our_creative_team_youtube_video_link,
  our_creative_team_image,
  student_developers,
  our_creative_team_quotation,
}: Props) {
  return (
    <section className="bg-linear-to-br from-white to-gray-50 py-12 pt-6 pr-0 pb-16 pl-0 sm:py-16">
      {/* Header */}
      <ScrollReveal direction="up">
        <div className="mb-8 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <LuUsers className="h-4 w-4 text-primary" />
            </div>
            <h2 className="font-bold text-[36px] text-[rgb(230,57,70)] text-xl sm:text-2xl">
              Our Creative Team
            </h2>
          </div>
          <p className="mx-auto mb-1 max-w-2xl text-muted-foreground text-xs sm:text-sm">
            {our_creative_team_tagline}
          </p>
        </div>
      </ScrollReveal>
      {/* <-- 3D hero inserted at the top of the section --> */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto mb-12 h-[420px] max-w-5xl"
        style={{ perspective: "2000px" }}
      >
        {/* Large Group Photo Box - Left */}
        <MotionDiv
          whileHover={{
            rotateY: 2,
            rotateX: -2,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="absolute top-0 left-0 z-10 h-[85%] w-[65%] overflow-hidden rounded-3xl shadow-2xl"
          style={{
            transform: "rotateY(-5deg) rotateX(2deg)",
            transformStyle: "preserve-3d",
            boxShadow:
              "30px 30px 60px rgba(220, 38, 38, 0.3), -10px -10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="absolute inset-0 z-10 bg-linear-to-br from-red-500/20 to-transparent" />
          <Image
            fill
            src="https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBncm91cCUyMHBob3RvfGVufDF8fHx8MTc2MzAzNzgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Creative Team Group Photo"
            className="size-full object-cover"
          />
          {/* 3D Border Effect */}
          <div className="absolute inset-0 rounded-3xl border-4 border-white/30" />
          <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-red-600/90 to-transparent p-6">
            <h3 className="text-white">The IIE Kalyani Team</h3>
          </div>
        </MotionDiv>

        {/* Smaller Video Box - Right */}
        <MotionDiv
          whileHover={{
            rotateY: -2,
            rotateX: 2,
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          className="group absolute right-0 bottom-0 z-20 h-[70%] w-[50%] cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
          style={{
            transform: "rotateY(8deg) rotateX(-3deg)",
            transformStyle: "preserve-3d",
            boxShadow:
              "20px 20px 50px rgba(220, 38, 38, 0.4), -5px -5px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="absolute inset-0 z-10 bg-linear-to-tl from-red-600/30 to-transparent" />
          <Image
            fill
            src="https://images.unsplash.com/photo-1617153817979-283ffdcd52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzYyOTM2NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team Collaboration Montage"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <MotionDiv
              whileHover={{ scale: 1.2 }}
              className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/50 bg-red-600 shadow-xl"
            >
              <LuPlay className="ml-1 h-10 w-10 fill-white text-white" />
            </MotionDiv>
          </div>
          {/* 3D Border Effect */}
          <div className="absolute inset-0 rounded-3xl border-4 border-white/40" />
          <div className="absolute top-0 right-0 left-0 z-15 bg-linear-to-b from-black/50 to-transparent p-4">
            <p className="text-sm text-white">Behind the Scenes</p>
          </div>
        </MotionDiv>

        {/* Floating 3D Accent Elements */}
        <div className="-top-8 absolute left-1/4 h-32 w-32 animate-pulse rounded-full bg-red-600 opacity-20 blur-3xl" />
        <div
          className="-bottom-8 absolute right-1/4 h-40 w-40 animate-pulse rounded-full bg-red-500 opacity-15 blur-3xl"
          style={{ animationDelay: "1s" }}
        />
      </MotionDiv>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mentors Section */}
        {/* <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary text-base">👨‍🏫</span>
              <h3 className="text-base sm:text-lg text-foreground">
                Project Mentors
              </h3>
              <span className="text-primary text-base">👨‍🏫</span>
            </div>
            <div className="flex justify-center gap-8 sm:gap-12 mb-6">
              {mentors.map((mentor, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="relative mb-2">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-pink-100  group-hover:ring-primary/40 transition-all shadow-lg">
                      <ImageWithFallback
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="text-center text-foreground text-sm mb-1">
                    {mentor.name}
                  </h4>
                  <p className="text-xs text-primary">{mentor.role}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal> */}

        {/* Students Section - Single Row */}
        <div className="mb-12">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-3 mb-7 flex items-center justify-center gap-2">
              <span className="text-base text-primary">👨‍💻</span>
              <h3 className="text-base text-foreground sm:text-lg">
                Student Developers
              </h3>
              <span className="text-base text-primary">👩‍💻</span>
            </div>
          </ScrollReveal>
          <StaggerContainer
            staggerDelay={0.1}
            className="mx-auto flex max-w-6xl flex-wrap items-start justify-center gap-4 sm:gap-6"
          >
            {student_developers.map((student) => (
              <StaggerItem key={student.documentId} className="shrink-0">
                <div className="group flex flex-col items-center">
                  <div className="relative mb-2">
                    <div className="relative size-16 overflow-hidden rounded-full shadow-md ring-2 ring-gray-200 transition-all group-hover:ring-primary/40 sm:size-20 md:size-24">
                      <BackendImage
                        fill
                        src={student.image.url}
                        alt={student.name}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="mb-0.5 text-center text-foreground text-xs sm:text-sm">
                    {student.name}
                  </h4>
                  <p className="mb-0.5 text-center text-[10px] text-primary sm:text-xs">
                    {student.contribution}
                  </p>
                  <p className="mb-1.5 text-center text-[9px] text-muted-foreground leading-tight sm:text-[10px]">
                    {student.department.name}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={student.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/icon flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 transition-all duration-200 hover:bg-gray-800 hover:text-white sm:h-7 sm:w-7"
                      aria-label={`${student.name}'s GitHub`}
                    >
                      <LuGithub className="h-3 w-3 text-gray-700 group-hover/icon:text-white sm:h-3.5 sm:w-3.5" />
                    </a>
                    <a
                      href={student.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/icon flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 transition-all duration-200 hover:bg-blue-600 hover:text-white sm:h-7 sm:w-7"
                      aria-label={`${student.name}'s LinkedIn`}
                    >
                      <LuLinkedin className="h-3 w-3 text-gray-700 group-hover/icon:text-white sm:h-3.5 sm:w-3.5" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Quote Section */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mx-auto mt-6">
            <section className="-mb-5 sm:-mb-3 md:-mb-1 mt-16 text-center sm:mt-20 md:mt-24 lg:mb-1">
              <blockquote className="relative mx-auto max-w-4xl text-balance px-8 text-base sm:text-lg md:py-4 md:text-xl xl:text-2xl">
                <p className="inspiring-quote">{our_creative_team_quotation}</p>
              </blockquote>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
