import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark"
      : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(v => !v)}
      className="btn btn-ghost rounded-full px-3 py-2 text-sm"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
