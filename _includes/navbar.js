import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

import styles from "./navbar.module.scss";

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: "0px",
};

export default function Navbar(props) {
  const navRef = useRef(null);
  const observer = useRef(null);
  const [isGlassy, setIsGlassy] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    observer.current = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      setIsGlassy(!isIntersecting);
    }, OBSERVER_OPTIONS);

    observer.current.observe(props.sentinelRef.current);
  }, [props.sentinelRef]);

  return (
    <header
      className={
        isGlassy
          ? `${styles.glassyHeader} ${styles.mobileNav}`
          : `${styles.header} ${styles.mobileNav} ${props.className}`
      }
      ref={navRef}
    >
      <button
        className={styles.burgerMenu}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776;
      </button>

      {isMenuOpen && (
        <nav className={styles.navigationBarMobile}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li> */}
            <li>
              <Link href="/notes">
                <a>Notes</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li> */}
          </ul>
        </nav>
      )}

      <nav className={styles.navigationBarLeft}>
        <Link href="/">
          <a className={styles.heroLink}>Syeef Karim</a>
        </Link>
      </nav>
      <nav className={styles.navigationBar}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li> */}
          <li>
            <Link href="/notes">
              <a>Notes</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
