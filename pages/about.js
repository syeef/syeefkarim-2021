import DefaultLayout from "@layouts/default";
import Link from "next/link";
import Work from "@includes/work";
import { getConfig, getAllPosts } from "@api";
import styles from "@layouts/default.module.scss";

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      {/* <h1>About</h1>
      <p className={styles.tag}>
        I enjoy designing products for Mobile and the Web.
      </p> */}
      <img src="/images/profile.jpg"></img>
      <p>
        Hey, I'm Syeef. I've been designing mobile apps and websites since 2014.
      </p>
    </DefaultLayout>
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
