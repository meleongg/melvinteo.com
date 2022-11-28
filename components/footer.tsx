import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import footerStyles from "../styles/footer.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={footerStyles.footer}>
            <p>Melvin Teo @ 2022</p>
            <div className={footerStyles.socials}>
                <Link href="mailto:mthteo@gmail.com">
                    <FontAwesomeIcon className={footerStyles.socialIcon} icon={faEnvelope} />
                </Link>
                <Link href="https://github.com/meleongg">
                    <FontAwesomeIcon className={footerStyles.socialIcon} icon={faGithub} />
                </Link>
                <Link href="https://www.linkedin.com/in/melvinhteo/">
                    <FontAwesomeIcon className={footerStyles.socialIcon} icon={faLinkedinIn} />
                </Link>
                <Link href="https://twitter.com/meleongg">
                    <FontAwesomeIcon className={footerStyles.socialIcon} icon={faTwitter} />
                </Link>
            </div>
        </footer>
    )
}