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
        Improving the dashboard experience of configuring and managing the Web
        Application Firewall
      </h2>
      <p className={styles.tag}>
        The Cloudflare Web Application Firewall (WAF) was updated during 2020,
        making it possible for customers to adjust the WAF to meet the specific
        requirements of their applciations. We updated the dashboard experience
        to reflect the new capabilities of the WAF.
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
            <li>Web browser</li>
          </ul>
          <ul>
            <span>Total App Installations</span>
            <li>15+ Million</li>
          </ul>
          <ul>
            <span>Additional material</span>
            <li>
              <a
                href="https://blog.cloudflare.com/designing-the-new-cloudflare-waf/"
                target="_blank"
                rel="noreferrer"
              >
                Designing the new Cloudflare Web Application Firewall
              </a>
            </li>
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
        <h3>Identifying the tasks customers are trying to complete</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <p>
              Cloudflare supports a range of customers — individual developers
              or hobbyists, small/medium-sized businesses where it’s common for
              a developer to fulfil multiple roles and responsibilities, through
              to large global enterprises where often there is an entire
              department dedicated to information security.
            </p>
            <p>
              To help myself and other members of the product development team
              better empathise with our range of customers, we use a technique
              known as Job Stories to further decompose the problem we're
              solving. Job Stories, unlike user persona or user stories allow us
              to focus on the users situation, motivation, and desired outcome.
            </p>
            <p>
              We conducted interviews with a handful of customers directly, but
              we also supplemented them by interviewing members of our Solutions
              Engineering team. They help customers configure Cloudflare to meet
              their requirements and therefore have a direct connection to
              multiple customers themselves. From the various interviews we
              identified the following job stories among many:
              <ul>
                <li>
                  When onboarding with Cloudflare, I want to quickly turn on the
                  WAF and use the default settings so I can proceed to
                  configuring the rest of the Cloudflare features.
                </li>
                <li>
                  When refining and tuning the configuration of my zone, I only
                  want to configure the rules I’m interested in so I can reduce
                  the potential number of false positive results.
                </li>
              </ul>
            </p>
            <h4>“I only want to configure the rules I’m interested in.”</h4>
            <p>
              To help myself and other members of the product development team
              better empathise with our range of customers, we use a technique
              known as Job Stories to further decompose the problem we're
              solving. Job Stories, unlike user persona or user stories allow us
              to focus on the users situation, motivation, and desired outcome.
            </p>
          </div>
        </div>

        <h3>Introducing new Dashboard capabilities</h3>
        <div className={styles.mixedContent}>
          <div className={styles.meta}>
            <h4>Tag management</h4>
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
            <h4>Bulk action</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              tincidunt ornare massa eget. Sem et tortor consequat id porta.
            </p>
          </div>
          <div className={stylesSpecific.image}>
            <img src="../images/portfolio/cloudflare-waf/WAF-BulkAction.svg"></img>
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
