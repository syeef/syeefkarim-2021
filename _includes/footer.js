import styles from "./footer.module.scss";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {theme === "dark" ? (
        <a className={styles.themeChanger} onClick={() => setTheme("light")}>
          Use Light Theme
        </a>
      ) : (
        <a className={styles.themeChanger} onClick={() => setTheme("dark")}>
          Use Dark Theme
        </a>
      )}
    </>
  );
};

// _includes/footer.js
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <ul>
            <li>
              <a
                href="https://twitter.com/syeefk"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/syeef"
                target="_blank"
                rel="noreferrer"
              >
                Dribbble
              </a>
            </li>
            <li>
              <a
                href="https://github.com/syeef"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://uk.linkedin.com/in/syeefkarim/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/notes">
                <a>Notes</a>
              </Link>
            </li>
            <li>
              <ThemeChanger />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
