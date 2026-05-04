export default function Home() {
  const faqs = [
    {
      q: "What companies are covered?",
      a: "We cover 50+ top tech companies including Google, Meta, Amazon, Apple, Microsoft, Stripe, Airbnb, and more — with new companies added monthly."
    },
    {
      q: "Are the questions real interview questions?",
      a: "Yes. Every question is sourced from verified candidate reports and community submissions, tagged by company, role, and difficulty level."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. Cancel your subscription at any time with no questions asked. You keep access until the end of your billing period."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Interview Prep
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Ace Your Tech Interview with{" "}
          <span className="text-[#58a6ff]">Real Questions</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Curated coding questions from Google, Meta, Amazon, and 50+ top companies — filtered by role, level, and difficulty. Every question includes a vetted solution.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-[#8b949e] mb-10">
          <span className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> 2,000+ real questions</span>
          <span className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Filter by company &amp; role</span>
          <span className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Step-by-step solutions</span>
          <span className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Difficulty ratings</span>
        </div>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Practicing — $12/mo
        </a>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Access</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Full access to 2,000+ questions",
              "Filter by company, role & level",
              "Complete solutions with explanations",
              "Difficulty ratings & time estimates",
              "New questions added weekly",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Get Full Access
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Tech Interview Question Bank. All rights reserved.
      </footer>
    </main>
  );
}
