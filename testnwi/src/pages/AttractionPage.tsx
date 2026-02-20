import { useNavigate } from "react-router-dom";
import GlassPanel from "../components/GlassPanel/GlassPanel";
import PageShell from "../components/PageShell/PageShell";

function OptionCard({ title, subtitle, onClick }: { title: string; subtitle: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group w-full rounded-2xl border border-white/15 bg-white/5 p-4 text-left shadow-soft transition hover:-translate-y-0.5 hover:bg-white/10">
      <div className="mb-3 h-28 w-full rounded-xl border border-white/10 bg-gradient-to-br from-white/15 to-white/5" />
      <div className="text-sm font-extrabold">{title}</div>
      <div className="mt-1 text-xs text-white/60">{subtitle}</div>
      <div className="mt-3 text-xs font-semibold text-red-400 opacity-0 transition group-hover:opacity-100">Open →</div>
    </button>
  );
}

export default function AttractionPage() {
  const navigate = useNavigate();

  const bgClass = "bg-[radial-gradient(1100px_700px_at_20%_20%,rgba(255,255,255,.12),transparent_60%),linear-gradient(135deg,#0c1220,#20120f)]";

  return (
    <PageShell
      bgClass={bgClass}
      title="Town Culture, Nature, Food and Hospitable People"
      subtitle={
        <>
          <p>
            Indonesia is the world’s largest archipelago, stretching across more than 17,000 islands between the Indian and Pacific Oceans. Strategically located between Asia and Australia, it has long served as a cultural crossroads,
            connecting civilizations through trade, migration, and shared traditions. Today, Indonesia stands as one of the most diverse and captivating travel destinations in the world. Blessed with extraordinary natural beauty, Indonesia
            offers landscapes that range from active volcanoes and lush rainforests to pristine beaches and crystal-clear coral reefs. Situated along the Pacific Ring of Fire, the country features dramatic mountain ranges and fertile lands.
            Visitors can witness breathtaking sunrises over Mount Bromo, dive among the vibrant marine ecosystems of Raja Ampat, or explore the serene highlands of Bali and Flores.
          </p>

          <p className="mt-3">
            Indonesia is also home to remarkable biodiversity. Tropical forests shelter rare wildlife such as the orangutan in Sumatra and Kalimantan, the Komodo dragon in East Nusa Tenggara, and countless endemic bird species across Papua.
            Numerous national parks and marine reserves have been established to preserve these ecological treasures for future generations. Culturally, Indonesia is equally rich. With more than 300 ethnic groups and hundreds of local
            languages, each region offers unique customs, architecture, ceremonies, and artistic expressions. Historic landmarks like Borobudur and Prambanan temples reflect the nation’s deep heritage, while traditional dances, batik
            craftsmanship, and local festivals continue to thrive in modern society.
          </p>
        </>
      }
    >
      <GlassPanel>
        <p className="mb-5 text-center text-sm text-white/70">Choose one option to begin:</p>

        <div className="grid gap-4 md:grid-cols-3">
          <OptionCard title="About Indonesia" subtitle="Culture & essential information" onClick={() => navigate("/attraction/about")} />
          <OptionCard title="Scenic Spot Search" subtitle="Browse by island/region" onClick={() => navigate("/attraction/scenic")} />
          <OptionCard title="Quick Search" subtitle="Find attractions faster" onClick={() => navigate("/attraction/quick")} />
        </div>
      </GlassPanel>
    </PageShell>
  );
}
