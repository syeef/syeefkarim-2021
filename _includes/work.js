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
  altText,
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
          {/* {linkText ? (
            <>
              <Link href={detination}>
                <a className={styles.link}>{linkText}</a>
              </Link>
            </>
          ) : null} */}
          {linkText ? (
            <>
              <a href={detination}>
                <button className={styles.secondary}>{linkText}</button>
              </a>
            </>
          ) : null}
        </div>

        {demo ? (
          <>
            <div className={styles.visuals}>
              <img src={demo} alt={altText ?? "Demo Image"} />
              <>{svgContent}</>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
