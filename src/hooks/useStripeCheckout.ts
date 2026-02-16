import { useState, useCallback } from "react";
import type { Billing } from "../types/billing";

interface VerifyResponse {
  verified: boolean;
  downloadUrl: string;
}

export const useStripeCheckout = () => {
  const [loading, setLoading] = useState(false);

  const startCheckout = useCallback(async (
    planKey: string,
    billing: Billing,
    price: string
  ) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/stripe/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ planKey, billing, price }),
        }
      );

      if (!res.ok) throw new Error(await res.text());

      const data: { url: string } = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const verifySession = useCallback(async (sessionId: string): Promise<VerifyResponse> => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/stripe/verify-session/${sessionId}`
      );

      if (!res.ok) throw new Error("Verification request failed");

      return await res.json();
    } catch (err) {
      console.error("Verification error:", err);
      return { verified: false, downloadUrl: "" };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    startCheckout,
    verifySession,
    loading,
  };
};
