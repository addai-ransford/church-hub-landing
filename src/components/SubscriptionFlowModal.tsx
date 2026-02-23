// // // import { useState } from "react";
// // // import { useStripeCheckout } from "../hooks/useStripeCheckout";
// // // import type { CheckoutRequest } from "./PricingActions";
// // // import { PortalWrapper } from "./PortalWrapper";

// // // interface Props {
// // //   isOpen: boolean;
// // //   onClose: () => void;
// // //   plan: CheckoutRequest;
// // //   billing: "monthly" | "annual";
// // // }

// // // export const SubscriptionFlowModal = ({
// // //   isOpen,
// // //   onClose,
// // //   plan,
// // //   billing,
// // // }: Props) => {
// // //   const { startCheckout, loading } = useStripeCheckout();
// // //   const [step, setStep] = useState<1 | 2>(1);

// // //   return (
// // //     <PortalWrapper isOpen={isOpen} onClose={onClose}>
// // //       <div className="bg-slate-900 w-full max-w-md rounded-2xl p-8 border border-slate-800">
// // //         <div className="flex justify-between mb-6 text-sm">
// // //           <span className={step === 1 ? "text-fuchsia-500" : "text-slate-500"}>
// // //             1. Pay
// // //           </span>
// // //           <span className={step === 2 ? "text-fuchsia-500" : "text-slate-500"}>
// // //             2. Download
// // //           </span>
// // //         </div>

// // //         {step === 1 && (
// // //           <button
// // //             disabled={loading}
// // //             onClick={async () => {
// // //               await startCheckout(plan.planKey, billing, plan.price);
// // //               setStep(2);
// // //             }}
// // //             className="w-full bg-fuchsia-600 text-white py-3 rounded-xl font-semibold"
// // //           >
// // //             Pay & Continue
// // //           </button>
// // //         )}

// // //         <button
// // //           onClick={onClose}
// // //           className="mt-4 w-full text-slate-400 text-sm"
// // //         >
// // //           Close
// // //         </button>
// // //       </div>
// // //     </PortalWrapper>
// // //   );
// // // };


// // import { useState } from "react";
// // import { useStripeCheckout } from "../hooks/useStripeCheckout";
// // import type { CheckoutRequest } from "./PricingActions";
// // import { PortalWrapper } from "./PortalWrapper";

// // interface Props {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   plan: CheckoutRequest;
// //   billing: "monthly" | "annual";
// // }

// // export const SubscriptionFlowModal = ({
// //   isOpen,
// //   onClose,
// //   plan,
// //   billing,
// // }: Props) => {
// //   // We use the startCheckout which now checks for prefetched URLs
// //   const { startCheckout, loading } = useStripeCheckout();
// //   const [step, setStep] = useState<1 | 2>(1);

// //   const handlePaymentClick = async () => {
// //     try {
// //       // On mobile, startCheckout will either use the pre-fetched URL 
// //       // or fetch it immediately if the user was too fast for the prefetch.
// //       await startCheckout(plan.planKey, billing, plan.price);
      
// //       // Note: Usually, the window.location.href redirect happens before 
// //       // setStep(2) is visible, but we keep it for UX consistency.
// //       setStep(2);
// //     } catch (error) {
// //       console.error("Payment flow failed", error);
// //     }
// //   };

// //   return (
// //     <PortalWrapper isOpen={isOpen} onClose={onClose}>
// //       <div className="bg-slate-900 w-full max-w-md rounded-2xl p-8 border border-slate-800 shadow-2xl">
// //         {/* Progress Indicator */}
// //         <div className="flex justify-between mb-8 text-xs font-bold uppercase tracking-widest">
// //           <div className="flex flex-col gap-2">
// //             <span className={step === 1 ? "text-fuchsia-500" : "text-slate-500"}>
// //               01. Payment
// //             </span>
// //             <div className={`h-1 w-20 rounded-full ${step === 1 ? "bg-fuchsia-500" : "bg-slate-800"}`} />
// //           </div>
// //           <div className="flex flex-col gap-2 items-end">
// //             <span className={step === 2 ? "text-fuchsia-500" : "text-slate-500"}>
// //               02. Download
// //             </span>
// //             <div className={`h-1 w-20 rounded-full ${step === 2 ? "bg-fuchsia-500" : "bg-slate-800"}`} />
// //           </div>
// //         </div>

// //         {/* Content Area */}
// //         <div className="space-y-6">
// //           {step === 1 ? (
// //             <>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-white mb-2">Confirm Subscription</h3>
// //                 <p className="text-slate-400 text-sm">
// //                   You are subscribing to the <span className="text-white font-medium">{plan.title}</span> plan.
// //                 </p>
// //               </div>

// //               <button
// //                 disabled={loading}
// //                 onClick={handlePaymentClick}
// //                 className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 disabled:bg-slate-800 disabled:text-slate-500 text-white py-4 rounded-xl font-bold transition-all transform active:scale-95 flex items-center justify-center gap-2"
// //               >
// //                 {loading ? (
// //                   <>
// //                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
// //                     Connecting to Stripe...
// //                   </>
// //                 ) : (
// //                   `Pay ${plan.price}`
// //                 )}
// //               </button>
// //             </>
// //           ) : (
// //             <div className="text-center py-4">
// //               <h3 className="text-xl font-bold text-white mb-2">Processing...</h3>
// //               <p className="text-slate-400 text-sm">Redirecting you to secure checkout.</p>
// //             </div>
// //           )}

// //           <button
// //             onClick={onClose}
// //             className="w-full text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors"
// //           >
// //             Cancel and go back
// //           </button>
// //         </div>
// //       </div>
// //     </PortalWrapper>
// //   );
// // };


// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { FaShieldAlt, FaRocket } from "react-icons/fa";
// import { useStripeCheckout } from "../hooks/useStripeCheckout";
// import type { CheckoutRequest } from "./PricingActions";
// import { PortalWrapper } from "./PortalWrapper";

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
//   plan: CheckoutRequest;
//   billing: "monthly" | "annual";
// }

// export const SubscriptionFlowModal = ({ isOpen, onClose, plan, billing }: Props) => {
//   const { startCheckout, loading } = useStripeCheckout();

//   return (
//     <PortalWrapper isOpen={isOpen} onClose={onClose}>
//       <div className="bg-slate-900 w-full max-w-sm rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
//         {/* Abstract Background Glow */}
//         <div className="absolute -top-24 -right-24 w-48 h-48 bg-fuchsia-600/10 blur-[80px] rounded-full pointer-events-none" />
        
//         <div className="text-center space-y-8 relative z-10">
//           {/* Hero Icon */}
//           <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-fuchsia-500/20 transform -rotate-6">
//             <FaRocket className="text-white text-3xl" />
//           </div>
          
//           <div>
//             <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
//               Upgrade to {plan.title}
//             </h2>
//             <p className="text-slate-400 text-base leading-relaxed">
//               Unlock the full potential of Church Hub and manage your community with ease.
//             </p>
//           </div>

//           {/* Pricing Summary Card */}
//           <div className="bg-slate-800/40 border border-slate-700/50 rounded-[1.5rem] p-6 space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="text-slate-400 font-medium">Subscription</span>
//               <span className="text-white font-semibold capitalize">{billing}</span>
//             </div>
//             <div className="h-px bg-slate-700/50 w-full" />
//             <div className="flex justify-between items-center">
//               <span className="text-slate-400 font-medium">Total due now</span>
//               <span className="text-2xl font-black text-fuchsia-400">{plan.price}</span>
//             </div>
//           </div>

//           {/* Action Area */}
//           <div className="space-y-4">
//             <button
//               disabled={loading}
//               onClick={() => startCheckout(plan.planKey, billing, plan.price)}
//               className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 disabled:bg-slate-800 disabled:text-slate-600 text-white py-5 rounded-2xl font-bold text-lg transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-fuchsia-600/20 group"
//             >
//               {loading ? (
//                 <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
//               ) : (
//                 <FaShieldAlt className="group-hover:scale-110 transition-transform" />
//               )}
//               {loading ? "Securing Session..." : "Secure Checkout"}
//             </button>
            
//             <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-bold">
//               Powered by Stripe Secure Payments
//             </p>
//           </div>

//           <button 
//             onClick={onClose} 
//             className="text-slate-500 hover:text-white text-sm font-medium transition-colors pt-2"
//           >
//             Cancel and return to pricing
//           </button>
//         </div>
//       </div>
//     </PortalWrapper>
//   );
// };

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaShieldAlt, FaRocket } from "react-icons/fa";
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

  return (
    <PortalWrapper isOpen={isOpen} onClose={onClose}>
      <div
        className="
          bg-slate-900
          w-full
          max-w-sm
          p-6 sm:p-8
          rounded-2xl
          border border-slate-800
          shadow-2xl
          relative
          overflow-hidden
          max-h-[90vh]
          overflow-y-auto
        "
      >
        {/* Glow */}
        <div className="absolute -top-24 -right-24 w-40 h-40 bg-fuchsia-600/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center space-y-6">
          {/* Hero */}
          <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto shadow-lg">
            <FaRocket className="text-white text-xl sm:text-2xl" />
          </div>

          {/* Title */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Upgrade to {plan.title}
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Start with a 1-month free trial. Cancel anytime.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Billing</span>
              <span className="text-white capitalize">{billing}</span>
            </div>

            <div className="h-px bg-slate-700/50" />

            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">
                Total after trial
              </span>

              <div className="text-right">
                <div className="text-xs text-green-400 font-semibold">
                  1 Month Free Trial
                </div>
                <div className="text-xl font-bold text-fuchsia-400">
                  {plan.price}
                  <span className="text-xs text-slate-400 ml-1">
                    / {billing === "monthly" ? "month" : "year"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            disabled={loading}
            onClick={() =>
              startCheckout(plan.planKey, billing, plan.price)
            }
            className="
              w-full
              bg-fuchsia-600 hover:bg-fuchsia-500
              disabled:bg-slate-800 disabled:text-slate-500
              text-white
              py-3 sm:py-4
              rounded-xl
              font-semibold
              text-sm sm:text-base
              flex items-center justify-center gap-2
              transition
              active:scale-95
            "
          >
            {loading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                Connecting to Stripe...
              </>
            ) : (
              <>
                <FaShieldAlt />
                Start Free Trial
              </>
            )}
          </button>

          {/* Cancel */}
          <button
            onClick={onClose}
            disabled={loading}
            className="w-full text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors"
          >
            Cancel and return to pricing
          </button>
        </div>
      </div>
    </PortalWrapper>
  );
};
