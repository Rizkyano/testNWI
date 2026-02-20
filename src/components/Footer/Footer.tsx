export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex w-[min(1200px,92vw)] flex-col gap-2 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Indonesia Tourism — UI Demo</span>
        <span className="text-white/50">Made with Vite + React + Tailwind</span>
      </div>
    </footer>
  );
}
