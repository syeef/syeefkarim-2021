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
        isGlassy ? styles.glassyHeader : `${styles.header} ${props.className}`
      }
      ref={navRef}
    >
      <nav>
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
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/notes">
              <a>Notes</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
