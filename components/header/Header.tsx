'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="flex items-center justify-between h-16 px-4">
                <div className="flex items-center gap-4">
                    <Image src="/assets/logo_square.png" alt="KR KNAcademy Square" height={50} width={50} />
                    <div className="flex flex-col leading-tight">
                        <p className="font-bold text-base">KR Academy</p>
                        <p className="text-xs text-gray-500 -mt-1 italic">natural korean acquisition</p>
                    </div>
                    <div className="hidden md:block h-10 w-px bg-gray-300" />

                    <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
                        <li>
                            <Link href="/home">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/program">Programmes</Link>
                        </li>
                        <li>
                            <Link href="/week">Cours</Link>
                        </li>
                        {/* <li>
                            <a href="/explorer">Explorer</a>
                        </li>
                        <li>
                            <a href="/contact">Nous contacter</a>
                        </li> */}
                        <li>
                            <Link
                                href="/hangeul"
                                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 hover:shadow-md transition"
                            >
                                Hangeul
                                <span className="text-[0.7rem] uppercase tracking-[0.12em] text-emerald-100">Guide</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-3">
                    {/* <button className="hidden md:inline text-sm text-gray-700">Mon compte</button> */}

                    <button
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200"
                        onClick={() => setOpen(!open)}
                        aria-label="Ouvrir le menu"
                    >
                        <span className="text-lg">☰</span>
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t border-gray-100">
                    <ul className="flex flex-col gap-2 px-4 py-3 text-sm text-gray-700">
                        <li>
                            <Link href="/home">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/program">Programmes</Link>
                        </li>
                        <li>
                            <Link href="/week">Cours</Link>
                        </li>
                        {/* <li>
                            <a href="/explorer">Explorer</a>
                        </li>
                        <li>
                            <a href="/contact">Nous contacter</a>
                        </li> */}
                        {/* <li className="pt-2 border-t border-gray-100">
                            <a href="/compte">Mon compte</a>
                        </li> */}
                    </ul>
                </div>
            )}
        </nav>
    );
}
