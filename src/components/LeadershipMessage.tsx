import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { LuUser } from "react-icons/lu";
import BackendImage from "@/components/BackendImage";
import GithubImage from "@/components/GithubImage";
import { fetchLeadershipData } from "@/dal/leadership";

type Props = {
  leadershipType: string;
  subtitle: string;
};

export default async function LeadershipMessage({
  leadershipType,
  subtitle,
}: Props) {
  const data = await fetchLeadershipData(leadershipType);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-center bg-cover py-16 text-white sm:py-20">
        <GithubImage
          fill
          src="(about)/about/overview/img1.jpg"
          alt="Leadership Message Banner"
          className="object-cover"
          preload
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />

        <div className="relative mx-auto flex max-w-7xl gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
            <LuUser className="size-6" />
          </div>

          <div className="mb-3 space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl">
              {leadershipType}&apos;s Message
            </h1>
            <p className="max-w-3xl text-lg text-white/90 sm:text-xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Principal Photo (left column) */}
          <div className="mx-auto w-full max-w-2xl lg:col-span-1">
            <div className="sticky top-30 p-6">
              <div className="relative mb-6 aspect-video overflow-hidden rounded-lg ring-2 ring-primary/30">
                <BackendImage
                  fill
                  alt="Principal"
                  src={data.image.url}
                  className="object-cover"
                />
                {/* <ImageWithFallback
                  src="https://images.unsplash.com/photo-1644904105846-095e45fca990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Principal"
                  className="h-full w-full object-cover"
                /> */}
              </div>
              <div className="text-center">
                <h3 className="mb-2 text-foreground text-xl">{data.name}</h3>
                <p className="mb-2 text-primary text-sm">{leadershipType}</p>
                <p className="text-muted-foreground text-xs">
                  Ideal Institute of Engineering
                </p>
              </div>
            </div>
          </div>

          {/* Message Section (right, matches Chairman design) */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl bg-linear-to-r from-red-300 via-sky-300 to-white pt-px pb-px pl-0.5 shadow-lg">
              {/* Inner White Box */}
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl text-foreground">
                  Dear Students, Faculty, and Staff,
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <BlocksRenderer content={data.message} />
                </div>

                <div className="mt-8 border-border border-t pt-6">
                  <p className="text-foreground">Warm regards,</p>
                  <p className="mt-2 text-lg text-primary">{leadershipType}</p>
                  <p className="text-muted-foreground text-sm">
                    Ideal Institute of Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        {data.quote && (
          <section className="mt-10 mb-1 px-4 text-center sm:mt-12 sm:mb-6 md:mt-14 md:mb-7">
            <blockquote className="relative mx-auto max-w-3xl px-8 text-base sm:text-lg md:py-4 md:text-xl xl:text-2xl">
              <p className="inspiring-quote">{data.quote}</p>
            </blockquote>
          </section>
        )}
      </div>
    </div>
  );
}
