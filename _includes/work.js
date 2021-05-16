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
  linkText2,
  linkText3,
  destination,
  destination2,
  destination3,
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

          <div className={styles.buttons}>
            {linkText ? (
              <a className={styles.secondary} href={destination}>
                {linkText}
              </a>
            ) : null}
            {linkText2 ? (
              <a className={styles.secondary} href={destination2}>
                {linkText2}
              </a>
            ) : null}
            {linkText3 ? (
              <a className={styles.secondary} href={destination3}>
                {linkText3}
              </a>
            ) : null}
          </div>
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
