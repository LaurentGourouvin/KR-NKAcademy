'use client';
import { ChunkFile } from '@/types/NKChunk';
import { SentenceFile } from '@/types/NkSentence';

type ChunkScreenProps = {
    chunks: ChunkFile;
    sentences: SentenceFile;
};

export default function ChunkScreen({ chunks, sentences }: ChunkScreenProps) {
    return (
        <div>
            <h2 className="text-lg font-semibold text-emerald-600 mb-3">Expressions clés</h2>

            {/* --- MOBILE VERSION (cards) --- */}
            <div className="md:hidden space-y-4 text-sm">
                {chunks.chunks.map((c) => (
                    <div key={c.id} className="rounded-md bg-gray-50 p-4 space-y-3">
                        <p className="font-medium text-gray-900">{c.description}</p>

                        {c.sentenceIds.map((sid) => {
                            const sentence = sentences.sentences.find((s) => s.id === sid);
                            if (!sentence) return null;

                            return (
                                <div key={sentence.id} className="border border-emerald-100 rounded-md bg-white px-3 py-3 space-y-1 shadow-sm">
                                    <div>
                                        <p className="text-[11px] uppercase text-emerald-600 font-semibold tracking-wide">Coréen</p>
                                        <p className="text-gray-900">{sentence.kr}</p>
                                    </div>

                                    <div>
                                        <p className="text-[11px] uppercase text-emerald-600 font-semibold tracking-wide">Romanisation</p>
                                        <p className="text-gray-800 italic">{sentence.rom}</p>
                                    </div>

                                    <div>
                                        <p className="text-[11px] uppercase text-emerald-600 font-semibold tracking-wide">Français</p>
                                        <p className="text-gray-700">{sentence.fr}</p>
                                    </div>

                                    <div>
                                        <p className="text-[11px] uppercase text-emerald-600 font-semibold tracking-wide">Audio</p>
                                        {/* <p className="text-gray-700">{sentence.audio}</p> */}
                                        <p className="inline-block px-1.5 py-0.5 text-[11px] text-gray-600 bg-gray-100 border border-gray-200 rounded">Disponible bientôt</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* --- DESKTOP VERSION (table) --- */}
            <div className="hidden md:block space-y-3 text-sm">
                {chunks.chunks.map((c) => (
                    <div key={c.id} className="rounded-md bg-gray-50 p-3">
                        <p className="font-medium text-gray-900 mb-4">{c.description}</p>

                        <table className="w-full border-collapse text-sm rounded-md overflow-hidden shadow-sm">
                            <thead>
                                <tr className="bg-emerald-500/10 text-left font-semibold text-emerald-700">
                                    <th className="border border-emerald-100 px-3 py-2">Coréen</th>
                                    <th className="border border-emerald-100 px-3 py-2">Romanisation</th>
                                    <th className="border border-emerald-100 px-3 py-2">Français</th>
                                    <th className="border border-emerald-100 px-3 py-2">Audio</th>
                                </tr>
                            </thead>

                            <tbody>
                                {c.sentenceIds.map((sid, index) => {
                                    const sentence = sentences.sentences.find((s) => s.id === sid);
                                    if (!sentence) return null;

                                    return (
                                        <tr
                                            key={sentence.id}
                                            className={`
                                                border-t border-emerald-100
                                                ${index % 2 === 0 ? 'bg-white' : 'bg-emerald-50/20'}
                                                hover:bg-emerald-100/30 transition-colors
                                            `}
                                        >
                                            <td className="border border-emerald-100 px-3 py-2 text-gray-900">{sentence.kr}</td>
                                            <td className="border border-emerald-100 px-3 py-2 text-gray-900">{sentence.rom}</td>
                                            <td className="border border-emerald-100 px-3 py-2 text-gray-700">{sentence.fr}</td>
                                            <td className="border border-emerald-100 px-3 py-2 text-gray-700 text-center">
                                                <span className="inline-block px-1.5 py-0.5 text-[11px] text-gray-600 bg-gray-100 border border-gray-200 rounded">
                                                    Disponible bientôt.
                                                </span>
                                            </td>
                                            {/* <td className="border border-emerald-100 px-3 py-2 text-gray-700">{sentence.audio}</td> */}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}
