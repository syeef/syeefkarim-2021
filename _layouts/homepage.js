// _layouts/default.js
import Head from "next/head";
import Navbar from "@includes/navbar";
import Work from "@includes/work";
import Footer from "@includes/footer";
import { ThemeChanger } from "@includes/theme";

import styles from "./homepage.module.scss";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function HomepageLayout(props) {
  const sentinelRef = useRef(null);

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Mono&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div ref={sentinelRef}></div>
      <Navbar sentinelRef={sentinelRef} className={styles.homepageOverride} />

      <div className={styles.heroMobile}>
        <div className={styles.heroContentMobile}>
          <h1>Hi, I'm Syeef.</h1>
          <p>I'm currently a Product Designer at Cloudflare.</p>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <h1>👋🏾 Hi, I'm Syeef.</h1>
          <p>I'm currently a Product Designer at Cloudflare.</p>
        </div>
      </div>
      {/* <ThemeChanger /> */}

      <main className={styles.pageContainer}>
        <div className={styles.contentWrap}>{props.children}</div>
      </main>

      <Footer />
    </>
  );
}
