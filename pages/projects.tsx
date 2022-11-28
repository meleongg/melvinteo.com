import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import projectStyles from "../styles/projects.module.css";
import Head from "next/head";
import Link from "next/link";

export default function () {
  return (
    <Layout main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${projectStyles.projects}`}>
        <h2 className={utilStyles.headingXl}>Projects</h2>
        <ul className={`${utilStyles.list}`}>
          {/* rekindle */}
          <li className={`${projectStyles.project} ${utilStyles.listItem}`}>
            <div className={projectStyles.projectData}>
              <h3 className={utilStyles.headingLg}>rekindle</h3>
              <div className={projectStyles.projectLinks}>
                <h3 className={utilStyles.headingMd}>
                  <Link
                    className={`${utilStyles.link}`}
                    href="https://rekindle.vercel.app/"
                  >
                    Site
                  </Link>
                </h3>
                <p
                  className={`${utilStyles.headingMd} ${projectStyles.separator}`}
                >
                  <b>|</b>
                </p>
                <h3 className={utilStyles.headingMd}>
                  <Link
                    className={`${utilStyles.link}`}
                    href="https://github.com/rekindle-devs/rekindle"
                  >
                    Repo Link
                  </Link>
                </h3>
              </div>
              <p>Sept 2022</p>
              <p>
                rekindle is an online mental health hotline service accessible
                to both users and hotline responders built at Hack the North
                2022, which was my first in-person hackathon.
              </p>
              <ul
                className={`${projectStyles.features} ${utilStyles.listItem}`}
              >
                <li>
                  Integrated the text generation and summarization features from the co:here AI API 
                </li>
                <li>
                  Implemented data persistence to store user queries with Firebase Cloud Firestore
                </li>
                <li>
                  Developed the backend page-routing logic with Next.js 
                </li>
              </ul>
              <div
                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
              >
                <span className={projectStyles.technologySpan}>
                  <small className={projectStyles.technology}>React</small>
                  <small className={projectStyles.technology}>Firebase</small>
                  <small className={projectStyles.technology}>Next.js</small>
                  <small className={projectStyles.technology}>Chakra UI</small>
                </span>
              </div>
            </div>
          </li>

          {/* LastDash */}
          <li className={`${projectStyles.project} ${utilStyles.listItem}`}>
            <div className={projectStyles.projectData}>
              <h3 className={utilStyles.headingLg}>LastDash</h3>
              <div className={projectStyles.projectLinks}>
                <h3 className={utilStyles.headingMd}>
                  <Link
                    className={`${utilStyles.link}`}
                    href="https://meleongg.github.io/lastdash/"
                  >
                    Site
                  </Link>
                </h3>
                <p
                  className={`${utilStyles.headingMd} ${projectStyles.separator}`}
                >
                  <b>|</b>
                </p>
                <h3 className={utilStyles.headingMd}>
                  <Link
                    className={`${utilStyles.link}`}
                    href="https://github.com/meleongg/lastdash"
                  >
                    Repo Link
                  </Link>
                </h3>
              </div>
              <p>Aug 2022</p>
              <p>
                LastDash is a bus-tracking web app that allows users to enter
                their current address and receive information about nearby bus
                routes and stops in the Lower Mainland, BC.
              </p>
              <ul
                className={`${projectStyles.features} ${utilStyles.listItem}`}
              >
                <li>
                  Designed a dynamic and responsive interface using React and
                  Chakra UI
                </li>
                <li>
                  Incorporated dynamic third-party API data from the Geoapify
                  API and the Translink API
                </li>
                <li>
                  Implemented data persistence using Firebase Cloud Firestore
                </li>
              </ul>
              <div
                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
              >
                <span className={projectStyles.technologySpan}>
                  <small className={projectStyles.technology}>React</small>
                  <small className={projectStyles.technology}>Firebase</small>
                  <small className={projectStyles.technology}>Chakra UI</small>
                </span>
              </div>
            </div>
          </li>

          {/* Battleship */}
          <li className={`${projectStyles.project} ${utilStyles.listItem}`}>
            <div className={projectStyles.projectData}>
              <h3 className={utilStyles.headingLg}>Battleship</h3>
              <div className={projectStyles.projectLinks}>
                <h3 className={utilStyles.headingMd}>
                  <Link
                    className={`${utilStyles.link}`}
                    href="https://meleongg.github.io/battleship/"
                  >
                    Site
                  </Link>
                </h3>
                <p
                  className={`${utilStyles.headingMd} ${projectStyles.separator}`}
                >
                  <b>|</b>
                </p>
                <h3 className={utilStyles.headingMd}>
                  <Link
                    className={`${utilStyles.link}`}
                    href="https://github.com/meleongg/battleship"
                  >
                    Repo Link
                  </Link>
                </h3>
              </div>
              <p>May 2022</p>
              <p>
                A web application version of Hasbro's famous Battleship game.
              </p>
              <ul
                className={`${projectStyles.features} ${utilStyles.listItem}`}
              >
                <li>
                  Designed a dynamic and responsive interface using HTML & CSS
                </li>
                <li>
                  Used test-driven development to build and test JavaScript
                  objects with the Jest library
                </li>
              </ul>
              <div
                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
              >
                <span className={projectStyles.technologySpan}>
                  <small className={projectStyles.technology}>HTML</small>
                  <small className={projectStyles.technology}>CSS</small>
                  <small className={projectStyles.technology}>JavaScript</small>
                  <small className={projectStyles.technology}>Jest</small>
                </span>
              </div>
            </div>
          </li>

          {/* finnit */}
          <li className={`${projectStyles.project} ${utilStyles.listItem}`}>
            <div className={projectStyles.projectData}>
              <h3 className={utilStyles.headingLg}>finnit</h3>
              <div className={projectStyles.projectLinks}>
                <h3 className={utilStyles.headingMd}>
                  <Link
                    className={`${utilStyles.link}`}
                    href="https://meleongg.github.io/finnit/"
                  >
                    Site
                  </Link>
                </h3>
                <p
                  className={`${utilStyles.headingMd} ${projectStyles.separator}`}
                >
                  <b>|</b>
                </p>
                <h3 className={utilStyles.headingMd}>
                  <Link
                    className={`${utilStyles.link}`}
                    href="https://github.com/meleongg/finnit"
                  >
                    Repo Link
                  </Link>
                </h3>
              </div>
              <p>Apr 2022</p>
              <p>
                finnit is a todo list application that allows users to create
                different todo list folders that contain tasks with a name, due
                date, description, priority rating, notes, and status.
              </p>
              <ul
                className={`${projectStyles.features} ${utilStyles.listItem}`}
              >
                <li>
                  Designed an interactive and responsive interface using HTML,
                  CSS, and JavaScript
                </li>
                <li>
                  Incorporated user functionality to allows users to manage and
                  filter through to-do items by time and priority
                </li>
                <li>
                  Implemented data persistence using the Local Storage API
                </li>
              </ul>
              <div
                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
              >
                <span className={projectStyles.technologySpan}>
                  <small className={projectStyles.technology}>HTML</small>
                  <small className={projectStyles.technology}>CSS</small>
                  <small className={projectStyles.technology}>JavaScript</small>
                  <small className={projectStyles.technology}>
                    localStorage
                  </small>
                </span>
              </div>
            </div>
          </li>

          {/* Quizolingo */}
          <li className={`${projectStyles.project} ${utilStyles.listItem}`}>
            <div className={projectStyles.projectData}>
              <h3 className={utilStyles.headingLg}>Quizolingo</h3>
              <div className={projectStyles.projectLinks}>
                <h3 className={utilStyles.headingMd}>
                  <Link
                    className={`${utilStyles.link}`}
                    href="https://github.com/meleongg/quizolingo"
                  >
                    Repo Link
                  </Link>
                </h3>
              </div>
              <p>Feb 2022 - Apr 2022</p>
              <p>
                Quizolingo is a desktop application with an interactive UI for
                aspiring polyglots to improve their world language proficiencies
                in a fun and interactive way.
              </p>
              <ul
                className={`${projectStyles.features} ${utilStyles.listItem}`}
              >
                <li>
                  Implemented features for viewing, creating, updating, and
                  removing flashcards within a folder
                </li>
                <li>
                  Designed a minimalist user interface using the JSwing library
                </li>
                <li>
                  Implemented robust and thorough exception handling with 100%
                  JUnit code coverage
                </li>
              </ul>
              <div
                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
              >
                <span className={projectStyles.technologySpan}>
                  <small className={projectStyles.technology}>Java</small>
                  <small className={projectStyles.technology}>JUnit</small>
                  <small className={projectStyles.technology}>JSwing</small>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
