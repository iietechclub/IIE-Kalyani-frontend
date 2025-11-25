import { fetchHomePageData } from "@/dal/home";

export default async function Home() {
  const data = await fetchHomePageData();
  return (
    <main>
      <div className="-mt-17 sm:-mt-19 md:-mt-32 lg:-mt-33 h-90 bg-linear-to-b bg-neutral-400- from-neutral-400 to-neutral-300 sm:h-108 md:h-120 lg:h-136 xl:h-150"></div>

      <div className="container mx-auto px-6 py-3">
        <pre>
          <code>{data.departments.length}</code>
        </pre>
        <p className="text-red-400">Hello, World!</p>
      </div>
    </main>
  );
}
