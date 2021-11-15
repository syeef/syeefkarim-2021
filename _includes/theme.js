import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      The current theme is: {theme} theme
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>Use Light Theme</button>
      ) : (
        <button onClick={() => setTheme("dark")}>Use Dark Theme</button>
      )}
    </div>
  );
};
