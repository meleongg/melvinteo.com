import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import indexStyles from "../styles/index.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const metadata = {
  title: "Home | Melvin Teo",
  description: "Homepage of Melvin Teo's personal site",
  image: "https://mthteo-xyz.vercel.app/meta-image.png",
};

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className={`${indexStyles.intro} ${utilStyles.headingXl}`}>
          <span>hi friend, I'm</span>
          <Typewriter
            options={{
              strings: [
                "Melvin Teo",
                "a 2nd-year UBC CS student",
                "a software dev",
                "a hackathon organizer",
                "a volleyball addict",
                "an aspiring guitarist",
                "not a caffeine addict",
              ],
              autoStart: true,
              loop: true,
              delay: "natural",
              deleteSpeed: "natural",
            }}
          />
        </div>
        <div className={indexStyles.introData}>
          <div className={indexStyles.introDataText}>
            <p>
              Welcome to my playground of thought and randomness. Feel free to
              click around to explore a bit more about me.
            </p>
            <p>
              As an aspiring Full-Stack Engineer, I'm passionate about
              collaborating with others to find creative solutions for
              challenging problems. I've recently been learning the MERN stack
              through my
              <Link
                className={`${utilStyles.altText} ${utilStyles.link}`}
                href="/projects"
              >
                {" "}
                personal projects
              </Link>
              , and I've closely collaborated with other developers through my
              <Link
                className={`${utilStyles.altText} ${utilStyles.link}`}
                href="/experiences"
              >
                {" "}
                work experience{" "}
              </Link>
              and informal hackathon settings.
            </p>
            <p>
              In my spare time, you can find me organizing some awesome events
              at{" "}
              <Link
                className={`${utilStyles.altText} ${utilStyles.link}`}
                href="https://www.nwplus.io"
                target="_blank"
              >
                nwPlus
              </Link>,{" "}
              biking around Vancouver, playing volleyball, learning world
              languages, strumming a guitar, or hanging out with friends &
              family. I also sometimes{" "}
              <Link
                className={`${utilStyles.altText} ${utilStyles.link}`}
                href="/posts"
              >
                write
              </Link>{" "}
              to clear my mind.
            </p>
            <p>
              Here's my{" "}
              <Link
                className={`${utilStyles.altText} ${utilStyles.link}`}
                href="/Melvin_Teo.pdf"
                target="_blank"
              >
                resume
              </Link>
              , if that interests you!
            </p>
          </div>
          <Image
            priority
            src="/images/profile.jpg"
            height={450}
            className={`${utilStyles.borderCircle}`}
            width={300}
            alt="headshot of Melvin Teo"
          />
        </div>
      </section>
    </Layout>
  );
}
