export type OS = "mac" | "windows" | "unknown";

export const detectOS = (): OS => {
  if (typeof window === "undefined") return "unknown";

  const ua = window.navigator.userAgent.toLowerCase();

  if (ua.includes("mac")) return "mac";
  if (ua.includes("win")) return "windows";

  return "unknown";
};