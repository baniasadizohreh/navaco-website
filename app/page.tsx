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
    <main className="min-h-screen bg-[#080706] text-[#F7F3EA]">
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-8">
          <a
            href="mailto:navacolu@gmail.com"
            className="rounded-full border border-[#D6C39A]/40 px-6 py-2 text-sm text-[#D6C39A] transition hover:bg-[#D6C39A] hover:text-[#080706]"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 text-center">
        <Image
          src="/navaco-banner.png"
          alt="NAVACO governance, resilience and AI background"
          fill
          priority
          className="object-cover object-center opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#080706]/65 via-[#080706]/72 to-[#080706]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/85 via-[#080706]/25 to-[#080706]/75" />

        <div className="relative z-10 mx-auto max-w-5xl pt-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#D6C39A]">
            Governance • Operational Resilience • AI
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Turning complexity into
            <span className="text-[#D6C39A]"> confident decisions.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#D8D1C3] md:text-lg">
            NAVACO SARL supports financial institutions and regulated
            organisations in strengthening governance, operational resilience,
            cybersecurity, regulatory readiness and responsible AI adoption.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:navacolu@gmail.com"
              className="rounded-full bg-[#D6C39A] px-7 py-3 font-semibold text-[#080706] transition hover:bg-[#E8D7B0]"
            >
              Start a conversation
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#D6C39A]/30 px-7 py-3 font-semibold text-[#F7F3EA] transition hover:bg-white/5"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-[#D6C39A]/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/20"
            >
              <h2 className="text-xl font-semibold text-[#D6C39A]">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-[#BEB6A8]">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-[#C89B6D]/15 bg-gradient-to-br from-white/[0.045] to-[#C89B6D]/5 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C89B6D]">
            How Navaco helps
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-[#F7F3EA]">01</p>
              <h3 className="mt-3 font-semibold text-[#D6C39A]">
                Assess
              </h3>
              <p className="mt-3 text-[#BEB6A8]">
                Understand current governance structures, technology landscape,
                risks and business objectives.
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#F7F3EA]">02</p>
              <h3 className="mt-3 font-semibold text-[#D6C39A]">
                Design
              </h3>
              <p className="mt-3 text-[#BEB6A8]">
                Define practical governance models, transformation roadmaps,
                resilience improvements and AI opportunities.
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#F7F3EA]">03</p>
              <h3 className="mt-3 font-semibold text-[#D6C39A]">
                Deliver
              </h3>
              <p className="mt-3 text-[#BEB6A8]">
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
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D6C39A]">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#F7F3EA]">
              Independent consulting focused on practical outcomes.
            </h2>
          </div>

          <p className="leading-8 text-[#D8D1C3]">
            NAVACO SARL provides advisory and consulting services in digital
            transformation, governance, cybersecurity, operational resilience
            and artificial intelligence. We help organisations translate
            regulatory, business and technology requirements into practical and
            measurable improvements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-[#D6C39A]/20 bg-[#D6C39A] p-8 text-center text-[#080706] md:p-12">
          <h2 className="text-3xl font-semibold">
            Let's discuss your transformation challenges.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#302A20]">
            Whether you are preparing for DORA, improving governance, exploring
            AI opportunities or driving a transformation initiative, NAVACO can
            help you move from strategy to execution.
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
          <p>Luxembourg · www.navaco.lu · navacolu@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}