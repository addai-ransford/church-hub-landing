// import { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { useStripeCheckout } from "../hooks/useStripeCheckout";

// export const PaymentSuccess = () => {
//   const [params] = useSearchParams();
//   const navigate = useNavigate();
//   const sessionId = params.get("session_id");

//   const { verifySession, loading: stripeLoading } = useStripeCheckout();

//   const [loading, setLoading] = useState(true);
//   const [verified, setVerified] = useState(false);
//   const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     if (!sessionId) {
//       navigate("/", { replace: true });
//       return;
//     }

//     const verifyPayment = async () => {
//       try {
//         const result = await verifySession(sessionId);

//         if (result?.verified && result.downloadUrl) {
//           let url = result.downloadUrl;

//           setDownloadUrl(url);
//           setVerified(true);
//         } else {
//           setError(true);
//         }
//       } catch (err) {
//         console.error("Verification failed", err);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     verifyPayment();
//   }, [sessionId, navigate, verifySession]);

//   if (!sessionId) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-indigo-950 p-4 backdrop-blur-sm">
//       <div className="bg-slate-900 border border-slate-800 rounded-3xl sm:rounded-3xl p-6 sm:p-10 w-full max-w-md shadow-2xl text-center relative overflow-hidden">

//         <div className="absolute -top-24 -right-24 w-48 h-48 bg-fuchsia-600/10 blur-[90px] rounded-full pointer-events-none" />

//         {(loading || stripeLoading) && (
//           <div className="flex flex-col items-center gap-5 py-10">
//             <AiOutlineLoading3Quarters className="animate-spin text-4xl text-fuchsia-500" />
//             <p className="text-slate-400 text-sm">Verifying your subscription securely...</p>
//           </div>
//         )}

//         {!loading && verified && downloadUrl && (
//           <div className="relative z-10 space-y-6">
//             <FaCheckCircle className="mx-auto text-fuchsia-500 text-5xl sm:text-6xl" />

//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold text-white">
//                 Welcome to Church Hub 🚀
//               </h2>
//               <p className="text-slate-400 text-sm mt-2">
//                 Your subscription is now active.{" "}
//                 <span className="text-green-400 font-medium">Your 1-month free trial has started.</span>
//               </p>
//             </div>

//             <a
//               href={downloadUrl}
//               className="inline-block w-full bg-fuchsia-600 hover:bg-fuchsia-500 transition px-6 py-3 sm:py-4 rounded-xl text-white font-semibold shadow-lg"
//             >
//               Download Church Hub Desktop
//             </a>

//             <button
//               onClick={() => navigate("/", { replace: true })}
//               className="w-full text-slate-500 hover:text-slate-300 text-sm transition"
//             >
//               Go to Dashboard
//             </button>
//           </div>
//         )}

//         {!loading && error && (
//           <div className="relative z-10 space-y-6">
//             <FaTimesCircle className="mx-auto text-red-500 text-5xl sm:text-6xl" />

//             <div>
//               <h2 className="text-2xl font-bold text-white">Payment Verification Failed</h2>
//               <p className="text-red-400 text-sm mt-2">
//                 Something went wrong while verifying your payment. Please contact support if you were charged.
//               </p>
//             </div>

//             <button
//               onClick={() => navigate("/", { replace: true })}
//               className="w-full bg-slate-800 hover:bg-slate-700 transition px-6 py-3 rounded-xl text-white font-medium"
//             >
//               Return to Home
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// import { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { useStripeCheckout } from "../hooks/useStripeCheckout";

// export const PaymentSuccess = () => {
//   const [params] = useSearchParams();
//   const navigate = useNavigate();
//   const sessionId = params.get("session_id");

//   const { verifySession, loading: stripeLoading } = useStripeCheckout();

//   const [loading, setLoading] = useState(true);
//   const [verified, setVerified] = useState(false);
//   const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
//   const [fileName, setFileName] = useState<string>("");
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     if (!sessionId) {
//       navigate("/", { replace: true });
//       return;
//     }

//     const verifyPayment = async () => {
//       try {
//         const result = await verifySession(sessionId);

//         if (result?.verified && result.downloadUrl) {
//           setDownloadUrl(result.downloadUrl);
//           setFileName(result.fileName || "ChurchHub-Installer");
//           setVerified(true);
//         } else {
//           setError(true);
//         }
//       } catch (err) {
//         console.error("Verification failed", err);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     verifyPayment();
//   }, [sessionId, navigate, verifySession]);

//   if (!sessionId) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-indigo-950 p-4 backdrop-blur-sm">
//       <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 w-full max-w-md shadow-2xl text-center relative overflow-hidden">
        
//         <div className="absolute -top-24 -right-24 w-48 h-48 bg-fuchsia-600/10 blur-[90px] rounded-full pointer-events-none" />

//         {(loading || stripeLoading) && (
//           <div className="flex flex-col items-center gap-5 py-10">
//             <AiOutlineLoading3Quarters className="animate-spin text-4xl text-fuchsia-500" />
//             <p className="text-slate-400 text-sm">Verifying your subscription securely...</p>
//           </div>
//         )}

//         {!loading && verified && downloadUrl && (
//           <div className="relative z-10 space-y-6">
//             <FaCheckCircle className="mx-auto text-fuchsia-500 text-5xl sm:text-6xl" />

//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold text-white">
//                 Welcome to Church Hub 🚀
//               </h2>
//               <p className="text-slate-400 text-sm mt-2">
//                 Your subscription is now active.{" "}
//                 <span className="text-green-400 font-medium">Your 1-month free trial has started.</span>
//               </p>
//             </div>

//             {/* ✅ DOWNLOAD BUTTON 
//                 No target="_blank" needed because the server forces an 'attachment' download.
//                 The browser stays on this page and just starts the download.
//             */}
//             <a
//               href={downloadUrl}
//               download={fileName}
//               className="inline-block w-full bg-fuchsia-600 hover:bg-fuchsia-500 transition px-6 py-3 sm:py-4 rounded-xl text-white font-semibold shadow-lg text-center"
//             >
//               Download Church Hub Desktop
//             </a>

//             <button
//               onClick={() => navigate("/", { replace: true })}
//               className="w-full text-slate-500 hover:text-slate-300 text-sm transition"
//             >
//               Go to Dashboard
//             </button>
//           </div>
//         )}

//         {!loading && error && (
//           <div className="relative z-10 space-y-6">
//             <FaTimesCircle className="mx-auto text-red-500 text-5xl sm:text-6xl" />
//             <div>
//               <h2 className="text-2xl font-bold text-white">Verification Failed</h2>
//               <p className="text-red-400 text-sm mt-2">Could not verify payment status.</p>
//             </div>
//             <button
//               onClick={() => navigate("/", { replace: true })}
//               className="w-full bg-slate-800 hover:bg-slate-700 transition px-6 py-3 rounded-xl text-white font-medium"
//             >
//               Return to Home
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useStripeCheckout } from "../hooks/useStripeCheckout";

export const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = params.get("session_id");

  const { verifySession, loading: stripeLoading } = useStripeCheckout();

  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      navigate("/", { replace: true });
      return;
    }

    const verifyPayment = async () => {
      try {
        const result = await verifySession(sessionId);

        if (result?.verified && result.downloadUrl) {
          setDownloadUrl(result.downloadUrl);
          setFileName(result.fileName || "ChurchHub-Installer");
          setVerified(true);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Verification failed", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId, navigate, verifySession]);

  // ✅ HANDLER: Downloads file without changing the page
  const handleDownload = () => {
    if (!downloadUrl) return;

    // Create a hidden anchor element
    const link = document.createElement("a");
    link.href = downloadUrl;
    
    // Setting 'download' attribute helps hint to the browser
    link.setAttribute("download", fileName);
    
    // Append to body, click it, and remove it immediately
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!sessionId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-indigo-950 p-4 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 w-full max-w-md shadow-2xl text-center relative overflow-hidden">
        
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-fuchsia-600/10 blur-[90px] rounded-full pointer-events-none" />

        {(loading || stripeLoading) && (
          <div className="flex flex-col items-center gap-5 py-10">
            <AiOutlineLoading3Quarters className="animate-spin text-4xl text-fuchsia-500" />
            <p className="text-slate-400 text-sm">Verifying your subscription securely...</p>
          </div>
        )}

        {!loading && verified && downloadUrl && (
          <div className="relative z-10 space-y-6">
            <FaCheckCircle className="mx-auto text-fuchsia-500 text-5xl sm:text-6xl" />

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Welcome to Church Hub 🚀
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Your subscription is now active.{" "}
                <span className="text-green-400 font-medium">Your 1-month free trial has started.</span>
              </p>
            </div>

            {/* ✅ UPDATED BUTTON
                Using a button with handleDownload prevents the page-wide redirect
            */}
            <button
              onClick={handleDownload}
              className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 transition px-6 py-3 sm:py-4 rounded-xl text-white font-semibold shadow-lg text-center cursor-pointer"
            >
              Download Church Hub Desktop
            </button>

            <button
              onClick={() => navigate("/", { replace: true })}
              className="w-full text-slate-500 hover:text-slate-300 text-sm transition"
            >
              Go to Dashboard
            </button>
          </div>
        )}

        {!loading && error && (
          <div className="relative z-10 space-y-6">
            <FaTimesCircle className="mx-auto text-red-500 text-5xl sm:text-6xl" />
            <div>
              <h2 className="text-2xl font-bold text-white">Verification Failed</h2>
              <p className="text-red-400 text-sm mt-2">Could not verify payment status.</p>
            </div>
            <button
              onClick={() => navigate("/", { replace: true })}
              className="w-full bg-slate-800 hover:bg-slate-700 transition px-6 py-3 rounded-xl text-white font-medium"
            >
              Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};