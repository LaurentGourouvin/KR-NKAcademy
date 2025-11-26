'use client';

import { WeekData } from '@/types/NKWeekData';
import { WeekOverviewData } from '@/types/NKWeekOverview';
import { useRouter } from 'next/navigation';
import { renderSequence } from '@/domain/coursePlayer/renderingSequence';
import { SECTION_ANCHORS } from '@/domain/coursePlayer/section';
import { SequenceItem } from '@/types/NKWeekMeta';
import { useActiveSection } from '@/domain/coursePlayer/useActiveSection';
import Image from 'next/image';

export const SECTION_LABELS: Record<SequenceItem['type'], string> = {
    dialog: 'Dialogue',
    chunks: 'Expressions clés',
    sentences: 'Phrases',
    exercises: 'Exercices',
    vocabulary: 'Vocabulaire',
    grammar: 'Grammaire',
};

export function CoursePlayer({ overviewLesson, meta, dialogs, chunks, sentences, exercises }: WeekData & { overviewLesson: WeekOverviewData }) {
    const { activeIndex, activeSection, setActiveIndex } = useActiveSection(meta.sequence);
    const imageOfWeek = overviewLesson.overviews.find((w) => w.week === meta.week);
    const placeHolderImage = '/assets/place_holder_image.png';
    const router = useRouter();
    const sequenceData = {
        chunks,
        sentences,
        exercises,
        dialogs,
        meta,
    };

    const handleClickSection = (index: number, type: SequenceItem['type']) => {
        setActiveIndex(index);
        if (typeof window !== 'undefined') {
            const anchor = SECTION_ANCHORS[type];
            window.history.replaceState(null, '', `#${anchor}`);
        }
    };

    return (
        <div className="max-w-11/12 md:w-4/5 bg-white mx-auto border-2 border-gray-300 rounded-md p-4 mb-8">
            <header className="mb-4 border-b border-gray-200 pb-2 flex flex-col md:flex-row md:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-wider text-emerald-800">Week {meta.week}</p>
                    <h1 className="text-xl font-semibold text-emerald-600">{meta.title}</h1>
                    <p className="text-sm text-gray-600">{meta.theme}</p>
                </div>
                <div className="text-right">
                    <button
                        onClick={() => router.back()}
                        className="inline-block rounded-md bg-emerald-500 mt-2 mb:mt-0 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
                    >
                        Retour aux cours
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-6 md:gap-12">
                <section className="col-span-2">
                    {meta.objectives && meta.objectives.length > 0 && (
                        <section className="mb-4 p-2 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-600">
                            <h2 className="text-sm font-bold text-emerald-600 mb-1">Objectifs de la leçon</h2>
                            <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                                {meta.objectives.map((obj, i) => (
                                    <li key={i}>{obj}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                    <div>
                        <Image className="mx-auto mb-2" src={imageOfWeek?.image ?? placeHolderImage} alt={`image ${meta.title}`} width={200} height={200} />
                    </div>
                    <div className="flex flex-col gap-2 mb-8">
                        {meta.sequence.map((section, index) => {
                            const isActive = index === activeIndex;
                            const label = SECTION_LABELS[section.type];

                            return (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => handleClickSection(index, section.type)}
                                    className={
                                        'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium w-full ' +
                                        (isActive ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' : 'bg-gray-50 text-gray-700 hover:bg-gray-100')
                                    }
                                >
                                    <span className={'text-emerald-600 font-bold text-lg transform transition-all duration-200 ' + (isActive ? 'translate-x-1' : '')}>›</span>

                                    <span>{label}</span>
                                </button>
                            );
                        })}
                    </div>
                    <div className="w-full border border-gray-200 mb-2 md:hidden"></div>
                </section>

                <section className="col-span-4">
                    <div key={activeIndex} className="animate-fadeScaleIn">
                        {renderSequence(activeSection, sequenceData)}
                    </div>
                </section>
            </div>
        </div>
    );
}
