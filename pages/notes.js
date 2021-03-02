import NoteLayout from "@layouts/noteLayout";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";
import styles from "@layouts/noteLayout.module.scss";

export default function Blog(props) {
  return (
    <NoteLayout title={props.title} description={props.description}>
      <h2>Notes</h2>
      <p className={styles.tag}>
        A brief record of points or ideas written down.
      </p>
      {props.posts.map(function (post, idx) {
        return (
          <div key={idx}>
            <Link href={"/articles/" + post.slug}>
              <a>{post.title}</a>
            </Link>
            <p>{post.excerpt}</p>
            <span className={styles.publishedDate}>{post.publishedDate}</span>
          </div>
        );
      })}
    </NoteLayout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}
