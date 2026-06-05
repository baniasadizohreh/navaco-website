import Image from "next/image";

const services = [
  {
    title: "Governance & Operational Resilience",
    text: "Governance frameworks, KPI definition, risk management, control monitoring and operational resilience improvement initiatives.",
  },
  {
    title: "Regulatory Readiness",
    text: "Support for DORA and NIS2 readiness programs, including ICT risk identification, control assessment and remediation planning.",
  },
  {
    title: "AI & Digital Transformation",
    text: "AI adoption strategies, automation opportunities, process optimisation and digital transformation initiatives that improve efficiency and decision-making.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <header className="border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Image
            src="/navaco-logo.svg"
            alt="NAVACO SARL"
            width={260}
            height={82}
            priority
          />

          <a
            href="mailto:navacolu@gmail.com"
            className="rounded-full border border-amber-200/30 px-5 py-2 text-sm text-amber-200 transition hover:bg-amber-200 hover:text-stone-950"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
          Governance • Operational Resilience • AI
        </p>

        <h1 className="mx-auto max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
          Helping organisations navigate
          <span className="text-amber-200"> technology, governance </span>
          and
          <span className="text-orange-300"> AI transformation.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-stone-300 md:text-lg">
          NAVACO SARL supports financial institutions and regulated
          organisations in strengthening governance, operational resilience,
          cybersecurity, regulatory readiness and responsible AI adoption.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:navacolu@gmail.com"
            className="rounded-full bg-amber-200 px-7 py-3 font-semibold text-stone-950 transition hover:bg-amber-100"
          >
            Start a conversation
          </a>

          <a
            href="#services"
            className="rounded-full border border-white/10 px-7 py-3 font-semibold text-stone-100 transition hover:bg-white/5"
          >
            View services
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-8"
            >
              <h2 className="text-xl font-semibold text-amber-200">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-stone-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-orange-300/10 bg-gradient-to-br from-white/[0.04] to-orange-300/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
            How Navaco helps
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-stone-100">01</p>
              <h3 className="mt-3 font-semibold text-amber-200">
                Assess
              </h3>
              <p className="mt-3 text-stone-400">
                Understand current governance structures, technology landscape,
                risks and business objectives.
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-stone-100">02</p>
              <h3 className="mt-3 font-semibold text-amber-200">
                Design
              </h3>
              <p className="mt-3 text-stone-400">
                Define practical governance models, transformation roadmaps,
                resilience improvements and AI opportunities.
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-stone-100">03</p>
              <h3 className="mt-3 font-semibold text-amber-200">
                Deliver
              </h3>
              <p className="mt-3 text-stone-400">
                Support implementation, stakeholder alignment, reporting and
                sustainable adoption across the organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Independent consulting focused on practical outcomes.
            </h2>
          </div>

          <p className="leading-8 text-stone-300">
            NAVACO SARL provides advisory and consulting services in digital
            transformation, governance, cybersecurity, operational resilience
            and artificial intelligence. We help organisations translate
            regulatory, business and technology requirements into practical and
            measurable improvements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-amber-200 p-8 text-center text-stone-950 md:p-12">
          <h2 className="text-3xl font-semibold">
            Let's discuss your transformation challenges.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-stone-800">
            Whether you are preparing for DORA, improving governance, exploring
            AI opportunities or driving a transformation initiative, NAVACO can
            help you move from strategy to execution.
          </p>

          <a
            href="mailto:navacolu@gmail.com"
            className="mt-8 inline-block rounded-full bg-stone-950 px-8 py-3 font-semibold text-white transition hover:bg-stone-800"
          >
            Contact NAVACO
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 NAVACO SARL. All rights reserved.</p>
          <p>Luxembourg · www.navaco.lu · navacolu@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}