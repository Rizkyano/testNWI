import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import GlassPanel from "../components/GlassPanel/GlassPanel";
import PageShell from "../components/PageShell/PageShell";

const REGIONS = ["All", "Sumatra", "Java", "Bali", "Kalimantan", "Sulawesi", "Papua", "Maluku"] as const;

type ScenicItem = {
  slug: string;
  title: string;
  region: (typeof REGIONS)[number];
  image: string;
  description: string;
};

const SCENIC_ITEMS: ScenicItem[] = [
  {
    slug: "jakarta-old-town",
    title: "Jakarta Old Town",
    region: "Java",
    image: "https://images.unsplash.com/photo-1549958461-289b1d61b5ab?auto=format&fit=crop&w=1400&q=80",
    description: "A historic district with colonial-era architecture, museums, cafés, and lively public squares—ideal for culture walks and photography.",
  },
  {
    slug: "mount-bromo",
    title: "Mount Bromo",
    region: "Java",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80",
    description: "One of Indonesia’s most iconic volcano landscapes, famous for sunrise viewpoints, volcanic sea of sand, and dramatic crater scenery.",
  },
  {
    slug: "borobudur",
    title: "Borobudur",
    region: "Java",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1400&q=80",
    description: "A UNESCO-listed Buddhist temple complex celebrated for its grand stone reliefs, tranquil atmosphere, and sunrise experiences.",
  },
  {
    slug: "ubud-rice-terraces",
    title: "Ubud Rice Terraces",
    region: "Bali",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=80",
    description: "Emerald terraced fields shaped by traditional irrigation systems—perfect for nature strolls, local culture, and scenic viewpoints.",
  },
  {
    slug: "komodo-national-park",
    title: "Komodo National Park",
    region: "Bali",
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1400&q=80",
    description: "A legendary island landscape known for Komodo dragons, dramatic hills, and unforgettable sea views across the archipelago.",
  },
  {
    slug: "lake-toba",
    title: "Lake Toba",
    region: "Sumatra",
    image: "https://images.unsplash.com/photo-1603217040834-7d8f2b56d6c4?auto=format&fit=crop&w=1400&q=80",
    description: "A vast volcanic lake surrounded by cool highlands and Batak culture—ideal for relaxation, scenic drives, and cultural discovery.",
  },
  {
    slug: "derawan-islands",
    title: "Derawan Islands",
    region: "Kalimantan",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    description: "Tropical islands with calm waters and marine life—great for snorkeling, beach escapes, and slow travel.",
  },
  {
    slug: "bunaken-marine-park",
    title: "Bunaken Marine Park",
    region: "Sulawesi",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    description: "A celebrated marine sanctuary known for coral walls, clear visibility, and world-class diving experiences.",
  },
  {
    slug: "raja-ampat",
    title: "Raja Ampat",
    region: "Papua",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=80",
    description: "A pristine island paradise with extraordinary biodiversity—often considered one of the world’s finest diving destinations.",
  },
  {
    slug: "spice-islands",
    title: "Spice Islands",
    region: "Maluku",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    description: "Historic islands once central to the spice trade—offering quiet beaches, cultural heritage, and ocean horizons.",
  },
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
              "rounded-full px-4 py-2 text-sm backdrop-blur-md transition border bg-gradient-to-br from-[#0f172a]/80 via-[#111827]/80 to-[#0b1220]/80",
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

export default function ScenicSpotSearch() {
  const [region, setRegion] = useState<string>("All");

  const scenicFiltered = useMemo(() => {
    if (region === "All") return SCENIC_ITEMS;
    return SCENIC_ITEMS.filter((i) => i.region === region);
  }, [region]);

  const bgClass = "bg-[radial-gradient(900px_600px_at_70%_20%,rgba(255,255,255,.12),transparent_60%),linear-gradient(135deg,#061a1f,#1a1026)]";

  return (
    <PageShell bgClass={bgClass} title="Scenic Spot Search" subtitle="Browse Indonesia by region and discover places worth traveling to.">
      <div className="mb-5">
        <Link to="/attraction" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
          ← Back to Attraction
        </Link>
      </div>

      <GlassPanel>
        <Pills value={region} onChange={setRegion} />

        <div className="mt-6 grid gap-4 md:grid-cols-[360px_1fr]">
          {/* Map mock */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
            <div className="text-sm font-extrabold">Indonesia Map (mock)</div>
            <div className="mt-1 text-xs text-white/60">Replace with an SVG map later.</div>
            <div className="relative mt-4 h-64 overflow-hidden rounded-xl border border-white/10">
              <img
                src="https://simplemaps.com/static/svg/country/id/all/id.svg"
                alt="Indonesia Map"
                className="h-full w-full object-contain bg-black/30 p-3"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // fallback if blocked
                  (e.currentTarget as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Indonesia_relief_location_map.jpg/1024px-Indonesia_relief_location_map.jpg";
                }}
              />

              {/* Dark overlay to match theme */}
              <div className="pointer-events-none absolute inset-0 bg-black/25" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-900/15 via-transparent to-blue-900/15" />
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="mb-2 text-sm font-extrabold">Results</div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {scenicFiltered.map((i) => (
                <Link key={i.slug} to={`/attraction/scenic/${i.slug}`} className="group block overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-soft transition hover:-translate-y-1 hover:bg-white/10">
                  <div className="h-28 border-b border-white/10 bg-cover bg-center" style={{ backgroundImage: `url(${i.image})` }} />

                  <div className="p-3">
                    <div className="text-sm font-extrabold">{i.title}</div>
                    <div className="mt-1 text-xs text-white/60">{i.region}</div>

                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/60">{i.description}</p>

                    <div className="mt-3 text-xs font-semibold text-red-400 opacity-0 transition group-hover:opacity-100">View details →</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </PageShell>
  );
}
