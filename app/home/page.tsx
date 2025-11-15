import { getWeekOverview } from "@/services/data/ServiceData";
import { WeekCard } from "@/components/card/WeekCard";
import Image from "next/image";
export default async function Home() {
  const weekOverview = await getWeekOverview();
  const featuredWeeks = weekOverview.overviews.slice(0, 2); // ou plus si tu veux

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto mb-16 space-y-10 bg-white border-2 border-gray-200 rounded-md">
      {/* Hero */}
      <Image
        src="/assets/logo.png"
        alt="Logo KR KNAcademy"
        width={500}
        height={310}
        className="mx-auto"
      />
      <section>
        <h1 className="text-3xl font-bold mb-2">Bienvenue sur KR NKAcademy</h1>
        <p className="text-gray-600 mb-4 text-sm font-light">
          Natural Korean Acquisition : un programme gratuit pour apprendre le
          coréen à partir de situations réelles, semaine après semaine, avec
          l’objectif de vous accompagner vers les niveaux TOPIK 3–4.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/cours"
            className="inline-block rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
          >
            Commencer les cours
          </a>
          <a
            href="/programme"
            className="inline-block rounded-md border border-emerald-500 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50"
          >
            Voir le programme
          </a>
        </div>
      </section>

      {/* Note évolutive */}
      <section className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-md">
        <h3 className="font-semibold text-yellow-900 mb-1">
          Un site en constante évolution
        </h3>
        <p className="text-sm text-yellow-900 leading-relaxed font-light">
          KR NKAcademy est un projet gratuit et en développement continu. Le
          contenu s’enrichit régulièrement pour vous offrir un accompagnement
          progressif vers les niveaux{" "}
          <span className="font-semibold">TOPIK 3–4</span>. Pour une préparation
          complète, l’usage de ressources externes (livres, plateformes
          spécialisées, cours payants) peut aider à renforcer notamment le
          vocabulaire et la grammaire avancée.
        </p>
      </section>

      {/* Par où commencer ? */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Par où commencer ?</h2>
        <p className="text-gray-700 text-sm mb-3 font-light">
          Si vous débutez en coréen, nous vous recommandons de commencer par les
          premières weeks du programme. Vous pouvez aussi parcourir toutes les
          weeks sur la page des cours.
        </p>
        <a
          href="/cours"
          className="inline-block rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          Accéder aux cours
        </a>
      </section>

      {/* Aperçu des weeks */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Un aperçu des weeks</h2>
        <p className="text-sm text-gray-700 mb-4 font-light">
          Chaque week se concentre sur une situation de vie réelle, avec des
          dialogues, des chunks et des phrases clés à réutiliser.
        </p>
        <div className="flex">
          {featuredWeeks.map((w) => (
            <WeekCard key={w.week} {...w} />
          ))}
        </div>
        <div className="mt-4">
          <a href="/cours" className="text-sm text-emerald-600 hover:underline">
            Voir toutes les weeks →
          </a>
        </div>
      </section>

      {/* Pourquoi NK Academy ? */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Pourquoi KR NKAcademy ?</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 font-light">
          <li>
            Vous apprenez à partir de situations concrètes (café, transports,
            rendez-vous, etc.).
          </li>
          <li>
            Le programme est organisé semaine par semaine pour garder un rythme
            clair et régulier.
          </li>
          <li>
            KR NKAcademy est un projet gratuit, pensé pour vous accompagner vers
            les niveaux TOPIK 3–4, que vous pouvez compléter avec d’autres
            ressources si vous le souhaitez.
          </li>
        </ul>
      </section>
    </div>
  );
}
