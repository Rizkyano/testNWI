export default function GlassPanel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-white/15 bg-black/35 p-5 shadow-soft backdrop-blur">{children}</div>;
}
