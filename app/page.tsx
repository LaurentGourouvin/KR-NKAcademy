import { getWeekOverview } from "@/services/data/ServiceData";
import { WeekCard } from "@/components/card/WeekCard";
import { Header } from "@/components/header/Header";
export default async function Home() {
  const weekOverview = await getWeekOverview();
  return (
    <div>
      <Header />

      <main className="flex flex-wrap justify-center pt-16">
        {weekOverview.overviews.map((w) => (
          <WeekCard key={w.week} {...w}></WeekCard>
        ))}
      </main>
    </div>
  );
}
