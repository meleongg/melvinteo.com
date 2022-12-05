import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import experienceStyles from "../styles/experiences.module.css";
import Head from "next/head";

const metadata = {
  title: "Experience | mthteo.xyz",
  description: "Experience page of Melvin Teo's personal site",
  image: "https://mthteo-xyz.vercel.app/meta-image.png",
};

export default function () {
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
      <section
        className={`${experienceStyles.experiences}`}
      >
        <h2 className={utilStyles.headingXl}>Experience</h2>
        <ul className={`${utilStyles.list}`}>
          <li
            className={`${experienceStyles.experience} ${utilStyles.listItem}`}
          >
            <div className={experienceStyles.experienceData}>
              <h3 className={utilStyles.headingLg}>Amazon</h3>
              <h3 className={utilStyles.headingMd}>
                Software Development Engineer Intern
              </h3>
              <p>May 2022 - Aug 2022</p>
              <p>
                For my first-ever SDE internship, I interned on the Prime
                Customer Interactions Real-time Experience (CARE) team.
              </p>
              <ul
                className={`${experienceStyles.responsibilities} ${utilStyles.listItem}`}
              >
                <li>
                  Implemented <b>customer-facing</b> features related to a Pause
                  & Resume membership state for millions of worldwide Amazon
                  Prime customers, helping to retain tens of thousands of
                  customers annually.
                </li>
                <li>
                  Wrote <b>10+</b> automation scripts to implement <b>11</b>{" "}
                  features (e.g. customer emails, risk message widgets, etc.)
                  across <b>14</b> countries, reducing expected development time
                  from 1.6 years to 0.7 years, a <b>49%</b> time and <b>43%</b>{" "}
                  cost reduction.
                </li>
                <li>
                  Created and deployed <b>10</b> AWS CloudWatch Metrics Widgets
                  and <b>20</b> Alarms using an AWS TypeScript CDK to monitor
                  features related to Prime membership Pause & Resume.
                </li>
                <li>
                  Researched and drove a design document for content
                  translations automation, including a pros & cons analysis of
                  two main options.
                </li>
              </ul>
              <div
                className={`${experienceStyles.technologies} ${utilStyles.listItem}`}
              >
                <span className={experienceStyles.technologySpan}>
                  <small className={experienceStyles.technology}>
                    Freemarker
                  </small>
                  <small className={experienceStyles.technology}>
                    AWS TypeScript CDK
                  </small>
                  <small className={experienceStyles.technology}>
                    AWS CloudWatch
                  </small>
                  <small className={experienceStyles.technology}>Bash</small>
                </span>
              </div>
            </div>
          </li>

          <li
            className={`${experienceStyles.experience} ${utilStyles.listItem}`}
          >
            <div className={experienceStyles.experienceData}>
              <h3 className={utilStyles.headingLg}>Byte Camp</h3>
              <h3 className={utilStyles.headingMd}>Assistant Instructor</h3>
              <p>June 2021 - Aug 2021</p>
              <p>
                Byte Camp is Western Canada's busiest provider of Creative Tech
                programs for youth. Byte Camp strives to create a challenging
                curriculum and fun environment for kids to learn STEAM skills.
              </p>
              <ul
                className={`${experienceStyles.responsibilities} ${utilStyles.listItem}`}
              >
                <li>
                  Worked 1-on-1 with <b>5-12</b> campers aged <b>9-14</b> to
                  learn and build 2D Games, Scratch Games, and Android App Games
                  with technologies including Godot, Scratch, and Inkscape
                  within <b>4-5</b> days.
                </li>
                <li>
                  Explained abstract coding principles (conditionals, variables,
                  pseudocoding, debugging) with engaging examples and metaphors
                  to help campers debug their projects.
                </li>
                <li>
                  Taught a class of <b>9</b> campers how to build a practice
                  Scratch Dodge Game through <b>5+</b> step-by-step lessons,
                  including Sprite Movement, Falling Objects, Sound, and Timers,
                  Score & Health systems.
                </li>
              </ul>
              <div
                className={`${experienceStyles.technologies} ${utilStyles.listItem}`}
              >
                <span className={experienceStyles.technologySpan}>
                  <small className={experienceStyles.technology}>
                    GDScript
                  </small>
                  <small className={experienceStyles.technology}>
                    Inkscape
                  </small>
                  <small className={experienceStyles.technology}>Scratch</small>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
