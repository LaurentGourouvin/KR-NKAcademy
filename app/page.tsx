import { getWeekData, getWeekOverview } from "@/services/data/ServiceData";

export default async function Home() {
  const test = await getWeekData(1);
  const test2 = await getWeekOverview();
  return (
    <div>
      <main>
        <div className="min-h-screen flex items-center justify-center bg-purple-600 text-white text-3xl font-bold">
          Tailwind v4 works! 🚀
        </div>
      </main>
    </div>
  );
}
