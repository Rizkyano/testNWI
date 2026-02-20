type NavItem = "News" | "Attraction" | "Festivals" | "Food" | "Shopping" | "Accommodation" | "Travel Guide" | "Travel Suggestions" | "Media";

const ITEMS: NavItem[] = ["News", "Attraction", "Festivals", "Food", "Shopping", "Accommodation", "Travel Guide", "Travel Suggestions", "Media"];

export default function Navbar({ active }: { active: NavItem }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex w-[min(1200px,92vw)] items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-white/15 bg-white/10" />
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-wide">Indonesia Tourism</div>
            <div className="text-xs text-white/60">Premium Discovery</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {ITEMS.map((item) => (
            <a key={item} href="#" className={`text-sm transition ${item === active ? "font-bold text-white" : "text-white/70 hover:text-white"}`} onClick={(e) => e.preventDefault()}>
              <span className="relative">
                {item}
                {item === active ? <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded bg-red-500" /> : null}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile: show only title (no dropdowns) */}
        <div className="lg:hidden text-xs text-white/70">Menu (static)</div>
      </div>
    </header>
  );
}
