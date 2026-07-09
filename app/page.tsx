import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Enterprise AI Governance",
    text: "Transform governance documents, policies and controls into trusted, searchable and actionable intelligence.",
  },
  {
    title: "Regulatory Intelligence",
    text: "Support regulated environments facing DORA, NIS2, ISO 27001 and EU AI Act requirements.",
  },
  {
    title: "Trusted Decision Support",
    text: "Built around explainability, auditability, human oversight and secure enterprise AI adoption.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080706] text-[#F7F3EA]">
      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <a href="/" className="flex items-center gap-4">
            <Image
              src="/ZEHN.png"
              alt="ZEHN Logo"
              width={90}
              height={90}
              priority
              className="h-auto w-auto"
            />

            <div className="hidden md:block leading-tight">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D6C39A]">
                A NAVACO Venture
              </p>
              <p className="text-sm font-semibold text-white">
                Powered by NAVACO SARL
              </p>
            </div>
          </a>

          <a
            href="mailto:navacolu@gmail.com"
            className="rounded-full border border-[#D6C39A]/40 bg-black/25 px-6 py-2 text-sm text-[#D6C39A] backdrop-blur-md transition hover:bg-[#D6C39A] hover:text-[#080706]"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="relative min-h-[95vh] overflow-hidden">
        <Image
          src="/ZEHN.png"
          alt="ZEHN AI governance background"
          fill
          priority
          className="object-cover object-center opacity-25"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent via-[#080706]/80 to-[#080706]" />

        <div className="relative z-10 flex min-h-[95vh] items-center justify-center px-6 pt-40 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#D6C39A]">
              ZEHN · A new AI company in collaboration with NAVACO SARL
            </p>

            <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-tight text-[#F7F3EA] md:text-7xl">
              Meet <span className="text-[#D6C39A]">ZEHN</span>
            </h1>

            <p className="mt-6 text-2xl font-semibold text-[#F7F3EA] md:text-3xl">
              AI is everywhere. Trust is not.
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#D8D1C3] md:text-lg">
              ZEHN is an emerging AI Governance company created in collaboration
              with NAVACO SARL to help regulated organizations turn static
              governance documentation into trusted, explainable and actionable
              enterprise intelligence.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/zehn"
                className="rounded-full bg-[#D6C39A] px-7 py-3 font-semibold text-[#080706] transition hover:bg-[#E8D7B0]"
              >
                ▶ Watch 45s Pitch
              </Link>

              <a
                href="mailto:navacolu@gmail.com"
                className="rounded-full border border-[#D6C39A]/30 bg-black/20 px-7 py-3 font-semibold text-[#F7F3EA] backdrop-blur-md transition hover:bg-[#D6C39A] hover:text-[#080706]"
              >
                Request early access
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="zehn" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D6C39A]">
              The problem
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Governance is always behind reality.
            </h2>
          </div>

          <p className="leading-8 text-[#D8D1C3]">
            Organizations operate across thousands of documents, disconnected
            systems and constantly evolving regulations. Governance and
            compliance remain largely manual, while IT operations, tools and
            infrastructure change continuously.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-[#C89B6D]/15 bg-gradient-to-br from-white/[0.045] to-[#C89B6D]/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C89B6D]">
            The solution
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-4xl">
            ZEHN turns governance into a living intelligence layer.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#D6C39A]/10 bg-black/20 p-7"
              >
                <h3 className="text-lg font-semibold text-[#D6C39A]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#BEB6A8]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D6C39A]/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#8F8678] md:flex-row md:items-center md:justify-between">
          <p>© 2026 ZEHN. Created in collaboration with NAVACO SARL.</p>
          <p>Luxembourg · www.navaco.eu · navacolu@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}