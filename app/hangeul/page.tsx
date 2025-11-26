export default function HangeulPage() {
    const baseVowels = [
        { symbol: 'ㅏ', roman: 'a', idea: 'humain + soleil à droite', layout: 'verticale' },
        { symbol: 'ㅓ', roman: 'eo', idea: 'humain + soleil à gauche', layout: 'verticale' },
        { symbol: 'ㅗ', roman: 'o', idea: 'terre + soleil au-dessus', layout: 'horizontale' },
        { symbol: 'ㅜ', roman: 'u', idea: 'terre + soleil en dessous', layout: 'horizontale' },
        { symbol: 'ㅡ', roman: 'eu', idea: 'terre seule', layout: 'horizontale' },
        { symbol: 'ㅣ', roman: 'i', idea: 'humain seul', layout: 'verticale' },
        { symbol: 'ㅑ', roman: 'ya', idea: 'ㅏ avec double lumière', layout: 'verticale' },
        { symbol: 'ㅕ', roman: 'yeo', idea: 'ㅓ avec double lumière', layout: 'verticale' },
        { symbol: 'ㅛ', roman: 'yo', idea: 'ㅗ avec double lumière', layout: 'horizontale' },
        { symbol: 'ㅠ', roman: 'yu', idea: 'ㅜ avec double lumière', layout: 'horizontale' },
    ];

    const combinedVowels = [
        { symbol: 'ㅐ', roman: 'ae', idea: 'ㅏ + ㅣ' },
        { symbol: 'ㅔ', roman: 'e', idea: 'ㅓ + ㅣ' },
        { symbol: 'ㅒ', roman: 'yae', romanShort: 'yae', idea: 'ㅑ + ㅣ' },
        { symbol: 'ㅖ', roman: 'ye', idea: 'ㅕ + ㅣ' },
        { symbol: 'ㅘ', roman: 'wa', idea: 'ㅗ + ㅏ' },
        { symbol: 'ㅙ', roman: 'wae', idea: 'ㅗ + ㅐ' },
        { symbol: 'ㅚ', roman: 'oe', idea: 'ㅗ + ㅣ' },
        { symbol: 'ㅝ', roman: 'wo', idea: 'ㅜ + ㅓ' },
        { symbol: 'ㅞ', roman: 'we', idea: 'ㅜ + ㅔ' },
        { symbol: 'ㅟ', roman: 'wi', idea: 'ㅜ + ㅣ' },
        { symbol: 'ㅢ', roman: 'eui / ui', idea: 'ㅡ + ㅣ' },
    ];

    const consonants = [
        {
            symbol: 'ㄱ',
            roman: 'g / k',
            label: 'arrière de la langue',
            desc: 'La langue touche l’arrière du palais. Comme pour “k” ou “g”.',
        },
        {
            symbol: 'ㄴ',
            roman: 'n',
            label: 'avant de la langue',
            desc: 'La pointe de la langue touche juste derrière les dents du haut.',
        },
        {
            symbol: 'ㅁ',
            roman: 'm',
            label: 'lèvres fermées',
            desc: 'Les lèvres se ferment complètement pour produire le son.',
        },
        {
            symbol: 'ㅂ',
            roman: 'b / p',
            label: 'lèvres qui s’ouvrent',
            desc: 'Les lèvres se ferment puis s’ouvrent brusquement.',
        },
        {
            symbol: 'ㅅ',
            roman: 's',
            label: 'dents',
            desc: 'L’air passe entre les dents, langue proche des dents du haut.',
        },
        {
            symbol: 'ㅇ',
            roman: 'ng / ∅',
            label: 'gorge ouverte',
            desc: 'Forme de la gorge. Muet en début de syllabe, ‘ng’ en fin.',
        },
        {
            symbol: 'ㅈ',
            roman: 'j',
            label: 'dents + fermeture',
            desc: 'Comme un mélange entre ‘d’ et ‘j’, langue près du palais.',
        },
        {
            symbol: 'ㅎ',
            roman: 'h',
            label: 'souffle',
            desc: 'Souffle venu de la gorge, bouche légèrement ouverte.',
        },
    ];

    return (
        <main className="mx-auto flex w-full max-w-11/12 md:3/5 flex-col gap-10 px-4 pb-16 pt-10 mb-8 md:px-8 bg-white border-2 border-gray-300 rounded-md">
            {/* Header */}
            <header className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-medium tracking-wide text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Module coréen · Hangeul · Débutant</span>
                </div>

                <div className="space-y-3">
                    <h1 className=" text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                        Hangeul: les voyelles et consonnes expliquées avec <span className="text-emerald-600">Humain, Soleil, Terre</span>
                    </h1>
                    <p className=" text-sm text-slate-600 md:text-base">
                        Une vue d’ensemble du hangeul comme en cours particulier : les voyelles viennent du{' '}
                        <span className="font-medium text-emerald-700">Ciel / Soleil, de l’Humain et de la Terre</span>, et les consonnes sont dessinées à partir de la{' '}
                        <span className="font-medium text-emerald-700">bouche et de la langue</span>.
                    </p>
                </div>
            </header>

            {/* Anthropomorphic legend + syllable explanation */}
            <section className="grid gap-4 md:grid-cols-[1.5fr,2fr] md:items-start">
                {/* Anthropomorphic explanation */}
                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-5 shadow-sm">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Les 3 éléments de base</h2>
                    <p className="mt-2 text-sm text-slate-600">Toutes les voyelles du hangeul viennent de trois symboles simples qui représentent le monde.</p>

                    <div className="mt-4 grid gap-3 text-sm">
                        <div className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 border border-gray-200">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl">☀️</div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Ciel / Soleil</p>
                                <p className="text-sm text-slate-800">
                                    <span className="mr-1 rounded-md bg-slate-100 px-1.5 py-0.5 text-emerald-700">・</span>
                                    Au départ un point&nbsp;: la lumière, l’énergie.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 border border-gray-200">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl">🧍</div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Humain</p>
                                <p className="text-sm text-slate-800">
                                    <span className="mr-1 rounded-md bg-slate-100 px-1.5 py-0.5 text-emerald-700">ㅣ</span>
                                    Une ligne verticale&nbsp;: une personne debout entre Ciel et Terre.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 border border-gray-200">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl">🌍</div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Terre</p>
                                <p className="text-sm text-slate-800">
                                    <span className="mr-1 rounded-md bg-slate-100 px-1.5 py-0.5 text-emerald-700">ㅡ</span>
                                    Une ligne horizontale&nbsp;: la Terre, plate et stable.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 text-xs text-slate-500">
                        ➜ Les voyelles sont construites en combinant <span className="text-emerald-700">l’Humain </span>
                        avec le <span className="text-emerald-700">Soleil</span> et la <span className="text-emerald-700">Terre</span>.
                    </p>
                </div>

                {/* Syllable structure */}
                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-5 shadow-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Comment se lit une syllabe coréenne ?</h3>
                    <p className="mt-2 text-sm text-slate-600">Une syllabe coréenne est un petit bloc carré composé de&nbsp;:</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                        <li>
                            <span className="font-semibold text-emerald-700">1. Consonne</span> (départ)
                        </li>
                        <li>
                            <span className="font-semibold text-emerald-700">2. Voyelle</span>
                        </li>
                        <li>
                            <span className="font-semibold text-emerald-700">3. Optionnel</span> : consonne finale (받침)
                        </li>
                    </ul>

                    <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
                        <div className="rounded-xl border border-gray-200 bg-white p-3 text-center">
                            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">Exemple</p>
                            <p className="mt-1 text-3xl font-semibold text-slate-900">한</p>
                            <p className="mt-1 text-xs text-slate-600">ㅎ (h) + ㅏ (a) + ㄴ (n)</p>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-white p-3 text-center">
                            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">Autre exemple</p>
                            <p className="mt-1 text-3xl font-semibold text-slate-900">글</p>
                            <p className="mt-1 text-xs text-slate-600">ㄱ (g/k) + ㅡ (eu) + ㄹ (l)</p>
                        </div>
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center">
                            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-emerald-700">Idée clé</p>
                            <p className="mt-1 text-xs text-emerald-900">Tu lis toujours bloc par bloc, comme des petites briques LEGO.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vowels section */}
            <section className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900 md:text-xl">Les voyelles du hangeul</h2>
                        <p className="text-sm text-slate-600">D’abord les voyelles simples (à maîtriser absolument), puis les voyelles combinées.</p>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.3fr,1.1fr]">
                    {/* Simple vowels */}
                    <div className="rounded-2xl border border-gray-200 bg-slate-50 p-5 shadow-sm">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Voyelles simples (10)</h3>
                        <p className="mt-2 text-xs text-slate-600">Celles que tu dois connaître par cœur pour commencer à lire.</p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {baseVowels.map((vowel) => (
                                <div key={vowel.symbol} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2.5">
                                    <div className="flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-slate-100 text-2xl font-semibold text-slate-900">
                                        {vowel.symbol}
                                    </div>
                                    <div className="space-y-0.5">
                                        <div className="flex items-center gap-2">
                                            <p className="text-sm font-semibold text-slate-900">{vowel.roman}</p>
                                            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">{vowel.layout}</span>
                                        </div>
                                        <p className="text-xs text-slate-600">{vowel.idea}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Combined vowels */}
                    <div className="rounded-2xl border border-gray-200 bg-slate-50 p-5 shadow-sm">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">Voyelles combinées (11)</h3>
                        <p className="mt-2 text-xs text-slate-600">Elles sont construites à partir des voyelles simples. Tu peux les voir comme des mélanges de sons.</p>
                        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                            {combinedVowels.map((vowel) => (
                                <div key={vowel.symbol} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2">
                                    <div>
                                        <p className="text-base font-semibold text-slate-900">{vowel.symbol}</p>
                                        <p className="text-xs text-slate-600">{vowel.idea}</p>
                                    </div>
                                    <p className="text-xs font-medium text-emerald-700">{vowel.roman}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-3 text-[0.75rem] text-slate-500">➜ Apprends d’abord les simples, puis ajoute ces combinaisons petit à petit.</p>
                    </div>
                </div>
            </section>

            {/* Consonants section */}
            <section className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900 md:text-xl">Les consonnes&nbsp;: dessin de la bouche</h2>
                        <p className="text-sm text-slate-600">Les consonnes de base sont inspirées de la forme de la bouche, de la langue et de la gorge quand tu parles.</p>
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-5 shadow-sm">
                    <div className="grid gap-3 md:grid-cols-2">
                        {consonants.map((c) => (
                            <div key={c.symbol} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-3">
                                <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-slate-100 text-2xl font-semibold text-slate-900">{c.symbol}</div>
                                <div className="space-y-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <p className="text-sm font-semibold text-slate-900">{c.roman}</p>
                                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[0.7rem] uppercase tracking-[0.16em] text-slate-500">{c.label}</span>
                                    </div>
                                    <p className="text-xs text-slate-600">{c.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 text-xs text-slate-500">➜ Les consonnes “fortes” (ㄲ, ㅆ, ㅉ, ㅃ, ㄸ) sont des versions plus tendues / appuyées de ces formes de base.</p>
                </div>
            </section>

            {/* Closing hint */}
            <section className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-900 md:px-6 md:py-5">
                <p className="font-medium">Prochaine étape&nbsp;: lire des vrais mots coréens ✨</p>
                <p className="mt-1">
                    Entraîne-toi à reconnaître d’abord les voyelles, puis les consonnes, puis lis des blocs comme <span className="font-semibold">한, 글, 밥, 손…</span> Tu vas très
                    vite sentir la logique du système.
                </p>
            </section>
        </main>
    );
}
