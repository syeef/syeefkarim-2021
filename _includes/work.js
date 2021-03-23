import Link from "next/link";
import styles from "./work.module.scss";

export default function Work({
  logo,
  svg,
  title,
  tag,
  date,
  shortDescription,
  linkText,
  detination,
  demo,
  svgContent,
}) {
  return (
    <section className={styles.work}>
      <div className={styles.content}>
        <div className={styles.meta}>
          {/* <img className={styles.logoStyle} src={logo} /> */}
          <div className={styles.logoStyle}>{svg}</div>
          <h4 className={styles.tag}>{tag ?? "One line tag"}</h4>
          {date && <span className={styles.date}>{date}</span>}
          <div className={styles.shortDescription}>
            {shortDescription ?? "Short Description"}
          </div>
          {linkText ? (
            <>
              <Link href={detination}>
                <a className={styles.link}>{linkText}</a>
              </Link>
            </>
          ) : null}
        </div>

        {demo ? (
          <>
            <div className={styles.visuals}>
              <img src={demo} />
              <>{svgContent}</>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
