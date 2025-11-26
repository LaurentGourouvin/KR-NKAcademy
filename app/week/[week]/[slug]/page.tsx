import { getWeekData, getWeekOverview } from '@/services/data/ServiceData';
import { WeekData } from '@/types/NKWeekData';
import { WeekOverviewData } from '@/types/NKWeekOverview';
import { CoursePlayer } from '@/components/coursePlayer/CoursePlayer';
import Link from 'next/link';

export default async function WeekPage({ params }: { params: Promise<{ week: string; slug: string }> }) {
    const { week } = await params;
    const lesson: WeekData = await getWeekData(Number(week));
    const availableLesson: WeekOverviewData = await getWeekOverview();

    return (
        <div>
            <CoursePlayer overviewLesson={availableLesson} {...lesson} />
            {/* <h1>Week {week}</h1>
            <h2>{lesson.meta.title}</h2>
            <section className="flex gap-6">
                {previousWeek && (
                    <Link href={`/week/${previousWeek.week}/${previousWeek.slug}`} className="border bg-gray-400">
                        ← Week précédente
                    </Link>
                )}
                {nextWeek && (
                    <Link href={`/week/${nextWeek.week}/${nextWeek.slug}`} className="border bg-green-400">
                        Week suivante →
                    </Link>
                )}
            </section> */}
        </div>
    );
}
