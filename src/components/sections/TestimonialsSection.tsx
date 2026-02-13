export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Senior Administrator",
      role: "Operations Lead",
      location: "Belgium",
      quote:
        "Church Hub Desktop transformed how we manage members and contributions. Everything is structured, secure, and easy to audit.",
    },
    {
      name: "Finance Leader",
      role: "Church Network HQ",
      location: "Belgium",
      quote:
        "The multi-tenant architecture gives us complete separation between branches while maintaining centralized oversight.",
    },
    {
      name: "Executive Pastor",
      role: "Church Leadership",
      location: "Netherlands",
      quote:
        "Enterprise-level quality with the simplicity our administrative team needed. Reliable and secure.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
          Trusted by Church Administrators
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Built for accountability. Designed for structure. Trusted by church
          leadership teams across Europe.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-lg hover:shadow-fuchsia-500/10 transition"
          >
            <div className="absolute -top-4 left-6 text-fuchsia-500 text-5xl opacity-20">
              “
            </div>

            <p className="text-slate-300 leading-relaxed relative z-10">
              {t.quote}
            </p>

            <div className="mt-8 border-t border-slate-800 pt-6">
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-sm text-slate-400">{t.role}</p>
              <p className="text-xs text-slate-500">{t.location}</p>

              <div className="mt-3 flex gap-1 text-fuchsia-500 text-sm">
                ★★★★★
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-slate-500">
          *Testimonials reflect feedback from early administrative users during
          pilot deployments.
        </p>
      </div>
    </section>
  );
};
