'use client';

import { useState } from 'react';
import { ExerciseFile, NKExercise, NKExerciseItem } from '@/types/NKExercise';

export default function ExerciseScreen({ exercises }: ExerciseFile) {
    console.log(exercises);
    return (
        <div>
            <h2 className="text-lg font-semibold text-emerald-600 mb-3">Exercices</h2>

            <div className="space-y-8">
                {exercises.map((ex) => (
                    <ExerciseBlock key={ex.id} {...ex} />
                ))}
            </div>
        </div>
    );
}

function ExerciseBlock(exercise: NKExercise) {
    return (
        <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <h3 className="text-md font-semibold text-emerald-700 mb-1">{exercise.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{exercise.instructions}</p>

            <div className="space-y-6">
                {exercise.items.map((item) => (
                    <ExerciseItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}

function ExerciseItem(item: NKExerciseItem) {
    const [selected, setSelected] = useState<string | null>(null);

    const isCorrect = selected && selected === item.answer;
    const isWrong = selected && selected !== item.answer;

    return (
        <div className="bg-white rounded-md border border-gray-200 p-4">
            <p className="text-sm text-gray-900 font-medium mb-1">{item.prompt}</p>

            {item.kr && <p className="text-gray-700 font-semibold">{item.kr}</p>}
            {item.rom && <p className="text-gray-500 italic text-sm mb-3">{item.rom}</p>}

            <div className="space-y-2">
                {item.options?.map((opt) => (
                    <label
                        key={opt}
                        className={`flex items-center gap-2 cursor-pointer rounded-md border px-3 py-2 text-sm transition 
                        ${selected === opt ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300 hover:bg-gray-50'}`}
                    >
                        <input type="radio" name={item.id} value={opt} checked={selected === opt} onChange={() => setSelected(opt)} />
                        {opt}
                    </label>
                ))}
            </div>

            {isCorrect && <p className="mt-3 text-emerald-600 text-sm font-semibold">✓ Bonne réponse !</p>}

            {isWrong && <p className="mt-3 text-red-500 text-sm font-semibold">✗ Mauvaise réponse.</p>}
        </div>
    );
}
