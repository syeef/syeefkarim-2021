// _layouts/post.js
import DefaultLayout from "@layouts/default";
import Head from "next/head";
import Link from "next/link";

export default function PostLayout(props) {
  return (
    <DefaultLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
      </Head>
      <article>
        <h1>{props.title}</h1>
        <div>{props.publishedDate}</div>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
    </DefaultLayout>
  );
}
