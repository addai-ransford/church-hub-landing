import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortalWrapper } from "../PortalWrapper";

type ContactDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ContactDrawer = ({ isOpen, onClose }: ContactDrawerProps) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.removeProperty("overflow");
    };
  }, [isOpen, onClose]);

  return (
    <PortalWrapper isOpen={isOpen} onClose={onClose}>
      <AnimatePresence>
        <motion.div
          className="fixed top-0 right-0 h-full w-full sm:w-[500px]
          bg-gradient-to-b from-slate-950 to-slate-900
          border-l border-fuchsia-500/30
          flex flex-col
          shadow-[0_0_80px_rgba(217,70,239,0.15)]"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 border-b border-slate-800/60 relative space-y-3">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition"
            >
              ✕
            </button>

            <h3 className="text-2xl  text-slate-400 font-bold">Talk to Our Enterprise Team</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tell us about your church structure, deployment needs, and integration requirements. Our team will reach out within 24 hours.
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-8">
            {submitted ? (
              <div className="text-center space-y-6 mt-10">
                <div className="text-5xl">✅</div>
                <h4 className="text-xl font-semibold text-fuchsia-400">
                  Request Sent Successfully
                </h4>
                <p className="text-slate-400 text-sm">
                  Our team will contact you shortly.
                </p>

                <button
                  onClick={onClose}
                  className="mt-6 bg-fuchsia-600 hover:bg-fuchsia-700
                  transition-all duration-300
                  rounded-lg py-3 px-6 font-semibold
                  shadow-lg shadow-fuchsia-600/20
                  hover:shadow-fuchsia-600/40"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input
                  type="text"
                  required
                  placeholder="Church / Organization Name"
                  className="w-full bg-slate-900 border border-slate-800
                  rounded-lg px-4 py-3 text-sm
                  focus:outline-none focus:ring-2 focus:ring-fuchsia-600
                  focus:border-fuchsia-600 transition"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-slate-900 border border-slate-800
                  rounded-lg px-4 py-3 text-sm
                  focus:outline-none focus:ring-2 focus:ring-fuchsia-600
                  focus:border-fuchsia-600 transition"
                />

                <textarea
                  rows={6}
                  required
                  placeholder="Tell us about your needs..."
                  className="w-full resize-y bg-slate-900 border border-slate-800
                  rounded-lg px-4 py-3 text-sm
                  focus:outline-none focus:ring-2 focus:ring-fuchsia-600
                  focus:border-fuchsia-600 transition"
                />

                <button
                  type="submit"
                  className="w-full bg-fuchsia-600 hover:bg-fuchsia-700
                  transition-all duration-300
                  rounded-lg py-3 font-semibold
                  shadow-lg shadow-fuchsia-600/20
                  hover:shadow-fuchsia-600/40"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </PortalWrapper>
  );
};
