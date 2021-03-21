import PortfolioLayout from "@layouts/portfolio";
import Link from "next/link";
import Work from "@includes/work";
import { getConfig, getAllPosts } from "@api";
import styles from "@layouts/portfolio.module.scss";

export default function Blog(props) {
  return (
    <PortfolioLayout title={props.title} description={props.description}>
      <div className={styles.logo}>
        <img src="../images/portfolio/cloudflare-warp/1DotLogo.png"></img>
      </div>

      <h1>A safer and quicker Internet experience</h1>
      <p className={styles.tag}>
        I began working on the 1.1.1.1 / WARP client applications from late
        2019. During this time I led the design of the macOS and Windows desktop
        apps, aligned the UI across all 4 platforms and integrated with
        Cloudflare for Teams — allowing businesses to utilise the WARP
        applications to enforce web gateway policies and monitor device posture.
      </p>

      <div className={styles.hero}>
        <div className={styles.heroImg1}></div>
        <div className={styles.heroImg2}></div>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroImg3}></div>
        <div className={styles.heroImg1}></div>
      </div>

      <div className={styles.card}>
        <div className={styles.meta}>
          <h2>Familiar and convenient</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tincidunt ornare massa eget. Sem et tortor consequat id porta.
          </p>
        </div>
        <div className={styles.visuals}>
          <div className={styles.topCardImage}></div>
        </div>
      </div>

      <div className={styles.moreInformation}>
        <h2>Respecting native platform UI</h2>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h3>Windows</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget. Sem et tortor consequat id porta.
            </p>
          </div>
          <div className={styles.image}>
            <img src="../images/portfolio/cloudflare-warp/Windows_Account.png"></img>
          </div>
        </div>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h3>macOS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget. Sem et tortor consequat id porta.
            </p>
          </div>
          <div className={styles.image}>
            <img src="../images/portfolio/cloudflare-warp/macOS_Account.png"></img>
          </div>
        </div>
        <h2>The structure of the application</h2>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h3>Simplifying the IA</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget. Sem et tortor consequat id porta.
            </p>
          </div>
          <div className={styles.overlay}>
            <img
              className={styles.ia}
              src="../images/portfolio/cloudflare-warp/WARP-IA.png"
            ></img>
          </div>
        </div>
        <h2>How we worked</h2>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h3>A distributed team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget. Sem et tortor consequat id porta.
            </p>
          </div>
        </div>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h3>Multiple iterations</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget. Sem et tortor consequat id porta.
            </p>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}

// export async function getStaticProps() {
//   const config = await getConfig();
//   const allPosts = await getAllPosts();

//   return {
//     props: {
//       posts: allPosts,
//       title: config.title,
//       description: config.description,
//     },
//   };
// }
