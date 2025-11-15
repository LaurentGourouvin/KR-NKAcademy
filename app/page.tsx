import { getWeekOverview } from "@/services/data/ServiceData";
import { WeekCard } from "@/components/WeekCard";
export default async function Home() {
  const weekOverview = await getWeekOverview();
  return (
    <div>
      <main className="flex flex-wrap justify-center">
        {weekOverview.overviews.map((w) => (
          <WeekCard key={w.week} {...w}></WeekCard>
        ))}
      </main>
    </div>
  );
}
