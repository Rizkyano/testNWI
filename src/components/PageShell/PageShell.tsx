import type { ReactNode } from "react";

type Props = {
  bgClass: string;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
};

export default function PageShell({ bgClass, title, subtitle, children }: Props) {
  return (
    <main className={`relative min-h-screen w-full ${bgClass}`}>
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative w-full px-6 py-12 md:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <header className="mb-8">
            <h3 className="text-3xl font-extrabold md:text-5xl">{title}</h3>
            {subtitle ? <p className="mt-5 text-1xl leading-relaxed text-white/70">{subtitle}</p> : null}
          </header>

          {children}
        </div>
      </div>
    </main>
  );
}
