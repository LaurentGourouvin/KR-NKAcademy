import { WeekMeta } from '@/types/NKWeekMeta';

export default function GrammarScreen(meta: WeekMeta) {
    return (
        <div>
            <h2 className="text-lg font-semibold text-emerald-600 mb-3">Grammaire</h2>
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
    );
}
