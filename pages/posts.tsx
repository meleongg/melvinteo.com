import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import postsStyles from "../styles/posts.module.css";
import Link from "next/link";
import Head from "next/head";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

const metadata = {
  title: "Blog | mthteo.xyz",
  description: "Blog for Melvin Teo's personal site",
  image: "https://mthteo-xyz.vercel.app/meta-image.png",
};

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
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="image" content={metadata.image} />

        <meta property="og:url" content="https://mthteo-xyz.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${postsStyles.mainBlog}`}
      >
        <h2 className={utilStyles.headingXl}>Blog</h2>
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
                  <span className={postsStyles.tagSpan} key={`${id}-${tag}`}>
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
