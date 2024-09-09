import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import footerStyles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <p>Melvin Teo @ 2024</p>
      <div className={footerStyles.socials}>
        <Link href="mailto:mthteo@gmail.com" target="_blank">
          <FontAwesomeIcon
            className={footerStyles.socialIcon}
            icon={faEnvelope}
          />
        </Link>
        <Link href="https://github.com/meleongg" target="_blank">
          <FontAwesomeIcon
            className={footerStyles.socialIcon}
            icon={faGithub}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/melvinhteo/" target="_blank">
          <FontAwesomeIcon
            className={footerStyles.socialIcon}
            icon={faLinkedinIn}
          />
        </Link>
        <Link href="https://twitter.com/meleongg" target="_blank">
          <FontAwesomeIcon
            className={footerStyles.socialIcon}
            icon={faTwitter}
          />
        </Link>
      </div>
    </footer>
  );
}
