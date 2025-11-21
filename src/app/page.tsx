import { fetchHomePageData } from "@/dal/home";

export default async function Home() {
  const data = await fetchHomePageData();
  return (
    <main>
      <div className="bg-neutral-400- bg-linear-to-b -mt-33 h-150 from-neutral-400 to-neutral-300">

      </div>
      <p className="text-red-400">Hello, World!</p>
    </main>
  );
}
