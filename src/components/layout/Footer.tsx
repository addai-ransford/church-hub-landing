export const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 text-sm">
        <div>
          <h3 className="text-lg font-semibold text-white">Church Hub</h3>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Enterprise desktop management software for churches and faith-based
            organizations.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Built with security, structure, and accountability in mind.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-200">Developer</p>
          <p className="mt-3 text-slate-400 text-xs">
            Independent Software Developer
          </p>
          <p className="text-xs text-slate-500">
            Specializing in secure enterprise systems
          </p>
          <div className="mt-4 space-y-2 text-xs">
            <p>
              Email:{" "}
              <a
                href="mailto:nojar.it@gmail.com"
                className="text-fuchsia-400 hover:text-fuchsia-300 underline"
              >
                nojar.it@gmail.com
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/addai-ransford"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 hover:text-fuchsia-300 underline"
              >
                addai-ransford
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-slate-200">Legal</p>
          <ul className="mt-3 space-y-2 text-xs text-slate-400">
            <li>
              <a href="#privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#security" className="hover:text-white transition">
                Security & Compliance
              </a>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <p className="font-semibold text-slate-200">Product</p>
          <ul className="mt-3 space-y-2 text-xs text-slate-400">
            <li>
              <a href="#pricing" className="hover:text-white transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact Sales
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-600 mt-12 pt-6 pb-8 text-center text-xs text-slate-200">
        © {new Date().getFullYear()} Church Hub. All rights reserved.
      </div>
    </footer>
  );
};
