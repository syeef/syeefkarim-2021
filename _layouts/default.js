// _layouts/default.js
import Head from "next/head";
import Navbar from "@includes/navbar";
import Footer from "@includes/footer";

import styles from "./default.module.css";

export default function DefaultLayout(props) {
  return (
    <main className={styles.pageContainer}>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Navbar />
      <div className={styles.contentWrap}>{props.children}</div>
      <Footer />
    </main>
  );
}
