'use client';
import { DialogFile } from '@/types/NKDialog';

export default function DialogScreen(dialogs: DialogFile) {
    const data = dialogs.dialogs[0];
    return (
        <div>
            <h2 className="text-lg font-semibold text-emerald-600 mb-3">Dialogue – {data.title}</h2>

            <div className="space-y-3 text-sm">
                {data.turns.map((dialog) => (
                    <div key={dialog.id} className="bg-gray-50 rounded-md px-3 py-2">
                        <p className="text-xs font-semibold text-gray-500 mb-1">
                            <span className="text-[10px] uppercase text-emerald-600 font-medium tracking-wide">Interlocuteur : </span>
                            {dialog.speaker}
                        </p>
                        <p className="text-gray-900">{dialog.kr}</p>
                        <p className="text-gray-600 italic">{dialog.rom}</p>
                        <p className="text-xs text-gray-500">{dialog.fr}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
