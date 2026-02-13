import { useEffect, useState } from "react";
import { Minus, X, Square, Apple, Monitor } from "lucide-react";

type OS = "mac" | "windows" | "unknown";

const detectOS = (): OS => {
  if (typeof window === "undefined") return "unknown";

  const ua = window.navigator.userAgent.toLowerCase();

  if (ua.includes("mac")) return "mac";
  if (ua.includes("win")) return "windows";

  return "unknown";
};

export const InstallationSection = () => {
  const [os, setOs] = useState<OS>("unknown");

  useEffect(() => {
    setOs(detectOS());
  }, []);

  const steps = [
    {
      title: "Download the App",
      mac: "Open the .dmg file and drag the app into Applications.",
      windows: "Open the .exe installer and follow the setup wizard.",
    },
    {
      title: "Approve Security Prompt",
      mac: "Go to System Settings → Privacy & Security → Click 'Open Anyway'.",
      windows: "Click 'More Info' → 'Run Anyway' in Windows SmartScreen.",
    },
    {
      title: "Launch & Sign In",
      mac: "Open the app from Applications and sign in to your account.",
      windows: "Launch the app from the Start Menu and sign in.",
    },
  ];

  const OSBadge = () => {
    if (os === "mac")
      return (
        <span className="flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
          <Apple size={16} />
          macOS
        </span>
      );

    if (os === "windows")
      return (
        <span className="flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
          <Monitor size={16} />
          Windows
        </span>
      );

    return null;
  };

  return (
    <section id="installation" className="max-w-6xl mx-auto px-6 py-20">
      
      {/* Title + OS Badge */}
      <div className="flex items-center justify-center gap-4">
        <h2 className="text-3xl font-bold">How to Install</h2>
        <OSBadge />
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="rounded-2xl border bg-slate-900 p-6 shadow-sm"
          >
            <h3 className="font-semibold text-lg">
              {i + 1}. {step.title}
            </h3>

            <div className="mt-6 rounded-xl bg-slate-800 border border-slate-700 overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-700">
                {os === "mac" ? (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                ) : (
                  <div className="ml-auto flex items-center gap-3 text-gray-300">
                    <Minus size={16} />
                    <Square size={14} />
                    <X size={16} />
                  </div>
                )}
              </div>

              {/* Window Body */}
              <div className="h-40 flex items-center justify-center text-sm text-gray-300 border-t border-dashed text-center px-6">
                {os === "mac"
                  ? step.mac
                  : os === "windows"
                  ? step.windows
                  : "Download the version compatible with your device."}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
