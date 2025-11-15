export default function ProgramPage() {
  return (
    <div className="px-4 py-6 max-w-4xl mx-auto mb-16 space-y-10 bg-white border-2 border-gray-200 rounded-md">
      {/* Hero */}
      <section>
        <h1 className="text-3xl font-bold mb-2">Le programme KR NKAcademy</h1>
        <p className="text-gray-600 mb-4 font-light">
          Un parcours structuré pour apprendre le coréen naturellement, semaine
          après semaine.
        </p>
        <a
          href="/cours"
          className="inline-block rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          Voir tous les cours
        </a>
      </section>

      {/* Comment ça fonctionne */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Comment ça fonctionne ?</h2>

        <div className="grid gap-4 md:grid-cols-3 text-sm text-gray-700">
          {/* Bloc 1 */}
          <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-gray-50/80 p-4 hover:shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🧭</span>
              <h3 className="text-sm font-semibold">
                1. Votre point de départ
              </h3>
            </div>
            <p className="text-xs text-gray-600 md:text-sm font-light">
              Commencez au niveau A1 si vous débutez, ou plus loin si vous avez
              déjà quelques bases.
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-gray-50/80 p-4 hover:shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📚</span>
              <h3 className="text-sm font-semibold">
                2. Une semaine à la fois
              </h3>
            </div>
            <p className="text-xs text-gray-600 md:text-sm font-light">
              Chaque week propose un thème, des dialogues et des expressions
              utiles à réutiliser.
            </p>
          </div>

          {/* Bloc 3 */}
          <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-gray-50/80 p-4 hover:shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🔁</span>
              <h3 className="text-sm font-semibold">3. Révision naturelle</h3>
            </div>
            <p className="text-xs text-gray-600 md:text-sm font-light">
              Vous revoyez les mêmes expressions dans d’autres leçons, jusqu’à
              les retenir sans effort.
            </p>
          </div>
        </div>
      </section>

      {/* Organisation du programme */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Organisation du programme
        </h2>
        <p className="text-gray-700 text-sm mb-3 font-light">
          Le programme est organisé en weeks. Chaque week correspond à un bloc
          de contenu centré sur une situation de vie réelle.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 font-light">
          <li>1 thème principal (ex. : café, transports, rendez-vous)</li>
          <li>1–2 dialogues naturels</li>
          <li>Un ensemble de chunks récurrents</li>
          <li>Des phrases d’exemple pour réutiliser ces chunks</li>
        </ul>
      </section>

      {/* La méthode */}
      <section>
        <h2 className="text-xl font-semibold mb-3">
          La méthode : natural korean acquisition
        </h2>
        <p className="text-gray-700 text-sm mb-2 font-light">
          Plutôt que d’apprendre des listes de mots ou des règles abstraites,
          vous découvrez le coréen à travers des situations réelles et des
          phrases complètes.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 font-light">
          <li>Vous apprenez des expressions utilisées dans la vraie vie.</li>
          <li>
            Les dialogues vous montrent comment les utiliser naturellement dans
            le contexte.
          </li>
          <li>
            Le programme avance étape par étape pour construire une progression
            solide.
          </li>
        </ul>
      </section>

      <section className="border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-md">
        <h3 className="font-semibold text-emerald-900 mb-1">
          Un soutien pour votre progression
        </h3>
        <p className="text-sm text-emerald-900 leading-relaxed font-light">
          Ce programme a été conçu pour vous accompagner de manière progressive
          vers les niveaux
          <span className="font-semibold"> TOPIK 4–5</span>. NK Academy vous
          offre une structure claire, naturelle et entièrement gratuite, afin
          d’apprendre le coréen semaine après semaine sans pression.
          <br />
          <br />
          Pour aller plus loin – notamment en vocabulaire avancé, en grammaire
          spécifique ou en préparation ciblée à l’examen – l’utilisation de
          ressources complémentaires (livres, plateformes spécialisées, cours
          payants) peut constituer un véritable plus.
          <br />
          <br />
          Votre progression dépendra de votre implication et des outils que vous
          choisirez d’ajouter. NK Academy fournit une base solide pour
          progresser efficacement, mais ne peut garantir un score précis au
          TOPIK.
        </p>
      </section>

      {/* CTA final */}
      <section className="border-t pt-4">
        <p className="text-gray-700 text-sm mb-3 font-light">
          Prêt à commencer le programme ? Parcourez toutes les weeks et
          choisissez votre point de départ.
        </p>
        <a
          href="/cours"
          className="inline-block rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          Accéder aux cours
        </a>
      </section>
    </div>
  );
}
