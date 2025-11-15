"use client"; // si tu es sur Next.js App Router, sinon tu peux enlever

import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col leading-tight">
            <p className="font-bold text-base">KR Academy</p>
            <p className="text-xs text-gray-500 -mt-1 italic">
              natural korean acquisition
            </p>
          </div>{" "}
          <div className="hidden md:block h-3/4 w-px bg-gray-200" />
          <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <li>
              <a href="/programmes">Accueil</a>
            </li>
            <li>
              <a href="/programmes">Programmes</a>
            </li>
            <li>
              <a href="/cours">Cours</a>
            </li>
            <li>
              <a href="/explorer">Explorer</a>
            </li>
            <li>
              <a href="/contact">Nous contacter</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline text-sm text-gray-700">
            Mon compte
          </button>

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
              <a href="/programmes">Accueil</a>
            </li>
            <li>
              <a href="/programmes">Programmes</a>
            </li>
            <li>
              <a href="/cours">Cours</a>
            </li>
            <li>
              <a href="/explorer">Explorer</a>
            </li>
            <li>
              <a href="/contact">Nous contacter</a>
            </li>
            <li className="pt-2 border-t border-gray-100">
              <a href="/compte">Mon compte</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
