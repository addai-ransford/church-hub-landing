import { useState } from "react";
import { SubscriptionFlowModal } from "./SubscriptionFlowModal";
import { ContactDrawer } from "./modal/ContactDrawer";
import type { Billing } from "../types/billing";

export type CheckoutRequest = {
  title: string;
  price: string;
  planKey: string;
};

export const usePricingActions = (billing: Billing) => {
  const [flowOpen, setFlowOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [plan, setPlan] = useState<CheckoutRequest | null>(null);

  const handleAction = (p: CheckoutRequest) => {
    setPlan(p);
    if (p.price === "On Request") setContactOpen(true);
    else setFlowOpen(true);
  };

  const ui = (
    <>
      {plan && (
        <SubscriptionFlowModal
          isOpen={flowOpen}
          onClose={() => setFlowOpen(false)}
          billing={billing}
          plan={plan}
        />
      )}

      {plan && (
        <ContactDrawer
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />
      )}
    </>
  );

  return { handleAction, ui };
};
