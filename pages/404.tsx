import Link from "next/link";
import errorStyles from "../styles/404.module.css";
import utilStyles from "../styles/utils.module.css";
import Head from "next/head";

const metadata = {
  title: "404 | Melvin Teo",
  description: "404 Page not Found Error page",
  image: "https://mthteo-xyz.vercel.app/meta-image.png",
};

export default function Custom404() {
  return (
    <div className={`${errorStyles.container}`}>
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>404: Page Not Found</h1>
      <h2>Sorry! This page doesn't exist!</h2>
      <Link className={utilStyles.link} href="/">
        Back to home
      </Link>
    </div>
  );
}
