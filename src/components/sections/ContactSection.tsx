import { useState } from "react";
import { ContactDrawer } from "../modal/ContactDrawer";

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
          Need Something Custom?
        </h2>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We partner with churches that require custom workflows, integrations,
          private cloud deployments, on-premise hosting, or data migration from
          legacy systems.
        </p>

        <div className="mt-10">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center
            rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600
            px-8 py-4 font-semibold text-white
            shadow-lg shadow-fuchsia-600/20
            hover:shadow-fuchsia-600/40
            transition-all duration-300"
          >
            Contact Us
          </button>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Enterprise and custom deployments are handled directly by our
          development team.
        </p>
      </section>

      <ContactDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
