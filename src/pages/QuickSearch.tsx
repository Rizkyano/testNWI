import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import GlassPanel from "../components/GlassPanel/GlassPanel";
import PageShell from "../components/PageShell/PageShell";

const REGIONS = ["All", "Sumatra", "Java", "Bali", "Kalimantan", "Sulawesi", "Papua", "Maluku"] as const;

const QUICK_CATEGORIES = ["All", "Scenic Spots", "Accessible Travel", "Hot Springs", "Museums", "Night Markets & Old Streets", "Historic Sites", "Recreational Areas"] as const;

type Region = (typeof REGIONS)[number];
type Category = (typeof QUICK_CATEGORIES)[number];

type QuickItem = {
  title: string;
  slug: string;
  region: Region;
  category: Category;
  tags: string[];
  image: string;
};

const QUICK_ITEMS: QuickItem[] = [
  {
    title: "Ubud",
    slug: "ubud",
    region: "Bali",
    category: "Scenic Spots",
    tags: ["Culture", "Nature"],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Borobudur",
    slug: "borobudur",
    region: "Java",
    category: "Historic Sites",
    tags: ["Historic", "Temple"],
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Raja Ampat",
    slug: "raja-ampat",
    region: "Papua",
    category: "Scenic Spots",
    tags: ["Ocean", "Diving"],
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Lake Toba",
    slug: "lake-toba",
    region: "Sumatra",
    category: "Scenic Spots",
    tags: ["Lake", "Scenic"],
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Bromo",
    slug: "bromo",
    region: "Java",
    category: "Scenic Spots",
    tags: ["Volcano", "Sunrise"],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Komodo",
    slug: "komodo",
    region: "Bali",
    category: "Recreational Areas",
    tags: ["Wildlife", "Island"],
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Derawan",
    slug: "derawan",
    region: "Kalimantan",
    category: "Recreational Areas",
    tags: ["Beach", "Snorkel"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Toraja",
    slug: "toraja",
    region: "Sulawesi",
    category: "Museums",
    tags: ["Culture", "Highland"],
    image: "https://images.unsplash.com/photo-1529421306624-8f5e3b3cc2d0?auto=format&fit=crop&w=1400&q=80",
  },
];

// ---------- THEME-MATCHED PILL BUTTON ----------
function pillClass(active: boolean) {
  return [
    "rounded-full px-4 py-2 text-sm font-semibold",
    "transition backdrop-blur-md",
    "border",
    // Deep navy glass (prevents washed/white look)
    "bg-gradient-to-br from-[#0f172a]/80 via-[#111827]/80 to-[#0b1220]/80 text-white/80 border-white/15",
    "hover:bg-[#0b1220]/85 hover:text-white",
    active ? "bg-gradient-to-br from-[#0f172a]/80 via-[#111827]/80 to-[#0b1220]/80 border-red-500/50 text-white ring-2 ring-red-500/25" : "",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
  ].join(" ");
}

function RegionPills({ value, onChange }: { value: Region; onChange: (v: Region) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {REGIONS.map((r) => (
        <button key={r} onClick={() => onChange(r)} className={pillClass(value === r)}>
          {r}
        </button>
      ))}
    </div>
  );
}

export default function QuickSearch() {
  const [region, setRegion] = useState<Region>("All");
  const [category, setCategory] = useState<Category>("All");

  // ✅ Filter by region + category
  const filtered = useMemo(() => {
    return QUICK_ITEMS.filter((i) => {
      const okRegion = region === "All" ? true : i.region === region;
      const okCategory = category === "All" ? true : i.category === category;
      return okRegion && okCategory;
    });
  }, [region, category]);

  // ✅ THEME-MATCHED BACKGROUND (no white glow)
  const bgClass = "bg-[radial-gradient(900px_600px_at_40%_18%,rgba(239,68,68,.10),transparent_60%),radial-gradient(900px_600px_at_75%_30%,rgba(59,130,246,.08),transparent_60%),linear-gradient(135deg,#070a12,#0b1220,#1a0b10)]";

  return (
    <PageShell bgClass={bgClass} title="Quick Search" subtitle="Find experiences faster with category and region filters.">
      <div className="mb-5">
        <Link to="/attraction" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
          ← Back to Attraction
        </Link>
      </div>

      <GlassPanel>
        {/* Regions */}
        <RegionPills value={region} onChange={setRegion} />

        {/* Category Panel */}
        <div className="mt-5 rounded-2xl border border-white/15 bg-[#0b1220]/60 p-4 backdrop-blur">
          <div className="text-sm font-extrabold">Category</div>

          <div className="mt-3 flex flex-wrap gap-2 ">
            {QUICK_CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={pillClass(category === c)}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-3 text-xs text-white/60 ">
            Selected: <span className="text-white/80">{category}</span> • Total: <span className="text-white/80">{filtered.length}</span>
          </div>
        </div>

        {/* Results */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((i) => (
            <div key={i.slug} className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient from-black/40 via-black/25 to-black/40 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-red-500/30">
              {/* Photo */}
              <div className="relative h-32 border-b border-white/10">
                <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${i.image})` }} />
                <div className="absolute inset-0 bg-gradient from-black/75 via-black/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient from-red-900/20 via-transparent to-blue-900/15" />

                <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[11px] text-white/85">{i.category}</div>
              </div>

              {/* Text */}
              <div className="p-4">
                <div className="text-sm font-extrabold">{i.title}</div>
                <div className="mt-1 text-xs text-white/60">{i.region}</div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {i.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 bg-black/30 px-2 py-0.5 text-[11px] text-white/70">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-xs font-semibold text-red-400 opacity-0 transition group-hover:opacity-100">View →</div>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </PageShell>
  );
}
