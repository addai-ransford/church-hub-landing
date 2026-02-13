import { AnimatedSection } from "../AnimatedSection";

const clients = [
  { name: "Faith Network", symbol: "⛪" },
  { name: "Global Church Alliance", symbol: "🌐" },
  { name: "Community Ministries", symbol: "🤝" },
  { name: "Church Tech Partners", symbol: "💻" },
  { name: "Youth Outreach", symbol: "🕊️" },
];

export const ClientsSection = () => {
  return (
    <section id="clients" className="bg-slate-900 border-b py-10">
      <div className="max-w-6xl mx-auto px-10 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          Trusted by churches and faith-based organisations
        </h2>
        <p className="text-sm text-slate-400 mb-12">
          Enterprise-grade desktop management software used by churches and
          faith-based organizations worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, i) => (
            <AnimatedSection
              key={client.name}
              delay={i * 0.1}
              direction="up"
            >
              <div className="flex flex-col items-center justify-center bg-slate-800 rounded-2xl p-6 shadow hover:shadow-fuchsia-500/20 transition min-h-[160px]">
                <div className="text-4xl">{client.symbol}</div>
                <p className="mt-4 text-sm text-slate-200 font-semibold">
                  {client.name}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
