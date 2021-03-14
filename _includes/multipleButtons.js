import Link from "next/link";
import styles from "./multipleButtons.module.scss";

export default function MultipleButtons() {
  return (
    <section className={styles.groupedButtons}>
      <Link href="/about">
        <a>
          <button className={styles.primary}>About me</button>
        </a>
      </Link>
      <a href="https://twitter.com/syeefk" target="_blank">
        <button className={styles.secondary}>Follow me on Twitter</button>
      </a>
    </section>
  );
}
