import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SCENIC_ITEMS } from "../data/scenic";

type TopMenu = "Attraction" | "Current Events" | "Recommended Itineraries";
type Category = "All" | "Scenic Spots" | "Hot Springs" | "Museums" | "Night Markets & Old Streets" | "Historic Sites";

const CATEGORIES: Category[] = ["All", "Scenic Spots", "Hot Springs", "Museums", "Night Markets & Old Streets", "Historic Sites"];

function Chip({ active, children, onClick }: { active?: boolean; children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm transition bg-gradient-to-br from-[#0f172a]/80 via-[#111827]/80 to-[#0b1220]/80",
        "border backdrop-blur-md",
        active ? "border-red-500/60 bg-red-500/15 text-white ring-2 ring-red-500/20" : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function TopTab({ active, title, subtitle, onClick }: { active?: boolean; title: string; subtitle?: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "bg-gradient-to-br from-[#0f172a]/80 via-[#111827]/80 to-[#0b1220]/80 group w-full rounded-2xl px-4 py-4 text-left transition",
        "border backdrop-blur-md",
        active ? "border-red-500/60 bg-white/5" : "border-white/10 bg-white/0 hover:bg-white/5",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-extrabold">{title}</div>
          {subtitle ? <div className="mt-1 text-xs text-white/60">{subtitle}</div> : null}
        </div>
        <div className={["h-2 w-20 rounded-full transition", active ? "bg-red-500/70" : "bg-white/10 group-hover:bg-white/15"].join(" ")} />
      </div>
    </button>
  );
}

export default function ScenicDetail() {
  const { slug } = useParams();
  const item = SCENIC_ITEMS.find((x) => x.slug === slug);

  const [topMenu, setTopMenu] = useState<TopMenu>("Attraction");
  const [category, setCategory] = useState<Category>("All");

  // Related content based on item.relatedSlugs (DIFFERENT per item)
  const relatedBase = useMemo(() => {
    if (!item) return [];
    return item.relatedSlugs.map((s) => SCENIC_ITEMS.find((x) => x.slug === s)).filter(Boolean);
  }, [item]);

  // Optional: filter related by category chips like the example
  const relatedFiltered = useMemo(() => {
    if (category === "All") return relatedBase;
    return relatedBase.filter((x) => x!.category === category);
  }, [relatedBase, category]);

  if (!item) {
    return <div className="mx-auto max-w-6xl px-6 py-10 text-white">Not found</div>;
  }

  return (
    <main className="min-h-screen text-white">
      {/* HERO IMAGE */}
      <section className="relative h-[60vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-10">
          <h1 className="text-4xl font-extrabold md:text-6xl">{item.title}</h1>
          <p className="mt-2 text-sm text-white/70">
            {item.region} • {item.category}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/15 bg-black/30 px-2 py-0.5 text-[11px] text-white/70">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link to="/attraction/scenic" className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
          ← Back
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-xl font-bold">Overview</h2>
            <p className="mt-3 leading-relaxed text-white/70">{item.overview ?? item.description}</p>

            <h2 className="mt-8 text-xl font-bold">Travel Experience</h2>
            <p className="mt-3 text-white/70">{item.travelExperience ?? "Discover local culture, natural beauty, and unique experiences. Add itinerary ideas, nearby attractions, or seasonal highlights."}</p>
          </div>

          <aside className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-bold">Travel Info</h3>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div>
                <strong>Region:</strong> {item.region}
              </div>
              <div>
                <strong>Best Season:</strong> {item.travelInfo.bestSeason}
              </div>
              <div>
                <strong>Suggested Duration:</strong> {item.travelInfo.suggestedDuration}
              </div>
              <div>
                <strong>Recommended for:</strong> {item.travelInfo.recommendedFor.join(", ")}
              </div>
            </div>
          </aside>
        </div>

        {/* Menus like the example image (dynamic per item) */}
        <div className="mt-12 rounded-2xl border border-white/15 bg-black/30 p-5 shadow-soft backdrop-blur">
          <div className="text-center">
            <div className="text-lg font-extrabold tracking-wide">{item.title} Travel Info</div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <TopTab active={topMenu === "Attraction"} title="Attraction" subtitle="Related places" onClick={() => setTopMenu("Attraction")} />
            <TopTab active={topMenu === "Current Events"} title="Current Events" subtitle="Highlights & timing" onClick={() => setTopMenu("Current Events")} />
            <TopTab active={topMenu === "Recommended Itineraries"} title="Recommended Itineraries" subtitle="Curated routes" onClick={() => setTopMenu("Recommended Itineraries")} />
          </div>

          {topMenu === "Attraction" ? (
            <>
              <div className="mt-6 flex flex-wrap gap-3">
                {CATEGORIES.map((c) => (
                  <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
                    {c}
                  </Chip>
                ))}
              </div>

              <div className="mt-4 text-sm text-white/70">
                Total: <span className="font-semibold text-white">{relatedFiltered.length}</span>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {relatedFiltered.map((x) => (
                  <Link key={x!.slug} to={`/attraction/scenic/${x!.slug}`} className="group overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-soft transition hover:-translate-y-1 hover:bg-white/10">
                    <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url(${x!.image})` }}>
                      <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[11px] text-white/90">{x!.category}</div>
                    </div>

                    <div className="p-4">
                      <div className="font-extrabold">{x!.title}</div>
                      <div className="mt-1 text-xs text-white/60">{x!.region}</div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {x!.tags.slice(0, 3).map((t) => (
                          <span key={t} className="rounded-full border border-white/15 bg-black/20 px-2 py-0.5 text-[11px] text-white/70">
                            #{t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 text-xs font-semibold text-red-400 opacity-0 transition group-hover:opacity-100">View details →</div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : topMenu === "Current Events" ? (
            <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
              <div className="text-sm font-extrabold">Current Events</div>
              {item.events.length === 0 ? (
                <p className="mt-2 text-sm text-white/70">No events listed for this destination yet.</p>
              ) : (
                <ul className="mt-3 space-y-3">
                  {item.events.map((e) => (
                    <li key={e.title} className="rounded-xl border border-white/10 bg-black/20 p-4">
                      <div className="font-semibold">{e.title}</div>
                      <div className="mt-1 text-xs text-white/60">{e.date}</div>
                      {e.note ? <div className="mt-2 text-sm text-white/70">{e.note}</div> : null}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
              <div className="text-sm font-extrabold">Recommended Itineraries</div>
              {item.itineraries.length === 0 ? (
                <p className="mt-2 text-sm text-white/70">No itineraries listed for this destination yet.</p>
              ) : (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {item.itineraries.map((it) => (
                    <div key={it.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
                      <div className="font-semibold">{it.title}</div>
                      <div className="mt-1 text-xs text-white/60">{it.duration}</div>
                      <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-white/70">
                        {it.stops.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
