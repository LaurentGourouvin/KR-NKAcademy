import { WeekOverview } from '@/types/NKWeekOverview';
import Link from 'next/link';

export function WeekCard({ week, difficulty, title, summary, image, slug }: WeekOverview) {
    return (
        <article className="flex flex-col w-sm bg-white p-2 m-8 border border-gray-200 hover:border-gray-300 rounded-md text-sm hover:shadow-xs">
            <div className="flex justify-between">
                <p className="text-emerald-800 font-bold">Week {week}</p>
                <p className="bg-emerald-300 p-1 rounded-md">Level: {difficulty}</p>
            </div>
            <div className="mt-2">
                <h1 className="text-base mb-2 text-emerald-600 font-bold min-h-[50]">{title}</h1>
                <p className="mb-2 font-light min-h-[40]">{summary}</p>
                <img src={image} alt={title} width={300} height={300} className="mx-auto" />
            </div>
            <div className="my-2 h-px w-full bg-emerald-200" />
            <div className="flex justify-center p-2 m-2">
                <Link href={`/week/${week}/${slug}`} className="border border-gray-200 p-2 rounded-md bg-emerald-300 hover:shadow-md hover:cursor-pointer">
                    Accéder à la leçon
                </Link>
            </div>
        </article>
    );
}
