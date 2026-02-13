import {
  Users,
  Shield,
  Layers,
  Building2,
  FileCheck,
  Lock,
} from "lucide-react";

const features = [
  {
    title: "Member & Role Management",
    desc: "Manage members, leadership roles, ministries, and groups with access control.",
    icon: Users,
  },
  {
    title: "Contributions & Tithes",
    desc: "Track offerings, tithes, dues, and income securely.",
    icon: FileCheck,
  },
  {
    title: "Multi-Tenant Architecture",
    desc: "Each church is fully isolated with its own data.",
    icon: Layers,
  },
  {
    title: "Ministries & Groups",
    desc: "Organize departments and fellowships.",
    icon: Building2,
  },
  {
    title: "Audit & Accountability",
    desc: "Transparent records for governance.",
    icon: Shield,
  },
  {
    title: "Desktop-First Security",
    desc: "Encrypted local and cloud access.",
    icon: Lock,
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="mx-auto bg-slate-900/50">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Everything Your Church Needs
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 group-hover:border-slate-500 transition">
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold text-lg">{item.title}</h3>

                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

