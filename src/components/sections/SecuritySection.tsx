export const SecuritySection = () => {
  return (
    <section
      id="security"
      className="bg-slate-950 border-t border-b border-slate-700"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Security & Code Integrity
          </h2>

          <p className="mt-6 text-slate-400 leading-relaxed">
            Church Hub Desktop is designed with security-first architecture.
            Administrative access is role-based, sessions are protected, and
            church data is logically isolated using multi-tenant separation.
          </p>

          <ul className="mt-8 space-y-5 text-sm text-slate-300">
            <li>
              <strong className="text-white">Encrypted Communication:</strong>{" "}
              All data transmission uses HTTPS/TLS encryption.
            </li>
            <li>
              <strong className="text-white">Role-Based Access Control:</strong>{" "}
              Granular permissions for administrators, finance teams, and
              leadership.
            </li>
            <li>
              <strong className="text-white">Audit Logging:</strong> Sensitive
              actions can be tracked for accountability.
            </li>
            <li>
              <strong className="text-white">Multi-Tenant Isolation:</strong>{" "}
              Churches operate in securely separated environments.
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-sm text-slate-300 shadow-lg">
            <h3 className="font-semibold text-white mb-4">
              macOS Gatekeeper Notice
            </h3>
            <p className="text-slate-400">
              macOS may display a warning for newly distributed applications. To
              proceed: Open{" "}
              <strong>System Settings → Privacy & Security</strong>, then click{" "}
              <strong>"Open Anyway"</strong>.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-sm text-slate-300 shadow-lg">
            <h3 className="font-semibold text-white mb-4">
              Windows SmartScreen Notice
            </h3>
            <p className="text-slate-400">
              Windows may show a SmartScreen warning. Click
              <strong> "More info"</strong> and then
              <strong> "Run anyway"</strong> to continue installation.
            </p>
          </div>

          <div className="rounded-2xl bg-fuchsia-950 border border-fuchsia-700 p-8 text-sm text-slate-200 shadow-fuchsia-500/10 shadow-lg">
            <h3 className="font-semibold text-white mb-4">
              Code Signing Roadmap
            </h3>
            <p>
              Official Apple Developer ID and Microsoft code-signing
              certificates are in progress. Future releases will include full
              OS-level signature validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
