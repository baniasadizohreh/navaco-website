import Link from "next/link";

export default function ZehnPage() {
  return (
    <main className="min-h-screen bg-[#080706] px-6 py-12 text-[#F7F3EA]">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-[#D6C39A] hover:underline">
          ← Back to NAVACO
        </Link>

        <section className="py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D6C39A]">
            NAVACO SARL presents
          </p>

          <h1 className="mt-6 text-5xl font-semibold md:text-7xl">
            ZEHN
          </h1>

          <p className="mt-6 text-2xl md:text-3xl">
            AI is everywhere. Trust is not.
          </p>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-[#D6C39A]/20 bg-black shadow-2xl">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/zehn.png"
              className="w-full"
            >
              <source src="/ZEHN-Fit4Start-Pitch.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="mx-auto mt-8 max-w-3xl leading-8 text-[#D8D1C3]">
            ZEHN is a newborn company in collaboration with NAVACO SARL: an Enterprise AI
            Governance platform designed to transform static governance
            documentation into trusted, explainable and actionable intelligence.
          </p>
        </section>
      </div>
    </main>
  );
}