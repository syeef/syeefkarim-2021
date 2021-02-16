// _layouts/default.js
import Head from "next/head";
import Navbar from "@includes/navbar";
import Work from "@includes/work";
import Footer from "@includes/footer";

import styles from "./homepage.module.scss";
import { useRef } from "react";

export default function HomepageLayout(props) {
  const sentinelRef = useRef(null);
  return (
    <main className={styles.pageContainer}>
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
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Hey, I'm Syeef and I'm a Product Designer.</h1>
          <p>📍 London, UK</p>
          <p>💻 Senior Product Designer at Cloudflare</p>
          <p>👍🏽 I enjoy making cool products with fun teams</p>
        </div>
      </div>

      {/* <div className={styles.logopoolWrapper}>
        <div>
          <h5>Experience</h5>
        </div>
        <div className={styles.logopool}>
          <a href="https://www.cloudflare.com/" target="_blank">
            <img src="../images/Cloudflare.svg" />
          </a>
          <a href="https://www.worldremit.com/en/mobile-apps" target="_blank">
            <img src="../images/WorldRemit.svg" />
          </a>
          <a href="https://www.capitalone.co.uk/app" target="_blank">
            <img src="../images/CapitalOne.svg" />
          </a>
          <a href="https://www.mlh.io/" target="_blank">
            <img src="../images/MLH.svg" />
          </a>
        </div>
      </div> */}

      <Work
        logo="../images/Cloudflare.svg"
        title="Cloudflare"
        tag="A dashboard to help customers manage their applications security and performance across L7, L3/L4, and secure their connection using the WARP applications."
        shortDescription="Focussed on improving the dashboard experience to manage security products across L7, L3/L4, and the WARP applications."
        demo="../images/cloudflare_WAF.svg"
      />
      <Work
        logo="../images/WorldRemit.svg"
        title="WorldRemit"
        tag="An Android and iOS Mobile App to help customers send and receive money abroad."
      />
      <Work
        logo="../images/CapitalOne.svg"
        title="Capital One"
        tag="An Android and iOS Mobile App to help customers manage their account."
        shortDescription="During my time at Capital One I was heavily involved with the conception, ideation, user understanding and execution of their mobile app, for both the Android and iOS platform. The app is used by customers to service their credit card by viewing transactions, making payments and address issues with their account."
      />
      <Work
        logo="../images/MLH.svg"
        title="Major League Hacking"
        tag="Part of the founding team of the European arm."
        shortDescription={
          <>
            <p>
              In March 2014 I started working with Joe Nash, Tim Fogarty and
              Bilawal Hameed on a project to help build a thriving student
              hackathon community in the EU. Mike Swift and Jon Gottfried were
              also trying to solve a similar problem in North America. A couple
              of phone calls, emails and deliberation sessions later, we began
              working together to grow the global student hackathon community.
              Today Major League Hacking helps support over 65,000 students and
              200+ events and has a strong 10+ full time team behind it.{" "}
            </p>
            <p>
              MLH gave me experience working at a startup from the earliest
              stages all the way through to raising a $1M seed round. The time
              spent has been well worth the positive impact and growth of the
              student hacker community.
            </p>
          </>
        }
      />

      <div className={styles.contentWrap}>{props.children}</div>

      <Footer />
    </main>
  );
}
