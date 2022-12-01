import Head from "next/head";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import NavBar from "./navbar";
import Footer from "./footer";

const metadata = {
  title: "Home | mthteo.xyz",
  description: "Homepage of Melvin Teo's personal site",
};

export default function Layout({
  children,
  main,
}: {
  children: React.ReactNode;
  main?: boolean;
}) {
  return (
    <div className={`${styles.container}`}>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      {!main && (
        <div className={styles.backToPosts}>
          <Link href="/posts">← Back to posts</Link>
        </div>
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
