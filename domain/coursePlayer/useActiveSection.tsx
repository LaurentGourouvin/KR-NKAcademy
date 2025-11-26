// domain/coursePlayer/useActiveSection.ts
'use client';

import { useEffect, useState } from 'react';
import type { SequenceItem } from '@/types/NKWeekMeta';
import { SECTION_ANCHORS } from '@/domain/coursePlayer/section';

export function useActiveSection(sequence: SequenceItem[]) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const rawHash = window.location.hash;
        if (!rawHash) return;

        const hash = rawHash.replace('#', '');
        const index = sequence.findIndex((section) => SECTION_ANCHORS[section.type] === hash);

        if (index !== -1) {
            setActiveIndex(index);
        }
    }, [sequence]);

    const activeSection = sequence[activeIndex];

    return { activeIndex, activeSection, setActiveIndex };
}
