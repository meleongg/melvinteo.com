import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import navbarStyles from "../styles/navbar.module.css";
import utilStyles from "../styles/utils.module.css";

export default function NavBar({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: any;
}) {
  return (
    <nav className={`${navbarStyles.nav}`}>
      <div className={navbarStyles.logo}>
        <Link className={utilStyles.link} href="/">
          mthteo.xyz
        </Link>
      </div>
      <ul className={`${navbarStyles.navLinks}`}>
        <li className={navbarStyles.navLink}>
          <Link className={utilStyles.link} href="/experiences">
            experience
          </Link>
        </li>
        <li className={navbarStyles.navLink}>
          <Link className={utilStyles.link} href="/projects">
            projects
          </Link>
        </li>
        <li className={navbarStyles.navLink}>
          <Link className={utilStyles.link} href="/posts">
            blog
          </Link>
        </li>
      </ul>
      <FontAwesomeIcon
        className={navbarStyles.mode}
        icon={theme == "dark" ? faMoon : faSun}
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      />
    </nav>
  );
}
