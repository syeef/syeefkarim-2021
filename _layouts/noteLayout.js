// _layouts/default.js
import Head from "next/head";
import Navbar from "@includes/navbar";
import Footer from "@includes/footer";
import styles from "./noteLayout.module.scss";
import { useEffect, useRef } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

export default function NoteLayout(props, router) {
  const sentinelRef = useRef(null);
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
