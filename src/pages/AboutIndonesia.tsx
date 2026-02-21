import { Link } from "react-router-dom";
import GlassPanel from "../components/GlassPanel/GlassPanel";
import PageShell from "../components/PageShell/PageShell";

export default function AboutIndonesia() {
  const bgClass = "bg-[radial-gradient(1100px_700px_at_20%_20%,rgba(255,255,255,.12),transparent_60%),linear-gradient(135deg,#0c1220,#20120f)]";

  return (
    <PageShell bgClass={bgClass} title="About Indonesia" subtitle="Culture, heritage, and essential travel information — curated for modern explorers.">
      <div className="mb-5">
        <Link to="/attraction" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
          ← Back to Attraction
        </Link>
      </div>

      <GlassPanel>
        <div className="grid gap-4 md:grid-cols-4">
          {["Welcome to Indonesia", "General Information", "Religion", "Literature & Art", "Cultural Heritage"].map((t) => (
            <button key={t} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-left shadow-soft transition hover:-translate-y-0.5 hover:bg-white/10">
              <div className="mb-3 h-28 rounded-xl border border-white/10 bg-gradient from-white/15 to-white/5" />
              <div className="text-sm font-extrabold">{t}</div>
              <div className="mt-1 text-xs text-white/60">Curated overview</div>
            </button>
          ))}
        </div>
      </GlassPanel>
    </PageShell>
  );
}
