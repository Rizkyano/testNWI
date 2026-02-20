import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import GlassPanel from "../components/GlassPanel/GlassPanel";
import PageShell from "../components/PageShell/PageShell";

const REGIONS = ["All", "Sumatra", "Java", "Bali", "Kalimantan", "Sulawesi", "Papua", "Maluku"] as const;

type ScenicItem = { title: string; region: (typeof REGIONS)[number] };

const SCENIC_ITEMS: ScenicItem[] = [
  { title: "Jakarta Old Town", region: "Java" },
  { title: "Mount Bromo", region: "Java" },
  { title: "Borobudur", region: "Java" },
  { title: "Ubud Rice Terraces", region: "Bali" },
  { title: "Komodo National Park", region: "Bali" },
  { title: "Lake Toba", region: "Sumatra" },
  { title: "Derawan Islands", region: "Kalimantan" },
  { title: "Bunaken Marine Park", region: "Sulawesi" },
  { title: "Raja Ampat", region: "Papua" },
  { title: "Spice Islands", region: "Maluku" },
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
          <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
            <div className="text-sm font-extrabold">Indonesia Map (mock)</div>
            <div className="mt-1 text-xs text-white/60">Replace with an SVG map later.</div>
            <div className="mt-4 h-64 rounded-xl border border-white/10 bg-gradient-to-br from-red-500/25 via-white/10 to-blue-500/20" />
          </div>

          <div>
            <div className="mb-2 text-sm font-extrabold">Results</div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {scenicFiltered.map((i) => (
                <div key={i.title} className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-soft">
                  <div className="h-24 border-b border-white/10 bg-gradient-to-br from-white/15 to-white/5" />
                  <div className="p-3">
                    <div className="text-sm font-extrabold">{i.title}</div>
                    <div className="mt-1 text-xs text-white/60">{i.region}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </PageShell>
  );
}
