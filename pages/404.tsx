import Link from "next/link";
import errorStyles from "../styles/404.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <div className={`${errorStyles.container}`}>
      <h1>404: Page Not Found</h1>
      <h2>Sorry! This page doesn't exist!</h2>
      <Link className={utilStyles.link} href="/">
        Back to home
      </Link>
    </div>
  );
}
