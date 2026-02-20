import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import GlassPanel from "../components/GlassPanel/GlassPanel";
import PageShell from "../components/PageShell/PageShell";

const REGIONS = ["All", "Sumatra", "Java", "Bali", "Kalimantan", "Sulawesi", "Papua", "Maluku"] as const;

const QUICK_CATEGORIES = ["Scenic Spots", "Accessible Travel", "Hot Springs", "Museums", "Night Markets & Old Streets", "Historic Sites", "Recreational Areas"] as const;

type QuickItem = {
  title: string;
  region: (typeof REGIONS)[number];
  tags: string[];
};

const QUICK_ITEMS: QuickItem[] = [
  { title: "Ubud", region: "Bali", tags: ["Culture", "Nature"] },
  { title: "Borobudur", region: "Java", tags: ["Historic", "Temple"] },
  { title: "Raja Ampat", region: "Papua", tags: ["Ocean", "Diving"] },
  { title: "Lake Toba", region: "Sumatra", tags: ["Lake", "Scenic"] },
  { title: "Bromo", region: "Java", tags: ["Volcano", "Sunrise"] },
  { title: "Komodo", region: "Bali", tags: ["Wildlife", "Island"] },
  { title: "Derawan", region: "Kalimantan", tags: ["Beach", "Snorkel"] },
  { title: "Toraja", region: "Sulawesi", tags: ["Culture", "Highland"] },
];

function Pills({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {REGIONS.map((r) => {
        const active = value === r;
        return (
          <button
            key={r}
            onClick={() => onChange(r)}
            className={[
              "rounded-full px-4 py-2 text-sm backdrop-blur-md transition border",
              active ? "border-red-500/60 bg-red-500/20 text-white shadow-md ring-2 ring-red-500/30" : "border-white/20 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
            ].join(" ")}
          >
            {r}
          </button>
        );
      })}
    </div>
  );
}

export default function QuickSearch() {
  const [region, setRegion] = useState<string>("All");
  const [category, setCategory] = useState<(typeof QUICK_CATEGORIES)[number]>(QUICK_CATEGORIES[0]);

  const filtered = useMemo(() => {
    if (region === "All") return QUICK_ITEMS;
    return QUICK_ITEMS.filter((i) => i.region === region);
  }, [region]);

  const bgClass = "bg-[radial-gradient(900px_600px_at_40%_20%,rgba(255,255,255,.12),transparent_60%),linear-gradient(135deg,#101827,#2a1115)]";

  return (
    <PageShell bgClass={bgClass} title="Quick Search" subtitle="Find experiences faster with category and region filters.">
      <div className="mb-5">
        <Link to="/attraction" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
          ← Back to Attraction
        </Link>
      </div>

      <GlassPanel>
        <Pills value={region} onChange={setRegion} />

        <div className="mt-5 rounded-2xl border border-white/15 bg-white/5 p-4">
          <div className="text-sm font-extrabold">Category</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {QUICK_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={[
                  "rounded-full px-4 py-2 text-sm backdrop-blur-md transition border",
                  category === c ? "border-red-500/60 bg-red-500/20 text-white shadow-md ring-2 ring-red-500/30" : "border-white/20 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-3 text-xs text-white/60">
            Selected: <span className="text-white/80">{category}</span>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((i) => (
            <div key={i.title} className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-soft">
              <div className="h-28 border-b border-white/10 bg-gradient-to-br from-white/15 to-white/5" />
              <div className="p-3">
                <div className="text-sm font-extrabold">{i.title}</div>
                <div className="mt-1 text-xs text-white/60">{i.region}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {i.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 bg-black/20 px-2 py-0.5 text-[11px] text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </PageShell>
  );
}
