import styles from "./work.module.scss";

export default function Work({ logo, title, tag, shortDescription, demo }) {
  return (
    <section className={styles.work}>
      {/* <h1>{title ?? "Company Name"}</h1> */}
      <img src={logo} />
      <div className={styles.content}>
        <div className={styles.meta}>
          <h4 className={styles.tag}>{tag ?? "One line tag"}</h4>
          <div className={styles.description}>
            {shortDescription ?? "Short Description"}
          </div>
          <div>Links to more</div>
        </div>
        <div className={styles.visuals}>
          <img src={demo} />
        </div>
      </div>
    </section>
  );
}
