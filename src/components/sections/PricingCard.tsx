import type { Billing } from "../../types/billing";

type Plan = {
  title: string;
  description: string;
  price: string;
  features: string[];
  button: string;
  style: string;
  planKey: string;
  badge?: string;
  badgeStyle?: string;
  buttonStyle?: string;
};

interface Props {
  plan: Plan;
  billing: Billing;
  onAction: (plan: Plan) => void;
}

export const PricingCard = ({ plan, billing, onAction }: Props) => (
  <div
    className={`rounded-3xl p-10 flex flex-col justify-between ${plan.style} min-h-[480px]`}
  >
    {plan.badge && <div className={plan.badgeStyle}>{plan.badge}</div>}

    <div>
      <h3 className="text-xl font-semibold">{plan.title}</h3>
      <p className="mt-2 text-slate-400 text-sm">{plan.description}</p>

      <div className="mt-6">
        <span className="text-4xl font-bold">{plan.price}</span>
        {plan.price !== "On Request" && (
          <span className="text-slate-400 ml-2 text-sm">
            / {billing === "monthly" ? "month" : "year"}
          </span>
        )}
      </div>

      <ul className="mt-8 space-y-3 text-sm text-slate-300">
        {plan.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>
    </div>

    <button
      onClick={() => onAction(plan)}
      className={`mt-10 w-full rounded-xl px-6 py-3 font-semibold transition ${
        plan.buttonStyle || "bg-fuchsia-600 text-white hover:bg-fuchsia-700"
      }`}
    >
      {plan.button}
    </button>
  </div>
);
