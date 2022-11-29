import Head from "next/head";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import NavBar from "./navbar";
import Footer from "./footer";

export const siteTitle = "Welcome to mthteo.xyz!";

export default function Layout({ children, main } : { children: React.ReactNode, main?: boolean }) {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Melvin Teo's website"
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavBar />
      <main>{children}</main>
      {!main && (
        <div className={styles.backToPosts}>
          <Link href="/posts">← Back to posts</Link>
        </div>
      )}
      <Footer />
    </div>
  );
}
