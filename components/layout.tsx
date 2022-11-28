import Head from "next/head";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import NavBar from "./navbar";
import Footer from "./footer";
import utilStyles from "../styles/utils.module.css";

export const siteTitle = "Welcome to mthteo.xyz!";

export default function Layout({ children, main } : { children: React.ReactNode, main?: boolean }) {
  return (
    <div className={`${styles.container} ${utilStyles.darkText}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Melvin Teo's website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
