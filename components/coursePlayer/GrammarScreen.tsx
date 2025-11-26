import { WeekMeta } from '@/types/NKWeekMeta';

export default function GrammarScreen(meta: WeekMeta) {
    return (
        <div>
            <h2 className="text-lg font-semibold text-emerald-600 mb-3">Grammaire</h2>

            {/* --- MOBILE VERSION (cards) --- */}
            <div className="md:hidden space-y-3 text-sm">
                {meta.grammarFocus.map((g, index) => (
                    <div key={index} className="rounded-md border border-emerald-100 bg-gray-50 p-3 space-y-2 shadow-sm">
                        <div>
                            <p className="text-[11px] uppercase text-emerald-600 font-semibold tracking-wide">Coréen</p>
                            <p className="text-gray-900">{g.kr}</p>
                        </div>

                        <div>
                            <p className="text-[11px] uppercase text-emerald-600 font-semibold tracking-wide">Romanisation</p>
                            <p className="text-gray-800 italic">{g.rom}</p>
                        </div>

                        <div>
                            <p className="text-[11px] uppercase text-emerald-600 font-semibold tracking-wide">Français</p>
                            <p className="text-gray-700">{g.fr}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- DESKTOP VERSION (table) --- */}
            <div className="hidden md:block">
                <table className="w-full border-collapse text-sm rounded-md overflow-hidden shadow-sm">
                    <thead>
                        <tr className="bg-emerald-500/10 text-left font-semibold text-emerald-700">
                            <th className="border border-emerald-100 px-3 py-2">Coréen</th>
                            <th className="border border-emerald-100 px-3 py-2">Romanisation</th>
                            <th className="border border-emerald-100 px-3 py-2">Français</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meta.grammarFocus.map((g, index) => (
                            <tr
                                key={index}
                                className={`
                                    border-t border-emerald-100
                                    ${index % 2 === 0 ? 'bg-white' : 'bg-emerald-50/20'}
                                    hover:bg-emerald-100/30 transition-colors
                                `}
                            >
                                <td className="border border-emerald-100 px-3 py-2 text-gray-900">{g.kr}</td>
                                <td className="border border-emerald-100 px-3 py-2 text-gray-900">{g.rom}</td>
                                <td className="border border-emerald-100 px-3 py-2 text-gray-700">{g.fr}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
