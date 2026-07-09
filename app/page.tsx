import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Enterprise AI Governance",
    text: "ZEHN helps organizations transform governance documents, policies and controls into intelligent, searchable and actionable knowledge.",
  },
  {
    title: "Regulatory Intelligence",
    text: "Designed for regulated environments where DORA, NIS2, ISO 27001, the EU AI Act and operational resilience requirements are increasing.",
  },
  {
    title: "Trusted Decision Support",
    text: "ZEHN is built around explainability, auditability, human oversight and secure enterprise AI adoption.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    text: "Connect existing governance documents, policies, procedures, controls and operational knowledge.",
  },
  {
    number: "02",
    title: "Understand",
    text: "Build an intelligent governance knowledge layer that understands context, risks and regulatory obligations.",
  },
  {
    number: "03",
    title: "Assist",
    text: "Provide explainable AI support for governance questions, documentation gaps, audit readiness and operational decisions.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080706] text-[#F7F3EA]">
      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="/" className="text-sm font-semibold tracking-[0.3em] text-[#D6C39A]">
            NAVACO
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
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent via-[#080706]/80 to-[#080706]" />

        <div className="relative z-10 flex min-h-[95vh] items-center justify-center px-6 pt-24 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#D6C39A]">
              A new idea by NAVACO SARL
            </p>

            <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-tight text-[#F7F3EA] md:text-7xl">
              Meet <span className="text-[#D6C39A]">ZEHN</span>
            </h1>

            <p className="mt-6 text-2xl font-semibold text-[#F7F3EA] md:text-3xl">
              AI is everywhere. Trust is not.
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#D8D1C3] md:text-lg">
              ZEHN is a newborn product idea by NAVACO SARL: an Enterprise AI
              Governance platform designed to help regulated organizations turn
              static governance documentation into trusted, explainable and
              actionable intelligence.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:navacolu@gmail.com"
                className="rounded-full bg-[#D6C39A] px-7 py-3 font-semibold text-[#080706] transition hover:bg-[#E8D7B0]"
              >
                Request early access
              </a>

              <a
                href="#zehn"
                className="rounded-full border border-[#D6C39A]/30 bg-black/20 px-7 py-3 font-semibold text-[#F7F3EA] backdrop-blur-md transition hover:bg-white/5"
              >
                Discover ZEHN
              </a>

              <Link
                href="/zehn"
                className="rounded-full border border-[#D6C39A]/30 bg-black/20 px-7 py-3 font-semibold text-[#F7F3EA] backdrop-blur-md transition hover:bg-[#D6C39A] hover:text-[#080706]"
              >
                ▶ Watch Our 45s Pitch
              </Link>

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

            <h2 className="mt-4 text-3xl font-semibold text-[#F7F3EA] md:text-4xl">
              Governance is always behind reality.
            </h2>
          </div>

          <p className="leading-8 text-[#D8D1C3]">
            Organizations are surrounded by thousands of documents, disconnected
            systems and fast-changing regulations. Policies, controls and
            evidence are maintained manually, while IT operations, tools and
            infrastructure change continuously. The result is slow governance,
            high compliance effort and limited trust in AI-driven decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-[#C89B6D]/15 bg-gradient-to-br from-white/[0.045] to-[#C89B6D]/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C89B6D]">
            The solution
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-[#F7F3EA] md:text-4xl">
            ZEHN turns governance into a living intelligence layer.
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-[#D8D1C3]">
            ZEHN connects enterprise knowledge, governance documentation and
            regulatory requirements to support trusted AI-powered assistance for
            governance, compliance, operational resilience and decision-making.
          </p>

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

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D6C39A]">
          How ZEHN will work
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="text-3xl font-semibold text-[#F7F3EA]">
                {step.number}
              </p>
              <h3 className="mt-3 font-semibold text-[#D6C39A]">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-[#BEB6A8]">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D6C39A]">
              Current stage
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#F7F3EA]">
              A newborn idea moving toward prototype validation.
            </h2>
          </div>

          <p className="leading-8 text-[#D8D1C3]">
            ZEHN is currently in its early innovation phase. NAVACO is validating
            the concept with experts, partners and potential early adopters in
            regulated sectors. The goal is to build a secure, explainable and
            enterprise-ready AI governance assistant for mission-critical
            environments.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-[#D6C39A]/20 bg-[#D6C39A] p-8 text-center text-[#080706] md:p-12">
          <h2 className="text-3xl font-semibold">
            We are building the future of trusted enterprise AI.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#302A20]">
            NAVACO is looking for innovation partners, early adopters and
            ecosystem supporters to help shape ZEHN from idea to impact.
          </p>

          <a
            href="mailto:navacolu@gmail.com"
            className="mt-8 inline-block rounded-full bg-[#080706] px-8 py-3 font-semibold text-[#F7F3EA] transition hover:bg-[#17130F]"
          >
            Contact NAVACO
          </a>
        </div>
      </section>

      <footer className="border-t border-[#D6C39A]/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#8F8678] md:flex-row md:items-center md:justify-between">
          <p>© 2026 NAVACO SARL. All rights reserved.</p>
          <p>Luxembourg · www.navaco.eu · navacolu@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}