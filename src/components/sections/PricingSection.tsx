import { useState } from "react";
import { AnimatedSection } from "../AnimatedSection";
import { PricingCard } from "./PricingCard";
import { usePricingActions } from "../PricingActions";
import type { Billing } from "../../types/billing";

const PRICING_ENV = {
  standard: {
    monthly: import.meta.env.VITE_STANDARD_MONTHLY,
    annual: import.meta.env.VITE_STANDARD_ANNUAL,
  },
  enterprise: {
    monthly: import.meta.env.VITE_ENTERPRISE_MONTHLY || "On Request",
    annual: import.meta.env.VITE_ENTERPRISE_ANNUAL || "On Request",
  },
  custom: {
    monthly: import.meta.env.VITE_CUSTOM_MONTHLY || "On Request",
    annual: import.meta.env.VITE_CUSTOM_ANNUAL || "On Request",
  },
};

export const PricingSection = () => {
  const [billing, setBilling] = useState<Billing>("monthly");
  const { handleAction, ui: modals } = usePricingActions(billing);

  const plans = [
    {
      title: "Standard",
      description: "Ideal for single churches",
      price: `€${PRICING_ENV.standard[billing]}`,
      features: [
        "Member & ministry management",
        "Contributions & tithe tracking",
        "Reports & analytics",
        "Role-based access",
      ],
      button: "Subscribe & Download",
      style: "bg-slate-900 border-slate-800 shadow-xl",
      planKey: "standard",
    },
    {
      title: "Enterprise",
      description: "For church networks & headquarters",
      price: PRICING_ENV.enterprise[billing],
      features: [
        "Multi-tenant architecture",
        "Advanced audit logs",
        "Data isolation & security",
        "Priority support",
        "Custom reporting modules",
      ],
      button: "Request Enterprise Access",
      style:
        "relative rounded-3xl border border-fuchsia-500 bg-gradient-to-b from-fuchsia-950 to-slate-950 p-10 flex flex-col justify-between scale-105 shadow-[0_20px_60px_-10px_rgba(240,0,240,0.4)]",
      badge: "MOST POPULAR",
      badgeStyle:
        "absolute -top-4 left-1/2 -translate-x-1/2 bg-fuchsia-600 text-white text-xs px-4 py-1 rounded-full",
      buttonStyle: "bg-white text-fuchsia-900 hover:bg-slate-200",
      planKey: "enterprise",
    },
    {
      title: "Custom",
      description: "Tailored implementation",
      price: PRICING_ENV.custom[billing],
      features: [
        "Custom workflows",
        "On-premise deployment",
        "Private cloud setup",
        "Data migration assistance",
      ],
      button: "Contact for Custom Plan",
      style: "bg-slate-900 border-slate-800 shadow-xl",
      buttonStyle:
        "border border-fuchsia-600 text-fuchsia-400 hover:bg-fuchsia-600 hover:text-white",
      planKey: "custom",
    },
  ];

  return (
    <section id="pricing" className="relative max-w-6xl mx-auto px-6 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          Pricing & Subscription
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Church Hub Desktop is a secure, enterprise-grade church management
          system. Subscription is required to download and activate the
          software.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full p-1">
          {(["monthly", "annual"] as Billing[]).map((type) => (
            <button
              key={type}
              onClick={() => setBilling(type)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                billing === type
                  ? "bg-fuchsia-600 text-white"
                  : "text-slate-400"
              }`}
            >
              {type === "monthly" ? "Monthly" : "Annual (Save 2 Months)"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <AnimatedSection key={plan.title} delay={i * 0.1} direction="left">
            <PricingCard
              plan={plan}
              billing={billing}
              onAction={handleAction}
            />
          </AnimatedSection>
        ))}
      </div>

      {modals}
    </section>
  );
};
