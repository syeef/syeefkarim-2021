// import { useTheme } from "next-themes";

// export const ThemeChanger = () => {
//   const { theme, setTheme } = useTheme();

//   return (
//     <div>
//       The current theme is: {theme}
//       <button onClick={() => setTheme("light")}>Light Mode</button>
//       <button onClick={() => setTheme("dark")}>Dark Mode</button>
//     </div>
//   );
// };

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
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>

    // <div style={{ color: resolvedTheme === 'dark' ? white : black }}>
  );
};
