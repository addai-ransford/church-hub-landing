import { useState } from "react";

const faqs = [
  {
    q: "Is Church Hub Desktop secure?",
    a: "Yes. All communication is encrypted using HTTPS/TLS. Access is role-based, and administrative actions are logged for accountability. Multi-tenant separation ensures churches cannot access each other's data.",
  },
  {
    q: "Why does my computer show a security warning when installing?",
    a: "Operating systems like Windows (SmartScreen) and macOS (Gatekeeper) may show warnings for newly distributed applications. This happens before full code-signing reputation is established. The app is safe, and installation instructions are provided step-by-step.",
  },
  {
    q: "Do you support enterprise or multi-branch deployments?",
    a: "Yes. Church Hub Desktop supports centralized administration, branch separation, advanced roles, and enterprise rollout strategies including private cloud and on-premise options.",
  },
  {
    q: "Is Church Hub Desktop subscription-only?",
    a: "Church Hub Desktop offers flexible licensing. Churches can choose between a one-time lifetime license (with limited updates) or an active subscription plan that includes continuous updates, priority support, and new feature releases.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-400">
            Transparency, security, and clarity — everything you need to know.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold text-white">{item.q}</span>
                <span className="text-fuchsia-500 text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Still have questions? Contact our team for clarification on
            enterprise, security, or deployment requirements.
          </p>
        </div>
      </div>
    </section>
  );
};
