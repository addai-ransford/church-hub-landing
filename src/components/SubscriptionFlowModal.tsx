import { useState } from "react";
import { useStripeCheckout } from "../hooks/useStripeCheckout";
import type { CheckoutRequest } from "./PricingActions";
import { PortalWrapper } from "./PortalWrapper";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  plan: CheckoutRequest;
  billing: "monthly" | "annual";
}

export const SubscriptionFlowModal = ({
  isOpen,
  onClose,
  plan,
  billing,
}: Props) => {
  const { startCheckout, loading } = useStripeCheckout();
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <PortalWrapper isOpen={isOpen} onClose={onClose}>
      <div className="bg-slate-900 w-full max-w-md rounded-2xl p-8 border border-slate-800">
        <div className="flex justify-between mb-6 text-sm">
          <span className={step === 1 ? "text-fuchsia-500" : "text-slate-500"}>
            1. Pay
          </span>
          <span className={step === 2 ? "text-fuchsia-500" : "text-slate-500"}>
            2. Download
          </span>
        </div>

        {step === 1 && (
          <button
            disabled={loading}
            onClick={async () => {
              await startCheckout(plan.planKey, billing, plan.price);
              setStep(2);
            }}
            className="w-full bg-fuchsia-600 text-white py-3 rounded-xl font-semibold"
          >
            Pay & Continue
          </button>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full text-slate-400 text-sm"
        >
          Close
        </button>
      </div>
    </PortalWrapper>
  );
};
