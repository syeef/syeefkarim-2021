// _layouts/default.js
import Head from "next/head";
import Navbar from "@includes/navbar";
import Footer from "@includes/footer";

import styles from "./portfolio.module.scss";
import { useEffect, useRef } from "react";

export default function PortfoliotLayout(props) {
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
      <Navbar sentinelRef={sentinelRef} />
      <main className={styles.pageContainer}>
        <div className={styles.contentWrap}>{props.children}</div>
      </main>
      <Footer />
    </>
  );
}
