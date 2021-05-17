import PortfolioLayout from "@layouts/portfolio";
import Link from "next/link";
import Work from "@includes/work";
import { getConfig, getAllPosts } from "@api";
import styles from "@layouts/portfolio.module.scss";
import stylesSpecific from "@layouts/cloudflare-waf.module.scss";

export default function Blog(props) {
  return (
    <PortfolioLayout title={props.title} description={props.description}>
      <div className={styles.logo}>
        <img src="../images/portfolio/cloudflare-network-analytics/CloudflareLogomark.svg"></img>
      </div>

      <h2>
        Improving the dashboard experience of configuring and managing the WAF
      </h2>
      <p className={styles.tag}>
        I began working on the 1.1.1.1 / WARP client applications from late
        2019. During this time I led the design of the macOS and Windows desktop
        apps, aligned the UI across all 4 platforms and integrated with
        Cloudflare for Teams — allowing businesses to utilise the WARP
        applications to enforce web gateway policies and monitor device posture.
      </p>
      <div className={styles.details}>
        <p>
          <span>Working methodoligies</span>
          Belonging to the Emerging Technologies and Incubation group at
          Cloudflare, the development process of WARP highly emphasised
          speed-to-market above all else. This was the definintion of a
          "fast-paced environment" — quickly producing development ready specs,
          clearly outlining any risks or assumptions, and making UX decisions
          based off of best practice.
        </p>
        <div className={styles.specificDetails}>
          <ul>
            <span>Platforms</span>
            <li>Andriod</li>
            <li>iOS</li>
            <li>macOS</li>
            <li>Windows</li>
          </ul>
          <ul>
            <span>Total App Installations</span>
            <li>15+ Million</li>
          </ul>
          <ul>
            <span>Development Team</span>
            <li>Product Manager</li>
            <li>Engineering Manager</li>
            <li>Product Designer</li>
            <li>Platform Engineers x 4</li>
            <li>Systems Engineers x 2</li>
          </ul>
        </div>
      </div>

      <div className={stylesSpecific.hero}>
        <div className={stylesSpecific.heroImg1}></div>
      </div>

      <div className={stylesSpecific.hero}>
        <div className={stylesSpecific.heroImg2}></div>
      </div>

      <div className={stylesSpecific.hero}>
        <div className={stylesSpecific.heroImg3}></div>
      </div>

      <div className={styles.moreInformation}>
        <h3>Respecting native platform UI</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h4>Windows</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget. Sem et tortor consequat id porta.
            </p>
          </div>
          <div className={stylesSpecific.image}>
            <img src="../images/portfolio/cloudflare-waf/WAF-TagMenuExpanded.svg"></img>
          </div>
        </div>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h4>macOS</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget. Sem et tortor consequat id porta.
            </p>
          </div>
          <div className={stylesSpecific.image}>
            <img src="../images/portfolio/cloudflare-waf/WAF-TagMenuExpanded.svg"></img>
          </div>
        </div>
        <h3>The structure of the application</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h4>Simplifying the IA</h4>
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
        <h3>How we worked</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h4>A distributed team</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget. Sem et tortor consequat id porta.
            </p>
          </div>
        </div>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h4>Multiple iterations</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget. Sem et tortor consequat id porta.
            </p>
          </div>
        </div>

        <div className={styles.details}>
          <p>
            To comply with my non-disclosure agreement, I have omitted and
            obfuscated confidential and proprietary information. The information
            in this case study is my own and does not necessarily reflect the
            views of Cloudflare.
          </p>
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
