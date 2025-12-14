import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-20 right-6 bg-gray-800 text-white px-3 py-2 rounded-full text-sm z-50"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
