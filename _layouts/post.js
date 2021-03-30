// import DefaultLayout from "@layouts/default";
// import Head from "next/head";
// import Link from "next/link";

// export default function PostLayout(props) {
//   return (
//     <DefaultLayout>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>{props.title}</title>
//       </Head>
//       <article>
//         <h1>{props.title}</h1>
//         <div>{props.excerpt}</div>
//         <div>{props.publishedDate}</div>
//         <div dangerouslySetInnerHTML={{ __html: props.content }} />
//       </article>
//     </DefaultLayout>
//   );
// }

import Head from "next/head";
import Navbar from "@includes/navbar";
import Footer from "@includes/footer";

import styles from "./post.module.scss";
import { useEffect, useRef } from "react";

export default function PostLayout(props) {
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
        <article className={styles.contentWrap}>
          <img src={props.image} />
          <h2>{props.title}</h2>
          <p className={styles.tag}>{props.excerpt}</p>
          <p>{props.publishedDate}</p>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </article>
      </main>
      <Footer />
    </>
  );
}
