import styles from "./work.module.scss";

export default function Work({
  logo,
  svg,
  title,
  tag,
  date,
  shortDescription,
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
          {date && <h4 className={styles.date}>{date}</h4>}
          <div className={styles.shortDescription}>
            {shortDescription ?? "Short Description"}
          </div>
          {/* <div>Links to more</div> */}
        </div>
        <div className={styles.visuals}>
          <img src={demo} />
          <>{svgContent}</>
        </div>
      </div>
    </section>
  );
}
