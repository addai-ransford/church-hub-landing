import { useState } from "react";

export const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

const prices = {
  standard:
    billing === "monthly"
      ? `€${import.meta.env.VITE_STANDARD_MONTHLY}`
      : `€${import.meta.env.VITE_STANDARD_ANNUAL}`,
  enterprise: "On Request",
};


  return (
    <section
      id="pricing"
      className="relative max-w-6xl mx-auto px-6 py-24"
    >
      {/* Header */}
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

      {/* Billing Toggle */}
      <div className="mt-10 flex justify-center">
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              billing === "monthly"
                ? "bg-fuchsia-600 text-white"
                : "text-slate-400"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("annual")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              billing === "annual"
                ? "bg-fuchsia-600 text-white"
                : "text-slate-400"
            }`}
          >
            Annual (Save 2 Months)
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {/* Standard */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="text-xl font-semibold">Standard</h3>
            <p className="mt-2 text-slate-400 text-sm">
              Ideal for single churches
            </p>

            <div className="mt-6">
              <span className="text-4xl font-bold">{prices.standard}</span>
              {prices.standard !== "Custom" && (
                <span className="text-slate-400 ml-2 text-sm">
                  / {billing === "monthly" ? "month" : "year"}
                </span>
              )}
            </div>

            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              <li>✔ Member & ministry management</li>
              <li>✔ Contributions & tithe tracking</li>
              <li>✔ Reports & analytics</li>
              <li>✔ Role-based access</li>
            </ul>
          </div>

          <button className="mt-10 w-full rounded-xl bg-fuchsia-600 px-6 py-3 font-semibold text-white hover:bg-fuchsia-700 transition">
            Subscribe & Download
          </button>
        </div>

        {/* Enterprise (Most Popular) */}
        <div className="relative rounded-3xl border border-fuchsia-500 bg-gradient-to-b from-fuchsia-950 to-slate-950 p-10 flex flex-col justify-between shadow-2xl shadow-fuchsia-600/20 scale-105">
          
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fuchsia-600 text-white text-xs px-4 py-1 rounded-full">
            MOST POPULAR
          </div>

          <div>
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-2 text-slate-300 text-sm">
              For church networks & headquarters
            </p>

            <div className="mt-6">
              <span className="text-3xl font-bold">{prices.enterprise}</span>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-slate-200">
              <li>✔ Multi-tenant architecture</li>
              <li>✔ Advanced audit logs</li>
              <li>✔ Data isolation & security</li>
              <li>✔ Priority support</li>
              <li>✔ Custom reporting modules</li>
            </ul>
          </div>

          <button className="mt-10 w-full rounded-xl bg-white text-fuchsia-900 px-6 py-3 font-semibold hover:bg-slate-200 transition">
            Request Enterprise Access
          </button>
        </div>

        {/* Custom */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="text-xl font-semibold">Custom</h3>
            <p className="mt-2 text-slate-400 text-sm">
              Tailored implementation
            </p>

            <div className="mt-6">
              <span className="text-3xl font-bold">On Request</span>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              <li>✔ Custom workflows</li>
              <li>✔ On-premise deployment</li>
              <li>✔ Private cloud setup</li>
              <li>✔ Data migration assistance</li>
            </ul>
          </div>

          <button className="mt-10 w-full rounded-xl border border-fuchsia-600 text-fuchsia-400 px-6 py-3 font-semibold hover:bg-fuchsia-600 hover:text-white transition">
            Contact for Custom Plan
          </button>
        </div>
      </div>
    </section>
  );
};


