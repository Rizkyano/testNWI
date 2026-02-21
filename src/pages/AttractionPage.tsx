import { useNavigate } from "react-router-dom";
import GlassPanel from "../components/GlassPanel/GlassPanel";
import PageShell from "../components/PageShell/PageShell";

function OptionCard({ title, subtitle, image, onClick }: { title: string; subtitle: string; image: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl
                 border border-white/10
                 bg-gradient-to-br from-[#0f172a]/80 via-[#111827]/80 to-[#0b1220]/80
                 shadow-xl transition hover:-translate-y-1 text-left"
    >
      {/* IMAGE */}
      <div
        className="h-40 w-full bg-cover bg-center transition duration-700
                   group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* DARK LUXURY OVERLAY */}
        <div
          className="absolute inset-0
                     bg-gradient-to-t
                     from-black/80 via-black/40 to-transparent"
        />

        {/* COLOR TINT (theme accent) */}
        <div
          className="absolute inset-0
                     bg-gradient-to-br
                     from-red-900/20 via-transparent to-blue-900/20"
        />
      </div>

      {/* CONTENT */}
      <div className="relative p-4">
        <div className="text-sm font-extrabold tracking-wide text-white">{title}</div>

        <div className="mt-1 text-xs text-white/60">{subtitle}</div>

        <div
          className="mt-3 text-xs font-semibold text-red-400
                     opacity-0 transition group-hover:opacity-100"
        >
          Open →
        </div>
      </div>
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
          {/* About Indonesia — cultural Indonesia photo */}
          <OptionCard title="About Indonesia" subtitle="Culture & essential information" image="https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1400&q=80" onClick={() => navigate("/attraction/about")} />

          {/* Scenic Spot Search — landscape Indonesia */}
          <OptionCard title="Scenic Spot Search" subtitle="Browse by island/region" image="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80" onClick={() => navigate("/attraction/scenic")} />

          {/* Quick Search — travel/tourism Indonesia */}
          <OptionCard title="Quick Search" subtitle="Find attractions faster" image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80" onClick={() => navigate("/attraction/quick")} />
        </div>
      </GlassPanel>
    </PageShell>
  );
}
