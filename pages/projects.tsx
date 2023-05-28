import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import projectStyles from "../styles/projects.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const metadata = {
    title: "Projects | Melvin Teo",
    description: "Project page of Melvin Teo's personal site",
    image: "https://mthteo-xyz.vercel.app/meta-image.png",
};

export default function () {
    return (
        <Layout main>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="image" content={metadata.image} />

                <meta
                    property="og:url"
                    content="https://mthteo-xyz.vercel.app"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={metadata.title} />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta property="og:image" content={metadata.image} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta
                    name="twitter:description"
                    content={metadata.description}
                />
                <meta name="twitter:image" content={metadata.image} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={`${projectStyles.projects}`}>
                <h2 className={utilStyles.headingXl}>Projects</h2>
                <ul className={`${utilStyles.list}`}>
                    {/* Expawdition */}
                    <li
                        className={`${projectStyles.project} ${utilStyles.listItem}`}
                    >
                        <div className={projectStyles.projectData}>
                            <h3 className={utilStyles.headingLg}>
                                🏆 Expawdition - Stormhacks 2023 (1st Place)
                            </h3>
                            <div className={projectStyles.projectLinks}>
                                <h3 className={utilStyles.headingMd}>
                                    <Link
                                        className={`${utilStyles.link}`}
                                        href="https://devpost.com/software/expawdition"
                                        target="_blank"
                                    >
                                        Devpost
                                    </Link>
                                </h3>
                            </div>
                            <p>May 2023</p>
                            <div
                                className={projectStyles.projectImageContainer}
                            >
                                <Image
                                    priority
                                    src="/images/projects/expawdition.jpg"
                                    height={500}
                                    className={`${utilStyles.borderCircle}`}
                                    width={1590}
                                    alt="picture of Expawdition pitch"
                                />
                            </div>
                            <p>
                                Expawdition is a hassle-free smart trip planner
                                that takes away the mental burden of planning
                                outings. By providing details about the
                                destination and constraints such as budget,
                                demographic, transportation methods, personal
                                preferences, and accessibility needs,
                                Expawdition takes care of the rest and crafts an
                                optimized itinerary.
                            </p>
                            <div
                                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
                            >
                                <span className={projectStyles.technologySpan}>
                                    <small className={projectStyles.technology}>
                                        React
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Next.js
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Chakra UI
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Express
                                    </small>
                                    <small className={projectStyles.technology}>
                                        GPT-3.5-turbo
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Firebase
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Google Routes & Places APIs
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Figma
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Vercel
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Render
                                    </small>
                                </span>
                            </div>
                        </div>
                    </li>

                    {/* liftz */}
                    <li
                        className={`${projectStyles.project} ${utilStyles.listItem}`}
                    >
                        <div className={projectStyles.projectData}>
                            <h3 className={utilStyles.headingLg}>liftz</h3>
                            <div className={projectStyles.projectLinks}>
                                <h3 className={utilStyles.headingMd}>
                                    <Link
                                        className={`${utilStyles.link}`}
                                        href="https://liftz-workout-tracker.vercel.app"
                                        target="_blank"
                                    >
                                        Site
                                    </Link>
                                </h3>
                            </div>
                            <p>May 2023</p>
                            <div
                                className={projectStyles.projectImageContainer}
                            >
                                <Image
                                    priority
                                    src="/images/projects/liftz.png"
                                    height={500}
                                    className={`${utilStyles.borderCircle}`}
                                    width={1590}
                                    alt="picture of liftz website landing page"
                                />
                            </div>
                            <p>
                                liftz is a comprehensive workout tracker built
                                using the <b>MERN</b> stack that includes a
                                workout library, weight calculator, personal
                                record tracker, and calendar to help users
                                efficiently track and manage their workouts.
                            </p>
                            <div
                                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
                            >
                                <span className={projectStyles.technologySpan}>
                                    <small className={projectStyles.technology}>
                                        React
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Next.js
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Chakra UI
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Express
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Passport.js
                                    </small>
                                    <small className={projectStyles.technology}>
                                        MongoDB (Mongoose)
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Figma
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Vercel
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Render
                                    </small>
                                </span>
                            </div>
                        </div>
                    </li>

                    {/* phreview */}
                    <li
                        className={`${projectStyles.project} ${utilStyles.listItem}`}
                    >
                        <div className={projectStyles.projectData}>
                            <h3 className={utilStyles.headingLg}>phreview</h3>
                            <div className={projectStyles.projectLinks}>
                                <h3 className={utilStyles.headingMd}>
                                    {/* TODO: update link */}
                                    <Link
                                        className={`${utilStyles.link}`}
                                        href="https://rekindle.vercel.app/"
                                        target="_blank"
                                    >
                                        Demo
                                    </Link>
                                </h3>
                                {/* <p
                  className={`${utilStyles.headingMd} ${projectStyles.separator}`}
                >
                  <b>|</b>
                </p>
                <h3 className={utilStyles.headingMd}>
                  <Link
                    className={`${utilStyles.link}`}
                    href="https://github.com/rekindle-devs/rekindle"
                    target="_blank"
                  >
                    Repo Link
                  </Link>
                </h3> */}
                            </div>
                            <p>Apr 2023</p>
                            <div
                                className={projectStyles.projectImageContainer}
                            >
                                <Image
                                    priority
                                    src="/images/projects/phreview.png"
                                    height={400}
                                    className={`${utilStyles.borderCircle}`}
                                    width={1590}
                                    alt="picture of phreview Chrome extension"
                                />
                            </div>
                            <p>
                                phreview is a language learning Chrome Extension
                                to help users improve foreign language
                                proficiency via active recall in the form of
                                custom pop quizzes.
                            </p>
                            <div
                                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
                            >
                                <span className={projectStyles.technologySpan}>
                                    <small className={projectStyles.technology}>
                                        Chrome Extension Manifest V3
                                    </small>
                                    <small className={projectStyles.technology}>
                                        HTML
                                    </small>
                                    <small className={projectStyles.technology}>
                                        CSS
                                    </small>
                                    <small className={projectStyles.technology}>
                                        JS
                                    </small>
                                </span>
                            </div>
                        </div>
                    </li>

                    {/* rekindle */}
                    <li
                        className={`${projectStyles.project} ${utilStyles.listItem}`}
                    >
                        <div className={projectStyles.projectData}>
                            <h3 className={utilStyles.headingLg}>rekindle</h3>
                            <div className={projectStyles.projectLinks}>
                                <h3 className={utilStyles.headingMd}>
                                    <Link
                                        className={`${utilStyles.link}`}
                                        href="https://rekindle.vercel.app/"
                                        target="_blank"
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
                                        target="_blank"
                                    >
                                        Repo Link
                                    </Link>
                                </h3>
                            </div>
                            <p>Sept 2022, Apr 2023</p>
                            <div
                                className={projectStyles.projectImageContainer}
                            >
                                <Image
                                    priority
                                    src="/images/projects/rekindle.png"
                                    height={500}
                                    className={`${utilStyles.borderCircle}`}
                                    width={1590}
                                    alt="picture of rekindle website landing page"
                                />
                            </div>
                            <p>
                                rekindle is an online mental health hotline
                                service accessible to both users and hotline
                                responders built at Hack the North 2022, which
                                was my first in-person hackathon.
                            </p>
                            <div
                                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
                            >
                                <span className={projectStyles.technologySpan}>
                                    <small className={projectStyles.technology}>
                                        React
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Firebase
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Next.js
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Chakra UI
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Vercel
                                    </small>
                                </span>
                            </div>
                        </div>
                    </li>

                    {/* LastDash */}
                    <li
                        className={`${projectStyles.project} ${utilStyles.listItem}`}
                    >
                        <div className={projectStyles.projectData}>
                            <h3 className={utilStyles.headingLg}>LastDash</h3>
                            <div className={projectStyles.projectLinks}>
                                <h3 className={utilStyles.headingMd}>
                                    <Link
                                        className={`${utilStyles.link}`}
                                        href="https://meleongg.github.io/lastdash/"
                                        target="_blank"
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
                                        target="_blank"
                                    >
                                        Repo Link
                                    </Link>
                                </h3>
                            </div>
                            <p>Aug 2022</p>
                            <div
                                className={projectStyles.projectImageContainer}
                            >
                                <Image
                                    priority
                                    src="/images/projects/lastdash.png"
                                    height={500}
                                    className={`${utilStyles.borderCircle}`}
                                    width={1590}
                                    alt="picture of lastdash website"
                                />
                            </div>
                            <p>
                                LastDash is a bus-tracking web app that allows
                                users to enter their current address and receive
                                information about nearby bus routes and stops in
                                the Lower Mainland, BC.
                            </p>
                            <div
                                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
                            >
                                <span className={projectStyles.technologySpan}>
                                    <small className={projectStyles.technology}>
                                        React
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Firebase
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Chakra UI
                                    </small>
                                </span>
                            </div>
                        </div>
                    </li>

                    {/* Battleship */}
                    <li
                        className={`${projectStyles.project} ${utilStyles.listItem}`}
                    >
                        <div className={projectStyles.projectData}>
                            <h3 className={utilStyles.headingLg}>Battleship</h3>
                            <div className={projectStyles.projectLinks}>
                                <h3 className={utilStyles.headingMd}>
                                    <Link
                                        className={`${utilStyles.link}`}
                                        href="https://meleongg.github.io/battleship/"
                                        target="_blank"
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
                                        target="_blank"
                                    >
                                        Repo Link
                                    </Link>
                                </h3>
                            </div>
                            <p>May 2022</p>
                            <div
                                className={projectStyles.projectImageContainer}
                            >
                                <Image
                                    priority
                                    src="/images/projects/battleship.png"
                                    height={500}
                                    className={`${utilStyles.borderCircle}`}
                                    width={1590}
                                    alt="picture of battleship website"
                                />
                            </div>
                            <p>
                                A web application version of Hasbro's famous
                                Battleship game.
                            </p>
                            <div
                                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
                            >
                                <span className={projectStyles.technologySpan}>
                                    <small className={projectStyles.technology}>
                                        HTML
                                    </small>
                                    <small className={projectStyles.technology}>
                                        CSS
                                    </small>
                                    <small className={projectStyles.technology}>
                                        JavaScript
                                    </small>
                                    <small className={projectStyles.technology}>
                                        Jest
                                    </small>
                                </span>
                            </div>
                        </div>
                    </li>

                    {/* finnit */}
                    <li
                        className={`${projectStyles.project} ${utilStyles.listItem}`}
                    >
                        <div className={projectStyles.projectData}>
                            <h3 className={utilStyles.headingLg}>finnit</h3>
                            <div className={projectStyles.projectLinks}>
                                <h3 className={utilStyles.headingMd}>
                                    <Link
                                        className={`${utilStyles.link}`}
                                        href="https://meleongg.github.io/finnit/"
                                        target="_blank"
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
                                        target="_blank"
                                    >
                                        Repo Link
                                    </Link>
                                </h3>
                            </div>
                            <p>Apr 2022</p>
                            <div
                                className={projectStyles.projectImageContainer}
                            >
                                <Image
                                    priority
                                    src="/images/projects/finnit.png"
                                    height={500}
                                    className={`${utilStyles.borderCircle}`}
                                    width={1590}
                                    alt="picture of finnit website"
                                />
                            </div>
                            <p>
                                finnit is a todo list application that allows
                                users to create different todo list folders that
                                contain tasks with a name, due date,
                                description, priority rating, notes, and status.
                            </p>
                            <div
                                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
                            >
                                <span className={projectStyles.technologySpan}>
                                    <small className={projectStyles.technology}>
                                        HTML
                                    </small>
                                    <small className={projectStyles.technology}>
                                        CSS
                                    </small>
                                    <small className={projectStyles.technology}>
                                        JavaScript
                                    </small>
                                    <small className={projectStyles.technology}>
                                        localStorage
                                    </small>
                                </span>
                            </div>
                        </div>
                    </li>

                    {/* Quizolingo */}
                    <li
                        className={`${projectStyles.project} ${utilStyles.listItem}`}
                    >
                        <div className={projectStyles.projectData}>
                            <h3 className={utilStyles.headingLg}>Quizolingo</h3>
                            <div className={projectStyles.projectLinks}>
                                <h3 className={utilStyles.headingMd}>
                                    <Link
                                        className={`${utilStyles.link}`}
                                        href="https://github.com/meleongg/quizolingo"
                                        target="_blank"
                                    >
                                        Repo Link
                                    </Link>
                                </h3>
                            </div>
                            <p>Feb 2022 - Apr 2022</p>
                            <div
                                className={projectStyles.projectImageContainer}
                            >
                                <Image
                                    priority
                                    src="/images/projects/quizolingo.png"
                                    height={500}
                                    className={`${utilStyles.borderCircle}`}
                                    width={1590}
                                    alt="picture of Quizolingo website"
                                />
                            </div>
                            <p>
                                Quizolingo is a desktop application with an
                                interactive UI for aspiring polyglots to improve
                                their world language proficiencies in a fun and
                                interactive way.
                            </p>
                            <div
                                className={`${projectStyles.technologies} ${utilStyles.listItem}`}
                            >
                                <span className={projectStyles.technologySpan}>
                                    <small className={projectStyles.technology}>
                                        Java
                                    </small>
                                    <small className={projectStyles.technology}>
                                        JUnit
                                    </small>
                                    <small className={projectStyles.technology}>
                                        JSwing
                                    </small>
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </Layout>
    );
}
