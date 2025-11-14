import { getWeekData, getWeekOverview } from "@/services/data/ServiceData";

export default async function Home() {
  const weekOverview = await getWeekOverview();
  return (
    <div>
      <main>
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          NKAcademy — Weekly Overview
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weekOverview.overviews.map((w) => (
            <div
              key={w.week}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-bold text-purple-700 mb-2">
                Week {w.week} — {w.title}
              </h2>

              <p className="text-gray-700 text-sm mb-4">{w.summary}</p>

              <img className="mx-auto" src={w.image} alt="a" />

              <div className="flex flex-col gap-1 text-sm text-gray-600">
                <span>
                  <strong>Slug:</strong> {w.slug}
                </span>

                <span>
                  <strong>Difficulty:</strong> {w.difficulty}
                </span>

                <span>
                  <strong>Audio:</strong> {w.audioBasePath}
                </span>

                <span>
                  <strong>Tooltip:</strong> {w.tooltip}
                </span>
              </div>

              <a
                href={`/week/${w.slug}`}
                className="mt-4 inline-block text-purple-600 font-semibold hover:underline text-sm"
              >
                Open Week →
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
