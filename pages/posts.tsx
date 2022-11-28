import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import postsStyles from "../styles/posts.module.css";
import Link from "next/link";
import Head from "next/head";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    tags: string;
  }[];
}) {
  return (
    <Layout main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${postsStyles.mainBlog}`}
      >
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={`${utilStyles.list}`}>
          {allPostsData.map(({ id, date, title, tags }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.altText}>
                <Date dateString={date} />
              </small>
              <div className={postsStyles.tags}>
                {tags.split(" ").map((tag) => (
                  <span className={postsStyles.tagSpan} key={`${id}-tag`}>
                    <small className={postsStyles.tag}>{tag}</small>
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
