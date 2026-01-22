import { LuUsers } from "react-icons/lu";
import { MotionDiv } from "@/components/animated/motion";

import BackendImage from "@/components/BackendImage";
import { fetchClubsAndSocietiesPageData } from "@/dal/clubs-and-societies";

/**
 * ClubsTwoRowGrid — 4-column modern grid (no glass overlay)
 * - Hero same as before
 * - Clean attractive cards
 * - Responsive with hover lift & smooth animations
 */

// type Club = {
//   id: string;
//   name: string;
//   category: string;
//   subtitle: string;
//   description: string;
//   members: string;
//   image: string;
// };

export default async function ClubsTwoRowGrid() {
  const { banner, clubs } = await fetchClubsAndSocietiesPageData();

  // const clubs: Club[] = [
  //   {
  //     id: "arts",
  //     name: "Science & Tech Club",
  //     category: "tech",
  //     subtitle: "Express Your Creativity",
  //     description:
  //       "Painting, digital art, and campus beautification initiatives.",
  //     members: "95+",
  //     image: "(campus)/student-activities/clubs-and-societies/tech_club.jpeg",
  //   },
  //   {
  //     id: "coding",
  //     name: "Cultural Club",
  //     category: "tech",
  //     subtitle: "Code, Create, Innovate",
  //     description:
  //       "A community exploring new technologies, hackathons, and practical projects.",
  //     members: "120+",
  //     image: "(campus)/student-activities/clubs-and-societies/cultural.JPG",
  //   },
  //   {
  //     id: "robotics",
  //     name: "Snap Society",
  //     category: "tech",
  //     subtitle: "Building the Future",
  //     description:
  //       "Design, build, and program robots — competitions and hands-on workshops.",
  //     members: "85+",
  //     image: "(campus)/student-activities/clubs-and-societies/snap_society.jpg",
  //   },

  //   {
  //     id: "music",
  //     name: "Social Development Club",
  //     category: "arts",
  //     subtitle: "Rhythm of Life",
  //     description:
  //       "Performances and cultural programs to showcase campus talent.",
  //     members: "110+",
  //     image:
  //       "(campus)/student-activities/clubs-and-societies/social_dev_club.jpg",
  //   },
  //   {
  //     id: "photo",
  //     name: "Photography Club",
  //     category: "arts",
  //     subtitle: "Capture Moments",
  //     description: "Photo walks, editing workshops, and campus event coverage.",
  //     members: "75+",
  //     image:
  //       "(campus)/student-activities/clubs-and-societies/photography-club.avif",
  //   },
  //   {
  //     id: "photo",
  //     name: "Sports and Games Club",
  //     category: "arts",
  //     subtitle: "Capture Moments",
  //     description: "Photo walks, editing workshops, and campus event coverage.",
  //     members: "75+",
  //     image:
  //       "(campus)/student-activities/clubs-and-societies/sports_&_games_club.jpg",
  //   },
  // ];

  // const tabs = [
  //   { key: "all", label: "All" },
  //   { key: "tech", label: "Tech" },
  //   { key: "arts", label: "Arts" },
  //   { key: "sports", label: "Sports" },
  //   { key: "social", label: "Social" },
  // ];

  return (
    <main className="min-h-screen bg-linear-to-br from-white via-blue-50/20">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <BackendImage
            fill
            src={banner.url}
            alt="Campus clubs hero"
            className="object-cover blur-xs"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/75 via-purple-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl pt-20 pb-12 text-center text-white"
          >
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">
              <LuUsers className="h-5 w-5 text-white" />
              <span className="text-sm">Campus Life</span>
            </div>

            <h1 className="mb-3 font-bold text-3xl leading-tight md:text-4xl">
              Clubs & Societies
            </h1>
            <p className="mx-auto mb-6 max-w-2xl opacity-90">
              Join student-run clubs — tech, arts, sports and social
              initiatives. Build skills, lead projects and make lifelong
              friends.
            </p>
          </MotionDiv>
        </div>
      </header>

      {/* Controls */}
      <div className="container mx-auto px-4 pt-8">
        {/* 4-column Grid */}
        <section className="mx-auto mb-12 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clubs.map((c, idx) => (
              <MotionDiv
                // biome-ignore lint/suspicious/noArrayIndexKey: not needed
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <BackendImage
                    fill
                    src={c.preview_image.url}
                    alt={c.name}
                    className="size-full transform object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* <div className="absolute top-3 left-3">
                    <Badge className="bg-blue-600 text-white">
                      {c.category}
                    </Badge>
                  </div> */}
                </div>

                {/* Card content */}
                <div className="flex flex-col justify-between p-4">
                  <div>
                    <h3 className="mb-1 font-semibold text-lg">{c.name}</h3>
                    <p className="mb-2 text-muted-foreground text-sm">
                      {c.tagline}
                    </p>
                    <p className="line-clamp-3 text-gray-600 text-xs">
                      {c.subtitle}
                    </p>
                  </div>

                  {/* <div className="mt-3 flex items-center justify-between">
                    <div className="text-muted-foreground text-xs">
                      {c.members} Members
                    </div>
                  </div> */}
                </div>
              </MotionDiv>
            ))}
          </div>

          {!clubs.length && (
            <div className="py-12 text-center text-muted-foreground">
              No clubs match your filter.
            </div>
          )}
        </section>
      </div>

      {/* Club Modal */}
      {/* {activeClub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            type="button"
            aria-label="Close modal"
            className="absolute inset-0 bg-black/40"
            onClick={() => setActiveClub(null)}
          />

          <MotionDiv
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.16 }}
            className="relative z-10 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="flex gap-4">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-md">
                <GithubImage
                  src={activeClub.image}
                  alt={activeClub.name}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{activeClub.name}</h3>
                <div className="mb-2 text-muted-foreground text-xs">
                  {activeClub.subtitle} • {activeClub.members}
                </div>
                <p className="text-muted-foreground text-sm">
                  {activeClub.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveClub(null)}
                className="text-slate-500 text-sm"
              >
                Close
              </button>
            </div>
          </MotionDiv>
        </div>
      )} */}
    </main>
  );
}
