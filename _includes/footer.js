import styles from "./footer.module.scss";

// _includes/footer.js
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <span className={styles.title}>Socials</span>
          <ul>
            <li>
              Twitter:{" "}
              <a href="https://twitter.com/syeefk" target="_blank">
                @syeefk
              </a>
            </li>
            <li>
              Dribbble:{" "}
              <a href="https://dribbble.com/syeef" target="_blank">
                syeef
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/syeef" target="_blank">
                syeef
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://uk.linkedin.com/in/syeefkarim/" target="_blank">
                Syeef Karim
              </a>
            </li>
          </ul>
        </div>

        <div>
          <span className={styles.title}>Recent Posts</span>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Articles</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <span className={styles.title}>Navigation</span>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Articles</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div>
        <p>💨 & ☕️</p>
      </div>
    </footer>
  );
}
