import styles from "./footer.module.scss";
import Link from "next/link";

// _includes/footer.js
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <ul>
            <li>
              <a href="https://twitter.com/syeefk" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/syeef" target="_blank">
                Dribbble
              </a>
            </li>
            <li>
              <a href="https://github.com/syeef" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://uk.linkedin.com/in/syeefkarim/" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/notes">
                <a>Notes</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
