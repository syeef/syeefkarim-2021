import HomepageLayout from "@layouts/homepage";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";

export default function Blog(props) {
  return (
    <HomepageLayout
      title={props.title}
      description={props.description}
    ></HomepageLayout>
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
