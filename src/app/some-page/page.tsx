import { globalData } from "@/dal/global";

export default async function SomePage() {
  await globalData();

  return (
    <main className="px-5 py-2.5">
      <p>Hello, To some page!</p>
    </main>
  );
}
