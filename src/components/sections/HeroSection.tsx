import { motion } from "framer-motion";
import { Download } from "lucide-react";

type Props = {
  os: "windows" | "mac" | "other";
};

export const HeroSection = ({ os }: Props) => {
  const scrollToPricing = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="bg-gradient-to-br from-indigo-950 via-fuchsia-900 to-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-fuchsia-400 bg-clip-text text-transparent"
        >
          Church Hub Desktop
        </motion.h1>
        <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
          A secure, multi-tenant desktop application built for churches to
          manage members, roles, ministries, groups, and financial
          contributions.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <span className="w-full text-sm text-slate-400">
            Paid software · Subscription required to download
          </span>

          {(os === "windows" || os === "other") && (
            <button
              className="inline-flex rounded-xl bg-fuchsia-600 px-6 py-3 text-white font-semibold shadow hover:bg-fuchsia-700"
              onClick={scrollToPricing}
            >
              <Download size={18} />
              Subscribe & Download for Windows
            </button>
          )}

          {(os === "mac" || os === "other") && (
            <button
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-6 py-3 font-semibold text-slate-100 shadow-sm hover:bg-slate-800 transition  hover:border-slate-400"
              onClick={scrollToPricing}
            >
              <Download size={18} />
              Subscribe & Download for macOS
            </button>
          )}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <span>🔒 Encrypted Connections</span>
          <span>✅ Official Church Registry</span>
          <span>🛡️ Secure Admin Access</span>
        </div>
      </div>
    </section>
  );
};
