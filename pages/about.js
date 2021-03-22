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
        I'm based in London and currently helping build a better Internet at
        Cloudflare.
      </p>
      <section>
        <h5>Work Experience</h5>
        <ul>
          <li>2019 - Now | Senior Product Designer at Cloudflare</li>
          <li>2017 - 2018 | Product Designer at WorldRemit</li>
          <li>2014 - 2017 | UX Designer at Capital One</li>
        </ul>
      </section>

      <section>
        <h5>Skills</h5>
        <div className={styles.skills}>
          <ul>
            <li>Prototyping</li>
            <li>User Research</li>
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
        <h5>Education</h5>
        <ul>
          <li>
            2011 - 2014 | BSc Computer Science at Manchester Metropolitan
            University
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
