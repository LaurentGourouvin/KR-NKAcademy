import { getWeekOverview } from '@/services/data/ServiceData';
import { WeekCard } from '@/components/card/WeekCard';
export default async function Home() {
    const weekOverview = await getWeekOverview();
    return (
        <div>
            <main className="flex flex-wrap max-w-11/12 md:w-4/5 justify-center mx-auto">
                {weekOverview.overviews.map((w) => (
                    <WeekCard key={w.week} {...w} />
                ))}
            </main>
        </div>
    );
}
