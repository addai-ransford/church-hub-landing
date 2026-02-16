import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useStripeCheckout } from "../hooks/useStripeCheckout";

export const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = params.get("session_id");

  const { verifySession, loading } = useStripeCheckout();

  const [verified, setVerified] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      navigate("/", { replace: true });
      return;
    }

    (async () => {
      const result = await verifySession(sessionId);

      if (result.verified) {
        setVerified(true);
        setDownloadUrl(result.downloadUrl);
      }
    })();
  }, [sessionId, navigate, verifySession]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/60 via-purple-900/50 to-indigo-900/60 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 w-full max-w-sm shadow-2xl text-center relative">

        {loading && (
          <div className="flex flex-col items-center gap-4">
            <AiOutlineLoading3Quarters className="animate-spin text-4xl text-fuchsia-500" />
            <p className="text-slate-400">Verifying payment...</p>
          </div>
        )}

        {!loading && verified && downloadUrl && (
          <>
            <FaCheckCircle className="mx-auto text-fuchsia-500 text-5xl mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Payment Verified!
            </h2>
            <p className="text-slate-400 mb-6">
              Your license has been activated. Secure download is ready.
            </p>

            <a
              href={downloadUrl}
              className="inline-block w-full bg-fuchsia-600 hover:bg-fuchsia-700 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
            >
              Download Church Hub Desktop
            </a>
          </>
        )}

        {!loading && !verified && (
          <>
            <FaTimesCircle className="mx-auto text-red-500 text-5xl mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Payment Failed
            </h2>
            <p className="text-red-400 mb-6">
              ❌ Payment verification failed.
            </p>
          </>
        )}

        <button
          onClick={() => {
            setOpen(false);
            navigate("/", { replace: true });
          }}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition text-sm"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
