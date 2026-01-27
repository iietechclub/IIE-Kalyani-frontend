import { BlocksRenderer } from "@strapi/blocks-react-renderer";
// import Link from "next/link";
import { LuBookOpen } from "react-icons/lu";

import { MotionDiv } from "@/components/animated/motion";
import BackendImage from "@/components/BackendImage";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchClubPageData } from "@/dal/club";
import { notFound } from "next/navigation";


type Props = { params: Promise<{ slug: string }> };

export default async function ClubPage({ params }: Props) {
  const { slug } = await params;
  console.log(slug);
  
  const data = await fetchClubPageData(slug);

  if (!data) return notFound();
  const galleryImages = data.gallery_items.filter((gi) => !!gi.image);

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-80 w-full bg-center bg-cover">
            <BackendImage
              fill
              src={data.banner_image.url}
              alt={`${data.name} Page`}
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 lg:flex-row">
          <div className="z-10 flex-1 text-white">
            <MotionDiv
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-4 rounded-xl p-3">
                <LuBookOpen className="h-12 w-12 text-white" />
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">
                    {data.name}
                  </h1>
                  <p className="mt-1 text-sm text-white/90 md:text-base">
                    {data.subtitle}
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* About Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <article className="prose prose-sm md:prose-base max-w-none text-slate-700">
            <h2 className="font-bold text-[30px] mb-6">{data.name}</h2>
            <BlocksRenderer content={data.content} />

            {/* <div className="mt-6 rounded-xl border border-yellow-300/50 bg-yellow-50 p-4">
                <p className="text-sm text-yellow-800">
                  ⚠️ Further details pending — please confirm final
                  requirements with the Library Team.
                </p>
              </div> */}

            {galleryImages.length > 0 && (
              <div className="mt-8">
                <h3 className="mb-3">Gallery</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {galleryImages.map(({ documentId, image, title }) => (
                    <div key={documentId}>
                      <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gray-100">
                        <BackendImage
                          fill
                          // biome-ignore lint/style/noNonNullAssertion: already checked
                          src={image!.url}
                          alt={`Galley: ${image?.alternativeText}`}
                          className="size-full object-cover"
                          />
                      </div>
                      <p className="text-center font-semibold line-clamp-1">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </MotionDiv>
      </div>
    </main>
  );
}
