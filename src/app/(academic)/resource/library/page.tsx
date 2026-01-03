import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { LuBookOpen } from "react-icons/lu";

import { MotionDiv } from "@/components/animated/motion";
import BackendImage from "@/components/BackendImage";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchLibraryPageData } from "@/dal/library";

export default async function LibraryPage() {
  const { introduction, gallery_images, resources } =
    await fetchLibraryPageData();

  const galleryImages = gallery_images.filter((gi) => !!gi.image);

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-80 w-full bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80')] bg-center bg-cover" />
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
                    Institute Library
                  </h1>
                  <p className="mt-1 text-sm text-white/90 md:text-base">
                    Knowledge hub — books, journals, digital resources &
                    research support
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Tabs defaultValue="about">
          <TabsList className="mb-6 space-x-2">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger
              value="resources"
              // className="text-slate-700 hover:bg-gray-50 data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              Resources
            </TabsTrigger>
          </TabsList>

          {/* About Section */}
          <TabsContent value="about">
            <MotionDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <article className="prose prose-sm md:prose-base max-w-none text-slate-700">
                <h2 className="font-bold text-[30px]">Introduction</h2>
                <BlocksRenderer content={introduction} />

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
                      {galleryImages.map(({ documentId, image }) => (
                        <div
                          key={documentId}
                          className="relative h-40 w-full overflow-hidden rounded-lg bg-gray-100"
                        >
                          <BackendImage
                            fill
                            // biome-ignore lint/style/noNonNullAssertion: already checked
                            src={image!.url}
                            alt={`Library: ${image?.alternativeText}`}
                            className="size-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </MotionDiv>
          </TabsContent>

          {/* Resources Section (Under Development with gears) */}
          <TabsContent value="resources" className="grid grid-cols-3 gap-3">
            {resources.map(({ id, title, image, description }) => (
              <div key={id}>
                <div className="relative h-48 overflow-hidden rounded-2xl bg-white shadow">
                  <BackendImage
                    fill
                    src={image.url}
                    alt={`Digital Library: ${image.alternativeText}`}
                    className="object-cover"
                  />
                </div>

                <div className="px-4 py-2 text-center">
                  <p className="font-bold text-neutral-900">{title}</p>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
