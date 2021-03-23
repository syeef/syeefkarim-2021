import AboutLayout from "@layouts/about";
import Link from "next/link";
import Work from "@includes/work";
import { getConfig, getAllPosts } from "@api";
import styles from "@layouts/about.module.scss";

export default function Blog(props) {
  return (
    <AboutLayout title={props.title} description={props.description}>
      <div className={styles.profile}>
        <img src="/images/profile.jpg"></img>
      </div>
      <p>
        Hey, I'm Syeef. I've been designing mobile apps and websites since 2014.
        I'm interested in working on products that can help the future of
        society regarding data privacy and sustainability. I live in London, UK
        and currently helping build a better Internet at Cloudflare.
      </p>

      <section>
        <h5>Skills</h5>
        <div className={styles.skills}>
          <ul>
            <li>Prototyping</li>
            <li>User Research</li>
            <li>Motion Design</li>
          </ul>

          <ul>
            <li>Figma</li>
            <li>After Effects</li>
          </ul>

          <ul>
            <li>HTML/CSS</li>
            <li>React/Next.JS</li>
          </ul>
        </div>
      </section>

      <section>
        <h5>Work Experience</h5>
        <ul>
          <li>
            <span>2019 - Now</span>Senior Product Designer at Cloudflare
          </li>
          <li>
            <span>2017 - 2018</span>Product Designer at WorldRemit
          </li>
          <li>
            <span>2014 - 2017</span>UX Designer at Capital One
          </li>
        </ul>
      </section>

      <section>
        <h5>Education</h5>
        <ul>
          <li>
            <span>2011 - 2014</span>BSc Computer Science at Manchester
            Metropolitan University
          </li>
        </ul>
      </section>
    </AboutLayout>
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
